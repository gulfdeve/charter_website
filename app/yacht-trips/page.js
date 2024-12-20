
"use client"
import React from "react";
import { IoIosPricetag } from "react-icons/io";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import { use } from "react";
import { useEffect, useRef, useState } from "react";
const page = () => {
  const offers = [
    {
      id: 1,
      image: "./yacht-trips1.webp",
      title: "YACHT WEDDING TRIPS",
      note: "Your Perfect Yacht Wedding in Dubai",
      validity: "AED 5000",
    },
    {
      id: 2,
      image: "./yacht-trips2.webp",
      title: "NIGHT PARTY",
      note: "Get the vibrant night party on a luxurious yacht",
      validity: "AED 5000",
    },
    {
      id: 3,
      image: "./yacht-trips3.webp",
      title: "FISHING TRIP",
      note: "Have a deep sea fishing experience aboard a boat",
      validity: "AED 1725",
    },
    {
      id: 4,
      image: "./yacht-trips4.webp",
      title: "BIRTHDAY PARTY",
      note: "Invite your mates and throw a yacht B'Day party in style",
      validity: "AED 3120",
    },
    {
      id: 5,
      image: "./yacht-trips5.webp",
      title: "CORPORATE EVENTS",
      note: "Organize your business parties and events on a stylish yacht",
      validity: "AED 3120",
    },
    {
      id: 6,
      image: "./yacht-trips6.webp",
      title: "PRIVATE EVENTS",
      note: "Celebrate your occasions on the glittering waters",
      validity: "AED 3120",
    },
    {
      id: 7,
      image: "./yacht-trips7.webp",
      title: "YACHT FOR ANNIVERSARY & PROPOSAL",
      note: "Celebrate Love and Milestones",
      validity: "AED 3120",
    },
    {
      id: 8,
      image: "./yacht-trips8.webp",
      title: "SUNSET CRUISE",
      note: "Spend time cruising around the scenic places on a sunset yacht",
      validity: "AED 3120",
    },
  ];

  return (
    <div className="bg-white h-full w-full">
      <div className="flex flex-col items-center justify-center py-10 ">
        <h1 className="font-Montserrat text-[#0D2343] text-center font-bold text-4xl pb-4">
          YACHT TRIPS & EXPERIENCES IN DUBAI
        </h1>
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 md:px-4 xl:px-52 gap-7">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="flex flex-col justify-start lg:justify-between rounded-md bg-white px-2 shadow-xl"
          >
            {/* Image with object-cover for proper scaling */}
            <img
              src={offer.image}
              alt={offer.title}
              className="rounded-md h-[300px] w-full object-cover"
            />
            <div className="felx flex-col items-start justify-start px-5 ">
              {/* Title with Link */}
              <Link href={`/yacht-trips/${offer.title.toLowerCase().replace(/ /g, "-")}`}>
                <h1 className="text-[#232629] font-Montserrat text-2xl font-bold pt-6 hover:text-blue-600 transition-all duration-300 cursor-pointer">
                  {offer.title}
                </h1>
              </Link>
              <p className="text-[#848484] font-Montserrat  text-md pt-2 pb-9">
                {offer.note}
              </p>
              <div className="bg-[#232629] w-full h-[0.05rem]"></div>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-evenly gap-4 py-5">
                  <IoIosPricetag className="text-3xl lg:text-5xl" />
                  <div className="flex flex-col items-start justify-start ">
                    <h1 className="text-[#232629] font-Montserrat font-bold text-sm xl:text-base">
                      Starting
                      <br />
                      <span className="xl:text-xl">{offer.validity}</span>
                    </h1>
                  </div>
                </div>
                {/* Button with Link */}
                <Link href={`/yacht-trips/${offer.title.toLowerCase().replace(/ /g, "-")}`}>
                  <button className="flex flex-row items-center justify-center py-2 px-4 xl:px-5 xl:py-3 rounded-md bg-[#0d2343] text-[#e1ae48] font-Montserrat font-bold text-sm xl:text-lg">
                    KNOW MORE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
