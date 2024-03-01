import urlBuilder from "@sanity/image-url"
import { ParallaxBanner } from "react-scroll-parallax"
import slugify from "react-slugify"

import { cleanStega, cn } from "~/lib/utils"
import { dataset, projectId } from "~/sanity/projectDetails"
import type { FullWidthImageProps } from "~/types/modules"

import { Spacer } from "../ui/spacer"

export default function FullWidthImage({
  image,
  submenuTitle,
  imageSize = "Medium",
  topSpacing,
  bottomSpacing,
}: FullWidthImageProps) {
  const imageUrl = image?.blackAndWhite
    ? urlBuilder({ dataset, projectId }).image(image).saturation(-100).url()
    : urlBuilder({ dataset, projectId }).image(image).url()

  const topSpacer = topSpacing ? topSpacing : "sm"
  const bottomSpacer = bottomSpacing ? bottomSpacing : "sm"

  return (
    <>
      <Spacer size={topSpacer} />
      <section
        id={submenuTitle ? slugify(submenuTitle) : undefined}
        className="relative scroll-mt-10"
      >
        <ParallaxBanner
          layers={[
            {
              image: imageUrl,
              speed: -15,
            },
          ]}
          className={cn({
            "h-80 sm:h-[480px]": cleanStega(imageSize) === "Small",
            "h-96  md:h-[620px]": cleanStega(imageSize) === "Medium",
            "h-120 sm:h-[800px]": cleanStega(imageSize) === "Large",
          })}
        />
      </section>
      <Spacer size={bottomSpacer} />
    </>
  )
}
