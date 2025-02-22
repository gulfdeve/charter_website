"use client";
import React from "react";
import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useData } from "@/app/context/DataContext";
import { useLanguage } from "@/app/context/LanguageContext";
import YachtCarousal from "@/app/components/YachtCarousel";
import Link from "next/link";
const page = ({ params }) => {
const { data, loading, error } = useData();
const { language, changeLanguage } = useLanguage();

return (
<>
    <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center py-10 ">
            <h1 className="font-Montserrat text-[#0D2343] text-center font-bold text-4xl">
                YACHT EVENTS DUBAI
            </h1>
        </div>
        <div className="grid grid-col-1 md:grid-cols-2 md:px-4 gap-7 pb-16 container mx-auto">
            {data?.events?.map((event) => (
            <div key={event.id} className="flex flex-col justify-start lg:justify-between rounded-md bg-white shadow-xl">
                <Link href={`/${language}/events/${event.slug}`}>
                <img src={`https://www.centauruscharter.com/product/images/${event.image}`}
                    alt={event.translations[language].title} className="rounded-t-md w-full object-cover" />
                </Link>
                <div className="flex flex-col  justify-start px-5 lg:px-5">
                    <h1 className="text-[#232629] font-Montserrat text-2xl font-bold pt-4">
                        <Link href={`/${language}/events/${event.slug}`}>
                        {event.translations[language].title}
                        </Link>
                    </h1>
                    <p className="text-[#232629] font-Montserrat font-bold text-base pt-2 pb-16">
                      {event.translations[language].heading_2}
                    </p>
                    <div className="bg-[#232629] w-full h-[0.05rem]"></div>
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-col items-start justify-start py-10">
                            <h1 className="text-[#232629] font-Montserrat font-bold text-sm xl:text-lg">
                                Validity Until:
                                <br />
                                {event.validity}
                            </h1>
                        </div>
                        {/* Buttons Section */}
                        <div className="flex xl:flex-row flex-col items-center justify-end gap-3 ">
                            <a href={`${event.whatsapp_url}`} target="_blank"
                                className="blue-solid-button flex items-center">
                                <FaWhatsapp className="xs:text-xl text-lg  mr-1" />
                                WHATSAPP
                            </a>
                            <Link href={`/${language}/events/${event.slug}`} className="blue-solid-button">
                            KNOW MORE
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
    <div className="max-w-7xl mx-auto px-3 py-5 ">
        <p className="font-Montserrat text-gray-500 text-md ">
            Experience the perfect fusion of luxury, elegance, and unforgettable moments on the glistening waters of
            Dubai. As a premier destination for hosting extraordinary events, parties, and exclusive gatherings, Dubai
            offers a captivating backdrop for yacht events like no other. Whether you seek a lavish party, after party,
            a themed cruise, or a special celebration, immerse yourself in the excitement and glamour that awaits
            onboard. Dance under the stars, savor exquisite cuisine, and let the vibrant atmosphere captivate your
            senses.
            <br />
            <br /> <strong>Book your tickets, or reserve a table early to ensure your place for upcoming events.</strong>
        </p>
    </div>
    <YachtCarousal />
</>
);
};

export default page;
