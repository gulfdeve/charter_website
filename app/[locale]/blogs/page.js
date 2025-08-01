"use client";
import React from 'react'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import blogs from './blogs.json';
import Link from 'next/link';

export default function BlogPage() {
  const [current, setCurrent] = useState(0);

  // Use blogs.json data
  const featuredBlogs = blogs.filter(blog => blog.isFeatured);
  const featuredBlog = featuredBlogs[0];
  const blogPosts = featuredBlogs;

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % featuredBlogs.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [featuredBlogs.length]);

  const nextSlide = () => setCurrent((current + 1) % featuredBlogs.length);
  const prevSlide = () => setCurrent((current - 1 + featuredBlogs.length) % featuredBlogs.length);

  return (
    <>
    <div className="bg-white w-full h-full nav-space">
        <div className='hidden'>
          <img
            alt="contact header banner"
            src="/Contactheader.webp"
            className="w-full"
            />
        </div>

      </div>
      <div className="">
      <div className="md:container md:mx-auto md:mt-10 relative">
        <Link href={`/blogs/${featuredBlogs[current]?.slug}`}>
          <Image
            src={featuredBlogs[current]?.featured_image || '/images/default-blog.webp'}
            alt={featuredBlogs[current]?.featured_alt || "Blog banner"}
            width={1200}
            height={400}
            className="md:rounded-lg object-cover w-full h-64 md:h-[500px] cursor-pointer transition-transform duration-300"
          />
        </Link>
        
        {/* Blog Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 md:p-8">
          <div className="text-white">
            <Link href={`/blogs/${featuredBlogs[current]?.slug}`} className="block">
              <h2 className="text-xl md:text-2xl font-bold mb-2 line-clamp-2 hover:text-primary-yellow transition-colors duration-300 cursor-pointer">
                {featuredBlogs[current]?.title}
              </h2>
            </Link>
            <div className="text-sm md:text-base text-gray-200 mb-3">
              By {featuredBlogs[current]?.author} • {featuredBlogs[current]?.date}
            </div>
            <div 
              className="text-sm md:text-base text-gray-200 line-clamp-2"
              dangerouslySetInnerHTML={{
                __html: featuredBlogs[current]?.body 
                  ? featuredBlogs[current].body.replace(/<[^>]*>/g, '').slice(0, 150) + "..."
                  : ""
              }}
            />
          </div>
        </div>
        
        <button
          onClick={prevSlide}
          className="hidden md:block absolute left-8 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2"
        >
          <IoIosArrowBack size={30} />
        </button>
        <button
          onClick={nextSlide}
          className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2"
        >
          <IoIosArrowForward size={30} />
        </button>
      </div>
      {/* FEATURED BLOG - unhide when there are many blogs <div className="container mx-auto flex flex-col md:flex-row items-center text-center md:text-left gap-8 py-10">
        <div className="flex-shrink-0 md:w-1/2">
          <Image
            src={featuredBlog.featured_image}
            alt={featuredBlog.title}
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-64"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">
            <Link href={`/blogs/single-blog/${featuredBlog.slug}`} className="text-primary-blue-2 font-semibold">
              {featuredBlog.title}
            </Link>
          </h2>
          <div className="text-sm text-gray-500 mb-2">
            By {featuredBlog.author} &middot; {featuredBlog.date}
          </div>
          <div
          className="mb-4"
          dangerouslySetInnerHTML={{
            __html: featuredBlog.body
              ? featuredBlog.body.slice(0, 200) + "..."
              : ""
          }}
        />
        </div>
      </div> */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
        {blogPosts.map((post, idx) => (
          <Link href={`/blogs/${post.slug}`} className="text-primary-blue-2">
          <div key={idx} className="bg-white rounded-lg custom-shadow p-4 flex flex-col">
            
            <Image
              src={post.featured_image}
              alt={post.title}
              width={300}
              height={200}
              className="rounded-md object-cover w-full h-40 mb-4"
            />
            <h3 className="text-lg font-semibold mb-2 text-primary-blue-2">
                {post.title}
            </h3>
            <div className="text-sm text-gray-500 mb-2">
              By {post.author} &middot; {post.date}
            </div>
          </div>
         </Link>

        ))}
      </div>
    </div>
    </>
  );
}

