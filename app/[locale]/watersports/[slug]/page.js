"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useData } from "@/app/context/DataContext";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import PageTitleHeading from "../../../components/PageTitleHeading";

const Page = () => {
  const { data, loading, error } = useData();
  const locale = useLocale();
  const { slug } = useParams(); // Gets the current slug from the URL

  const settingsItem = data?.settings?.[0];
  const {
    header_email,
    header_phone_number_url,
    header_whatsapp_url,
  } = settingsItem || {};

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Find the package matching the slug
  const packageItem = data?.packages?.find((pkg) => pkg.slug === slug);

  if (!packageItem) return <p>No package found for {slug}</p>;

  return (
    <div className="container mx-auto nav-space">
     
     
      <div className="flex flex-col lg:flex-row justify-between items-center gap-5 pt-6 md:mt-20 ">
        {/* First column (30%) */}
        <div className="flex items-start lg:w-7/12">
          <img
            src={`https://www.centauruscharter.com/product/images/${packageItem.image}`}
            alt={packageItem.translations[locale].title}
            className="w-full rounded-lg"
          />
        </div>

        {/* Second column (70%) */}
        
        <div className="lg:w-5/12">
        <PageTitleHeading title={packageItem.translations[locale].title} className="py-0 lg:pt-0 pb-3" />
        <h3 className="text-gray-500 text-center font-bold mb-5">
            {packageItem.translations[locale].preview_text}
            <br />
          </h3>
        <div className="text-center grid grid-cols-1  items-center gap-2  w-full overflow-hidden mb-7">
       
       <div className="grid grid-cols-1 sm:grid-cols-3 bg-primary-yellow-light rounded-lg text-primary-blue">
        {/* Ride Title */}
        <div className=" p-2 flex flex-col items-center">
          <span className="font-bold text-sm">Ride:</span>
          <span className="font-semibold text-sm  xl:text-sm">
            {packageItem.translations[locale].title}
          </span>
        </div>
        {/* Duration */}
        <div className="  p-2 flex flex-col items-center">
          <span className="font-bold text-sm">Duration:</span>
          <span className="font-semibold text-sm  xl:text-sm">
            1 Hour
          </span>
        </div>
        {/* Price */}
        <div className="bg-primary-yellow rounded-b-lg sm:rounded-l-none sm:rounded-r-lg  p-2 flex flex-col items-center">
          <span className="font-bold text-sm">Price:</span>
          <span className="font-semibold text-sm xl:text-sm">
            {packageItem.amount} AED
          </span>
        </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 bg-primary-yellow-light rounded-lg text-primary-blue">
        {/* Ride Title */}
        <div className=" p-2 flex flex-col items-center ">
          <span className="font-bold text-sm">Ride:</span>
          <span className="font-semibold text-sm  xl:text-sm">
            {packageItem.translations[locale].title}
          </span>
        </div>
        {/* Duration */}
        <div className="  p-2 flex flex-col items-center">
          <span className="font-bold text-sm">Duration:</span>
          <span className="font-semibold text-sm  xl:text-sm">
            30 mins
          </span>
        </div>
        {/* Price */}
        <div className="bg-primary-yellow rounded-b-lg sm:rounded-l-none sm:rounded-r-lg p-2 flex flex-col items-center">
          <span className="font-bold text-sm">Price:</span>
          <span className="font-semibold text-sm xl:text-sm">
            {packageItem.amount} AED
          </span>
        </div>
        </div>
        
      </div>

      <div className="flex flex-col xl:flex-row items-stretch xl:items-center text-center w-full justify-center">
        {/* WhatsApp Button */}
        <div className=" p-1 flex flex-col items-center">
          <a href={header_whatsapp_url || "#"} className="w-full blue-solid-button flex justify-center items-center gap-1 text-center">
            <FaWhatsapp size={20} />
            WHATSAPP US
          </a>
        </div>
        {/* Book Now Button */}
        <div className=" p-1 flex flex-col items-center xl:rounded-r-lg">
          <a href="https://fareharbor.com/embeds/book/centauruscharter/?full-items=yes" className="w-full blue-solid-button">BOOK NOW WITH {packageItem.translations[locale].title}</a>
        </div>
      </div>
        </div>
      </div>
      <div className="py-12">
          <p
            className="text-gray-500 text-md pb-6 md:pb-12 "
            dangerouslySetInnerHTML={{
              __html: packageItem.translations[locale].description || "",
            }}
          />

      </div>
    </div>
  );
};

export default Page;
