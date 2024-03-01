import { Lightbulb } from "lucide-react"
import { defineField, defineType } from "sanity"

export const moduleFeaturesGrid = defineType({
  name: "module.featuresGrid",
  title: "Page - Features Grid Section",
  type: "object",
  groups: [
    { name: "layout", title: "Layout" },
    {
      title: "Submenu",
      name: "submenu",
    },
  ],
  icon: Lightbulb,
  fields: [
    // Columns with icon, title, and text
    defineField({
      name: "columns",
      title: "Columns",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            // Icon
            defineField({
              title: "Icon",
              name: "icon",
              type: "iconPicker",
              options: {
                storeSvg: true,
              },
            }),
            // Title
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            // Text
            defineField({
              name: "text",
              title: "Text",
              type: "text",
            }),
          ],
        },
      ],
    }),
    // Background Color
    defineField({
      name: "backgroundColor",
      title: "Background Color",
      type: "boolean",
      options: {
        layout: "checkbox",
      },
      group: "layout",
      initialValue: false,
      description: "⚡ If checked, the background will be light beige.",
    }),
    // Background Color Value
    defineField({
      name: "backgroundColorCode",
      title: "Background",
      type: "string",
      options: {
        list: [
          { title: "Beige", value: "#FDFCF6" },
          { title: "Green", value: "#D5D9D9" },
        ],
      },
      group: "layout",
      initialValue: "#FDFCF6",
    }),
    // Submenu Title / Href
    defineField({
      name: "submenuTitle",
      title: "Submenu Title",
      type: "string",
      description: "This will be the title of the submenu item",
      group: "submenu",
      hidden: ({ document }) => !document?.showSubmenu,
    }),
    // Top Spacing
    defineField({
      name: "topSpacing",
      title: "Top Spacing",
      type: "string",
      description: "Whitespace between elements",
      options: {
        list: [
          { title: "Small", value: "sm" },
          { title: "Medium", value: "md" },
          { title: "Large", value: "lg" },
          { title: "Extra Large", value: "xl" },
        ],
      },
      initialValue: "md",
    }),
    // Bottom Spacing
    defineField({
      name: "bottomSpacing",
      title: "Bottom Spacing",
      type: "string",
      description: "Whitespace between elements",
      options: {
        list: [
          { title: "Small", value: "sm" },
          { title: "Medium", value: "md" },
          { title: "Large", value: "lg" },
          { title: "Extra Large", value: "xl" },
        ],
      },
      initialValue: "md",
    }),
  ],
  preview: {
    select: {
      media: "image",
    },
    prepare({ media }) {
      return {
        title: "Page - Features Grid Section Section",
        subtitle: "Page - Features Grid Section Section",
        media: media,
      }
    },
  },
})
