import slugify from "react-slugify"

import type { FaqProps } from "~/types/modules"

import PortableText from "../portableText/PortableText"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/faq"
import { Spacer } from "../ui/spacer"

export default function FAQ({
  subtitle,
  title,
  accordionItems,
  submenuTitle,
  topSpacing,
  bottomSpacing,
}: FaqProps) {
  const topSpacer = topSpacing ? topSpacing : "sm"
  const bottomSpacer = bottomSpacing ? bottomSpacing : "sm"
  return (
    <>
      <Spacer size={topSpacer} />
      <section
        id={submenuTitle ? slugify(submenuTitle) : undefined}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-10 container scroll-mt-10"
      >
        <div className="col-span-1">
          {subtitle && (
            <span className="uppercase text-content opacity-70">
              {subtitle}
            </span>
          )}
          {title && <h2 className="my-2">{title}</h2>}
        </div>

        <div className="col-span-1 flex flex-col justify-center">
          <Accordion
            type="single"
            collapsible
            defaultValue={accordionItems[0]?._key || "0"}
            className="space-y-4"
          >
            {accordionItems &&
              accordionItems.length &&
              accordionItems?.map((item) => {
                return (
                  <AccordionItem key={item._key} value={item._key!}>
                    <AccordionTrigger className="text-left md:text-center">
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
      </section>
      <Spacer size={bottomSpacer} />
    </>
  )
}
