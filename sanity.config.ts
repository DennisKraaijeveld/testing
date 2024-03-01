import { presentationTool } from "@sanity/presentation"
import { table } from "@sanity/table"
import { visionTool } from "@sanity/vision"
import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { iconPicker } from "sanity-plugin-icon-picker"
import { media } from "sanity-plugin-media"
import { muxInput } from "sanity-plugin-mux-input"

import { singletonActions, singletonTypes } from "~/sanity/constants"
import { locate } from "~/sanity/presentation/locate"
import { frontendUrl, projectDetails } from "~/sanity/projectDetails"
import schema from "~/sanity/schema"
import { defaultDocumentNode, structure } from "~/sanity/structure"

import { theme as _theme } from "./theme"

const theme = _theme as import("sanity").StudioTheme

const devPlugins = [visionTool()]

export const config = defineConfig({
  ...projectDetails(),
  name: "luminous-life",
  title: "Luminous Life",
  theme: theme,
  plugins: [
    structureTool({ structure, defaultDocumentNode }),
    presentationTool({
      previewUrl: frontendUrl,
      locate,
    }),
    media(),
    iconPicker(),
    table(),
    muxInput(),
    ...devPlugins,
  ],
  basePath: `/studio`,
  schema: {
    types: schema,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined in constants.ts
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})
