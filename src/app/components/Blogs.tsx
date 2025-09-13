import { blogs } from "@/contents/blogs";
import Link from "next/link";
import React from "react";

export default function Blogs() {
  return (
    <section className="py-20 container max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center  ">
        Latest Blog Posts
      </h2>
      <div>
        {blogs.map((blog) => (
          <article
            key={blog.slug}
            className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6  "
          >
            <Link href={`/blogs/${blog.slug}`}>
              <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors ">
                {blog.title}
              </h3>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
