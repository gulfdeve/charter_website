'use client'
import React, { useEffect, useRef, useState } from 'react'
import EmblaCarousel from 'embla-carousel'
// import Videof1 from "@/app/components/Videof1"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import Image from 'next/image'
import { FaShip, FaUsers, FaBed, FaIdCard } from "react-icons/fa"
import Link from 'next/link'
import Modal2 from "@/app/components/Modal2";
import VideoLocal from "@/app/components/VideoLocal";

const yachtData = [
  {
    id: 1,
    title: "118 Ft Yacht - Poseidon",
    imageSrc: "/Poseidon--F1.jpg",
    imageAlt: "118 Ft Yacht - Poseidon",
    trackView: "Track View: Berth No. 63",
    isSold: false,
    infoBoxes: [
      { label: "Brand", value: "Majesty", icon: FaShip },
      { label: "Capacity", value: "100", icon: FaUsers },
      { label: "Sleeps", value: "8", icon: FaBed },
      { label: "Marina Passes", value: "50", icon: FaIdCard },
    ],
    inclusions: [
      "4 days yacht rental",
      "Crew service",
      "Full board food",
      "House drinks",
      "Marina passes",
    ],
    addons: [
      "Transfer",
      "Live DJ",
      "Alcohol",
      "Catering",
      "Premium drinks",
      "Extra marina pass",
      "Hostess",
    ],
    cta: "INQUIRE NOW",
  },
   {
    id: 2,
    title: "105 Ft Yacht - Dolce Vita",
    imageSrc: "/images/dolce-vita-105-ft.webp",
    imageAlt: "105 Ft Yacht - Dolce Vita",
    trackView: "Track View: Berth No. 62",
    isSold: false,
    infoBoxes: [
      { label: "Brand", value: "Numarine", icon: FaShip },
      { label: "Capacity", value: "TBE", icon: FaUsers },
      { label: "Sleeps", value: "8", icon: FaBed },
      { label: "Marina Passes", value: "40", icon: FaIdCard },
    ],
    inclusions: [
        "4 days yacht rental",
        "Crew service",
        "Full board food",
        "House drinks",
        "Marina passes",
      ],
      addons: [
        "Transfer",
        "Live DJ",
        "Alcohol",
        "Catering",
        "Premium drinks",
        "Extra marina pass",
        "Hostess",
      ],
    cta: "INQUIRE NOW",
  },
 {
    id: 3,
    title: "101 Ft Yacht - Majesty 101",
    imageSrc: "/images/majesty-101-ft.webp",
    imageAlt: "101 Ft Yacht - Majesty 101",
    trackView: "",
    isSold: false,
    infoBoxes: [
      { label: "Brand", value: "Majesty", icon: FaShip },
      { label: "Capacity", value: "TBA", icon: FaUsers },
      { label: "Sleeps", value: "12", icon: FaBed },
      { label: "Marina Passes", value: "40", icon: FaIdCard },
    ],
    inclusions: [
        "4 days yacht rental",
        "Crew service",
        "Full board food",
        "House drinks",
        "Marina passes",
      ],
      addons: [
        "Transfer",
        "Live DJ",
        "Alcohol",
        "Catering",
        "Premium drinks",
        "Extra marina pass",
        "Hostess",
      ],
    cta: "INQUIRE NOW",
  },  
 {
    id: 4,
    title: "101 Ft Yacht - KOH",
    imageSrc: "/images/koh-azimut-100-ft.webp",
    imageAlt: "101 Ft Yacht - KOH",
    trackView: "Track View: Berth No. 50A",
    isSold: false,
    infoBoxes: [
      { label: "Brand", value: "Azimut", icon: FaShip },
      { label: "Capacity", value: "50", icon: FaUsers },
      { label: "Sleeps", value: "10", icon: FaBed },
      { label: "Marina Passes", value: "30", icon: FaIdCard },
    ],
    inclusions: [
        "4 days yacht rental",
        "Crew service",
        "Full board food",
        "House drinks",
        "Marina passes",
      ],
      addons: [
        "Transfer",
        "Live DJ",
        "Alcohol",
        "Catering",
        "Premium drinks",
        "Extra marina pass",
        "Hostess",
      ],
    cta: "INQUIRE NOW",
  },  
{
    id: 5,
    title: "100 Ft Yacht - Spectre",
    imageSrc: "/images/spectre-100-ft.webp",
    imageAlt: "100 Ft Yacht - Spectre",
    trackView: "Track View: Berth No. 50A",
    isSold: false,
    infoBoxes: [
      { label: "Brand", value: "Azimut", icon: FaShip },
      { label: "Capacity", value: "80", icon: FaUsers },
      { label: "Sleeps", value: "8", icon: FaBed },
      { label: "Marina Passes", value: "40", icon: FaIdCard },
    ],
    inclusions: [
        "4 days yacht rental",
        "Crew service",
        "Full board food",
        "House drinks",
        "Marina passes",
      ],
      addons: [
        "Transfer",
        "Live DJ",
        "Alcohol",
        "Catering",
        "Premium drinks",
        "Extra marina pass",
        "Hostess",
      ],
    cta: "INQUIRE NOW",
  },
{
    id: 6,
    title: "90 Ft Yacht - Aarna",
    imageSrc: "/images/aarna-90-ft.webp",
    imageAlt: "90 Ft Yacht - Aarna",
    trackView: "",
    isSold: false,
    infoBoxes: [
      { label: "Brand", value: "Sunseeker", icon: FaShip },
      { label: "Capacity", value: "TBE", icon: FaUsers },
      { label: "Sleeps", value: "8", icon: FaBed },
      { label: "Marina Passes", value: "40", icon: FaIdCard },
    ],
    inclusions: [
        "4 days yacht rental",
        "Crew service",
        "Full board food",
        "House drinks",
        "Marina passes",
      ],
      addons: [
        "Transfer",
        "Live DJ",
        "Alcohol",
        "Catering",
        "Premium drinks",
        "Extra marina pass",
        "Hostess",
      ],
    cta: "INQUIRE NOW",
  },
{
    id: 7,
    title: "88 Ft Yacht - San Lorenzo",
    imageSrc: "/images/san-lorenzo-88-ft.webp",
    imageAlt: "88 Ft Yacht - San Lorenzo",
    trackView: "",
    isSold: false,
    infoBoxes: [
      { label: "Brand", value: "San Lorenzo", icon: FaShip },
      { label: "Capacity", value: "TBA", icon: FaUsers },
      { label: "Sleeps", value: "8", icon: FaBed },
      { label: "Marina Passes", value: "30", icon: FaIdCard },
    ],
    inclusions: [
        "4 days yacht rental",
        "Crew service",
        "Full board food",
        "House drinks",
        "Marina passes",
      ],
      addons: [
        "Transfer",
        "Live DJ",
        "Alcohol",
        "Catering",
        "Premium drinks",
        "Extra marina pass",
        "Hostess",
      ],
    cta: "INQUIRE NOW",
  },    
  {
    id: 14,
    title: "82 Ft Yacht - Matrix",
    imageSrc: "/images/matrix-82-ft.webp",
    imageAlt: "82 Ft Yacht - Matrix",
    trackView: "Track View: Berth No. E05",
    isSold: false,
    infoBoxes: [
      { label: "Brand", value: "Sunseeker", icon: FaShip },
      { label: "Capacity", value: "TBE", icon: FaUsers },
      { label: "Sleeps", value: "8", icon: FaBed },
      { label: "Marina Passes", value: "40", icon: FaIdCard },
    ],
    inclusions: [
        "4 days yacht rental",
        "Crew service",
        "Full board food",
        "House drinks",
        "Marina passes",
      ],
      addons: [
        "Transfer",
        "Live DJ",
        "Alcohol",
        "Catering",
        "Premium drinks",
        "Extra marina pass",
        "Hostess",
      ],
    cta: "INQUIRE NOW",
  },    
 {
    id: 13,
    title: "70 Ft Yacht - Serenity",
    imageSrc: "/images/serenity-70-ft.webp",
    imageAlt: "70 Ft Yacht - Serenity",
    trackView: "Track View: Berth No. 44A",
    isSold: false,
    infoBoxes: [
      { label: "Brand", value: "Sunseeker", icon: FaShip },
      { label: "Capacity", value: "TBE", icon: FaUsers },
      { label: "Sleeps", value: "6", icon: FaBed },
      { label: "Marina Passes", value: "8", icon: FaIdCard },
    ],
    inclusions: [
        "4 days yacht rental",
        "Crew service",
        "Full board food",
        "House drinks",
        "Marina passes",
      ],
      addons: [
        "Transfer",
        "Live DJ",
        "Alcohol",
        "Catering",
        "Premium drinks",
        "Extra marina pass",
        "Hostess",
      ],
    cta: "INQUIRE NOW",
  },  
  {
    id: 8,
    title: "85 Ft Yacht - Kronos",
    imageSrc: "/Majesty-88-LR (1).webp",
    imageAlt: "85 Ft Yacht - Kronos",
    trackView: "",
    isSold: true,
    infoBoxes: [
      { label: "Brand", value: "Duretti", icon: FaShip },
      { label: "Capacity", value: "50", icon: FaUsers },
      { label: "Sleeps", value: "6", icon: FaBed },
      { label: "Marina Passes", value: "25", icon: FaIdCard },
    ],
    inclusions: [
        "4 days yacht rental",
        "Crew service",
        "Full board food",
        "House drinks",
        "Marina passes",
      ],
      addons: [
        "Transfer",
        "Live DJ",
        "Alcohol",
        "Catering",
        "Premium drinks",
        "Extra marina pass",
        "Hostess",
      ],
    cta: "INQUIRE NOW",
  },
   {
    id: 11,
    title: "77 Ft Yacht - Dionysos",
    imageSrc: "/Dionysos-F1 (1).jpg",
    imageAlt: "56 Ft Yacht - Lagoona",
    trackView: "",
    isSold: true,
    infoBoxes: [
      { label: "Brand", value: "Majesty", icon: FaShip },
      { label: "Capacity", value: "28", icon: FaUsers },
      { label: "Sleeps", value: "6", icon: FaBed },
      { label: "Marina Passes", value: "28", icon: FaIdCard },
    ],
    inclusions: [
        "4 days yacht rental",
        "Crew service",
        "Full board food",
        "House drinks",
        "Marina passes",
      ],
      addons: [
        "Transfer",
        "Live DJ",
        "Alcohol",
        "Catering",
        "Premium drinks",
        "Extra marina pass",
        "Hostess",
      ],
    cta: "INQUIRE NOW",
  },
  {
    id: 9,
    title: "61 Ft Yacht - Silver Creek",
    imageSrc: "/Silver-Creek-F1.jpg",
    imageAlt: "85 Ft Yacht - Kronos",
    trackView: "",
    isSold: true,
    infoBoxes: [
      { label: "Brand", value: "Majesty", icon: FaShip },
      { label: "Capacity", value: "30", icon: FaUsers },
      { label: "Sleeps", value: "6", icon: FaBed },
      { label: "Marina Passes", value: "15", icon: FaIdCard },
    ],
    inclusions: [
        "4 days yacht rental",
        "Crew service",
        "Full board food",
        "House drinks",
        "Marina passes",
      ],
      addons: [
        "Transfer",
        "Live DJ",
        "Alcohol",
        "Catering",
        "Premium drinks",
        "Extra marina pass",
        "Hostess",
      ],
    cta: "INQUIRE NOW",
  },
  {
    id: 10,
    title: "58 Ft Yacht - Etosha",
    imageSrc: "/Etosha-F1.jpg",
    imageAlt: "58 Ft Yacht - Etosha",
    trackView: "",
    isSold: true,
    infoBoxes: [
      { label: "Brand", value: "Azimut", icon: FaShip },
      { label: "Capacity", value: "28", icon: FaUsers },
      { label: "Sleeps", value: "6", icon: FaBed },
      { label: "Marina Passes", value: "28", icon: FaIdCard },
    ],
    inclusions: [
        "4 days yacht rental",
        "Crew service",
        "Full board food",
        "House drinks",
        "Marina passes",
      ],
      addons: [
        "Transfer",
        "Live DJ",
        "Alcohol",
        "Catering",
        "Premium drinks",
        "Extra marina pass",
        "Hostess",
      ],
    cta: "INQUIRE NOW",
  },
  {
    id: 12,
    title: "56 Ft Yacht - Lagoona",
    imageSrc: "/Lagoona--F1.jpg",
    imageAlt: "56 Ft Yacht - Lagoona",
    trackView: "",
    isSold: true,
    infoBoxes: [
      { label: "Brand", value: "Majesty", icon: FaShip },
      { label: "Capacity", value: "28", icon: FaUsers },
      { label: "Sleeps", value: "6", icon: FaBed },
      { label: "Marina Passes", value: "28", icon: FaIdCard },
    ],
    inclusions: [
        "4 days yacht rental",
        "Crew service",
        "Full board food",
        "House drinks",
        "Marina passes",
      ],
      addons: [
        "Transfer",
        "Live DJ",
        "Alcohol",
        "Catering",
        "Premium drinks",
        "Extra marina pass",
        "Hostess",
      ],
    cta: "INQUIRE NOW",
  }
  
]

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleQuote = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const emblaRef1 = useRef(null)
  const [emblaApi1, setEmblaApi1] = useState(null)

  useEffect(() => {
    if (emblaRef1.current) {
      const embla = EmblaCarousel(emblaRef1.current, {
        loop: false,
        align: 'start',
      })
      setEmblaApi1(embla)
    }
  }, [])

  const scrollPrev1 = () => emblaApi1?.scrollPrev()
  const scrollNext1 = () => emblaApi1?.scrollNext()
// Carousel 2
  const emblaRef2 = useRef(null);
  const [emblaApi2, setEmblaApi2] = useState(null);

  useEffect(() => {
    if (emblaRef2.current) {
      const embla = EmblaCarousel(emblaRef2.current, {
        loop: false,
        align: "start",
      });
      setEmblaApi2(embla);
    }
  }, []);

  const scrollPrev2 = () => emblaApi2?.scrollPrev();
  const scrollNext2 = () => emblaApi2?.scrollNext();

  const slidesone = [
    // { src: "/4-DAY FREE-FLOWING HOPS, WINE & SPIRITS.webp", text: "4-DAY FREE-FLOWING HOPS, WINE & SPIRITS" },
    // { src: "/IN-HOUSE MIXOLOGIST, PREMIUM DRINKS.webp", text: "IN-HOUSE MIXOLOGIST, PREMIUM DRINKS" },
    // { src: "/SPECTACULAR F1 TRACKSIDE VIEWS.webp", text: "SPECTACULAR F1 TRACKSIDE VIEWS" },
    // { src: "/PITLANE WALK 1 TIME ACCESS.webp", text: "PITLANE WALK 1 TIME ACCESS" },
    // { src: "/VIEW POST-RACE FIREWORKS CELEBRATIONS.webp", text: "VIEW POST-RACE FIREWORKS CELEBRATIONS" },
    // { src: "/ACCESS TO AFTER-RACE CONCERTS.webp", text: "ACCESS TO AFTER-RACE CONCERTS" },
    // { src: "/DAILY ACCESS TO F1 OASIS AREA.webp", text: "DAILY ACCESS TO F1 OASIS AREA" },
    // { src: "/PANORAMIC VIEWS OF YAS MARINA.webp", text: "PANORAMIC VIEWS OF YAS MARINA" },
    // { src: "/4-DAY VIP YACHT PARTY ACCESS.webp", text: "4-DAY YACHT PARTY ACCESS" },
    // { src: "/4-DAY GOURMET FOOD CATERING.webp", text: "4-DAY GOURMET FOOD CATERING" },

    { src: "/4-DAY VIP YACHT PARTY ACCESS.webp", text: "4-DAY YACHT RENTAL" },
    { src: "/images/crew-service.webp", text: "CREW SERVICE" },
    { src: "/PITLANE WALK 1 TIME ACCESS.webp", text: "PITLANE WALK 1 TIME ACCESS" },
    { src: "/4-DAY GOURMET FOOD CATERING.webp", text: "GOURMET CATERING" },
    { src: "/4-DAY FREE-FLOWING HOPS, WINE & SPIRITS.webp", text: "FREE-FLOWING HOPS, WINE & SPIRITS" },
    { src: "/IN-HOUSE MIXOLOGIST, PREMIUM DRINKS.webp", text: "IN-HOUSE MIXOLOGIST, PREMIUM DRINKS" },
    { src: "/SPECTACULAR F1 TRACKSIDE VIEWS.webp", text: "SPECTACULAR F1 TRACKSIDE VIEWS" },
    { src: "/VIEW POST-RACE FIREWORKS CELEBRATIONS.webp", text: "VIEW POST-RACE FIREWORKS CELEBRATIONS" },
    { src: "/ACCESS TO AFTER-RACE CONCERTS.webp", text: "ACCESS TO AFTER-RACE CONCERTS" },
    { src: "/DAILY ACCESS TO F1 OASIS AREA.webp", text: "DAILY ACCESS TO F1 OASIS AREA" },
    { src: "/PANORAMIC VIEWS OF YAS MARINA.webp", text: "PANORAMIC VIEWS OF YAS MARINA" },

  ]
  const slidestwo = [
    // { src: "/4-DAY FREE-FLOWING HOPS, WINE & SPIRITS.webp", text: "4-DAY FREE-FLOWING HOPS, WINE & SPIRITS" },
    // { src: "/IN-HOUSE MIXOLOGIST, PREMIUM DRINKS.webp", text: "IN-HOUSE MIXOLOGIST, PREMIUM DRINKS" },
    // { src: "/LIVE DJ ENTERTAINMENT ONBOARD.webp", text: "LIVE DJ ENTERTAINMENT ONBOARD" },
    // { src: "/SPECTACULAR F1 TRACKSIDE VIEWS.webp", text: "SPECTACULAR F1 TRACKSIDE VIEWS" },
    // { src: "/PITLANE WALK 1 TIME ACCESS.webp", text: "PITLANE WALK 1 TIME ACCESS" },
    // { src: "/VIEW POST-RACE FIREWORKS CELEBRATIONS.webp", text: "VIEW POST-RACE FIREWORKS CELEBRATIONS" },
    // { src: "/ACCESS TO AFTER-RACE CONCERTS.webp", text: "ACCESS TO AFTER-RACE CONCERTS" },
    // { src: "/DAILY ACCESS TO F1 OASIS AREA.webp", text: "DAILY ACCESS TO F1 OASIS AREA" },
    // { src: "/PANORAMIC VIEWS OF YAS MARINA.webp", text: "PANORAMIC VIEWS OF YAS MARINA" },
    // { src: "/4-DAY VIP YACHT PARTY ACCESS.webp", text: "4-DAY VIP YACHT PARTY ACCESS" },
    // { src: "/4-DAY GOURMET FOOD CATERING.webp", text: "4-DAY GOURMET FOOD CATERING" },

    { src: "/images/hotel-transfer.webp", text: "HOTEL TRANSFER" },
    { src: "/LIVE DJ ENTERTAINMENT ONBOARD.webp", text: "LIVE DJ ENTERTAINMENT ONBOARD" },
    { src: "/images/buggy-service.webp", text: "BUGGY SERVICE" },
    { src: "/images/upgrade-gourmet-catering.webp", text: "UPGRADE TO PREMIUM GOURMET CATERING" },
    { src: "/images/bubbly-drinks-on-yacht-dubai.webp", text: "PREMIUM DRINKS" },
    { src: "/images/marina-pass.webp", text: "EXTRA MARINA PASS" },
    { src: "/images/hostess.webp", text: "HOSTESS" },
  ]
  return (
    <>
      {/* Video Section */}
      {/* <div>
        <Videof1 />
      </div> */}
      <VideoLocal filename="/F1 2023 720p.mp4" section="f1" />
<div className="hidden bg-red-900 text-white text-center py-2 text-sm font-semibold sticky top-14 lg:top-[4.5rem] z-20">
  🎉 Promo: 10% OFF on All F1 Yacht Packages – Offer ends September 15, 2025!
</div>
      {/* Heading Section */}
      <section className="flex flex-col items-center py-20 bg-black">
        <div className="container mx-auto">
          <img
                src="/images/f1-grand-prix-abu-dhabi-2025.webp"
                alt="F1 2025"
                className=""
          /></div>
        <h2 className="text-3xl font-bold text-center text-red-700 pt-5">
          FORMULA 1 ABU DHABI GP 2025
        </h2>
        <p className="font-medium text-center text-white my-3 tracking-[0.70rem]">
          LUXURY YACHT CHARTER PACKAGES
        </p>
        <p className=" text-center font-bold text-white mt-2 ">
          EVENT DATES: 04 - 07 DECEMBER 2025 | YAS MARINA, ABU DHABI
        </p>
        {/* Two-column (Image + Text) Section */}
        <div className="container mx-auto py-10">
          <div className="flex flex-col lg:flex-row items-center justify-center rounded-lg overflow-hidden lg:mx-20">
            {/* Left: Image */}
            <div className="rounded rounded-l-xl">
              <img
                src="/images/trackside.webp"
                alt="F1 Trackside"
                className="xl:w-[40rem] sm:w-[170rem] lg:w-[160rem] md:h-[543px] xl:h-[570px] lg:h-[504px]"
              />
            </div>

            {/* Right: Text & Content */}
            <div className="flex flex-col items-center justify-center bg-gradient-to-r from-[#010E1C] via-red-900 to-[#010E1C] px-5 py-5 xl:w-[40rem] lg:w-[160rem] md:h-[541px] xl:h-[570px] lg:h-[504px] p-5">
              <h3 className="text-white uppercase md:text-2xl lg:text-4xl font-bold text-center pb-6">
                 F1 Yacht Charter Experience
              </h3>
              <p className="text-white text-center text-sm md:text-base pb-8 px-2 md:px-2">
                Join Centaurus Charter for an exclusive 4-day Formula 1 Yacht Party experience.
                Enjoy a luxurious setting, breathtaking views, and an unforgettable race weekend atmosphere.
                Perfect for corporate events or private celebrations, this hospitality package offers the
                ultimate way to enjoy the excitement of Formula 1.
              </p>
              <Link href="https://wa.link/pgrzh7" target="_blank" >
              <button className="bg-white text-primary-blue font-bold px-7 py-4 rounded-xl shadow-md hover:bg-gray-200 transition-colors">
                INQUIRE NOW
              </button></Link>
              <p className="mt-8 text-sm text-gray-200 text-center">
                Only one yacht available remaining. T&Cs apply.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <div className="bg-[linear-gradient(to_bottom,_black_0%,_#010e1c_100%)] pb-12">
      <div className="container mx-auto ">
        <h4 className="uppercase text-2xl md:text-3xl font-bold text-center text-white mb-8">
          F1 Yacht Package Inclusions
        </h4>
        <div ref={emblaRef1} className="overflow-hidden relative">
          <div className="flex">
            {slidesone.map((item, index) => (
              <div
                key={index}
                className="
                  flex-[0_0_100%]
                  sm:flex-[0_0_50%]
                  md:flex-[0_0_33%]
                  lg:flex-[0_0_25%]
                  px-2
                "
              >
                <div className="flex flex-col rounded-xl overflow-hidden">
                  <img src={item.src} className="w-full" alt={item.text} />
                  <p className="font-bold text-sm bg-red-950 text-white text-center p-7 h-20 flex items-center justify-center">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons (Arrows) */}
          <button
            aria-label="Previous Slide"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-[#1a1a1a] text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors z-10"
            onClick={scrollPrev1}
          >
            <IoIosArrowBack size={30} />
          </button>
          <button
            aria-label="Next Slide"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-[#1a1a1a] text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors z-10"
            onClick={scrollNext1}
          >
            <IoIosArrowForward size={30} />
          </button>
        </div>
      </div>
      </div>

      {/* Yacht Cards Section */}
      <section className="bg-[#010e1c] py-12">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">
          F1 LUXURY YACHT CHARTER PACKAGES
        </h3>
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {yachtData.map((yacht) => (
              <div key={yacht.id} className="bg-[#09162a] rounded-lg overflow-hidden p-3 md:p-5">
                <h4 className=" font-bold text-white">{yacht.title}</h4>
                {/* Yacht Image */}
                <div className='relative'>
                <Image
                  src={yacht.imageSrc}
                  alt={yacht.imageAlt}
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover rounded-lg mt-3"
                />
                {yacht.isSold ? (
                  <div className="absolute flex items-center gap-2 top-4 left-0 bg-primary-red text-white text-sm py-0.5 px-2 rounded-r-lg">
                    <p>Sold Out</p>
                  </div>
                ) : (
                  yacht.trackView &&
                  <div className="absolute flex items-center gap-2 top-4 left-0 gradient-custom-2 text-white text-sm py-0.5 px-2 rounded-r-lg">
                    {yacht.trackView}
                  </div>
                )}
                  <div className="absolute grid grid-cols-4 gap-2  -bottom-5 left-0 right-0 mx-3 text-blue-900 rounded-lg bg-primary-blue-3">
                    {yacht.infoBoxes.map((box, index) => (
                      <div key={index} className="flex items-center">
                    
                        <div className="hidden sm:block h-12" />
                        <div className="p-1 text-center flex-1">
                          <div className="text-xs text-[#f2f2f2]">{box.label}</div>
                          <div className="font-bold text-xs md:text-sm text-white">{box.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  </div>
                <div className="">
                  {/* Info Boxes */}
                  {/* Inclusions & Add-ons */}
                  <div className="hidden grid-cols-2 gap-4 mt-8 mb-4">
                    <div>
                      <p className="font-bold text-gray-300">Inclusions:</p>
                      <ul className="text-sm text-gray-300 list-disc ml-6 mt-2 space-y-1">
                        {yacht.inclusions.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-gray-300">Add-ons:</p>
                      <ul className="text-sm text-gray-300 list-disc ml-6 mt-2 space-y-1">
                        {yacht.addons.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* CTA Button */}
                  <div className="mt-10">
                  {!yacht.isSold ? (
                  <div className='grid grid-cols-1 s:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-2'>
                  <Link href="https://wa.link/pgrzh7" target="_blank" >
                  <button className="w-full red-solid-button">WhatsApp Us</button>
                  </Link>
                  <button onClick={handleQuote} className="w-full red-solid-button">
                  Get a Quote
                  </button></div>
                  ) : (
                  <div className='grid grid-cols-1 s:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-2'>
                  <button className="w-full red-solid-button cursor-not-allowed opacity-30">
                  WhatsApp Us
                  </button>
                  <button className="w-full red-solid-button cursor-not-allowed opacity-30">
                  Get a Quote
                  </button>
                  </div>
                  )}
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Carousel Section */}
      <div className="bg-[#010e1c] pb-12">
      <div className="container mx-auto ">
        <h4 className="uppercase text-2xl md:text-3xl font-bold text-center text-white mb-8">
          F1 Yacht Package Add-Ons
        </h4>
        <div ref={emblaRef2} className="overflow-hidden relative">
          <div className="flex">
            {slidestwo.map((item, index) => (
              <div
                key={index}
                className="
                  flex-[0_0_100%]
                  sm:flex-[0_0_50%]
                  md:flex-[0_0_33%]
                  lg:flex-[0_0_25%]
                  px-2
                "
              >
                <div className="flex flex-col rounded-xl overflow-hidden">
                  <img src={item.src} className="w-full" alt={item.text} />
                  <p className="font-bold text-sm bg-red-950 text-white text-center p-7 h-20 flex items-center justify-center">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons (Arrows) */}
          <button
            aria-label="Previous Slide"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-[#1a1a1a] text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors z-10"
            onClick={scrollPrev2}
          >
            <IoIosArrowBack size={30} />
          </button>
          <button
            aria-label="Next Slide"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-[#1a1a1a] text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors z-10"
            onClick={scrollNext2}
          >
            <IoIosArrowForward size={30} />
          </button>
        </div>
      </div>
      </div>
      <section className="w-full bg-[#010e1c]">
         <div className="md:block hidden">
          <div className="flex items-center justify-center w-full xl:px-36 lg:px-20 py-20 ">
            <hr className="flex-grow border-red-700" />
            <span className="font-primary px-4 text-2xl lg:text-3xl font-semibold  text-red-700">
              TRACKSIDE YACHT HOSPITALITY INCLUSIONS
            </span>
            <hr className="flex-grow border-red-700" />
          </div>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center py-5">
        <div className="flex flex-col items-center justify-center">
          <h2 className="block md:hidden text-red-700 text-center font-bold text-2xl xl:text-3xl py-7">
            Trackside Yacht Hospitality Inclusions
          </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-0">
            <div>
              <div className="flex flex-col items-center justify-center text-center gap-y-4 lg:px-10">
                <img alt="" className="w-16" src="/images/four-day-yacht-rental.png"/>
                <h3 className="text-gray-300 text-base lg:text-lg text-center">4 Days Yacht Rental</h3>
                <p className="text-gray-300 text-center text-md sm:text-sm xl:text-md pb-10">
                    Our all-inclusive package offers 4 days of unparalleled yacht rental, granting you the ultimate vantage point to witness the adrenaline-fueled action of the Formula 1 race.
                </p>
              </div>
              </div>
            <div>
              <div className="flex flex-col items-center justify-center text-center gap-y-4 lg:px-10">
                <img alt="" className="w-16" src="/images/marina-view.png"/>
                <h3 className="text-gray-300 text-base lg:text-lg text-center">Overnight Stay & Marina Views</h3>
                <p className="text-gray-300 text-center text-md sm:text-sm xl:text-md pb-10">
                    During your overnight stay on board, you'll have the unique opportunity to relax and live the high life. Unwind in luxurious cabins and spacious lounges, experiencing the utmost comfort and tranquility at Yas Marina.
                </p>
              </div>
              </div>
              <div>
              <div className="flex flex-col items-center justify-center text-center gap-y-4 lg:px-10">
                <img alt="" className="w-16" src="/images/food-and-drinks.png"/>        
                <h3 className="text-gray-300 text-base lg:text-lg text-center">Canapes & Drinks</h3>
                <p className="text-gray-300 text-center text-md sm:text-sm xl:text-md lg:pb-10">
                    Indulge in a delectable selection of canapés ensuring a delightful culinary experience throughout race weekend
                Savor the taste of house drinks adding a touch of sophistication to your onboard celebrations.
                </p>
              </div>
              </div>
              <div>
              <div className="flex flex-col items-center justify-center text-center gap-y-4 lg:px-10">
                <img alt="" className="w-16" src="/images/marina-pass.png"/>        
                <h3 className="text-gray-300 text-base lg:text-lg text-center">Marina Passes</h3>
                <p className="text-gray-300 text-center text-md sm:text-sm xl:text-md lg:pb-10">
                  Get marina passes granting you access to prime viewing spots and an up-close look at the thrilling race action on Yas Marina circuit.</p>
              </div>
              </div>
              </div>
              </div>
        </div>
      {/* Disclaimer & Contact */}
      <div className="text-center p-4 text-sm text-gray-300">
        <p className="">
          Formula 1 Hospitality Packages Disclaimer
        </p>
        <p>
          Inclusions, timings, places, etc. provided by the Formula 1 hospitality packages are subject to change without prior notice.
        </p>
        <p className="mt-2 text-xl">
          For More Information and Viewing Feel Free To Contact:<br/>{" "}
          <span className="">
          <strong>info@centauruscharter.com | +971 50 201 4225</strong>
          </span>
        </p>
      </div>

    <section className="container mx-auto py-12">
      <h4 className="text-center text-white text-xl md:text-2xl font-bold mb-4">
            ABU DHABI GRAND PRIX 2025
          </h4>
          <p className="text-center text-white mb-4 leading-relaxed text-sm">
           <strong> Formula 1  </strong>is heading back to Abu Dhabi this December. Catch the
            glamour, action and excitement!
          </p>
      <div className="w-full flex flex-col lg:flex-row gap-4 items-center justify-center">
            
        <div className="w-full">
          <Image
            src="/images/yachts-formula-one.webp"
            alt="Yachts at Marina"
            width={900}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        <div className=" w-full text-white  ">
  
          <p className="mb-4 leading-relaxed text-sm">
            Step away from the everyday and dive into the thrill of the<strong> Abu Dhabi Grand Prix 2025 </strong>
            . Watch the electrifying <strong>Formula 1 </strong>action unfold at <strong>Yas Marina Circuit</strong> with Centaurus F1 VIP Yacht Hospitality. Our yachts are
            — all from the luxurious comfort of your own <strong>Luxury private yacht</strong>. Entertain your friends, family, or colleagues on board as you cheer for your favorite F1 drivers, surrounded by the vibrant energy of race weekend. With Centaurus
          <strong> F1 VIP Yacht Hospitality</strong>, you’ll enjoy <strong>unobstructed trackside views</strong>, exceptional service, and a fully immersive experience. Our fleet of<strong> spacious yachts</strong>, accommodating between <strong>28 to 100 guests</strong>, offer <strong>elegant interiors</strong>, open decks, and 
          <strong> premium amenities</strong>. Relax in stylish lounges, sip your favorite drinks, and soak in <strong>panoramic views </strong>of the marina and race atmosphere in true <strong>luxury</strong>.  
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-4 items-center justify-center">
  
        <div className="w-full text-white  ">
          <p className="leading-relaxed text-sm">
            Impress your clients and elevate your business connections with Centaurus corporate hospitality during the <strong>Abu Dhabi F1 weekend</strong>
            . Stay aboard for <strong>4 nights</strong>, complete with <strong>delicious breakfast spreads</strong> and a <strong>premium drinks package</strong>. More than just a race, this is a
          <strong>one-of-a-kind experience</strong> for those who appreciate <strong>privacy, elegance, </strong>and <strong>high-end living</strong>. Feel the pulse of 
          <strong>Formula 1 </strong>under the Abu Dhabi sun, surrounded by <strong>non-stop energy, exclusive yacht parties</strong>, and pure <strong>luxury</strong>
          . Whether for <strong>business or pleasure</strong>, our <strong>F1 yacht charters</strong> offer the perfect escape — <strong>reserve your private yacht</strong> now and create <strong>memories that will last a lifetime.</strong>          </p>
        </div>
        
        <div className="w-full">
          <Image
            src="/images/race-formula-one.webp"
            alt="Yachts at Marina"
            width={900}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
    </section>
    
    </section>
    <Modal2
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        idName="offers_id"
        idValue="49"
      />
    </>
  )
}

export default Page
