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
      <button
        aria-label="go back"
          className="absolute left-5 top-[45%] transform -translate-y-1/2 text-primary-grey bg-[#f1f1f1] bg-opacity-80 p-1 xl:p-2 rounded-full z-10"
          onClick={scrollPrev}
        >
          <IoIosArrowBack size={20}/>
      </button>
      <div className="embla__viewport overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="embla__container flex">
          {gallery.map((item, index) => (
            <div key={index} className="embla__slide min-w-full flex justify-center items-center lg:pb-0">
              <img
                src={`https://www.centauruscharter.net/frontend/assets/yacht_sales/${item.image}`}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto max-w-7xl object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        aria-label="go forward"
          className="absolute right-5 top-[45%] transform -translate-y-1/2 text-primary-grey bg-[#f1f1f1] bg-opacity-80 p-1 xl:p-2 rounded-full z-10"
          onClick={scrollNext}
        >
          <IoIosArrowForward size={20}/>
        </button>
      <div className="relative mt-4">
        <div 
          ref={thumbnailRef} 
          className="overflow-x-auto flex gap-2 no-scrollbar"
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
                src={`https://www.centauruscharter.net/frontend/assets/yacht_sales/${item.image}`}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover rounded"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 