import urlBuilder from "@sanity/image-url"
import { Fade } from "react-awesome-reveal"
import slugify from "react-slugify"

import { dataset, projectId } from "~/sanity/projectDetails"
import type { LogoCloudProps } from "~/types/modules"

import { Spacer } from "../ui/spacer"

export default function LogoCloud({
  logos,
  submenuTitle,
  topSpacing,
  bottomSpacing,
}: LogoCloudProps) {
  const topSpacer = topSpacing ? topSpacing : "sm"
  const bottomSpacer = bottomSpacing ? bottomSpacing : "sm"
  return (
    <>
      <Spacer size={topSpacer} />
      <section
        id={submenuTitle ? slugify(submenuTitle) : undefined}
        className="container scroll-mt-10"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 gap-y-4 lg:gap-y-14">
          <Fade cascade duration={400} triggerOnce>
            {logos &&
              logos.length &&
              logos.map((logo) => {
                const logoUrl = logo.blackAndWhite
                  ? urlBuilder({ projectId, dataset })
                      .image(logo.asset)
                      .saturation(-100)
                      .url()
                  : urlBuilder({ projectId, dataset })
                      .image(logo.asset)
                      .url() || ""

                return (
                  <div
                    key={logo._key}
                    className="col-span-1 flex items-center h-full justify-center"
                  >
                    <img
                      className="lg:w-44 h-auto object-contain w-28"
                      src={logoUrl}
                      alt={logo?.alt || ""}
                    />
                  </div>
                )
              })}
          </Fade>
        </div>
      </section>
      <Spacer size={bottomSpacer} />
    </>
  )
}
