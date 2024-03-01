import { Link } from "@remix-run/react"
import slugify from "react-slugify"

import type { SubMenuProps } from "~/types/generic"

export function Submenu({ items }: { items: SubMenuProps["submenuItems"] }) {
  const subMenuTitles = items?.filter((item) => item?.submenuTitle)

  return (
    <div className="bg-primary-accent sticky top-0 inset-x-0 ">
      <div className="container py-4">
        <div className="flex space-x-6 font-header text-center w-full justify-center font-medium">
          {subMenuTitles?.map((item) => (
            <Link
              to={`#${slugify(item?.submenuTitle)}`}
              key={item?.submenuTitle}
              className="hover:opacity-100 opacity-70"
            >
              {item?.submenuTitle}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
