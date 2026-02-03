'use client';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Modal2 from '@/app/components/Modal2';

export default function EventClient({ event, locale }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleQuote = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="py-10 w-full">
        <div className="flex flex-col md:flex-row rounded-lg items-center gap-5 justify-center md:justify-between bg-primary-blue p-5">
          <p className="text-white text-center md:text-left font-bold bg-primary-blue text-xl rounded">Validity Until: {event.validity}</p>
          <div className="flex flex-col md:flex-row md:gap-10 gap-5">
            <a target="_blank" className="blue-lined-button" href={event.whatsapp_url}>
              <FaWhatsapp size={20} />
              WHATSAPP US
            </a>
            {event.id === 44 ? (
              <a className="blue-lined-button" href="https://fareharbor.com/embeds/book/centauruscharter/items/469615/?full-items=yes&flow=645487">
                BOOK NOW
              </a>
            ) : event.id == 50 ? (
              <a className="blue-lined-button" href="https://fareharbor.com/embeds/book/centauruscharter/items/695073/?full-items=yes&flow=1283212">
                BOOK NOW
              </a>
            ) : event.id == 47 ? (
              <a className="blue-lined-button" href="https://fareharbor.com/embeds/book/centauruscharter/items/526178/?full-items=yes&flow=645487">
                BOOK NOW
              </a>
            ) : (
              <button onClick={handleQuote} className="blue-lined-button">
                GET A QUOTE
              </button>
            )}
          </div>
        </div>
      </div>

      <Modal2 isModalOpen={isModalOpen} closeModal={closeModal} idName="events_id" idValue={event.id} />
    </>
  );
}
