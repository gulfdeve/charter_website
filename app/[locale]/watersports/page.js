"use client";
import React from "react";
import { IoIosPricetag } from "react-icons/io";
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
    <div className="container mx-auto nav-space">

        <PageTitleHeading title="WATERSPORTS ADD-ON DUBAI" />

        <div className="md:block hidden">

        
        <div className="grid grid-col-1 md:grid-cols-2 gap-7 pb-8">
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
                    <div className="bg-[#232629] w-full h-[0.05rem]"></div>
                        <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center justify-evenly gap-4 py-5">
                            <IoIosPricetag className="text-3xl lg:text-5xl" />
                            <div className="flex flex-col items-start justify-start">
                                <p className="text-[#232629]  font-bold text-sm xl:text-base">
                                    Starting
                                    <br />
                                <span className="xl:text-xl">
                                    AED {package_a.amount.toLocaleString()}
                                </span>
                                </p>
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
    <div className="container mx-auto px-3 py-5 pb-8">
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
                For a perfect excursion with friends and family, book your yachts
                with water sports activity in Dubai today.
        </p>
    </div>

    <ExclusiveOffers />

    <TailorYachtExperience />

    <LocationCarousel />
</>
);
};

export default page;
