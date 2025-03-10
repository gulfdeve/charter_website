"use client";
import React from "react";
import { IoIosPricetag } from "react-icons/io";
// import Link from "next/link";
import { useRouter, usePathname, Link } from "@/app/i18n/routing";

import { useLocale } from "next-intl";
import { useData } from "@/app/context/DataContext";
import ExperienceMobilecarousal from "@/app/components/ExperienceMobilecarousal"
import TailorYachtExperience from "@/app/components/TailorYachtExperience"
import ExclusiveOffers from "../../components/ExclusiveOffers";
import Page from "../contact/page";
import PageTitleHeading from "@/app/components/PageTitleHeading";
const page = () => {
const { data, loading, error } = useData();

const locale = useLocale

return (
<>
    <div className="max-w-7xl mx-auto mt-14 md:mt-0">

        <PageTitleHeading title="YACHT TRIPS & EXPERIENCES IN DUBAI" />

        <div className="md:block hidden">
        <div className="grid grid-col-1 md:grid-cols-2 md:px-4 gap-7 pb-16">
            {!loading &&
            data?.experiences?.map((experience) => {
            const title =
            experience.translations?.[locale]?.title ||
            experience.translations?.en?.title ||
            "Untitled";

            return (
            <div key={experience.id}
                className="flex flex-col justify-start lg:justify-between rounded-md bg-white shadow-xl">
                {/* Image with object-cover for proper scaling */}
                <Link href={`/yacht-trips/${experience.slug}`}>
                <img src={`https://www.centauruscharter.com/product/images/${experience.image}`} alt="yacht"
                    className="rounded-tl-md rounded-tr-md w-full object-cover" />
                </Link>
                <div className="felx flex-col items-start justify-start px-5">
                    {/* Title with Link */}

                    <h2
                        className="text-[#232629]  text-2xl font-bold pt-6 hover:text-blue-600 transition-all duration-300 cursor-pointer">
                        <Link href={`/yacht-trips/${experience.slug}`}>
                        {title}
                        </Link>
                    </h2>
                    <p className="text-[#848484]  text-md pt-2 pb-9">
                        {/* {experience.translations[locale].preivew_text} */}
                    </p>
                    <div className="bg-[#232629] w-full h-[0.05rem]"></div>
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center justify-evenly gap-4 py-5">
                            <IoIosPricetag className="text-3xl lg:text-5xl" />
                            <div className="flex flex-col items-start justify-start">
                                <p className="text-[#232629]  font-bold text-sm xl:text-base">
                                    Starting
                                    <br />
                                    <span className="xl:text-xl">AED {experience.amount}</span>
                                </p>
                            </div>
                        </div>
                        {/* Button with Link */}
                        <Link href={`/yacht-trips/${experience.slug}`} className="blue-solid-button">
                        KNOW MORE
                        </Link>
                    </div>
                </div>
            </div>
            );
            })}
        </div>
        </div>
        <div className="md:hidden block">
            <ExperienceMobilecarousal/>
        </div>
        <div className="max-w-7xl mx-auto px-3 ">
            <p className=" text-gray-500 text-md ">
                Dubai is a popular destination for yachting. The Arabian coastline
                is lined with beautiful azure beaches and top attractions, which are
                perfect for leisure trips and intimate celebrations. Centaurus
                Charter has a versatile range of yachts and boats in Dubai that are
                suitable for any event. Our captain & crew has years of experience,
                can customize your trip as per your choices and is always eager to
                help.
                <br />
                <br /> Experience yachting life with end-to-end personalized
                services, stunning views of the surroundings with plenty of
                watersports for your next excursion.
            </p>
        </div>
    </div>
    
    <ExclusiveOffers />

    <TailorYachtExperience />
</>
);
};

export default page;
