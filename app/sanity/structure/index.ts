import { Cog, Home, Library, Newspaper, PanelTop, Tag } from "lucide-react"
import type {
  DefaultDocumentNodeResolver,
  StructureResolver,
} from "sanity/structure"

import OGPreview from "~/sanity/components/OGPreview"
import { resolveOGUrl } from "~/sanity/structure/resolveOGUrl"

export const structure: StructureResolver = (S) =>
  S.list()
    .id("root")
    .title("Content")
    .items([
      // Singleton, home page curation
      S.documentListItem()
        .schemaType("home")
        .icon(Home)
        .id("home")
        .title("Home"),
      S.divider(),
      // Document lists
      S.documentTypeListItem("page").title("Pages").icon(PanelTop),
      S.divider(),
      S.documentListItem()
        .schemaType("blogOverview")
        .icon(Library)
        .id("blogOverview")
        .title("Blog Overview"),
      S.documentTypeListItem("blog").title("Blogs").icon(Newspaper),
      S.documentTypeListItem("blogCategories")
        .title("Blog Categories")
        .icon(Tag),
      S.divider(),
      S.documentListItem()
        .schemaType("settings")
        .id("settings")
        .title("Settings")
        .icon(Cog),
    ])

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType, documentId },
) => {
  const OGPreviewView = S.view
    .component(OGPreview)
    .options({
      url: resolveOGUrl(documentId),
    })
    .title("OG Preview")

  switch (schemaType) {
    case `home`:
      return S.document().views([S.view.form()])
    case `page`:
      return S.document().views([S.view.form(), OGPreviewView])
    case `blog`:
      return S.document().views([S.view.form(), OGPreviewView])
    case `blogOverview`:
      return S.document().views([S.view.form()])
    default:
      return S.document().views([S.view.form()])
  }
}
