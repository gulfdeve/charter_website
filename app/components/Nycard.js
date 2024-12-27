import React from 'react';
import { FaShip, FaClock, FaBed } from "react-icons/fa6";
import { IoIosPeople, IoMdPricetag } from "react-icons/io";

const Nycard = () => {
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
      packageInclusions: "CANAPÉS, WINES, BEERS & 5 BOTTLES OF CHAMPAGNE",
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
      packageInclusions: "CANAPÉS, WINES, BEERS & 5 BOTTLES OF CHAMPAGNE",
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
        packageInclusions: "CANAPÉS, WINES, BEERS & 5 BOTTLES OF CHAMPAGNE",
        price: "AED 15,000 + VAT",
        rate: "6 HOURS RATE",
        isSold: 1,
      },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-10 xl:px-56 2xl:px-[30rem] py-10 rounded-lg">
        {yachts.map((yacht) => (
          <div key={yacht.id} className='rounded-lg'>
            <div className="relative">
              <img src={yacht.image} alt={yacht.name} className='rounded-t-3xl'/>
              {yacht.isSold === 1 && (
                <div className="absolute top-1/2 font-Montserrat left-0 w-full bg-primary-yellow-dark bg-opacity-80 text-white font-bold text-xl text-center py-2">
                  SOLD OUT
                </div>
              )}
            </div>
            <div className="bg-primary-yellow-dark p-2">
              <h1 className="font-Montserrat text-center text-2xl text-primary-blue font-bold">
                {yacht.name}
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 bg-white p-2  gap-5">
              <div className="flex flex-row items-center justify-between  p-4 md:p-2 px-16 md:px-4 outline md:outline-none outline-primary-blue">
                <FaShip className="text-4xl md:text-3xl text-primary-yellow" />
                <h1 className="text-center md:text-sm font-Montserrat text-primary-blue">
                  Model<br />
                  <span className="font-bold">{yacht.model}</span>
                </h1>
              </div>
              <div className="flex flex-row items-center justify-between p-4 md:p-2 px-16 md:px-4 outline outline-primary-blue md:outline-none">
                <FaClock className="text-4xl md:text-3xl text-primary-yellow" />
                <h1 className="text-center md:text-sm font-Montserrat text-primary-blue">
                  {yacht.timings}<br />
                  <span className="font-bold">TIMINGS</span>
                </h1>
              </div>
              <div className="flex flex-row items-center justify-between p-4 md:p-2 px-16 md:px-4 outline outline-primary-blue md:outline-none">
                <IoIosPeople className="text-4xl md:text-3xl text-primary-yellow" />
                <h1 className="text-center md:text-sm font-Montserrat text-primary-blue">
                  {yacht.capacity}<br />
                  <span className="font-bold">CAPACITY</span>
                </h1>
              </div>
              <div className="flex flex-row items-center justify-between p-4 md:p-2 px-16 md:px-4 outline outline-primary-blue  md:outline-none">
                <FaBed className="text-4xl md:text-3xl text-primary-yellow" />
                <h1 className="text-center font-Montserrat text-primary-blue">
                  {yacht.cabins}<br />
                  <span className="font-bold md:text-sm">CABINS</span>
                </h1>
              </div>
            </div>
            <div className="bg-white p-5 rounded-b-3xl">
              <div className="bg-primary-blue outline outline-primary-yellow p-3 space-y-2">
                <h1 className="font-Montserrat text-primary-yellow text-center font-bold">
                  PACKAGE INCLUSIONS:
                </h1>
                <h1 className="font-Montserrat text-white text-center text-sm">
                  {yacht.packageInclusions}
                </h1>
              </div>
              <div className="flex flex-row items-center justify-center p-3">
                <IoMdPricetag className="text-5xl md:text-4xl text-primary-yellow" />
                <h1 className="font-Montserrat text-primary-blue font-bold text-3xl text-center">
                  {yacht.price}
                </h1>
              </div>
              <h3 className="font-Montserrat text-primary-blue text-lg text-center">
                {yacht.rate}
              </h3>
              <div className="space-y-3 py-3">
                {yacht.isSold === 1 ? (
                  <button className="flex items-center justify-center w-full px-4 py-3 font-Montserrat bg-gray-400 text-white font-bold rounded-md">
                    SOLD OUT
                  </button>
                ) : (
                  <>
                  <div className='flex flex-col md:flex-row gap-5'>
                    <button className="flex items-center justify-center gap-2 w-full px-4 py-2 md:text-sm font-Montserrat bg-primary-yellow text-primary-blue border border-primary-yellow-dark font-bold rounded-md hover:bg-primary-yellow-dark transition">
                      WHATSAPP US
                    </button>
                    <button className="flex items-center justify-center gap-2 w-full px-4 py-2 md:text-sm font-Montserrat bg-primary-yellow text-primary-blue border border-primary-yellow-dark font-bold rounded-md hover:bg-primary-yellow-dark transition">
                      BOOK NOW
                    </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nycard;
