'use client';
import React, { useState, useEffect } from "react";
import { use } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Modal2 from "@/app/components/Modal2";
import { useData } from "@/app/context/DataContext";
import { useLocale, useTranslations } from "next-intl";
const Page = ({params}) => {

  const { slug } = use(params);  // Get slug from the URL
  const { data, loading, error } = useData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const locale = useLocale();
  // Find the offer by slug
  const offer = data?.offers?.find((offer) => offer.slug === slug);

  const handleQuote = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!offer) return <div>No offer found for this slug.</div>;

  return (
    <>
      <div className="felx flex-col items-center justify-center px-4 xl:px-44 container mx-auto">
        <div className="flex items-center justify-center py-10">
          <img
            src={`https://www.centauruscharter.com/product/images/${offer.image}`}
            alt={offer.name}
            className=""
          />
        </div>
        <h1 className="font-Montserrat text-black text-left py-3 xl:px-10">
          <ul>
          {offer.translations?.[locale]?.description
            .split("\n")
            .map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
            </ul>
        </h1>

     
      <div className="py-5 xl:px-10">
        <div className="flex flex-col md:flex-row rounded-lg md:px-10 xl:px-44 items-center gap-5 justify-center md:justify-between bg-transparent md:bg-primary-blue py-3">
          <button className="text-white font-Montserrat font-bold bg-primary-blue px-5 py-3 text-xl rounded">
            Validity Until: {offer.validity}
          </button>
          <div className="flex flex-col md:flex-row md:gap-10 gap-5">
            <a href={offer.whatsapp_url}>
            <button className="flex items-center justify-center gap-2 px-4 py-3 bg-primary-blue text-primary-yellow border border-primary-yellow-dark font-bold rounded-md hover:bg-primary-blue-2 transition">
              <FaWhatsapp size={20} />
              WHATSAPP US
            </button>
            </a>
            <button
              onClick={handleQuote}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-primary-blue text-primary-yellow border border-primary-yellow-dark font-bold rounded-md hover:bg-primary-blue-2 transition"
            >
              GET A QUOTE
            </button>
          </div>
        </div>
      </div>
       </div>
      <Modal2 isModalOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};

export default Page;
