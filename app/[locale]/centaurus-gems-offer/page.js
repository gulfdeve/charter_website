"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import Modal2 from "@/app/components/Modal2";
import ExperienceCarousal from "@/app/components/ExperienceCarousal";
import ExperiencesCarousel from "@/app/components/ExperienceMobilecarousal";
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlequote = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <><main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[33vh] md:h-[70vh] overflow-hidden">
        <div className="flex items-center justify-center pt-10">
          <Image
            src="/GEMS-Offer-Banner.png" // replace with your banner image
            alt="Hero background"
            width={1000}
            height={1000} />
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        {/* Headings */}
        <div className="text-center mb-8">
          <h3 className="text-xl md:text-2xl font-bold mb-2">
            Exclusive Yacht Charter Discounts for GEMS Rewards Members
          </h3>
          <p className="text-lg text-gray-700">
            Hero Offer -{" "}
            <span className="font-semibold text-red-600">50% OFF</span> Morning Yacht Rentals
          </p>
        </div>

        {/* Body Text */}
        <div className="text-gray-600 leading-relaxed text-center text-sm space-y-4">
          <p>
            We’re thrilled to announce a special collaboration between GEMS Education and Centaurus
            Charter, bringing you an exclusive offer for a 50% discount on a one-time 3-hour morning
            yacht rental. This incredible offer is available during the morning timings (6 AM – 2
            PM), giving you the chance to enjoy the calm waters and stunning views of Dubai’s
            coastline at half the price. Your journey will include welcome drinks upon arrival,
            ensuring a refreshing start to your luxurious experience on board. Don’t miss out on
            this limited-time deal to experience the best of Dubai from the water.
          </p>

          <p className="text-xl text-black font-bold">
            20% OFF Afternoon Yacht Rentals & 40% OFF Extended Bookings
          </p>

          <p>
            Take your yacht experience to the next level with our <strong>exclusive 20% discount</strong>
            on afternoon yacht rentals from <strong>2 PM – 8 PM</strong>. Explore the beauty of Dubai’s
            iconic coastline, including breathtaking views of JBR, Atlantis, Burj Al Arab, and Blue Waters.
            Whether you’re looking to celebrate with friends and family or simply want an afternoon on the
            water, we’ll leave you with unforgettable memories.
          </p>
          <p>
            For those seeking more flexibility, we’re also offering a <strong>40% discount</strong> on bookings
            for <strong>4 hours</strong> during early morning (<strong>6 AM – 10 AM</strong>) or evening
            (<strong>8 PM – 12 AM</strong>). This extended timeframe allows you to experience even more
            of Dubai’s stunning landmarks and luxurious waterfront views.
          </p>
          <p>
            All packages depart from <strong>Dubai Marina, Dubai Harbour & Marasi Bay Marina</strong>
            locations, giving you the chance to embark on your unforgettable yacht journey. And to top it off,
            welcome drinks are included in your booking, ensuring you start your yacht trip in style.
          </p>
          <p>
            Check the table below for detailed pricing and more information.
          </p>

          <p>
            <strong>Book now</strong> to experience luxury like never before!
          </p>
        </div>

        {/* Pricing Table */}
        <div className="overflow-x-auto mt-8">
          <table className="w-full text-sm text-center border-collapse">
            {/* Table Header */}
            <thead className="bg-[#0B2946] text-white font-bold">
              <tr className="border border-white">
                <th scope="col" className="py-3 px-4 border-r border-white last:border-r-0">
                  YACHT
                </th>
                <th scope="col" className="py-3 px-4 border-r border-white last:border-r-0">
                  CAPACITY
                </th>
                <th scope="col" className="py-3 px-4 border-r border-white last:border-r-0">
                  RATE / HOUR
                  <br />
                  <span className="text-xs font-normal">
                    (20% OFF from 2pm until 8pm)
                  </span>
                </th>
                <th scope="col" className="py-3 px-4 last:border-r-0">
                  RATE / 4 HOURS
                  <br />
                  <span className="text-xs font-normal">
                    (40% OFF between 6am to 2pm or 8pm until 2am)
                  </span>
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="font-bold">
              {/* Row 1 (White) */}
              <tr className="bg-white border border-white">
                <td className="py-3 px-4 border-r border-white last:border-r-0">
                  SILVER CRAFT - 35FT
                </td>
                <td className="py-3 px-4 border-r border-white last:border-r-0">10</td>
                <td className="py-3 px-4 border-r border-white last:border-r-0">
                  <del className="text-red-500 mr-1">AED 475</del> AED 350
                </td>
                <td className="py-3 px-4 last:border-r-0">
                  <del className="text-red-500 mr-1">AED 1430</del> AED 1144
                </td>
              </tr>

              {/* Row 2 (Gray) */}
              <tr className="bg-gray-100 border border-white">
                <td className="py-3 px-4 border-r border-white last:border-r-0">
                  RIVERSIDE - 40FT
                </td>
                <td className="py-3 px-4 border-r border-white last:border-r-0">12</td>
                <td className="py-3 px-4 border-r border-white last:border-r-0">
                  <del className="text-red-500 mr-1">AED 600</del> AED 480
                </td>
                <td className="py-3 px-4 last:border-r-0">
                  <del className="text-red-500 mr-1">AED 1800</del> AED 1440
                </td>
              </tr>

              {/* Row 3 (White) */}
              <tr className="bg-white border border-white">
                <td className="py-3 px-4 border-r border-white last:border-r-0">
                  VASSIA - 50FT
                </td>
                <td className="py-3 px-4 border-r border-white last:border-r-0">21</td>
                <td className="py-3 px-4 border-r border-white last:border-r-0">
                  <del className="text-red-500 mr-1">AED 630</del> AED 504
                </td>
                <td className="py-3 px-4 last:border-r-0">
                  <del className="text-red-500 mr-1">AED 1890</del> AED 1512
                </td>
              </tr>

              {/* Row 4 (Gray) */}
              <tr className="bg-gray-100 border border-white">
                <td className="py-3 px-4 border-r border-white last:border-r-0">
                  ETOSHA - 58FT
                </td>
                <td className="py-3 px-4 border-r border-white last:border-r-0">28</td>
                <td className="py-3 px-4 border-r border-white last:border-r-0">
                  <del className="text-red-500 mr-1">AED 865</del> AED 692
                </td>
                <td className="py-3 px-4 last:border-r-0">
                  <del className="text-red-500 mr-1">AED 2600</del> AED 2080
                </td>
              </tr>

              {/* Row 5 (White) */}
              <tr className="bg-white border border-white">
                <td className="py-3 px-4 border-r border-white last:border-r-0">
                  LAGOONA - 56FT
                </td>
                <td className="py-3 px-4 border-r border-white last:border-r-0">24</td>
                <td className="py-3 px-4 border-r border-white last:border-r-0">
                  <del className="text-red-500 mr-1">AED 900</del> AED 720
                </td>
                <td className="py-3 px-4 last:border-r-0">
                  <del className="text-red-500 mr-1">AED 2800</del> AED 2240
                </td>
              </tr>

              {/* Row 6 (Gray) */}
              <tr className="bg-gray-100 border border-white">
                <td className="py-3 px-4 border-r border-white last:border-r-0">
                  SILVERCREEK - 61FT
                </td>
                <td className="py-3 px-4 border-r border-white last:border-r-0">30</td>
                <td className="py-3 px-4 border-r border-white last:border-r-0">
                  <del className="text-red-500 mr-1">AED 995</del> AED 796
                </td>
                <td className="py-3 px-4 last:border-r-0">
                  <del className="text-red-500 mr-1">AED 3200</del> AED 2560
                </td>
              </tr>

              {/* Row 7 (White) */}
              <tr className="bg-white border border-white">
                <td className="py-3 px-4 border-r border-white last:border-r-0">
                  IKRONOS - 68FT
                </td>
                <td className="py-3 px-4 border-r border-white last:border-r-0">38</td>
                <td className="py-3 px-4 border-r border-white last:border-r-0">
                  <del className="text-red-500 mr-1">AED 1100</del> AED 880
                </td>
                <td className="py-3 px-4 last:border-r-0">
                  <del className="text-red-500 mr-1">AED 3200</del> AED 2560
                </td>
              </tr>

              {/* Row 8 (Gray) */}
              <tr className="bg-gray-100 border border-white">
                <td className="py-3 px-4 border-r border-white last:border-r-0">
                  POSEIDON - 118FT
                </td>
                <td className="py-3 px-4 border-r border-white last:border-r-0">40</td>
                <td className="py-3 px-4 border-r border-white last:border-r-0">
                  <del className="text-red-500 mr-1">AED 1980</del> AED 1584
                </td>
                <td className="py-3 px-4 last:border-r-0">
                  <del className="text-red-500 mr-1">AED 7920</del> AED 6336
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Promo Boxes (Similar to the screenshot) */}
        <div className=" mt-8 space-y-4 max-w-lg mx-auto">
          {/* Afternoon Discount Box */}
          <div className="bg-[#0B2946] text-white text-center p-4">
            <p className="text-lg font-bold">20% off in our yacht rental bookings in afternoon</p>
            <p>(From 2pm until 8 PM)</p>
          </div>

          {/* Extended Booking Discount Box */}
          <div className="bg-[#0B2946] text-white text-center p-4">
            <p className="text-lg font-bold">
              40% discount when booking 4 hours in early morning or evening time
            </p>
            <p>(Between 6 am to 2 pm or between 8 pm until 2 am)</p>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="mt-8">
          <h4 className="text-lg font-bold text-[#0B2946] mb-2">Terms & Conditions:</h4>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Minimum Booking Rental 3 Hours</li>
            <li>
              This discount cannot be used in conjunction with any other discount or promotional
              offer
            </li>
            <li>Bookings must be done via WhatsApp</li>
            <li>Strongly advise to reconfirm if any changes and beers included (limited basis)</li>
            <li>Full amount to be paid to confirm your booking</li>
            <li>Not valid on public holidays and festive seasons</li>
          </ul>
        </div>

        {/* Cancellation Policy */}
        <div className="mt-6">
          <h4 className="text-lg font-bold text-[#0B2946] mb-2">Cancellation Policy</h4>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Cancellations 72 hours prior the booking free of charge</li>
            <li>Cancellations 48 hours prior will get 50% refund</li>
            <li>Cancellations 24 hours prior will be non-refundable</li>
          </ul>
        </div>

        {/* Final CTA */}
        <div className="my-8 text-center text-sm text-gray-800 font-semibold">
          RESERVE YOUR SPOT TODAY AND INDULGE IN A MEMORABLE YACHT ADVENTURE ONLY WITH CENTAURUS
          CHARTER!
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
              onClick={handlequote}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-primary-blue text-primary-yellow border border-primary-yellow-dark  font-bold rounded-md hover:bg-primary-blue-2 transition"
            >
              GET A QUOTE
            </button>
          </div>
        </div>
        <Modal2 isModalOpen={isModalOpen} closeModal={closeModal} />
      </section>
    </main><ExperienceCarousal />
   
    </>
  );
}
