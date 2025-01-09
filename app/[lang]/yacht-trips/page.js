"use client";
import React from "react";
import { IoIosPricetag } from "react-icons/io";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import { useData } from "@/app/context/DataContext";

const page = () => {
  const { data, loading, error } = useData();
  const { language } = useLanguage();

  return (
    <div className="bg-white h-full w-full">
      <div className="flex flex-col items-center justify-center py-10">
        <h1 className="font-Montserrat text-[#0D2343] text-center font-bold text-4xl pb-4">
          YACHT TRIPS & EXPERIENCES IN DUBAI
        </h1>
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 md:px-4 xl:px-52 gap-7 py-10 container mx-auto">
        {!loading &&
          data?.experiences?.map((experience) => {
            const title =
              experience.translations?.[language]?.title ||
              experience.translations?.en?.title ||
              "Untitled";

            return (
              <div
                key={experience.id}
                className="flex flex-col justify-start lg:justify-between rounded-md bg-white px-2 shadow-xl"
              >
                {/* Image with object-cover for proper scaling */}
                <Link href={`/yacht-trips/${experience.slug}`}>
                  <img
                    src={`https://www.centauruscharter.com/product/images/${experience.thumbnail_image}`}
                    alt="yacht"
                    className="rounded-md h-[300px] w-full object-cover"
                  />
                </Link>
                <div className="felx flex-col items-start justify-start px-5">
                  {/* Title with Link */}
                  <Link href={`/yacht-trips/${experience.slug}`}>
                    <h1 className="text-[#232629] font-Montserrat text-2xl font-bold pt-6 hover:text-blue-600 transition-all duration-300 cursor-pointer">
                      {title}
                    </h1>
                  </Link>
                  <p className="text-[#848484] font-Montserrat text-md pt-2 pb-9">
                    {experience.preview_text}
                  </p>
                  <div className="bg-[#232629] w-full h-[0.05rem]"></div>
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center justify-evenly gap-4 py-5">
                      <IoIosPricetag className="text-3xl lg:text-5xl" />
                      <div className="flex flex-col items-start justify-start">
                        <h1 className="text-[#232629] font-Montserrat font-bold text-sm xl:text-base">
                          Starting
                          <br />
                          <span className="xl:text-xl">AED 3120</span>
                        </h1>
                      </div>
                    </div>
                    {/* Button with Link */}
                    <Link
                      href={`/yacht-trips/${experience.slug}`}
                      className="flex flex-row items-center justify-center py-2 px-4 xl:px-5 xl:py-3 rounded-md bg-[#0d2343] text-[#e1ae48] font-Montserrat font-bold text-sm xl:text-lg"
                    >
                      KNOW MORE
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default page;
