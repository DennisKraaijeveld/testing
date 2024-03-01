import { z } from "zod"

import { SEO } from "./generic"

export const blogCardZ = z.object({
  _id: z.string(),
  title: z.string().nullable(),
  featuredImage: z.any().nullable(),
  slug: z.string().nullable(),
  categories: z.array(z.string()).nullable(),
  excerpt: z.string().nullable(),
})

export const blogZ = z.object({
  _id: z.string(),
  hero: z.object({
    title: z.string().nullable(),
    featuredImage: z.any().nullable(),
    categories: z.array(z.string()).nullable(),
    updatedAt: z.string().nullable(),
    createdAt: z.string().nullable(),
  }),
  content: z.any().nullable(),
  excerpt: z.string().nullable(),
  relatedPosts: z.array(blogCardZ).nullable(),
  seo: SEO.nullable(),
})

export const blogOverviewZ = z.object({
  _id: z.string(),
  title: z.string().nullable(),
  hero: z
    .object({
      subtitle: z.string().nullable(),
      title: z.string().nullable(),
      text: z.any().nullable(),
      image: z.any().nullable(),
    })
    .nullable(),
  blogs: z.array(blogCardZ).nullable(),
  filters: z.any().nullable(),
  seo: SEO.nullable(),
})

export type BlogDocument = z.infer<typeof blogZ>

export type BlogOverviewDocument = z.infer<typeof blogOverviewZ>
