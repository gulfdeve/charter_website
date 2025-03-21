"use client";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Modal2 from "@/app/components/Modal2";

export default function OfferClientActions({ offer }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleQuote = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row md:gap-10 gap-5">
        <a href={offer.whatsapp_url}>
          <button className="blue-lined-button">
            <FaWhatsapp size={20} />
            WHATSAPP US
          </button>
        </a>
        <button onClick={handleQuote} className="blue-lined-button">
          GET A QUOTE
        </button>
      </div>
      <Modal2
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        idName="offers_id"
        idValue={offer.id}
      />
    </>
  );
}