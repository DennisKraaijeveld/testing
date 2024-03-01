import { Newspaper } from "lucide-react"
import { defineField, defineType } from "sanity"

export const moduleRecentPosts = defineType({
  name: "module.recentPosts",
  title: "Page - Recent Posts Section",
  type: "object",
  icon: Newspaper,
  groups: [
    {
      title: "Submenu",
      name: "submenu",
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "text",
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
    },
    prepare({ title }) {
      return {
        title: title,
        subtitle: "Page - Recent Posts Section",
      }
    },
  },
})
