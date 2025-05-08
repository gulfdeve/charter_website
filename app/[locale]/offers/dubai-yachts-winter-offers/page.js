"use client";
import React, { useState } from "react";
import Videosharedtours from "../../../components/Video-sharedtours";
import { FaWhatsapp } from "react-icons/fa";
import Modal2 from "@/app/components/Modal2";
import VideoLocal from "@/app/components/VideoLocal";
import { FaUser } from "react-icons/fa";
import { IoIosPricetag } from "react-icons/io";
import { RiDiscountPercentFill } from "react-icons/ri";
import { FiArrowRight } from "react-icons/fi";
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
      name: "RIVERSIDE - 40FT",
      capacity: 12,
      ratePerHour: "AED 750",
      rate2Hours: "AED 1200",
      rate3Hours: "AED 1350",
      rate4Hours: "AED 1800",
    },
    {
      name: "VASSIA - 56FT",
      capacity: 28,
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
      capacity: 28,
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
      {/* <Videosharedtours /> */}
      <VideoLocal
        filename="/dubai-yachts-winter-offers.mp4"
        section="dubai-yachts-winter-offers"
      />

      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center py-10">
          <h2 className=" text-primary-blue text-center pb-4">
            UAE RESIDENTS YACHT OFFERS
          </h2>
          <p className=" text-primary-blue text-sm text-center">
            EXPLORE EXCLUSIVE WINTER YACHT RENTAL DEALS IN DUBAI WITH CENTAURUS
            CHARTER. BOOK YOUR LUXURIOUS YACHT CHARTER NOW AND ENJOY SPECIAL
            OFFERS THIS SEASON.
          </p>
        </div>
        <div className="py-6">
          <div className="block lg:hidden overflow-x-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5 ">
                    {yachts.map((yacht, index) => (
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
                            <p className="font-semibold text-base">3 Hours: <span className="text-black ml-4">{yacht.rate3Hours}</span></p>
                            <p className="font-semibold text-base">4 Hours: <span className="text-black ml-4">{yacht.rate4Hours}</span></p>
                            </div>
                          </div>
                        </div>
                        </div>
                        <a href={`https://fareharbor.com/embeds/book/centauruscharter/items/${yacht.fareharbor_id}/?full-items=yes&flow=645487`}
                                target="_self"
                                rel="noopener noreferrer" 
                                className="flex items-center mt-5 pt-3 group justify-between px-5 text-primary-blue-2 border-t border-gray-400">
                          <div className="btn-info">Book Now</div>
                          <FiArrowRight size={20} className=" text-lg transform md:group-hover:translate-x-4 transition-transform duration-300" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
          
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 md:text-sm lg:text-sm">
              <thead>
                <tr className="bg-primary-blue-light-1 text-primary-blue-2">
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
                {yachts.map((yacht, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-white" : "bg-primary-blue-light"
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
                      {yacht.rate3Hours}
                    </td>
                    <td className="font-Inter p-3 font-semibold">
                      {yacht.rate4Hours}
                    </td>
                    <td className="p-3 font-bold">
                      <button className="bg-primary-blue-2 hover:bg-primary-blue text-white rounded-lg transition-all flex text-center justify-center w-full px-3 py-2">
                        Book Now
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-black  text-center font-bold">
            INCLUSIONS: WATER, SOFT DRINKS, WINES, AND BEERS.
          </p>
          <div className="bg-primary-blue-2 p-4 ">
            <p className=" font-bold text-center text-white text-sm">
              DISCOUNTED RATES ARE VALID FOR BOOKINGS FROM 6AM-2PM (MORNING
              TRIPS) & 8 PM ONWARDS (NIGHT TRIPS)
            </p>
          </div>
          <p className="text-left py-5">
            DISCOVER DUBAI BY DAY OR UNDER THE STARS WITH OUR EXCLUSIVE MORNING
            AND NIGHT YACHT TOURS. FOR A LIMITED TIME, ENJOY 20% OFF ON 2-HOUR
            BOOKINGS AND A GENEROUS 40% OFF FOR BOOKINGS OF 3 HOURS OR MORE.
            WHETHER YOU'RE LOOKING TO RELAX UNDER THE MORNING SUN OR ENJOY THE
            VIBRANT SKYLINE AT NIGHT, WE HAVE THE PERFECT TOUR TO SUIT YOUR
            NEEDS.
          </p>
          <h2 className="text-left text-primary-blue-2 py-2">
            Discover Our Winter Yacht Charter Offers in Dubai
          </h2>
          <p className=" text-base text-left py-2">
            Are you ready to explore the crystal waters of Dubai this winter
            season? Centaurus Charter presents yacht charter special offers to
            give you the ultimate experience on the Arabian Gulf. Whether you
            want a calm morning ride or a magical evening cruise, our winter
            yacht deals are perfect for any event.
          </p>

          <h2 className="text-[20px] text-primary-grey text-left py-2">
            Morning Yacht Trips (6 AM - 2 PM) - Start Your Day on the Water
          </h2>
          <p className="text-primary-grey text-base text-left py-2">
            Begin your day with the refreshing sea breeze and the breathtaking
            skyline on one of our morning yacht tours. From 6 AM to 2 PM, we
            provide a serene yet luxurious journey, ideal for early risers who
            love to watch the sunrise over the iconic landmarks of Dubai. Take
            advantage with a 20% discount on bookings of 2 hours or a 40%
            discount on bookings of 3 hours or more. Our fleet of yachts is
            fully equipped to ensure your comfort and pleasure, offering you a
            top-notch experience to start your day.
          </p>
          <h2 className="text-[20px] text-primary-grey text-left py-2">
            Night Yacht Cruises (8 PM Onwards) - Sail Under the Stars
          </h2>
          <p className="text-primary-grey text-base text-left py-2">
            Experience the magic of city skyline illuminated under the night sky
            with our exclusive night cruises. Our evening trips, starting at 8
            PM, are ideal for romantic getaways, fun gatherings, or business
            events. Cruise near top attractions as the crisp winter breeze sets
            the stage for a magical ambiance. Book your night yacht cruise now
            with 20% off for 2-hour bookings and a remarkable 40% off for trips
            lasting 3 hours or more. Let Centaurus Charter be your guide to an
            unforgettable evening on the water.
          </p>
          <h2 className="text-[20px] text-primary-grey text-left py-2">
            Why Choose Centaurus Charter for Yacht Rentals in Dubai?
          </h2>
          <p className="text-primary-grey text-base text-left py-2">
            Centaurus Charter takes pride in delivering premium experiences with
            yacht bookings. Our yachts come with modern features, a skilled
            crew, and flexible options to make your trip special. Whether it's a
            casual day trip or an extravagant night out, our team is dedicated
            to making every moment special
          </p>
          <ul className="list-disc  text-primary-grey pl-3">
            <li>
              Customized Experiences: Create your perfect cruise with catering,
              entertainment, and custom décor.
            </li>
            <li>
              Professional Crew: Our skilled crew makes sure your trip is smooth
              and comfortable from start to finish.
            </li>
            <li>
              Variety of Yachts: Pick from our range of yachts, from small
              cruisers to large luxury options.
            </li>
          </ul>

          <h2 className="text-[20px] text-primary-grey text-left py-2">Special Offers and Booking Details</h2>
          <p className="text-primary-grey text-sm text-left py-2">
            To make the most of our yacht charter special offers, we recommend
            booking in advance, as slots fill up quickly during the winter time.
            Our team is available to assist you with all your booking needs and
            to answer any questions you might have about our packages. If you
            want a more personal touch, we have custom packages to fit your
            needs, making your time on board unforgettable.
          </p>
          <h2 className="text-[20px] text-primary-grey text-left py-2">Plan Your Next Yacht Adventure</h2>
          <p className="text-primary-grey text-sm text-left py-2">
            Don’t miss out on these limited-time winter yacht rental promotions.
            Save up to 40% on extended trips that promise unforgettable moments
            on the water. Book Now and experience the best luxury yacht rental
            Dubai has to offer, with Centaurus Charter leading the way!
          </p>
          <p className=" text-sm text-center py-2">
            T&Cs apply. Don't miss out—book now to take advantage of these
            incredible winter savings!
          </p>
          <div className="flex flex-col item-center justify-center py-10 px-5">
            <p className="text-black text-lg font-bold text-left">
              TERMS & CONDITION
            </p>
            <ul className="container mx-auto list-disc text-left text-primary-blue text-sm pl-4 pt-5">
              <li>The UAE Residents offer is valid until 31 May 2025.</li>
              <li>This offer cannot be combined with other promotions.</li>
              <li>⁠A minimum booking duration of 3 hours is required.</li>
              <li>
                ⁠The offer is exclusive to UAE residents (proof of residency may
                be required).
              </li>
              <li>Terms are subject to change without prior notice.</li>
              </ul>
          </div>
          <p className="text-black  text-center font-bold">
            RESERVE YOUR SPOT TODAY AND INDULGE IN A MEMORABLE YACHT ADVENTURES
            ONLY WITH CENTAURUS CHARTER!
          </p>

          <div className="py-10 w-full">
            <div className="flex flex-col md:flex-row rounded-lg items-center  gap-5 justify-center  md:justify-between bg-primary-blue p-5">
              <p className="text-white  text-center md:text-left font-bold bg-primary-blue text-xl rounded ">
                REACH OUT TO US
              </p>
              <div className="flex flex-col md:flex-row md:gap-10 gap-5">
                <a
                  target="_blank"
                  className="blue-lined-button"
                  href="https://wa.link/2c29ae"
                >
                  <FaWhatsapp size={20} />
                  WHATSAPP US
                </a>
                <button onClick={handlequote} className="blue-lined-button">
                  GET A QUOTE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal2
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        idName="offers_id"
        idValue="41"
      />
    </div>
  );
};

export default Page;
