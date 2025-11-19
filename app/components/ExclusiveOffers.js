import React from 'react';
import { Link } from '../i18n/routing';

const ExclusiveOffers = () => {
  return (
    <div className="flex  flex-col lg:flex-row items-center justify-between">
      <div className="overflow-hidden w-full lg:w-1/2 lg:h-[27rem] sm:h-[200px] md:h-[250px]">
        <img
          src="/footer-exclusive-offer.webp"
          className="w-full  sm:h-full object-cover object-left"
          alt="Footer Exclusive Offer"
        />
      </div>
      <div className="flex flex-col items-center lg:items-start py-8 sm:p-8 lg:p-12 justify-center bg-primary-blue w-full lg:w-1/2 lg:h-[27rem] ">
        <h2 className=" text-white text-3xl lg:text-4xl lg:pb-2 font-bold text-center px-6 lg:px-0">
          Exclusive Offers
        </h2>
        <p className=" text-white text-center lg:text-left text-base  px-11 lg:w-[25rem] lg:px-0 xl: pt-4 pb-10">
          When you book your next yacht tour, you can take an advantage of wide
          selection of offers and discounts by Centaurus yachts. From summer
          offers, birthday party to membership discounts we have all for you.
        </p>
        <Link
          href="/offers"
          className="px-5 py-3 bg-primary-blue-2 text-white text-xl  font-bold rounded-md "
        >
          EXPLORE ALL OFFERS
        </Link>
      </div>

      <div></div>
    </div>
  );
};

export default ExclusiveOffers;
