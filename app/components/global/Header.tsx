import { Link } from "@remix-run/react"
import { useEffect, useState } from "react"

import { cn } from "~/lib/utils"
import type { LinkType } from "~/types/settings"

import { ButtonArrow } from "../icons/ButtonArrow"
import UserIcon from "../icons/UserIcon"
import { Logo } from "../Logo"
import DropdownMenuComponent from "../navigation/DropdownMenuComponent"
import ExternalLinkComponent from "../navigation/ExternalLinkComponent"
import InternalLinkComponent from "../navigation/InternalLinkComponent"
import { Button } from "../ui/button"
import { NavigationMenu, NavigationMenuList } from "../ui/navigation-menu"
import MobileMenu from "./MobileMenu"

export function Header({ navigation }: { navigation: LinkType[] }) {
  const [isShrunk, setShrunk] = useState(false)

  useEffect(() => {
    const handler = () => {
      setShrunk(window.scrollY > 50)
    }
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <header
      className={cn(
        "lg:space-y-4 lg:py-6 py-4 sticky top-0 z-[1000] bg-white transition-all duration-300",
        {
          "lg:py-4 py-2": isShrunk,
        },
      )}
    >
      <div className="hidden lg:flex lg:justify-center">
        <Link to="/">
          <img
            src="/logo.png"
            alt="Luminous Life"
            className={cn(
              "transition-all duration-300 h-6 lg:h-10 w-60 object-contain",
              {
                "h-4 lg:h-6 w-48": isShrunk,
              },
            )}
          />
        </Link>
      </div>
      <nav
        className="flex container items-center justify-between gap-x-10"
        aria-label="Global"
      >
        <div className="flex lg:hidden">
          <Logo />
        </div>
        <div className="hidden lg:flex lg:flex-1"></div>
        <div className="hidden lg:flex lg:gap-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              {navigation.map((item, index) => {
                switch (item._type) {
                  case "linkInternal":
                    return <InternalLinkComponent key={index} {...item} />
                  case "linkExternal":
                    return <ExternalLinkComponent key={index} {...item} />
                  case "dropDownMenu":
                    return <DropdownMenuComponent key={index} {...item} />
                  default:
                    return null
                }
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="lg:flex lg:flex-1 items-center justify-end gap-x-2 hidden">
          <Link to="/contact-me">
            <Button>
              <span>Schedule a free call</span>
              <ButtonArrow />
            </Button>
          </Link>
          <div>
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
        </div>
        <div className="flex lg:hidden">
          <MobileMenu navigation={navigation} />
        </div>
      </nav>
    </header>
  )
}
