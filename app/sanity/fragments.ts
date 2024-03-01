import groq from "groq"

export const LINKS = groq`
_key,
_type,
title,
(_type == "linkInternal") => {
  (reference->_type == "page") => {
  "slug": "/" + reference->slug.current
  },
  (reference->_type == "home") => {
  "slug": "/"
  },
  (reference->_type == "blogOverview") => {
  "slug": "/articles"
  },
},
(_type == "linkExternal") => {
  "slug": url
},
(_type == 'dropDownMenu') => {
  title,
  "links": dropdownItems[] {
    _type,
    title,
    description,
    (reference->_type == "page") => {
      "slug": "/" + reference->slug.current
    },
    (reference->_type == "home") => {
      "slug": "/"
    },
    (reference->_type == "blogOverview") => {
      "slug": "/articles"
    },
  },
},
`

export const IMAGE = groq`
image {
  _type,
  asset -> {
    ...,
  },
  crop,
  hotspot,
  alt,
  blackAndWhite,
},`

export const SEO = groq`
seo {
  seoTitle,
  seoDescription
}`

const HERO_MODULE = groq`
  text,
  subtitle,
  title,
  highlightedText,
  opacity,
  buttons[] {
    _key,
    _type,
    link[0] {
      ${LINKS}
    }
  },
  ${IMAGE}
  heroSize
`

const PAGE_TEXT_CONTENT = groq`
  bodyContent,
  alignment,
  containerAlignment,
  submenuTitle,
  topSpacing,
  bottomSpacing
`

const LOGO_CLOUD_MODULE = groq`
  logos[] {
    _type,
    asset -> {
      ...,
    },
    crop,
    hotspot,
    alt,
    blackAndWhite,
  },
  submenuTitle,
  topSpacing,
  bottomSpacing
`

const CONTENT_IMAGE_MODULE = groq`
  ${IMAGE}
  subtitle,
  title,
  text,
  button {
    _type,
    link[0] {
      ${LINKS}
    }
  },
  backgroundColor,
  backgroundColorCode,
  alignment,
  submenuTitle,
  topSpacing,
  bottomSpacing
`

const CONTENT_ACCORDION_MODULE = groq`
  subtitle,
  title,
  button {
    _type,
    link[0] {
      ${LINKS}
    }
  },
  accordionItems[] {
    _key,
    _type,
    title,
    text
  },
  submenuTitle,
  topSpacing,
  bottomSpacing
`

const FAQ_ACCORDION_MODULE = groq`
  subtitle,
  title,
  accordionItems[] {
    _key,
    _type,
    title,
    text
  },
  submenuTitle,
  topSpacing,
  bottomSpacing
`

const CARD_CAROUSEL_MODULE = groq`
  title,
  subtitle,
  cards[] {
    _key,
    _type,
    title,
    text,
    ${IMAGE}
  },
  submenuTitle,
  topSpacing,
  bottomSpacing
`

const RECENT_POSTS_MODULE = groq`
  title,
  text,
  "blogs": *[_type == "blog"]|order(publishedAt desc)[0...3] {
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
    },
    "slug": slug.current,
    "excerpt": array::join(string::split((pt::text(content)), "")[0..255], "") + "...",
    "categories": categories[]->title,
  },
  submenuTitle,
  topSpacing,
  bottomSpacing
`

const CTA_MODULE = groq`
  subtitle,
  title,
  button {
    _type,
    link[0] {
      ${LINKS}
    }
  },
  submenuTitle,
  topSpacing,
  bottomSpacing
`

const FEATURES_GRID_MODULE = groq`
  columns[] {
    _key,
    _type,
    icon,
    title,
    text
  },
  backgroundColor,
  backgroundColorCode,
  submenuTitle,
  topSpacing,
  bottomSpacing
`

const TWO_COLUMN_FLOW_CONTENT_MODULE = groq`
  rows[] {
    _key,
    title,
    text
  },
  backgroundColor,
  submenuTitle,
  topSpacing,
  bottomSpacing
`

export const PAGE_BUILDER = groq`
 pageBuilder[] {
    _key,
    _type,
    (_type == "module.pageHero") => {
      ${HERO_MODULE}
    },
    (_type == "module.pageTextContent") => {
      ${PAGE_TEXT_CONTENT}
    },
    (_type == "module.logoCloud") => {
      ${LOGO_CLOUD_MODULE}
    },
    (_type == "module.contentImage") => {
      ${CONTENT_IMAGE_MODULE}
    },
    (_type == "module.contentAccordion") => {
      ${CONTENT_ACCORDION_MODULE}
    },
    (_type == "module.faq") => {
      ${FAQ_ACCORDION_MODULE}
    },
    (_type == "module.fullWidthImage") => {
      ${IMAGE}
      submenuTitle,
      imageSize,
      topSpacing,
      bottomSpacing
    },
    (_type == "module.cardCarousel") => {
      ${CARD_CAROUSEL_MODULE}
    },
    (_type == "module.recentPosts") => {
      ${RECENT_POSTS_MODULE}
    },
    (_type == "module.featuresGrid") => {
      ${FEATURES_GRID_MODULE}
    },
    (_type == "module.twoColumnFlowContent") => {
      ${TWO_COLUMN_FLOW_CONTENT_MODULE}
    },
    (_type == "module.cta") => {
      ${CTA_MODULE}
    },
    (_type == "module.embedCal") => {
      calLink,
      submenuTitle,
      topSpacing,
      bottomSpacing
    },
  },
`
