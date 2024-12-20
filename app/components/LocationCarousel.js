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

  useEffect(() => {
    if (emblaDesktopRef.current) {
      emblaDesktopInstance.current = EmblaCarousel(emblaDesktopRef.current, {
        align: "start",
      });
    }
    if (emblaMobileRef.current) {
      emblaMobileInstance.current = EmblaCarousel(emblaMobileRef.current, {
        align: "start",
      });
    }
    return () => {
      emblaDesktopInstance.current?.destroy();
      emblaMobileInstance.current?.destroy();
    };
  }, []);

  const scrollPrevDesktop = () => emblaDesktopInstance.current?.scrollPrev();
  const scrollNextDesktop = () => emblaDesktopInstance.current?.scrollNext();

  const scrollPrevMobile = () => emblaMobileInstance.current?.scrollPrev();
  const scrollNextMobile = () => emblaMobileInstance.current?.scrollNext();


  return (
    <><div className="flex flex-col items-center justify-center pt-10 ">
          <h1 className="font-Montserrat text-[#0D2343] text-center font-bold text-4xl pb-4">
              YACHT LOCATION
          </h1>
      </div><div className="relative w-full overflow-hidden xl:px-32 2xl:px-96 py-10">
              {/* Carousel Viewport */}
              <div className="embla__viewport1 lg:block hidden " ref={emblaDesktopRef}>
                  <div className="embla__container1 flex">
                      {/* Slides */}
                      {TEMPORARY_DATA.map((item) => (
                          <div
                              key={item.id}
                              className="embla__slide1  p-4 "
                          >
                              <div className="relative bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.2080337682214!2d55.1390062!3d25.094818299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b1f6453e121%3A0x45035717db6c3954!2sCENTAURUS%20CHARTER%20-%20Yachts%20%26%20Boats%20Rental%20Dubai%20Harbour!5e0!3m2!1sen!2s!4v1734525244924!5m2!1sen!2s" width="400" height="450" loading="lazy"></iframe>
                                  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-30 p-4 text-white">
                                      <h3 className="text-4xl font-Montserrat font-bold text-center">{item.title}</h3>
                                      <p className="text-xl font-Montserrat font-bold text-center">{item.description}</p>
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
              <div className="embla__viewport lg:hidden block " ref={emblaMobileRef}>
                  <div className="embla__container flex">
                      {/* Slides */}
                      {TEMPORARY_DATA.map((item) => (
                          <div
                              key={item.id}
                              className="embla__slide p-4 "
                          >
                              <div className="relative bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.2080337682214!2d55.1390062!3d25.094818299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b1f6453e121%3A0x45035717db6c3954!2sCENTAURUS%20CHARTER%20-%20Yachts%20%26%20Boats%20Rental%20Dubai%20Harbour!5e0!3m2!1sen!2s!4v1734525244924!5m2!1sen!2s" width="400" height="450" loading="lazy"></iframe>
                                  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-30 p-4 text-white">
                                      <h3 className="text-4xl font-Montserrat font-bold text-center">{item.title}</h3>
                                      <p className="text-xl font-Montserrat font-bold text-center">{item.description}</p>
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>

              {/* Navigation Buttons */}
              <button
                  className="absolute left-2 2xl:left-80 lg:left-32 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white w-10 aspect-square rounded-full flex items-center justify-center hover:bg-gray-700 z-10"
                  onClick={scrollPrevDesktop}
              >
                  <IoIosArrowBack size={24} />
              </button>
              <button
                  className="absolute right-2 2xl:right-80 lg:right-32 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white w-10 aspect-square rounded-full flex items-center justify-center hover:bg-gray-700 z-10"
                  onClick={scrollNextDesktop}
              >
                  <IoIosArrowForward size={24} />
              </button>
          </div></>
  );
}
