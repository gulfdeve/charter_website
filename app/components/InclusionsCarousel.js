'use client';
import React, { useEffect, useRef, useState } from 'react';
import EmblaCarousel from 'embla-carousel';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const InclusionsCarousel = ({ slides }) => {
  const emblaRef = useRef(null);
  const [emblaApi, setEmblaApi] = useState(null);

  useEffect(() => {
    if (emblaRef.current) {
      const embla = EmblaCarousel(emblaRef.current, {
        loop: false,
        align: 'start',
      });
      setEmblaApi(embla);
    }
  }, []);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div ref={emblaRef} className="overflow-hidden relative">
      <div className="flex">
        {slides.map((item, index) => (
          <div
            key={index}
            className="
              flex-[0_0_100%]
              sm:flex-[0_0_50%]
              md:flex-[0_0_33%]
              lg:flex-[0_0_25%]
              px-2
            "
          >
            <div className="flex flex-col rounded-xl overflow-hidden">
              <img src={item.src} className="w-full" alt={item.text} />
              <p className="font-bold text-sm bg-red-950 text-white text-center p-7 h-20 flex items-center justify-center">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons (Arrows) */}
      <button
        aria-label="Previous Slide"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-[#1a1a1a] text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors z-10"
        onClick={scrollPrev}
      >
        <IoIosArrowBack size={30} />
      </button>
      <button
        aria-label="Next Slide"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-[#1a1a1a] text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors z-10"
        onClick={scrollNext}
      >
        <IoIosArrowForward size={30} />
      </button>
    </div>
  );
};

export default InclusionsCarousel;

