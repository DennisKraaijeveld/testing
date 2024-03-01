import { type PropsWithChildren } from "react"

import { Footer } from "~/components/global/Footer"
import { Header } from "~/components/global/Header"
import type { LinkProps } from "~/types/settings"

export type LayoutProps = PropsWithChildren<LinkProps>

export function Layout({ settings, children }: LayoutProps) {
  return (
    <>
      <Header navigation={settings?.menu?.links || []} />
      <div>{children}</div>
      <Footer data={settings?.footer} socialLinks={settings?.socialLinks} />
    </>
  )
}
