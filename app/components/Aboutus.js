'use client';
import React from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';

const Aboutus = () => {
  const t = useTranslations();

  return (
    <div className="relative lg:flex-row center justify-center lg:justify-between py-10 lg:py-32">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-white"
        style={{
          // backgroundImage: "url('/images/bg-water.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: -2, // Place behind everything
        }}
      ></div>

      {/* Semi-Transparent Background Color */}
      <div className="absolute inset-0 bg-primary-blue-light opacity-70 z-[-1]"></div>

      <div className="z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col order-2 md:order-1">
          <h2 className="uppercase text-3xl py-5 xl:pb-10 xl:pt-2 text-primary-blue-2 font-bold text-center md:text-left">{t('home.about-us')}</h2>
          <p className="text-center pb-7 md:text-left leading-8">{t('home.about-us-description')}</p>
          <div className="mx-auto md:mx-0">
            <Link href="/aboutus">
              <button className="blue-solid-button">{t('button.read-more')}</button>
            </Link>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <Image alt="about us" src="images/poseidon.webp" className="rounded-lg w-full" width={800} height={600} />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
