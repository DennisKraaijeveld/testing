import { defineField, defineType } from "sanity"

export const socialLink = defineType({
  name: "socialLink",
  title: "Social Link",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
  ],
})

export const settingsType = defineType({
  name: "settings",
  title: "Settings",
  type: "document",
  groups: [
    {
      title: "Default content",
      name: "defaultContent",
    },
    {
      title: "Navigation",
      name: "navigation",
    },
    {
      title: "SEO",
      name: "seo",
    },
    {
      title: "404 page",
      name: "notFoundPage",
    },
  ],
  fields: [
    // Menu
    defineField({
      name: "menu",
      title: "Menu",
      type: "object",
      group: "navigation",
      options: {
        collapsed: false,
        collapsible: true,
      },
      fields: [
        // Links
        defineField({
          name: "links",
          title: "Links",
          type: "array",
          of: [
            { type: "linkInternal" },
            { type: "linkExternal" },
            { type: "dropDownMenu" },
          ],
        }),
      ],
    }),
    // Footer
    defineField({
      name: "footer",
      title: "Footer",
      type: "object",
      group: "navigation",
      options: {
        collapsed: false,
        collapsible: true,
      },
      fields: [
        // Blocks with a title and links
        defineField({
          name: "blocks",
          title: "Blocks",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  title: "Title",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                }),
                // Choose between links or latest posts. Boolean/Switch
                defineField({
                  name: "linksOrPosts",
                  title: "Links or posts",
                  type: "string",
                  options: {
                    list: [
                      { title: "Links", value: "links" },
                      { title: "Posts", value: "posts" },
                    ],
                  },
                  initialValue: "links",
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "links",
                  title: "Links",
                  type: "array",
                  of: [{ type: "linkInternal" }, { type: "linkExternal" }],
                  hidden: ({ parent }) => parent?.linksOrPosts !== "links",
                }),
                defineField({
                  name: "posts",
                  title: "Posts",
                  type: "reference",
                  to: [{ type: "blogOverview" }],
                  hidden: ({ parent }) => parent?.linksOrPosts !== "posts",
                }),
              ],
            },
          ],
        }),
      ],
    }),
    // Not found page
    defineField({
      name: "notFoundPage",
      title: "404 page",
      type: "object",
      group: "notFoundPage",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "body",
          title: "Body",
          type: "text",
          rows: 2,
        }),
      ],
    }),
    defineField({
      title: "Social Links",
      name: "socialLinks",
      type: "array",
      of: [{ type: "socialLink" }],
      description: "Links to social media profiles",
      group: "defaultContent",
    }),
    // SEO
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      group: "seo",
      description: "Defaults for every page",
      options: {
        collapsed: false,
        collapsible: true,
      },
      fields: [
        defineField({
          name: "title",
          title: "Site title",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
          rows: 2,
          validation: (Rule) =>
            Rule.max(150).warning(
              "Longer descriptions may be truncated by search engines",
            ),
        }),
        defineField({
          name: "brandLogo",
          title: "Brand logo",
          type: "image",
          description: "Used in structured data",
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
        defineField({
          name: "brandName",
          title: "Brand name",
          type: "string",
          description: "Used in structured data",
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Settings",
      }
    },
  },
})
