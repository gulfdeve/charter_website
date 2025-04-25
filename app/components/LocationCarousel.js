'use client'
import React, { useEffect, useRef } from "react";
import EmblaCarousel from "embla-carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const TEMPORARY_DATA = [
  {
    id: 1,
    title: "Dubai Marina",
    description: "(Thunder, Vassia & Etosha)",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.4605443824817!2d55.1474643!3d25.086266999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b4a39b0235d%3A0xd464874a98c88514!2sCentaurus%20Charter%3A%20Luxury%20Yacht%20Rental%20Dubai%20Marina!5e0!3m2!1sen!2sae!4v1693488363219!5m2!1sen!2sae",
    image: "https://via.placeholder.com/400x200?text=Dubai+Marina",
  },
  {
    id: 2,
    title: "Dubai Marina",
    description: "(Lagoona & Silver Creek)",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.34346928787!2d55.1430654!3d25.090232099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b6195d88cb9%3A0xb959a4fe54f444df!2sCENTAURUS%20CHARTER%20-%20Yachts%20%26%20Boats%20Rental%20Dubai%20Harbour!5e0!3m2!1sen!2sae!4v1693488420055!5m2!1sen!2sae",
    image: "https://via.placeholder.com/400x200?text=Dubai+Marina+Harbour",
  },
  {
    id: 3,
    title: "Dubai Harbour",
    description: "(Poseidon)",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.232177136002!2d55.139939399999996!3d25.094000800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b1f6453e121%3A0x45035717db6c3954!2sCENTAURUS%20CHARTER%20-%20Yachts%20%26%20Boats%20Rental%20Dubai%20Harbour!5e0!3m2!1sen!2sae!4v1693488469422!5m2!1sen!2sae",
    image: "https://via.placeholder.com/400x200?text=Dubai+Harbour+Marina",
  },
  {
    id: 4,
    title: "Dubai Harbour",
    description: "(Dionysos)",
    src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3612.5516095536605!2d55.14394699999999!3d25.098374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDA1JzU0LjIiTiA1NcKwMDgnMzguMiJF!5e0!3m2!1sen!2sae!4v1733380389487!5m2!1sen!2sae",
    image: "https://via.placeholder.com/400x200?text=Palm+Jumeirah",
  },
  {
    id: 5,
    title: "Dubai Harbour",
    description: "(Storm)",
    src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3614.3279149091572!2d55.138999999999996!3d25.0933333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDA1JzM2LjAiTiA1NcKwMDgnMjAuNCJF!5e0!3m2!1sen!2sae!4v1745566272471!5m2!1sen!2sae",
    image: "https://via.placeholder.com/400x200?text=Burj+Al+Arab",
  },
  {
    id: 6,
    title: "Dubai Harbour",
    description: "(Kronos)",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.6418554768284!2d55.28838520000002!3d25.1886704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69968419a28d%3A0x9ac03170b460adb7!2sCentaurus%20Charter%20Yachts%20%26%20Boats%20Rental%20-%20Marasi%20Bay%20Marina!5e0!3m2!1sen!2sae!4v1745565761528!5m2!1sen!2sae",
    image: "https://via.placeholder.com/400x200?text=Burj+Al+Arab",
  },
  {
    id: 7,
    title: "Dubai Harbour",
    description: "(Riverside)",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.3196216528795!2d55.1418864!3d25.0910397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b9ffbbf937b%3A0xa3eaabac5f6ee887!2sRiverside%20Yacht%20-%20Centaurus%20Charter%20Yachts%20%26%20Boats%20Rental!5e0!3m2!1sen!2sae!4v1745566092581!5m2!1sen!2sae",
    image: "https://via.placeholder.com/400x200?text=Burj+Al+Arab",
  }
];

export default function LocationCarousel() {
  const emblaRef = useRef(null);
  const embla = useRef(null);

  useEffect(() => {
    if (emblaRef.current) {
      embla.current = EmblaCarousel(emblaRef.current, {
        align: 'start',
        loop: true,
      });
      const autoplay = setInterval(() => embla.current.scrollNext(), 10000);
      return () => {
        clearInterval(autoplay);
        embla.current.destroy();
      };
    }
  }, []);

  const scrollPrev = () => embla.current?.scrollPrev();
  const scrollNext = () => embla.current?.scrollNext();

  return (
    <div className="container mx-auto px-4 pb-16">
      <div className="flex flex-col items-center justify-center py-10">
        <h2 className="text-primary-blue text-center">YACHT LOCATION</h2>
      </div>

      <div className="relative overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {TEMPORARY_DATA.map(item => (
            <div
              key={item.id}
              className="flex-[0_0_80%] md:flex-[0_0_50%] lg:basis-1/3 flex-none min-w-0 px-2"
            >
              {/* Mobile Card */}
              <div className="bg-white shadow-md rounded-md overflow-hidden h-full lg:hidden">
                <div className="relative w-full h-52 p-4">
                  <iframe
                    title={`map-${item.id}`}
                    src={item.src}
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-primary-grey">
                    {item.title}
                  </h3>
                  <p className="text-sm text-primary-grey">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Desktop Card */}
              <div className="relative bg-gray-200 overflow-hidden shadow-lg w-full hidden lg:block">
                <iframe
                  title={`map-${item.id}`}
                  src={item.src}
                  width="400"
                  height="400"
                  loading="lazy"
                  className="w-full"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-30 p-4 text-white">
                  <h3 className="text-4xl font-bold text-center">
                    {item.title}
                  </h3>
                  <p className="text-xl font-bold text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          aria-label="Previous slide"
          onClick={scrollPrev}
          className="hidden lg:flex absolute left-2 top-1/2 -translate-y-1/2 bg-primary-blue text-white hover:bg-primary-yellow-dark hover:text-primary-blue transition duration-150 ease-in-out w-14 aspect-square rounded-full items-center justify-center z-10 "
        >
          <IoIosArrowBack size={30} />
        </button>
        <button
          aria-label="Next slide"
          onClick={scrollNext}
          className="hidden lg:flex absolute right-2 top-1/2 -translate-y-1/2 bg-primary-blue text-white hover:bg-primary-yellow-dark hover:text-primary-blue transition duration-150 ease-in-out w-14 aspect-square rounded-full items-center justify-center z-10"
        >
          <IoIosArrowForward size={30} />
        </button>
      </div>
    </div>
  );
}
