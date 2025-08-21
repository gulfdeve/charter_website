'use client'
import React,{ useState } from 'react';
import { FaShip, FaClock, FaBed } from "react-icons/fa6";
import { IoIosPeople, IoMdPricetag } from "react-icons/io";
import Link from 'next/link';

import Modal2 from './Modal2';
const Nycard = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handlequote = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  // Temporary data array
const yachts = [
  {
    id: 1,
    image: "/61-Silver-Creeknewyear.webp",
    name: "36ft Yacht - Thunder",
    infoBoxes: [
      { label: "Brand", value: "Silver Craft" },
      { label: "Capacity", value: "10" },
      { label: "Cabins", value: "N/A" },
      { label: "Timings", value: "9PM - 3AM" }
    ],
    packageInclusions: "CANAPÉS, WINES, BEERS & 2 BOTTLES OF CHAMPAGNE",
    price: "AED 15,000 + VAT",
    rate: "6 HOURS RATE",
    isSold: 0,
  },
  {
    id: 2,
    image: "/61-Silver-Creeknewyear.webp",
    name: "36ft Yacht - Storm",
    infoBoxes: [
      { label: "Brand", value: "Majesty" },
      { label: "Capacity", value: "10" },
      { label: "Cabins", value: "N/A" },
      { label: "Timings", value: "9PM - 3AM" }
    ],
    packageInclusions: "CANAPÉS, WINES, BEERS & 2 BOTTLES OF CHAMPAGNE",
    price: "AED 15,000 + VAT",
    rate: "6 HOURS RATE",
    isSold: 0,
  },
  {
    id: 3,
    image: "/61-Silver-Creeknewyear.webp",
    name: "40ft Yacht - Riverside",
    infoBoxes: [
      { label: "Brand", value: "Yamaha" },
      { label: "Capacity", value: "12" },
      { label: "Cabins", value: "1" },
      { label: "Timings", value: "9PM - 3AM" }
    ],
    packageInclusions: "CANAPÉS, WINES, BEERS & 2 BOTTLES OF CHAMPAGNE",
    price: "AED 18,000 + VAT",
    rate: "6 HOURS RATE",
    isSold: 0,
  },
  {
    id: 4,
    image: "/61-Silver-Creeknewyear.webp",
    name: "56ft Yacht - Vassia",
    infoBoxes: [
      { label: "Brand", value: "Majesty" },
      { label: "Capacity", value: "30" },
      { label: "Cabins", value: "3" },
      { label: "Timings", value: "9PM - 3AM" }
    ],
    packageInclusions: "CANAPÉS, WINES, BEERS & 4 BOTTLES OF CHAMPAGNE",
    price: "AED 25,000 + VAT",
    rate: "6 HOURS RATE",
    isSold: 1,
  },
  {
    id: 5,
    image: "/61-Silver-Creeknewyear.webp",
    name: "56ft Yacht - Lagoona",
    infoBoxes: [
      { label: "Brand", value: "Majesty" },
      { label: "Capacity", value: "26" },
      { label: "Cabins", value: "3" },
      { label: "Timings", value: "9PM - 3AM" }
    ],
    packageInclusions: "CANAPÉS, WINES, BEERS & 5 BOTTLES OF CHAMPAGNE",
    price: "AED 30,000 + VAT",
    rate: "6 HOURS RATE",
    isSold: 0,
  },
  {
    id: 6,
    image: "/61-Silver-Creeknewyear.webp",
    name: "58ft Yacht - Etosha",
    infoBoxes: [
      { label: "Brand", value: "Azimut" },
      { label: "Capacity", value: "28" },
      { label: "Cabins", value: "3" },
      { label: "Timings", value: "9PM - 3AM" }
    ],
    packageInclusions: "CANAPÉS, WINES, BEERS & 4 BOTTLES OF CHAMPAGNE",
    price: "AED 25,000 + VAT",
    rate: "6 HOURS RATE",
    isSold: 0,
  },
  {
    id: 7,
    image: "/61-Silver-Creeknewyear.webp",
    name: "61ft Yacht - Silver Creek",
    infoBoxes: [
      { label: "Brand", value: "Majesty" },
      { label: "Capacity", value: "30" },
      { label: "Cabins", value: "3" },
      { label: "Timings", value: "9PM - 3AM" }
    ],
    packageInclusions: "CANAPÉS, WINES, BEERS & 5 BOTTLES OF CHAMPAGNE",
    price: "AED 38,500 + VAT",
    rate: "6 HOURS RATE",
    isSold: 0,
  },
  {
    id: 8,
    image: "/61-Silver-Creeknewyear.webp",
    name: "77ft Yacht - Dionysos",
    infoBoxes: [
      { label: "Brand", value: "Majesty" },
      { label: "Capacity", value: "30" },
      { label: "Cabins", value: "3" },
      { label: "Timings", value: "9PM - 3AM" }
    ],
    packageInclusions: "GOURMET CANAPÉS, PREMIUM WINES, BEERS, SPIRITS & 10 BOTTLES OF CHAMPAGNE",
    price: "AED 60,000 + VAT",
    rate: "6 HOURS RATE",
    isSold: 0,
  },
  {
    id: 9,
    image: "/61-Silver-Creeknewyear.webp",
    name: "85ft Yacht - Kronos",
    infoBoxes: [
      { label: "Brand", value: "Duretti" },
      { label: "Capacity", value: "50" },
      { label: "Cabins", value: "4" },
      { label: "Timings", value: "9PM - 3AM" }
    ],
    packageInclusions: "GOURMET CANAPÉS, PREMIUM WINES, BEERS, SPIRITS & 10 BOTTLES OF CHAMPAGNE",
    price: "AED 55,000 + VAT",
    rate: "6 HOURS RATE",
    isSold: 0,
  },
  {
    id: 10,
    image: "/61-Silver-Creeknewyear.webp",
    name: "118ft Yacht - Poseidon",
    infoBoxes: [
      { label: "Brand", value: "Hatteras" },
      { label: "Capacity", value: "100" },
      { label: "Cabins", value: "4" },
      { label: "Timings", value: "9PM - 3AM" }
    ],
    packageInclusions: "CANAPÉS, WINES, BEERS & 24 BOTTLES OF CHAMPAGNE",
    price: "AED 125,000 + VAT",
    rate: "6 HOURS RATE",
    isSold: 0,
  }
];

  return (
    <div className='container mx-auto py-8'>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {yachts.map((yacht) => (
          <div key={yacht.id} className='bg-[#09162a] rounded-lg overflow-hidden p-3 md:p-5'>
            {/* <div className="relative"> */}
              <h4 className="font-bold text-white">
                {yacht.name}
              </h4>
              <div className = "relative">
              <img src={yacht.image} alt={yacht.name} className='w-full h-auto object-cover rounded-lg mt-3'/>
             
            {yacht.isSold === 1 && (
              <div className="absolute flex items-center gap-2 top-4 left-0 bg-primary-red text-white text-sm py-0.5 px-2 rounded-r-lg"><p>Sold Out</p>
                </div>)}
                {yacht.isSold !== 1 && (
                  <div className="absolute flex items-center gap-2 top-4 left-0 gradient-custom-2 text-white text-sm py-0.5 px-2 rounded-r-lg"><p>Available</p>
                </div>)}
           <div className="absolute grid grid-cols-4 gap-2  -bottom-5 left-0 right-0 mx-3 text-blue-900 rounded-lg bg-primary-blue-3">
                    {yacht.infoBoxes.map((box, index) => (
                      <div key={index} className="flex items-center">
                    
                        <div className="hidden sm:block h-12" />
                        <div className="p-1 text-center flex-1">
                          <div className="text-xs text-[#f2f2f2]">{box.label}</div>
                          <div className="font-bold text-xs md:text-sm text-white">{box.value}</div>
                        </div>
                      </div>
                    ))}
            </div>  
            </div> 
                    
            {/* <div className=" grid grid-cols-4 gap-2  -bottom-5 left-0 right-0 mx-3 text-blue-900 rounded-lg bg-primary-blue-3">
              <div className="flex flex-row items-center justify-between  p-4 md:p-2 px-16 md:px-4 xl:px-5 outline md:outline-none outline-primary-blue">
                <FaShip className="text-4xl md:text-4xl text-primary-yellow" />
                <div className="font-bold text-center md:text-sm  text-primary-blue uppercase">
                  Model<br />
                  <span className=" font-medium">{yacht.model}</span>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between p-4 md:p-2 px-16 md:px-4 xl:px-5 outline outline-primary-blue md:outline-none">
                <FaClock className="text-4xl md:text-3xl text-primary-yellow" />
                <div className="font-bold text-center md:text-sm  text-primary-blue">
                  {yacht.timings}<br />
                  <span className="font-medium">TIMINGS</span>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between p-4 md:p-2 px-16 md:px-4  outline outline-primary-blue md:outline-none">
                <IoIosPeople className="text-4xl md:text-5xl text-primary-yellow" />
                <div className="font-bold text-center md:text-sm  text-primary-blue">
                  {yacht.capacity}<br />
                  <span className="font-medium">CAPACITY</span>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between p-4 md:p-2 px-16 md:px-4 xl:px-7 outline outline-primary-blue  md:outline-none">
                <FaBed className="text-4xl md:text-4xl text-primary-yellow" />
                <div className="font-bold text-center md:text-sm text-primary-blue">
                  {yacht.cabins}<br />
                  <span className="font-medium md:text-sm">CABINS</span>
                </div>
              </div>
            </div> */}
            <div className="mt-10">
              <div className="bg-primary-blue rounded-lg p-4 space-y-2 py-5">
                <h5 className=" text-primary-yellow text-center font-bold text-xl">
                  PACKAGE INCLUSIONS:
                </h5>
                <div className=" text-white text-center text-sm ">
                  {yacht.packageInclusions}
                </div>
              </div>
              {/* <div className="flex flex-row items-center justify-center p-3">
                <IoMdPricetag className="text-5xl md:text-4xl text-primary-yellow" />
                <h1 className=" text-primary-blue font-bold text-3xl text-center">
                  {yacht.price}
                </h1>
              </div>
              <h3 className=" text-primary-blue text-lg text-center">
                {yacht.rate}
              </h3> */}
              {/* CTA Button */}
                  <div className="mt-10">
                  {yacht.isSold === 0 ? (
                  <div className='grid grid-cols-1 s:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-2'>
                  <Link href="https://wa.link/jimth5" target="_blank" >
                  <button className="w-full yellow-solid-button">WhatsApp Us</button>
                  </Link>
                  <button onClick={handlequote} className="w-full yellow-solid-button">
                  Get a Quote
                  </button></div>
                  ) : (
                  <div className='grid grid-cols-1 s:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-2'>
                  <button className="w-full yellow-solid-button cursor-not-allowed opacity-30">
                  WhatsApp Us
                  </button>
                  <button className="w-full yellow-solid-button cursor-not-allowed opacity-30">
                  Get a Quote
                  </button>
                  </div>
                  )}
                </div>
              {/* <div className="space-y-3 py-3">
                {yacht.isSold === 1 ? (
                  <button className="flex items-center justify-center w-full px-4 py-3  bg-gray-400 text-white font-bold rounded-md">
                    SOLD OUT
                  </button>
                ) : (
                  <>
                  <div className='flex flex-col items-center justify-between md:flex-row gap-5'>
                  <Link href={"https://wa.link/eyg3by"}>
                    <button className="yellow-solid-button  md:text-sm">
                      WHATSAPP US
                    </button>
                  </Link>
                    <button onClick={handlequote} className="yellow-solid-button md:text-sm uppercase">
                     GET A QUOTE
                    </button>
                    </div>
                  </>
                )}
              </div> */}
            </div>
          </div>
        ))}y
         <Modal2
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          idName="offers_id"
          idValue="44"
        />
      </div>
    </div>
  );
};

export default Nycard;
