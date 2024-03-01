import { NavLink } from "@remix-run/react"

const InternalLinkComponent = ({ title, slug }: any) => (
  <NavLink
    to={slug ?? "/"}
    className={({ isActive, isPending }) =>
      isPending
        ? "text-content uppercase text-sm tracking-wide px-4 py-2 hover:bg-primary-grey/30 rounded-sm transition-all duration-200 ease-in-out"
        : isActive
          ? "text-content uppercase text-sm tracking-wide bg-primary-grey/30 rounded-sm px-4 py-2 transition-all duration-200 ease-in-out"
          : "text-content uppercase text-sm tracking-wide px-4 py-2 hover:bg-primary-grey/30 rounded-sm transition-all duration-200 ease-in-out"
    }
  >
    {title}
  </NavLink>
)

export default InternalLinkComponent
