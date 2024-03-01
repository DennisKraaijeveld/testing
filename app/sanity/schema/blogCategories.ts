import { Tag } from "lucide-react"
import { defineField, defineType } from "sanity"

export const blogCategories = defineType({
  name: "blogCategories",
  title: "Blog Categories",
  type: "document",
  icon: Tag,
  fields: [
    // Title
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
})
