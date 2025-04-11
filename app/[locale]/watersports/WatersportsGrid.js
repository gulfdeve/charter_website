"use client";
import React from "react";
import { IoIosPricetag } from "react-icons/io";
import { Link } from "@/app/i18n/routing";

export default function WatersportsGrid({ packages, language }) {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 gap-7 pb-8">
      {packages?.map((package_a) => (
        <div
          key={package_a.id}
          className="flex flex-col justify-start lg:justify-between rounded-md bg-white custom-shadow"
        >
          <Link href={`/watersports/${package_a.slug}`}>
            <img
              src={`https://www.centauruscharter.net/product/images/${package_a.image}`}
              alt={package_a.translations[language].title}
              className="rounded-t-md w-full object-cover"
            />
          </Link>
          <div className="flex flex-col justify-start px-5 lg:px-5">
            <h2 className="text-[#232629] text-2xl font-bold pt-4">
              <Link href={`/watersports/${package_a.slug}`}>
                {package_a.translations[language].title}
              </Link>
            </h2>
            <p className="text-[#232629] text-base pt-2 pb-4">
              {package_a.translations[language].preview_text}
            </p>
            <div className="bg-[#232629] w-full h-[0.05rem]"></div>
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center justify-evenly gap-4 py-5">
                <IoIosPricetag className="text-3xl lg:text-5xl" />
                <div className="flex flex-col items-start justify-start">
                  <p className="text-[#232629] font-bold text-sm xl:text-base">
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
  );
} 