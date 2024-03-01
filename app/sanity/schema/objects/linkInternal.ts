import { defineField, defineType } from "sanity"

import { PAGE_REFERENCES } from "~/sanity/constants"

export const linkInternal = defineType({
  title: "Page",
  name: "linkInternal",
  type: "object",
  fields: [
    // Title
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      description: "Display Text",
    }),
    // Description
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      description:
        "Optional description for underneath the link within the dropdown menu",
    }),
    defineField({
      name: "reference",
      type: "reference",
      weak: true,
      to: PAGE_REFERENCES,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      pageType: "reference._type",
      pageSlug: "reference.slug.current",
    },
    prepare({ title }) {
      return {
        title: title,
        subtitle: "Internal Link",
      }
    },
  },
})
