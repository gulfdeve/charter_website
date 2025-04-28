import React, { useEffect, useRef, useState } from "react";
import EmblaCarousel from "embla-carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
  const viewportRef = useRef(null);
  const emblaApi = useRef(null);
  const [prevEnabled, setPrevEnabled] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(false);

  // Slide data stored in an array of objects
  const slidesData = [
    {
      id: 1,
      name: "Carolina Arbelaez de la Espriella",
      date: "November 2025",
      rating: 5,
      content:
        "Great staff and overall very good service! I recommend to book with them, went on a trip with my kids and parents in law and was very nice, Jonathan has great sense of customer service 👍",
    },
    {
      id: 2,
      name: "Googoodoll",
      date: "July 2022",
      rating: 5,
      content:
        "An absolutely fun experience! Robert & Capt Gef was very accommodating and polite: picked us up from the “lobby” and guided us to the yacht even though some of us were so incredibly late. They made sure we got the best views and backgrounds for our pictures. This is surely one of the best if not the best yacht ride we tried with our very special friends! We’ll definitely come back next time we’re in Dubai & recommend :)",
    },
    {
      id: 3,
      name: "Arnee Profugo",
      date: "March 2025",
      rating: 5,
      content:
        "We had an unforgettable night aboard Lagoona! We booked it for a birthday celebration with friends and family, and the entire experience exceeded our expectations. The crew was incredibly professional, attentive, and made sure we had everything we needed for a perfect evening. A special thanks to Tracy for making the booking process seamless and stress-free! She was extremely helpful, answering all our questions and ensuring every detail was perfectly arranged for our celebration. If you're looking for an exceptional way to celebrate a special occasion or simply enjoy a day or night on the water, give them a call and ask for Tracy! 🤩"
    },
    {
      id: 4,
      name: "Marco",
      date: "December 2024",
      rating: 5,
      content:
        "Nice vessel, well maintained, Price very reasonable for a 118'' Crew very well trained, gentle and ready to help in any occasion. Nice service and quality of food and drink very good. They have full facilities on board, just ask and they will provide, Great for party or just cruising or transform in a Disco boat when necessary. We had private party for 85 People and was perfect."
    },
    {
      id: 5,
      name: "Adri Lenis",
      date: "February 2025",
      rating: 5,
      content:
        "Amazing experience with my group. They really enjoy the experience despite the cloudy and rainy weather. Staff was very attentive and polite. yacht is clean and everybody very professionals. As my group was mainly women they loved to have a women captain as well. Thanks a lot !"
    },
    {
      id: 6,
      name: "Marcy Simmons",
      date: "March 2025",
      rating: 5,
      content:
        "We had the most fun. Nice boat and over the top service. We last minute wanted jet skis for our boys to ride and within minutes they had jet skis come to the boat. Highly recommend."
    }
  ];

  useEffect(() => {
    if (viewportRef.current) {
      emblaApi.current = EmblaCarousel(viewportRef.current, {
        align: "start",
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

  return (
    <div className="relative w-full py-20">
      {/* Background SVG & Gradient */}
      <div className="absolute inset-0 z-[-1] bg-[url('/images/bg-svg-blue.svg')] bg-center bg-no-repeat bg-contain bg-fixed"></div>
      <div className="absolute inset-0 gradient-custom z-[-2]"></div>

      <div className="relative  container mx-auto px-4">
        <h2 className="text-primary-blue text-center font-bold text-2xl sm:text-3xl md:text-3xl lg:text-4xl pb-16">
          WHAT OUR GUESTS SAY
        </h2>

        {/* Carousel viewport with side padding */}
        <div
          className="custom-embla__viewport overflow-hidden mx-2 md:mx-4 lg:mx-40 "
          ref={viewportRef}
        >
          <div className="custom-embla__container  flex ">
            {slidesData.map((slide) => (
              <div
                key={slide.id}
                className="flex-none basis-full md:basis-1/2 lg:basis-1/3 p-2 px-3"
              >
                <div className="bg-white h-[290px] flex flex-col p-5 rounded-lg">
                  <div className="flex items-center gap-4 mb-2">
                    <img src="/images/profile.svg" alt="Profile" className="w-14 rounded-full" />
                    <div>
                      <p className="font-bold">{slide.name}</p>
                      <p className="text-xs text-gray-600">{slide.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-2">
                    {Array.from({ length: slide.rating }).map((_, i) => (
                      <FaStar key={i} color="#E1BA4D" />
                    ))}
                  </div>
                  <p className="text-sm mb-1">{slide.title}</p>
                  <p className="text-xs overflow-hidden text-ellipsis">{slide.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop nav: constrained inside container */}
        <div className="hidden lg:absolute lg:left-20 lg:right-20 lg:top-[64%] lg:flex lg:-translate-y-1/2 lg:justify-between ">
          <button
            aria-label="Previous"
            className="text-gray-500 p-2 rounded-full"
            onClick={scrollPrev}
            disabled={!prevEnabled}
          >
            <IoIosArrowBack size={30} />
          </button>
          <button
            aria-label="Next"
            className="text-gray-500 p-2 rounded-full"
            onClick={scrollNext}
            disabled={!nextEnabled}
          >
            <IoIosArrowForward size={30} />
          </button>
        </div>

        {/* Mobile nav below */}
        <div className="flex lg:hidden justify-center gap-4 mt-6 ">
          <button
            aria-label="Previous"
            className="bg-gray-200 text-gray-500 p-2 rounded-full hover:bg-gray-300"
            onClick={scrollPrev}
            disabled={!prevEnabled}
          >
            <IoIosArrowBack size={20} />
          </button>
          <button
            aria-label="Next"
            className="bg-gray-200 text-gray-500 p-2 rounded-full hover:bg-gray-300"
            onClick={scrollNext}
            disabled={!nextEnabled}
          >
            <IoIosArrowForward size={20} />
          </button>
        </div>

        {/* Google reviews link */}
        <div className="container flex flex-col md:flex-row justify-center items-center lg:justify-end gap-2 mt-6  md:px-4 lg:px-44">
          <a
            href="https://g.co/kgs/jfR6mP6"
            className="underline text-gray-600 font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read all reviews on Google
          </a>
          <FcGoogle size={30} />
          <span className="text-gray-600 font-bold text-xl">4.8</span>
          <span className="text-gray-600 text-sm">(150) Reviews</span>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
