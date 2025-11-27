'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Modal2 from '@/app/components/Modal2';

const YachtBookingButtons = ({ whatsappLink, isSold }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleQuote = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {!isSold ? (
        <div className="grid grid-cols-1 s:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-2">
          <Link href={whatsappLink} target="_blank">
            <button className="w-full red-solid-button">WhatsApp Us</button>
          </Link>
          <button onClick={handleQuote} className="w-full red-solid-button">
            Get a Quote
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 s:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-2">
          <button className="w-full red-solid-button cursor-not-allowed opacity-30">WhatsApp Us</button>
          <button className="w-full red-solid-button cursor-not-allowed opacity-30">Get a Quote</button>
        </div>
      )}
      <Modal2 isModalOpen={isModalOpen} closeModal={closeModal} idName="offers_id" idValue="49" />
    </>
  );
};

export default YachtBookingButtons;
