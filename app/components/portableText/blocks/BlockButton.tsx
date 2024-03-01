import { Link } from "@remix-run/react"

import { ButtonArrow } from "~/components/icons/ButtonArrow"
import { Button } from "~/components/ui/button"

export default function BlogButton({ value }: any) {
  if (!value || !value.link || !value.link.slug || !value.link.title) {
    return null
  }

  const { link } = value

  return (
    <div className="mt-8">
      <Link to={link.slug}>
        <Button variant="default">
          <span>{link.title}</span>
          <ButtonArrow />
        </Button>
      </Link>
    </div>
  )
}
