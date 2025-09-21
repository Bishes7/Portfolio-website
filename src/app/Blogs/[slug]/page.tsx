import { blogs } from "@/contents/blogs";
import { notFound } from "next/navigation";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  return (
    <div className="container max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
        <span className="flex items-center">
          <FaCalendarAlt className="mr-2" />
          {new Date(blog.date).toLocaleDateString()}
        </span>
        <span
          className="flex items-center
        "
        >
          <FaClock className="mr-2" />
          {blog.readTime}
        </span>
      </div>
      <article className="prose prose-lg dark:prose-invert max-w-none">
        {blog.content.split("\n").map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </article>
    </div>
  );
}
