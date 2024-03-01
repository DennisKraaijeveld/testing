import type { PortableTextComponents } from "@portabletext/react"
import { PortableText as PortableTextReact } from "@portabletext/react"
import type { PortableTextBlock } from "@sanity/types"
import clsx from "clsx"
import { useMemo } from "react"

import LinkEmailAnnotation from "~/components/portableText/annotations/LinkEmail"
import LinkExternalAnnotation from "~/components/portableText/annotations/LinkExternal"
import LinkInternalAnnotation from "~/components/portableText/annotations/LinkInternal"

import { SanityImage } from "../SanityImage"
import BlockButton from "./blocks/BlockButton"
import BlogConclusionBlock from "./blocks/BlogConclusionBlock"
import Table from "./blocks/Table"

const SHARED_LIST_CLASSES = clsx(
  "first:mt-0 last:mb-0", //
  "my-8 space-y-0.5 leading-paragraph list-outside ml-8",
)

type Props = {
  blocks: PortableTextBlock[]
  className?: string
}

export default function PortableText({ blocks, className }: Props) {
  const components: PortableTextComponents = {
    list: {
      bullet: ({ children }) => (
        <ul className={SHARED_LIST_CLASSES}>{children}</ul>
      ),
      number: ({ children }) => (
        <ol className={SHARED_LIST_CLASSES}>{children}</ol>
      ),
    },
    marks: {
      annotationLinkExternal: LinkExternalAnnotation,
      annotationLinkInternal: LinkInternalAnnotation,
      annotationLinkEmail: LinkEmailAnnotation,
    },
    block: {
      subtitle: ({ children }) => (
        <span className="inline-block font-subtitle uppercase font-medium text-content opacity-70">
          {children}
        </span>
      ),
      smallParagraph: ({ children }) => (
        <p className="text-xs text-content">{children}</p>
      ),
      signature: ({ children }) => (
        <p className="text-content font-signed text-3xl not-prose">
          {children}
        </p>
      ),
    },
    types: {
      table: Table,
      conclusionBlog: BlogConclusionBlock,
      image: SanityImage,
      button: BlockButton,
    },
  }

  const portableText = useMemo(() => {
    return (
      <div className={clsx("portableText", className)}>
        <PortableTextReact value={blocks} components={components} />
      </div>
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blocks])

  return portableText
}
