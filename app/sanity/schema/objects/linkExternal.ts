import { defineField, defineType } from "sanity"

export const linkExternal = defineType({
  title: "Link",
  name: "linkExternal",
  type: "object",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      description: "Display Text",
    }),
    defineField({
      title: "URL",
      name: "url",
      type: "url",
      description: "enter an external URL",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
        }),
    }),
    defineField({
      title: "Open in new window?",
      name: "newWindow",
      type: "boolean",
      description: "Check this box to open the link in a new window",
    }),
  ],
  preview: {
    select: {
      title: "title",
      url: "url",
    },
    prepare({ title, url }) {
      return {
        title: title ?? url,
        subtitle: title && url,
      }
    },
  },
})
