"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import blogs from './blogs.json';
import Link from 'next/link';

export default function BlogPage() {
  // Get featured blogs
  const featuredBlogs = blogs.filter(blog => blog.isFeatured).slice(0, 5);
  const blogPosts = blogs;
  const [current, setCurrent] = useState(0);
  const [show, setShow] = useState(true);
  const [displayedIndex, setDisplayedIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

const changeSlide = (newIndex) => {
  setShow(false);
  setTimeout(() => {
    setDisplayedIndex(newIndex); // Change image after fade-out
    setCurrent(newIndex);
    setShow(true);
  }, 400); // match your transition duration
};

const prevSlide = () => {
  const newIndex = current === 0 ? featuredBlogs.length - 1 : current - 1;
  changeSlide(newIndex);
};

const nextSlide = () => {
  const newIndex = (current + 1) % featuredBlogs.length;
  changeSlide(newIndex);
};

// Auto-scroll effect
useEffect(() => {
  const interval = setInterval(() => {
    nextSlide();
  }, 5000);
  return () => clearInterval(interval);
}, [current, featuredBlogs.length]);

const featuredBlog = blogs.find(
  (blog) => blog.title === "Experience the Formula 1 Grand Prix from a Luxury Yacht in Dubai"
);
 if (!mounted) return null; // Prevents SSR mismatch

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
        <div className="md:container md:mx-auto md:mt-10 relative overflow-hidden">
          <Link href={`/blogs/${featuredBlogs[displayedIndex]?.slug}`}>
            <Image
              src={featuredBlogs[displayedIndex]?.featured_image || '/images/default-blog.webp'}
              alt={featuredBlogs[displayedIndex]?.featured_alt || "Blog banner"}
              key={displayedIndex}
              width={1200}
              height={400}
              className={`md:rounded-lg object-cover w-full h-64 md:h-[500px] cursor-pointer transition-transform duration-300 transition-opacity duration-700 ${show ? 'opacity-100' : 'opacity-0'}`}
            />
          </Link>

          <div className={`absolute bottom-0 top-0 left-0 right-0 md:rounded-lg bg-black backdrop-blur-sm bg-opacity-80 p-6 md:p-24
            transition-opacity duration-700 flex items-center`}>
            <div className={`text-white max-w-2xl transition-opacity duration-700 ${show ? 'opacity-100' : 'opacity-0'}`}>
              <h2 className="text-xl md:text-4xl font-bold mb-6 line-clamp-2">
                {featuredBlogs[current]?.title}
              </h2>
              <div className="text-sm md:text-base text-gray-200 mb-3">
                By {featuredBlogs[current]?.author} • {featuredBlogs[current]?.date}
              </div>
              <div
                className="text-base md:text-lg text-gray-200 line-clamp-2"
                dangerouslySetInnerHTML={{
                  __html: featuredBlogs[current]?.body
                    ? featuredBlogs[current].body.replace(/<[^>]*>/g, '').slice(0, 150) + "..."
                    : ""
                }}
              />
              <Link href={`/blogs/${featuredBlogs[current]?.slug}`} className="block">
                <button className="blue-solid-button mt-4">
                  Read More
                </button>
              </Link>
            </div>
          </div>
            
          <button
            onClick={prevSlide}
            className="hidden absolute left-8 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2"
          >
            <IoIosArrowBack size={30} />
          </button>
          <button
            onClick={nextSlide}
            className="hidden absolute right-8 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2"
          >
            <IoIosArrowForward size={30} />
          </button>
          {/* Carousel Dots */}
        <div className="hidden md:flex absolute bottom-0 left-0 right-0 justify-center items-center gap-3 mb-6">
          {featuredBlogs.map((_, idx) => (
            <button
              key={idx}
              onClick={() => changeSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300
                ${displayedIndex === idx ? 'bg-white' : 'bg-primary-grey'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        </div>
      {/* FEATURED BLOG - unhide when there are many blogs  */}
      <div className="container mx-auto flex flex-col md:flex-row items-center text-center md:text-left gap-8 py-10">
        <div className="flex-shrink-0 md:w-1/2">
          <Link href={`/blogs/${featuredBlog.slug}`} className="text-primary-blue-2 font-semibold">
          <Image
            src={featuredBlog.featured_image}
            alt={featuredBlog.title}
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-64"
          />
          </Link>
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
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
        {blogPosts.map((post, idx) => (
          <Link href={`/blogs/${post.slug}`} key={post.slug} className="text-primary-blue-2">
          <div className="bg-white rounded-lg custom-shadow p-4 flex flex-col">
            
            <Image
              src={post.featured_image}
              alt={post.title}
              width={300}
              height={200}
              className="rounded-md object-cover w-full h-50 mb-4"
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

