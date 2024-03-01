import urlBuilder from "@sanity/image-url"

import { cn, formatDateTime } from "~/lib/utils"
import { dataset, projectId } from "~/sanity/projectDetails"

import { Badge } from "../ui/badge"

export default function BlogHero({ hero }: { hero: any }) {
  const { title, featuredImage, createdAt, categories } = hero

  let bgImage

  if (featuredImage) {
    bgImage = featuredImage.blackAndWhite
      ? urlBuilder({ projectId, dataset })
          .image(featuredImage)
          .saturation(-100)
          .url()
      : urlBuilder({ projectId, dataset }).image(featuredImage).url() || ""
  }

  const opacity = 40

  return (
    <section
      className={cn("bg-cover bg-no-repeat bg-center relative h-[520px]")}
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: opacity ? opacity / 100 : 0.4 ?? 0.4 }}
      ></div>
      <div className="container isolate h-full">
        <div className="grid grid-cols-10 gap-x-10 text-left text-content-light z-10 h-full">
          <div className="col-span-7 self-center">
            {title && <h1 className="text-content-light">{title}</h1>}
          </div>
          <div className="col-span-3 self-center flex flex-col gap-5">
            <dl>
              <dt className="font-subtitle font-medium uppercase text-primary mb-2.5">
                Date
              </dt>
              <dd className="text-content-light">
                {formatDateTime(createdAt)}
              </dd>
            </dl>
            <dl>
              <dt className="font-subtitle font-medium uppercase text-primary mb-2.5">
                Category
              </dt>
              <div className="flex space-x-2">
                {categories &&
                  categories.length > 0 &&
                  categories.map((category: any) => (
                    <dd key={category}>
                      <Badge key={category._id} variant="defaultNoHover">
                        {category}
                      </Badge>
                    </dd>
                  ))}
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
