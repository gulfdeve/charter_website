import React, { useEffect, useRef, useState } from "react";
import EmblaCarousel from "embla-carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { RxBorderDotted } from "react-icons/rx";
const Reviews = () => {
  const viewportRef = useRef(null);
  const emblaApi = useRef(null);
  const [prevEnabled, setPrevEnabled] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(false);

  // Slide data stored in an array of objects
  const slidesData = [
    {
      id: 1,
      name: "Julain Smith",
      date: "June 2022",
      rating: 5,
      title: "Fabulous Experience",
      content:
        "This was an unforgettable experience with Centaurus Yachts & Boats, Dubai, and one of the highlights of our trip! The yacht (Vassia by Majesty) is luxurious, clean,...",
    },
    {
      id: 2,
      name: "Anna Taylor",
      date: "July 2022",
      rating: 4,
      title: "Wonderful Service",
      content:
        "The crew was friendly, and the service was amazing. Highly recommended for a relaxing experience on the waters of Dubai.",
    },
    {
      id: 3,
      name: "John Doe",
      date: "August 2022",
      rating: 5,
      title: "Perfect Day",
      content:
        "The yacht was in pristine condition, and the staff went above and beyond to make our day special. Will definitely book again.",
    },
  ];

  useEffect(() => {
    if (viewportRef.current) {
      emblaApi.current = EmblaCarousel(viewportRef.current, {
        align: "start",
        slidesToScroll: 2,
        containScroll: "trimSnaps",
      });

      const onSelect = () => {
        if (!emblaApi.current) return;
        setPrevEnabled(emblaApi.current.canScrollPrev());
        setNextEnabled(emblaApi.current.canScrollNext());
      };

      emblaApi.current.on("select", onSelect);
      onSelect();
    }

    return () => emblaApi.current && emblaApi.current.destroy();
  }, []);

  const scrollPrev = () => emblaApi.current && emblaApi.current.scrollPrev();
  const scrollNext = () => emblaApi.current && emblaApi.current.scrollNext();

  const carouselRef = useRef(null);
  const emblaRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      emblaRef.current = EmblaCarousel(carouselRef.current, {
        loop: true,
        slidesToScroll: 1,
      });
    }
  }, []);

  const scrollPrevMob = () => {
    if (emblaRef.current) {
      emblaRef.current.scrollPrev();
    }
  };

  const scrollNextMob = () => {
    if (emblaRef.current) {
      emblaRef.current.scrollNext();
    }
  };
  return (
    <>
      <div className="xl:block hidden">
        <div className="bg-gray-200 w-full h-auto py-20 px-4">
          <div>
            <h1 className=" text-[#0D2343] text-center font-bold text-4xl pb-4">
              WHAT OUR GUESTS SAY
            </h1>
          </div>

          <div className="flex flex-row items-stretch justify-center container mx-auto relative gap-7">
            {/* TripAdvisor Container */}
            <div className="pt-[3.3rem]">
              <div className="bg-white p-6 rounded-md shadow-md w-44   h-[225px] z-20 flex flex-col justify-center items-center">
                <Link href="https://www.tripadvisor.com/Attraction_Review-g295424-d15699786-Reviews-Centaurus_Yachts_Boats_Dubai-Dubai_Emirate_of_Dubai.html">
                  <h1 className=" font-bold text-center text-sm underline">
                    Centaurus Yachts & Boats Dubai
                  </h1>
                  <div className="flex flex-col items-center justify-center -space-y-3">
                    <RxBorderDotted className="text-green-600 text-center text-5xl -mt-3" />
                    <h1 className=" font-bold text-xs">176 Reviews</h1>
                    <img src="/TripAdvisor.png" className="w-24 pt-5" />
                  </div>
                </Link>
              </div>
            </div>
            {/* Review Carousel */}
            <div className="w-full max-w-4xl mt-8 flex flex-col items-center">
              <div
                className="custom-embla__viewport overflow-hidden"
                ref={viewportRef}
              >
                <div className="custom-embla__container flex">
                  {slidesData.map((slide) => (
                    <div
                      key={slide.id}
                      className="custom-embla__slide flex-[0_0_50%] text-left p-4 rounded-md mx-2"
                    >
                      <div className="bg-white h-[225px] flex flex-col items-start p-5 rounded-lg">
                        <div className="flex flex-row gap-5">
                          <img
                            src="Profile.jpg"
                            alt="Profile"
                            className="w-14 rounded-full"
                          />
                          <div className="flex flex-col items-start">
                            <h1 className="">{slide.name}</h1>
                            <h3 className=" text-xs">{slide.date}</h3>
                          </div>
                        </div>
                        <div className="flex flex-row py-1 gap-2">
                          {Array.from({ length: slide.rating }, (_, index) => (
                            <FaStar key={index} />
                          ))}
                        </div>
                        <h1 className=" text-sm py-1">{slide.title}</h1>
                        <p className=" text-xs">{slide.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center space-x-4 mt-4">
                <button
                  aria-label="go previous review"
                  className="bg-gray-800 text-white p-2 lg:p-5 rounded-full hover:bg-gray-700"
                  onClick={scrollPrev}
                >
                  <IoIosArrowBack size={20} />
                </button>
                <button
                  aria-label="go next review"
                  className="bg-gray-800 text-white p-2 lg:p-5 rounded-full hover:bg-gray-700"
                  onClick={scrollNext}
                >
                  <IoIosArrowForward size={20} />
                </button>
                <div className="p-2 flex flex-col items-center z-20">
                  <Link href="https://www.tripadvisor.com/Attraction_Review-g295424-d15699786-Reviews-Centaurus_Yachts_Boats_Dubai-Dubai_Emirate_of_Dubai.html">
                    <button className="blue-solid-button">
                      Write A Review
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:hidden block">
        <div className="bg-gray-200 w-full h-auto py-20 px-4">
          <div>
            <h1 className=" text-[#0D2343] text-center font-bold text-4xl pb-4">
              WHAT OUR GUESTS SAY
            </h1>
          </div>

          <div
            className="embla  custom-embla__viewport relative flex flex-col lg:flex-row xl:justify-center items-center lg:items-center lg:pt-7 lg:-ml-[8rem] xl:ml-[6rem]"
            ref={carouselRef}
          >
            <div className="embla__container">
              {slidesData.map((review) => (
                <div className="embla__slide lg:w-[28rem]" key={review.id}>
                  <div className="bg-white w-[18rem] lg:w-[28rem] h-[225px] flex flex-col items-start p-5 rounded-lg">
                    <div className="flex flex-row gap-5">
                      <img
                        alt="Profile"
                        src="Profile.jpg"
                        className="w-14 rounded-full"
                      />
                      <div className="flex flex-col items-start">
                        <h1 className="">{review.name}</h1>
                        <h3 className=" text-xs">{review.date}</h3>
                      </div>
                    </div>
                    <div className="flex flex-row py-1 gap-2">
                      {Array.from({ length: review.rating }, (_, index) => (
                        <FaStar key={index} />
                      ))}
                    </div>
                    <h1 className=" text-sm py-1">{review.title}</h1>
                    <p className=" text-xs">{review.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:block hidden">
              <div className="flex flex-col justify-center w-[20rem] md:w-full lg:ml-4 mt-4 lg:mt-4 lg:absolute xl:left-60 lg:left-32 lg:top-1/2 lg:-translate-y-1/2 lg:w-44 lg:p-3 lg:h-[225px] bg-white h-32 text-center rounded-lg">
                <Link href="https://www.tripadvisor.com/Attraction_Review-g295424-d15699786-Reviews-Centaurus_Yachts_Boats_Dubai-Dubai_Emirate_of_Dubai.html">
                  <h1 className=" font-bold text-sm underline">
                    Centaurus Yachts & Boats Dubai
                  </h1>
                  <div className="flex flex-col items-center justify-center -space-y-3">
                    <RxBorderDotted className="text-green-600 text-center text-5xl -mt-3" />
                    <h1 className=" font-bold text-xs">176 Reviews</h1>
                    <img
                      alt="tripadvisor logo"
                      src="/TripAdvisor.png"
                      className="w-24 pt-5"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-4 gap-2 ">
            <button
              aria-label="go previous review"
              className="bg-gray-800 text-white p-2 lg:p-5 rounded-full hover:bg-gray-700"
              onClick={scrollPrevMob}
            >
              <IoIosArrowBack size={20} />
            </button>
            <button
              aria-label="go next review"
              className="bg-gray-800 text-white p-2 lg:p-5 rounded-full hover:bg-gray-700"
              onClick={scrollNextMob}
            >
              <IoIosArrowForward size={20} />
            </button>
            <div className=" p-2 flex flex-col items-center z-20 ">
              <Link href="https://www.tripadvisor.com/Attraction_Review-g295424-d15699786-Reviews-Centaurus_Yachts_Boats_Dubai-Dubai_Emirate_of_Dubai.html">
                <button className="flex flex-row items-center justify-center py-1 px-6 md:py-2 md:px-8 border-4 border-[#0d2343] rounded-md bg-[#050505] hover:bg-[#0d2343] text-[#e1ae48]  font-bold text-base md:text-sm xl:text-base transition-all duration-300">
                  Write A Review
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:hidden block ">
            <div className="flex flex-col justify-center w-full md:w-full lg:ml-4 mt-4 lg:mt-4 lg:absolute xl:left-60 lg:left-32 lg:top-1/2 lg:-translate-y-1/2 lg:w-44 lg:p-3 lg:h-[225px] bg-white h-32 text-center rounded-lg">
              <Link href="https://www.tripadvisor.com/Attraction_Review-g295424-d15699786-Reviews-Centaurus_Yachts_Boats_Dubai-Dubai_Emirate_of_Dubai.html">
                <h1 className=" font-bold text-sm underline">
                  Centaurus Yachts & Boats Dubai
                </h1>
                <div className="flex flex-col items-center justify-center -space-y-3">
                  <RxBorderDotted className="text-green-600 text-center text-5xl -mt-3" />
                  <h1 className=" font-bold text-xs">176 Reviews</h1>
                  <img
                    alt="tripadvisor logo"
                    src="/TripAdvisor.png"
                    className="w-24 pt-5"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
