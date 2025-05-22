"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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
    const thumbnail = thumbnails[activeIndex];
    if (!thumbnail) return;

    // Check if mobile (horizontal) or desktop (vertical)
    if (window.innerWidth < 768) {
      // Horizontal scroll for mobile
      const container = thumbnailRef.current;
      const thumbnailLeft = thumbnail.offsetLeft;
      const thumbnailWidth = thumbnail.offsetWidth;
      const containerWidth = container.offsetWidth;
      // Scroll so the selected thumbnail is centered
      container.scrollLeft = thumbnailLeft - (containerWidth - thumbnailWidth) / 2;
    } else {
      // Vertical scroll for desktop
      const container = thumbnailRef.current;
      const thumbnailTop = thumbnail.offsetTop;
      const thumbnailHeight = thumbnail.offsetHeight;
      const containerHeight = container.offsetHeight;
      // Scroll so the selected thumbnail is centered
      container.scrollTop = thumbnailTop - (containerHeight - thumbnailHeight) / 2;
    }
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
    <div className="flex flex-col-reverse md:flex-row gap-4 w-full">
      {/* Thumbnails - Vertical Scroll */}
      <div className="relative md:h-[300px] lg:h-[545px] xl:h-[610px] md:w-40 flex-shrink-0">
        <div
          ref={thumbnailRef}
          className="overflow-x-auto rounded-lg md:overflow-y-auto flex flex-row md:flex-col gap-2 md:h-full no-scrollbar"
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
              className={`flex-shrink-0 md:w-full aspect-video border-2 rounded 
                ${activeIndex === index ? "border-primary-blue-2" : "border-transparent"}`}
              style={{ minHeight: 70, minWidth: 0 }}
            >
              <Image
                src={`https://www.centauruscharter.net/product/galleryimages/${item.image}`}
                alt={`Thumbnail ${index + 1}`}
                width={80}
                height={50}
                className="w-full h-full object-cover rounded"
                priority={index === 0}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Main Carousel */}
      <div className="relative flex-1">
        <button
          aria-label="go back"
          className="absolute left-2 top-1/2 -translate-y-1/2 text-primary-grey bg-[#f1f1f1] bg-opacity-80 p-1 xl:p-2 rounded-full z-10"
          onClick={scrollPrev}
        >
          <IoIosArrowBack size={20} />
        </button>

        <div className="embla__viewport overflow-hidden rounded-lg" ref={emblaRef}>
          <div className="embla__container flex">
            {gallery.map((item, index) => (
              <div key={index} className="embla__slide min-w-full flex justify-center items-center lg:pb-0">
                <Image
                  src={`https://www.centauruscharter.net/product/galleryimages/${item.image}`}
                  alt={`Slide ${index + 1}`}
                  width={1200}
                  height={600}
                  className="w-full h-auto max-w-7xl object-cover rounded-lg"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          aria-label="go forward"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-primary-grey bg-[#f1f1f1] bg-opacity-80 p-1 xl:p-2 rounded-full z-10"
          onClick={scrollNext}
        >
          <IoIosArrowForward size={20} />
        </button>
      </div>
    </div>
  );
}