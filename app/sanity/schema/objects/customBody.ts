import { defineField } from "sanity"

export const customBody = defineField({
  name: "body",
  title: "Body",
  type: "array",
  of: [
    {
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        decorators: [
          {
            title: "Italic",
            value: "em",
          },
          {
            title: "Strong",
            value: "strong",
          },
        ],
        annotations: [
          // Email
          {
            name: "annotationLinkEmail",
            type: "annotationLinkEmail",
          },
          // Internal link
          {
            name: "annotationLinkInternal",
            type: "annotationLinkInternal",
          },
          // URL
          {
            name: "annotationLinkExternal",
            type: "annotationLinkExternal",
          },
        ],
      },
      // Paragraphs
      // TODO: Add custom components to show styling options
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
    { title: "Table", type: "table", name: "table" },
    {
      title: "Conclusion Blog",
      type: "conclusionBlog",
      name: "conclusionBlog",
    },
    {
      type: "image",
      name: "image",
      title: "Image",
      options: { hotspot: true },
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
    },
    {
      type: "button",
      name: "button",
      title: "Button",
    },
  ],
})
