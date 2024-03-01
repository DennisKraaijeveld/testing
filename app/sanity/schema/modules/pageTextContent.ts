import { AlignCenter } from "lucide-react"
import { defineField, defineType } from "sanity"

export const modulePageTextContent = defineType({
  name: "module.pageTextContent",
  title: "Page - Text Content Section",
  type: "object",
  icon: AlignCenter,
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
    defineField({
      name: "bodyContent",
      title: "Content",
      type: "body",
    }),
    // Alignment
    defineField({
      name: "alignment",
      title: "Alignment",
      type: "string",
      description: "Align the text content to the left, center, or right.",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Center", value: "center" },
          { title: "Right", value: "right" },
        ],
      },
      group: "layout",
      initialValue: "center",
    }),
    // Alignment of container
    defineField({
      name: "containerAlignment",
      title: "Container Alignment",
      type: "string",
      description: "Align the container to the left, center, or right.",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Center", value: "center" },
          { title: "Right", value: "right" },
        ],
      },
      group: "layout",
      initialValue: "center",
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
        title: "Page - Text Content Section",
      }
    },
  },
})
