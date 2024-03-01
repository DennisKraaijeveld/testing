import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node"
import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"

import BlogHero from "~/components/blog/BlogHero"
import RelatedPosts from "~/components/blog/RelatedPosts"
import { FacebookIcon } from "~/components/icons/FacebookIcon"
import LinkIcon from "~/components/icons/LinkIcon"
import { TwitterIcon } from "~/components/icons/TwitterIcon"
import PortableText from "~/components/portableText/PortableText"
import { Button } from "~/components/ui/button"
import { Spacer } from "~/components/ui/spacer"
import {
  copyLinkToClipboard,
  shareOnFacebook,
  shareOnTwitter,
} from "~/lib/utils"
import type { Loader as RootLoader } from "~/root"
import { OG_IMAGE_HEIGHT, OG_IMAGE_WIDTH } from "~/routes/resource.og"
import { useQuery } from "~/sanity/loader"
import { loadQuery } from "~/sanity/loader.server"
import { isStegaEnabled } from "~/sanity/projectDetails"
import { BLOG_QUERY } from "~/sanity/queries"
import type { BlogDocument } from "~/types/blog"
import { blogZ } from "~/types/blog"

export const meta: MetaFunction<
  typeof loader,
  {
    root: RootLoader
  }
> = ({ data }) => {
  const title = [data?.initial?.data?.seo?.seoTitle].filter(Boolean).join(" | ")
  const description = data ? data?.initial?.data?.seo?.seoDescription : null
  const ogImageUrl = data ? data.ogImageUrl : null

  return [
    { title },
    { property: "description", content: description },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:title", content: title },
    { property: "og:title", content: title },
    { property: "og:image:width", content: String(OG_IMAGE_WIDTH) },
    { property: "og:image:height", content: String(OG_IMAGE_HEIGHT) },
    { property: "og:image", content: ogImageUrl },
  ]
}

// Load the `page` document with this slug
export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  const stegaEnabled = isStegaEnabled(request.url)

  // Params from the loader uses the filename
  // $slug.tsx has the params { slug: 'hello-world' }
  const initial = await loadQuery<BlogDocument>(BLOG_QUERY, params, {
    perspective: stegaEnabled ? "previewDrafts" : "published",
  }).then((res) => ({ ...res, data: res.data ? blogZ.parse(res.data) : null }))

  if (!initial.data) {
    throw new Response("Not found", { status: 404 })
  }

  // Create social share image url
  const { origin } = new URL(request.url)
  const ogImageUrl = `${origin}/resource/og?id=${initial.data._id}`

  return json({
    initial,
    query: BLOG_QUERY,
    params,
    ogImageUrl,
  })
}

export default function BlogPage() {
  const { initial, query, params } = useLoaderData<typeof loader>()
  const { data, loading } = useQuery<typeof initial.data>(query, params, {
    // @ts-ignore
    initial,
  })

  if (loading || !data) {
    return <div>Loading...</div>
  }

  return (
    <main>
      <BlogHero hero={data.hero} />
      <Spacer size="md" />
      {data.content && (
        <div className="grid grid-cols-10 gap-10 container relative">
          <div className="col-span-1 sticky top-20 mt-4">
            <div className="flex flex-col items-center space-y-4">
              <h5 className="text-sm font-medium font-subtitle uppercase">
                Share
              </h5>
              <Button
                onClick={() => shareOnFacebook(window.location.href)}
                variant="secondary"
                className="rounded-sm"
                size="icon"
              >
                <FacebookIcon />
              </Button>
              <Button
                onClick={() =>
                  shareOnTwitter(
                    window.location.href,
                    "I want to share this blog post with you!",
                  )
                }
                variant="secondary"
                className="rounded-sm"
                size="icon"
              >
                <TwitterIcon />
              </Button>
              <Button
                onClick={() => copyLinkToClipboard(window.location.href)}
                variant="secondary"
                className="rounded-sm"
                size="icon"
              >
                <LinkIcon />
              </Button>
            </div>
          </div>
          <article key={data._id} className="col-start-2 col-span-8">
            <PortableText
              blocks={data.content}
              className="prose mx-auto max-w-6xl"
            />
          </article>
        </div>
      )}
      <Spacer size="lg" />
      {data.relatedPosts && data.relatedPosts.length > 0 && (
        <RelatedPosts posts={data.relatedPosts} />
      )}
    </main>
  )
}
