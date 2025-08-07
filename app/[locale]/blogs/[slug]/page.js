"use client";

import Image from "next/image";
import blogsData from "../blogs.json";
import { useParams, notFound } from "next/navigation";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";


function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function BlogDetailPage() {
  const params = useParams();
  const { slug } = params;

  // Find the blog by slug field
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) return notFound();

  // Latest blogs (excluding current)
  const latestBlogs = blogsData.filter((b) => b.slug !== blog.slug).slice(0, 5);

  return (
    <div className="nav-space container flex flex-col md:flex-row md:w-11/12 mx-auto gap-6 lg:gap-10 mb-10">
      {/* Left Side: Blog Content */}
      <div className="md:w-8/12">
        <Image
          src={blog.featured_image}
          alt={blog.featured_alt}
          width={900}
          height={400}
          className="rounded-lg object-cover w-full h-120 mt-12 mb-6"
        />
        <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
        <div className="text-gray-500 mb-6">
          By {blog.author} &middot; {blog.date}
        </div>
        <div className="mb-8" dangerouslySetInnerHTML={{ __html: blog.body }} />
        {/* 2-column images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {blog.images && blog.images.map((img, idx) => (
            <Image
              key={idx}
              src={img}
              alt={blog.alt && blog.alt[idx] ? blog.alt[idx] : ""}
              width={400}
              height={300}
              className="rounded-md object-cover w-full h-64"
            />
          ))}
        </div>
        <div dangerouslySetInnerHTML={{ __html: blog.moreText }} />
        <div className="flex justify-between">
        <a href="" className="flex items-center mt-auto pt-5 group text-primary-blue-2">
                    <FiArrowLeft size={20} className="text-lg transform md:group-hover:-translate-x-4 transition-transform duration-300" />
                    <div className="btn-back">Previous</div>
        </a>
        <a href="" className="flex items-center mt-auto pt-5 group text-primary-blue-2">
                    <div className="btn-info">Next</div>
                    <FiArrowRight size={20} className="text-lg transform md:group-hover:translate-x-4 transition-transform duration-300" />
        </a>
        </div>
      </div>

      {/* Right Side: Latest Blogs (fixed) */}
      <div className="md:w-4/12">
        <div className="sticky top-32">
          <h2 className="text-xl font-bold mb-4 text-primary-blue-2">Latest Blogs</h2>
          <div className="grid grid-cols-1 gap-4 mb-4">
            {latestBlogs.map((item, idx) => (
              <div key={idx} className="flex gap-3 items-start p-2">
                <Image
                  src={item.featured_image}
                  alt={item.title}
                  width={60}
                  height={60}
                  className="rounded object-cover w-16 h-16"
                />
                <div>
                  <a href={`/blogs/${item.slug}`} className="font-semibold hover:underline text-primary-blue-2">
                    {item.title}
                  </a>
                  <div className="text-xs text-gray-500">
                    By {item.author} &middot; {item.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a href="/blogs" className="flex items-center mt-auto pt-5 group text-primary-blue-2">
            <div className="btn-info">View all Blogs</div>
            <FiArrowRight size={20} className="text-lg transform md:group-hover:translate-x-4 transition-transform duration-300" />
          </a>
          {/* <p className="p-10 border-gray-300 bg-primary-blue-light text-center rounded-md">No new Blogs yet</p> */}
        </div>
      </div>
    </div>
  );
}
