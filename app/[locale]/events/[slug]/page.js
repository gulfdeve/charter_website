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
 
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto py-10 text-primary-black mt-14 md:mt-0">
        <h1 className=" text-4xl font-bold text-center">
          {event.translations?.[locale]?.title}
        </h1>
        <h2 className=" text-xl font-bold text-center">
          {event.translations?.[locale]?.heading_2}
        </h2>
        <div className="flex items-center justify-center py-10">
          <img
            src={`https://www.centauruscharter.com/product/images/${event.image}`}
            alt={event.name}
            className=""
          />
        </div>
        <h1 className=" text-black text-left py-3 xl:px-10">
          <ul>
            {event.translations?.[locale]?.description
              .split("\n")
              .map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
          </ul>
        </h1>

        <div className="py-10 w-full">
          <div className="flex flex-col md:flex-row rounded-lg items-center  gap-5 justify-center  md:justify-between bg-transparent md:bg-primary-blue p-5">
            <p className="text-white  font-bold bg-primary-blue text-xl rounded">
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
      
     
      <Modal2 isModalOpen={isModalOpen} closeModal={closeModal}  idName="events_id"
        idValue={event.id}/>
    </>
  );
};

export default page;
