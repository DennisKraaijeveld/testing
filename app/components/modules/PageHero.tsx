import { Link } from "@remix-run/react"
import urlBuilder from "@sanity/image-url"
import { useMemo } from "react"

import { cleanStega, cn } from "~/lib/utils"
import { dataset, projectId } from "~/sanity/projectDetails"
import type { PageHeroProps } from "~/types/modules"

import { ButtonArrow } from "../icons/ButtonArrow"
import { Button } from "../ui/button"

export default function PageHero({
  subtitle,
  title,
  highlightedText,
  opacity,
  text,
  buttons,
  image,
  heroSize = "small",
}: PageHeroProps) {
  let bgImage

  if (image) {
    bgImage = image.blackAndWhite
      ? urlBuilder({ projectId, dataset }).image(image).saturation(-100).url()
      : urlBuilder({ projectId, dataset }).image(image).url() || ""
  }

  const highlightTitle = (title: string, highlight: string) => {
    if (!highlight) return title

    const parts = title.split(new RegExp(`(${highlight})`, "gi"))
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} className="text-primary-dark">
          {part}
        </span>
      ) : (
        part
      ),
    )
  }

  const heroTitle = useMemo(() => {
    return (
      <h1 className="mb-2 text-content-light">
        {highlightTitle(title ?? "", highlightedText ?? "")}
      </h1>
    )
  }, [title, highlightedText])

  return (
    <>
      <section
        className={cn(
          "bg-cover bg-no-repeat bg-center relative",
          cleanStega(heroSize) == "small" ? "h-[400px]" : "h-[640px]",
        )}
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: opacity ? opacity / 100 : 0.4 ?? 0.4 }}
        ></div>
        <div className="container isolate h-full">
          <div className="flex flex-col items-center justify-center text-center text-content-light max-w-4xl mx-auto z-10 h-full">
            <h6 className="text-content-light uppercase">{subtitle}</h6>
            {heroTitle}
            <p className="mb-4 text-content-light">{text}</p>
            {buttons && buttons.length > 0 && (
              <div className="flex space-x-4">
                {buttons.map((button) => (
                  <Link key={button._key} to={button?.link.slug || "/"}>
                    <Button variant="secondary" key={button._key}>
                      <span>{button.link.title}</span>
                      <ButtonArrow />
                    </Button>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
