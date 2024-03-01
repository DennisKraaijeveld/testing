import urlBuilder from "@sanity/image-url"

import { dataset, projectId } from "~/sanity/projectDetails"

import { Badge } from "../ui/badge"

export default function BlogCard({
  _id,
  featuredImage,
  title,
  slug,
  excerpt,
  categories,
}: any) {
  return (
    <article key={_id} className="flex flex-col items-start justify-between">
      <div className="relative w-full">
        <img
          src={urlBuilder({ projectId, dataset }).image(featuredImage).url()}
          alt={featuredImage.asset.altText ?? title}
          className="aspect-[16/9] w-full bg-gray-50 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        />
        <div className="absolute bottom-4 right-2">
          {categories &&
            categories.length > 0 &&
            categories.map((category: any) => (
              <Badge key={category} className="mr-2" variant="defaultNoHover">
                {category}
              </Badge>
            ))}
        </div>
      </div>
      <div className="max-w-xl mt-2 h-full">
        <div className="group relative">
          <h6 className="mt-3 uppercase tracking-wide line-clamp-2">
            <a href={`/articles/${slug!}`}>{title}</a>
          </h6>
          <p className="mt-5 line-clamp-3">{excerpt}</p>
        </div>
      </div>
    </article>
  )
}
