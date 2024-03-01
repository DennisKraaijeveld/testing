import { Home } from "lucide-react"
import { defineField, defineType } from "sanity"

import PageBuilderInput from "../components/PageBuilder"
import { PAGE_MODULES } from "../constants"

export const homeType = defineType({
  name: "home",
  title: "Home",
  type: "document",
  icon: Home,
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
      name: "title",
      type: "string",
    }),
    defineField({
      name: "siteTitle",
      type: "string",
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
  ],
  preview: {
    select: {
      title: "title",
      artist: "siteTitle",
    },
  },
})
