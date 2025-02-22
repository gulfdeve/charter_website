"use client";
import React from "react";
import Videosharedtours from "@/app/components/Video-sharedtours";
import Nycard from "@/app/components/Nycard";
import {
  FaClock,
  FaChild,
  FaMapMarkerAlt,
  FaCameraRetro,
  FaWhatsapp,
} from "react-icons/fa";
import { IoMan } from "react-icons/io5";
import { MdOutlineLocalDining } from "react-icons/md";

const toursData = [
  {
    image: "/middaytours.jpg",
    title: "MIDDAY TOURS",
    cruisingTime: "11:00 AM - 2:00 PM",
    adultPrice: "AED 299",
    liveBBQ:
      "Chicken & Beef Skewers, Sliders, | Hotdogs, Veggie Patty, Vegetable Skewers, Muffins, Fruits Water, Tea, Coffee, Soft Drinks & Juices",
    cruisingRoute: "Dubai Marina, JBR, Atlantis the Palm and Burj Al Arab",
    departurePoint: "Dubai Marine",
  },
  {
    image: "/middaytours.jpg",
    title: "MIDDAY TOURS",
    cruisingTime: "11:00 AM - 2:00 PM",
    adultPrice: "AED 299",
    liveBBQ:
      "Chicken & Beef Skewers, Sliders, | Hotdogs, Veggie Patty, Vegetable Skewers, Muffins, Fruits Water, Tea, Coffee, Soft Drinks & Juices",
    cruisingRoute: "Dubai Marina, JBR, Atlantis the Palm and Burj Al Arab",
    departurePoint: "Dubai Marine",
  },
  {
    image: "/middaytours.jpg",
    title: "MIDDAY TOURS",
    cruisingTime: "11:00 AM - 2:00 PM",
    adultPrice: "AED 299",
    liveBBQ:
      "Chicken & Beef Skewers, Sliders, | Hotdogs, Veggie Patty, Vegetable Skewers, Muffins, Fruits Water, Tea, Coffee, Soft Drinks & Juices",
    cruisingRoute: "Dubai Marina, JBR, Atlantis the Palm and Burj Al Arab",
    departurePoint: "Dubai Marine",
  },
  // Add more tour objects here
];

const Page = () => {
  return (
    <>
      <Videosharedtours />
      <div className="bg-white h-full w-full">
        <div className="flex flex-col items-center justify-center pb-10 pt-20 container mx-auto ">
          <h1 className="font-Montserrat text-primary-blue text-center font-bold text-xl lg:text-3xl pb-4">
            SHARED YACHT TOURS IN DUBAI
          </h1>
          <p className="font-Montserrat text-primary-blue text-sm text-center">
            Luxury Experience that's Affordable: Set Sail and Experience Dubai,
            From Morning till Night
          </p>
        </div>
        <div>
          <div className="flex items-center justify-center w-full my-6">
            <hr className="flex-grow border-primary-yellow-dark" />
            <span className="px-4 text-2xl 2xl:text-2xl font-semibold font-Montserrat text-primary-blue">
              SEASONAL TOURS
            </span>
            <hr className="flex-grow border-primary-yellow-dark" />
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 py-10 gap-5 px-3 xl:px-48 container mx-auto">
            {toursData.map((tour, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 p-5 space-y-3"
              >
                <img src={tour.image} alt={tour.title} className="rounded-lg" />
                <h1 className="text-primary-blue font-Montserrat font-bold text-2xl py-2">
                  {tour.title}
                </h1>
                <div className="flex flex-row gap-2 items-start">
                  <FaClock size={35} className="text-primary-blue" />
                  <h1 className="font-Montserrat text-primary-blue">
                    <span className="font-bold">Cruising Time:</span>{" "}
                    {tour.cruisingTime}
                  </h1>
                </div>
                <div className="flex flex-row gap-2 items-start">
                  <IoMan size={35} className="text-primary-blue " />
                  <h1 className="font-Montserrat text-primary-blue">
                    <span className="font-bold">Adult (12+):</span>{" "}
                    {tour.adultPrice}
                  </h1>
                </div>
                <div className="flex flex-row gap-2 items-start">
                  <FaChild className="text-primary-blue md:text-[6rem] text-[5rem] pl-1" />
                  <h1 className="font-Montserrat text-primary-blue text-sm">
                    <span className="font-bold">Live BBQ:</span> {tour.liveBBQ}
                  </h1>
                </div>
                <div className="flex flex-row gap-2 items-start">
                  <MdOutlineLocalDining className="text-primary-blue md:text-[4rem] text-[3rem]" />
                  <h1 className="font-Montserrat text-primary-blue">
                    <span className="font-bold">Cruising Route:</span>{" "}
                    {tour.cruisingRoute}
                  </h1>
                </div>
                <div className="flex flex-row gap-2 items-start">
                  <FaCameraRetro size={35} className="text-primary-blue" />
                  <h1 className="font-Montserrat text-primary-blue">
                    <span className="font-bold">Departure Point:</span>{" "}
                    {tour.departurePoint}
                  </h1>
                </div>

                <button className="yellow-solid-button w-full">Book Now</button>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center w-full my-6">
          <hr className="flex-grow border-primary-yellow-dark" />
          <span className="px-4 text-2xl 2xl:text-3xl font-semibold font-Montserrat text-primary-blue">
            HIGHLIGHTS
          </span>
          <hr className="flex-grow border-primary-yellow-dark" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4  gap-5 px-4  py-10 xl:px-52 container mx-auto">
          <div>
            <img src="/BBQ.webp" />
            <h1 className="bg-primary-blue-2 text-primary-yellow text-center font-Montserrat text-xl font-bold p-2 rounded-b-lg md:px-10 lg:px-0 ">
              LIVE BBQ
            </h1>
          </div>
          <div>
            <img src="/Picturemoments.webp" />
            <h1 className="bg-primary-blue-2 text-primary-yellow text-center font-Montserrat text-xl font-bold p-2 rounded-b-lg ">
              PICTURE MOMENTS
            </h1>
          </div>
          <div>
            <img src="/Amazing-View.webp" />
            <h1 className="bg-primary-blue-2 text-primary-yellow text-center font-Montserrat text-xl font-bold p-2 rounded-b-lg ">
              AMAZING VIEW
            </h1>
          </div>
          <div>
            <img src="/Great-Food.webp" />
            <h1 className="bg-primary-blue-2 text-primary-yellow text-center font-Montserrat text-xl font-bold p-2 rounded-b-lg md:px-10 lg:px-0 ">
              GREAT FOOD
            </h1>
          </div>
        </div>

        <div className="flex flex-col item-center justify-center py-10 px-5">
          <h1 className="font-Montserrat text-primary-blue-2 font-bold text-center">
            TERMS & CONDITION
          </h1>
          <ul className="list-disc md:list-none text-center font-Montserrat text-primary-blue text-sm pl-4 pt-5 space-y-2">
            <li>
              Rates do not include alcohol. An alcohol menu is available for
              purchase on board
            </li>
            <li>Yacht allocation will be confirmed upon check in</li>
            <li>
              Cruise routes are subject to change due to weather and wind
              conditions.
            </li>
            <li>
              Cruising times are subject to adjustments based on sunset timings.
            </li>
            <li>Rates cannot be combined with other offers.</li>
            <li>Guests under 18 years old must be accompanied by an adult.</li>
          </ul>
        </div>
        <div className="flex flex-col  md:flex-row-reverse items-center justify-center">
          <div>
            <div className="">
              <img
                src="/royal.webp"
                className="xl:w-[210rem] sm:w-[170rem]  md:h-[670px] xl:h-[600px] lg:h-[560px]"
              />
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-start sm:justify-start justify-center bg-primary-blue-2 px-5 xl:p-20 xl:py-12 py-5 md:h-[670px] xl:h-[600px] lg:h-[560px]">
            <p className="font-Montserrat text-white text-center sm:text-left  text-md  sm:text-sm xl:text-md py-10">
              Experience Dubai's coastline in an entirely new light with our
              exclusive shared yacht tours. Uniting the thrill of luxury
              yachting with the ease of shared experiences, we offer you the
              chance to enjoy the opulence of Dubai's waters without the
              extravagant cost of chartering an entire yacht. Revel in the
              stunning vistas, relish in the flavors of live BBQ, and savor
              complimentary refreshments - all while forging unforgettable
              memories with fellow adventurers.
            </p>
            <h1 className="font-Montserrat text-white text-center font-bold text-2xl xl:text-3xl ">
              Affordable Luxury
            </h1>

            <p className="font-Montserrat text-white text-center sm:text-left  text-md  sm:text-sm xl:text-md pb-10">
              Elevate your Dubai escapade without emptying your wallet. Our
              shared yacht tours are meticulously crafted to provide a taste of
              the high life at a fraction of the price. Share the journey, share
              the splendor, and share the savings as you immerse yourself in the
              lap of affordable luxury.
            </p>
            <h1 className="font-Montserrat text-white text-center font-bold text-2xl xl:text-3xl ">
              Unmatched Amenities
            </h1>

            <p className="font-Montserrat text-white text-center sm:text-left  text-md  sm:text-sm xl:text-md pb-10">
              Our commitment to your enjoyment knows no bounds. Indulge in the
              expertise of our onboard culinary artists as they create a live
              BBQ spectacle right before your eyes. Additionally, delight in our
              selection of complimentary delicacies and beverages, ensuring that
              your voyage is not just luxurious, but delicious too.
            </p>
          </div>
        </div>
        <div className="py-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row rounded-lg items-center  gap-5 justify-center  md:justify-between bg-transparent md:bg-primary-blue p-5">
            <p className="text-white font-Montserrat font-bold bg-primary-blue text-xl rounded">
              Enjoy a luxurious shared yacht adventure!
            </p>
            <div className=" flex md:flex-row md:gap-10">
              <button className="blue-lined-button">
                <FaWhatsapp size={20} />
                WHATSAPP US
              </button>
              <button className="blue-lined-button">
                GET A QUOTE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
