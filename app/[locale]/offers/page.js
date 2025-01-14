"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useData } from '@/app/context/DataContext';
import { useLanguage } from "@/app/context/LanguageContext";
import YachtCarousal from "@/app/components/YachtCarousel"
import Link from "next/link";

/*const offers = [
  {
    id: 1,
    image: "./YachtOffer1.webp",
    title: "UAE RESIDENT YACHT OFFERS",
    note: "*SUBJECT TO AVAILIBILITY",
    validity: "31 January 2025",
  },
  {
    id: 2,
    image: "./YachtOffer2.webp",
    title: "EMIRATES STAFF DISCOUNT",
    note: "*SUBJECT TO AVAILIBILITY",
    validity: "31 January 2025",
  },
  {
    id: 3,
    image: "./YachtOffer3.webp",
    title: "FAZAA DISCOUNT",
    note: "*SUBJECT TO AVAILIBILITY",
    validity: "31 January 2025",
  },
  {
    id: 4,
    image: "./YachtOffer4.webp",
    title: "BUSINESS COUNCIL MEMBERS OFFER",
    note: "*SUBJECT TO AVAILIBILITY",
    validity: "31 January 2025",
  },
];*/

const page = () => {
  const { data, loading, error } = useData();
  const { language, changeLanguage } = useLanguage();

  return (
    <>
      <div className="bg-white h-full w-full container mx-auto">
        <div className="flex flex-col items-center justify-center py-10 ">
          <h1 className="font-Montserrat text-[#0D2343] text-center font-bold text-4xl pb-4">
            YACHT OFFERS AND DEALS IN DUBAI
          </h1>
        </div>
        <div className="grid grid-col-1 md:grid-cols-2 md:px-4 xl:px-52 gap-7 pb-16">
          {data?.offers?.map((offer) => (
            <div
              key={offer.id}
              className="flex flex-col justify-start lg:justify-between rounded-md bg-white shadow-xl"
            >
              <Link href={`/${language}/offers/${offer.slug}`}>
			  <img
                src={`https://www.centauruscharter.com/product/images/${offer.image}`}
                alt={offer.translations[language].title}
                className="rounded-t-md w-full object-cover"
              />
			  </Link>
              <div className="flex flex-col  justify-start px-5 lg:px-5">
			  <Link href={`/${language}/offers/${offer.slug}`}><h1 className="text-[#232629] font-Montserrat text-2xl font-bold pt-4">
                  {offer.translations[language].title}
                </h1>
				</Link>
                <p className="text-[#232629] font-Montserrat font-bold text-xs pt-2 pb-16">
                  {offer.note}
                </p>
                <div className="bg-[#232629] w-full h-[0.05rem]"></div>
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-col items-start justify-start py-10">
                    <h1 className="text-[#232629] font-Montserrat font-bold text-sm xl:text-lg">
                      Validity Until:
                      <br />
                      {offer.validity}
                    </h1>
                  </div>
                  {/* Buttons Section */}
                  <div className="flex xl:flex-row flex-col items-center justify-end gap-3 ">
                    <button className="flex flex-row items-center justify-center py-2 px-4  rounded-md bg-[#0d2343] text-[#e1ae48] font-Montserrat font-bold text-[10px] md:text-xs xl:text-lg">
                      <FaWhatsapp className="xs:text-xl text-lg  mr-1" />
                      WHATSAPP
                    </button>
                    <Link href={`/${language}/offers/${offer.slug}`} className="flex flex-row items-center justify-center py-2 px-6 md:py-2 md:px-4  rounded-md bg-[#0d2343] text-[#e1ae48] font-Montserrat font-bold text-[10px] md:text-sm xl:text-lg">
                      KNOW MORE
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
      <div className="max-w-7xl mx-auto px-3 py-5 ">
          <p className="font-Montserrat text-gray-500 text-md ">
            Dubai is a popular destination for yachting. The Arabian coastline
            is lined with beautiful azure beaches and top attractions, which are
            perfect for leisure trips and intimate celebrations. Centaurus
            Charter has a versatile range of yachts and boats in Dubai that are
            suitable for any event. Our captain & crew has years of experience,
            can customize your trip as per your choices and is always eager to
            help.<br/><br/> Experience yachting life with end-to-end personalized
            services, stunning views of the surroundings with plenty of
            watersports for your next excursion.
          </p>
        </div>
        <YachtCarousal/>
    </>
  );
};

export default page;
