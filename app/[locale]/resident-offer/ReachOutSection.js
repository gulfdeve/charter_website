'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Modal2 from '@/app/components/Modal2';
import { FaWhatsapp } from 'react-icons/fa';

const ReachOutSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlequote = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="w-full p-4 container mx-auto space-y-10">
      {/* Outer container with gold background */}

      <div className="container bg-primary-yellow flex flex-col md:flex-row gap-3 items-center justify-between rounded-xl py-3">
        {/* Left Text */}
        <span className="text-primary-blue font-bold text-base md:text-lg uppercase">
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
      <div className="flex flex-col md:flex-row rounded-xl px-5 items-center  gap-5 justify-center  md:justify-between bg-primary-blue py-3">
        <button className="text-white font-bold px-5 py-3 text-xl rounded">
          REACH OUT TO US
        </button>
        <div className=" flex flex-col md:flex-row md:gap-10 gap-5">
          <Link href={'https://wa.link/eyg3by'}>
            <button className="flex items-center justify-center gap-3 px-4 py-2 bg-primary-blue text-primary-yellow border border-primary-yellow-dark  font-bold rounded-md  transition">
              <FaWhatsapp size={20} />
              WHATSAPP US
            </button>
          </Link>
          <button
            onClick={handlequote}
            className="hidden flex items-center justify-center gap-3 px-10 py-2 bg-primary-blue text-primary-yellow border border-primary-yellow-dark  font-bold rounded-md  transition"
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
  );
};

export default ReachOutSection;
