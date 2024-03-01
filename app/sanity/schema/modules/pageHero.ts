import { PanelTop } from "lucide-react"
import { defineArrayMember, defineField, defineType } from "sanity"

export const modulePageHero = defineType({
  name: "module.pageHero",
  title: "Page - Hero Section",
  type: "object",
  icon: PanelTop,
  groups: [
    {
      name: "layout",
      title: "Layout",
    },
  ],
  fields: [
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "highlightedText",
      title: "Highlighted text",
      type: "string",
      description: "Text that is highlighted in the title",
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "text",
    }),
    defineField({
      name: "buttons",
      title: "Buttons",
      type: "array",
      of: [defineArrayMember({ type: "button" })],
    }),
    // Image or Video?
    defineField({
      name: "heroType",
      title: "Hero type",
      type: "string",
      group: "layout",
      options: {
        list: [
          { title: "Image", value: "image" },
          { title: "Video", value: "video" },
        ],
      },
      initialValue: "image",
    }),
    // Image or Video
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt Text",
        },
        {
          name: "blackAndWhite",
          type: "boolean",
          title: "Black and White",
          initialValue: false,
        },
      ],
      hidden: ({ parent }) => parent?.heroType !== "image",
    }),
    // Video
    defineField({
      name: "video",
      title: "Video",
      type: "mux.video",
      hidden: ({ parent }) => parent?.heroType !== "video",
    }),
    // Hero size
    defineField({
      name: "heroSize",
      title: "Hero size",
      type: "string",
      group: "layout",
      options: {
        list: [
          { title: "Small", value: "small" },
          { title: "Large", value: "large" },
        ],
      },
      initialValue: "large",
    }),
    // Opacity. 0-100.
    defineField({
      name: "opacity",
      title: "Opacity",
      type: "number",
      group: "layout",
      description:
        "Opacity of the image overlay. 0-100. 0 is transparent, 100 is opaque.",
      initialValue: 40,
      validation: (Rule) => Rule.min(0).max(100),
    }),
    defineField({
      name: "typeOfModule",
      title: "Type of module",
      type: "string",
      hidden: true,
      initialValue: "hero",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title,
        subtitle: "Page - Hero Section",
      }
    },
  },
})
