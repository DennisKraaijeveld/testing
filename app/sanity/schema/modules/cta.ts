import { AlertOctagon } from "lucide-react"
import { defineField, defineType } from "sanity"

export const moduleCallToAction = defineType({
  name: "module.cta",
  title: "Page - Call To Action Section",
  type: "object",
  groups: [
    { name: "layout", title: "Layout" },
    {
      title: "Submenu",
      name: "submenu",
    },
  ],
  icon: AlertOctagon,
  fields: [
    // Subtitle
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    // Title
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    // Button
    defineField({
      name: "button",
      title: "Button",
      type: "button",
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
        title: "Page - Call To Action Section",
        subtitle: "Page - Call To Action Section",
      }
    },
  },
})
