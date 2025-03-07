"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useData } from "@/app/context/DataContext";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";

const Page = () => {
  const { data, loading, error } = useData();
  const locale = useLocale();
  const { slug } = useParams(); // Gets the current slug from the URL

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Find the package matching the slug
  const packageItem = data?.packages?.find(
    (pkg) => pkg.slug === slug
  );

  if (!packageItem) return <p>No package found for {slug}</p>;

  return (
    <div className="mt-14 md:mt-0">
      <div className="flex flex-col items-center justify-center py-10">
        <h1 className="text-primary-blue text-center font-bold text-4xl">
          {packageItem.translations[locale].title}
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-6 lg:px-24 xl:px-44">
        <div className="flex items-start">
          <img
            src={`https://www.centauruscharter.com/product/images/${packageItem.image}`}
            alt={packageItem.translations[locale].title}
            className="w-[350rem] h-[23rem] rounded-lg"
          />
        </div>
        <div className="py-5">
          <h3 className="text-gray-500">
            {packageItem.translations[locale].preview_text}
            <br />
          </h3>
          <p className="text-gray-500">
            <br />
            This ride doesn't require any training. Our captains are fully
            qualified and will provide an introduction to you before taking off.
            All you need is to be confident in your swimming skills. We have been
            in business for over 8 years and offer competitive pricing for all
            our services, and you can choose the duration of the ride. Our
            professional team is always here to provide the best customer service
            and answer any questions that might come up during your booking
            process. Ready to Go? Explore the Arabian sea without limits.
            <br />
          </p>
          <p className="text-gray-500">
            <br />
            These remarkable rides are only available with yacht bookings.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-1 items-center gap-0 rounded-lg w-full overflow-hidden mb-7 mt-10 xl:px-44 lg:px-10">
        {/* Ride Title */}
        <div className="bg-primary-blue text-white p-2 flex flex-col items-center xl:rounded-l-lg">
          <span className="font-bold text-sm">Ride:</span>
          <span className="font-semibold text-sm text-primary-yellow xl:text-xl">
            {packageItem.translations[locale].title}
          </span>
        </div>
        {/* Duration */}
        <div className="bg-primary-blue text-white p-2 flex flex-col items-center">
          <span className="font-bold text-sm">Duration:</span>
          <span className="font-semibold text-sm text-primary-yellow xl:text-xl">
            1 Hour
          </span>
        </div>
        {/* Price */}
        <div className="bg-primary-blue text-white p-2 flex flex-col items-center">
          <span className="font-bold text-sm">Price:</span>
          <span className="font-semibold text-sm text-primary-yellow xl:text-xl">
            {packageItem.amount} AED
          </span>
        </div>
        {/* WhatsApp Button */}
        <div className="bg-primary-blue p-2 flex flex-col items-center">
          <button className="flex flex-row items-center justify-center py-1 px-6 xl:py-2.5 md:px-8 border-4 border-[#e1ae48] rounded-md bg-primary-blue hover:bg-primary-blue text-primary-yellow font-bold text-base md:text-[10px] xl:text-sm transition-all duration-300">
            <FaWhatsapp size={20} />
            WHATSAPP US
          </button>
        </div>
        {/* Book Now Button */}
        <div className="bg-primary-blue p-2 flex flex-col items-center xl:rounded-r-lg">
          <button className="flex flex-row items-center justify-center py-1 xl:py-1 3xl:py-3 px-6 md:py-0 md:px-8 border-4 border-[#e1ae48] rounded-md bg-primary-blue hover:bg-primary-blue text-primary-yellow font-bold text-base md:text-xs xl:text-xs transition-all duration-300">
            BOOK NOW WITH JETSKI
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
