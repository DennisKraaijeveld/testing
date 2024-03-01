import slugify from "react-slugify"

import type { TwoColumnFlowContentProps } from "~/types/modules"

import PortableText from "../portableText/PortableText"
import { Spacer } from "../ui/spacer"

export default function TwoColumnContent({
  rows,
  submenuTitle,
}: TwoColumnFlowContentProps) {
  return (
    <>
      <Spacer size="xs" />
      <section
        id={submenuTitle ? slugify(submenuTitle) : undefined}
        className="container scroll-mt-10"
      >
        <div className="space-y-10">
          {rows &&
            rows.length &&
            rows.map((row) => {
              return (
                <div
                  key={row?._key}
                  className="grid grid-cols-1 gap-x-10 gap-y-8 lg:grid-cols-10"
                >
                  <div className="max-w-2xl lg:col-span-5">
                    <h4>{row?.title}</h4>
                  </div>
                  <div className="w-full lg:col-span-5">
                    <PortableText blocks={row?.text} className="prose" />
                  </div>
                </div>
              )
            })}
        </div>
      </section>
      <Spacer size="xs" />
    </>
  )
}
