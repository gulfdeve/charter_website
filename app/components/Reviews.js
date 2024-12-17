import React, { useEffect, useRef } from "react";
import EmblaCarousel from "embla-carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Reviews = () => {
  const carouselRef = useRef(null);
  const emblaRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      emblaRef.current = EmblaCarousel(carouselRef.current, {
        loop: true, // Optional: enables looping
        slidesToScroll: 1, // Optional: slides 1 at a time
      });
    }
  }, []);

  // Function to go to the previous slide
  const scrollPrev = () => {
    if (emblaRef.current) {
      emblaRef.current.scrollPrev();
    }
  };

  // Function to go to the next slide
  const scrollNext = () => {
    if (emblaRef.current) {
      emblaRef.current.scrollNext();
    }
  };

  return (
    <div className="bg-gray-200 w-full h-auto py-20">
      <div>
        <h1 className="font-Montserrat text-[#0D2343] text-center font-bold text-4xl pb-4">
          WHAT OUR GUESTS SAY
        </h1>
      </div>
      <div className="embla" ref={carouselRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <img src="https://via.placeholder.com/600x300" alt="Slide 1" />
          </div>
          <div className="embla__slide">
            <img src="https://via.placeholder.com/600x300" alt="Slide 2" />
          </div>
          <div className="embla__slide">
            <img src="https://via.placeholder.com/600x300" alt="Slide 3" />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4 gap-2">
      <button
              className=" bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
              onClick={scrollPrev}
            >
              <IoIosArrowBack size={20} />
            </button>
            <button
              className=" bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
              onClick={scrollNext}
            >
              <IoIosArrowForward size={20} />
            </button>
      </div>
    </div>
  );
};

export default Reviews;
