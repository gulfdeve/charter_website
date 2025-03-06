"use client";
import React from "react";
import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useData } from "@/app/context/DataContext";
import { useLanguage } from "@/app/context/LanguageContext";
import YachtCarousal from "@/app/components/YachtCarousel";
// import Link from "next/link";
import { useRouter, usePathname, Link } from "@/app/i18n/routing";
// import Loading from "./loading";
import Image from "next/image";
const page = ({ params }) => {
  const { data, loading, error } = useData();
  const { language, changeLanguage } = useLanguage();

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <>
      <div className="max-w-7xl mx-auto mt-14 md:mt-0">
        <div className="flex flex-col items-center justify-center py-10 ">
          <h1 className=" text-primary-blue text-center font-bold text-4xl">
            YACHT OFFERS AND DEALS IN DUBAI
          </h1>
        </div>

        <div className="grid grid-col-1 md:grid-cols-2 md:px-4 gap-7 pb-16 container mx-auto">
          {data?.offers?.map((offer) => (
            <div
              key={offer.id}
              className="flex flex-col justify-start lg:justify-between rounded-md bg-white shadow-xl"
            >
              <Link href={`/offers/${offer.slug}`}>
                <Image 
                  src={`https://www.centauruscharter.com/product/images/${offer.image}`}
                  alt={offer.translations[language].title}
                  className="rounded-t-md w-full object-cover"
                  width={450}
                  height={0}
                  style={{ height: "auto" }}
                  priority={true}
                />
              </Link>
              <div className="flex flex-col  justify-start px-5 lg:px-5">
                <h2 className="text-[#232629]  text-2xl font-bold pt-4">
                  <Link href={`/offers/${offer.slug}`}>
                    {offer.translations[language].title}
                  </Link>
                </h2>
                <p className="text-[#232629]  font-bold text-xs pt-2 pb-16">
                  {offer.note}
                </p>
                <div className="bg-[#232629] w-full h-[0.05rem]"></div>
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-col items-start justify-start py-10">
                    <p className="text-[#232629]  font-bold text-sm xl:text-lg">
                      Validity Until:
                      <br />
                      {offer.validity}
                    </p>
                  </div>
                  {/* Buttons Section */}
                  <div className="flex xl:flex-row flex-col items-center justify-end gap-3 ">
                    <a href={`${offer.whatsapp_url}`} target="_blank" className="blue-solid-button flex items-center">
                      <FaWhatsapp className="xs:text-xl text-lg  mr-1" />
                      WHATSAPP
                    </a>
                    <Link
                      href={`/offers/${offer.slug}`}
                      className="blue-solid-button"
                    >
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
        <p className=" text-gray-500 text-md ">
          Dubai is a popular destination for yachting. The Arabian coastline is
          lined with beautiful azure beaches and top attractions, which are
          perfect for leisure trips and intimate celebrations. Centaurus Charter
          has a versatile range of yachts and boats in Dubai that are suitable
          for any event. Our captain & crew has years of experience, can
          customize your trip as per your choices and is always eager to help.
          <br />
          <br /> Experience yachting life with end-to-end personalized services,
          stunning views of the surroundings with plenty of watersports for your
          next excursion.
        </p>
      </div>
      <YachtCarousal />
    </>
  );
};

export default page;
