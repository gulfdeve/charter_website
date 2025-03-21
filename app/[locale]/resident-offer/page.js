import React from "react";
import Videoresidentoffers from "@/app/components/Videoresidentoffers";
import { FaWhatsapp } from "react-icons/fa";
const page = () => {
  const yachts = [
    {
      name: "THUNDER - 36FT",
      capacity: 10,
      ratePerHour: "AED 595",
      rate2Hours: "AED 950",
      rate3Hours: "AED 1070",
      rate4Hours: "AED 1430",
    },
    {
      name: "STORM - 36FT",
      capacity: 10,
      ratePerHour: "AED 595",
      rate2Hours: "AED 950",
      rate3Hours: "AED 1070",
      rate4Hours: "AED 1430",
    },
    {
      name: "VASSIA - 56FT",
      capacity: 21,
      ratePerHour: "AED 1040",
      rate2Hours: "AED 1665",
      rate3Hours: "AED 1870",
      rate4Hours: "AED 2495",
    },
    {
      name: "ETOSHA - 58FT",
      capacity: 28,
      ratePerHour: "AED 1080",
      rate2Hours: "AED 1730",
      rate3Hours: "AED 1945",
      rate4Hours: "AED 2590",
    },
    {
      name: "LAGOONA - 56FT",
      capacity: 24,
      ratePerHour: "AED 1150",
      rate2Hours: "AED 1840",
      rate3Hours: "AED 2070",
      rate4Hours: "AED 2760",
    },
    {
      name: "SILVER CREEK - 61FT",
      capacity: 30,
      ratePerHour: "AED 1250",
      rate2Hours: "AED 1995",
      rate3Hours: "AED 2250",
      rate4Hours: "AED 3000",
    },
  ];
  return (
    <>
      <div>
        <Videoresidentoffers />
      </div>
      <div className="container mx-auto flex flex-col items-center justify-center py-10">
        <h1 className=" text-primary-blue text-center font-bold text-2xl pb-4">
          EXCLUSIVE 40% DISCOUNT FOR UAE RESIDENTS
        </h1>
        <p className=" text-primary-blue text-lg text-center">
          EXPERIENCE THE ULTIMATE IN LUXURY YACHT RENTALS AT UNBEATABLE PRICES,
          EXCLUSIVELY FOR UAE RESIDENTS. ENJOY A PERFECT BLEND OF QUALITY AND
          AFFORDABILITY, PROMISING A UNIQUE AND UNFORGETTABLE ADVENTURE ON THE
          WATER.
        </p>
      </div>

      <div className="container mx-auto p-2 lg:p-20 py-6">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 md:text-sm lg:text-sm">
            <thead>
              <tr className="bg-primary-blue text-white">
                <th className="border border-transparent p-3  text-primary-yellow">
                  YACHT
                </th>
                <th className="border border-transparent p-3  text-primary-yellow">
                  CAPACITY
                </th>
                <th className="border border-transparent p-3  text-primary-yellow">
                  REGULAR RATE/HOUR
                </th>
                <th className="border border-transparent p-3  text-primary-yellow">
                  DISCOUNTED 2-HOUR RATE
                </th>
                <th className="border border-transparent p-3  text-primary-yellow">
                  DISCOUNTED 3-HOUR RATE
                </th>
                <th className="border border-transparent p-3  text-primary-yellow">
                  DISCOUNTED 4-HOUR RATE
                </th>
                <th className="border border-transparent p-3  text-primary-yellow">
                  BOOKING
                </th>
              </tr>
            </thead>
            <tbody>
              {yachts.map((yacht, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-100"
                  } text-center text-sm`}
                >
                  <td className="border border-black p-2  font-bold">
                    {yacht.name}
                  </td>
                  <td className="border border-black p-2  font-bold">
                    {yacht.capacity}
                  </td>
                  <td className="border border-black p-2  font-bold">
                    {yacht.ratePerHour}
                  </td>
                  <td className="border border-black p-2  font-bold">
                    {yacht.rate2Hours}
                  </td>
                  <td className="border border-black p-2  font-bold">
                    {yacht.rate3Hours}
                  </td>
                  <td className="border border-black p-2  font-bold">
                    {yacht.rate4Hours}
                  </td>
                  <td className="border border-black p-2  font-bold bg-primary-yellow">
                    <button className="bg-primary-yellow text-black py-1 px-10 rounded-lg hover:bg-[#d49d3f] transition-all">
                      Book Now
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="container mx-auto flex flex-col  px-4">
        <h3 className="text-black  text-center font-bold">
          INCLUSIONS: WATER, SOFT DRINKS, WINES, AND BEERS.
        </h3>
        <div className="bg-primary-blue p-1 ">
          <h3 className=" font-bold text-center text-white text-md">
            DISCOUNTED RATES ARE VALID FOR BOOKINGS FROM 6AM-2PM (MORNING TRIPS)
            & 8 PM ONWARDS (NIGHT TRIPS)
          </h3>
        </div>
        <h3 className=" text-left md:text-center py-5">
          ESCAPE THE ORDINARY AND EMBARK ON A PRIVATE YACHT ADVENTURE WITH OUR
          LIMITED-TIME 40% DISCOUNT FOR UAE RESIDENTS. TO AVAIL THIS EXCLUSIVE
          OFFER, SIMPLY BOOK A MINIMUM 2-HOURS YACHT TOUR AND LET US TAKE CARE
          OF THE REST. ENJOY UNLIMITED DRINKS AND SNACKS DURING YOUR PRIVATE
          YACHT TOUR. WATERSPORTS ARE ALSO AVAILABLE ON REQUEST.
        </h3>
      </div>
      <div className="container mx-auto">
      <hr className="my-5 border border-primary-blue"></hr>
      </div>
      <div className="flex flex-col items-center justify-center py-10">
        <h1 className=" text-primary-blue text-center font-bold text-2xl pb-4">
          EXCLUSIVE 30% DISCOUNT FOR UAE RESIDENTS
        </h1>
        <p className=" text-primary-blue text-lg text-center lg:px-56">
          EXPERIENCE THE ULTIMATE IN LUXURY YACHT RENTALS AT UNBEATABLE PRICES,
          EXCLUSIVELY FOR UAE RESIDENTS. ENJOY A PERFECT BLEND OF QUALITY AND
          AFFORDABILITY, PROMISING A UNIQUE AND UNFORGETTABLE ADVENTURE ON THE
          WATER.
        </p>
      </div>
      <div className="container mx-auto p-2 lg:p-20 py-6">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 md:text-sm lg:text-sm">
            <thead>
              <tr className="bg-primary-blue text-white">
                <th className="border border-transparent p-3  text-primary-yellow">
                  YACHT
                </th>
                <th className="border border-transparent p-3  text-primary-yellow">
                  CAPACITY
                </th>
                <th className="border border-transparent p-3  text-primary-yellow">
                  REGULAR RATE/HOUR
                </th>
                <th className="border border-transparent p-3  text-primary-yellow">
                  DISCOUNTED 2-HOUR RATE
                </th>
                <th className="border border-transparent p-3  text-primary-yellow">
                  DISCOUNTED 3-HOUR RATE
                </th>
                <th className="border border-transparent p-3  text-primary-yellow">
                  DISCOUNTED 4-HOUR RATE
                </th>
                <th className="border border-transparent p-3  text-primary-yellow">
                  BOOKING
                </th>
              </tr>
            </thead>
            <tbody>
              {yachts.map((yacht, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-100"
                  } text-center text-sm`}
                >
                  <td className="border border-black p-2  font-bold">
                    {yacht.name}
                  </td>
                  <td className="border border-black p-2  font-bold">
                    {yacht.capacity}
                  </td>
                  <td className="border border-black p-2  font-bold">
                    {yacht.ratePerHour}
                  </td>
                  <td className="border border-black p-2  font-bold">
                    {yacht.rate2Hours}
                  </td>
                  <td className="border border-black p-2  font-bold">
                    {yacht.rate3Hours}
                  </td>
                  <td className="border border-black p-2  font-bold">
                    {yacht.rate4Hours}
                  </td>
                  <td className="border border-black p-2  font-bold bg-primary-yellow">
                    <button className="bg-primary-yellow text-black py-1 px-10 rounded-lg hover:bg-[#d49d3f] transition-all">
                      Book Now
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="container mx-auto flex flex-col  px-4">
        <h3 className="text-black  text-center font-bold">
          INCLUSIONS: WATER, SOFT DRINKS, WINES, AND BEERS.
        </h3>
        <div className="bg-primary-blue p-1 ">
          <h3 className=" font-bold text-center text-white text-md">
            DISCOUNTED RATES ARE VALID FOR BOOKINGS FROM 6AM-2PM (MORNING TRIPS)
            & 8 PM ONWARDS (NIGHT TRIPS)
          </h3>
        </div>
        <h3 className=" text-left md:text-center py-5">
          ESCAPE THE ORDINARY AND EMBARK ON A PRIVATE YACHT ADVENTURE WITH OUR
          LIMITED-TIME 40% DISCOUNT FOR UAE RESIDENTS. TO AVAIL THIS EXCLUSIVE
          OFFER, SIMPLY BOOK A MINIMUM 2-HOURS YACHT TOUR AND LET US TAKE CARE
          OF THE REST. ENJOY UNLIMITED DRINKS AND SNACKS DURING YOUR PRIVATE
          YACHT TOUR. WATERSPORTS ARE ALSO AVAILABLE ON REQUEST.
        </h3>
      </div>
      <div className="container mx-auto">
     
      </div>
      <div className="flex flex-col item-center justify-center py-10 px-5">
              <h1 className=" text-primary-blue-2 font-bold text-center">
                TERMS & CONDITION
              </h1>
              <ul className="list-disc md:list-none text-center  text-primary-blue text-sm pl-4 pt-5 space-y-2">
                <li>The Winter Offer is valid until 31 January 2025.</li>
                <li>This offer cannot be combined with other promotions.</li>
                <li>⁠A minimum booking duration of 2 hours is required.</li>
                <li>
                  ⁠The offer is exclusive to UAE residents (proof of residency
                  may be required).
                </li>
                <li>
                  Blackout dates: 1-3 December (National Day) and 20 December
                  2024 -01 January 2025
                </li>
                <li>⁠Terms are subject to change without prior notice.</li>
              </ul>
            </div>
            <section className="w-full p-4 container mx-auto space-y-10">
      {/* Outer container with gold background */}
      
      <div className="bg-primary-yellow flex items-center justify-between rounded-xl px-6 py-3">
        {/* Left Text */}
        <span className="text-primary-blue font-bold text-xl uppercase">
          EXPLORE MORE YACHT OFFERS
        </span>

        {/* Right Button */}
        <button className="blue-solid-button text-white">
          VIEW MORE
        </button>
      </div>
      <div className="flex flex-col md:flex-row rounded-lg md:px-10 xl:px-5 items-center  gap-5 justify-center  md:justify-between bg-transparent md:bg-primary-blue py-3">
                    <button className="text-white  font-bold bg-primary-blue px-5 py-3 text-xl rounded">
                      REACH OUT TO US
                    </button>
                    <div className=" flex flex-col md:flex-row md:gap-10 gap-5">
                      <button className="flex items-center justify-center gap-2 px-4 py-3 bg-primary-blue text-primary-yellow border border-primary-yellow-dark  font-bold rounded-md hover:bg-primary-blue-2 transition">
                        <FaWhatsapp size={20} />
                        WHATSAPP US
                      </button>
                      <button
                       
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-primary-blue text-primary-yellow border border-primary-yellow-dark  font-bold rounded-md hover:bg-primary-blue-2 transition"
                      >
                   SUMMER OFFERS
                      </button>
                    </div>
                  </div>
    </section>
    
    </>
  );
};

export default page;
