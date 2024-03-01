import { Link } from "@remix-run/react"
import urlBuilder from "@sanity/image-url"
import { Fade, Slide } from "react-awesome-reveal"
import slugify from "react-slugify"

import { cleanStega, cn } from "~/lib/utils"
import { dataset, projectId } from "~/sanity/projectDetails"
import type { ContentImageProps } from "~/types/modules"

import { ButtonArrow } from "../icons/ButtonArrow"
import PortableText from "../portableText/PortableText"
import { Button } from "../ui/button"
import { Spacer } from "../ui/spacer"

export default function ContentImage({
  image,
  subtitle,
  title,
  text,
  button,
  backgroundColor,
  alignment,
  submenuTitle,
  topSpacing,
  bottomSpacing,
  backgroundColorCode,
}: ContentImageProps) {
  const alignmentClassContent =
    cleanStega(alignment) === "imageRight" ? "order-1" : "order-2"

  const alignmentClassImage =
    cleanStega(alignment) === "imageRight" ? "order-2" : "order-1"

  const imageUrl = image.blackAndWhite
    ? urlBuilder({ projectId, dataset }).image(image).saturation(-100).url()
    : urlBuilder({ projectId, dataset }).image(image).url() || ""

  const topSpacer = topSpacing ? topSpacing : "sm"
  const bottomSpacer = bottomSpacing ? bottomSpacing : "sm"

  const bgColorClass = backgroundColor
    ? `bg-[${cleanStega(backgroundColorCode)}] scroll-mt-10`
    : "scroll-mt-10"

  return (
    <>
      <Spacer size={topSpacer} />
      <section
        id={submenuTitle ? slugify(submenuTitle) : undefined}
        className={cn(bgColorClass)}
      >
        <div className={cn("flex gap-10 py-10 container")}>
          <div className="mx-auto grid grid-cols-1 gap-x-10 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className={cn("self-center", alignmentClassContent)}>
              <div>
                <Fade duration={400} cascade triggerOnce>
                  {subtitle && (
                    <span className="uppercase text-content opacity-70">
                      {subtitle}
                    </span>
                  )}
                  {title && <h2 className="my-2">{title}</h2>}
                  {text && <PortableText blocks={text} className="prose" />}
                  {button && (
                    <div className="mt-6">
                      <Link to={button.link.slug}>
                        <Button variant="default">
                          <span>{button.link.title}</span>
                          <ButtonArrow />
                        </Button>
                      </Link>
                    </div>
                  )}
                </Fade>
              </div>
            </div>
            {imageUrl && (
              <Slide direction="up" triggerOnce duration={1200}>
                <Fade duration={1300} triggerOnce>
                  <img
                    src={imageUrl}
                    alt={image.asset.altText || ""}
                    loading="lazy"
                    className={cn(
                      "w-full aspect-square object-cover lg:-mt-20",
                      alignmentClassImage,
                    )}
                    width={2432}
                    height={1442}
                  />
                </Fade>
              </Slide>
            )}
          </div>
        </div>
      </section>
      <Spacer size={bottomSpacer} />
    </>
  )
}
