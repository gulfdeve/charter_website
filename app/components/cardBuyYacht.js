import { Link } from "@/app/i18n/routing";
import React from 'react';

import { useLocale } from "next-intl";
const YachtCard = ({ yacht }) => {
  const locale = useLocale();
  return (
    <div className="bg-white rounded-lg border-2 md:border-0 md:shadow-lg overflow-hidden">
      <Link href={`/${locale}/yachts-for-sale-dubai/${yacht.slug}`}>
      <img 
        src={yacht.image} 
        alt={yacht.name}
        className="w-full object-cover"
      />
      </Link>
      
      <div className="p-6">
        <Link href={`/${locale}/yachts-for-sale-dubai/${yacht.slug}`}>
        <h2 className="text-base sm:text-xl font-bold text-navy-900 mb-4 ">{yacht.name}</h2>
        </Link>
        
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className='border-b-2 border-gray-200'>
            <p className="text-[#125589] font-medium mb-1 ">Build:</p>
            <p className="text-gray-900 font-bold ">{yacht.build}</p>
          </div>
          <div className='border-b-2 border-gray-200'>
            <p className="text-[#125589] font-medium mb-1 ">Cabins:</p>
            <p className="text-gray-900 font-bold ">{yacht.cabins}</p>
          </div>
          <div className='border-b-2 border-gray-200'>
            <p className="text-[#125589] font-medium mb-1 ">Length:</p>
            <p className="text-gray-900 font-bold ">{yacht.length}</p>
          </div>
          <div className='border-b-2 border-gray-200'>
            <p className="text-[#125589] font-medium mb-1 ">Guests:</p>
            <p className="text-gray-900 font-bold ">{yacht.guests}</p>
          </div>
          <div className='border-b-2 border-gray-200'>
            <p className="text-[#125589] font-medium mb-1 ">Year:</p>
            <p className="text-gray-900 font-bold ">{yacht.year}</p>
          </div>
          <div className='border-b-2 border-gray-200'>
            <p className="text-[#125589] font-medium mb-1 ">Price:</p>
            <p className="text-gray-900 font-bold ">{yacht.price}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href={`/${locale}/yachts-for-sale-dubai/${yacht.slug}`} className="blue-solid-button text-center ">
            KNOW MORE
          </Link>
          <button className="blue-solid-button ">
            INQUIRE NOW
          </button>
        </div>
      </div>
    </div>
  );
};

const YachtListings = () => {
  const yachts = [
    {
      slug: "88ft-sunseeker",
      name: "88 FT YACHT SUNSEEKER",
      build: "88 FT YACHT SUNSEEKER",
      cabins: "4",
      length: "86.7 FT / 26.43 M",
      guests: "8",
      year: "2024",
      price: "UPON REQUEST",
      image: "/buy_yacht/SUNSEEKER 88 YACHT-1.webp"
    },
    {
      slug: "78ft-cranchi",
      name: "78 FT YACHTCRANCHI",
      build: "78 FT YACHTCRANCHI",
      cabins: "4",
      length: "82.6 FT / 25.18 M",
      guests: "8",
      year: "2022",
      price: "UPON REQUEST",
      image: "/buy_yacht/MAIN CRANCHI 78 FT YACHT.webp"
    },
    {
      slug: "90ft-sunseeker",
      name: "90 FT YACHT SUNSEEKER",
      build: "90 FT YACHT SUNSEEKER",
      cabins: "4",
      length: "91.1 FT / 27.77 M",
      guests: "10",
      year: "2008",
      price: "UPON REQUEST",
      image: "/buy_yacht/90ftsunseeker.webp"
    },
    {
      slug: "76ft-canados",
      name: "76 FT YACHT CANADOS",
      build: "77.76 FT / 23.7 M",
      cabins: "4",
      length: "82.6 FT / 25.18 M",
      guests: "8",
      year: "2008",
      price: "UPON REQUEST",
      image: "/buy_yacht/76 FT YACHT CANADOS MAIN.webp"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 container mx-auto my-8">
      {yachts.map((yacht, index) => (
        <YachtCard key={index} yacht={yacht} />
      ))}
    </div>
  );
};

export default YachtListings;