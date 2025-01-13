"use client";
import React, { useEffect, useRef } from "react";
import EmblaCarousel from "embla-carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useData } from "../context/DataContext";
import { useLanguage } from "@/app/context/LanguageContext";

import Link from "next/link";
const TEMPORARY_DATA = [
  {
    id: 1,
    title: "Dubai Marina",
    description: "Thunder, Vassia & Etosha",
    image: "/yacht-rentals/56ftLagoona1.jpg",
  },
  {
    id: 2,
    title: "Dubai Marina Harbour",
    description: "Lagoona & Silver Creek",
    image: "/yacht-rentals/56ftLagoona1.jpg",
  },
  {
    id: 3,
    title: "Dubai Harbour Marina",
    description: "Poseidon",
    image: "/yacht-rentals/56ftLagoona1.jpg",
  },
  {
    id: 4,
    title: "Palm Jumeirah",
    description: "Atlantis, Pearl & Ruby",
    image: "/yacht-rentals/56ftLagoona1.jpg",
  },
  {
    id: 5,
    title: "Burj Al Arab",
    description: "Luxury Views",
    image: "/yacht-rentals/56ftLagoona1.jpg",
  },
  {
    id: 6,
    title: "The World Islands",
    description: "Private Yachts",
    image: "/yacht-rentals/56ftLagoona1.jpg",
  },
];

export default function YachtCarousal() {
  const { data, loading, error } = useData();
  const { language } = useLanguage();
  const emblaDesktopRef = useRef(null);
  const emblaMobileRef = useRef(null);
  const emblaDesktopInstance = useRef(null);
  const emblaMobileInstance = useRef(null);

  useEffect(() => {
    if (emblaDesktopRef.current) {
      emblaDesktopInstance.current = EmblaCarousel(emblaDesktopRef.current, {
        align: "start",
      });
    }
    if (emblaMobileRef.current) {
      emblaMobileInstance.current = EmblaCarousel(emblaMobileRef.current, {
        align: "start",
      });
    }
    return () => {
      emblaDesktopInstance.current?.destroy();
      emblaMobileInstance.current?.destroy();
    };
  }, []);

  const scrollPrevDesktop = () => emblaDesktopInstance.current?.scrollPrev();
  const scrollNextDesktop = () => emblaDesktopInstance.current?.scrollNext();

  const scrollPrevMobile = () => emblaMobileInstance.current?.scrollPrev();
  const scrollNextMobile = () => emblaMobileInstance.current?.scrollNext();

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-primary-yellow pt-10 p-5">
        <h1 className="font-Montserrat text-[#0D2343] text-center font-bold text-4xl pt-2">
          EXPLORE OUR YACHT
        </h1>

        <div className="relative w-full h-full overflow-hidden bg-primary-yellow xl:px-32 container mx-auto py-10">
          {/* Carousel Viewport */}
          <div
            className="embla__viewport1 lg:block hidden "
            ref={emblaDesktopRef}
          >
            <div className="embla__container1 flex">
              {/* Slides */}
              {!loading &&
                data?.products?.map((product) => (
                  <div key={product.id} className="embla__slide1 p-4">
                    <div className="relative bg-gray-200 shadow-lg space-y-5">
                      <img
                        src={`https://www.centauruscharter.com/product/images/${product.image}`}
                        className="h-[27rem]"
                      />
                      <div className="absolute bottom-0 left-0 w-full bg-black-gradient p-4 text-white">
                        <h3 className="text-4xl font-Montserrat font-bold text-left mb-3">
                          {product.translations[language].name_of_yacht}
                        </h3>
                        <p className="text-md font-Montserrat font-semibold text-left mb-3">
                          {product.translations[language].slider_text}
                        </p>

                        <Link href={`/yacht-rentals/${product.slug}`}>
                          <button className="yellow-solid-button">
                            Book Now
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div
            className="embla__viewport lg:hidden block "
            ref={emblaMobileRef}
          >
            <div className="embla__container flex">
              {/* Slides */}
              {!loading &&
                data?.products?.map((product) => (
                  <div key={product.id} className="embla__slide p-4 ">
                    <div className="relative bg-gray-200  overflow-hidden shadow-lg">
                      <img
                        src={`https://www.centauruscharter.com/product/images/${product.image}`}
                        className="h-[27rem] "
                      />

                      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-10 p-4 text-white">
                        <h3 className="text-4xl font-Montserrat font-bold text-left">
                          {product.translations[language].name_of_yacht}
                        </h3>
                        <p className="text-xl font-Montserrat font-bold text-left">
                          {product.translations[language].slider_text}
                        </p>

                        <Link href={`/yacht-rentals/${product.slug}`}>
                          <button className="flex flex-row items-center justify-center py-1 px-6 md:py-2 md:px-8  border-4 border-[#e1ae48] rounded-md bg-primary-yellow  hover:bg-primary-yellow-dark text-primary-blue font-Montserrat font-bold text-base md:text-sm xl:text-base transition-all duration-300">
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
            className="absolute left-2  lg:left-32 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white w-14 aspect-square rounded-full flex items-center justify-center hover:bg-gray-700 z-10"
            onClick={scrollPrevDesktop}
          >
            <IoIosArrowBack size={30} />
          </button>
          <button
            className="absolute right-4  lg:right-32 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white w-14 aspect-square rounded-full flex items-center justify-center hover:bg-gray-700 z-10"
            onClick={scrollNextDesktop}
          >
            <IoIosArrowForward size={30} />
          </button>
        </div>
      </div>
    </>
  );
}
