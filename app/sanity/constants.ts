// Document types which:
// - cannot be created in the 'new document' menu

import { defineArrayMember } from "sanity"

// - cannot be duplicated, unpublished or deleted
export const LOCKED_DOCUMENT_TYPES = ["settings", "home", "media.tag"]

// References to include in 'internal' links
export const PAGE_REFERENCES = [
  { type: "page" },
  { type: "home" },
  { type: "blog" },
  { type: "blogOverview" },
]

// API version to use when using the Sanity client within the studio
// https://www.sanity.io/help/studio-client-specify-api-version
export const SANITY_API_VERSION = "2023-05-01"

export const PAGE_MODULES = [
  defineArrayMember({
    name: "module.pageHero",
    title: "Page Hero",
    type: "module.pageHero",
  }),
  defineArrayMember({
    name: "module.pageTextContent",
    title: "Page Text Content",
    type: "module.pageTextContent",
  }),
  defineArrayMember({
    name: "module.logoCloud",
    title: "Logo Cloud",
    type: "module.logoCloud",
  }),
  defineArrayMember({
    name: "module.contentImage",
    title: "Content / Image",
    type: "module.contentImage",
  }),
  defineArrayMember({
    name: "module.contentAccordion",
    title: "Content Accordion",
    type: "module.contentAccordion",
  }),
  defineArrayMember({
    name: "module.fullWidthImage",
    title: "Full Width Image",
    type: "module.fullWidthImage",
  }),
  defineArrayMember({
    name: "module.cardCarousel",
    title: "Card Carousel",
    type: "module.cardCarousel",
  }),
  defineArrayMember({
    name: "module.recentPosts",
    title: "Recent Posts",
    type: "module.recentPosts",
  }),
  defineArrayMember({
    name: "module.featuresGrid",
    title: "Features Grid",
    type: "module.featuresGrid",
  }),
  defineArrayMember({
    name: "module.twoColumnFlowContent",
    title: "Two Column Flow Content",
    type: "module.twoColumnFlowContent",
  }),
  defineArrayMember({
    name: "module.cta",
    title: "Call To Action",
    type: "module.cta",
  }),
  defineArrayMember({
    name: "module.faq",
    title: "FAQ",
    type: "module.faq",
  }),
  defineArrayMember({
    name: "module.embedCal",
    title: "Calendar Section",
    type: "module.embedCal",
  }),
]

export const singletonActions = new Set([
  "publish",
  "discardChanges",
  "restore",
])

export const singletonTypes = new Set(["home", "blogOverview", "settings"])
