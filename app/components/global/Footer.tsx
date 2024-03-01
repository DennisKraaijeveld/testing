import { Logo } from "~/components/Logo"
import type { FooterSchema, SocialLinkSchema } from "~/types/settings"

import { Badge } from "../ui/badge"
import { InputWithButton } from "../ui/input"
import FooterBlock from "./FooterBlock"

export function Footer({
  data,
  socialLinks,
}: {
  data: FooterSchema | undefined
  socialLinks: SocialLinkSchema[] | undefined | null
}) {
  const firstTwoBlocks = data?.blocks?.slice(0, 2)
  const lastTwoBlocks = data?.blocks?.slice(2, 4)

  return (
    <footer aria-labelledby="footer-heading" className="my-10">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container">
        <div className="xl:grid xl:grid-cols-12 xl:gap-10">
          <div className="space-y-8 col-span-4">
            <div className="w-60">
              <Logo />
            </div>

            <div className="flex space-x-2 flex-wrap">
              {socialLinks &&
                socialLinks.length > 0 &&
                socialLinks.map((item) => (
                  <a
                    key={item._key}
                    href={item.url || "/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge key={item.name} variant="default">
                      {item.name}
                    </Badge>
                  </a>
                ))}
            </div>
            <div>
              <InputWithButton
                onButtonClick={() => console.log("test email sending")}
                placeholder="Enter your email"
              />
              <p className="text-xs mt-4">
                Subscribe to our email alerts for early notifications on Special
                Retreats and Local events. Rest assured, we won't fill your
                inbox with advertising or frequent blog post updates.
              </p>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-10 xl:col-span-7 xl:mt-0 xl:col-start-6">
            <div className="md:grid md:grid-cols-4 md:gap-10 space-y-10 md:space-y-0">
              {firstTwoBlocks &&
                firstTwoBlocks.length > 0 &&
                firstTwoBlocks.map((block) => {
                  return <FooterBlock block={block} key={block._key} />
                })}
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {lastTwoBlocks &&
                lastTwoBlocks.length > 0 &&
                lastTwoBlocks.map((block) => {
                  return <FooterBlock block={block} key={block._key} />
                })}
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-sm text-primary-grey-dark uppercase tracking-wide">
            &copy; {new Date().getFullYear()} Luminous Life Care Ltd. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
