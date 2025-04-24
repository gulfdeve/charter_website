import React, { useEffect, useRef, useState } from "react";
import EmblaCarousel from "embla-carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { useRouter, usePathname, Link } from "@/app/i18n/routing";
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
      <div className="hidden xl:block relative w-full h-auto py-20 px-4">
      {/* Background SVG in Front */}
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: "url('/images/bg-svg-blue.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "contain",
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Gradient Background Behind */}
      <div className="absolute inset-0 gradient-custom z-0"></div>

        <div className="relative z-20">
        <h2 className="text-primary-blue text-center font-bold xxs:text-2xl sm:text:2xl md:text-3xl lg:text-4xl pb-4">
          WHAT OUR GUESTS SAY
        </h2>

          <div className="flex flex-row items-stretch justify-center container mx-auto relative gap-7">
            {/* Review Carousel */}
            <div className="w-full max-w-4xl mt-10 flex flex-col items-center align-middle justify-center">
              <div
                className="custom-embla__viewport overflow-hidden z-10"
                ref={viewportRef}
              >
                <div className="custom-embla__container flex">
                  {slidesData.map((slide) => (
                    <div
                      key={slide.id}
                      className="flex-[0_0_33.33%] text-left p-2 rounded-md"
                    >  
                      <div className="bg-white h-[290px] flex flex-col items-start p-5 rounded-lg">
                        <div className="flex flex-row gap-5">
                          <img
                            src="images/profile.svg"
                            alt="Profile"
                            className="w-14 rounded-full"
                          />
                          <div className="flex flex-col items-start">
                            <span className="font-bold">{slide.name}</span>
                            <span className=" text-xs">{slide.date}</span>
                          </div>
                        </div>
                        <div className="flex flex-row py-1 gap-1">
                          {Array.from({ length: slide.rating }, (_, index) => (
                            <FaStar key={index} color="#E1BA4D" />
                          ))}
                        </div>
                        <p className=" text-sm py-1">{slide.title}</p>
                        <p className=" text-xs overflow-hidden text-ellipsis">{slide.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="w-full h-full absolute flex justify-between z-0 px-20">
                <button
                  aria-label="go previous review"
                  className="text-gray-500 p-2 rounded-full"
                  onClick={scrollPrev}
                >
                  <IoIosArrowBack size={30} />
                </button>
                <button
                  aria-label="go next review"
                  className="text-gray-500 p-2 lg:p-5 rounded-full"
                  onClick={scrollNext}
                >
                  <IoIosArrowForward size={30} />
                </button>
              </div>
              <div className="flex w-full items-end justify-end mt-4 gap-2 z-50">
                <p className="flex items-center justify-end mt-4 gap-2">
                  <a
                    href="https://g.co/kgs/jfR6mP6"
                    className="underline text-gray-600 font-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read all review on Google
                  </a>
                  <FcGoogle size={30} />
                  <span className="text-gray-600 font-bold text-xl"> 4.8</span>
                  <span className="text-gray-600 text-sm"> (150) Reviews</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div className="xl:hidden block">
        <div className="gradient-custom w-full h-auto py-20 px-4">
          <div>
            <h2 className=" text-primary-blue text-center font-bold text-xl sm:text:2xl md:text-3xl lg:text-4xl pb-4">
              WHAT OUR GUESTS SAY
            </h2>
          </div>

          <div
            className="embla  custom-embla__viewport relative flex flex-col lg:flex-row xl:justify-center items-center lg:items-center lg:pt-7 lg:-ml-[8rem] xl:ml-[6rem]"
            ref={carouselRef}
          >
            <div className="embla__container">
              {slidesData.map((review) => (
                <div className="embla__slide " key={review.id}>
                  <div className="bg-white w-[18rem] h-[225px] flex flex-col items-start p-5 rounded-lg">
                    <div className="flex flex-row gap-5">
                      <img
                        alt="Profile"
                        src="images/profile.svg"
                        className="w-14 rounded-full"
                      />
                      <div className="flex flex-col items-start">
                        <span className="font-bold">{review.name}</span>
                        <span className=" text-xs">{review.date}</span>
                      </div>
                    </div>
                    <div className="flex flex-row py-1 gap-2">
                      {Array.from({ length: review.rating }, (_, index) => (
                        <FaStar key={index} color="#E1BA4D" />
                      ))}
                    </div>
                    <span className=" text-sm py-1">{review.title}</span>
                    <p className=" text-xs overflow-hidden text-ellipsis">{review.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center mt-4 gap-2 ">
            <button
              aria-label="go previous review"
              className="bg-gray-200 text-gray-500 p-2 lg:p-5 rounded-full hover:bg-gray-300"
              onClick={scrollPrevMob}
            >
              <IoIosArrowBack size={20} />
            </button>
            <button
              aria-label="go next review"
              className="bg-gray-200 text-gray-500 p-2 lg:p-5 rounded-full hover:bg-gray-300"
              onClick={scrollNextMob}
            >
              <IoIosArrowForward size={20} />
            </button>
           
          </div>
          <div>
            <p className="flex flex-col sm:flex-row items-center justify-center mt-4 gap-2 z-index-50">
              <a
                href="https://g.co/kgs/jfR6mP6"
                className="underline text-gray-600 font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read all review on Google
              </a>
              <FcGoogle size={30} />
              <span className="text-gray-600 font-bold text-xl"> 4.8</span>
              <span className="text-gray-600 text-sm"> (150) Reviews</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
