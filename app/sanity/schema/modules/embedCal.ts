import { Calendar } from "lucide-react"
import { defineField, defineType } from "sanity"

export const embedCal = defineType({
  name: "module.embedCal",
  title: "Page - Calendar Section",
  type: "object",
  icon: Calendar,
  groups: [
    {
      title: "Submenu",
      name: "submenu",
    },
  ],
  fields: [
    //  Cal Link
    defineField({
      name: "calLink",
      title: "Calendar Link",
      type: "string",
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
      subtitle: "calLink",
    },
    prepare({ subtitle }) {
      return {
        title: "Page - Calendar Section",
        subtitle,
      }
    },
  },
})
