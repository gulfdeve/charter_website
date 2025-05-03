"use client";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "@/app/i18n/routing";
import Image from "next/image";
import EmblaCarousel from "embla-carousel";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import BookNowButton from "@/app/components/BookNowButton";
import { BsStars } from "react-icons/bs";

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
    <div className="relative flex flex-col md:p-5 p-3 rounded-lg shadow-custom">
      {/* Yacht Details */}
      <div className="flex flex-col items-start">
          <Link href={`yacht-rentals/${yacht.slug}`}>
            <h2 className="text-primary-blue text-xl font-bold pb-4 hover:text-blue-600 transition-all duration-300 cursor-pointer">
              {yacht.title}
            </h2>
          </Link>
        </div>
      <div className="relative">
        <div className="overflow-hidden rounded-lg" ref={emblaRef}>
          <div className="flex">
            {yacht.images.map((img, index) => (
              <div key={index} className="min-w-full relative aspect-[4/3]">
                <Link href={`yacht-rentals/${yacht.slug}`}>
                  <Image
                    src={`https://www.centauruscharter.net/product/galleryimages/${img}`}
                    alt={`${yacht.title} gallery ${index + 1}`}
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
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
              className="bg-white text-gray-500 opacity-80 hover:opacity-90 transition duration-150 ease-in-out transform absolute top-1/2 left-2 transform -translate-y-1/2 p-2 rounded-full shadow-md"
            >
              <FaArrowLeft />
            </button>
            <button
              aria-label="go next slide"
              onClick={scrollNext}
              className="bg-white text-gray-500 opacity-80 hover:opacity-90 transition duration-150 ease-in-out transform absolute top-1/2 right-2 transform -translate-y-1/2 p-2 rounded-full shadow-md"
            >
              <FaArrowRight />
            </button>
          </>
        )}

        {yacht.category.includes("bestSellers") && (
          <div className="absolute flex items-center gap-2 top-4 left-0 gradient-custom-2 text-primary-yellow-light text-md py-0.5 px-2 rounded-r-lg">
            <BsStars /><p>Best Seller</p>
          </div>
        )}
        {yacht.category.includes("premium") && (
          <div className="absolute flex items-center gap-2 top-4 left-0 gradient-custom-2 text-primary-yellow-light text-md py-0.5 px-2 rounded-r-lg">
            <BsStars /><p>Premium Yacht</p>
          </div>
        )}
         
          <div className="absolute grid grid-cols-3 items-center gap-0 rounded-lg center-absolute -bottom-5 left-0 right-0 px-3">
            <div className="bg-[#f1f1f1] text-primary-grey p-1 xl:p-2 flex flex-col items-center rounded-l-lg">
              <span className="text-xs">Model:</span>
              <span className="font-bold text-xs md:text-sm text-black">{yacht.model}</span>
              </div>
              <div className="bg-[#f1f1f1] text-primary-grey p-1 xl:p-2 flex flex-col items-center">
                <span className="text-xs">Length:</span><span className="font-bold text-xs md:text-sm text-black">{yacht.length}</span>
                </div>
                <div className="bg-[#f1f1f1] text-primary-grey p-1 xl:p-2 flex flex-col items-center rounded-r-lg">
                  <span className="text-xs">Guests:</span>
          <span className="font-bold text-xs md:text-sm text-black">{yacht.guests}</span>
         
          </div>
          </div>
      </div>
      
      <div className="flex flex-col flex-grow py-4">
        <div className=" mt-5">{yacht.id === 24 && (
							<p className="text-xs font-normal italic text-primary-grey">Poseidon 118ft Trips: An Add on of AED 1000 per hour will be added for every additional 10 pax where the occupancy surpasses the 40 passengers.
							</p>
							)
						}
        </div>
      <div className="flex flex-row justify-between items-center z-20 border-t border-gray-400 pt-3  mt-5">
        <div className="p-1 xl:p-2 flex flex-col text-left"><span className=" text-xs md:text-sm">Price per hour:</span>
        <span>{yacht.id === 24 && (
            <p className="text-xs font-normal italic text-primary-grey">Starting from</p> )
                }
        </span>        
        <span className="font-bold text-md md:text-lg lg:text-xl text-primary-red">AED {parseInt(yacht.price).toLocaleString()}</span>
        </div>
        <BookNowButton fareharborId={yacht.fareharbor_id} />
      </div>
       
      </div>
    </div>
  );
};

export default function YachtList({ yachts }) {
  const [activeTab, setActiveTab] = useState("allYachts");

  const filteredYachts = yachts.filter((yacht) =>
    yacht.category.includes(activeTab)
  );

  const getTabStyle = (tabName) => {
    return `px-2 py-1 transition-all duration-300 ${
      activeTab === tabName 
        ? "text-primary-blue border-b-2 border-primary-blue" 
        : "hover:text-primary-blue"
    }`;
  };

  return (
    <>
      <div className="flex justify-center items-center gap-8 md:gap-8 text-xs sm:text-base md:text-lg font-semibold py-2 pb-10 md:py-2 px-2">
        <button 
          onClick={() => setActiveTab("allYachts")}
          className={getTabStyle("allYachts")}
        >
          ALL YACHTS
        </button>
        <button 
          onClick={() => setActiveTab("bestSellers")}
          className={getTabStyle("bestSellers")}
        >
          BEST SELLERS
        </button>
        <button 
          onClick={() => setActiveTab("premium")}
          className={getTabStyle("premium")}
        >
          PREMIUM
        </button>
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