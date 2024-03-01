import { PanelTop } from "lucide-react"
import { defineField, defineType } from "sanity"

import PageBuilderInput from "../components/PageBuilder"
import { PAGE_MODULES } from "../constants"

export const pageType = defineType({
  name: "page",
  title: "Page",
  type: "document",
  icon: PanelTop,
  groups: [
    {
      name: "content",
      title: "Content",
      default: true,
    },
    {
      name: "seo",
      title: "SEO",
    },
    {
      name: "layout",
      title: "Layout",
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
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 50,
      },
      description: "Defines the URL of the page in the website.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "pageBuilder",
      title: "Content / body of the page",
      type: "array",
      group: "content",
      of: PAGE_MODULES,
      components: {
        input: PageBuilderInput,
      },
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "seo",
    }),

    // Submenu toggle. Boolean
    defineField({
      name: "showSubmenu",
      title: "Show submenu",
      type: "boolean",
      group: "layout",
      description:
        "If enabled, all page modules will receive an extra submenu field. Please fill in the title for the modules you want to show in the submenu.",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      slug: "slug.current",
    },
    prepare({ title, slug }) {
      return {
        title,
        subtitle: `/${slug}`,
      }
    },
  },
})
