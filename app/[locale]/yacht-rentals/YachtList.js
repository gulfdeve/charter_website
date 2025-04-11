"use client";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "@/app/i18n/routing";
import EmblaCarousel from "embla-carousel";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import BookNowButton from "@/app/components/BookNowButton";

const YachtCard = ({ yacht }) => {
  const emblaRef = useRef(null);
  const emblaApi = useRef(null);

  useEffect(() => {
    if (emblaRef.current) {
      emblaApi.current = EmblaCarousel(emblaRef.current, { loop: true });
    }
    return () => {
      if (emblaApi.current) {
        emblaApi.current.destroy();
      }
    };
  }, [yacht]);

  const scrollPrev = () => {
    if (emblaApi.current) emblaApi.current.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi.current) emblaApi.current.scrollNext();
  };

  return (
    <div className="flex flex-col justify-between bg-white rounded-md shadow-2xl h-auto relative">
      <div className="relative">
        <div className="overflow-hidden rounded-t-md" ref={emblaRef}>
          <div className="flex">
            {yacht.images.map((img, index) => (
              <div key={index} className="min-w-full">
                <Link href={`yacht-rentals/${yacht.slug}`}>
                  <img
                    src={`https://www.centauruscharter.net/product/galleryimages/${img}`}
                    alt={`Slide ${index + 1}`}
                    className="w-full object-contain"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {yacht.images.length > 1 && (
          <>
            <button
              aria-label="go previous slide"
              onClick={scrollPrev}
              className="bg-primary-blue text-primary-yellow hover:bg-primary-yellow hover:text-primary-blue transition duration-150 ease-in-out transform absolute top-1/2 left-2 transform -translate-y-1/2 p-2 rounded-full shadow-md"
            >
              <FaArrowLeft />
            </button>
            <button
              aria-label="go next slide"
              onClick={scrollNext}
              className="bg-primary-blue text-primary-yellow hover:bg-primary-yellow hover:text-primary-blue transition duration-150 ease-in-out transform absolute top-1/2 right-2 transform -translate-y-1/2 p-2 rounded-full shadow-md"
            >
              <FaArrowRight />
            </button>
          </>
        )}

        {yacht.category.includes("bestSellers") && (
          <div className="absolute top-4 left-0 bg-primary-blue text-primary-yellow text-md py-0.5 px-2">
            BEST SELLER
          </div>
        )}
        {yacht.category.includes("premium") && (
          <div className="absolute top-4 left-0 bg-primary-blue text-primary-yellow text-md py-0.5 px-2">
            PREMIUM YACHT
          </div>
        )}
      </div>

      <div className="flex flex-col justify-between flex-grow p-4">
        {/* Yacht Details */}
        <div className="flex flex-col items-start">
          <Link href={`yacht-rentals/${yacht.slug}`}>
            <h2 className="text-primary-blue text-xl font-bold pb-4 hover:text-blue-600 transition-all duration-300 cursor-pointer">
              {yacht.title}
            </h2>
          </Link>

          <p className="text-xs s:text-sm md:text-xs lg:text-sm text-primary-blue text-left">
            Model: <span className="font-bold">{yacht.model}</span> | Length:{" "}
            <span className="font-bold">{yacht.length}</span> | Guests:{" "}
            <span className="font-bold">{yacht.guests}</span>
          </p>
          <p className="text-primary-blue font-bold text-xl pt-5 pb-2">
            AED {yacht.price} <span className="text-primary-blue">Per Hour</span>
          </p>
        </div>
        <BookNowButton fareharborId={yacht.fareharbor_id} />
      </div>
    </div>
  );
};

export default function YachtList({ yachts }) {
  const [activeTab, setActiveTab] = useState("allYachts");

  const filteredYachts = yachts.filter((yacht) =>
    yacht.category.includes(activeTab)
  );

  return (
    <>
      <div className="flex justify-center items-center gap-8 md:gap-8 text-xs sm:text-base md:text-lg font-semibold py-2 pb-10 md:py-2 px-2">
        <button onClick={() => setActiveTab("allYachts")}>ALL YACHTS</button>
        <button onClick={() => setActiveTab("bestSellers")}>BEST SELLERS</button>
        <button onClick={() => setActiveTab("premium")}>PREMIUM</button>
      </div>
      
      <div className="p-0 md:p-6 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-10 gap-6 container mx-auto">
          {filteredYachts.map((yacht) => (
            <YachtCard key={yacht.id} yacht={yacht} />
          ))}
        </div>
      </div>
    </>
  );
} 