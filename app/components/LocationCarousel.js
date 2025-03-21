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
    title: "Dubai Marina Harbour",
    description: "(Lagoona & Silver Creek)",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.34346928787!2d55.1430654!3d25.090232099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b6195d88cb9%3A0xb959a4fe54f444df!2sCENTAURUS%20CHARTER%20-%20Yachts%20%26%20Boats%20Rental%20Dubai%20Harbour!5e0!3m2!1sen!2sae!4v1693488420055!5m2!1sen!2sae",
    image: "https://via.placeholder.com/400x200?text=Dubai+Marina+Harbour",
  },
  {
    id: 3,
    title: "Dubai Harbour Marina",
    description: "(Poseidon)",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.232177136002!2d55.139939399999996!3d25.094000800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b1f6453e121%3A0x45035717db6c3954!2sCENTAURUS%20CHARTER%20-%20Yachts%20%26%20Boats%20Rental%20Dubai%20Harbour!5e0!3m2!1sen!2sae!4v1693488469422!5m2!1sen!2sae",
    image: "https://via.placeholder.com/400x200?text=Dubai+Harbour+Marina",
  },
  {
    id: 4,
    title: "Dubai Harbour Marina",
    description: "(Dionysos)",
    src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3612.5516095536605!2d55.14394699999999!3d25.098374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDA1JzU0LjIiTiA1NcKwMDgnMzguMiJF!5e0!3m2!1sen!2sae!4v1733380389487!5m2!1sen!2sae",
    image: "https://via.placeholder.com/400x200?text=Palm+Jumeirah",
  },
  {
    id: 5,
    title: "Dubai Harbour Marina",
    description: "(Storm)",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.251813199369!2d55.139273499999994!3d25.093335899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bc74a6d5101%3A0x112933f2a040054c!2sCENTAURUS%20CHARTER%20-%20Yachts%20%26%20Boats%20Rental%20Dubai%20Harbour!5e0!3m2!1sen!2sae!4v1693488505230!5m2!1sen!2sae",
    image: "https://via.placeholder.com/400x200?text=Burj+Al+Arab",
  }
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
    <div className="max-w-7xl mx-auto md:px-4 pb-16 lg:hidden">
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
                      src={item.src}
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
    <div className="container mx-auto flex flex-col items-center container mx-auto hidden lg:block">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-primary-blue text-center font-bold text-4xl py-10">
          YACHT LOCATION
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container flex">
            {TEMPORARY_DATA.map((item) => (
              <div
                key={item.id}
                className="embla__slide px-5 w-full lg:basis-[calc(100%/3)] flex-none"
              >
                <div className="relative bg-gray-200 overflow-hidden shadow-lg w-96">
                  <iframe
                    title="google maps location"
                    src={item.src}
                    width="400"
                    height="400"
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
          className="bg-primary-blue text-primary-yellow hover:bg-primary-yellow hover:text-primary-blue transition duration-150 ease-in-out absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white w-14 aspect-square rounded-full flex items-center justify-center hover:bg-gray-700 z-10"
          onClick={scrollPrev}
        >
          <IoIosArrowBack size={30} />
        </button>
        <button
          aria-label="go next slide"
          className="bg-primary-blue text-primary-yellow hover:bg-primary-yellow hover:text-primary-blue transition duration-150 ease-in-out absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white w-14 aspect-square rounded-full flex items-center justify-center hover:bg-gray-700 z-10"
          onClick={scrollNext}
        >
          <IoIosArrowForward size={30} />
        </button>
      </div>
      <div className="pt-12"></div>
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
