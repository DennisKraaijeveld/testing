import { z } from "zod"

export const Slug = z.string().nullable()

export const Button = z.object({
  _key: z.string().nullable(),
  _type: z.literal("button"),
  link: z.object({
    _type: z.string(),
    slug: Slug,
    title: z.string(),
  }),
})

export const SEO = z.object({
  seoTitle: z.string().nullable(),
  seoDescription: z.string().nullable(),
})

export const subMenuZ = z.object({
  showSubmenu: z.boolean().nullable(),
  submenuItems: z
    .array(z.object({ submenuTitle: z.string().nullable() }).nullable())
    .nullable(),
})

export type SubMenuProps = z.infer<typeof subMenuZ>
