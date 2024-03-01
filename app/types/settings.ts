import { z } from "zod"

export const socialLinkSchema = z.object({
  _key: z.string().nullable(),
  name: z.string().nullable(),
  url: z.string().nullable(),
})

export const linkSchema = z.object({
  _key: z.string().nullable(),
  _type: z.union([
    z.literal("linkInternal"),
    z.literal("linkExternal"),
    z.literal("dropDownMenu"),
  ]),
  title: z.string().nullable(),
  slug: z.string().nullable(),
  links: z
    .array(z.object({ _key: z.string(), title: z.string(), slug: z.string() }))
    .nullable(),
})

// const menuSchema = z.object({
//   links: z.array(linkSchema).nullable(),
// })

export const blockSchema = z.object({
  _key: z.string().nullable(),
  title: z.string().nullable(),
  linksOrPosts: z.any().nullable(),
  links: z.any().nullable(),
  posts: z.any().nullable(),
})

export const footerBlocksSchema = z.array(blockSchema).nullable()

export const footerSchema = z.object({
  blocks: footerBlocksSchema.nullable(),
})

export const settingsZ = z.object({
  _id: z.string(),
  _type: z.literal("settings"),
  menu: z.any().nullable(),
  footer: footerSchema,
  socialLinks: z.array(socialLinkSchema).nullable(),
})

export type SettingsDocument = z.infer<typeof settingsZ>

export type LinkProps = { settings?: SettingsDocument | null }

export type LinkType = z.infer<typeof linkSchema>

export type FooterSchema = z.infer<typeof footerSchema>

export type SocialLinkSchema = z.infer<typeof socialLinkSchema>

export type InternalLink = {
  _type: "linkInternal"
  title: string
  slug: string
}

export type ExternalLink = {
  _type: "linkExternal"
  title: string
  url: string
}

export type DropdownMenu = {
  _type: "dropDownMenu"
  title: string
  links: Array<InternalLink | ExternalLink>
}

export type NavigationItem = InternalLink | ExternalLink | DropdownMenu
