"use client";
import React, { useEffect, useRef } from "react";
import EmblaCarousel from "embla-carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useData } from "../context/DataContext";
import { useLanguage } from "@/app/context/LanguageContext";
import Image from "next/image";
import { useRouter, usePathname, Link } from "@/app/i18n/routing";
import ExperienceMobCarousal from "@/app/components/ExperienceMobCarousal"
export default function ExperienceCarousal() {
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
      }, 100000000);
      return () => {
        clearInterval(autoplay);
        emblaInstance.current?.destroy();
      };
    }
  }, []);

  const scrollPrev = () => emblaInstance.current?.scrollPrev();
  const scrollNext = () => emblaInstance.current?.scrollNext();

  return (
    <div className="flex flex-col items-center justify-center bg-primary-yellow pt-10">
      <h2 className="container text-primary-blue text-center pt-2 ">
        EXPLORE MORE YACHT TRIPS & EXPERIENCES
      </h2>
      <div className="hidden md:block">
        <div className="relative w-full h-full overflow-hidden bg-primary-yellow container mx-auto py-10">
          {/* Single Embla Carousel */}
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container flex">
              {!loading &&
                data?.experiences?.map((experience) => (
                  <div
                    key={experience.id}
                    className="embla__slide p-4 w-full lg:basis-[calc(100%/3)] md:basis-[calc(100%/2)] flex-none"
                  >
                    <div className="relative bg-transparent rounded-lg overflow-hidden space-y-5">
                      <Image
                        src={`https://www.centauruscharter.net/product/images/${experience.thumbnail_image}`}
                        alt={experience.translations[language].title}
                        width={450}
                        height={0}
                        className="w-full h-[24rem] rounded-lg object-cover"
                        loading="lazy"
                      />
                      <div className="absolute bottom-0 left-0 w-full bg-black-gradient p-4 text-white rounded-lg">
                        <h3 className="text-3xl font-bold text-left mb-3">
                          <Link href={`/yacht-trips/${experience.slug}`}>
                            {experience.translations[language].title}
                          </Link>
                        </h3>
                        <p className="text-md text-left mb-3">
                          {experience.translations[language].preivew_text}
                        </p>
                        <Link href={`/yacht-trips/${experience.slug}`}>
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
            className="bg-primary-blue text-primary-yellow  transition duration-150 ease-in-out absolute left-2 lg:left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white w-14 aspect-square rounded-full flex items-center justify-center  z-10"
            onClick={scrollPrev}
          >
            <IoIosArrowBack size={30} />
          </button>
          <button
            aria-label="go next slide"
            className="bg-primary-blue text-primary-yellow transition duration-150 ease-in-out absolute right-4 lg:right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white w-14 aspect-square rounded-full flex items-center justify-center  z-10"
            onClick={scrollNext}
          >
            <IoIosArrowForward size={30} />
          </button>
        </div>
      </div>
      <div className="md:hidden block">
        <ExperienceMobCarousal/>
      </div>
    </div>
  );
}
