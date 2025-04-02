"use client";
import React, { useState, useEffect } from "react";
import { use } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Modal2 from "@/app/components/Modal2";
import { useData } from "@/app/context/DataContext";
import { useLocale, useTranslations } from "next-intl";
const page = ({ params }) => {
  const { slug } = use(params); // Get slug from the URL
  const { data, loading, error } = useData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const locale = useLocale();
  // Find the event by slug
  const event = data?.events?.find((event) => event.slug === slug);
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
  if (!event) return <div>No event found for this slug.</div>;

  return (
    <>
      <div className="container mx-auto px-10 py-10 flex flex-col items-center justify-center text-primary-black mt-14 md:mt-0">
        <h1 className="text-xl sm:text:2xl md:text-3xl lg:text-4xl font-bold">
          {event.translations?.[locale]?.title}
        </h1>
        <h2 className="text-base sm:text-xl font-bold text-center">
          {event.translations?.[locale]?.heading_2}
        </h2>
        <div className="flex items-center justify-center py-10">
          <img
            src={`https://www.centauruscharter.com/product/images/${event.image}`}
            alt={event.name}
            className=""
          />
        </div>
        <ul>
          {event.translations?.[locale]?.description
            .split("\n")
            .map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
        </ul>

        <div className="py-10 w-full">
          <div className="flex flex-col md:flex-row rounded-lg items-center  gap-5 justify-center  md:justify-between bg-primary-blue p-5">
            <p className="text-white  text-center md:text-left font-bold bg-primary-blue text-xl rounded ">
              Validity Until: {event.validity}
            </p>
            <div className="flex flex-col md:flex-row md:gap-10 gap-5">
              <a href={event.whatsapp_url}>
                <button className="blue-lined-button">
                  <FaWhatsapp size={20} />
                  WHATSAPP US
                </button>
              </a>
              <button onClick={handleQuote} className="blue-lined-button">
                GET A QUOTE
              </button>
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
    </>
  );
};

export default page;
