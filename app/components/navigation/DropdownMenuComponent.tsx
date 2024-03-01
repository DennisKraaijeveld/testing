import { NavLink } from "@remix-run/react"
import React from "react"

import { cn } from "~/lib/utils"

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "../ui/navigation-menu"

export default function DropdownMenuComponent({ title, links }: any) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{title ?? "No title"}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
          {links.map((item: any) => (
            <ListItem key={item.title} title={item.title} href={item.slug}>
              {item.description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <NavLink
          to={props.href ?? "/"}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary-grey/30 focus:bg-accent focus:text-primary-light",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none tracking-wider">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground focus:text-primary-light">
            {children}
          </p>
        </NavLink>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
