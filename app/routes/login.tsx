import type { LoaderFunctionArgs } from "@remix-run/node"
import { json } from "@remix-run/node"
import type { MetaFunction } from "@remix-run/react"

import { UserAuthForm } from "~/components/global/AuthForm"
import type { Loader as RootLoader } from "~/root"

export const meta: MetaFunction<
  typeof loader,
  {
    root: RootLoader
  }
> = () => {
  const title = "Login - Luminous Life"
  const description = "Login to your Luminous Life account."

  return [
    { title },
    { property: "description", content: description },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:title", content: title },
    { property: "og:title", content: title },
  ]
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return json({
    params: {},
  })
}

export default function Login() {
  return (
    <main>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-secondary-accent lg:flex dark:border-r">
          <div className="absolute inset-0 bg-secondary-accent/20" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            Luminous Life
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Luminous Life's holistic support was a beacon during my
                cancer treatment. Their care harmonized with my medical regimen,
                bringing comfort and balance to my journey. I'm deeply grateful
                for their compassionate presence every step of the way.&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
              <p className="text-sm text-muted-foreground">
                Enter your email and password to login to your account.
              </p>
            </div>
            <UserAuthForm />
          </div>
        </div>
      </div>
    </main>
  )
}
