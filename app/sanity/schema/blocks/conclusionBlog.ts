import { defineField } from "sanity"

export const conclusionBlog = defineField({
  name: "conclusionBlog",
  title: "Conclusion Blog",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    // Author
    defineField({
      name: "author",
      title: "Author",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    // Autor title
    defineField({
      name: "authorTitle",
      title: "Author Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    // Image
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      description: "Image for the author",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt Text",
        },
      ],
    }),
  ],
})
