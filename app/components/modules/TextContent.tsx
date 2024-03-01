import { Fade } from "react-awesome-reveal"
import slugify from "react-slugify"

import { cleanStega, cn } from "~/lib/utils"
import type { PageTextContentProps } from "~/types/modules"

import PortableText from "../portableText/PortableText"
import { Spacer } from "../ui/spacer"

export default function TextContent({
  bodyContent,
  alignment,
  containerAlignment,
  submenuTitle,
}: PageTextContentProps) {
  const alignmentClass =
    cleanStega(alignment) === "left"
      ? "text-left"
      : cleanStega(alignment) === "center"
        ? "text-center"
        : "text-right"

  // Determine container alignment class based on the `containerAlignment` prop
  const containerClass =
    cleanStega(containerAlignment) === "center" ? "max-w-4xl mx-auto" : ""

  return (
    <>
      <Spacer size="xs" />
      <section
        id={submenuTitle ? slugify(submenuTitle) : undefined}
        className={cn("container scroll-mt-10", alignmentClass)}
      >
        <Fade cascade triggerOnce>
          <PortableText
            blocks={bodyContent}
            className={cn("prose prose-headings:first:my-4", containerClass)}
          />
        </Fade>
      </section>
      <Spacer size="xs" />
    </>
  )
}
