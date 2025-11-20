'use client';
import React, { useEffect, useRef } from 'react';
import EmblaCarousel from 'embla-carousel';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';
import { Link } from '@/app/i18n/routing';

export default function WaterSportCarousal2({ packages, language }) {
  const emblaRef = useRef(null);
  const emblaInstance = useRef(null);

  useEffect(() => {
    if (emblaRef.current) {
      const options = {
        align: 'start',
        loop: true,
        slidesToScroll: 1,
        breakpoints: {
          '(min-width: 768px)': { slidesToScroll: 2 },
          '(min-width: 1024px)': { slidesToScroll: 3 },
        },
      };

      emblaInstance.current = EmblaCarousel(emblaRef.current, options);

      // Autoplay functionality
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

  // Filter packages to only include those with translations for the current language
  const filteredPackages = packages?.filter(
    pkg => pkg.translations && pkg.translations[language]
  ) || [];

  return (
    <div className="flex flex-col items-center justify-center bg-primary-blue-light">
      <h2 className="text-primary-blue text-center font-bold text-2xl xl:text-4xl py-10">
        EXPLORE MORE WATERSPORTS ADD-ON
      </h2>

      <div className="relative container h-full overflow-hidden mx-auto px-3">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container flex">
            {filteredPackages?.map(package_a => (
              <div
                key={package_a.id}
                className="flex-[0_0_90%] md:flex-[0_0_calc(50%-10px)] lg:flex-[0_0_calc(33.33%-10px)] min-w-0 px-2"
              >
                <div className="relative bg-transparent rounded-lg overflow-hidden h-[400px] w-full">
                  <div className="relative w-full h-full">
                    <Image
                      src={`https://www.centauruscharter.net/product/images/${package_a.thumbnail_image}`}
                      alt={package_a.translations[language].title}
                      fill
                      className="object-cover rounded-lg"
                      loading="lazy"
                      sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    />
                    <div className="absolute inset-0 bg-black-gradient rounded-lg" />
                    <div className="absolute bottom-0 left-0 w-full p-4 z-10">
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                        <Link href={`/watersports/${package_a.slug}`}>
                          {package_a.translations[language].title}
                        </Link>
                      </h3>
                      <p className="text-sm text-white mb-4 line-clamp-2">
                        {package_a.translations[language].preview_text}
                      </p>
                      {/* <Link href={`/watersports/${package_a.slug}`}>
                          <button className="yellow-solid-button uppercase text-sm lg:text-base py-2 px-4">
                            Book Now
                          </button>
                        </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons - Hidden on mobile, visible on tablet and desktop */}
        <button
          aria-label="Previous slide"
          className="hidden md:flex bg-primary-blue text-primary-blue-light transition duration-150 ease-in-out absolute left-2 top-1/2 -translate-y-1/2 w-14 aspect-square rounded-full items-center justify-center z-10"
          onClick={scrollPrev}
        >
          <IoIosArrowBack size={30} />
        </button>
        <button
          aria-label="Next slide"
          className="hidden md:flex bg-primary-blue text-primary-blue-light transition duration-150 ease-in-out absolute right-4 top-1/2 -translate-y-1/2 w-14 aspect-square rounded-full items-center justify-center z-10"
          onClick={scrollNext}
        >
          <IoIosArrowForward size={30} />
        </button>
      </div>

      <div className="pt-12"></div>
    </div>
  );
}
