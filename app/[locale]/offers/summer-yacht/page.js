'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import summeryacht from '@/public/summer-yacht-offer.webp';
import PageTitleHeading from '@/app/components/PageTitleHeading';
import Modal2 from '@/app/components/Modal2';
import { FaWhatsapp } from 'react-icons/fa';
import ExperienceCarousal from '@/app/components/ExperienceCarousal';
const page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleQuote = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const yachts = [
    {
      name: 'THUNDER 36FT',
      capacity: 10,
      rate: 490,
      twoHr: 980,
      threeHr: 1470,
      fourHr: 1960,
      fareharbor_id: '353083',
    },
    {
      name: 'STORM 36FT',
      capacity: 10,
      rate: 490,
      twoHr: 980,
      threeHr: 1470,
      fourHr: 1960,
      fareharbor_id: '429263',
    },
    {
      name: 'VASSIA 56FT',
      capacity: 21,
      rate: 845,
      twoHr: 1690,
      threeHr: 2535,
      fourHr: 3380,
      fareharbor_id: '340280',
    },
    {
      name: 'ETOSHA 58FT',
      capacity: 28,
      rate: 845,
      twoHr: 1690,
      threeHr: 2535,
      fourHr: 3380,
      fareharbor_id: '340265',
    },
    {
      name: 'LAGOONA 56FT',
      capacity: 24,
      rate: 980,
      twoHr: 1960,
      threeHr: 2940,
      fourHr: 3920,
      fareharbor_id: '340459',
    },
    {
      name: 'SILVER CREEK 61FT',
      capacity: 30,
      rate: 980,
      twoHr: 1960,
      threeHr: 2940,
      fourHr: 3920,
      fareharbor_id: '340286',
    },
  ];

  return (
    <>
      <div className="container mx-auto nav-space">
        <div className="w-full flex items-center justify-center pt-14 pb-8">
          <Image
            src={summeryacht}
            alt="Offer image"
            className="w-full h-auto object-contain" // Full width with proper object fitting
            width={80} // Larger intrinsic width for better quality
            height={0} // Proportional height
            priority={true} // Prioritize loading for above-the-fold images
            sizes="100vw" // Tell Next.js this image takes the full viewport width
          />
        </div>
        <h2 className="font-bold text-center pt-5">
          {' '}
          SUMMER OFFERS - DAYTIME YACHT BOOKINGS
        </h2>

        <h4 className="font-medium text-center py-5">
          Grab 30% discount on yacht bookings
        </h4>

        <div className="max-w-full px-4">
          {/* Scroll container for mobile */}
          <div className="sm:overflow-visible overflow-x-auto">
            {/* Header */}
            <div className="grid grid-cols-7 border-t border-b border-gray-300 py-4 mb-4 min-w-[800px]">
              {[
                'YACHT',
                'CAPACITY',
                'RATE/HR',
                '2-Hours',
                '3-Hours',
                '4-Hours',
                '',
              ].map(heading => (
                <div
                  key={heading}
                  className="text-sm text-center font-bold uppercase text-gray-700"
                >
                  {heading}
                </div>
              ))}
            </div>

            {/* Rows */}
            <div className="flex flex-col space-y-3">
              {yachts.map((yacht, idx) => {
                const isEven = idx % 2 === 0;
                const bgClass = isEven ? 'bg-[#0E2243]' : 'bg-[#08396e]';
                const textClass = isEven ? 'text-[#E1BA4D]' : 'text-white';
                const borderClass = isEven
                  ? 'border-[#E1BA4D]'
                  : 'border-black';

                return (
                  <div
                    key={yacht.name}
                    className={`grid grid-cols-7 gap-x-1 rounded-xl overflow-hidden ${bgClass} min-w-[800px]`}
                  >
                    {[
                      yacht.name,
                      yacht.capacity,
                      `AED ${yacht.rate.toLocaleString()}.00`,
                      `AED ${yacht.twoHr.toLocaleString()}.00`,
                      `AED ${yacht.threeHr.toLocaleString()}.00`,
                      `AED ${yacht.fourHr.toLocaleString()}.00`,
                      'Book Now',
                    ].map((content, colIdx) => {
                      const isBook = colIdx === 6;
                      const noBorderForFourHr = colIdx === 5;
                      const cellBg = isBook ? 'bg-[#E1BA4D]' : '';
                      const cellText = isBook
                        ? 'text-black font-semibold'
                        : textClass;
                      const cellBorder =
                        isBook || noBorderForFourHr
                          ? ''
                          : `border-r ${borderClass}`;
                      const justify = 'justify-center';

                      return (
                        <div
                          key={colIdx}
                          className={`px-4 py-3 flex items-center ${justify} ${cellBorder} ${cellBg} ${cellText}`}
                        >
                          {isBook ? (
                            <a
                              href={`https://fareharbor.com/embeds/book/centauruscharter/items/${yacht.fareharbor_id}/?full-items=yes&flow=645487`}
                              target="_self"
                              rel="noopener noreferrer"
                              className=""
                            >
                              <button className="w-full h-full">
                                {content}
                              </button>
                            </a>
                          ) : (
                            <span className={colIdx === 0 ? 'font-bold' : ''}>
                              {content}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className=" py-10">
          <div>
            <h5 className="text-left font-medium">
              Introducing the <strong> Summer Offer:</strong> From a
              breathtaking <strong>30% discount </strong>on our luxury yacht
              charter in Dubai. Brace yourself for an unforgettable experience
              as we unveil an exclusive summer deal that will make your dreams
              of cruising in opulence a reality. Whether you desire a serene
              morning escape or a dazzling afternoon adventure, our promotion is
              tailor-made to suit your desires.
            </h5>
            <h5 className="py-5 text-black uppercase"> highlights</h5>
            <ul className="list-disc pl-5">
              <li>
                Get 30% off for all day-time bookings from 7 am up to 7 pm for
                minimum booking of 2 hours
              </li>
              <li>Complimentary soft drinks, water, coffee</li>
              <li>Bubbly Drinks included (Minimum 3 hours)</li>
              <li>Deal is valid until 30 September 2023</li>
            </ul>
            <h6 className="text-center">
              {' '}
              Rent a yacht with an amazing deal today
            </h6>
          </div>
        </div>
        <div className="py-10 w-full">
          <div className="flex flex-col md:flex-row rounded-lg items-center gap-5 justify-center md:justify-between bg-primary-blue p-5">
            <p className="text-white text-center md:text-left font-bold bg-primary-blue text-xl rounded">
              Validity Until: 30th September 2025
            </p>
            <div className="flex flex-col md:flex-row md:gap-10 gap-5">
              <a
                target="_blank"
                className="blue-lined-button"
                href={event.whatsapp_url}
              >
                <FaWhatsapp size={20} />
                WHATSAPP US
              </a>
              <button onClick={handleQuote} className="blue-lined-button">
                GET A QUOTE
              </button>
            </div>
          </div>
        </div>
      </div>
      <ExperienceCarousal />
    </>
  );
};

export default page;
