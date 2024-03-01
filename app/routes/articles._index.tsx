import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node"
import { json } from "@remix-run/node"
import { useLoaderData, useSearchParams } from "@remix-run/react"

import BlogCard from "~/components/blog/BlogCard"
import PageHero from "~/components/modules/PageHero"
import { Spacer } from "~/components/ui/spacer"
import type { Loader as RootLoader } from "~/root"
import { SEO } from "~/sanity/fragments"
import { useQuery } from "~/sanity/loader"
import { loadQuery } from "~/sanity/loader.server"
import { isStegaEnabled } from "~/sanity/projectDetails"
import { BLOG_OVERVIEW_QUERY } from "~/sanity/queries"
import type { BlogOverviewDocument } from "~/types/blog"
import { blogOverviewZ } from "~/types/blog"

export const meta: MetaFunction<
  typeof loader,
  {
    root: RootLoader
  }
> = ({ data }) => {
  const title = [data?.initial?.data?.seo?.seoTitle].filter(Boolean).join(" | ")
  const description = data ? data?.initial?.data?.seo?.seoDescription : null

  return [
    { title },
    {
      name: "description",
      content: description,
    },
  ]
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url)
  const categoryFilter = url.searchParams.get("filter")

  let query = BLOG_OVERVIEW_QUERY
  if (categoryFilter) {
    query = `*[_type == "blogOverview"][0]{
      _id,
      _type,
      title,
      "hero": hero {
        subtitle,
        title,
        text,
        "image": featuredImage,
      },
      "filters": *[_type == "blogCategories"] {
        _id,
        title,
      },  
      "blogs": *[_type == "blog" && "${categoryFilter}" in categories[]->title]|order(publishedAt desc)[0...12] {
        _id,
        _type,
        title,
        featuredImage {
          _type,
          asset -> {
            ...,
          },
          crop,
          hotspot,
          alt,
          blackAndWhite
        },
        "slug": slug.current,
        "excerpt": array::join(string::split((pt::text(content)), "")[0..255], "") + "...",
        "categories": categories[]->title,
      },
      ${SEO}
    }`
  }

  const stegaEnabled = isStegaEnabled(request.url)

  const initial = await loadQuery<BlogOverviewDocument[]>(
    query,
    {},
    {
      perspective: stegaEnabled ? "previewDrafts" : "published",
    },
  ).then((res) => ({
    ...res,
    data: res.data ? blogOverviewZ.parse(res.data) : null,
  }))

  if (!initial.data) {
    throw new Response("Not found", { status: 404 })
  }

  return json({
    initial,
    query: BLOG_OVERVIEW_QUERY,
    params: {},
  })
}

export default function BlogIndex() {
  const [searchParams] = useSearchParams()

  const { initial, query, params } = useLoaderData<typeof loader>()
  const { data, loading } = useQuery<typeof initial.data>(query, params, {
    // @ts-ignore
    initial,
  })

  if (loading || !data) {
    return <div>Loading...</div>
  }

  const activeFilter = searchParams.get("filter")

  return (
    <main>
      <PageHero
        {...{
          _key: "pageHero",
          _type: "module.pageHero",
          subtitle: data.hero?.subtitle ?? "",
          title: data.hero?.title ?? "",
          text: data.hero?.text ?? "",
          image: data.hero?.image,
          buttons: [],
          highlightedText: "",
          opacity: 40,
        }}
      />

      <div className="bg-[#D5D9D9] sticky top-[116px] inset-x-0 z-[2000]">
        <div className="container py-4">
          <div className="flex overflow-x-scroll space-x-6 font-header text-center w-full justify-center scrollbar-hide">
            <a
              href="/articles"
              className={`hover:opacity-100 transition-opacity duration-150 ${
                !activeFilter ? "font-semibold" : ""
              }`}
            >
              All articles
            </a>
            {data.filters && data.filters.length > 0 && (
              <>
                {data.filters.map((filter: { _id: string; title: string }) => (
                  <a
                    key={filter._id}
                    href={`/articles?filter=${filter.title}`}
                    className={`opacity-80 hover:opacity-100 transition-opacity duration-150 ${
                      filter.title === activeFilter ? "font-semibold" : ""
                    }`}
                  >
                    {filter.title}
                  </a>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      <Spacer size="lg" />
      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-6">
          {data.blogs && data.blogs.length > 0 ? (
            data.blogs.map((blog) => <BlogCard key={blog._id} {...blog} />)
          ) : (
            <div>
              <h2>No results</h2>
            </div>
          )}
        </div>
      </section>
      <Spacer size="lg" />
    </main>
  )
}
