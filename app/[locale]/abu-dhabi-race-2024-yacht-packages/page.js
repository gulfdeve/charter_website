'use client'
import React, { useEffect, useRef, useState } from 'react'
import EmblaCarousel from 'embla-carousel'
import Videof1 from "@/app/components/Videof1"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import Image from 'next/image'
import { FaShip, FaUsers, FaBed, FaIdCard } from "react-icons/fa"
import Link from 'next/link'

const yachtData = [
  {
    id: 1,
    title: "118 Ft Yacht - Poseidon",
    imageSrc: "/Poseidon--F1.jpg",
    imageAlt: "118 Ft Yacht - Poseidon",
    infoBoxes: [
      { label: "Brand", value: "MAJESTY", icon: FaShip },
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
    id: 2,
    title: "85 Ft Yacht - Kronos",
    imageSrc: "/Majesty-88-LR (1).webp",
    imageAlt: "85 Ft Yacht - Kronos",
    infoBoxes: [
      { label: "Brand", value: "DURETTI", icon: FaShip },
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
    id: 3,
    title: "61 Ft Yacht - Silver Creek",
    imageSrc: "/Silver-Creek-F1.jpg",
    imageAlt: "85 Ft Yacht - Kronos",
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
    id: 4,
    title: "58 Ft Yacht - Etosha",
    imageSrc: "/Etosha-F1.jpg",
    imageAlt: "58 Ft Yacht - Etosha",
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
    id: 5,
    title: "77 Ft Yacht - Dionysos",
    imageSrc: "/Dionysos-F1 (1).jpg",
    imageAlt: "56 Ft Yacht - Lagoona",
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
    id: 6,
    title: "56 Ft Yacht - Lagoona",
    imageSrc: "/Lagoona--F1.jpg",
    imageAlt: "56 Ft Yacht - Lagoona",
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
]

const Page = () => {
  const emblaRef = useRef(null)
  const [emblaApi, setEmblaApi] = useState(null)

  useEffect(() => {
    if (emblaRef.current) {
      const embla = EmblaCarousel(emblaRef.current, {
        loop: false,
        align: 'start',
      })
      setEmblaApi(embla)
    }
  }, [])

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  const slides = [
    { src: "/4-DAY FREE-FLOWING HOPS, WINE & SPIRITS.webp", text: "4-DAY FREE-FLOWING HOPS, WINE & SPIRITS" },
    { src: "/IN-HOUSE MIXOLOGIST, PREMIUM DRINKS.webp", text: "IN-HOUSE MIXOLOGIST, PREMIUM DRINKS" },
    { src: "/LIVE DJ ENTERTAINMENT ONBOARD.webp", text: "LIVE DJ ENTERTAINMENT ONBOARD" },
    { src: "/SPECTACULAR F1 TRACKSIDE VIEWS.webp", text: "SPECTACULAR F1 TRACKSIDE VIEWS" },
    { src: "/PITLANE WALK 1 TIME ACCESS.webp", text: "PITLANE WALK 1 TIME ACCESS" },
    { src: "/VIEW POST-RACE FIREWORKS CELEBRATIONS.webp", text: "VIEW POST-RACE FIREWORKS CELEBRATIONS" },
    { src: "/ACCESS TO AFTER-RACE CONCERTS.webp", text: "ACCESS TO AFTER-RACE CONCERTS" },
    { src: "/DAILY ACCESS TO F1 OASIS AREA.webp", text: "DAILY ACCESS TO F1 OASIS AREA" },
    { src: "/PANORAMIC VIEWS OF YAS MARINA.webp", text: "PANORAMIC VIEWS OF YAS MARINA" },
    { src: "/4-DAY VIP YACHT PARTY ACCESS.webp", text: "4-DAY VIP YACHT PARTY ACCESS" },
    { src: "/4-DAY GOURMET FOOD CATERINGwebp", text: "4-DAY GOURMET FOOD CATERING" },
  ]

  return (
    <>
      {/* Video Section */}
      <div>
        <Videof1 />
      </div>

      {/* Heading Section */}
      <section className="flex flex-col items-center py-20 bg-white">
        <h1 className="text-5xl font-bold text-center text-primary-blue">
          F1 ABU DHABI GP 2025
        </h1>
        <h3 className="font-medium text-center text-primary-blue my-7">
          LUXURY YACHT CHARTER PACKAGES
        </h3>
        <h6 className=" text-center font-bold text-primary-blue mt-2 ">
          EVENT DATES: 04 - 07 DECEMBER 2025 | YAS MARINA, ABU DHABI
        </h6>

        {/* Two-column (Image + Text) Section */}
        <div className="container mx-auto py-10">
          <div className="flex flex-col lg:flex-row items-center justify-center bg-white rounded-[4rem] overflow-hidden lg:mx-20">
            {/* Left: Image */}
            <div className="rounded rounded-l-xl">
              <img
                src="/F1TRACKSIDE.webp"
                alt="F1 Trackside"
                className="xl:w-[40rem] sm:w-[170rem] lg:w-[160rem] md:h-[543px] xl:h-[570px] lg:h-[504px]"
              />
            </div>

            {/* Right: Text & Content */}
            <div className="flex flex-col items-center justify-center bg-primary-blue-2 px-5 py-5 xl:w-[40rem] lg:w-[160rem] md:h-[541px] xl:h-[570px] lg:h-[504px] p-5">
              <h1 className="text-primary-yellow uppercase  text-4xl font-bold text-center pb-1">
                FORMULA 1 YACHT PARTY
              </h1>
              <h1 className="text-white  font-bold text-center pb-5">
                HOSPITALITY PACKAGE
              </h1>
              <p className="text-white text-center text-sm md:text-lg pb-8 px-2 md:px-2">
                Join Centaurus Charter for an exclusive 4-day Formula 1 Yacht Party experience.
                Enjoy a luxurious setting, breathtaking views, and an unforgettable race weekend atmosphere.
                Perfect for corporate events or private celebrations, this hospitality package offers the
                ultimate way to enjoy the excitement of Formula 1.
              </p>
              <button className="bg-white text-primary-blue text-2xl font-bold px-7 py-4 rounded-xl shadow-md hover:bg-gray-200 transition-colors">
                INQUIRE NOW
              </button>
              <p className="mt-8 text-sm text-gray-200 text-center">
                Limited tickets are available. T&Cs apply.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <div className="container mx-auto ">
        <div ref={emblaRef} className="overflow-hidden relative">
          <div className="flex">
            {slides.map((item, index) => (
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
                  <h5 className="bg-primary-blue-2 text-primary-yellow text-center p-7 h-20 flex items-center justify-center">
                    {item.text}
                  </h5>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons (Arrows) */}
          <button
            aria-label="Previous Slide"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-primary-blue text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors z-10"
            onClick={scrollPrev}
          >
            <IoIosArrowBack size={30} />
          </button>
          <button
            aria-label="Next Slide"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-primary-blue text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors z-10"
            onClick={scrollNext}
          >
            <IoIosArrowForward size={30} />
          </button>
        </div>
      </div>

      {/* Yacht Cards Section */}
      <section className="bg-white py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8">
          F1 LUXURY YACHT CHARTER PACKAGES
        </h2>
        <div className="container mx-auto  ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 px-20">
            {yachtData.map((yacht) => (
              <div key={yacht.id} className="bg-white rounded-2xl shadow-custom overflow-hidden ">
                {/* Yacht Image */}
                <Image
                  src={yacht.imageSrc}
                  alt={yacht.imageAlt}
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="p-6">
                  <h2 className=" font-bold text-black py-2">{yacht.title}</h2>
                  {/* Info Boxes */}
                  <div className="grid grid-cols-2 gap-2 md:gap-4 text-blue-900">
                    {yacht.infoBoxes.map((box, index) => (
                      <div key={index} className="border-2 border-primary-blue rounded-xl flex items-center">
                        <div className="p-1 sm:p-3 flex items-center justify-center">
                          <box.icon size={30} />
                        </div>
                        <div className="hidden sm:block h-12 border-r border-primary-blue" />
                        <div className="p-1 text-center flex-1">
                          <div className="font-bold text-lg text-primary-blue">{box.value}</div>
                          <div className="text-xs text-primary-blue uppercase">{box.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <hr className="my-5 border-primary-blue " />
                  {/* Inclusions & Add-ons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-3">
                    <div>
                      <h4 className="font-bold text-primary-blue">INCLUSIONS:</h4>
                      <ul className="text-md text-primary-blue list-disc ml-10 mt-2 space-y-1">
                        {yacht.inclusions.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary-blue">ADD-ONS:</h4>
                      <ul className="text-md text-primary-blue list-disc ml-10 mt-2 space-y-1">
                        {yacht.addons.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* CTA Button */}
                  <Link href="https://wa.link/5ti3ye" target="_blank" >
                  <button className="w-full blue-solid-button">{yacht.cta}</button>
                </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full bg-white">
      {/* Disclaimer & Contact */}
      <div className="text-center p-4 text-sm text-gray-700">
        <p className="">
          Formula 1 Hospitality Packages Disclaimer
        </p>
        <p>
          Inclusions, timings, places, etc. provided by the Formula 1 hospitality packages are subject to change without prior notice.
        </p>
        <p className="mt-2 text-xl">
          For More Information and Viewing Feel Free To Contact:<br/>{" "}
          <span className="">
          <strong> info@centauruscharter.com | +971 4325 1883 | <br className='md:hidden'/>+971 50 240 1269</strong>
          </span>
        </p>
      </div>

    <section className="w-full">
      {/* Main Content: Image on Left, Gold BG + Text on Right */}
      <div className="w-full flex flex-col md:flex-row items-stretch">
        {/* Left Column: Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/f1-footer-2.jpg"
            alt="Yachts at Marina"
            width={900}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Column: Gold BG + Text */}
        <div className=" container w-full md:w-1/2 bg-primary-yellow py-3 md:py-7 md:px-7 text-primary-blue flex flex-col justify-center  ">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            ABU DHABI GRAND PRIX 2025
          </h2>
          <p className="mb-4 leading-relaxed text-xs">
           <strong> Formula 1  </strong>is heading back to Abu Dhabi this December. Catch the
            glamour, action and excitement!
          </p>
          <p className="mb-4 leading-relaxed text-xs">
            Take a break from your busy life and grab access to<strong> Abu Dhabi GP</strong>
            2025. Watch this thrilling F1 race at <strong>Yas Marina Circuit </strong>from the
            comfort of a supreme yacht. Entertain yourself, your loved ones or
            your colleagues on this private yacht charter while cheering your
            fav Formula one riders. Get most out of the experience on the <strong>race
            weekend</strong> with Centaurus F1 VIP Yacht Hospitality. Our yachts are
            docked close to the racing track to watch the uninterrupted views
            and are equipped with unmatched services. Our spacious yacht can
            accommodate from 28 to 100 guests, so appreciate the buzz around you
            with your loved ones. Enter into the exciting world of luxury at Yas
            Marina with beautiful sea view, aesthetically pleasing yacht
            interiors packed with all amenities, spacious guest rooms for
            accommodation and comfy lounges to socialize while toasting your
            drinks.
          </p>
          <p className="leading-relaxed text-xs">
            Centaurus corporate hospitality will surely impress your potential
            partners and strengthen your business relationships. Enjoy 4 nights
            stay in our yacht with yummy breakfast delicacies and selected
            drinks package. Besides these breathtaking moments, <strong>F1 Yacht Charter</strong>
            is an ideal option for people who love luxury and privacy. Explore
            the greatest race in the sunshine of Abu Dhabi. This vibrant
            atmosphere, ever-happening yacht parties, and once-in-a-lifetime
            magical experience await you. Reserve your private yacht for Formula
            1 and have a good time ahead.
          </p>
        </div>
      </div>
    </section>
    <section className="w-full">
      {/* Main Content: Image on Left, Gold BG + Text on Right */}
      <div className="w-full flex flex-col md:flex-row items-stretch">
        {/* Left Column: Image */}
       

        {/* Right Column: Gold BG + Text */}
        <div className="container w-full md:w-1/2 bg-primary-blue py-3 md:py-7 md:px-7 text-white flex flex-col justify-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
          TRACKSIDE YACHT HOSPITALITY INCLUSIONS
          </h2>
          <p className="mb-4 leading-relaxed text-xs">
         <strong> 4 Days Yacht Rental</strong><br/>
          Our all-inclusive package offers 4 days of unparalleled yacht rental, granting you the ultimate vantage point to witness the adrenaline-fueled action of the Formula 1 race.
          </p>
          <p className="mb-4 leading-relaxed text-xs">
         <strong> Overnight Stay & Marina Views</strong><br/>
During your overnight stay on board, you'll have the unique opportunity to relax and live the high life. Unwind in luxurious cabins and spacious lounges, experiencing the utmost comfort and tranquility at Yas Marina.

          </p>
          <p className="leading-relaxed text-xs">
          <strong>Canapes</strong><br/>
Indulge in a delectable selection of canapés ensuring a delightful culinary experience throughout race weekend<br/>
<strong>Drinks </strong><br/>
Savor the taste of house drinks adding a touch of sophistication to your onboard celebrations.<br/>
<strong>Marina Passes</strong><br/>
Get marina passes granting you access to prime viewing spots and an up-close look at the thrilling race action on Yas Marina circuit.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/f1-footer-1.jpg"
            alt="Yachts at Marina"
            width={900}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
    </section>
    </>
  )
}

export default Page
