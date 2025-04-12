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
    <>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="container mx-auto relative w-full">
          <div className="flex items-center justify-center pt-10">
            <Image
              src="/GEMS-Offer-Banner.png" // replace with your banner image
              alt="Hero background"
              width={1000}
              height={0}
            />
          </div>
        </section>

        {/* Content Section */}
        <section className="container mx-auto px-4 py-8">
          {/* Headings */}
          <div className="text-center mb-8 text-primary-blue">
            <h1 className="text-xl md:text-2xl font-bold mb-2">
              Exclusive Yacht Charter Discounts for GEMS Rewards Members
            </h1>
            <h2 className="text-lg font-bold">
              Hero Offer - 50% OFF Morning Yacht Rentals
            </h2>
          </div>

          {/* Body Text */}
          <div className="text-black leading-relaxed text-center text-sm space-y-4">
            <p>
              We’re thrilled to announce a special collaboration between GEMS
              Education and Centaurus Charter, bringing you an exclusive offer
              for a 50% discount on a one-time 3-hour morning yacht rental. This
              incredible offer is available during the morning timings (6 AM – 2
              PM), giving you the chance to enjoy the calm waters and stunning
              views of Dubai’s coastline at half the price. Your journey will
              include welcome drinks upon arrival, ensuring a refreshing start
              to your luxurious experience on board. Don’t miss out on this
              limited-time deal to experience the best of Dubai from the water.
            </p>

            <h2 className="text-xl text-black font-bold">
              20% OFF Afternoon Yacht Rentals & 40% OFF Extended Bookings
            </h2>

            <p>
              Take your yacht experience to the next level with our{" "}
              <strong>exclusive 20% discount</strong>
              on afternoon yacht rentals from <strong>2 PM – 8 PM</strong>.
              Explore the beauty of Dubai’s iconic coastline, including
              breathtaking views of JBR, Atlantis, Burj Al Arab, and Blue
              Waters. Whether you’re looking to celebrate with friends and
              family or simply want an afternoon on the water, we’ll leave you
              with unforgettable memories.
            </p>
            <p>
              For those seeking more flexibility, we’re also offering a{" "}
              <strong>40% discount</strong> on bookings for{" "}
              <strong>4 hours</strong> during early morning (
              <strong>6 AM – 10 AM</strong>) or evening (
              <strong>8 PM – 12 AM</strong>). This extended timeframe allows you
              to experience even more of Dubai’s stunning landmarks and
              luxurious waterfront views.
            </p>
            <p>
              All packages depart from{" "}
              <strong>Dubai Marina, Dubai Harbour & Marasi Bay Marina</strong>
              locations, giving you the chance to embark on your unforgettable
              yacht journey. And to top it off, welcome drinks are included in
              your booking, ensuring you start your yacht trip in style.
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
            <table className="w-full text-xs md:text-sm text-center border-collapse table-striped">
              {/* Table Header */}
              <thead className="bg-[#0B2946] text-white font-bold">
                <tr className="border border-white">
                  <th
                    scope="col"
                    className="py-3 px-4 border-r border-white last:border-r-0"
                  >
                    YACHT
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-4 border-r border-white last:border-r-0"
                  >
                    CAPACITY
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-4 border-r border-white last:border-r-0"
                  >
                    RATE / HOUR
                    <br />
					20% OFF
					<br />
					(From 2pm until 8pm)
                  </th>
                  <th scope="col" className="py-3 px-4 last:border-r-0">
				  RATE / 4 HOURS
                    <br />
					40% OFF
					<br />
					(between 6 am to 2 pm or
					<br />
					between 8 pm until 2 am)
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="font-bold">
                {/* Row 1 (White) */}
                <tr className="bg-white border border-white">
                  <td className="py-3 px-4 border-r border-white last:border-r-0">
				  SILVER CRAFT - 36FT	
                  </td>
                  <td className="py-3 px-4 border-r border-white last:border-r-0">
                    10
                  </td>
                  <td className="py-3 px-4 border-r border-white last:border-r-0">
                    <sup><strike className="text-red-500 mr-1">AED 595</strike> </sup>
					AED 475
                  </td>
                  <td className="py-3 px-4 border-r border-white last:border-r-0">
                    <sup><strike className="text-red-500 mr-1">AED 2380</strike> </sup>
					AED 1430
                  </td>
                </tr>

				<tr className="bg-white border border-white">
                  <td className="py-3 px-4 border-r border-white last:border-r-0">
				  RIVERSIDE - 40FT		
                  </td>
                  <td className="py-3 px-4 border-r border-white last:border-r-0">
                    12
                  </td>
                  <td className="py-3 px-4 border-r border-white last:border-r-0">
                    <sup><strike className="text-red-500 mr-1">AED 750</strike> </sup>
					AED 600
                  </td>
                  <td className="py-3 px-4 border-r border-white last:border-r-0">
                    <sup><strike className="text-red-500 mr-1">AED 3000</strike> </sup>
					AED 1800
                  </td>
                </tr>

				<tr className="bg-white border border-white">
                  <td className="py-3 px-4 border-r border-white last:border-r-0">
				  VASSIA - 56FT			
                  </td>
                  <td className="py-3 px-4 border-r border-white last:border-r-0">
                    21
                  </td>
                  <td className="py-3 px-4 border-r border-white last:border-r-0">
                    <sup><strike className="text-red-500 mr-1">AED 1080</strike> </sup>
					AED 830
                  </td>
                  <td className="py-3 px-4 border-r border-white last:border-r-0">
                    <sup><strike className="text-red-500 mr-1">AED 4160</strike> </sup>
					AED 2495
                  </td>
                </tr>

				<tr className="bg-white border border-white">
                  <td className="py-3 px-4 border-r border-white last:border-r-0">
				  ETOSHA - 58FT		
                  </td>
                  <td className="py-3 px-4 border-r border-white last:border-r-0">
                    28
                  </td>
                  <td className="py-3 px-4 border-r border-white last:border-r-0">
                    <sup><strike className="text-red-500 mr-1">AED 1040</strike> </sup>
					AED 865
                  </td>
                  <td className="py-3 px-4 border-r border-white last:border-r-0">
                    <sup><strike className="text-red-500 mr-1">AED 4320</strike> </sup>
					AED 2590
                  </td>
                </tr>

				<tr className="bg-white border border-white">
                  <td className="py-3 px-4 border-r border-white last:border-r-0">
				  LAGOONA - 56FT		
                  </td>
                  <td className="py-3 px-4 border-r border-white last:border-r-0">
                    24
                  </td>
                  <td className="py-3 px-4 border-r border-white last:border-r-0">
                    <sup><strike className="text-red-500 mr-1">AED 1150</strike> </sup>
					AED 920
                  </td>
                  <td className="py-3 px-4 border-r border-white last:border-r-0">
                    <sup><strike className="text-red-500 mr-1">AED 4600</strike> </sup>
					AED 2760
                  </td>
                </tr>

				<tr className="bg-white border border-white">
                  <td className="py-3 px-4 border-r border-white last:border-r-0">
				  SILVERCREEK - 61FT			
                  </td>
                  <td className="py-3 px-4 border-r border-white last:border-r-0">
                    30
                  </td>
                  <td className="py-3 px-4 border-r border-white last:border-r-0">
                    <sup><strike className="text-red-500 mr-1">AED 1250</strike> </sup>
					AED 995
                  </td>
                  <td className="py-3 px-4 border-r border-white last:border-r-0">
                    <sup><strike className="text-red-500 mr-1">AED 5000</strike> </sup>
					AED 2995
                  </td>
                </tr>

				<tr className="bg-white border border-white">
                  <td className="py-3 px-4 border-r border-white last:border-r-0">
				  KRONOS - 86FT				
                  </td>
                  <td className="py-3 px-4 border-r border-white last:border-r-0">
                    50
                  </td>
                  <td className="py-3 px-4 border-r border-white last:border-r-0">
                    <sup><strike className="text-red-500 mr-1">AED 3500</strike> </sup>
					AED 2800
                  </td>
                  <td className="py-3 px-4 border-r border-white last:border-r-0">
                    <sup><strike className="text-red-500 mr-1">AED 14000</strike> </sup>
					AED 8400
                  </td>
                </tr>

				<tr className="bg-white border border-white">
                  <td className="py-3 px-4 border-r border-white last:border-r-0">
				  POSEIDON - 118FT				
                  </td>
                  <td className="py-3 px-4 border-r border-white last:border-r-0">
                    40
                  </td>
                  <td className="py-3 px-4 border-r border-white last:border-r-0">
                    <sup><strike className="text-red-500 mr-1">AED 5000</strike> </sup>
					AED 4000
                  </td>
                  <td className="py-3 px-4 border-r border-white last:border-r-0">
                    <sup><strike className="text-red-500 mr-1">AED 20000</strike> </sup>
					AED 12000
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          {/* Promo Boxes (Similar to the screenshot) */}
          <div className=" mt-8 space-y-4 max-w-lg mx-auto">
            {/* Afternoon Discount Box */}
            <div className="bg-[#0B2946] text-white text-center p-4">
              <p className="text-lg font-bold">
                20% off in our yacht rental bookings in afternoon
              </p>
              <p>(From 2pm until 8 PM)</p>
            </div>

            {/* Extended Booking Discount Box */}
            <div className="bg-[#0B2946] text-white text-center p-4">
              <p className="text-lg font-bold">
                40% discount when booking 4 hours in early morning or evening
                time
              </p>
              <p>(Between 6 am to 2 pm or between 8 pm until 2 am)</p>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="mt-8">
            <h4 className="text-lg font-bold text-[#0B2946] mb-2">
              Terms & Conditions:
            </h4>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Minimum Booking Rental 3 Hours</li>
              <li>
                This discount cannot be used in conjunction with any other
                discount or promotional offer
              </li>
              <li>Bookings must be done via WhatsApp</li>
              <li>
                Strongly advise to reconfirm if any changes and beers included
                (limited basis)
              </li>
              <li>Full amount to be paid to confirm your booking</li>
              <li>Not valid on public holidays and festive seasons</li>
            </ul>
          </div>

          {/* Cancellation Policy */}
          <div className="mt-6">
            <h4 className="text-lg font-bold text-[#0B2946] mb-2">
              Cancellation Policy
            </h4>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Cancellations 72 hours prior the booking free of charge</li>
              <li>Cancellations 48 hours prior will get 50% refund</li>
              <li>Cancellations 24 hours prior will be non-refundable</li>
            </ul>
          </div>

          {/* Final CTA */}
          <div className="my-8 text-center text-base text-gray-800 font-semibold">
            RESERVE YOUR SPOT TODAY AND INDULGE IN A MEMORABLE YACHT ADVENTURE
            ONLY WITH CENTAURUS CHARTER!
          </div>

          <div className="py-10 w-full">
            <div className="flex flex-col md:flex-row rounded-lg items-center  gap-5 justify-center  md:justify-between bg-primary-blue p-5">
              <p className="text-white  text-center md:text-left font-bold bg-primary-blue text-xl rounded ">
                REACH OUT TO US
              </p>
              <div className="flex flex-col md:flex-row md:gap-10 gap-5">
                <a
                  target="_blank"
                  className="blue-lined-button"
                  href="https://shorturl.at/NyrVQ"
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

          <Modal2
            isModalOpen={isModalOpen}
            closeModal={closeModal}
            idName="offers_id"
            idValue="44"
          />
        </section>
      </main>
      <ExperienceCarousal />
    </>
  );
}
