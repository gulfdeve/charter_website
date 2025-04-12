"use client";
import React, { useEffect, useRef } from "react";
import EmblaCarousel from "embla-carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { useData } from "../context/DataContext";
import { useLanguage } from "@/app/context/LanguageContext";
import Image from "next/image";
import { useRouter, usePathname, Link } from "@/app/i18n/routing";
import { useLocale } from "next-intl";
import { IoIosPricetag } from "react-icons/io";
export default function OfferCarousel() {
    const locale = useLocale();
  const { data, loading } = useData();
  const { language } = useLanguage();
  const emblaRef = useRef(null);
  const emblaInstance = useRef(null);

  // Initialize Embla carousel with autoplay functionality
  useEffect(() => {
    if (emblaRef.current) {
      emblaInstance.current = EmblaCarousel(emblaRef.current, {
        align: "start",
        loop: true,
      });
      const autoplay = setInterval(() => {
        emblaInstance.current?.scrollNext();
      }, 10000);
      return () => {
        clearInterval(autoplay);
        emblaInstance.current?.destroy();
      };
    }
  }, []);

  const scrollPrev = () => emblaInstance.current?.scrollPrev();
  const scrollNext = () => emblaInstance.current?.scrollNext();

  return (
    <div className="container mx-auto md:px-4 pb-16">
    {/* Embla "viewport" container */}
    <div ref={emblaRef} className="overflow-hidden">
      {/* Embla "container" for slides: using flex for horizontal layout */}
      <div className="flex gap-4">
        {!loading &&
          data?.offers?.map((offer) => (
            <div
              key={offer.id}
              // This width shows one full offer card plus a partial view of the next
              className="flex-[0_0_85%] md:flex-[0_0_50%] lg:flex-[0_0_40%]"
            >
              <div className="flex flex-col justify-start lg:justify-between rounded-md bg-white h-full overflow-hidden border border-gray-400 md:border-none xl:p-10 shadow-none">
                {/* offer Image */}
                <Link href={`/offers/${offer.slug}`}>
                  <img
                    src={`https://www.centauruscharter.net/product/images/${offer.image}`}
                    alt={offer.translations[locale].title}
                    className="rounded-tl-md rounded-tr-md w-full object-cover"
                  />
                </Link>
                <div className="flex flex-col justify-start px-5 lg:px-5 flex-grow">
                  {/* offer Title */}
                  <h2 className="text-[#232629] text-lg font-bold pt-4">
                    <Link href={`/offers/${offer.slug}`}>
                      {offer.translations[locale].title}
                    </Link>
                  </h2>
                  {/* offer Heading */}
                  <p className="text-[#232629] font-bold text-xs pt-2 pb-4">
                    {offer.translations[locale].heading_2}
                  </p>
                  {/* Separator */}
                  <div className="bg-[#232629] w-full h-[0.05rem]"></div>
                  {/* Validity Info */}
                  <div className="flex flex-col items-start justify-start py-2">
                    <p className="text-[#232629] font-bold text-sm xl:text-lg">
                      Validity Until:
                      <br />
                      {offer.validity}
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between pb-5 px-5">
                  {/* Buttons */}
                  <div className="w-full flex flex-col sm:flex-row items-center justify-end gap-2">
                    <a
                      href={`${offer.whatsapp_url}`}
                      target="_blank"
                      className="w-full flex justify-center py-2 px-4 text-base md:text-sm xl:text-lg font-bold tracking-wider uppercase text-primary-yellow bg-primary-blue hover:bg-primary-yellow hover:text-primary-blue hover:scale-105 rounded-md shadow transition duration-150 ease-in-out transform items-center"
                    >
                      WHATSAPP
                    </a>
                    <Link
                      href={`/offers/${offer.slug}`}
                      className="w-full flex justify-center py-2 px-4 text-base md:text-sm xl:text-lg font-bold uppercase text-primary-yellow bg-primary-blue hover:bg-primary-yellow hover:text-primary-blue hover:scale-105 rounded-md shadow transition duration-150 ease-in-out transform text-center items-center"
                    >
                      KNOW MORE
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  </div>
  );
}
