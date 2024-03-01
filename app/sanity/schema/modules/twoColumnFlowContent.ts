import { AlignLeft } from "lucide-react"
import { defineField, defineType } from "sanity"

export const moduleTwoColumnFlowContent = defineType({
  name: "module.twoColumnFlowContent",
  title: "Page - Two Column Flow Content",
  type: "object",
  icon: AlignLeft,
  groups: [
    {
      name: "layout",
      title: "Layout",
    },
    {
      title: "Submenu",
      name: "submenu",
    },
  ],
  fields: [
    // Rows. One row have a title on the left, and on the right a Portable Text field.
    defineField({
      name: "rows",
      title: "Rows",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "text",
              title: "Text",
              type: "body",
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
      description: "⚡ If checked, the background will be light beige.",
      initialValue: false,
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
    prepare() {
      return {
        title: "Page - Two Column Flow Content",
        subtitle: "Page - Two Column Flow Content",
      }
    },
  },
})
