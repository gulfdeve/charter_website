import Link from 'next/link';
import React from 'react';
import { useLanguage } from "@/app/context/LanguageContext";
const YachtCard = ({ yacht }) => {
  const { language, changeLanguage } = useLanguage();
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden px-2">
      <Link href={`/${language}/yachts-for-sale-dubai/88ft-sunseeker`}>
      <img 
        src={yacht.image} 
        alt={yacht.name}
        className="w-full object-cover"
      />
      </Link>
      
      <div className="p-6">
        <Link href={`/${language}/yachts-for-sale-dubai/88ft-sunseeker`}>
        <h2 className="text-2xl font-bold text-navy-900 mb-4 font-Montserrat">{yacht.name}</h2>
        </Link>
        
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className='border-b-2 border-gray-200'>
            <p className="text-[#125589] font-medium mb-1 font-Montserrat">Build:</p>
            <p className="text-gray-900 font-bold font-Montserrat">{yacht.build}</p>
          </div>
          <div className='border-b-2 border-gray-200'>
            <p className="text-[#125589] font-medium mb-1 font-Montserrat">Cabins:</p>
            <p className="text-gray-900 font-bold font-Montserrat">{yacht.cabins}</p>
          </div>
          <div className='border-b-2 border-gray-200'>
            <p className="text-[#125589] font-medium mb-1 font-Montserrat">Length:</p>
            <p className="text-gray-900 font-bold font-Montserrat">{yacht.length}</p>
          </div>
          <div className='border-b-2 border-gray-200'>
            <p className="text-[#125589] font-medium mb-1 font-Montserrat">Guests:</p>
            <p className="text-gray-900 font-bold font-Montserrat">{yacht.guests}</p>
          </div>
          <div className='border-b-2 border-gray-200'>
            <p className="text-[#125589] font-medium mb-1 font-Montserrat">Year:</p>
            <p className="text-gray-900 font-bold font-Montserrat">{yacht.year}</p>
          </div>
          <div className='border-b-2 border-gray-200'>
            <p className="text-[#125589] font-medium mb-1 font-Montserrat">Price:</p>
            <p className="text-gray-900 font-bold font-Montserrat">{yacht.price}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <Link href="yachts-for-sale-dubai/88ft-sunseeker" className="blue-solid-button text-center font-Montserrat">
            KNOW MORE
          </Link>
          <button className="blue-solid-button font-Montserrat">
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
      name: "88 FT YACHT SUNSEEKER",
      build: "88 FT YACHT SUNSEEKER",
      cabins: "4",
      length: "86.7 FT / 26.43 M",
      guests: "8",
      year: "2024",
      price: "UPON REQUEST",
      image: "buy_yacht/SUNSEEKER 88 YACHT-1.webp"
    },
    {
      name: "78 FT YACHTCRANCHI",
      build: "78 FT YACHTCRANCHI",
      cabins: "4",
      length: "82.6 FT / 25.18 M",
      guests: "8",
      year: "2022",
      price: "UPON REQUEST",
      image: "buy_yacht/SUNSEEKER 88 YACHT-1.webp"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto my-8">
      {yachts.map((yacht, index) => (
        <YachtCard key={index} yacht={yacht} />
      ))}
    </div>
  );
};

export default YachtListings;