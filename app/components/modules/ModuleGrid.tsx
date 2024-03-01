import slugify from "react-slugify"

import type { SubMenuProps } from "~/types/generic"
import type { SanityModules } from "~/types/modules"

import { Link } from "../global/Link"
import Module from "./Module"

type Props = {
  items: SanityModules[]
  subMenuData: SubMenuProps | null
}

export default function ModuleGrid({ items, subMenuData }: Props) {
  return (
    <ul className="grid grid-cols-1">
      {items.map((item, index) => {
        if (index === 1 && subMenuData?.showSubmenu) {
          return (
            <div
              key={index}
              className="bg-[#D5D9D9] sticky top-[116px] inset-x-0 z-[2000]"
            >
              <div className="container py-4">
                <div className="flex space-x-6 font-header text-center w-full justify-center font-medium">
                  {subMenuData?.submenuItems?.map((item) => (
                    <Link
                      to={`#${slugify(item?.submenuTitle)}`}
                      key={item?.submenuTitle}
                      className="hover:opacity-100 opacity-80"
                    >
                      {item?.submenuTitle}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )
        }

        if (isModule(item)) {
          // Render modules
          return (
            <li key={item._key}>
              <Module module={item} subMenuData={subMenuData} />
            </li>
          )
        }
        return null
      })}
    </ul>
  )
}

const isModule = (item: SanityModules): item is SanityModules => {
  return (item as SanityModules)._type?.startsWith("module")
}
