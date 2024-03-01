import type { SanityModules } from "~/types/modules"
import type { SubMenuProps } from "~/types/page"

import CardCarousel from "./CardCarousel"
import ContentAccordion from "./ContentAccordion"
import ContentImage from "./ContentImage"
import CTA from "./CTA"
import EmbedCal from "./EmbedCal"
import FAQ from "./FAQ"
import FeaturesGrid from "./FeaturesGrid"
import FullWidthImage from "./FullWidthImage"
import LogoCloud from "./LogoCloud"
import PageHero from "./PageHero"
import RecentPosts from "./RecentPosts"
import TextContent from "./TextContent"
import TwoColumnContent from "./TwoColumnContent"

type Props = {
  module: SanityModules
  subMenuData: SubMenuProps | null
}

export default function Module({ module, subMenuData }: Props) {
  switch (module._type) {
    case "module.pageHero":
      return <PageHero {...module} subMenuData={subMenuData} />
    case "module.pageTextContent":
      return <TextContent {...module} />
    case "module.logoCloud":
      return <LogoCloud {...module} />
    case "module.contentImage":
      return <ContentImage {...module} />
    case "module.contentAccordion":
      return <ContentAccordion {...module} />
    case "module.fullWidthImage":
      return <FullWidthImage {...module} />
    case "module.cardCarousel":
      return <CardCarousel {...module} />
    case "module.recentPosts":
      return <RecentPosts {...module} />
    case "module.featuresGrid":
      return <FeaturesGrid {...module} />
    case "module.twoColumnFlowContent":
      return <TwoColumnContent {...module} />
    case "module.cta":
      return <CTA {...module} />
    case "module.faq":
      return <FAQ {...module} />
    case "module.embedCal":
      return <EmbedCal {...module} />

    default:
      return null
  }
}
