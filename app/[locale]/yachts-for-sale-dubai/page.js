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
        <div className="bg-white rounded-lg p-8 container mx-auto my-8 shadow-buy-yacht mt-14">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8 ">
            FIND YOUR DREAM YACHT {t("navbar.private-yachts")}  
          </h1>

          <p className="text-gray-700 text-lg text-center leading-relaxed ">
            AT CENTAURUS CHARTER, WE OFFER AN EXCLUSIVE COLLECTION OF LUXURY
            YACHTS FOR SALE, CATERING TO THE DISCERNING TASTES OF OUR CLIENTS.
            WHETHER YOU'RE LOOKING FOR A SLEEK, MODERN YACHT OR A classNameIC,
            ELEGANT VESSEL, WE HAVE THE PERFECT YACHT TO MEET YOUR NEEDS AND
            EXCEED YOUR EXPECTATIONS.
          </p>
        </div>
        <YachtListings />
        <div className="container mx-auto">
          <div className="flex flex-col  lg:flex-row items-center justify-center lg:justify-start lg:gap-0  custom-shadow rounded-lg bg-white overflow-hidden lg:h-[25rem] xl:h-[30rem] 2xl:h-[35rem]">
            <div className="w-full lg:w-1/2 xl:w-1/2 h-full">
              <img
                src="/luxury_yacht_for_sale.webp"
                className="rounded-t-lg lg:rounded-l-xl  w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:rounded-r-xl  justify-center text-justify lg:px-16 px-6 py-5">
              <h1 className=" text-black text-center font-bold text-xl 2xl:text-3xl pt-5">
                LUXURY YACHT FOR SALE
              </h1>
              <p className=" text-black 2xl:text-lg py-5">
                Explore our curated selection of luxury yachts designed to
                provide unparalleled comfort, style, and performance. Each yacht
                in our collection is meticulously maintained and equipped with
                the latest amenities to ensure a luxurious experience on the
                water. Our dedicated team is here to assist you in finding the
                yacht that perfectly matches your desires and lifestyle.
              </p>
              <button className="text-white  font-bold bg-primary-blue px-5 py-2 text-xl rounded">
                GET A LIST
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <div className="container mx-auto mt-20">
          <div className="flex items-center justify-center w-full my-6 xl:px-36 lg:px-20 ">
            <hr className="flex-grow border-primary-yellow-dark" />
            <span className="px-4 text-3xl 2xl:text-3xl font-semibold  text-black text-center">
              WHY BUY A LUXURY YACHT
            </span>
            <hr className="flex-grow border-primary-yellow-dark " />
          </div>
          <p className=" text-black text-lg 2xl:text-xl pt-2 pb-5 xl:px-36 lg:px-20 md:px-16 text-center">
            Owning a luxury yacht is more than just a purchase; it's an
            investment in a lifestyle of opulence and adventure. A yacht offers
            you the freedom to explore the open seas at your leisure, hosting
            private gatherings and enjoying unparalleled privacy and comfort.
            With a luxury yacht, every journey becomes a memorable experience,
            and each destination offers a new horizon to explore.
          </p>
        </div>
        </div>
        <div className="flex flex-col  md:flex-row items-center justify-center py-10">
          <div>
            <div className="">
              <img
                src="/buying_process.webp"
                className="xl:w-[210rem] sm:w-[170rem] md:h-[530px] xl:h-[452px] lg:h-[480px]"
              />
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-start sm:justify-start justify-center bg-primary-blue px-5 xl:px-20 xl:py-12 py-5 md:h-[530px] xl:h-[452px]  lg:h-[480px]">
            <h1 className=" text-white text-center font-bold text-2xl xl:text-3xl py-7">
              The Buying Process
            </h1>
            <h3 className="text-primary-yellow ">
              PERSONALISED ASSISTANCE
            </h3>
            <p className=" text-white text-center sm:text-left  text-md  sm:text-sm xl:text-md pb-10">
              Our experienced yacht brokers provide personalized assistance
              throughout the entire buying process. From initial consultations
              to finalizing the purchase, we are here to ensure a smooth and
              enjoyable experience. We take the time to understand your
              preferences and requirements, guiding you to the yacht that best
              fits your vision. 
            </p>
            <h3 className="text-primary-yellow ">
              COMPREHENSIVE SERVICES
            </h3>
            <p className=" text-white text-center sm:text-left  text-md  sm:text-sm xl:text-md pb-10">
            In addition to helping you find your dream yacht, we offer a range of comprehensive services, including financing options, insurance, and maintenance packages. Our goal is to make yacht ownership as seamless and enjoyable as possible, allowing you to focus on the pleasures of yachting.
            </p>
            
          </div>
        </div>
        <div className="md:block hidden">
          <div className="container mx-auto">
          <div className="flex items-center justify-center w-full my-6 xl:px-36 lg:px-20 ">
            <hr className="flex-grow border-primary-yellow-dark" />
            <span className="px-4 text-xl 2xl:text-3xl font-semibold  text-black">
              THE BENEFITS OF OWNING A YACHT
            </span>
            <hr className="flex-grow border-primary-yellow-dark " />
          </div>
          <p className=" text-black text-lg 2xl:text-xl pt-2 pb-5 xl:px-36 lg:px-20 md:px-16 text-center">
          Owning a yacht opens up a world of possibilities. Enjoy spontaneous getaways, host exclusive parties, or simply relax with family and friends in the privacy of your own floating sanctuary. A yacht is not just a mode of transportation; it’s a lifestyle choice that offers unparalleled freedom, luxury, and prestige.
          </p>
        </div>
        </div>
        <div className="container mx-auto">
  <div className="flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-start lg:gap-0 custom-shadow rounded-lg bg-white overflow-hidden lg:h-[25rem] xl:h-[30rem] 2xl:h-[35rem]">  {/* Set container height */}
    <div className="w-full lg:w-1/2 xl:w-1/2 flex h-full">
      <img
        src="/sell_your_yacht.webp"
        className=" w-full h-full object-cover"  // Ensure image fills the container
      />
    </div>
    <div className="w-full lg:w-1/2 flex flex-col items-center lg:rounded-r-xl lg:rounded-l-none lg:items-center justify-center text-center lg:text-left lg:px-16 px-6 py-5">
      <h1 className=" text-black font-bold text-3xl 2xl:text-3xl pt-5">
        Sell your Yacht
      </h1>
      <p className=" text-black 2xl:text-xl py-5 lg:text-left 2xl:px-3 xl:px-10">
        Looking to sell your yacht? At Centaurus Charter, we provide expert assistance to help you achieve the best value for your vessel. Our extensive network and marketing expertise ensure that your yacht is presented to the right buyers, maximizing its exposure and sale potential. We handle everything from valuations to negotiations, providing a hassle-free selling experience.
      </p>
      <button className="text-white  font-bold bg-primary-blue px-5 py-2 text-xl rounded">
        CONTACT US
      </button>
    </div>
  </div>
</div>
<div className="py-5 xl:px-44 container mx-auto">
<div className="flex flex-col md:flex-row rounded-lg md:px-10 xl:px-44 items-center  gap-5 justify-center  md:justify-between bg-transparent md:bg-primary-blue py-5">
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
