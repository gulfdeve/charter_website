'use client'
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Modal2 from "@/app/components/Modal2";

const page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlequote = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="felx flex-col items-center justify-center px-4 xl:px-44">
        <div className="flex items-center justify-center py-10">
          <img src="/offersemirates.webp" className=" " />
        </div>
        <h1 className="font-Montserrat text-black text-left py-3">
          Centaurus Charter feels pleasure to announce a new partnership with
          Emirates Group. We offer exclusive UP TO 20-40% off on yacht charter
          in Dubai for all{" "}
          <strong>Emirates Staff, Flydubai employees and Dnata crew </strong>
          with Face Card & Platinum Card. This offer is valid for minimum 3-hour
          bookings. To sweeten the deal, we provide complimentary soft drinks,
          water, tea, coffee and fresh towels.
        </h1>
        <h1 className="font-Montserrat text-black text-left py-3">
          Look for a unique way to see Dubai, consider taking a yacht tour.
          You'll get to see the city from a different perspective and enjoy the
          luxury of being on a private yacht. Our crew will be able to cruise
          you around all the best sights of town, and you'll even have time to
          relax on deck and enjoy the views. Plus, you can customize your ride
          to include places that interest you. Whether you want to see the
          skyline, the beaches, or the famous Palm Jumeirah, a yacht hire in
          Dubai is a great way to do it.
        </h1>
        <h1 className="font-Montserrat text-black text-left py-3">
          Experience the luxury on sea with us.
        </h1>
        <h1 className="font-Montserrat text-black text-left py-3">
          <strong>Offer Blackout dates:</strong> 1-3 December (National Day) and
          20 December 2024 -01 January 2025
        </h1>
      </div>
      <div className="py-5 xl:px-32 ">
        <div className="flex flex-col md:flex-row rounded-lg md:px-10 xl:px-44 items-center  gap-5 justify-center  md:justify-between bg-transparent md:bg-primary-blue py-3">
          <button className="text-white font-Montserrat font-bold bg-primary-blue px-5 py-3 text-xl rounded">
          Validity Until: 31 January 2025
          </button>
          <div className=" flex flex-col md:flex-row md:gap-10 gap-5">
            <button className="flex items-center justify-center gap-2 px-4 py-3 bg-primary-blue text-primary-yellow border border-primary-yellow-dark  font-bold rounded-md hover:bg-primary-blue-2 transition">
              <FaWhatsapp size={20} />
              WHATSAPP US
            </button>
            <button 
             onClick={handlequote}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-primary-blue text-primary-yellow border border-primary-yellow-dark  font-bold rounded-md hover:bg-primary-blue-2 transition">
              GET A QUOTE
            </button>
          </div>
        </div>
      </div>
      <Modal2 isModalOpen={isModalOpen} closeModal={closeModal} />
    
    </>
  );
};

export default page;
