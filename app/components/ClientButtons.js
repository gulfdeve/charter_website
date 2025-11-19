'use client';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from '@/app/i18n/routing';

export default function ClientButtons({ offer }) {
  return (
    <div className="flex xl:flex-row flex-col justify-end items-stretch gap-3 md:gap-1 xl:gap-3 ">
      <a
        href={`${offer.whatsapp_url}`}
        target="_blank"
        className="blue-solid-button flex items-center"
      >
        <FaWhatsapp className="xs:text-xl text-lg mr-1" />
        WHATSAPP
      </a>
      <Link href={`/offers/${offer.slug}`} className="blue-solid-button">
        KNOW MORE
      </Link>
    </div>
  );
}
