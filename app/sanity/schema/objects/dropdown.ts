import { defineField, defineType } from "sanity"

export const dropDownMenu = defineType({
  title: "Dropdown",
  name: "dropDownMenu",
  type: "object",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "dropdownItems",
      title: "Dropdown Menu Links",
      type: "array",
      of: [{ type: "linkInternal" }, { type: "linkExternal" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title,
        subtitle: "Dropdown",
      }
    },
  },
})
