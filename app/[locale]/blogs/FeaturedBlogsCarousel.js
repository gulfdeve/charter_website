"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function FeaturedBlogsCarousel({ featuredBlogs }) {
  const [current, setCurrent] = useState(0);
  const [show, setShow] = useState(true);
  const [displayedIndex, setDisplayedIndex] = useState(0);

  const changeSlide = (newIndex) => {
    setShow(false);
    setTimeout(() => {
      setDisplayedIndex(newIndex);
      setCurrent(newIndex);
      setShow(true);
    }, 400);
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

  return (
    <div className="md:container md:mx-auto md:mt-10 relative overflow-hidden h-64 md:h-[500px]">
      <Link href={`/blogs/${featuredBlogs[displayedIndex]?.slug}`} className="block h-full w-full">
        <Image
          src={featuredBlogs[displayedIndex]?.featured_image || '/images/default-blog.webp'}
          alt={featuredBlogs[displayedIndex]?.featured_alt || "Blog banner"}
          key={displayedIndex}
          width={1200}
          height={400}
          className={`md:rounded-lg object-cover w-full h-full cursor-pointer transition-opacity duration-700 ${show ? 'opacity-100' : 'opacity-0'}`}
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
  );
}

