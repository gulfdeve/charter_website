"use client";
import React, { useState } from "react";
import Videosharedtours from "../../../components/Video-sharedtours";
import { FaWhatsapp } from "react-icons/fa";
import Modal2 from "@/app/components/Modal2";
const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlequote = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
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
    <div>
      <Videosharedtours />
      <div className="bg-white h-full w-full mt-14 md:mt-0">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center py-10">
            <h1 className=" text-primary-blue text-center font-bold text-2xl pb-4">
              UAE RESIDENTS YACHT OFFERS
            </h1>
            <p className=" text-primary-blue text-sm text-center">
              EXPLORE EXCLUSIVE WINTER YACHT RENTAL DEALS IN DUBAI WITH
              CENTAURUS CHARTER. BOOK YOUR LUXURIOUS YACHT CHARTER NOW AND ENJOY
              SPECIAL OFFERS THIS SEASON.
            </p>
          </div>
          <div className="container mx-auto p-20 py-6">
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
          <div className="flex flex-col  px-4 xl:px-44">
            <h3 className="text-black  text-center font-bold">
              INCLUSIONS: WATER, SOFT DRINKS, WINES, AND BEERS.
            </h3>
            <div className="bg-primary-blue-2 p-4 ">
              <h3 className=" font-bold text-center text-white text-sm">
                DISCOUNTED RATES ARE VALID FOR BOOKINGS FROM 6AM-2PM (MORNING
                TRIPS) & 8 PM ONWARDS (NIGHT TRIPS)
              </h3>
            </div>
            <h3 className=" text-left py-5">
              DISCOVER DUBAI BY DAY OR UNDER THE STARS WITH OUR EXCLUSIVE
              MORNING AND NIGHT YACHT TOURS. FOR A LIMITED TIME, ENJOY 20% OFF
              ON 2-HOUR BOOKINGS AND A GENEROUS 40% OFF FOR BOOKINGS OF 3 HOURS
              OR MORE. WHETHER YOU'RE LOOKING TO RELAX UNDER THE MORNING SUN OR
              ENJOY THE VIBRANT SKYLINE AT NIGHT, WE HAVE THE PERFECT TOUR TO
              SUIT YOUR NEEDS.
            </h3>
            <h1 className="text-2xl  text-left py-2">
              Discover Our Winter Yacht Charter Offers in Dubai
            </h1>
            <h3 className=" text-sm text-left py-2">
              Are you ready to explore the crystal waters of Dubai this winter
              season? Centaurus Charter presents yacht charter special offers to
              give you the ultimate experience on the Arabian Gulf. Whether you
              want a calm morning ride or a magical evening cruise, our winter
              yacht deals are perfect for any event.
            </h3>

            <h1 className="text-2xl  text-left py-2">
              Morning Yacht Trips (6 AM - 2 PM) - Start Your Day on the Water
            </h1>
            <p className=" text-sm text-left py-2">
              Begin your day with the refreshing sea breeze and the breathtaking
              skyline on one of our morning yacht tours. From 6 AM to 2 PM, we
              provide a serene yet luxurious journey, ideal for early risers who
              love to watch the sunrise over the iconic landmarks of Dubai. Take
              advantage with a 20% discount on bookings of 2 hours or a 40%
              discount on bookings of 3 hours or more. Our fleet of yachts is
              fully equipped to ensure your comfort and pleasure, offering you a
              top-notch experience to start your day.
            </p>
            <h1 className="text-2xl  text-left py-2">
              Night Yacht Cruises (8 PM Onwards) - Sail Under the Stars
            </h1>
            <p className=" text-sm text-left py-2">
              Experience the magic of city skyline illuminated under the night
              sky with our exclusive night cruises. Our evening trips, starting
              at 8 PM, are ideal for romantic getaways, fun gatherings, or
              business events. Cruise near top attractions as the crisp winter
              breeze sets the stage for a magical ambiance. Book your night
              yacht cruise now with 20% off for 2-hour bookings and a remarkable
              40% off for trips lasting 3 hours or more. Let Centaurus Charter
              be your guide to an unforgettable evening on the water.
            </p>
            <h1 className="text-2xl  text-left py-2">
              Why Choose Centaurus Charter for Yacht Rentals in Dubai?
            </h1>
            <p className=" text-sm text-left py-2">
              Centaurus Charter takes pride in delivering premium experiences
              with yacht bookings. Our yachts come with modern features, a
              skilled crew, and flexible options to make your trip special.
              Whether it's a casual day trip or an extravagant night out, our
              team is dedicated to making every moment special
            </p>
            <ul className="list-disc  text-black pl-3">
              <li>
                Customized Experiences: Create your perfect cruise with
                catering, entertainment, and custom décor.
              </li>
              <li>
                Professional Crew: Our skilled crew makes sure your trip is
                smooth and comfortable from start to finish.
              </li>
              <li>
                Variety of Yachts: Pick from our range of yachts, from small
                cruisers to large luxury options.
              </li>
            </ul>

            <h1 className="text-2xl  text-left py-2">
              Special Offers and Booking Details
            </h1>
            <p className=" text-sm text-left py-2">
              To make the most of our yacht charter special offers, we recommend
              booking in advance, as slots fill up quickly during the winter
              time. Our team is available to assist you with all your booking
              needs and to answer any questions you might have about our
              packages. If you want a more personal touch, we have custom
              packages to fit your needs, making your time on board
              unforgettable.
            </p>
            <h1 className="text-2xl  text-left py-2">
              Plan Your Next Yacht Adventure
            </h1>
            <p className=" text-sm text-left py-2">
              Don’t miss out on these limited-time winter yacht rental
              promotions. Save up to 40% on extended trips that promise
              unforgettable moments on the water. Book Now and experience the
              best luxury yacht rental Dubai has to offer, with Centaurus
              Charter leading the way!
            </p>
            <p className=" text-sm text-center py-2">
              T&Cs apply. Don't miss out—book now to take advantage of these
              incredible winter savings!
            </p>
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
            <h3 className="text-black  text-center font-bold">
              RESERVE YOUR SPOT TODAY AND INDULGE IN A MEMORABLE YACHT
              ADVENTURES ONLY WITH CENTAURUS CHARTER!
            </h3>
            <div className="py-5 ">
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
                    onClick={handlequote}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-primary-blue text-primary-yellow border border-primary-yellow-dark  font-bold rounded-md hover:bg-primary-blue-2 transition"
                  >
                    GET A QUOTE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
       {/* Modal Component */}
       <Modal2 isModalOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default Page;
