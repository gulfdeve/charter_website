'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from '@/app/i18n/routing';
import Image from 'next/image';

export default function EventCard({ event, language, index }) {
  const isPriority = index < 2;
  return (
    <div className="flex flex-col justify-start lg:justify-between rounded-md bg-white custom-shadow">
      <Link href={`/events/${event.slug}`}>
        <Image
          src={`https://www.centauruscharter.net/product/images/${event.image}`}
          alt={event.translations[language].title}
          className="rounded-t-md w-full object-cover"
          width={1000}
          height={600}
          priority={isPriority}
          loading={isPriority ? 'eager' : 'lazy'}
        />
      </Link>
      <div className="flex flex-col justify-start px-5 lg:px-5">
        <h2 className="text-primary-blue text-2xl font-bold pt-4">
          <Link href={`/events/${event.slug}`}>
            {event.translations[language].title}
          </Link>
        </h2>
        <p className="text-primary-black font-bold text-base pt-2 pb-4">
          {event.translations[language].heading_2}
        </p>
        <p className="text-red-500 py-2 font-bold">Limited Slots Available</p>
        <div className="bg-primary-black w-full h-[0.05rem]"></div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col items-start justify-start py-10">
            <p className="text-red-500 font-bold text-sm xl:text-lg">
              Validity Until:
              <br />
              {event.validity}
            </p>
          </div>
          {/* Buttons Section */}
          <div className="flex xl:flex-row flex-col items-stretch justify-end gap-3">
            <a
              href={`${event.whatsapp_url}`}
              target="_blank"
              className="blue-solid-button flex items-center"
            >
              <FaWhatsapp className="xs:text-xl text-lg mr-1 text-center" />
              WHATSAPP
            </a>
            <Link
              href={`/events/${event.slug}`}
              className="blue-solid-button text-center"
            >
              KNOW MORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
