import { z } from "zod"

import { SEO, subMenuZ } from "./generic"
import { pageBuilderContent } from "./modules"

export const homeZ = z.object({
  _id: z.string(),
  title: z.string().nullable(),
  siteTitle: z.string().nullable(),
  pageBuilder: z.array(pageBuilderContent).nullable(),
  seo: SEO.nullable(),
  submenu: subMenuZ.nullable(),
})

export type HomeDocument = z.infer<typeof homeZ>

export type LogoProps = { home?: HomeDocument | null }
