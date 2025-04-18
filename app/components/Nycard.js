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
      name: "61ft Yacht - Silver Creek",
      model: "Majesty",
      timings: "9PM - 3AM",
      capacity: 30,
      cabins: 3,
      packageInclusions: "CANAPÉS, WINES, BEERS & 24 BOTTLES OF CHAMPAGNE",
      price: "AED 15,000 + VAT",
      rate: "6 HOURS RATE",
      isSold: 0, // 1 for sold, 0 for available
    },
    {
      id: 2,
      image: "/61-Silver-Creeknewyear.webp",
      name: "61ft Yacht - Silver Creek",
      model: "Majesty",
      timings: "9PM - 3AM",
      capacity: 30,
      cabins: 3,
      packageInclusions: "CANAPÉS, WINES, BEERS & 24 BOTTLES OF CHAMPAGNE",
      price: "AED 15,000 + VAT",
      rate: "6 HOURS RATE",
      isSold: 1,
    },
    {
        id: 3,
        image: "/61-Silver-Creeknewyear.webp",
        name: "61ft Yacht - Silver Creek",
        model: "Majesty",
        timings: "9PM - 3AM",
        capacity: 30,
        cabins: 3,
        packageInclusions: "CANAPÉS, WINES, BEERS & 24 BOTTLES OF CHAMPAGNE",
        price: "AED 15,000 + VAT",
        rate: "6 HOURS RATE",
        isSold: 1,
      },
      {
        id: 1,
        image: "/61-Silver-Creeknewyear.webp",
        name: "61ft Yacht - Silver Creek",
        model: "Majesty",
        timings: "9PM - 3AM",
        capacity: 30,
        cabins: 3,
        packageInclusions: "CANAPÉS, WINES, BEERS & 24 BOTTLES OF CHAMPAGNE",
        price: "AED 15,000 + VAT",
        rate: "6 HOURS RATE",
        isSold: 0, // 1 for sold, 0 for available
      },
      {
        id: 2,
        image: "/61-Silver-Creeknewyear.webp",
        name: "61ft Yacht - Silver Creek",
        model: "Majesty",
        timings: "9PM - 3AM",
        capacity: 30,
        cabins: 3,
        packageInclusions: "CANAPÉS, WINES, BEERS & 24 BOTTLES OF CHAMPAGNE",
        price: "AED 15,000 + VAT",
        rate: "6 HOURS RATE",
        isSold: 1,
      },
      {
          id: 3,
          image: "/61-Silver-Creeknewyear.webp",
          name: "61ft Yacht - Silver Creek",
          model: "Majesty",
          timings: "9PM - 3AM",
          capacity: 30,
          cabins: 3,
          packageInclusions: "CANAPÉS, WINES, BEERS & 24 BOTTLES OF CHAMPAGNE",
          price: "AED 15,000 + VAT",
          rate: "6 HOURS RATE",
          isSold: 1,
        },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 xl:px-20 2xl:px- container mx-auto py-10 rounded-lg">
        {yachts.map((yacht) => (
          <div key={yacht.id} className='rounded-lg'>
            <div className="relative">
              <img src={yacht.image} alt={yacht.name} className='rounded-t-3xl'/>
              {yacht.isSold === 1 && (
                <div className="absolute top-1/2  left-0 w-full bg-primary-yellow-dark bg-opacity-80 text-white font-bold text-xl text-center py-2">
                  SOLD OUT
                </div>
              )}
            </div>
            <div className="bg-primary-yellow p-2">
              <h4 className=" text-center text-2xl text-primary-blue font-bold">
                {yacht.name}
              </h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 bg-white p-2  gap-5">
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
            </div>
            <div className="bg-white p-5 rounded-b-3xl">
              <div className="bg-primary-blue outline outline-primary-yellow rounded-lg p-4 space-y-2 py-5">
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
              <div className="space-y-3 py-3">
                {yacht.isSold === 1 ? (
                  <button className="flex items-center justify-center w-full px-4 py-3  bg-gray-400 text-white font-bold rounded-md">
                    SOLD OUT
                  </button>
                ) : (
                  <>
                  <div className='flex flex-col items-center justify-center md:flex-row gap-5'>
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
              </div>
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
