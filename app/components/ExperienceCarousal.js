"use client";
import React, { useEffect, useRef } from "react";
import EmblaCarousel from "embla-carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useData } from "../context/DataContext";
import { useLanguage } from "@/app/context/LanguageContext";
import Image from "next/image";
// import Link from "next/link";
import { useRouter, usePathname, Link } from "@/app/i18n/routing";

export default function ExperienceCarousal() {
  const { data, loading, error } = useData();
  const { language } = useLanguage();
  const emblaDesktopRef = useRef(null);
  const emblaMobileRef = useRef(null);
  const emblaDesktopInstance = useRef(null);
  const emblaMobileInstance = useRef(null);

  // Initialize and autoplay the desktop carousel
  useEffect(() => {
    if (emblaDesktopRef.current) {
      emblaDesktopInstance.current = EmblaCarousel(emblaDesktopRef.current, {
        align: "start",
        loop: true,
      });
      const autoplayDesktop = setInterval(() => {
        emblaDesktopInstance.current?.scrollNext();
      }, 3000);
      return () => {
        clearInterval(autoplayDesktop);
        emblaDesktopInstance.current?.destroy();
      };
    }
  }, []);

  // Initialize and autoplay the mobile carousel
  useEffect(() => {
    if (emblaMobileRef.current) {
      emblaMobileInstance.current = EmblaCarousel(emblaMobileRef.current, {
        align: "start",
        loop: true,
      });
      const autoplayMobile = setInterval(() => {
        emblaMobileInstance.current?.scrollNext();
      }, 3000);
      return () => {
        clearInterval(autoplayMobile);
        emblaMobileInstance.current?.destroy();
      };
    }
  }, []);

  const scrollPrevDesktop = () => emblaDesktopInstance.current?.scrollPrev();
  const scrollNextDesktop = () => emblaDesktopInstance.current?.scrollNext();

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-primary-yellow pt-10 p-5">
        <h2 className="text-primary-blue text-center font-bold text-4xl pt-2">
        EXPLORE MORE YACHT TRIPS & EXPERIENCES
        </h2>
        <div className="relative w-full h-full overflow-hidden bg-primary-yellow xl:px-32 container mx-auto py-10">
          {/* Desktop Carousel */}
          <div className="embla__viewport1 lg:block hidden" ref={emblaDesktopRef}>
            <div className="embla__container1 flex">
              {!loading &&
                data?.experiences?.map((experience) => (
                  <div key={experience.id} className="embla__slide1 p-4">
                    <div className="relative bg-transparent rounded-lg overflow-hidden space-y-5">
                      <Image
                        src={`https://www.centauruscharter.com/product/images/${experience.thumbnail_image}`}
                        alt={experience.translations?.[language]?.title}
                        width={450}
                        height={0}
                        className="h-[24rem] 3xl:h-[30rem] rounded-lg"
                        
                        loading="lazy"
                      />
                      <div className="absolute bottom-0 left-0 w-full bg-black-gradient p-4 text-white rounded-lg">
                        <h3 className="text-3xl font-bold text-left mb-3">
                          <Link href={`/yacht-trips/${experience.slug}`}>
                          {experience.translations?.[language]?.title}
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
          {/* Mobile Carousel */}
          <div className="embla__viewport lg:hidden block" ref={emblaMobileRef}>
            <div className="embla__container flex">
              {!loading &&
                data?.experiences?.map((experience) => (
                  <div key={experience.id} className="embla__slide p-4">
                    <div className="relative bg-gray-200 overflow-hidden">
                      <Image
                        src={`https://www.centauruscharter.com/product/images/${experience.thumbnail_image}`}
                        alt={experience.translations?.[language]?.title}
                        width={450}
                        height={0}
                        className="h-[27rem] rounded-lg"
                        style={{ height: "auto" }}
                        loading="lazy"
                      />
                      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-10 p-4 text-white">
                        <h3 className="text-4xl font-bold text-left">
                          <Link href={`/yacht-trips/${experience.slug}`}>
                            {experience.translations[language].name_of_yacht}
                          </Link>
                        </h3>
                        <p className="text-xl font-bold text-left">
                          {experience.translations[language].slider_text}
                        </p>
                        <Link href={`/yacht-trips/${experience.slug}`}>
                          <button className="flex flex-row items-center justify-center py-1 px-6 md:py-2 md:px-8 border-4 border-[#e1ae48] rounded-md bg-primary-yellow hover:bg-primary-yellow-dark text-primary-blue font-bold text-base md:text-sm xl:text-base transition-all duration-300">
                            Book Now
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {/* Navigation Buttons for Desktop */}
          <button
            aria-label="go previous slide"
            className="bg-primary-blue text-primary-yellow hover:bg-primary-yellow hover:text-primary-blue transition duration-150 ease-in-out absolute left-2 lg:left-32 top-1/2 -translate-y-1/2 bg-gray-800 text-white w-14 aspect-square rounded-full flex items-center justify-center hover:bg-gray-700 z-10"
            onClick={scrollPrevDesktop}
          >
            <IoIosArrowBack size={30} />
          </button>
          <button
            aria-label="go next slide"
            className="bg-primary-blue text-primary-yellow hover:bg-primary-yellow hover:text-primary-blue transition duration-150 ease-in-out absolute right-4 lg:right-32 top-1/2 -translate-y-1/2 bg-gray-800 text-white w-14 aspect-square rounded-full flex items-center justify-center hover:bg-gray-700 z-10"
            onClick={scrollNextDesktop}
          >
            <IoIosArrowForward size={30} />
          </button>
        </div>
      </div>
    </>
  );
}
