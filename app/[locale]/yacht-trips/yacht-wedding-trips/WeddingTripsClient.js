'use client';
import { useState } from 'react';
import Modal2 from '@/app/components/Modal2';

export default function WeddingTripsClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleQuote = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={handleQuote} className="blue-solid-button">
        INQUIRE
      </button>
      <Modal2 isModalOpen={isModalOpen} closeModal={closeModal} idName="offers_id" idValue="47" />
    </>
  );
}

export function WeddingTripsQuoteButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleQuote = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={handleQuote} className="flex items-center justify-center gap-2 px-4 py-3 bg-primary-blue text-primary-yellow border border-primary-yellow-dark font-bold rounded-md hover:bg-primary-blue-2 transition">
        GET A QUOTE
      </button>
      <Modal2 isModalOpen={isModalOpen} closeModal={closeModal} idName="offers_id" idValue="47" />
    </>
  );
}
