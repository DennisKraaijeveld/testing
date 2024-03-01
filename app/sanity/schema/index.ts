import { blogType } from "~/sanity/schema/blogType"
import { homeType } from "~/sanity/schema/homeType"
import { pageType } from "~/sanity/schema/pageType"

import { linkEmailAnnotation } from "./annotations/linkEmail"
import { linkExternalAnnotation } from "./annotations/linkExternal"
import { linkInternalAnnotation } from "./annotations/linkInternal"
import { conclusionBlog } from "./blocks/conclusionBlog"
import { blogCategories } from "./blogCategories"
import { blogOverviewType } from "./blogOverviewType"
import { card, cardCarousel } from "./modules/cardCarousel"
import { accordionItem, contentAccordion } from "./modules/contentAccordion"
import { contentImage } from "./modules/contentImage"
import { moduleCallToAction } from "./modules/cta"
import { embedCal } from "./modules/embedCal"
import { faqModule } from "./modules/faq"
import { moduleFeaturesGrid } from "./modules/featuresGrid"
import { fullWidthImage } from "./modules/fullWidthImage"
import { logoCloud } from "./modules/logoCloud"
import { modulePageHero } from "./modules/pageHero"
import { modulePageTextContent } from "./modules/pageTextContent"
import { moduleRecentPosts } from "./modules/recentPosts"
import { moduleTwoColumnFlowContent } from "./modules/twoColumnFlowContent"
import { buttonType } from "./objects/buttonType"
import { customBody } from "./objects/customBody"
import { dropDownMenu } from "./objects/dropdown"
import { linkExternal } from "./objects/linkExternal"
import { linkInternal } from "./objects/linkInternal"
import { seoType } from "./objects/seo"
import { settingsType, socialLink } from "./settingsType"

export default [
  homeType,
  pageType,
  blogType,
  settingsType,
  modulePageHero,
  modulePageTextContent,
  seoType,
  linkInternalAnnotation,
  linkExternalAnnotation,
  linkEmailAnnotation,
  buttonType,
  linkExternal,
  linkInternal,
  customBody,
  logoCloud,
  contentImage,
  accordionItem,
  contentAccordion,
  fullWidthImage,
  cardCarousel,
  card,
  moduleRecentPosts,
  moduleFeaturesGrid,
  moduleTwoColumnFlowContent,
  moduleCallToAction,
  blogOverviewType,
  socialLink,
  faqModule,
  blogCategories,
  embedCal,
  conclusionBlog,
  dropDownMenu,
]
