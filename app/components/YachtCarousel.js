"use client";
import React, { useEffect, useRef } from "react";
import EmblaCarousel from "embla-carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useData } from "../context/DataContext";
import { useLanguage } from "@/app/context/LanguageContext";
import Image from "next/image";

// import Link from "next/link";
import { useRouter, usePathname, Link } from "@/app/i18n/routing";

export default function YachtCarousal() {
  const { data, loading } = useData();
  const { language } = useLanguage();
  const emblaRef = useRef(null);
  const emblaInstance = useRef(null);

  // Initialize Embla carousel with autoplay
  useEffect(() => {
    if (emblaRef.current) {
      emblaInstance.current = EmblaCarousel(emblaRef.current, {
        align: "start",
        loop: true,
      });
      const autoplay = setInterval(() => {
        emblaInstance.current?.scrollNext();
      }, 3000);
      return () => {
        clearInterval(autoplay);
        emblaInstance.current?.destroy();
      };
    }
  }, []);

  const scrollPrev = () => emblaInstance.current?.scrollPrev();
  const scrollNext = () => emblaInstance.current?.scrollNext();

  return (
    <div className="flex flex-col items-center justify-center bg-primary-yellow pt-10 p-5">
      <h2 className="text-primary-blue text-center font-bold text-4xl pt-2">
        EXPLORE OUR YACHT
      </h2>
      <div className="relative w-full h-full overflow-hidden bg-primary-yellow xl:px-32 container mx-auto py-10">
        {/* Single Embla Carousel */}
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container flex">
            {!loading &&
              data?.products?.map((product) => (
                <div
                  key={product.id}
                  className="embla__slide p-4 w-full lg:basis-[calc(100%/3)] flex-none"
                >
                  <div className="relative bg-transparent rounded-lg overflow-hidden space-y-5">
                    <Image
                      src={`https://www.centauruscharter.com/product/images/${product.thumbnail_image}`}
                      alt={product.translations[language].name_of_yacht}
                      width={450}
                      height={0}
                      className="w-full h-[24rem] rounded-lg object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-black-gradient p-4 text-white rounded-lg">
                      <h3 className="text-3xl font-bold text-left mb-3">
                        <Link href={`/yacht-rentals/${product.slug}`}>
                          {product.translations[language].name_of_yacht}
                        </Link>
                      </h3>
                      <p className="text-md text-left mb-3">
                        {product.translations[language].slider_text}
                      </p>
                      <Link href={`/yacht-rentals/${product.slug}`}>
                        <button className="yellow-solid-button uppercase">
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        {/* Navigation Buttons */}
        <button
          aria-label="go previous slide"
          className="bg-primary-blue text-primary-yellow hover:bg-primary-yellow hover:text-primary-blue transition duration-150 ease-in-out absolute left-2 lg:left-32 top-1/2 -translate-y-1/2 bg-gray-800 text-white w-14 aspect-square rounded-full flex items-center justify-center hover:bg-gray-700 z-10"
          onClick={scrollPrev}
        >
          <IoIosArrowBack size={30} />
        </button>
        <button
          aria-label="go next slide"
          className="bg-primary-blue text-primary-yellow hover:bg-primary-yellow hover:text-primary-blue transition duration-150 ease-in-out absolute right-4 lg:right-32 top-1/2 -translate-y-1/2 bg-gray-800 text-white w-14 aspect-square rounded-full flex items-center justify-center hover:bg-gray-700 z-10"
          onClick={scrollNext}
        >
          <IoIosArrowForward size={30} />
        </button>
      </div>
    </div>
  );
}
