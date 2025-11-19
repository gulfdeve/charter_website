'use client';
import React, { useState, useEffect } from 'react';
import { use } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Modal2 from '@/app/components/Modal2';
import { useData } from '@/app/context/DataContext';

import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import ExperienceCarousal from '@/app/components/ExperienceCarousal';
import { notFound } from 'next/navigation';
const page = ({ params }) => {
  const { slug } = use(params); // Get slug from the URL
  const { data, loading, error } = useData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const locale = useLocale();
  // Find the event by slug
  const event = data?.events?.find(event => event.slug === slug);
  console.log(event);
  console.log(locale);

  const handleQuote = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!event) {
    notFound();
  }

  return (
    <>
      <div className="container mx-auto nav-space" data-id={event.id}>
        {/* Container for title/heading with padding */}
        <div className="py-10 text-center text-primary-blue">
          <h1 className="">{event.translations?.[locale]?.title}</h1>
          <h2 className="font-secondary text-primary-blue-2 text-center">
            {event.translations?.[locale]?.heading_2}
          </h2>
        </div>

        {/* Full width image container without horizontal padding */}
        <div className="w-full flex items-center justify-center">
          <Image
            src={`https://www.centauruscharter.net/product/images/${event.image}`}
            alt={event.translations?.[locale]?.title}
            className="w-full h-auto object-contain" // Full width with proper object fitting
            width={100} // Larger intrinsic width for better quality
            height={0} // Proportional height
            priority={true} // Prioritize loading for above-the-fold images
            sizes="100vw" // Tell Next.js this image takes the full viewport width
          />
        </div>

        {/* Container for the rest of the content with padding */}
        <div className="py-10">
          <div
            className="text-base font-secondary"
            dangerouslySetInnerHTML={{
              __html: event.translations?.[locale]?.description || '',
            }}
          />

          <div className="py-10 w-full">
            <div className="flex flex-col md:flex-row rounded-lg items-center gap-5 justify-center md:justify-between bg-primary-blue p-5">
              <p className="text-white text-center md:text-left font-bold bg-primary-blue text-xl rounded">
                Validity Until: {event.validity}
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
                {event.id === 44 ? (
                  <a
                    className="blue-lined-button"
                    href="https://fareharbor.com/embeds/book/centauruscharter/items/469615/?full-items=yes&flow=645487"
                  >
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
        </div>
      </div>

      <Modal2
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        idName="events_id"
        idValue={event.id}
      />
      <ExperienceCarousal />
    </>
  );
};

export default page;
