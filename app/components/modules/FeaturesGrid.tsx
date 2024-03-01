import slugify from "react-slugify"

import { cleanStega, cn } from "~/lib/utils"
import type { FeaturesGridProps } from "~/types/modules"

import { Spacer } from "../ui/spacer"

export default function FeaturesGrid({
  backgroundColor,
  backgroundColorCode,
  columns,
  submenuTitle,
  topSpacing,
  bottomSpacing,
}: FeaturesGridProps) {
  const bgColorClass = backgroundColor
    ? `bg-[${cleanStega(backgroundColorCode)}]`
    : null

  const topSpacer = topSpacing ? topSpacing : "sm"
  const bottomSpacer = bottomSpacing ? bottomSpacing : "sm"

  return (
    <>
      <Spacer size={topSpacer} />
      <section
        id={submenuTitle ? slugify(submenuTitle) : undefined}
        className={cn("py-16 scroll-mt-10", bgColorClass)}
      >
        <div className="container">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:grid-cols-4">
            {columns &&
              columns.map((column) => (
                <div key={column?._key}>
                  <div
                    className="h-10 text-2xl text-accent"
                    dangerouslySetInnerHTML={{ __html: column?.icon.svg }}
                  ></div>
                  <dt className="font-medium text-2xl font-header min-h-[3em]">
                    {column?.title}
                  </dt>
                  <dd className="mt-2">{column?.text}</dd>
                </div>
              ))}
          </dl>
        </div>
      </section>
      <Spacer size={bottomSpacer} />
    </>
  )
}
