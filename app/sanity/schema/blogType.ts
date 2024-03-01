import { Newspaper } from "lucide-react"
import { defineField, defineType } from "sanity"

export const blogType = defineType({
  name: "blog",
  title: "Blog",
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
    // Internal Name
    defineField({
      name: "internalName",
      title: "Internal Name",
      type: "string",
      validation: (Rule) => Rule.required(),
      description:
        "💡 Title for internal use only. This won't show up for visitors, just make sure you add a descriptive name so you can easily find it in the CMS.",
    }),
    // Title
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    // Slug
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    // Featured Image
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
    // Categories
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "blogCategories" }] }],
      validation: (Rule) => Rule.required(),
    }),
    // Content
    defineField({
      name: "content",
      title: "Blog Content",
      type: "body",
      group: "content",
      description: "The content of the blog post",
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
      slug: "slug",
      media: "featuredImage",
    },
    prepare({ title, slug, media }) {
      return {
        title: title,
        subtitle: `/${slug.current}`,
        media: media,
      }
    },
  },
})
