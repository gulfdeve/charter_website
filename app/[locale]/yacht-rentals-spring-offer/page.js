// app/spring-offer/page.jsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { FaYoutube } from "react-icons/fa";

// Import your context hooks (adjust the import paths as needed)
import { useData } from "@/app/context/DataContext";
import { useLanguage } from "@/app/context/LanguageContext";

/*
  YachtCard Component (No Carousel):
  - Displays the first image only.
  - Overlays the category badge on top of the image.
  - Shows yacht details and a "Book Now" link.
*/
const YachtCard = ({ yacht }) => {
  // Use the first image from the array
  const firstImage = yacht.images[0];

  return (
    <div className="flex flex-col justify-center bg-white rounded-2xl shadow-custom h-auto relative p-4">
      <div className="relative">
        {/* Image Container with relative positioning for badge overlay */}
        {firstImage && (
          <Link href={`yacht-rentals/${yacht.slug}`}>
            <img
              src={`https://www.centauruscharter.com/product/galleryimages/${firstImage}`}
              alt={yacht.title}
              className="rounded-2xl h-[250px] md:h-[300px] w-full object-cover"
            />
          </Link>
        )}

        {/* Category Badge Overlay */}
        <div className="absolute top-4 flex flex-col items-start">
          {/* BEST SELLER or PREMIUM YACHT if applicable */}
          {yacht.category.includes("bestSellers") && (
            <div className="bg-primary-blue text-primary-yellow text-lg px-5">
              BEST SELLER
            </div>
          )}
          {yacht.category.includes("premium") && (
            <div className="bg-primary-blue text-primary-yellow text-lg px-5">
              PREMIUM YACHT
            </div>
          )}

          {/* 30% OFF badge for all yachts */}
          <div className="bg-[#ff0000] text-white text-2xl font-bold px-4">
            30% OFF
          </div>
        </div>
      </div>

      {/* Yacht Details */}
      <div className="flex flex-col items-start pt-3">
        <h2 className="text-primary-blue text-xl font-bold py-4 hover:text-blue-600 transition-all duration-300 cursor-pointer">
          {yacht.title}
        </h2>
        <p className="text-sm text-primary-blue text-left">
          Model: <span className="font-bold">{yacht.model}</span> | Length:{" "}
          <span className="font-bold">{yacht.length}</span> | Guests:{" "}
          <span className="font-bold">{yacht.guests}</span>
        </p>
        <p className="text-primary-blue font-bold text-xl pt-5 pb-2">
          AED {yacht.price} <span className="text-primary-blue">Per Hour</span>
        </p>
        <a
          href={`https://wa.me/971547928626?text=Hi!%20I%20want%20to%20inquire%20about%20the%2030%2525%20Spring%20Offer%20for%20Lagoona`}
          className="flex flex-row items-center justify-center py-2 w-full md:py-2 md:px-4 rounded-md bg-primary-yellow text-primary-blue hover:bg-primary-blue hover:text-primary-yellow font-bold text-base md:text-sm xl:text-lg transition-all duration-300"
        >
          Book Now
        </a>
      </div>
    </div>
  );
};

/*
  Tabs Component:
  - Fetches yacht data from context.
  - Filters yachts by active tab and renders a list of YachtCard components.
*/
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("allYachts");
  const [yachts, setYachts] = useState([]);
  const { language } = useLanguage();
  const { data, loading, error } = useData();
  const locale = useLocale();

  useEffect(() => {
    if (data?.products) {
      // Map each product to include its gallery images as an array.
      const mappedYachts = data.products.map((item) => {
        let category = ["allYachts"];
        if (item.per_hour_price > 4000) category.push("premium");
        if (["56ft-lagoona", "61ft-silvercreek"].includes(item.slug)) {
          category.push("bestSellers");
        }
        return {
          id: item.id,
          images: item.gallery?.map((img) => img.image) || [],
          title: item.translations?.[locale]?.name_of_yacht,
          slug: item.slug,
          fareharbor_id: item.fareharbor_id,
          length: item.translations?.[locale]?.size,
          model: item.translations?.[locale]?.model,
          guests: item.translations?.[locale]?.guests,
          price: item.per_hour_price,
          category,
        };
      });
      setYachts(mappedYachts);
    }
  }, [data, locale]);

  const renderContent = () => {
    const filteredYachts = yachts.filter((yacht) =>
      yacht.category.includes(activeTab)
    );
    if (loading)
      return <div className="text-center mt-20">Loading...</div>;
    if (error)
      return <div className="text-center mt-20">Error: {error}</div>;
    if (filteredYachts.length === 0) {
      return (
        <div className="text-center mt-20">
          No yachts found for this category.
        </div>
      );
    }
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-10 gap-6 container mx-auto">
        {filteredYachts.map((yacht) => (
          <YachtCard key={yacht.id} yacht={yacht} />
        ))}
      </div>
    );
  };

  return (
    <div className="w-full bg-white mt-14 lg:mt-0">
      <div className="flex justify-center items-center gap-8 text-xs sm:text-base md:text-lg font-semibold py-2 pb-10 md:py-7 px-2">
        <button onClick={() => setActiveTab("allYachts")}>ALL YACHTS</button>
        <button onClick={() => setActiveTab("bestSellers")}>BEST SELLERS</button>
        <button onClick={() => setActiveTab("premium")}>PREMIUM</button>
      </div>
      <div className="p-0 md:p-6 text-center">{renderContent()}</div>
    </div>
  );
};

/*
  SpringOffer Page:
  - Combines the "Spring Offer" header section with the Tabs component.
*/
export default function SpringOffer() {
  return (
    <main className="bg-white min-h-screen flex flex-col items-center p-6">
      {/* Logo (Optional) */}
      <div className="mb-6">
        <Image
          src="/centaurus logo navy blue.png"
          alt="Centaurus Yachts Charter Logo"
          width={200}
          height={200}
        />
      </div>

      {/* Spring Offer Headings */}
      <h1 className="text-2xl md:text-4xl font-bold text-[#0B2946] mb-2 text-center">
        Centaurus Luxury Yacht Rentals
      </h1>
      <h2 className="text-lg md:text-2xl text-gray-500 mb-6 text-center">
        30% OFF Afternoon Yacht Charters!
      </h2>

      {/* Description */}
      <div className="max-w-6xl text-center text-gray-500 space-y-4">
        <p>
          Experience the perfect spring escape with an exclusive{" "}
          <strong>30% discount</strong> on our afternoon yacht charters in Dubai.
          Relax and unwind as you cruise along the stunning coastline, enjoying{" "}
          <strong>unlimited complimentary drinks</strong> and the refreshing sea
          breeze. With <strong>free transfers</strong> included (subject to
          availability), all you need to do is sit back, relax, and enjoy the
          ultimate luxury experience with your loved ones.
        </p>
        <p>
          A wide range of itineraries and destinations are available, from Dubai
          Marina to Burj Al Arab, JBR, and Atlantis. Renting a yacht in Dubai Marina
          or Dubai Harbour is seamless with instant booking options.
        </p>
        <p className="font-semibold">
          This offer is <strong>valid on weekdays only</strong>, excluding weekends
          and public holidays, and is available until <strong>April 18, 2025</strong>.
        </p>
      </div>

      {/* Tabs Section */}
      <div className="w-full mt-10">
        <Tabs />
      </div>
    </main>
  );
}
