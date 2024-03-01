import { Link } from "@remix-run/react"

export function Logo() {
  return (
    <Link to="/">
      <img src="/logo.png" alt="Luminous Life" className="h-6 lg:h-8 w-48" />
    </Link>
  )
}
