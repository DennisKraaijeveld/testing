import Cal, { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"
import slugify from "react-slugify"

import type { EmbedCalProps } from "~/types/modules"

import { Spacer } from "../ui/spacer"
import { FormModal } from "./FormModal"

export default function EmbedCal({ calLink, submenuTitle }: EmbedCalProps) {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi()
      cal.ns["30min"]("ui", {
        styles: { branding: { brandColor: "#FDFCF6" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      })
    })()
  }, [])

  return (
    <section
      id={submenuTitle ? slugify(submenuTitle) : undefined}
      className="container scroll-mt-10"
    >
      <Spacer size="sm" />
      <Cal
        calLink={calLink ?? ""}
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view" }}
      />
      <Spacer size="3xs" />
      <p className="text-center">
        Prefer sending me an email?{" "}
        <span>
          <FormModal />
        </span>
      </p>
      <Spacer size="sm" />
    </section>
  )
}
