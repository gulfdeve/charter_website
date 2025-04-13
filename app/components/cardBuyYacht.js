import { Link } from "@/app/i18n/routing";
import React from 'react';
import { useLanguage } from "@/app/context/LanguageContext";
const YachtCard = ({ yacht }) => {
  const { language, changeLanguage } = useLanguage();
  return (
    <div className="bg-white rounded-lg border-2 md:border-0 md:shadow-lg overflow-hidden">
      <Link href={`/${language}/yachts-for-sale-dubai/88ft-sunseeker`}>
      <img 
        src={yacht.image} 
        alt={yacht.name}
        className="w-full object-cover"
      />
      </Link>
      
      <div className="p-6">
        <Link href={`/${language}/yachts-for-sale-dubai/88ft-sunseeker`}>
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
          <Link href="yachts-for-sale-dubai/88ft-sunseeker" className="blue-solid-button text-center ">
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
    <div className="grid md:grid-cols-2 gap-8 container mx-auto my-8">
      {yachts.map((yacht, index) => (
        <YachtCard key={index} yacht={yacht} />
      ))}
    </div>
  );
};

export default YachtListings;