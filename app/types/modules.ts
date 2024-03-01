import { z } from "zod"

import { Button } from "./generic"

export const pageHeroZ = z.object({
  _key: z.string(),
  _type: z.literal("module.pageHero"),
  image: z.any().nullable(),
  subtitle: z.string().nullable(),
  title: z.string().nullable(),
  highlightedText: z.string().nullable(),
  opacity: z.number().nullable(),
  text: z.string().nullable(),
  buttons: z.array(Button).nullable(),
  heroSize: z.any().nullable(),
})

export type PageHeroProps = z.infer<typeof pageHeroZ>

export const pageTextContentZ = z.object({
  _key: z.string(),
  _type: z.literal("module.pageTextContent"),
  bodyContent: z.any().nullable(),
  alignment: z
    .union([z.literal("center"), z.literal("left"), z.literal("right")])
    .nullable(),
  containerAlignment: z
    .union([z.literal("center"), z.literal("left"), z.literal("right")])
    .nullable(),
  submenuTitle: z.string().nullable(),
  topSpacing: z.any().nullable(),
  bottomSpacing: z.any().nullable(),
})

export type PageTextContentProps = z.infer<typeof pageTextContentZ>

export const logoCloudZ = z.object({
  _key: z.string(),
  _type: z.literal("module.logoCloud"),
  logos: z.array(z.any()),
  submenuTitle: z.string().nullable(),
  topSpacing: z.any().nullable(),
  bottomSpacing: z.any().nullable(),
})

export type LogoCloudProps = z.infer<typeof logoCloudZ>

export const contentImageZ = z.object({
  _key: z.string(),
  _type: z.literal("module.contentImage"),
  image: z.any().nullable(),
  subtitle: z.string().nullable(),
  title: z.string().nullable(),
  text: z.any().nullable(),
  button: z
    .object({
      _type: z.string(),
      link: z.object({
        _type: z.union([z.literal("linkInternal"), z.literal("linkExternal")]),
        title: z.string(),
        slug: z.string(),
      }),
    })
    .nullable(),
  backgroundColor: z.boolean().nullable(),
  backgroundColorCode: z.string().nullable(),
  alignment: z
    .union([z.literal("imageRight"), z.literal("imageLeft")])
    .nullable(),
  submenuTitle: z.string().nullable(),
  topSpacing: z.any().nullable(),
  bottomSpacing: z.any().nullable(),
})

export type ContentImageProps = z.infer<typeof contentImageZ>

export const contentAccordionZ = z.object({
  _key: z.string(),
  _type: z.literal("module.contentAccordion"),
  subtitle: z.string().nullable(),
  button: z
    .object({
      _type: z.string(),
      link: z.object({
        _type: z.union([z.literal("linkInternal"), z.literal("linkExternal")]),
        title: z.string(),
        slug: z.string(),
      }),
    })
    .nullable(),
  title: z.string().nullable(),
  accordionItems: z.array(
    z.object({
      _key: z.string().nullable(),
      _type: z.literal("accordionItem"),
      title: z.string().nullable(),
      text: z.any(),
    }),
  ),
  submenuTitle: z.string().nullable(),
  topSpacing: z.any().nullable(),
  bottomSpacing: z.any().nullable(),
})

export type ContentAccordionProps = z.infer<typeof contentAccordionZ>

export const faqZ = z.object({
  _key: z.string(),
  _type: z.literal("module.faq"),
  subtitle: z.string().nullable(),
  title: z.string().nullable(),
  accordionItems: z.array(
    z.object({
      _key: z.string().nullable(),
      _type: z.literal("accordionItem"),
      title: z.string().nullable(),
      text: z.any(),
    }),
  ),
  submenuTitle: z.string().nullable(),
  topSpacing: z.any().nullable(),
  bottomSpacing: z.any().nullable(),
})

export type FaqProps = z.infer<typeof faqZ>

export const fullWidthImageZ = z.object({
  _key: z.string(),
  _type: z.literal("module.fullWidthImage"),
  image: z.any().nullable(),
  submenuTitle: z.string().nullable(),
  imageSize: z
    .union([z.literal("Small"), z.literal("Medium"), z.literal("Large")])
    .nullable(),
  topSpacing: z.any().nullable(),
  bottomSpacing: z.any().nullable(),
})

export type FullWidthImageProps = z.infer<typeof fullWidthImageZ>

export const cardCarouselZ = z.object({
  _key: z.string(),
  _type: z.literal("module.cardCarousel"),
  title: z.string().nullable(),
  subtitle: z.string().nullable(),
  cards: z.array(
    z.object({
      _key: z.string().nullable(),
      _type: z.literal("card"),
      title: z.string().nullable(),
      text: z.any(),
      image: z.any(),
    }),
  ),
  submenuTitle: z.string().nullable(),
  topSpacing: z.any().nullable(),
  bottomSpacing: z.any().nullable(),
})

export type CardCarouselProps = z.infer<typeof cardCarouselZ>

export const recentPostsZ = z.object({
  _key: z.string(),
  _type: z.literal("module.recentPosts"),
  title: z.string().nullable(),
  text: z.string().nullable(),
  blogs: z.any().nullable(),
  submenuTitle: z.string().nullable(),
  topSpacing: z.any().nullable(),
  bottomSpacing: z.any().nullable(),
})

export type RecentPostsProps = z.infer<typeof recentPostsZ>

export const featuresGridZ = z.object({
  _key: z.string(),
  _type: z.literal("module.featuresGrid"),
  columns: z
    .array(
      z
        .object({
          _key: z.string().nullable(),
          icon: z.any().nullable(),
          title: z.string().nullable(),
          text: z.string().nullable(),
        })
        .nullable(),
    )
    .nullable(),
  backgroundColor: z.boolean().nullable(),
  backgroundColorCode: z.string().nullable(),
  submenuTitle: z.string().nullable(),
  topSpacing: z.any().nullable(),
  bottomSpacing: z.any().nullable(),
})

export type FeaturesGridProps = z.infer<typeof featuresGridZ>

export const twoColumnFlowContentZ = z.object({
  _key: z.string(),
  _type: z.literal("module.twoColumnFlowContent"),
  rows: z
    .array(
      z
        .object({
          _key: z.string().nullable(),
          title: z.string().nullable(),
          text: z.any().nullable(),
        })
        .nullable(),
    )
    .nullable(),
  backgroundColor: z.boolean().nullable(),
  submenuTitle: z.string().nullable(),
  topSpacing: z.any().nullable(),
  bottomSpacing: z.any().nullable(),
})

export type TwoColumnFlowContentProps = z.infer<typeof twoColumnFlowContentZ>

export const moduleCallToActionZ = z.object({
  _key: z.string(),
  _type: z.literal("module.cta"),
  subtitle: z.string().nullable(),
  title: z.string().nullable(),
  button: z
    .object({
      _type: z.string(),
      link: z.object({
        _type: z.union([z.literal("linkInternal"), z.literal("linkExternal")]),
        title: z.string(),
        slug: z.string(),
      }),
    })
    .nullable(),
  submenuTitle: z.string().nullable(),
  topSpacing: z.any().nullable(),
  bottomSpacing: z.any().nullable(),
})

export type CallToActionProps = z.infer<typeof moduleCallToActionZ>

export const embedCalZ = z.object({
  _key: z.string(),
  _type: z.literal("module.embedCal"),
  calLink: z.string().nullable(),
  submenuTitle: z.string().nullable(),
  topSpacing: z.any().nullable(),
  bottomSpacing: z.any().nullable(),
})

export type EmbedCalProps = z.infer<typeof embedCalZ>

export type SanityModules =
  | PageHeroProps
  | PageTextContentProps
  | LogoCloudProps
  | ContentImageProps
  | ContentAccordionProps
  | FaqProps
  | FullWidthImageProps
  | CardCarouselProps
  | RecentPostsProps
  | FeaturesGridProps
  | TwoColumnFlowContentProps
  | CallToActionProps
  | EmbedCalProps

export const pageBuilderContent = z.union([
  pageHeroZ,
  pageTextContentZ,
  logoCloudZ,
  contentImageZ,
  contentAccordionZ,
  faqZ,
  fullWidthImageZ,
  cardCarouselZ,
  recentPostsZ,
  featuresGridZ,
  twoColumnFlowContentZ,
  moduleCallToActionZ,
  embedCalZ,
])
