import { LucideMessageCircle } from "lucide-react"
import { defineField, defineType } from "sanity"

export const faqModule = defineType({
  name: "module.faq",
  title: "Page - Frequently Asked Questions Section",
  type: "object",
  icon: LucideMessageCircle,
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
    // Accordion Items
    defineField({
      name: "accordionItems",
      title: "Accordion Items",
      type: "array",
      of: [{ type: "accordionItem" }],
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
      title: "title",
      subtitle: "subtitle",
    },
    prepare({ title }) {
      return {
        title: title || "Page - Frequently Asked Questions Section",
        subtitle: "Page - Frequently Asked Questions Section",
      }
    },
  },
})
