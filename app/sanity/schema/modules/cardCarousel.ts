import { GalleryHorizontal, GalleryHorizontalEnd } from "lucide-react"
import { defineField, defineType } from "sanity"

export const card = defineType({
  name: "card",
  title: "Card",
  type: "object",
  icon: GalleryHorizontal,
  fields: [
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
      of: [{ type: "block" }],
    }),
    // Image
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Icon of the card",
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

export const cardCarousel = defineType({
  name: "module.cardCarousel",
  title: "Page - Card Carousel Section",
  type: "object",
  icon: GalleryHorizontalEnd,
  groups: [
    {
      title: "Submenu",
      name: "submenu",
    },
  ],
  fields: [
    // Title
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    // Subtitle
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    // Card Items
    defineField({
      name: "cards",
      title: "Cards",
      type: "array",
      of: [{ type: "card" }],
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
      cards: "cards",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Page - Card Carousel Section",
        subtitle: subtitle || "Page - Card Carousel Section",
      }
    },
  },
})
