"use client";
import React, { useState, useEffect } from "react";
import { use } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Modal2 from "@/app/components/Modal2";
import { useData } from "@/app/context/DataContext";
import { useLocale, useTranslations } from "next-intl";
import PageTitleHeading from "@/app/components/PageTitleHeading";
// import Loading from "./loading";
const Page = ({ params }) => {
  const { slug } = use(params); // Get slug from the URL
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

  // if (loading) {
  //   return <Loading />;
  // }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!offer) return <div>No offer found for this slug.</div>;

  return (
    <>
      <div className="felx flex-col items-center justify-center px-4 xl:px-44 container mx-auto mt-14 md:mt-0">
        
        <PageTitleHeading title={offer.translations?.[locale]?.title} />
        
        <div className="flex items-center justify-center pb-10">
          <img
            src={`https://www.centauruscharter.com/product/images/${offer.image}`}
            alt={offer.name}
            className=""
          />
        </div>
          <ul>
            {offer.translations?.[locale]?.description
              .split("\n")
              .map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
          </ul>

        <div className="py-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row rounded-lg items-center  gap-5 justify-center  md:justify-between bg-primary-blue p-5">
            <p className="text-white  text-center md:text-left font-bold bg-primary-blue text-xl rounded ">
              Validity Until: {offer.validity}
            </p>
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
          </div>
        </div>
      </div>
      <Modal2
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        idName="offers_id"
        idValue={offer.id}
      />
    </>
  );
};

export default Page;
