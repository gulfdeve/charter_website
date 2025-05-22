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
import PageTitleHeading from "@/app/components/PageTitleHeading";
import { Link } from "@/app/i18n/routing";
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
       
   
<PageTitleHeading title={product.translations[locale].name_of_yacht} />
        <YachtGallery gallery={product.gallery} />

        <div className="flex flex-col lg:flex-row items-stretch justify-center py-10">
      {/* Wrapper: column on mobile, row at lg and above */}
      <div className="flex flex-col lg:flex-row w-full max-w-7xl rounded-2xl overflow-hidden custom-shadow items-stretch ">

        {/* UPON REQUEST */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-start bg-primary-blue-2 p-5 pb-10">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-white text-xl font-bold text-center py-7 px-3 uppercase">{product.translations[locale].price}</h3>
            <div className="w-full h-px bg-white" />
            <div className="flex flex-col items-start justify-center">
              <div className="flex flex-row items-center justify-between gap-5 pt-4 lg:pt-12">
                <p className="text-white font-medium uppercase">CONDITION:</p>
                <p className="text-white font-bold uppercase">{product.translations[locale].condition}</p>
              </div>
              <div className="flex flex-row items-center justify-between gap-5 pt-4 lg:pt-10">
                <p className="text-white font-medium uppercase">YEAR:</p>
                <p className="text-white uppercase font-bold">{product.translations[locale].year}</p>
              </div>
              <div className="flex flex-row items-center justify-between gap-5 pt-4 lg:pt-10">
                <p className="text-white font-medium uppercase">LOCATION:</p>
                <p className="text-white uppercase font-bold">{product.translations[locale].location}</p>
              </div>
              <div className="flex flex-row items-center justify-between gap-5 pt-4 lg:pt-10 pb-10">
                <p className="text-white font-medium uppercase">AVAILABILITY:</p>
                <p className="text-white font-bold uppercase">{product.translations[locale].availability}</p>
              </div>
            </div>
          </div>
          <button className="yellow-solid-button md:w-1/2 mx-auto uppercase">
          <Link href={'https://api.whatsapp.com/send?phone=971547928626&text=Hi!%20I%20came%20across%20your%20website.%20I%20want%20to%20inquire%20about%20a%20yacht%20charter%20in%20Dubai.' } target="_blank" rel="noopener noreferrer">
            CHAT WITH US
            </Link>
          </button>
        </div>

        {/* TECHNICAL SPECS */}
        <div className="w-full lg:w-1/2 flex flex-col bg-white p-5 xl:px-14 s:px-10">
          <h3 className="text-black text-xl font-bold text-center py-7 px-3 uppercase">TECHNICAL SPECS</h3>
          <div className="w-full h-px bg-gray-500" />
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-6 py-4">
            <div>
              <p className="text-black font-bold uppercase">LENGTH:</p>
              <p className="text-black font-medium uppercase">{product.translations[locale].length}</p>
            </div>
            <div>
              <p className="text-black font-bold uppercase">MAX SPEED:</p>
              <p className="text-black font-medium uppercase">{product.translations[locale].max_speed}</p>
            </div>
            <div>
              <p className="text-black font-bold uppercase">BEAM:</p>
              <p className="text-black font-medium uppercase">{product.translations[locale].beam}</p>
            </div>
            <div>
              <p className="text-black font-bold uppercase">CRUISING SPEED:</p>
              <p className="text-black font-medium uppercase">{product.translations[locale].cruising_speed}</p>
            </div>
            <div>
              <p className="text-black font-bold uppercase">BUILDER:</p>
              <p className="text-black font-medium uppercase">{product.translations[locale].builder}</p>
            </div>
            <div>
              <p className="text-black font-bold uppercase">WATER CAPACITY:</p>
              <p className="text-black font-medium uppercase">{product.translations[locale].water_capacity}</p>
            </div>
            <div>
              <p className="text-black font-bold uppercase">YEAR BUILT:</p>
              <p className="text-black font-medium uppercase">{product.translations[locale].year_build}</p>
            </div>
            <div>
              <p className="text-black font-bold uppercase">FUEL CAPACITY:</p>
              <p className="text-black font-medium uppercase">{product.translations[locale].fuel_capacity}</p>
            </div>
            <div>
              <p className="text-black font-bold uppercase">PROPULSION:</p>
              <p className="text-black font-medium uppercase">{product.translations[locale].propulsion}</p>
            </div>
            <div>
              <p className="text-black font-bold uppercase">ENGINE:</p>
              <p className="text-black font-medium uppercase">{product.translations[locale].engine}</p>
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

       <ContactForm yachtName={product.translations[locale].name_of_yacht} />
      </div>
      <YachtCarousel />
    </>
  );
}