"use client";
import React, { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import YachtListings from "@/app/components/cardBuyYacht";

const Page = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://fast.wistia.com/player.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://fast.wistia.com/embed/sar3sqhjcf.js";
    script2.async = true;
    script2.type = "module";
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <>
      <style>
        {`
          wistia-player[media-id='sar3sqhjcf']:not(:defined) {
            background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/sar3sqhjcf/swatch');
            display: block;
            filter: blur(5px);
            padding-top: 36.67%;
          }
        `}
      </style>
      <div>
        <wistia-player media-id="sar3sqhjcf" seo="false"></wistia-player>
      </div>
      <div className="bg-white w-full h-auto">
        <div className="bg-white rounded-lg p-8 max-w-7xl mx-auto my-8 shadow-buy-yacht">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8 font-Montserrat">
            FIND YOUR DREAM YACHT
          </h1>

          <p className="text-gray-700 text-lg text-center leading-relaxed font-Montserrat">
            AT CENTAURUS CHARTER, WE OFFER AN EXCLUSIVE COLLECTION OF LUXURY
            YACHTS FOR SALE, CATERING TO THE DISCERNING TASTES OF OUR CLIENTS.
            WHETHER YOU'RE LOOKING FOR A SLEEK, MODERN YACHT OR A CLASSIC,
            ELEGANT VESSEL, WE HAVE THE PERFECT YACHT TO MEET YOUR NEEDS AND
            EXCEED YOUR EXPECTATIONS.
          </p>
        </div>
        <YachtListings />
        <div className="xl:px-44 px-8 py-10">
          <div className="flex flex-col  lg:flex-row items-center justify-center lg:justify-start lg:gap-0  custom-shadow rounded-lg bg-white overflow-hidden lg:h-[25rem] xl:h-[25rem] 2xl:h-[32rem]">
            <div className="w-full lg:w-1/2 xl:w-1/2">
              <img
                src="/luxury_yacht_for_sale.webp"
                className="rounded-t-lg lg:rounded-l-xl  w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:rounded-r-xl lg:items-start justify-center text-center lg:text-left lg:px-16 px-6 py-5">
              <h1 className="font-Montserrat text-black font-bold text-2xl 2xl:text-4xl pt-5">
                LUXURY YACHT FOR SALE
              </h1>
              <p className="font-Montserrat text-black 2xl:text-2xl py-5">
                Explore our curated selection of luxury yachts designed to
                provide unparalleled comfort, style, and performance. Each yacht
                in our collection is meticulously maintained and equipped with
                the latest amenities to ensure a luxurious experience on the
                water. Our dedicated team is here to assist you in finding the
                yacht that perfectly matches your desires and lifestyle.
              </p>
              <button className="text-white font-Montserrat font-bold bg-primary-blue px-5 py-2 text-xl rounded">
                GET A LIST
              </button>
            </div>
          </div>
        </div>
        <div className="md:block hidden">
          <div className="flex items-center justify-center w-full my-6 xl:px-36 lg:px-20 ">
            <hr className="flex-grow border-primary-yellow-dark" />
            <span className="px-4 text-3xl 2xl:text-5xl font-semibold font-Montserrat text-black">
              WHY BUY A LUXURY YACHT
            </span>
            <hr className="flex-grow border-primary-yellow-dark " />
          </div>
          <p className="font-Montserrat text-black text-lg 2xl:text-2xl pt-2 pb-5 xl:px-36 lg:px-20 md:px-16 text-center">
            Owning a luxury yacht is more than just a purchase; it's an
            investment in a lifestyle of opulence and adventure. A yacht offers
            you the freedom to explore the open seas at your leisure, hosting
            private gatherings and enjoying unparalleled privacy and comfort.
            With a luxury yacht, every journey becomes a memorable experience,
            and each destination offers a new horizon to explore.
          </p>
        </div>
        <div className="flex flex-col  md:flex-row items-center justify-center py-10">
          <div>
            <div className="">
              <img
                src="/buying_process.webp"
                className="xl:w-[210rem] sm:w-[170rem] md:h-[530px] xl:h-[452px] lg:h-[460px]"
              />
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-start sm:justify-start justify-center bg-[#0D2343] px-5 xl:px-20 xl:py-12 py-5 md:h-[530px] xl:h-[452px] lg:h-[460px]">
            <h1 className="font-Montserrat text-white text-center font-bold text-2xl xl:text-3xl py-7">
              The Buying Process
            </h1>
            <h3 className="text-primary-yellow font-Montserrat">
              PERSONALISED ASSISTANCE
            </h3>
            <p className="font-Montserrat text-white text-center sm:text-left  text-md  sm:text-sm xl:text-md pb-10">
              Our experienced yacht brokers provide personalized assistance
              throughout the entire buying process. From initial consultations
              to finalizing the purchase, we are here to ensure a smooth and
              enjoyable experience. We take the time to understand your
              preferences and requirements, guiding you to the yacht that best
              fits your vision. 
            </p>
            <h3 className="text-primary-yellow font-Montserrat">
              COMPREHENSIVE SERVICES
            </h3>
            <p className="font-Montserrat text-white text-center sm:text-left  text-md  sm:text-sm xl:text-md pb-10">
            In addition to helping you find your dream yacht, we offer a range of comprehensive services, including financing options, insurance, and maintenance packages. Our goal is to make yacht ownership as seamless and enjoyable as possible, allowing you to focus on the pleasures of yachting.
            </p>
            
          </div>
        </div>
        <div className="md:block hidden">
          <div className="flex items-center justify-center w-full my-6 xl:px-36 lg:px-20 ">
            <hr className="flex-grow border-primary-yellow-dark" />
            <span className="px-4 text-3xl 2xl:text-5xl font-semibold font-Montserrat text-black">
              THE BENEFITS OF OWNING A YACHT
            </span>
            <hr className="flex-grow border-primary-yellow-dark " />
          </div>
          <p className="font-Montserrat text-black text-lg 2xl:text-2xl pt-2 pb-5 xl:px-36 lg:px-20 md:px-16 text-center">
          Owning a yacht opens up a world of possibilities. Enjoy spontaneous getaways, host exclusive parties, or simply relax with family and friends in the privacy of your own floating sanctuary. A yacht is not just a mode of transportation; it’s a lifestyle choice that offers unparalleled freedom, luxury, and prestige.
          </p>
        </div>
        <div className="xl:px-44 px-8 py-10">
  <div className="flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-start lg:gap-0 custom-shadow rounded-lg bg-white overflow-hidden lg:h-[25rem] xl:h-[25rem] 2xl:h-[32rem]">  {/* Set container height */}
    <div className="w-full lg:w-1/2 xl:w-1/2 flex h-full">
      <img
        src="/sell_your_yacht.webp"
        className="rounded-t-lg lg:rounded-l-xl w-full h-full object-cover"  // Ensure image fills the container
      />
    </div>
    <div className="w-full lg:w-1/2 flex flex-col items-center lg:rounded-r-xl lg:rounded-l-none lg:items-center justify-center text-center lg:text-left lg:px-16 px-6 py-5">
      <h1 className="font-Montserrat text-black font-bold text-3xl 2xl:text-4xl pt-5">
        Sell your Yacht
      </h1>
      <p className="font-Montserrat text-black 2xl:text-2xl py-5 lg:text-left 2xl:px-3 xl:px-10">
        Looking to sell your yacht? At Centaurus Charter, we provide expert assistance to help you achieve the best value for your vessel. Our extensive network and marketing expertise ensure that your yacht is presented to the right buyers, maximizing its exposure and sale potential. We handle everything from valuations to negotiations, providing a hassle-free selling experience.
      </p>
      <button className="text-white font-Montserrat font-bold bg-primary-blue px-5 py-2 text-xl rounded">
        CONTACT US
      </button>
    </div>
  </div>
</div>
<div className="py-5 xl:px-44 ">
<div className="flex flex-col md:flex-row rounded-lg md:px-10 xl:px-44 items-center  gap-5 justify-center  md:justify-between bg-transparent md:bg-primary-blue py-5">
<button className="text-white font-Montserrat font-bold bg-primary-blue px-5 py-3 text-xl rounded">
        REACH OUT TO US
      </button>
      <div className="">
  <button className="flex items-center justify-center gap-2 px-4 py-3 bg-[#e1ae48] text-[#0d2343]  font-bold rounded-md hover:bg-yellow-600 transition">
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
