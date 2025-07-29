"use client";
import React from 'react'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import blogs from './blogs.json';
import Link from 'next/link';

const carouselImages = [
  '/images/centaurus-charter-luxury-yacht-f1-dubai.webp',
  '/images/f1-yacht-experience.webp',
  '/images/formula1-track-race-car-abu-dhabi-grand-prix.webp',
];

export default function BlogPage() {
  const [current, setCurrent] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((current + 1) % carouselImages.length);
  const prevSlide = () => setCurrent((current - 1 + carouselImages.length) % carouselImages.length);

  // Use blogs.json data
  const featuredBlogs = blogs.filter(blog => blog.isFeatured);
  const featuredBlog = featuredBlogs[0];
  const blogPosts = featuredBlogs;

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
        <Image
          src={carouselImages[current]}
          alt="Banner"
          width={1200}
          height={400}
          className="md:rounded-lg object-cover w-full h-64 md:h-[500px]"
        />
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

