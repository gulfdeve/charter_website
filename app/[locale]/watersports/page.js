"use client";
import React from "react";
import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useData } from "@/app/context/DataContext";
import { useLanguage } from "@/app/context/LanguageContext";
import YachtCarousal from "@/app/components/YachtCarousel";
import LocationCarousel from "@/app/components/LocationCarousel";
import WatersportCarousal from "@/app/components/WatersportCarousal"
import { useRouter, usePathname, Link } from "@/app/i18n/routing";
import TailorYachtExperience from "@/app/components/TailorYachtExperience";
import ExclusiveOffers from "@/app/components/ExclusiveOffers";
import PageTitleHeading from "@/app/components/PageTitleHeading";

const page = ({ params }) => {
const { data, loading, error } = useData();
const { language, changeLanguage } = useLanguage();

return (
<>
    <div className="max-w-7xl mx-auto mt-14 md:mt-0">

        <PageTitleHeading title="WATERSPORTS ADD-ON DUBAI" />

        <div className="md:block hidden">

        
        <div className="grid grid-col-1 md:grid-cols-2 md:px-4 gap-7 pb-8 container mx-auto">
            {data?.packages?.map((package_a) => (
            <div key={package_a.id}
                className="flex flex-col justify-start lg:justify-between rounded-md bg-white custom-shadow">
                <Link href={`/watersports/${package_a.slug}`}>
                <img src={`https://www.centauruscharter.com/product/images/${package_a.image}`}
                    alt={package_a.translations[language].title} className="rounded-t-md w-full object-cover" />
                </Link>
                <div className="flex flex-col  justify-start px-5 lg:px-5">
                    <h2 className="text-[#232629]  text-2xl font-bold pt-4">
                        <Link href={`/watersports/${package_a.slug}`}>
                        {package_a.translations[language].title}
                        </Link>
                    </h2>
                    <p className="text-[#232629]  text-base pt-2 pb-4">
                        {package_a.translations[language].preview_text}
                    </p>
                    <div className="flex items-center justify-between mt-2 py-8 border-t-2">
                        <div className="gap-1 sm:gap-3 flex items-center">
                            <svg className="w-8 h-8 sm:w-12 sm:h-12 text-primary-blue" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M18.045 3.007 12.31 3a1.965 1.965 0 0 0-1.4.585l-7.33 7.394a2 2 0 0 0 0 2.805l6.573 6.631a1.957 1.957 0 0 0 1.4.585 1.965 1.965 0 0 0 1.4-.585l7.409-7.477A2 2 0 0 0 21 11.479v-5.5a2.972 2.972 0 0 0-2.955-2.972Zm-2.452 6.438a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z">
                                </path>
                            </svg>
                            <div className="flex flex-col ">
                                <span className="text-sm font-medium text-gray-500">
                                    Starting
                                </span>
                                <span className="text-xl font-bold text-gray-900">
                                    AED {package_a.amount.toLocaleString()}
                                </span>
                            </div>
                        </div>
                        <button className="blue-solid-button">KNOW MORE</button>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
    <div className="md:hidden block">
        <WatersportCarousal/>
    </div>
    </div>
    <div className="max-w-7xl mx-auto px-3 py-5 pb-8">
        <p className=" text-gray-500 text-md ">
            Explore the beautiful coastline of the Arabian Gulf, the sun warming
            your skin, water lapping at your feet, and a warm breeze whispering in
            your ears. We have the best watersports activities with yacht
            chartering to suit any time of year. No matter what you're looking
            for, you can book online with complete ease. We offer a range of day
            trips that take you off the beaten track to explore some of Dubai's
            most exquisite sights. Whether you want an adrenaline-filled adventure
            or an easygoing day on the water, we've got something for everyone.
            <br />
            <br />{" "}
            <strong>
                For a perfect excursion with friends and family, book your yachts
                with water sports activity in Dubai today.
            </strong>
        </p>
    </div>

    <ExclusiveOffers />

    <TailorYachtExperience />

    <LocationCarousel />
</>
);
};

export default page;
