import slugify from "react-slugify"

import type { CardCarouselProps } from "~/types/modules"

import PortableText from "../portableText/PortableText"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"
import { Spacer } from "../ui/spacer"

export default function CardCarousel({
  cards,
  submenuTitle,
  topSpacing,
  bottomSpacing,
}: CardCarouselProps) {
  const topSpacer = topSpacing ? topSpacing : "sm"
  const bottomSpacer = bottomSpacing ? bottomSpacing : "sm"

  return (
    <>
      <Spacer size={topSpacer} />
      <section
        id={submenuTitle ? slugify(submenuTitle) : undefined}
        className="container scroll-mt-10"
      >
        <Carousel orientation="horizontal">
          <div className="space-x-2 flex w-full justify-end mb-8">
            <CarouselPrevious className="relative" />
            <CarouselNext className="relative" />
          </div>
          <CarouselContent className="-ml-8">
            {cards &&
              cards.length > 0 &&
              cards.map((card) => {
                return (
                  <CarouselItem
                    key={card._key}
                    className="basis-full md:basis-1/2 lg:basis-1/4 pl-8 h-[420px]"
                  >
                    <div className="p-8 bg-content-light h-full flex justify-between">
                      <div className="prose flex justify-between flex-col">
                        <div className="flex flex-col">
                          <img
                            src="/quote.svg"
                            alt="testimonial quote icon"
                            className="mb-4 w-fit h-fit not-prose"
                          />
                          <h5 className="font-normal">{card.title}</h5>
                        </div>
                        <div>
                          <PortableText blocks={card.text} />
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                )
              })}
          </CarouselContent>
        </Carousel>
      </section>
      <Spacer size={bottomSpacer} />
    </>
  )
}
