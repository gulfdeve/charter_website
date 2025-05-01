"use client";
import React, { useState } from "react";
import Videoresidentoffers from "@/app/components/Videoresidentoffers";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Modal2 from "@/app/components/Modal2";
import { FaUser } from "react-icons/fa";
import { IoIosPricetag } from "react-icons/io";
import { RiDiscountPercentFill } from "react-icons/ri";
import { FiArrowRight } from "react-icons/fi";


const page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlequote = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const yachtsFortyOff = [
    {
      name: "THUNDER - 36FT",
      capacity: 10,
      ratePerHour: "AED 595",
      rate2Hours: "AED 950",
      rate3Hours: "AED 1070",
      rate4Hours: "AED 1430",
      fareharbor_id: "353083",
    },
    {
      name: "STORM - 36FT",
      capacity: 10,
      ratePerHour: "AED 595",
      rate2Hours: "AED 950",
      rate3Hours: "AED 1070",
      rate4Hours: "AED 1430",
      fareharbor_id: "429263",
    },
    {
      name: "VASSIA - 56FT",
      capacity: 21,
      ratePerHour: "AED 1040",
      rate2Hours: "AED 1665",
      rate3Hours: "AED 1870",
      rate4Hours: "AED 2495",
      fareharbor_id: "340280",
    },
    {
      name: "ETOSHA - 58FT",
      capacity: 28,
      ratePerHour: "AED 1080",
      rate2Hours: "AED 1730",
      rate3Hours: "AED 1945",
      rate4Hours: "AED 2590",
      fareharbor_id: "340265",
    },
    {
      name: "LAGOONA - 56FT",
      capacity: 24,
      ratePerHour: "AED 1150",
      rate2Hours: "AED 1840",
      rate3Hours: "AED 2070",
      rate4Hours: "AED 2760",
      fareharbor_id: "340459",
    },
    {
      name: "SILVER CREEK - 61FT",
      capacity: 30,
      ratePerHour: "AED 1250",
      rate2Hours: "AED 1995",
      rate3Hours: "AED 2250",
      rate4Hours: "AED 3000",
      fareharbor_id: "340286",
    },
  ];
  const yachtsThirtyOff = [
    {
      name: "THUNDER - 36FT",
      capacity: 10,
      ratePerHour: "AED 575",
      rate2Hours: "AED 800",
      rate3Hours: "AED 1200",
      rate4Hours: "AED 1600",
      fareharbor_id: "353083",
    },
    {
      name: "STORM - 36FT",
      capacity: 10,
      ratePerHour: "AED 575",
      rate2Hours: "AED 800",
      rate3Hours: "AED 1200",
      rate4Hours: "AED 1600",
      fareharbor_id: "429263",
    },
    {
      name: "VASSIA - 56FT",
      capacity: 21,
      ratePerHour: "AED 990",
      rate2Hours: "AED 1390",
      rate3Hours: "AED 2085",
      rate4Hours: "AED 2780",
      fareharbor_id: "340280",
    },
    {
      name: "ETOSHA - 58FT",
      capacity: 28,
      ratePerHour: "AED 990",
      rate2Hours: "AED 1390",
      rate3Hours: "AED 2085",
      rate4Hours: "AED 2780",
      fareharbor_id: "340265",
    },
    {
      name: "LAGOONA - 56FT",
      capacity: 24,
      ratePerHour: "AED 1070",
      rate2Hours: "AED 1500",
      rate3Hours: "AED 2250",
      rate4Hours: "AED 3000",
      fareharbor_id: "340459",
    },
    {
      name: "SILVER CREEK - 61FT",
      capacity: 30,
      ratePerHour: "AED 1150",
      rate2Hours: "AED 1610",
      rate3Hours: "AED 2415",
      rate4Hours: "AED 3220",
      fareharbor_id: "340286",
    },
  ];
  return (
    <>
      <div>
        <Videoresidentoffers />
      </div>
      <div className="container mx-auto flex flex-col items-center justify-center pt-6 lg:pt-10">
        <h3 className=" text-primary-blue text-center font-bold  pb-4">
          EXCLUSIVE 40% DISCOUNT FOR UAE RESIDENTS
        </h3>
        <p className=" text-primary-blue text-md text-center">  
          Experience the ultimate in luxury yacht rentals at unbeatable prices, Exclusively for UAE Residents. Enjoy a perfect blend of Quality and Affordability, promising a unique and unforgettable adventure on the Water.
        </p>
      </div>

      <div className="container mx-auto p-3 lg:p-5 py-6">
      <div className="block lg:hidden overflow-x-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5 ">
          {yachtsFortyOff.map((yacht, index) => (
            <div key={index} className="w-full border-2 rounded-lg border-gray-300 p-4">
              <h2 className=" font-bold mb-4">{yacht.name}</h2>
              <div className="font-Inter">
              <div className="grid grid-cols-1 s:grid-cols-2 md:grid-cols-1 gap-x-4">
              <div className="flex flex-col mb-4">
                <div className="flex"><IoIosPricetag size={20} className="mr-3 mt-1 text-primary-blue-light-2"/>
                  <p className="flex flex-col text-sm text-primary-grey">Regular Rate/Hour:
                <span className=" font-semibold text-base text-black mt-2">{yacht.ratePerHour}</span></p></div>
              </div>
              <div className="flex flex-col mb-4">
                <div className="flex"><FaUser size={20} className="mr-3 mt-1 text-primary-blue-light-2"/>
                  <p className="flex flex-col text-sm text-primary-grey">Capacity:
                <span className=" font-semibold text-base text-black mt-2">{yacht.capacity}</span></p></div>
              </div>
              </div>
              <div className="flex flex-col mb-4">
                <div className="flex"><RiDiscountPercentFill size={20} className="mr-3 mt-1 text-primary-blue-light-2"/>
                  <div className="flex flex-col text-sm text-primary-grey">Discounted Rate:
                  <p className="font-semibold text-base mt-2">2 Hours: <span className="text-black ml-4">{yacht.rate2Hours}</span></p>
                  <p className="font-semibold text-base">3 Hours: <span className="text-black ml-4">{yacht.rate3Hours}</span></p>
                  <p className="font-semibold text-base">4 Hours: <span className="text-black ml-4">{yacht.rate4Hours}</span></p>
                  </div>
                </div>
              </div>
              </div>
              <div className="flex items-center mt-5 pt-3 group justify-between px-5 text-primary-blue-2 border-t border-gray-400">
                <div className="btn-info">Book Now</div>
                <FiArrowRight size={20} className=" text-lg transform md:group-hover:translate-x-4 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 md:text-sm lg:text-sm ">
            <thead>
              <tr className="bg-[#f1f1f1] text-primary-blue-2">
                <th className=" px-3 py-5  ">
                  YACHT
                </th>
                <th className=" px-3 py-5">
                  CAPACITY
                </th>
                <th className=" px-3 py-5">
                  REGULAR RATE/HOUR
                </th>
                <th className=" px-3 py-5">
                  DISCOUNTED 2-HOUR RATE
                </th>
                <th className=" px-3 py-5">
                  DISCOUNTED 3-HOUR RATE
                </th>
                <th className=" px-3 py-5">
                  DISCOUNTED 4-HOUR RATE
                </th>
                <th className=" px-3 py-5">
                  
                </th>
              </tr>
            </thead>
            <tbody>
              {yachtsFortyOff.map((yacht, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-[#fafafa]"
                  } text-center text-sm`}
                >
                  <td className="font-Inter p-3 font-semibold">
                    {yacht.name}
                  </td>
                  <td className="font-Inter p-3 font-semibold">
                    {yacht.capacity}
                  </td>
                  <td className="font-Inter p-3 font-semibold">
                    {yacht.ratePerHour}
                  </td>
                  <td className="font-Inter p-3 font-semibold">
                    {yacht.rate2Hours}
                  </td>
                  <td className="font-Inter p-3 font-semibold">
                    {yacht.rate3Hours}
                  </td>
                  <td className="font-Inter p-3 font-semibold">
                    {yacht.rate4Hours}
                  </td>
                  <td className="p-3 font-bold">
                    <a
                      href={`https://fareharbor.com/embeds/book/centauruscharter/items/${yacht.fareharbor_id}/?full-items=yes&flow=645487`}
                      target="_self"
                      rel="noopener noreferrer"
                      className="bg-primary-blue-2 hover:bg-primary-blue
     text-white rounded-lg transition-all flex text-center w-full px-3 py-2
  "
                    >
                      Book Now
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>

      <div className="container mx-auto flex flex-col  px-4">
        <h3 className="text-black text-base text-center font-bold pb-5">
          INCLUSIONS: WATER, SOFT DRINKS, WINES, AND BEERS.
        </h3>
        <div className="bg-primary-blue-4 p-0.5 ">
          <h3 className=" font-bold text-center text-white text-[1rem]">
            DISCOUNTED RATES ARE VALID FOR BOOKINGS FROM 6AM-2PM (MORNING TRIPS)
            & 8 PM ONWARDS (NIGHT TRIPS)
          </h3>
        </div>
        <p className=" text-left md:text-center italic text-primary-grey py-5">
        Escape the ordinary and embark on a private yacht adventure with our limited-time 40% discount for UAE residents. To avail this exclusive offer, simply book a minimum 2-hours yacht tour and let us take care of the rest. Enjoy unlimited drinks and snacks during your private yacht tour. Watersports are also available on request.
        </p>
      </div>
      <div className="container mx-auto">
        <hr className="my-5 border border-primary-blue"></hr>
      </div>
      <div className="container mx-auto flex flex-col items-center justify-center pt-5 ">
        <h3 className=" text-primary-blue text-center font-bold  pb-4">
          EXCLUSIVE 30% DISCOUNT FOR UAE RESIDENTS
        </h3>
        <p className=" text-primary-blue text-center">
        Take advantage of our special offer with a 30% discount on luxury yacht rentals during primetime hours. Experience the same quality and luxury at a reduced rate.
        </p>
      </div>
      <div className="container mx-auto p-3 lg:p-5 py-6">
      <div className="block lg:hidden overflow-x-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5 ">
          {yachtsThirtyOff.map((yacht, index) => (
            <div key={index} className="w-full border-2 rounded-lg border-gray-300 p-4">
              <h2 className=" font-bold mb-4">{yacht.name}</h2>
              <div className="font-Inter">
              <div className="grid grid-cols-1 s:grid-cols-2 md:grid-cols-1 gap-x-4">
              <div className="flex flex-col mb-4">
                <div className="flex"><IoIosPricetag size={20} className="mr-3 mt-1 text-primary-blue-light-2"/>
                  <p className="flex flex-col text-sm text-primary-grey">Regular Rate/Hour:
                <span className=" font-semibold text-base text-black mt-2">{yacht.ratePerHour}</span></p></div>
              </div>
              <div className="flex flex-col mb-4">
                <div className="flex"><FaUser size={20} className="mr-3 mt-1 text-primary-blue-light-2"/>
                  <p className="flex flex-col text-sm text-primary-grey">Capacity:
                <span className=" font-semibold text-base text-black mt-2">{yacht.capacity}</span></p></div>
              </div>
              </div>
              <div className="flex flex-col mb-4">
                <div className="flex"><RiDiscountPercentFill size={20} className="mr-3 mt-1 text-primary-blue-light-2"/>
                  <div className="flex flex-col text-sm text-primary-grey">Discounted Rate:
                  <p className="font-semibold text-base mt-2">2 Hours: <span className="text-black ml-4">{yacht.rate2Hours}</span></p>
                  <p className="font-semibold text-base">3 Hours: <span className="text-black ml-4">{yacht.rate3Hours}</span></p>
                  <p className="font-semibold text-base">4 Hours: <span className="text-black ml-4">{yacht.rate4Hours}</span></p>
                  </div>
                </div>
              </div>
              </div>
              <div className="flex items-center mt-5 pt-3 group justify-between px-5 text-primary-blue-2 border-t border-gray-400">
                <div className="btn-info">Book Now</div>
                <FiArrowRight size={20} className=" text-lg transform md:group-hover:translate-x-4 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 md:text-sm lg:text-sm ">
            <thead>
              <tr className="bg-[#f1f1f1] text-primary-blue-2">
                <th className="px-3 py-5">
                  YACHT
                </th>
                <th className="px-3 py-5">
                  CAPACITY
                </th>
                <th className="px-3 py-5">
                  REGULAR RATE/HOUR
                </th>
                <th className="px-3 py-5">
                  DISCOUNTED 2-HOUR RATE
                </th>
                <th className="px-3 py-5">
                  DISCOUNTED 3-HOUR RATE
                </th>
                <th className="px-3 py-5">
                  DISCOUNTED 4-HOUR RATE
                </th>
                <th className="px-3 py-5">
                  
                </th>
              </tr>
            </thead>
            <tbody>
              {yachtsThirtyOff.map((yacht, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-[#fafafa]"
                  } text-center text-sm`}
                >
                  <td className="font-Inter p-3 font-semibold">
                    {yacht.name}
                  </td>
                  <td className="font-Inter p-3 font-semibold">
                    {yacht.capacity}
                  </td>
                  <td className="font-Inter p-3 font-semibold">
                    {yacht.ratePerHour}
                  </td>
                  <td className="font-Inter p-3 font-semibold">
                    {yacht.rate2Hours}
                  </td>
                  <td className="font-Inter p-3 font-semibold">
                    {yacht.rate3Hours}
                  </td>
                  <td className="font-Inter p-3 font-semibold">
                    {yacht.rate4Hours}
                  </td>

                  <td className="p-3 font-bold">
                  <a
                      href={`https://fareharbor.com/embeds/book/centauruscharter/items/${yacht.fareharbor_id}/?full-items=yes&flow=645487`}
                      target="_self"
                      rel="noopener noreferrer"
                      className=" bg-primary-blue-2 hover:bg-primary-blue   text-white rounded-lg transition-all flex text-center w-full px-3 py-2"
                    >
                      Book Now
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="container mx-auto flex flex-col  px-4">
        <h3 className="text-black text-base text-center font-bold pb-5">
          INCLUSIONS: WATER, SOFT DRINKS, WINES, AND BEERS.
        </h3>
        <div className="bg-primary-blue-4 p-0.5 ">
          <h3 className=" font-bold text-center text-white text-[1rem]">
            DISCOUNTED RATES: VALID FOR BOOKINGS FROM 4 PM TO 7 PM (PRIMETIME).
          </h3>
        </div>
        <p className="text-left md:text-center italic text-primary-grey py-5">
        Escape the ordinary and set sail on a private yacht adventure with our limited-time 30% discount for UAE residents. To avail this exclusive offer, simply book a minimum 2-hours yacht tour and let us take care of the rest. Enjoy unlimited drinks and snacks during your private yacht tour. Watersports are also available on request.
        </p>
      </div>
      <div className="container mx-auto">
        <div className=" flex flex-col item-center justify-center py-2 px-5">
          <h5 className=" text-black text-lg  text-left">
            TERMS & CONDITIONS
          </h5>
          <ul className="container mx-auto list-disc text-left text-primary-blue text-sm pl-4 pt-5">
            
            <li className="mb-1">The summer offer is valid from June 1st to September 15th, 2025</li>
            <li className="mb-1">This offer cannot be combined with other promotions.</li>
            <li className="mb-1">
            ⁠A minimum booking duration of 3 hours is required.
            </li>
            <li className="mb-1">
            ⁠The offer is exclusive to UAE residents (proof of residency may be required).
            </li>
            <li className="mb-1">
            The offer is not valid on public holidays
            </li>
            <li className="mb-1">
            Drinks are included with bookings of 3 hours or more
            </li>
            <li className="mb-1">
            ⁠Terms are subject to change without prior notice.
            </li>
          </ul>

          <h6 className="font-bold uppercase text-left py-7">
            BOOK NOW AND ENJOY AN UNFORGETTABLE YACHT EXPERIENCE WITH CENTAURUS
            CHARTER!
          </h6>
        </div>
      </div>

      <section className="w-full p-4 container mx-auto space-y-10">
        {/* Outer container with gold background */}

        <div className="container bg-primary-yellow flex items-center justify-between rounded-xl py-3">
          {/* Left Text */}
          <span className="text-primary-blue font-bold text-lg uppercase">
            EXPLORE MORE YACHT OFFERS
          </span>

          {/* Right Button */}
          <Link href="/offers">
            <button
              className="px-10 py-2
          text-base font-bold tracking-wider uppercase
           bg-primary-blue
           
        shadow
          transition duration-150 ease-in-out transform rounded-md text-white"
            >
              VIEW MORE
            </button>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row rounded-xl md:px-10 xl:px-5 items-center  gap-5 justify-center  md:justify-between bg-transparent md:bg-primary-blue py-3">
          <button className="text-white  font-bold bg-primary-blue px-5 py-3 text-xl rounded">
            REACH OUT TO US
          </button>
          <div className=" flex flex-col md:flex-row md:gap-10 gap-5">
            <Link href={"https://wa.link/eyg3by"}>
              <button className="flex items-center justify-center gap-3 px-10 py-2 bg-primary-blue text-primary-yellow border border-primary-yellow-dark  font-bold rounded-md  transition">
                <FaWhatsapp size={20} />
                WHATSAPP US
              </button>
            </Link>
            <button
              onClick={handlequote}
              className="flex items-center justify-center gap-3 px-10 py-2 bg-primary-blue text-primary-yellow border border-primary-yellow-dark  font-bold rounded-md  transition"
            >
              SUMMER OFFERS
            </button>
          </div>
        </div>
        <Modal2
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          idName="offers_id"
          idValue="44"
        />
      </section>
    </>
  );
};

export default page;
