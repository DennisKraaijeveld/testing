import type { BlogDocument } from "~/types/blog"

import { Spacer } from "../ui/spacer"
import BlogCard from "./BlogCard"

export default function RelatedPosts({ posts }: any) {
  return (
    <>
      <Spacer size="xs" />
      <section>
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2>Related Posts</h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 lg:gap-x-10 gap-y-14 lg:mx-0 lg:max-w-none md:grid-cols-3">
            {posts.map((blog: BlogDocument) => (
              <BlogCard key={blog._id} {...blog} />
            ))}
          </div>
        </div>
      </section>
      <Spacer size="xs" />
    </>
  )
}
