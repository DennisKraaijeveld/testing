import { Link } from "@remix-run/react"
import slugify from "react-slugify"

import type { CallToActionProps } from "~/types/modules"

import { ButtonArrow } from "../icons/ButtonArrow"
import { Button } from "../ui/button"
import { Spacer } from "../ui/spacer"

export default function CTA({
  title,
  subtitle,
  button,
  submenuTitle,
  topSpacing,
  bottomSpacing,
}: CallToActionProps) {
  const topSpacer = topSpacing ? topSpacing : "sm"
  const bottomSpacer = bottomSpacing ? bottomSpacing : "sm"
  return (
    <>
      <Spacer size={topSpacer} />
      <section
        id={submenuTitle ? slugify(submenuTitle) : undefined}
        className="bg-content-light scroll-mt-10"
      >
        <div className="container py-24 md:flex md:items-center md:justify-between">
          <div className="flex flex-col">
            <p>{subtitle}</p>
            <h2>{title}</h2>
          </div>
          <div className="mt-10 flex items-center gap-x-6 md:mt-0 md:flex-shrink-0">
            <Link to={button?.link.slug || "/"}>
              <Button>
                <span>{button?.link.title}</span>
                <ButtonArrow />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Spacer size={bottomSpacer} />
    </>
  )
}
