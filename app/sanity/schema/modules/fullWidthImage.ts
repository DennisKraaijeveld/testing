import { Image } from "lucide-react"
import { defineField, defineType } from "sanity"

export const fullWidthImage = defineType({
  name: "module.fullWidthImage",
  title: "Page - Full Width Image Section",
  type: "object",
  icon: Image,
  groups: [
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
    // Submenu Title / Href
    defineField({
      name: "submenuTitle",
      title: "Submenu Title",
      type: "string",
      description: "This will be the title of the submenu item",
      group: "submenu",
      hidden: ({ document }) => !document?.showSubmenu,
    }),
    // Image size eg Small, Medium, Large
    defineField({
      name: "imageSize",
      title: "Image Size",
      type: "string",
      options: {
        list: ["Small", "Medium", "Large"],
      },
      initialValue: "Medium",
      validation: (Rule) => Rule.required(),
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
      media: "image",
    },
    prepare({ media }) {
      return {
        title: "Page - Full Width Image Section",
        subtitle: "Page - Full Width Image Section",
        media: media,
      }
    },
  },
})
