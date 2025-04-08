"use client";
import React from "react";
import { use } from "react";
import { IoIosPricetag } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
// import Link from "next/link";
import { useRouter, usePathname, Link } from "@/app/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { useData } from "@/app/context/DataContext";
import Route from "@/app/components/Route";
import ExperienceCarousal from "@/app/components/ExperienceCarousal";
import ExperienceMobilecarousel from "@/app/components/ExperienceMobilecarousal";
const page = ({ params }) => {
  const { slug } = use(params); // Get slug from the URL
  const locale = useLocale();
  console.log(slug);
  const { data, loading, error } = useData();
  const experience = data?.experiences?.find(
    (experience) => experience.slug === slug
  );
  console.log(locale);
  console.log(experience);


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!experience) return <div>No experience found for this slug.</div>;

  console.log(locale);
  const offers = [
    {
      id: 1,
      image: "./yacht1.webp",
      title: "56 Ft Yacht - Vassia",
      note: "Your Perfect Yacht Wedding in Dubai",
      validity: "AED 5000",
    },
    {
      id: 2,
      image: "./yacht2.webp",
      title: "NIGHT PARTY",
      note: "Get the vibrant night party on a luxurious yacht",
      validity: "AED 5000",
    },
    {
      id: 3,
      image: "./yacht3.webp",
      title: "FISHING TRIP",
      note: "Have a deep sea fishing experience aboard a boat",
      validity: "AED 1725",
    },
    {
      id: 4,
      image: "./yacht4.webp",
      title: "BIRTHDAY PARTY",
      note: "Invite your mates and throw a yacht B'Day party in style",
      validity: "AED 3120",
    },
    {
      id: 5,
      image: "./yacht5.webp",
      title: "CORPORATE EVENTS",
      note: "Organize your business parties and events on a stylish yacht",
      validity: "AED 3120",
    },
  ];

  return (
    <>
      <div className="bg-white h-full w-full mt-14 md:mt-0">
        <div className="flex flex-col items-center justify-center pt-10 ">
          <h1 className=" text-primary-blue text-center font-bold text-xl sm:text:2xl md:text-3xl lg:text-4xl pb-10">
            {experience.translations?.[locale]?.title}
          </h1>
        </div>
        <div className="grid grid-col-1 md:grid-cols-1 md:px-4  gap-7 container mx-auto pb-10">
          
          {
            experience.yachts_data.map((yacht) => (
              <div
              key={yacht.yacht_id}
              className="flex flex-col md:flex-row justify-start overflow-hidden rounded-md bg-white custom-shadow"
            >
              {/* Image with object-cover for proper scaling */}
              <img
                src={`https://www.centauruscharter.com/product/images/${yacht.yacht_image}`}
                alt={yacht.translations?.[locale]?.[0]?.name_of_yacht}
                className=" w-full md:w-[25rem] xl:w-[35rem]  xl:h-[300px] md:h-full object-contain md:object-cover"
              />
              <div className="w-full flex justify-stretch flex-col  justify-center px-4 xl:px-6 md:py-4 ">
                {/* Title with Link */}
                <Link
                  href="/"
                >
                  <h1 className="text-primary-blue  text-xl xl:text-2xl font-bold xl:pt-6  pt-6 md:pb-2 transition-all duration-300 cursor-pointer py-5 md:py-0">
                  {yacht.translations?.[locale]?.[0]?.name_of_yacht}
                  </h1>
                </Link>
                <div className="grid grid-cols-2 lg:grid-cols-4 items-stretch gap-0 rounded-lg w-full overflow-hidden shadow-md mb-7">
                {/* Model */}
                <div className="bg-primary-blue text-white p-2 flex flex-col items-center justify-center text-center w-full h-full">
                <span className="font-bold  text-sm">Model:</span>
                    <span className="font-semibold  text-sm text-primary-yellow">
                    {yacht.translations?.[locale]?.[0]?.model}
                    </span>
                  </div>
                  {/* Length */}
                  <div className="bg-primary-blue text-white p-2 flex flex-col items-center justify-center text-center w-full h-full">
                  <span className="font-bold  text-sm">Length:</span>
                    <span className="font-semibold  text-sm text-primary-yellow">
                      {yacht.translations?.[locale]?.[0]?.size}
                    </span>
                  </div>
                  {/* Guests */}
                  <div className="bg-primary-blue text-white p-2 flex flex-col items-center justify-center text-center w-full h-full">
                  <span className="font-bold  text-sm">Guests:</span>
                    <span className="font-semibold  text-sm text-primary-yellow">
                      {yacht.translations?.[locale]?.[0]?.guests}
                    </span>
                  </div>
                  {/* Good For */}
                  <div className="bg-primary-yellow text-primary-blue w-full p-2 flex flex-col items-center justify-center text-center h-full">
                  <span className="   text-sm">Good For:</span>
                    <span className="font-semibold  text-sm">
                      {/* Birthday/Parties */}
                      {yacht.translations?.[locale]?.[0]?.good_for}
                    </span>
                  </div>
                </div>

                <div className="bg-[#232629] w-full h-[0.05rem] "></div>
                <div className="flex flex-col sm:flex-row flex-grow items-left lg:items-end justify-between w-full py-5 md:gap-3">
                  {/* Pricing Section */}
                  <div className="flex flex-row items-center gap-1 xl:gap-3 py-5 lg:py-0 text-left">
                    <IoIosPricetag className="text-3xl lg:text-3xl" />
                    <div className="flex flex-col items-start justify-start text-left">
                      <h1 className="text-black  font-bold s:text-sm text-xs xl:text-lg">
                        {yacht.hours} Hours Rate
                        <br />
                        <span className="xl:text-xl text-[#232629] text-xs">
                          {yacht.yacht_price.toLocaleString()}
                        </span>
                        <span className="text-primary-yellow s:text-sm  text-xs">
                          {" "}
                          +VAT
                        </span>
                      </h1>
                    </div>
                  </div>

                  {/* Buttons Section */}
                  <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-center gap-2 ml-auto text-right w-full sm:w-auto">
                    <a href={experience.whatsapp_url} target="_blank" className="w-full flex items-center justify-center py-2 px-4 text-base md:text-sm xl:text-lg font-bold tracking-wider uppercase text-primary-yellow bg-primary-blue hover:bg-primary-yellow hover:text-primary-blue hover:scale-105 rounded-md shadow transition duration-150 ease-in-out transform">
                      <FaWhatsapp className="sm:text-md  mr-1" />
                      WHATSAPP
                    </a>
                    <a href={`https://fareharbor.com/embeds/book/centauruscharter/items/${yacht.fareharbor_id}/?full-items=yes&flow=645487`} className="w-full justify-center py-2 px-4 text-base md:text-sm xl:text-lg font-bold uppercase text-primary-yellow bg-primary-blue hover:bg-primary-yellow hover:text-primary-blue hover:scale-105 rounded-md shadow transition duration-150 ease-in-out transform flex flex-grow items-center">
                      KNOW MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
            ))}   
        </div>

        <div className="container mx-auto py-5 md:py-10 ">
          <p
            className="text-gray-500 text-md"
            dangerouslySetInnerHTML={{
              __html: experience.translations?.[locale]?.description || "",
            }}
          />
        </div>
      </div>
      <div>
        <ExperienceCarousal />
      </div>
    </>
  );
};

export default page;
