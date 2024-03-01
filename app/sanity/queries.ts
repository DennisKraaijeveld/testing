import groq from "groq"

import { LINKS, PAGE_BUILDER, SEO } from "./fragments"

export const SETTINGS_QUERY = groq`*[_id == "settings"][0]{
  _id,
  _type,
  "menu": menu {
    links[] {
      ${LINKS}
    }
  },
  "footer": footer {
    blocks[] {
      _key,
      title,
      linksOrPosts,
      links[] {
        ${LINKS}
      },
      "posts": *[_type == "blog"]|order(publishedAt desc)[0...3] {
       _id,
       _type,
       title,
       "slug": "/articles/" + slug.current,
      },
    },
  },
  socialLinks[] {
      _key,
      name,
      url
  },
  ${SEO}
}`

export const HOME_QUERY = groq`*[_id == "home"][0]{ 
  _id,
  title,
  siteTitle,
  ${PAGE_BUILDER}
  ${SEO},
  "submenu": {
    "showSubmenu": false,
    "submenuItems": [],
  },
}`

export const PAGE_QUERY = groq`*[_type == "page" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  ${PAGE_BUILDER}  
  ${SEO},
  "submenu": {
    showSubmenu,
    (showSubmenu == true) => {
      "submenuItems": pageBuilder[] {
        submenuTitle,
      },
    },
    (showSubmenu == false) => {
      "submenuItems": [],
    }
  },
}`

export const BLOG_QUERY = groq`*[_type == "blog" && slug.current == $slug][0]{
  _id,
  "hero": {
    title,
    featuredImage {
    _type,
    asset -> {
      ...,
      },
      crop,
      hotspot,
      alt,
      blackAndWhite
    },
    "updatedAt": _updatedAt,
    "createdAt":_createdAt,
    "categories": categories[]->title,
  },
  "slug": slug.current,
  content[] {
    ...,
    (_type == "image") => {
      ...,
      asset -> {
        ...,
      },
      crop,
      hotspot,
    },
    (_type == "button") => {
      ...,
      link[0] {
        ${LINKS}
      },
    },
  },
  "excerpt": array::join(string::split((pt::text(content)), "")[0..255], "") + "...",
  "relatedPosts": *[_type == "blog" && slug.current != $slug] | order(_createdAt desc)[0...3] {
    _id,
    _type,
    title,
    featuredImage {
      _type,
      asset -> {
        ...,
      },
      crop,
      hotspot,
      alt,
      blackAndWhite
    },
    "slug": slug.current,
    "categories": categories[]->title,
    "excerpt": array::join(string::split((pt::text(content)), "")[0..255], "") + "...",
  },
  ${SEO}
}`

export const BLOG_OVERVIEW_QUERY = groq`*[_type == "blogOverview"][0]{
  _id,
  _type,
  title,
  "hero": hero {
    subtitle,
    title,
    text,
    "image": featuredImage,
  },
  "filters": *[_type == "blogCategories"] {
    _id,
    title,
  },  
  "blogs": *[_type == "blog"]|order(publishedAt desc)[0...12] {
    _id,
    _type,
    title,
    featuredImage {
      _type,
      asset -> {
        ...,
      },
      crop,
      hotspot,
      alt,
      blackAndWhite
    },
    "slug": slug.current,
    "excerpt": array::join(string::split((pt::text(content)), "")[0..255], "") + "...",
    "categories": categories[]->title,
  },
  ${SEO}
}`
