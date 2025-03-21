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
    <div className="container mx-auto px-10">
      <PageTitleHeading title={packageItem.translations[locale].title} />

      <div className="flex flex-col lg:flex-row justify-center gap-10">
        {/* First column (70%) */}
        <div className="flex items-start lg:w-7/12">
          <img
            src={`https://www.centauruscharter.com/product/images/${packageItem.image}`}
            alt={packageItem.translations[locale].title}
            className="w-full rounded-lg"
          />
        </div>

        {/* Second column (30%) */}
        <div className="lg:w-5/12">
          <h3 className="text-gray-500">
            {packageItem.translations[locale].preview_text}
            <br />
          </h3>

          <p
            className="text-gray-500 text-md"
            dangerouslySetInnerHTML={{
              __html: packageItem.translations[locale].description || "",
            }}
          />
        </div>
      </div>

      <div className="bg-primary-blue grid grid-cols-1 lg:grid-cols-5 md:grid-cols-1 items-center gap-0 rounded-lg w-full overflow-hidden mb-7 mt-10">
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
          <a href={header_whatsapp_url || "#"} className="blue-lined-button flex">
            <FaWhatsapp size={20} />
            WHATSAPP US
          </a>
        </div>
        {/* Book Now Button */}
        <div className="bg-primary-blue p-2 flex flex-col items-center xl:rounded-r-lg">
          <a href="https://fareharbor.com/embeds/book/centauruscharter/?full-items=yes" className="blue-lined-button">BOOK NOW WITH {packageItem.translations[locale].title}</a>
        </div>
      </div>
    </div>
  );
};

export default Page;
