'use client';
import React, { useEffect, useRef } from 'react';
import EmblaCarousel from 'embla-carousel';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';

const TEMPORARY_DATA = [
  {
    id: 1,
    title: 'Dubai Marina',
    description: '(Thunder, Vassia & Etosha)',
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.4605443824817!2d55.1474643!3d25.086266999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b4a39b0235d%3A0xd464874a98c88514!2sCentaurus%20Charter%3A%20Luxury%20Yacht%20Rental%20Dubai%20Marina!5e0!3m2!1sen!2sae!4v1693488363219!5m2!1sen!2sae',
    link: 'https://g.page/r/CRSFyJhKh2TUEBM/',
  },
  {
    id: 2,
    title: 'Dubai Marina',
    description: '(Lagoona & Silver Creek)',
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.34346928787!2d55.1430654!3d25.090232099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b6195d88cb9%3A0xb959a4fe54f444df!2sCENTAURUS%20CHARTER%20-%20Yachts%20%26%20Boats%20Rental%20Dubai%20Harbour!5e0!3m2!1sen!2sae!4v1693488420055!5m2!1sen!2sae',
    link: 'https://g.page/r/Cd9E9FT-pFm5EBM/',
  },
  {
    id: 3,
    title: 'Dubai Harbour',
    description: '(Poseidon)',
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.232177136002!2d55.139939399999996!3d25.094000800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b1f6453e121%3A0x45035717db6c3954!2sCENTAURUS%20CHARTER%20-%20Yachts%20%26%20Boats%20Rental%20Dubai%20Harbour!5e0!3m2!1sen!2sae!4v1693488469422!5m2!1sen!2sae',
    link: 'https://g.page/r/CVQ5bNsXVwNFEBM/',
  },
  {
    id: 4,
    title: 'Dubai Harbour',
    description: '(Dionysos)',
    src: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3612.5516095536605!2d55.14394699999999!3d25.098374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDA1JzU0LjIiTiA1NcKwMDgnMzguMiJF!5e0!3m2!1sen!2sae!4v1733380389487!5m2!1sen!2sae',
    link: 'https://maps.app.goo.gl/dEWhqr8WGKvDCAMw5',
  },
  {
    id: 5,
    title: 'Dubai Harbour ',
    description: '(Storm)',
    src: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3614.3279149091572!2d55.138999999999996!3d25.0933333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDA1JzM2LjAiTiA1NcKwMDgnMjAuNCJF!5e0!3m2!1sen!2sae!4v1745566272471!5m2!1sen!2sae',
    link: 'https://maps.app.goo.gl/3Nme79N7jRvsVZ7L9',
  },
  {
    id: 6,
    title: 'Dubai Harbour ',
    description: '(Kronos)',
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.6418554768284!2d55.28838520000002!3d25.1886704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69968419a28d%3A0x9ac03170b460adb7!2sCentaurus%20Charter%20Yachts%20%26%20Boats%20Rental%20-%20Marasi%20Bay%20Marina!5e0!3m2!1sen!2sae!4v1745565761528!5m2!1sen!2sae',
    link: 'https://maps.app.goo.gl/XVPwMjj8uWpwocsh6',
  },
  {
    id: 7,
    title: 'Dubai Harbour ',
    description: '(Riverside)',
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.3196216528795!2d55.1418864!3d25.0910397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b9ffbbf937b%3A0xa3eaabac5f6ee887!2sRiverside%20Yacht%20-%20Centaurus%20Charter%20Yachts%20%26%20Boats%20Rental!5e0!3m2!1sen!2sae!4v1745566092581!5m2!1sen!2sae',
    link: 'https://maps.app.goo.gl/oGk6YfdTv1PtRCwD7',
  },
];

// Mobile Version: Uses updated card design and responsive widths
export default function LocationCarousel() {
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
      }, 10000000000);

      return () => {
        clearInterval(autoplay);
        emblaInstance.current?.destroy();
      };
    }
  }, []);

  const scrollPrev = () => emblaInstance.current?.scrollPrev();
  const scrollNext = () => emblaInstance.current?.scrollNext();

  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <h2 className="text-primary-blue text-center font-bold text-2xl xl:text-3xl py-10">
        YACHT LOCATION
      </h2>

      <div className="relative container h-full overflow-hidden bg-white mx-auto px-3">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container flex">
            {TEMPORARY_DATA?.map(item => (
              <div
                key={item.id}
                className="flex-[0_0_90%] md:flex-[0_0_calc(50%-10px)] lg:flex-[0_0_calc(33.33%-10px)] min-w-0 px-2"
              >
                <div className="relative bg-transparent  overflow-hidden h-[400px] w-full">
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="relative w-full h-full">
                      <iframe
                        title="google maps location"
                        src={item.src}
                        width="400"
                        height="400"
                        loading="lazy"
                        className="w-full"
                      ></iframe>
                      <div className="absolute inset-0  rounded-lg " />
                      <div className=" location-carousel absolute bottom-0 left-0 w-full bg-black bg-opacity-30 p-4 text-white">
                        <h3 className="text-4xl font-bold text-center">
                          {item.title}
                        </h3>
                        <p className="text-xl font-bold text-center">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons - Hidden on mobile, visible on tablet and desktop */}
        <button
          aria-label="Previous slide"
          className="hidden md:flex bg-primary-blue text-white hover:bg-primary-blue-2 transition duration-150 ease-in-out absolute left-2 top-1/2 -translate-y-1/2 w-14 aspect-square rounded-full items-center justify-center z-10"
          onClick={scrollPrev}
        >
          <IoIosArrowBack size={30} />
        </button>
        <button
          aria-label="Next slide"
          className="hidden md:flex bg-primary-blue text-white hover:bg-primary-blue-2 transition duration-150 ease-in-out absolute right-4 top-1/2 -translate-y-1/2 w-14 aspect-square rounded-full items-center justify-center z-10"
          onClick={scrollNext}
        >
          <IoIosArrowForward size={30} />
        </button>
      </div>

      <div className="pt-12"></div>
    </div>
  );
}
