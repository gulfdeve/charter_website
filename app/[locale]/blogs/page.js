"use client";
import React from 'react'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const carouselImages = [
  '/images/formula1-2025-banner.webp',
  '/images/race-formula-one.webp',
  '/images/formula1-2025-banner.webp',
];

const blogPosts = [
  {
    image: '/images/formula1-2025-banner.webp',
    title: 'First Blog Post',
    author: 'Centaurus Charter',
    date: 'July 2, 2025',
  },
  {
    image: '/images/race-formula-one.webp',
    title: 'Second Blog Post',
    author: 'Centaurus Charter',
    date: 'July 1, 2025',
  },
  {
    image: '/images/formula1-2025-banner.webp',
    title: 'Third Blog Post',
    author: 'Centaurus Charter',
    date: 'June 30, 2025',
  },
  {
    image: '/images/race-formula-one.webp',
    title: 'Fourth Blog Post',
    author: 'Centaurus Charter',
    date: 'June 30, 2025',
  },
  {
    image: '/images/formula1-2025-banner.webp',
    title: 'Fifth Blog Post',
    author: 'Centaurus Charter',
    date: 'June 30, 2025',
  },
  {
    image: '/images/race-formula-one.webp',
    title: 'Sixth Blog Post',
    author: 'Centaurus Charter',
    date: 'June 30, 2025',
  },
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
      <div className="container mx-auto flex flex-col md:flex-row items-center text-center md:text-left gap-8 py-10">
        <div className="flex-shrink-0 md:w-1/2">
          <Image
            src="/images/formula1-2025-banner.webp"
            alt="Feature"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-64"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Featured Blog Section</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Leo egestas lobortis pulvinar dignissim tellus faucibus euismod nunc. Aliquam eu massa semper ornare mi pretium proin tellus. Eu ullamcorper vitae sit egestas tristique lectus elementum mollis vitae. Id fermentum et scelerisque ac consequat ac. Auctor pulvinar sed a pretium risus amet venenatis.
          </p>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
        {blogPosts.map((post, idx) => (
          <div key={idx} className="bg-white rounded-lg custom-shadow p-4 flex flex-col">
            <Image
              src={post.image}
              alt={post.title}
              width={300}
              height={200}
              className="rounded-md object-cover w-full h-40 mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
            <div className="text-sm text-gray-500">
              By {post.author} &middot; {post.date}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

