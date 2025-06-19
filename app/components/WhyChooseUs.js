"use client";
import React, { use } from "react";
import { useLocale, useTranslations } from "next-intl";

const WhyChooseUs = () => {
  const t = useTranslations();

  return (
    <div className="bg-white h-auto  bg-fixed container mx-auto py-12 lg:p-16">
      <h2 className=" text-primary-blue text-center pb-7">
        {t('home.why-choose')} <br className="sm:hidden"></br> {t('home.centaurus-charter')}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center md:gap-10">
        <div className="flex flex-col items-center justify-start ">
          <div className="p-2 sm:p-4 md:p-6 aspect-square flex items-center justify-center">
            <img alt="luxury experience badge" src="/Luxury Experience Badge.png" className="w-10" />
          </div>
          <h3 className=" text-primary-grey py-3">
            {t('home.luxury-experience')}
          </h3>
          <p className=" text-primary-grey text-center pb-3 md:pb-0">
            {t('home.luxury-experience-description')}
          </p>
        </div>
        <div className="flex flex-col items-center justify-start ">
          <div className="p-2 sm:p-4 md:p-6 aspect-square flex items-center justify-center">
            <img alt="fleet of yachts" src="/Fleet of Yachts.png" className="w-12" />
          </div>
          <h3 className=" text-primary-grey py-3">
          {t('home.fleet-of-yachts')}
          </h3>
          <p className=" text-primary-grey text-center pb-3 md:pb-0">
          {t('home.fleet-of-yachts-description')}
          </p>
        </div>
        <div className="flex flex-col items-center justify-start">
          <div className="p-2 sm:p-4 md:p-6 aspect-square flex items-center justify-center">
            <img alt="certified crew" src="/Certified Crew.png" className="w-12" />
          </div>
          <h3 className=" text-primary-grey py-3">
          {t('home.certified-crew')}
          </h3>
          <p className=" text-primary-grey  xl:px-6 text-center pb-3 md:pb-0">
          {t('home.certified-crew-description')}
          </p>
        </div>
        <div className="flex flex-col items-center justify-start">
          <div className="p-2 sm:p-4 md:p-6 aspect-square flex items-center justify-center">
            <img alt="Quality Service" src="/Quality Service.png" className="w-12" />
          </div>
          <h3 className=" text-primary-grey py-3">
          {t('home.quality-service')}
          </h3>
          <p className=" text-primary-grey xl:px-6 text-center pb-3 md:pb-0">
          {t('home.quality-service-description')}
          </p>
        </div>
        <div className="flex flex-col items-center justify-start ">
          <div className=" p-2 sm:p-4 md:p-6 aspect-square flex items-center">
            <img alt="Outstanding Customer Support" src="/Outstanding Customer Support.png" className="w-12" />
          </div>
          <h3 className=" text-primary-grey py-3">
          {t('home.outstanding-customer-support')}
          </h3>
          <p className=" text-primary-grey xl:px-6  text-center pb-3 md:pb-0">
          {t('home.outstanding-customer-support-description')}
          </p>
        </div>
        <div className="flex flex-col items-center justify-start ">
          <div className="border-none p-2 sm:p-4 md:p-6 aspect-square flex items-center justify-center">
            <img alt="Multilingual Staff" src="/Multilingual Staff.png" className="w-12" />
          </div>
          <h3 className=" text-primary-grey py-3">
            {t('home.multilingual-staff')}
          </h3>
          <p className=" text-primary-grey  xl:px-6 text-center pb-3 md:pb-0">
          {t('home.multilingual-staff-description')}


          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
