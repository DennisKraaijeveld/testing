import { LayoutList } from "lucide-react"
import { defineField, defineType } from "sanity"

export const contentImage = defineType({
  name: "module.contentImage",
  title: "Page - Content / Image Section",
  type: "object",
  icon: LayoutList,
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
    // Image
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
      validation: (Rule) => Rule.required(),
    }),
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
    // Text
    defineField({
      name: "text",
      title: "Text",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 1", value: "h1" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Heading 4", value: "h4" },
            { title: "Heading 5", value: "h5" },
            { title: "Heading 6", value: "h6" },
            { title: "Quote", value: "blockquote" },
            { title: "Subtitle", value: "subtitle" },
            { title: "Big Paragraph", value: "bigParagraph" },
            { title: "Small Paragraph", value: "smallParagraph" },
            { title: "Signature", value: "signature" },
          ],
        },
        {
          type: "button",
          name: "button",
          title: "Button",
        },
      ],
    }),
    // Button
    defineField({
      name: "button",
      title: "Button",
      type: "button",
    }),
    // Background Color
    defineField({
      name: "backgroundColor",
      title: "Background Color",
      type: "boolean",
      options: {
        layout: "checkbox",
      },
      group: "layout",
      description: "⚡ If checked, there will be a background color",
    }),
    // Background Color Value
    defineField({
      name: "backgroundColorCode",
      title: "Background",
      type: "string",
      options: {
        list: [
          { title: "Beige", value: "#FDFCF6" },
          { title: "Green", value: "#D5D9D9" },
        ],
      },
      group: "layout",
      initialValue: "#FDFCF6",
    }),
    // Alignment of Image and Text
    defineField({
      name: "alignment",
      title: "Alignment of Image and Text",
      type: "string",
      description: "⚡ If left blank, the image will be on the left.",
      options: {
        list: [
          { title: "Image Left", value: "imageLeft" },
          { title: "Image Right", value: "imageRight" },
        ],
      },
      initialValue: "imageLeft",
      group: "layout",
      validation: (Rule) => Rule.required(),
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
        title: title || "Page - Content Image Section",
        subtitle: "Page - Content Image Section",
      }
    },
  },
})
