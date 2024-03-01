import { LayoutDashboard } from "lucide-react"
import { defineField, defineType } from "sanity"

export const logoCloud = defineType({
  name: "module.logoCloud",
  title: "Page - LogoCloud Section",
  type: "object",
  icon: LayoutDashboard,
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
    //   Array of logos
    defineField({
      name: "logos",
      title: "Logos",
      type: "array",
      of: [
        {
          type: "image",
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
      logos: "logos",
    },
    prepare({ logos }) {
      return {
        title: "Page - LogoCloud Section",
        subtitle: logos.length + " logos" || "No logos yet",
      }
    },
  },
})
