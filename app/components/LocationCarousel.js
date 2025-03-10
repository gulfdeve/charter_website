import React, { useEffect, useRef } from "react";
import EmblaCarousel from "embla-carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const TEMPORARY_DATA = [
  {
    id: 1,
    title: "Dubai Marina",
    description: "Thunder, Vassia & Etosha",
    image: "https://via.placeholder.com/400x200?text=Dubai+Marina",
  },
  {
    id: 2,
    title: "Dubai Marina Harbour",
    description: "Lagoona & Silver Creek",
    image: "https://via.placeholder.com/400x200?text=Dubai+Marina+Harbour",
  },
  {
    id: 3,
    title: "Dubai Harbour Marina",
    description: "Poseidon",
    image: "https://via.placeholder.com/400x200?text=Dubai+Harbour+Marina",
  },
  {
    id: 4,
    title: "Palm Jumeirah",
    description: "Atlantis, Pearl & Ruby",
    image: "https://via.placeholder.com/400x200?text=Palm+Jumeirah",
  },
  {
    id: 5,
    title: "Burj Al Arab",
    description: "Luxury Views",
    image: "https://via.placeholder.com/400x200?text=Burj+Al+Arab",
  },
  {
    id: 6,
    title: "The World Islands",
    description: "Private Yachts",
    image: "https://via.placeholder.com/400x200?text=The+World+Islands",
  },
];

// Mobile Version: Uses updated card design and responsive widths
function MobileCarousel() {
  const emblaRef = useRef(null);
  const emblaInstance = useRef(null);

  useEffect(() => {
    if (emblaRef.current) {
      emblaInstance.current = EmblaCarousel(emblaRef.current, {
        align: "start",
        loop: true,
      });
      const autoplay = setInterval(() => {
        emblaInstance.current?.scrollNext();
      }, 10000);
      return () => {
        clearInterval(autoplay);
        emblaInstance.current?.destroy();
      };
    }
  }, []);

  const scrollPrev = () => emblaInstance.current?.scrollPrev();
  const scrollNext = () => emblaInstance.current?.scrollNext();

  return (
    <div className="container mx-auto md:px-4 pb-16 md:hidden">
      {/* Optional heading */}
      <div className="flex flex-col items-center justify-center py-10">
        <h2 className="text-primary-blue text-center font-bold text-4xl">
          YACHT LOCATION
        </h2>
      </div>

      <div className="relative">
        {/* Embla viewport */}
        <div ref={emblaRef} className="overflow-hidden px-3 py-5 ">
          {/* Embla container */}
          <div className="flex gap-4 px-3">
            {TEMPORARY_DATA.map((item) => (
              <div
                key={item.id}
                // Control how many cards appear at once (85%, 50%, 40%, etc.)
                className="flex-[0_0_80%] md:flex-[0_0_50%] lg:flex-[0_0_40%]"
              >
                <div className="bg-white shadow-md rounded-md overflow-hidden h-full">
                  {/* Map iframe (top) */}
                  <div className="relative w-full h-52 p-4">
                    <iframe
                      title="google maps location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.2080337682214!2d55.1390062!3d25.094818299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b1f6453e121%3A0x45035717db6c3954!2sCENTAURUS%20CHARTER%20-%20Yachts%20%26%20Boats%20Rental%20Dubai%20Harbour!5e0!3m2!1sen!2s!4v1734525244924!5m2!1sen!2s"
                      className="absolute inset-0 w-full h-full"
                      loading="lazy"
                    ></iframe>
                  </div>
                  
                  {/* Card text (bottom) */}
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-bold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.subTitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Navigation Buttons */}
       
      </div>
    </div>
  );
}

// Desktop Version: Keeps your original design code
function DesktopCarousel() {
  const emblaRef = useRef(null);
  const emblaInstance = useRef(null);

  useEffect(() => {
    if (emblaRef.current) {
      emblaInstance.current = EmblaCarousel(emblaRef.current, {
        align: "start",
        loop: true,
      });
      const autoplay = setInterval(() => {
        emblaInstance.current?.scrollNext();
      }, 10000);
      return () => {
        clearInterval(autoplay);
        emblaInstance.current?.destroy();
      };
    }
  }, []);

  const scrollPrev = () => emblaInstance.current?.scrollPrev();
  const scrollNext = () => emblaInstance.current?.scrollNext();

  return (
    <div className="flex flex-col items-center container mx-auto hidden lg:block">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-primary-blue text-center font-bold text-4xl py-10">
          YACHT LOCATION
        </h2>
      </div>

      <div className="relative w-full overflow-hidden lg:pb-9 xl:px-20">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container flex">
            {TEMPORARY_DATA.map((item) => (
              <div
                key={item.id}
                className="embla__slide p-5 w-full lg:basis-[calc(100%/3)] flex-none"
              >
                <div className="relative bg-gray-200 overflow-hidden shadow-lg w-96">
                  <iframe
                    title="google maps location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.2080337682214!2d55.1390062!3d25.094818299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b1f6453e121%3A0x45035717db6c3954!2sCENTAURUS%20CHARTER%20-%20Yachts%20%26%20Boats%20Rental%20Dubai%20Harbour!5e0!3m2!1sen!2s!4v1734525244924!5m2!1sen!2s"
                    width="500"
                    height="450"
                    loading="lazy"
                    className="w-full"
                  ></iframe>
                  <div className="location-carousel absolute bottom-0 left-0 w-full bg-black bg-opacity-30 p-4 text-white">
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
        </div>

        {/* Navigation Buttons */}
        <button
          aria-label="go previous slide"
          className="bg-primary-blue text-primary-yellow hover:bg-primary-yellow hover:text-primary-blue transition duration-150 ease-in-out absolute left-2 lg:left-32 top-1/2 -translate-y-1/2 bg-gray-800 text-white w-14 aspect-square rounded-full flex items-center justify-center hover:bg-gray-700 z-10"
          onClick={scrollPrev}
        >
          <IoIosArrowBack size={30} />
        </button>
        <button
          aria-label="go next slide"
          className="bg-primary-blue text-primary-yellow hover:bg-primary-yellow hover:text-primary-blue transition duration-150 ease-in-out absolute right-2 lg:right-32 top-1/2 -translate-y-1/2 bg-gray-800 text-white w-14 aspect-square rounded-full flex items-center justify-center hover:bg-gray-700 z-10"
          onClick={scrollNext}
        >
          <IoIosArrowForward size={30} />
        </button>
      </div>
    </div>
  );
}

export default function LocationCarousel() {
  return (
    <>
      <MobileCarousel />
      <DesktopCarousel />
    </>
  );
}
