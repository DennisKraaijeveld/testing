import { List } from "lucide-react"
import { defineField, defineType } from "sanity"

export const accordionItem = defineType({
  name: "accordionItem",
  title: "Accordion Item",
  type: "object",
  fields: [
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
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
})

export const contentAccordion = defineType({
  name: "module.contentAccordion",
  title: "Page - Content Accordion Section",
  type: "object",
  icon: List,
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
    // Button
    defineField({
      name: "button",
      title: "Button",
      type: "button",
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
        title: title || "Page - Content Accordion Section",
        subtitle: "Page - Content Accordion Section",
      }
    },
  },
})
