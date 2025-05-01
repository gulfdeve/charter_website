"use client";
import { useEffect, useRef, useState } from "react";
import EmblaCarousel from "embla-carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaQuestionCircle, FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/app/context/LanguageContext";
import ContactForm from "@/app/components/Contactform";
import YachtCarousel from "@/app/components/YachtCarousel";
import YachtGallery from "../YachGallery";
import yachtdata from "@/app/components/buyYachtData.json";
import { use } from "react";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";

export default function Home({ params }) {
  const { slug } = use(params);
  const emblaRef = useRef(null);
  const emblaInstance = useRef(null);
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { language } = useLanguage();
  const locale = useLocale();

  useEffect(() => {
    if (!slug) return;

    const yacht = yachtdata.products.find((item) => item.slug === slug);
    setProduct(yacht);
    setIsLoading(false);
  }, [slug]);

  useEffect(() => {
    if (emblaRef.current && product) {
      emblaInstance.current = EmblaCarousel(emblaRef.current, { loop: true });
    }
    return () => emblaInstance.current && emblaInstance.current.destroy();
  }, [product]);

  const scrollPrev = () => emblaInstance.current?.scrollPrev();
  const scrollNext = () => emblaInstance.current?.scrollNext();

  if (isLoading) return <div className="text-center mt-20 uppercase">Loading...</div>;
  if (!product) {
    notFound();
  }

  return (
    <>
      <div className="container mx-auto  nav-space">
        <h1 className=" font-bold text-center mb-4 mt-5 uppercase">{product.translations[locale].name_of_yacht}</h1>
   

        <YachtGallery gallery={product.gallery} />

        <div className="flex flex-col lg:flex-row items-stretch justify-center py-10">
      {/* Wrapper: column on mobile, row at lg and above */}
      <div className="flex flex-col lg:flex-row w-full max-w-7xl rounded-2xl overflow-hidden custom-shadow items-stretch ">

        {/* UPON REQUEST */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-start bg-[#1a428a] p-5 pb-10 shadow-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-white text-3xl font-bold text-center py-7 px-3 uppercase">{product.translations[locale].price}</h1>
            <div className="w-full h-px bg-white" />
            <div className="flex flex-col items-start justify-center">
              <div className="flex flex-row items-center justify-between gap-5 pt-4 lg:pt-12">
                <h4 className="text-white font-medium uppercase">CONDITION:</h4>
                <h4 className="text-white font-bold uppercase">{product.translations[locale].condition}</h4>
              </div>
              <div className="flex flex-row items-center justify-between gap-5 pt-4 lg:pt-10">
                <h4 className="text-white font-medium uppercase">YEAR:</h4>
                <h4 className="text-white uppercase font-bold">{product.translations[locale].year}</h4>
              </div>
              <div className="flex flex-row items-center justify-between gap-5 pt-4 lg:pt-10">
                <h4 className="text-white font-medium uppercase">LOCATION:</h4>
                <h4 className="text-white uppercase font-bold">{product.translations[locale].location}</h4>
              </div>
              <div className="flex flex-row items-center justify-between gap-5 pt-4 lg:pt-10 pb-10">
                <h4 className="text-white font-medium uppercase">AVAILABILITY:</h4>
                <h4 className="text-white font-bold uppercase">{product.translations[locale].availability}</h4>
              </div>
            </div>
          </div>
          <button className="yellow-solid-button w-1/2 mx-auto uppercase">
            CHAT WITH US
          </button>
        </div>

        {/* TECHNICAL SPECS */}
        <div className="w-full lg:w-1/2 flex flex-col bg-white p-5 xl:px-14 lg:px-7">
          <h1 className="text-black text-3xl font-bold text-center py-7 px-3 uppercase">TECHNICAL SPECS</h1>
          <div className="w-full h-px bg-gray-500" />
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-6 py-4">
            <div>
              <h4 className="text-black font-bold uppercase">LENGTH:</h4>
              <h4 className="text-black font-medium uppercase">{product.translations[locale].length}</h4>
            </div>
            <div>
              <h4 className="text-black font-bold uppercase">MAX SPEED:</h4>
              <h4 className="text-black font-medium uppercase">{product.translations[locale].max_speed}</h4>
            </div>
            <div>
              <h4 className="text-black font-bold uppercase">BEAM:</h4>
              <h4 className="text-black font-medium uppercase">{product.translations[locale].beam}</h4>
            </div>
            <div>
              <h4 className="text-black font-bold uppercase">CRUISING SPEED:</h4>
              <h4 className="text-black font-medium uppercase">{product.translations[locale].cruising_speed}</h4>
            </div>
            <div>
              <h4 className="text-black font-bold uppercase">BUILDER:</h4>
              <h4 className="text-black font-medium uppercase">{product.translations[locale].builder}</h4>
            </div>
            <div>
              <h4 className="text-black font-bold uppercase">WATER CAPACITY:</h4>
              <h4 className="text-black font-medium uppercase">{product.translations[locale].water_capacity}</h4>
            </div>
            <div>
              <h4 className="text-black font-bold uppercase">YEAR BUILT:</h4>
              <h4 className="text-black font-medium uppercase">{product.translations[locale].year_build}</h4>
            </div>
            <div>
              <h4 className="text-black font-bold uppercase">FUEL CAPACITY:</h4>
              <h4 className="text-black font-medium uppercase">{product.translations[locale].fuel_capacity}</h4>
            </div>
            <div>
              <h4 className="text-black font-bold uppercase">PROPULSION:</h4>
              <h4 className="text-black font-medium uppercase">{product.translations[locale].propulsion}</h4>
            </div>
            <div>
              <h4 className="text-black font-bold uppercase">ENGINE:</h4>
              <h4 className="text-black font-medium uppercase">{product.translations[locale].engine}</h4>
            </div>
          </div>
        </div>

      </div>
    </div>

        <div className="md:block hidden">
          <div className="flex items-center justify-center w-full my-6 xl:px-36 lg:px-20">
            <hr className="flex-grow border-primary-yellow-dark" />
            <span className="font-Montserrat px-4 text-3xl 2xl:text-3xl font-semibold text-black uppercase">{product.translations[locale].name_of_yacht}</span>
            <hr className="flex-grow border-primary-yellow-dark" />
          </div>
          <p className="text-primary-grey text-md pt-2 pb-5 xl:px-36 lg:px-20 md:px-16 text-center">{product.translations[locale].description}</p>
        </div>

        <ContactForm />
      </div>
      <YachtCarousel />
    </>
  );
}