"use client";

import React, { useEffect, useRef, useState } from "react";
// import Link from "next/link";
import { useRouter, usePathname, Link } from "@/app/i18n/routing";
import EmblaCarousel from "embla-carousel";
import { FaArrowLeft, FaArrowRight, FaYoutube } from "react-icons/fa";
import { useData } from "@/app/context/DataContext";
import { useLanguage } from "@/app/context/LanguageContext";
import { useLocale } from "next-intl";
import Loading from "./loading";
import ExperienceCarousal from "@/app/components/ExperienceCarousal";
import PageTitleHeading from "../../components/PageTitleHeading";
/* 
  YachtCard Component:
  - Receives a single yacht object as prop.
  - Creates its own carousel using a ref and an Embla instance.
  - Renders navigation buttons (only if more than one image exists).
*/
const YachtCard = ({ yacht }) => {
  const { data, loading, error } = useData();
  const { language, changeLanguage } = useLanguage();

  const emblaRef = useRef(null);
  const emblaApi = useRef(null);

  useEffect(() => {
    if (emblaRef.current) {
      // Initialize the carousel on the container referenced by emblaRef.
      emblaApi.current = EmblaCarousel(emblaRef.current, { loop: true });
    }
    // Clean up on unmount.
    return () => {
      if (emblaApi.current) {
        emblaApi.current.destroy();
      }
    };
  }, [yacht]);

  const scrollPrev = () => {
    if (emblaApi.current) emblaApi.current.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi.current) emblaApi.current.scrollNext();
  };

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <>
      <div className="flex flex-col justify-between bg-white rounded-md shadow-2xl h-auto relative ">
        <div className="relative">
          {/* Embla Carousel Container */}
          <div className="overflow-hidden rounded-t-md" ref={emblaRef}>
            {/* The inner wrapper must have display:flex so that slides line up horizontally. */}
            <div className="flex">
              {yacht.images.map((img, index) => (
                <div key={index} className="min-w-full">
                  <Link
                    href={`yacht
				-rentals/${yacht.slug}`}
                  >
                    <img
                      src={`https://www.centauruscharter.com/product/galleryimages/${img}`}
                      alt={`Slide ${index + 1}`}
                      className=" w-full object-contain"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons – show only if more than one image */}
          {yacht.images.length > 1 && (
            <>
              <button
                aria-label="go previous slide"
                onClick={scrollPrev}
                className="bg-primary-blue text-primary-yellow hover:bg-primary-yellow hover:text-primary-blue transition duration-150 ease-in-out transform absolute top-1/2 left-2 transform -translate-y-1/2 p-2 rounded-full shadow-md"
              >
                <FaArrowLeft />
              </button>
              <button
                aria-label="go next slide"
                onClick={scrollNext}
                className="bg-primary-blue text-primary-yellow hover:bg-primary-yellow hover:text-primary-blue transition duration-150 ease-in-out transform absolute top-1/2 right-2 transform -translate-y-1/2 p-2 rounded-full shadow-md"
              >
                <FaArrowRight />
              </button>
            </>
          )}

          {/* Optional Badges */}
          {yacht.category.includes("bestSellers") && (
            <div className="absolute top-4 left-0 bg-primary-blue text-primary-yellow text-md  py-0.5 px-2">
              BEST SELLER
            </div>
          )}
          {yacht.category.includes("premium") && (
            <div className="absolute top-4 left-0 bg-primary-blue text-primary-yellow text-md  py-0.5 px-2">
              PREMIUM YACHT
            </div>
          )}
          {/* <div className="absolute top-2 right-2">
            <FaYoutube size={36} className="text-[#ff0033]" />
          </div> */}
        </div>

        {/* Yacht Details */}
        <div className="flex flex-col justify-between flex-grow p-4">
        <div className="flex flex-col items-start">
          <Link href={`yacht-rentals/${yacht.slug}`}>
            <h2 className="text-primary-blue  text-xl font-bold pb-4 hover:text-blue-600 transition-all duration-300 cursor-pointer">
              {yacht.title}
            </h2>
          </Link>

          <p className=" text-xs s:text-sm md:text-xs lg:text-sm text-primary-blue text-left">
            Model: <span className="font-bold">{yacht.model}</span> | Length:{" "}
            <span className="font-bold">{yacht.length}</span> | Guests:{" "}
            <span className="font-bold">{yacht.guests}</span>
          </p>
          <p className=" text-primary-blue font-bold text-xl pt-5 pb-2">
            AED {yacht.price}{" "}
            <span className="text-primary-blue">Per Hour</span>
          </p>
          
        </div>
        <a
            href={`https://fareharbor.com/embeds/book/centauruscharter/items/${
              yacht.fareharbor_id
            }/?full-items=yes&flow=645487&back=${encodeURIComponent(
              typeof window !== "undefined" ? window.location.href : ""
            )}`}
            className="flex flex-row items-center justify-center py-2 w-full md:py-2 md:px-4 rounded-md bg-primary-yellow text-primary-blue hover:bg-primary-blue hover:text-primary-yellow  font-bold text-base md:text-sm xl:text-lg transition-all duration-300"
          >
            Book Now
          </a>
      </div>
      </div>
    </>
  );
};

/*
  Tabs Component:
  - Fetches yacht data from context.
  - Maps the data to include a list of images for each yacht.
  - Filters yachts by active tab and renders a list of YachtCard components.
*/
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("allYachts");
  const [yachts, setYachts] = useState([]);
  const { language } = useLanguage();
  const { data, loading, error } = useData();
  const locale = useLocale();

  useEffect(() => {
    if (data?.products) {
      // Map each product to include its gallery images as an array.
      const mappedYachts = data.products.map((item) => {
        let category = ["allYachts"];
        if (item.per_hour_price > 4000) category.push("premium");
        if (["56ft-lagoona", "61ft-silvercreek"].includes(item.slug)) {
          category.push("bestSellers");
        }
        return {
          id: item.id,
          images: item.gallery?.map((img) => img.image) || [],
          title: item.translations?.[locale]?.name_of_yacht,
          slug: item.slug,
          fareharbor_id: item.fareharbor_id,
          length: item.translations?.[locale]?.size,
          model: item.translations?.[locale]?.model,
          guests: item.translations?.[locale]?.guests,
          price: item.per_hour_price,
          category,
        };
      });
      setYachts(mappedYachts);
    }
  }, [data, locale]);

  const renderContent = () => {
    // if (loading) {
    //   return <Loading />;
    // }

    const filteredYachts = yachts.filter((yacht) =>
      yacht.category.includes(activeTab)
    );
    if (loading) return <div className="text-center mt-20">Loading...</div>;
    if (error) return <div className="text-center mt-20">Error: {error}</div>;
    if (filteredYachts.length === 0) {
      return (
        <div className="text-center mt-20">
          No yachts found for this category.
        </div>
      );
    }
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-10 gap-6 container mx-auto">
          {filteredYachts.map((yacht) => (
            <YachtCard key={yacht.id} yacht={yacht} />
          ))}
        </div>
        <div className="container text-left mx-auto px-3 py-5 pb-8">
          <p className=" text-gray-500 text-md ">
            A <strong>luxury yacht rental</strong> is the perfect way to enjoy an experience
            tailored to your specific needs. We offer the best luxury yacht
            experiences in UAE. Whether you're looking for a luxurious getaway
            or want a boat for a special event like a wedding, honeymoon,
            birthday party - we have just what you need. Centaurus offers
            extensive fleet of yachts that offers something for every taste and
            budget. Our experienced team with knowledge of the local waters can
            help you plan an extraordinary experience.
            <br />
            <br /> A wide range of itineraries and destinations available, from
            the Dubai Marina to Burj Al Arab. <strong>Renting a yacht</strong> in Dubai Marina or
            Dubai Harbor is made hassle free by booking online instantly
          </p>
        </div>
      </>
    );
  };

  return (
    <div className="w-full bg-white mt-14 lg:mt-0 ">
      <PageTitleHeading title="LUXURY YACHT RENTALS DUBAI" />

      <div className="flex justify-center items-center gap-8 md:gap-8 text-xs sm:text-base md:text-lg font-semibold py-2 pb-10 md:py-7 px-2 ">
        <button onClick={() => setActiveTab("allYachts")}>ALL YACHTS</button>
        <button onClick={() => setActiveTab("bestSellers")}>
          BEST SELLERS
        </button>
        <button onClick={() => setActiveTab("premium")}>PREMIUM</button>
      </div>
      <div className="p-0 md:p-6 text-center">{renderContent()}</div>
      <div className="mt-10">
        <ExperienceCarousal />
      </div>
    </div>
  );
};

export default Tabs;