import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node"
import { json } from "@remix-run/node"
import {
  isRouteErrorResponse,
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteError,
} from "@remix-run/react"
import { lazy, Suspense } from "react"
import { ParallaxProvider } from "react-scroll-parallax"

import { useQuery } from "~/sanity/loader"
import { loadQuery } from "~/sanity/loader.server"
import { frontendUrl, isStegaEnabled, studioUrl } from "~/sanity/projectDetails"
import { SETTINGS_QUERY } from "~/sanity/queries"
import styles from "~/tailwind.css"

import { Layout } from "./components/global/Layout"
import { ButtonArrow } from "./components/icons/ButtonArrow"
import { Button } from "./components/ui/button"
import { useRootLoaderData } from "./lib/useRootLoaderData"
import type { SettingsDocument } from "./types/settings"
import { settingsZ } from "./types/settings"

const VisualEditing = lazy(
  () => import("~/components/sanity-presentation/VisualEditing"),
)

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "preconnect", href: "https://cdn.sanity.io" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
      crossOrigin: "anonymous",
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Allison&display=swap",
      rel: "stylesheet",
    },
  ]
}

export type Loader = typeof loader

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const stegaEnabled = isStegaEnabled(request.url)

  const { pathname } = new URL(request.url)

  // Sanity content reused throughout the site
  const initial = await loadQuery<SettingsDocument>(
    SETTINGS_QUERY,
    {},
    {
      perspective: stegaEnabled ? "previewDrafts" : "published",
    },
  ).then((res) => ({
    ...res,
    data: res.data ? settingsZ.parse(res.data) : undefined,
  }))

  return json({
    initial,
    query: SETTINGS_QUERY,
    params: {},
    sanity: {
      isStudioRoute: pathname.startsWith("/studio"),
      stegaEnabled,
    },
    ENV: {
      SANITY_STUDIO_PROJECT_ID: process.env.SANITY_STUDIO_PROJECT_ID!,
      SANITY_STUDIO_DATASET: process.env.SANITY_STUDIO_DATASET!,
      SANITY_STUDIO_API_VERSION: process.env.SANITY_STUDIO_API_VERSION!,
      // URL of the Frontend that will be loaded into Presentation
      SANITY_FRONTEND_URL: frontendUrl,
      // URL of the Studio to allow requests from Presentation
      SANITY_STUDIO_URL: studioUrl,
    },
  })
}

export default function App() {
  const { initial, query, params, sanity, ENV } = useLoaderData<typeof loader>()
  const { data, loading } = useQuery<typeof initial.data>(query, params, {
    // @ts-expect-error
    initial,
  })

  return (
    <html lang="en">
      <head>
        <Meta />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="https://fav.farm/🤘" />
        <Links />
      </head>
      <ParallaxProvider>
        <body>
          {sanity.isStudioRoute ? (
            <Outlet />
          ) : (
            <>
              <Layout settings={loading || !data ? initial.data : data}>
                <Outlet />
              </Layout>
            </>
          )}
          <ScrollRestoration />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.ENV = ${JSON.stringify(ENV)}`,
            }}
          />
          <Scripts />
          <LiveReload />
          {!sanity.isStudioRoute && sanity.stegaEnabled ? (
            <Suspense>
              <VisualEditing studioUrl={ENV.SANITY_STUDIO_URL} />
            </Suspense>
          ) : null}
        </body>
      </ParallaxProvider>
    </html>
  )
}

export function ErrorBoundary() {
  const error = useRouteError()
  const root = useRootLoaderData()

  const rootData = root.initial.data
  return (
    <html lang="en">
      <head>
        <Meta />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Oops!</title>
        <Links />
      </head>
      <body>
        <Layout settings={rootData}>
          <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
              <p className="font-subtitle">
                {isRouteErrorResponse(error)
                  ? `${error.status}`
                  : error instanceof Error
                    ? error.message
                    : "Unknown Error"}
              </p>
              <h1 className="mt-4 sm:text-5xl">
                {isRouteErrorResponse(error)
                  ? `${error.statusText}`
                  : error instanceof Error
                    ? error.message
                    : "Unknown Error"}
              </h1>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Sorry, we couldn’t find the page you’re looking for.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link to="/">
                  <Button>
                    <span>Go back home</span>
                    <ButtonArrow />
                  </Button>
                </Link>
              </div>
            </div>
          </main>
        </Layout>
        <Scripts />
      </body>
    </html>
  )
}
