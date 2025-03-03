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

export default function EmblaCarouselComponent() {
  const emblaDesktopRef = useRef(null);
  const emblaMobileRef = useRef(null);
  const emblaDesktopInstance = useRef(null);
  const emblaMobileInstance = useRef(null);

  // Desktop carousel: initialize Embla with loop and set autoplay
  useEffect(() => {
    if (emblaDesktopRef.current) {
      emblaDesktopInstance.current = EmblaCarousel(emblaDesktopRef.current, {
        align: "start",
        loop: true,
      });
      const autoplayDesktop = setInterval(() => {
        emblaDesktopInstance.current?.scrollNext();
      }, 10000);
      return () => {
        clearInterval(autoplayDesktop);
        emblaDesktopInstance.current?.destroy();
      };
    }
  }, []);

  // Mobile carousel: initialize Embla with loop and set autoplay
  useEffect(() => {
    if (emblaMobileRef.current) {
      emblaMobileInstance.current = EmblaCarousel(emblaMobileRef.current, {
        align: "start",
        loop: true,
      });
      const autoplayMobile = setInterval(() => {
        emblaMobileInstance.current?.scrollNext();
      }, 3000);
      return () => {
        clearInterval(autoplayMobile);
        emblaMobileInstance.current?.destroy();
      };
    }
  }, []);

  const scrollPrevDesktop = () => emblaDesktopInstance.current?.scrollPrev();
  const scrollNextDesktop = () => emblaDesktopInstance.current?.scrollNext();

  const scrollPrevMobile = () => emblaMobileInstance.current?.scrollPrev();
  const scrollNextMobile = () => emblaMobileInstance.current?.scrollNext();

  return (
    <div className="flex flex-col items-center container mx-auto">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-primary-blue text-center font-bold text-4xl py-10">
          YACHT LOCATION
        </h2>
      </div>

      {/* Desktop Carousel */}
      <div className="relative max-w-7xl overflow-hidden lg:pb-9 xl:px-66 2xl:px-66 hidden lg:block">
        <div className="embla__viewport1" ref={emblaDesktopRef}>
          <div className="embla__container1 flex">
            {TEMPORARY_DATA.map((item) => (
              <div key={item.id} className="embla__slide1">
                <div className="relative bg-gray-200 overflow-hidden shadow-lg">
                  <iframe
                    title="google maps location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.2080337682214!2d55.1390062!3d25.094818299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b1f6453e121%3A0x45035717db6c3954!2sCENTAURUS%20CHARTER%20-%20Yachts%20%26%20Boats%20Rental%20Dubai%20Harbour!5e0!3m2!1sen!2s!4v1734525244924!5m2!1sen!2s"
                    width="380"
                    height="380"
                    loading="lazy"
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

        {/* Desktop Navigation Buttons */}
        <button
          aria-label="go previous slide"
          className="bg-primary-blue text-primary-yellow hover:bg-primary-yellow hover:text-primary-blue transition duration-150 ease-in-out absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white w-14 aspect-square rounded-full flex items-center justify-center hover:bg-gray-700 z-10"
          onClick={scrollPrevDesktop}
        >
          <IoIosArrowBack size={30} />
        </button>
        <button
          aria-label="go next slide"
          className="bg-primary-blue text-primary-yellow hover:bg-primary-yellow hover:text-primary-blue transition duration-150 ease-in-out absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white w-14 aspect-square rounded-full flex items-center justify-center hover:bg-gray-700 z-10"
          onClick={scrollNextDesktop}
        >
          <IoIosArrowForward size={30} />
        </button>
      </div>

      {/* Mobile Carousel */}
      <div className="relative w-full overflow-hidden lg:hidden block py-10">
        <div className="embla__viewport" ref={emblaMobileRef}>
          <div className="embla__container flex">
            {TEMPORARY_DATA.map((item) => (
              <div key={item.id} className="embla__slide p-4">
                <div className="relative bg-gray-200 overflow-hidden shadow-lg">
                  <iframe
                    title="google maps location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.2080337682214!2d55.1390062!3d25.094818299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b1f6453e121%3A0x45035717db6c3954!2sCENTAURUS%20CHARTER%20-%20Yachts%20%26%20Boats%20Rental%20Dubai%20Harbour!5e0!3m2!1sen!2s!4v1734525244924!5m2!1sen!2s"
                    width="380"
                    height="380"
                    loading="lazy"
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

        {/* Mobile Navigation Buttons */}
        <button
          aria-label="go previous slide"
          className="bg-primary-blue text-primary-yellow hover:bg-primary-yellow hover:text-primary-blue transition duration-150 ease-in-out absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white w-12 aspect-square rounded-full flex items-center justify-center hover:bg-gray-700 z-10"
          onClick={scrollPrevMobile}
        >
          <IoIosArrowBack size={24} />
        </button>
        <button
          aria-label="go next slide"
          className="bg-primary-blue text-primary-yellow hover:bg-primary-yellow hover:text-primary-blue transition duration-150 ease-in-out absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white w-12 aspect-square rounded-full flex items-center justify-center hover:bg-gray-700 z-10"
          onClick={scrollNextMobile}
        >
          <IoIosArrowForward size={24} />
        </button>
      </div>
    </div>
  );
}
