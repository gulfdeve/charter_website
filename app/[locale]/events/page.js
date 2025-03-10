"use client";
import React from "react";
import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useData } from "@/app/context/DataContext";
import { useLanguage } from "@/app/context/LanguageContext";
import YachtCarousal from "@/app/components/YachtCarousel";
import Eventmobilecarousal from '@/app/components/EventMobilecarousal'
import PageTitleHeading from "@/app/components/PageTitleHeading";
// import Link from "next/link";
import { useRouter, usePathname, Link } from "@/app/i18n/routing";
// import Loading from "./loading";
const page = ({ params }) => {
const { data, loading, error } = useData();
const { language, changeLanguage } = useLanguage();

// if(loading){
//     return <Loading />;
// }

return (
<>
    <div className="max-w-7xl mx-auto mt-14 md:mt-0">

        <PageTitleHeading title="YACHT EVENTS DUBAI" />

        <div className="hidden md:block">
        <div className="grid grid-col-1 md:grid-cols-2 md:px-4 gap-7 pb-4 container mx-auto">
            {data?.events?.map((event) => (
            <div key={event.id} className="flex flex-col justify-start lg:justify-between rounded-md bg-white shadow-xl">
                <Link href={`/events/${event.slug}`}>
                <img src={`https://www.centauruscharter.com/product/images/${event.image}`}
                    alt={event.translations[language].title} className="rounded-t-md w-full object-cover" />
                </Link>
                <div className="flex flex-col  justify-start px-5 lg:px-5">
                    <h2 className="text-[#232629]  text-2xl font-bold pt-4">
                        <Link href={`/events/${event.slug}`}>
                        {event.translations[language].title}
                        </Link>
                    </h2>
                    <p className="text-[#232629]  font-bold text-base pt-2 pb-4">
                      {event.translations[language].heading_2}
                    </p>
                    <div className="bg-[#232629] w-full h-[0.05rem]"></div>
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-col items-start justify-start py-10">
                            <p className="text-[#232629]  font-bold text-sm xl:text-lg">
                                Validity Until:
                                <br />
                                {event.validity}
                            </p>
                        </div>
                        {/* Buttons Section */}
                        <div className="flex xl:flex-row flex-col items-center justify-end gap-3 ">
                            <a href={`${event.whatsapp_url}`} target="_blank"
                                className="blue-solid-button flex items-center">
                                <FaWhatsapp className="xs:text-xl text-lg  mr-1" />
                                WHATSAPP
                            </a>
                            <Link href={`/events/${event.slug}`} className="blue-solid-button">
                            KNOW MORE
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
        </div>
        <div className="block md:hidden">
<Eventmobilecarousal/>
</div>
    </div>
    <div className="max-w-7xl mx-auto px-3 pb-5  ">
        <p className=" text-gray-500 text-md ">
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
