'use client';
import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Modal2 from '@/app/components/Modal2';

export default function CTAWithModalClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlequote = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="py-10 w-full container mx-auto">
        <div className="flex flex-col md:flex-row rounded-xl items-center  gap-5 justify-center  md:justify-between bg-primary-blue p-5">
          <p className="text-white  text-center md:text-left font-bold bg-primary-blue text-xl rounded ">Enjoy a luxurious shared yacht adventure!</p>
          <div className="flex flex-col md:flex-row md:gap-10 gap-5">
            <a target="_blank" className="blue-lined-button" href="https://wa.link/6lx1fu">
              <FaWhatsapp size={20} />
              WHATSAPP US
            </a>
            <button onClick={handlequote} className="blue-lined-button">
              GET A QUOTE
            </button>
          </div>
        </div>
      </div>

      <Modal2 isModalOpen={isModalOpen} closeModal={closeModal} idName="offers_id" idValue="46" />
    </>
  );
}
