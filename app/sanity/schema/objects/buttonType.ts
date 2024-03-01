import { defineArrayMember, defineField, defineType } from "sanity"

export const buttonType = defineType({
  name: "button",
  title: "Button",
  type: "object",
  fields: [
    defineField({
      name: "link",
      type: "array",
      title: "Link",
      of: [
        defineArrayMember({ type: "linkInternal" }),
        defineArrayMember({ type: "linkExternal" }),
      ],
      validation: (Rule) => Rule.required().max(1),
    }),
  ],
  preview: {
    select: {
      title: "link",
      link: "link.0.page.slug.current",
    },
    prepare(selection) {
      const { title, link } = selection
      const path = link ? `/${link}` : ""

      return {
        title: `Button:` + " " + title[0].title,
        subtitle: path,
      }
    },
  },
})
