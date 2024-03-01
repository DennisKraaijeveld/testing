import { Link } from "@remix-run/react"
import slugify from "react-slugify"

import type { ContentAccordionProps } from "~/types/modules"

import { ButtonArrow } from "../icons/ButtonArrow"
import PortableText from "../portableText/PortableText"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"
import { Button } from "../ui/button"
import { Spacer } from "../ui/spacer"

export default function ContentAccordion({
  subtitle,
  title,
  button,
  accordionItems,
  submenuTitle,
  topSpacing,
  bottomSpacing,
}: ContentAccordionProps) {
  const topSpacer = topSpacing ? topSpacing : "sm"
  const bottomSpacer = bottomSpacing ? bottomSpacing : "sm"
  return (
    <>
      <Spacer size={topSpacer} />
      <section
        id={submenuTitle ? slugify(submenuTitle) : undefined}
        className="scroll-mt-10"
      >
        <div className="flex gap-10 py-10 container lg:flex-row flex-col">
          <div className="lg:w-1/2 flex-shrink-0">
            {subtitle && (
              <span className="uppercase text-content opacity-70">
                {subtitle}
              </span>
            )}
            {title && <h2 className="my-2">{title}</h2>}
            {button && (
              <div className="mt-8">
                <Link to={button.link.slug}>
                  <Button variant="default">
                    <span>{button.link.title}</span>
                    <ButtonArrow />
                  </Button>
                </Link>
              </div>
            )}
          </div>

          <div className="lg:w-1/2 lg:p-4 flex flex-col justify-center">
            <Accordion
              type="single"
              collapsible
              defaultValue={accordionItems[0]?._key || "0"}
            >
              {accordionItems &&
                accordionItems.length &&
                accordionItems?.map((item) => {
                  return (
                    <AccordionItem key={item._key} value={item._key!}>
                      <AccordionTrigger className="[&[data-state=closed]]:opacity-30 text-left hover:!opacity-100">
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent className="prose">
                        <PortableText blocks={item.text} />
                      </AccordionContent>
                    </AccordionItem>
                  )
                })}
            </Accordion>
          </div>
        </div>
      </section>
      <Spacer size={bottomSpacer} />
    </>
  )
}
