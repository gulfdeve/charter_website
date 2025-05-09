"use client";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "@/app/i18n/routing";
import Image from "next/image";
import EmblaCarousel from "embla-carousel";
import { FaArrowLeft, FaArrowRight, FaYoutube } from "react-icons/fa";
import BookNowButton from "@/app/components/BookNowButton";
import { BsStars } from "react-icons/bs";

const YachtCard = ({ yacht }) => {
  const emblaRef = useRef(null);
  const emblaApi = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");

  useEffect(() => {
    if (emblaRef.current) {
      emblaApi.current = EmblaCarousel(emblaRef.current, { loop: true });
    }
    return () => {
      emblaApi.current?.destroy();
    };
  }, [yacht]);

  const scrollPrev = () => emblaApi.current?.scrollPrev();
  const scrollNext = () => emblaApi.current?.scrollNext();

  // Accepts an embeddable YouTube URL (e.g. "https://www.youtube.com/embed/VIDEO_ID")
  const openModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedVideo("");
    setIsModalOpen(false);
  };

  // If you instead store the watch-page URL, uncomment and use this:
  // const toEmbedUrl = (watchUrl) => {
  //   try {
  //     const url = new URL(watchUrl);
  //     const id = url.searchParams.get("v");
  //     return id ? `https://www.youtube.com/embed/${id}` : "";
  //   } catch {
  //     return "";
  //   }
  // };

  return (
    <div className="relative flex flex-col md:p-5 p-3 rounded-lg shadow-custom">
      {/* Yacht Details */}
      <div className="flex flex-col items-start">
        <Link href={`yacht-rentals/${yacht.slug}`}>
          <h2 className="text-primary-blue text-xl font-bold pb-4 hover:text-primary-blue-2 transition-all duration-300 cursor-pointer">
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
                {/* YouTube Icon only on first slide if URL exists */}
                {index === 0 && yacht.youtube_url && (
                  <button
                    onClick={() =>
                      openModal(
                        yacht.youtube_url /* or toEmbedUrl(yacht.youtube_url) */
                      )
                    }
                    className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-red-600 hover:text-white text-red-600 transition-all"
                    aria-label="Watch video"
                  >
                    <FaYoutube size={20} />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Arrows */}
        {yacht.images.length > 1 && (
          <>
            <button
              onClick={scrollPrev}
              aria-label="Previous slide"
              className="bg-white text-gray-500 opacity-80 hover:opacity-90 transition duration-150 ease-in-out transform absolute top-1/2 left-2 -translate-y-1/2 p-2 rounded-full shadow-md"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next slide"
              className="bg-white text-gray-500 opacity-80 hover:opacity-90 transition duration-150 ease-in-out transform absolute top-1/2 right-2 -translate-y-1/2 p-2 rounded-full shadow-md"
            >
              <FaArrowRight />
            </button>
          </>
        )}

        {/* Category Badge */}
        {yacht.category.includes("bestSellers") && (
          <div className="absolute flex items-center gap-2 top-4 left-0 gradient-custom-2 text-primary-yellow-light text-md py-0.5 px-2 rounded-r-lg">
            <BsStars />
            <p>Best Seller</p>
          </div>
        )}
        {yacht.category.includes("premium") && (
          <div className="absolute flex items-center gap-2 top-4 left-0 gradient-custom-2 text-primary-yellow-light text-md py-0.5 px-2 rounded-r-lg">
            <BsStars />
            <p>Premium Yacht</p>
          </div>
        )}

        <div className="absolute grid grid-cols-3 items-center gap-0 rounded-lg center-absolute -bottom-5 left-0 right-0 px-3">
          <div className="bg-primary-blue-light text-primary-grey p-1 xl:p-2 flex flex-col items-center rounded-l-lg">
            <span className="text-xs">Model:</span>
            <span className="font-bold text-xs md:text-sm text-black">
              {yacht.model}
            </span>
          </div>
          <div className="bg-primary-blue-light text-primary-grey p-1 xl:p-2 flex flex-col items-center">
            <span className="text-xs">Length:</span>
            <span className="font-bold text-xs md:text-sm text-black">
              {yacht.length}
            </span>
          </div>
          <div className="bg-primary-blue-light text-primary-grey p-1 xl:p-2 flex flex-col items-center rounded-r-lg">
            <span className="text-xs">Guests:</span>
            <span className="font-bold text-xs md:text-sm text-black">
              {yacht.guests}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-grow justify-end py-4">
        {yacht.id === 24 && (
          <p className="text-xs font-normal italic text-primary-grey mt-5">
            Poseidon 118ft Trips: An Add on of AED 1000 per hour will be added
            for every additional 10 pax where the occupancy surpasses the 40
            passengers.
          </p>
        )}

        <div className="flex flex-row justify-between items-center z-20 border-t border-gray-400 pt-3 mt-5">
          <div className="p-1 xl:p-2 flex flex-col text-left">
            <span className="text-xs md:text-sm">Price per hour:</span>
            {yacht.id === 24 && (
              <p className="text-xs font-normal italic text-primary-grey">
                Starting from
              </p>
            )}
            <span className="font-bold text-md md:text-lg lg:text-xl text-primary-red">
              AED {parseInt(yacht.price).toLocaleString()}
            </span>
          </div>
          <BookNowButton fareharborId={yacht.fareharbor_id} />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative w-[90%] md:w-[60%] h-[60%] bg-black rounded-lg overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-xl z-10"
              aria-label="Close video"
            >
              ✕
            </button>
            <iframe
              src={selectedVideo}
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Yacht Video"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default function YachtList({ yachts }) {
  const [activeTab, setActiveTab] = useState("allYachts");

  const filteredYachts =
    activeTab === "allYachts"
      ? yachts
      : yachts.filter((yacht) => yacht.category.includes(activeTab));

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
