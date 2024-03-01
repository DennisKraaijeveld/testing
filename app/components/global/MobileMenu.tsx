import { Link, NavLink, useLocation } from "@remix-run/react"
import { useEffect, useState } from "react"

import type { LinkType } from "~/types/settings"

import { ButtonArrow } from "../icons/ButtonArrow"
import UserIcon from "../icons/UserIcon"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"
import { Button } from "../ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"

export default function MobileMenu({ navigation }: { navigation: LinkType[] }) {
  const [isSheetOpen, setSheetOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (isSheetOpen) {
      setSheetOpen(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  return (
    <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger>
        <span className="sr-only">Open main menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 text-primary"
        >
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </SheetTrigger>
      <SheetContent className="z-[1001]">
        <ul className="flex flex-col">
          {navigation.map((item) => {
            if (item._type === "linkExternal") {
              return (
                <li key={item._key || item.title} className="py-2">
                  <a
                    href={item.slug ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-content uppercase text-sm tracking-wide px-4 py-2 hover:bg-primary-grey/30 rounded-sm transition-all duration-200 ease-in-out"
                  >
                    {item.title}
                  </a>
                </li>
              )
            } else if (item._type === "linkInternal") {
              return (
                <li key={item._key || item.title} className="py-2">
                  <NavLink
                    to={item.slug ?? "/"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "text-content uppercase text-sm tracking-wide px-4 py-2 hover:bg-primary-grey/30 rounded-sm transition-all duration-200 ease-in-out"
                        : isActive
                          ? "text-content uppercase text-sm tracking-wide bg-primary-grey/30 rounded-sm px-4 py-2 transition-all duration-200 ease-in-out"
                          : "text-content uppercase text-sm tracking-wide px-4 py-2 hover:bg-primary-grey/30 rounded-sm transition-all duration-200 ease-in-out"
                    }
                  >
                    {item.title}
                  </NavLink>
                </li>
              )
            } else if (item._type === "dropDownMenu") {
              return (
                <li key={item._key || item.title} className="py-2">
                  <Accordion type="single" collapsible>
                    <AccordionItem key={item._key} value={item._key!}>
                      <AccordionTrigger className="text-content uppercase text-sm tracking-wide px-4 py-2 hover:bg-primary-grey/30 rounded-sm transition-all duration-200 ease-in-out opacity-100 font-body">
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent className="px-4 py-2 space-y-2.5">
                        {item.links &&
                          item.links.length &&
                          item.links.map((item: any) => {
                            if (item._type === "linkExternal") {
                              return (
                                <li
                                  key={item._key || item.title}
                                  className="py-2"
                                >
                                  <a
                                    href={item.slug ?? "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-content uppercase text-sm tracking-wide px-4 py-2 hover:bg-primary-grey/30 rounded-sm transition-all duration-200 ease-in-out"
                                  >
                                    {item.title}
                                  </a>
                                </li>
                              )
                            } else if (item._type === "linkInternal") {
                              return (
                                <li
                                  key={item._key || item.title}
                                  className="py-2"
                                >
                                  <NavLink
                                    to={item.slug ?? "/"}
                                    className={({ isActive, isPending }) =>
                                      isPending
                                        ? "text-content uppercase text-sm tracking-wide px-4 py-2 hover:bg-primary-grey/30 rounded-sm transition-all duration-200 ease-in-out"
                                        : isActive
                                          ? "text-content uppercase text-sm tracking-wide bg-primary-grey/30 rounded-sm px-4 py-2 transition-all duration-200 ease-in-out"
                                          : "text-content uppercase text-sm tracking-wide px-4 py-2 hover:bg-primary-grey/30 rounded-sm transition-all duration-200 ease-in-out"
                                    }
                                  >
                                    {item.title}
                                  </NavLink>
                                </li>
                              )
                            } else return null
                          })}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </li>
              )
            } else return null
          })}
        </ul>
        <div className="flex flex-row items-center justify-between mt-4 absolute bottom-10 space-x-4">
          <Link to="/contact-me">
            <Button>
              <span>Schedule a call</span>
              <ButtonArrow />
            </Button>
          </Link>
          <Link to="/login">
            <Button
              variant="outline"
              size="icon"
              className="text-secondary-accent hover:text-white"
            >
              <UserIcon />
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
