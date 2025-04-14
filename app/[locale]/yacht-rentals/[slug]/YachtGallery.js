"use client";
import { useEffect, useRef, useState } from "react";
import EmblaCarousel from "embla-carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function YachtGallery({ gallery }) {
  const emblaRef = useRef(null);
  const emblaInstance = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbnailRef = useRef(null);

  useEffect(() => {
    if (thumbnailRef.current) {
      const thumbnails = thumbnailRef.current.children;
      const thumbnailWidth = thumbnails[0]?.offsetWidth || 0;
      thumbnailRef.current.scrollLeft = thumbnailWidth * activeIndex;
    }
  }, [activeIndex]);

  useEffect(() => {
    if (emblaRef.current) {
      emblaInstance.current = EmblaCarousel(emblaRef.current, { loop: true });

      emblaInstance.current.on("select", () => {
        const index = emblaInstance.current.selectedScrollSnap();
        setActiveIndex(index);
      });

      const autoplayInterval = setInterval(() => {
        emblaInstance.current.scrollNext();
      }, 10000);

      return () => {
        clearInterval(autoplayInterval);
        emblaInstance.current && emblaInstance.current.destroy();
      };
    }
  }, []);

  const scrollPrev = () => emblaInstance.current?.scrollPrev();
  const scrollNext = () => emblaInstance.current?.scrollNext();

  return (
    <div className="embla relative">
      <div className="embla__viewport overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="embla__container flex">
          {gallery.map((item, index) => (
            <div key={index} className="embla__slide min-w-full flex justify-center items-center pb-5 lg:pb-0">
              <img
                src={`https://www.centauruscharter.net/product/galleryimages/${item.image}`}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto xl:h-5/6 max-w-7xl object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-4">
        <button
        aria-label="go back"
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#d4cfce] text-white p-1 xl:p-2 rounded-full hover:bg-gray-700 z-10"
          onClick={scrollPrev}
        >
          <IoIosArrowBack className="text-black" />
        </button>

        <div 
          ref={thumbnailRef} 
          className="mx-10 overflow-x-auto flex gap-2 no-scrollbar"
          style={{
            scrollBehavior: 'smooth',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          {gallery.map((item, index) => (
            <button
              key={index}
              onClick={() => emblaInstance.current?.scrollTo(index)}
              className={`flex-shrink-0 w-[calc(20%-8px)] aspect-video ${
                activeIndex === index ? "" : ""
              }`}
            >
              <img
                src={`https://www.centauruscharter.net/product/galleryimages/${item.image}`}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover rounded"
              />
            </button>
          ))}
        </div>

        <button
        aria-label="go forward"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#d4cfce] text-white p-1 xl:p-2 rounded-full hover:bg-gray-700 z-10"
          onClick={scrollNext}
        >
          <IoIosArrowForward className="text-black" />
        </button>
      </div>
    </div>
  );
} 