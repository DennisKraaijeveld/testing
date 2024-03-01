import { defineField, defineType } from "sanity"

export const seoType = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  options: {
    collapsed: false,
    collapsible: true,
  },
  fields: [
    defineField({
      name: "seoTitle",
      title: "Title for SEO & social sharing",
      type: "string",
      description:
        "Make it as enticing as possible to convert people in socials feeds and Google search results. Ideally between 50 and 70 characters.",
      validation: (Rule) => Rule.required().min(10).max(90),
    }),
    defineField({
      name: "seoDescription",
      title: "Short paragraph for SEO & social sharing (meta description)",
      type: "text",
      description:
        "⚡ Optionally but highly encouraged as it'll help you convert more visitors from socials and Google. Ideally between 70 and 160 characters.",
    }),
    defineField({
      name: "seoImage",
      title: "Image for SEO & social sharing",
      type: "image",
      description:
        "⚡ Optionally but highly encouraged as it'll help you convert more visitors from socials and Google.",
      options: {
        hotspot: true,
      },
    }),
  ],
})
