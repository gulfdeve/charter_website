"use client";
import { useLocale, useTranslations } from "next-intl";
import React, { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import YachtListings from "@/app/components/cardBuyYacht";
import VideoLocal from "@/app/components/VideoLocal";

const Page = () => {
  const t = useTranslations();

  return (
    <>
<VideoLocal filename="/buy-sell-yacht-video.mp4" section="buy-yacht" />
      <div className="bg-white w-full h-auto ">
        <div className="bg-white rounded-lg p-8 container mx-auto lg:mt-8 xl:mt-16 2xl:mt-16">
          <h1 className="text-2xl xl:text-4xl font-bold text-center text-gray-900 mb-8 ">
            FIND YOUR DREAM YACHT {t("navbar.private-yachts")}  
          </h1>

          <p className="text-gray-700 text-lg text-center leading-relaxed ">
            At Centaurus Charter, we offer an exclusive collection of Luxury Yachts for sale, catering to the discerning tastes of our clients. 
            Whether you're looking for a Sleek, Modern Yacht or an Elegant Vessel, 
            We have the perfect yacht to meet your needs and exceed your expectations.
          </p>
        </div>
        <YachtListings />
        <div className="container mx-auto">
          <div className="flex flex-col  lg:flex-row items-center justify-center lg:justify-start lg:gap-0  custom-shadow rounded-lg bg-primary-blue-3 overflow-hidden lg:h-[25rem] xl:h-[30rem] 2xl:h-[35rem]">
            <div className="w-full lg:w-1/2 xl:w-1/2 h-full">
              <img
                src="/luxury_yacht_for_sale.webp"
                className="rounded-t-lg lg:rounded-l-xl  w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:rounded-r-xl  justify-center text-justify lg:px-16 px-6 py-5">
              <h1 className=" text-white text-center font-bold text-xl 2xl:text-3xl pt-5">
                LUXURY YACHT FOR SALE
              </h1>
              <p className=" text-[#f1f1f1] 2xl:text-lg py-5">
                Explore our curated selection of luxury yachts designed to
                provide unparalleled comfort, style, and performance. Each yacht
                in our collection is meticulously maintained and equipped with
                the latest amenities to ensure a luxurious experience on the
                water. Our dedicated team is here to assist you in finding the
                yacht that perfectly matches your desires and lifestyle.
              </p>
              <button className="blue-solid-button">
                GET A LIST
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <div className="container mx-auto mt-20">
          <div className="flex items-center justify-center w-full my-6 xl:px-36 lg:px-20 ">
            <hr className="flex-grow border-primary-yellow-dark" />
            <span className="font-Montserrat px-4 text-3xl 2xl:text-3xl font-bold  text-primary-blue text-center">
              WHY BUY A LUXURY YACHT
            </span>
            <hr className="flex-grow border-primary-yellow-dark " />
          </div>
          <p className=" text-primary-grey text-base 2xl:text-lg pt-2 pb-5 xl:px-36 lg:px-20 md:px-16 text-center">
            Owning a luxury yacht is more than just a purchase; it's an
            investment in a lifestyle of opulence and adventure. A yacht offers
            you the freedom to explore the open seas at your leisure, hosting
            private gatherings and enjoying unparalleled privacy and comfort.
            With a luxury yacht, every journey becomes a memorable experience,
            and each destination offers a new horizon to explore.
          </p>
        </div>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center py-5">
  
  <div className="flex flex-col items-center justify-center">
    <h2 className=" text-primary-blue-2 text-center font-bold text-2xl xl:text-3xl py-7">
      The Buying Process
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    <div>
      <div className="flex flex-col items-center justify-center text-center gap-y-4 px-10">
        <img alt="" className="w-12" src="/Certified Crew.png"/>
        <h3 className="text-primary-grey text-center">Personalised Assistance</h3>
        <p className="text-primary-grey text-center text-md sm:text-sm xl:text-md pb-10">
          Our experienced yacht brokers provide personalized assistance throughout
          the entire buying process. From initial consultations to finalizing the
          purchase, we are here to ensure a smooth and enjoyable experience. We take
          the time to understand your preferences and requirements, guiding you to
          the yacht that best fits your vision.
        </p>
      </div>
      </div>
      <div>
      <div className="flex flex-col items-center justify-center text-center gap-y-4 px-10">
        <img alt="" className="w-12" src="/Outstanding Customer Support.png"/>        
        <h3 className="text-primary-grey text-center">Comprehensive Services</h3>
        <p className="text-primary-grey text-center text-md sm:text-sm xl:text-md pb-10">
          In addition to helping you find your dream yacht, we offer a range of
          comprehensive services, including financing options, insurance, and
          maintenance packages. Our goal is to make yacht ownership as seamless and
          enjoyable as possible, allowing you to focus on the pleasures of yachting.
        </p>
      </div>
      </div>
      </div>
  </div>
</div>
        <div className="md:block hidden">
          <div className="container mx-auto mb-8">
          <div className="flex items-center justify-center w-full my-6 xl:px-36 lg:px-20 ">
            <hr className="flex-grow border-primary-yellow-dark" />
            <span className="font-Montserrat px-4 text-xl 2xl:text-3xl font-bold  text-primary-blue">
              THE BENEFITS OF OWNING A YACHT
            </span>
            <hr className="flex-grow border-primary-yellow-dark " />
          </div>
          <p className=" text-primary-grey text-base 2xl:text-lg pt-2 pb-5 xl:px-36 lg:px-20 md:px-16 text-center">
          Owning a yacht opens up a world of possibilities. Enjoy spontaneous getaways, host exclusive parties, or simply relax with family and friends in the privacy of your own floating sanctuary. A yacht is not just a mode of transportation; it’s a lifestyle choice that offers unparalleled freedom, luxury, and prestige.
          </p>
        </div>
        </div>
        <div className="container mx-auto">
  <div className="flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-start lg:gap-0 custom-shadow rounded-lg bg-primary-blue overflow-hidden lg:h-[25rem] xl:h-[30rem] 2xl:h-[35rem]">  {/* Set container height */}
    <div className="w-full lg:w-1/2 xl:w-1/2 flex h-full">
      <img
        src="/sell_your_yacht.webp"
        className=" w-full h-full object-cover"  // Ensure image fills the container
      />
    </div>
    <div className="w-full items-center lg:w-1/2 flex flex-col lg:rounded-r-xl lg:rounded-l-none lg:px-16 px-6 py-5">
      <h2 className="uppercase text-center text-white font-bold text-3xl 2xl:text-3xl pt-5">
        Sell your Yacht
      </h2>
      <p className=" text-[#f1f1f1] 2xl:text-xl py-5 text-justify 2xl:px-3 xl:px-10">
        Looking to sell your yacht? At Centaurus Charter, we provide expert assistance to help you achieve the best value for your vessel. Our extensive network and marketing expertise ensure that your yacht is presented to the right buyers, maximizing its exposure and sale potential. We handle everything from valuations to negotiations, providing a hassle-free selling experience.
      </p>
      <button className="blue-solid-button">
        CONTACT US
      </button>
    </div>
  </div>
</div>
<div className="py-5 container mx-auto">
<div className="flex flex-col md:flex-row rounded-lg md:px-10 items-center  gap-5 justify-center  md:justify-between bg-transparent md:bg-primary-blue py-5">
<button className="text-white  font-bold bg-primary-blue px-5 py-3 text-xl rounded">
        REACH OUT TO US
      </button>
      <div className="">
  <button className="flex items-center justify-center gap-2 px-4 py-3 bg-primary-yellow text-primary-blue  font-bold rounded-md hover:bg-yellow-600 transition">
                  <FaWhatsapp size={20} />
                  WHATSAPP US
                </button>

                </div></div>
</div>

      </div>
    </>
  );
};

export default Page;
