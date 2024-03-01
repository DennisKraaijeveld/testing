import urlBuilder from "@sanity/image-url"

import { Spacer } from "~/components/ui/spacer"
import { dataset, projectId } from "~/sanity/projectDetails"

export default function BlogConclusionBlock({ value }: any) {
  const { title, content, author, authorTitle, image } = value

  const imageUrl = image
    ? urlBuilder({ projectId, dataset }).image(image).url()
    : ""

  return (
    <>
      <Spacer size="xs" />
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden p-12 bg-content-light">
          <div className="relative mx-auto max-w-2xl lg:mx-0">
            {title && <h5>{title}</h5>}

            {content && <p className="mb-0">{content}</p>}

            {(author || authorTitle) && (
              <div className="flex items-center gap-x-4">
                {imageUrl && (
                  <img
                    className="h-12 w-12 rounded-full bg-gray-50 object-cover"
                    src={imageUrl}
                    alt={author || "Author"}
                  />
                )}
                <div>
                  {author && (
                    <div className="font-header text-lg">{author}</div>
                  )}

                  {authorTitle && (
                    <div className="mt-0.5 font-subtitle uppercase opacity-70 text-sm">
                      {authorTitle}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Spacer size="xs" />
    </>
  )
}
