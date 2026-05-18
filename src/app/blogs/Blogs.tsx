import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";

import { blogs } from "@/data/blogs";

export default function Blogs() {
  const isSingleBlog = blogs.length === 1;

  return (
    <div className="bg-background pt-24 text-secondary">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="mb-4 font-extrabold text-secondary ">Our Blog</h2>

          <p className="mx-auto max-w-2xl  text-secondary">
            Latest insights, tips, and stories about wheatgrass, wellness, and
            healthy living from Xeda Farm
          </p>
        </div>

        <div
          className={`grid gap-8 ${
            isSingleBlog
              ? "grid-cols-1 place-items-center"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blogs/${blog.slug}`}
              className={`group flex flex-col overflow-hidden rounded-2xl border border-foreground/20 bg-background/95 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-foreground-400 hover:shadow-xl hover:shadow-foreground-500/20 ${
                isSingleBlog ? "w-full max-w-md" : ""
              }`}
            >
              <div className="relative aspect-square w-full overflow-hidden bg-background">
                <Image
                  src={blog.cardImage}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-grow flex-col p-6">
                <div className="mb-3 flex items-center gap-2 text-sm text-primary-600">
                  <FaCalendarAlt className="text-green-600" aria-hidden />
                  <span>{blog.date}</span>
                </div>

                <h3 className="mb-3 text-2xl font-bold text-secondary-900 transition-colors group-hover:text-foreground-600 ">
                  {blog.title}
                </h3>

                <p className="mb-4 flex-grow  leading-relaxed text-secondary">
                  {blog.excerpt}
                </p>

                <span className="inline-block text-sm font-medium text-foreground-600 transition-transform group-hover:translate-x-2">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
