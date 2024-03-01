import { z } from "zod"

import { SEO, subMenuZ } from "./generic"
import { pageBuilderContent } from "./modules"

export const pageZ = z.object({
  _id: z.string(),
  title: z.string().nullable(),
  pageBuilder: z.array(pageBuilderContent).nullable(),
  seo: SEO.nullable(),
  submenu: subMenuZ.nullable(),
})

export type PageDocument = z.infer<typeof pageZ>
