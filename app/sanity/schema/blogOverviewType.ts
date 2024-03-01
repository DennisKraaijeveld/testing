import { Newspaper } from "lucide-react"
import { defineField, defineType } from "sanity"

export const blogOverviewType = defineType({
  name: "blogOverview",
  title: "Blog Overview",
  type: "document",
  icon: Newspaper,
  groups: [
    {
      name: "content",
      title: "Content",
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    defineField({
      name: "internalName",
      title: "Internal Name",
      type: "string",
      validation: (Rule) => Rule.required(),
      description:
        "💡 Title for internal use only. This won't show up for visitors, just make sure you add a descriptive name so you can easily find it in the CMS.",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    // Hero: Subtitle, Title, Text, Image
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
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
          name: "text",
          title: "Text",
          type: "text",
        }),
        defineField({
          name: "featuredImage",
          title: "Featured Image",
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
        }),
      ],
      group: "content",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "seo",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title,
      }
    },
  },
})
