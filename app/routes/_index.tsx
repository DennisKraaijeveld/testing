import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node"
import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"

import ModuleGrid from "~/components/modules/ModuleGrid"
import type { Loader as RootLoader } from "~/root"
import { useQuery } from "~/sanity/loader"
import { loadQuery } from "~/sanity/loader.server"
import { isStegaEnabled } from "~/sanity/projectDetails"
import { HOME_QUERY } from "~/sanity/queries"
import { type HomeDocument, homeZ } from "~/types/home"

import { OG_IMAGE_HEIGHT, OG_IMAGE_WIDTH } from "./resource.og"

export const meta: MetaFunction<
  typeof loader,
  {
    root: RootLoader
  }
> = ({ data }) => {
  const title = [data?.initial?.data?.seo?.seoTitle].filter(Boolean).join(" | ")
  const description = data ? data?.initial?.data?.seo?.seoDescription : null
  const ogImageUrl = data ? data.ogImageUrl : null

  // TODO: Create SEO Image entry in Document?

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

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const stegaEnabled = isStegaEnabled(request.url)

  const initial = await loadQuery<HomeDocument[]>(
    HOME_QUERY,
    {},
    {
      perspective: stegaEnabled ? "previewDrafts" : "published",
    },
  ).then((res) => ({
    ...res,
    data: res.data ? homeZ.parse(res.data) : null,
  }))

  if (!initial.data) {
    throw new Response("Not found", { status: 404, statusText: "Not Found" })
  }

  const { origin } = new URL(request.url)
  const ogImageUrl = `${origin}/resource/og?id=${initial.data._id}`

  return json({
    initial,
    query: HOME_QUERY,
    params: {},
    ogImageUrl,
  })
}

export default function Index() {
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
      {data.pageBuilder && (
        <ModuleGrid items={data.pageBuilder} subMenuData={data.submenu} />
      )}
    </main>
  )
}
