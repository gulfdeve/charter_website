'use client';

import React, { useState, useEffect } from 'react';
import { Link } from '@/app/i18n/routing';

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
              src={`https://www.centauruscharter.net/product/galleryimages/${firstImage}`}
              alt={yacht.title}
              className="rounded-2xl h-[250px] md:h-[300px] w-full object-cover"
            />
          </Link>
        )}

        {/* Category Badge Overlay */}
        <div className="absolute top-4 flex flex-col items-start">
          {/* BEST SELLER or PREMIUM YACHT if applicable */}
          {yacht.category.includes('bestSellers') && (
            <div className="bg-primary-blue text-primary-yellow text-lg px-5">
              BEST SELLER
            </div>
          )}
          {yacht.category.includes('premium') && (
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
          Build: <span className="font-bold">{yacht.model}</span> | Length:{' '}
          <span className="font-bold">{yacht.length}</span> | Guests:{' '}
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
  - Receives yacht data as props from server component
  - Filters yachts by active tab and renders a list of YachtCard components.
*/
export default function SpringOfferTabs({ yachts }) {
  const [activeTab, setActiveTab] = useState('allYachts');

  const renderContent = () => {
    const filteredYachts = yachts.filter(yacht =>
      yacht.category.includes(activeTab)
    );
    
    if (filteredYachts.length === 0) {
      return (
        <div className="text-center mt-20">
          No yachts found for this category.
        </div>
      );
    }
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-10 gap-6 container mx-auto">
        {filteredYachts.map(yacht => (
          <YachtCard key={yacht.id} yacht={yacht} />
        ))}
      </div>
    );
  };

  return (
    <div className="w-full bg-white mt-14 lg:mt-0">
      <div className="flex justify-center items-center gap-8 text-xs sm:text-base md:text-lg font-semibold py-2 pb-10 md:py-7 px-2">
        <button onClick={() => setActiveTab('allYachts')}>ALL YACHTS</button>
        <button onClick={() => setActiveTab('bestSellers')}>
          BEST SELLERS
        </button>
        <button onClick={() => setActiveTab('premium')}>PREMIUM</button>
      </div>
      <div className="p-0 md:p-6 text-center">{renderContent()}</div>
    </div>
  );
}

