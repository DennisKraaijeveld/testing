import { Link } from "@remix-run/react"
import slugify from "react-slugify"

import type { BlogDocument } from "~/types/blog"
import type { RecentPostsProps } from "~/types/modules"

import BlogCard from "../blog/BlogCard"
import { ButtonArrow } from "../icons/ButtonArrow"
import { Button } from "../ui/button"
import { Spacer } from "../ui/spacer"

export default function RecentPosts({
  title,
  text,
  blogs,
  submenuTitle,
}: RecentPostsProps) {
  return (
    <>
      <Spacer size="xs" />
      <section
        id={submenuTitle ? slugify(submenuTitle) : undefined}
        className="scroll-mt-10"
      >
        <div className="bg-content-light py-12 lg:py-20 my-12 lg:my-20">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2>{title}</h2>
              <p className="lead mt-4">{text}</p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 lg:gap-x-10 gap-y-14 lg:mx-0 lg:max-w-none md:grid-cols-3">
              {blogs.map((blog: BlogDocument) => (
                <BlogCard key={blog._id} {...blog} />
              ))}
            </div>
            <div className="mx-auto max-w-2xl text-center mt-10">
              <Link to="/articles">
                <Button>
                  <span>All blogs</span>
                  <ButtonArrow />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Spacer size="xs" />
    </>
  )
}
