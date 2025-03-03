"use client";
import React from "react";
import { IoIosPricetag } from "react-icons/io";
// import Link from "next/link";
import { useRouter, usePathname, Link } from "@/app/i18n/routing";
import { useLanguage } from "@/app/context/LanguageContext";
import { useData } from "@/app/context/DataContext";

const page = () => {
const { data, loading, error } = useData();
const { language } = useLanguage();

return (
<>
    <div className="max-w-7xl mx-auto mt-14 md:mt-0">
        <div className="flex flex-col items-center justify-center py-10">
            <h1 className=" text-primary-blue text-center font-bold text-4xl">
                YACHT TRIPS & EXPERIENCES IN DUBAI
            </h1>
        </div>
        <div className="grid grid-col-1 md:grid-cols-2 md:px-4 gap-7 pb-16">
            {!loading &&
            data?.experiences?.map((experience) => {
            const title =
            experience.translations?.[language]?.title ||
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
                        {experience.translations[language].preivew_text}
                    </p>
                    <div className="bg-[#232629] w-full h-[0.05rem]"></div>
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center justify-evenly gap-4 py-5">
                            <IoIosPricetag className="text-3xl lg:text-5xl" />
                            <div className="flex flex-col items-start justify-start">
                                <p className="text-[#232629]  font-bold text-sm xl:text-base">
                                    Starting
                                    <br />
                                    <span className="xl:text-xl">AED 3120</span>
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
    <div className="flex  flex-col lg:flex-row items-center justify-between pt-24">
        <div className="overflow-hidden w-full lg:w-1/2 lg:h-[27rem] h-[350px] sm:h-[200px] md:h-[250px]">
            <img src="/footer-exclusive-offer.webp" className="w-full  h-full object-cover object-left"
                alt="Footer Exclusive Offer" />
        </div>
        <div
            className="flex flex-col items-center lg:items-start lg:p-12 justify-center bg-[#E2BA4D] w-full lg:w-1/2 lg:h-[27rem] h-[35rem]">
            <h2 className=" text-primary-blue text-5xl lg:text-4xl lg:pb-4 font-bold text-center px-6 lg:px-0">
                Exclusive Offers
            </h2>
            <p className=" text-primary-blue text-center lg:text-left text-base  px-11 lg:w-[25rem] lg:px-0 xl: py-10">
                When you book your next yacht tour, you can take an advantage of
                wide selection of offers and discounts by Centaurus yachts. From
                summer offers, birthday party to membership discounts we have all
                for you.
            </p>
            <button className="px-5 py-3 bg-primary-blue text-white text-xl  font-bold rounded-md ">
                EXPLORE ALL OFFERS
            </button>
        </div>

        <div></div>
    </div>
    <div
        className="flex flex-col items-center justify-center bg-primary-blue w-full h-[23rem] lg:h-[17rem] xxs:h-[27rem] ">
        <h2 className=" text-[#E2BA4D] text-3xl lg:text-4xl lg:pt-8 font-bold text-center px-6 lg:px-0">
            Tailor your Yacht Charter Experience in Dubai
        </h2>
        <p className=" text-white text-center  text-base  px-5  lg:px-0  py-10">
            Live your life in a new way and get in touch with our agent for your
            customized tours
        </p>
        <button className="px-5 py-3 bg-[#E2BA4D] text-primary-blue text-xl  font-bold rounded-md ">
            CONTACT US
        </button>
    </div>
</>
);
};

export default page;
