import { Link } from "@remix-run/react"

import { cleanStega } from "~/lib/utils"

export default function FooterBlock({ block }: { block: any }) {
  if (cleanStega(block.linksOrPosts) === "links") {
    return (
      <div key={block._key} className="col-span-2">
        <h3 className="text-lg uppercase text-content font-subtitle font-medium tracking-wide">
          {block.title || ""}
        </h3>
        <ul className="mt-6 space-y-4">
          {block?.links?.map((item: any) => (
            <li key={item.title}>
              <Link
                to={item.slug || "/"}
                className="uppercase tracking-wide text-content text-sm opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  } else if (cleanStega(block.linksOrPosts) === "posts") {
    return (
      <div key={block._key} className="col-span-2">
        <h3 className="text-lg uppercase text-content font-subtitle font-medium tracking-wide">
          {block.title || ""}
        </h3>
        <ul className="mt-6 space-y-4">
          {block?.posts?.map((item: any) => (
            <li key={item.title}>
              <Link
                to={item.slug || "/"}
                className="uppercase tracking-wide text-content text-sm opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
