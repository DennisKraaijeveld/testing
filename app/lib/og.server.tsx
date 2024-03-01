import { Resvg } from "@resvg/resvg-js"
import type { SanityDocument } from "@sanity/client"
import urlBuilder from "@sanity/image-url"
import type { SatoriOptions } from "satori"
import satori from "satori"

import { OG_IMAGE_HEIGHT, OG_IMAGE_WIDTH } from "~/routes/resource.og"
import { dataset, projectId } from "~/sanity/projectDetails"

// Load the font from the "public" directory
const fontSansRegular = (baseUrl: string) =>
  fetch(new URL(`${baseUrl}/fonts/OpenSans-Regular.ttf`)).then((res) =>
    res.arrayBuffer(),
  )

const fontSansMedium = (baseUrl: string) =>
  fetch(new URL(`${baseUrl}/fonts/OpenSans-Medium.ttf`)).then((res) =>
    res.arrayBuffer(),
  )

export async function generatePngFromDocument(
  doc: SanityDocument,
  origin: string,
) {
  const { title, seo } = doc

  // Prepare font data and settings for Satori
  const fontOpenSansRegularData = await fontSansRegular(origin)
  const fontOpenSansMediumData = await fontSansMedium(origin)
  const options: SatoriOptions = {
    width: OG_IMAGE_WIDTH,
    height: OG_IMAGE_HEIGHT,
    fonts: [
      {
        name: "OpenSansRegular",
        data: fontOpenSansRegularData,
        style: "normal",
      },
      {
        name: "OpenSansMedium",
        data: fontOpenSansMediumData,
        style: "normal",
      },
    ],
  }

  // Create the SVG with satori
  const svg = await satori(
    // @ts-ignore
    <div tw="relative bg-[#FDFCF6] flex h-full w-full">
      {/* @ts-ignore */}
      {seo?.seoImage?.asset?._ref && (
        // @ts-ignore
        <div tw="relative overflow-hidden absolute left-0 h-full w-1/2 flex">
          <img
            // @ts-ignore
            src={urlBuilder({ projectId, dataset })
              // @ts-ignore
              .image(seo?.seoImage?.asset._ref)
              .height(800)
              .width(800)
              .fit("max")
              .auto("format")
              .url()}
            width="500"
            height="500"
            alt=""
          />
        </div>
      )}
      {/* @ts-ignore */}
      <div tw="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40 flex w-full h-full">
        {/* @ts-ignore */}
        <div tw="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32 flex flex-col">
          {/* @ts-ignore */}
          <h2 tw="text-base font-medium" style={{ color: "#7D8B8C" }}>
            Luminous Life
          </h2>
          <p
            // @ts-ignore
            tw="mt-2 font-medium tracking-tight text-5xl"
            style={{ color: "#212121" }}
          >
            {title}
          </p>
          {/* @ts-ignore */}
          <p tw="mt-6 text-base leading-7" style={{ color: "#5B5B5A" }}>
            {seo.seoDescription}
          </p>
        </div>
      </div>
    </div>,
    options,
  )

  // Convert to PNG with resvg
  const resvg = new Resvg(svg)
  const pngData = resvg.render()
  return pngData.asPng()
}
