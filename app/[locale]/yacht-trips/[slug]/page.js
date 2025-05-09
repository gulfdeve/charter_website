"use client";
import React from "react";
import { use } from "react";
import { IoIosPricetag } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { useRouter, usePathname, Link } from "@/app/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { useData } from "@/app/context/DataContext";
import Route from "@/app/components/Route";
import ExperienceCarousal from "@/app/components/ExperienceCarousal";
import ExperienceMobilecarousel from "@/app/components/ExperienceMobilecarousal";
import PageTitleHeading from "@/app/components/PageTitleHeading";
import { notFound } from "next/navigation";
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
  if (!experience) {
    notFound();
  }

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
      <div className="container mx-auto nav-space">
        <PageTitleHeading title={experience.translations?.[locale]?.title} />
        <div className="grid grid-col-1 md:grid-cols-2 gap-7 pb-10">
          {experience.yachts_data.map((yacht) => (
            <div
              key={yacht.yacht_id}
              className="flex flex-col p-3 sm:p-5 overflow-hidden rounded-md bg-white custom-shadow"
            >
                {/* Title with Link */}
                <Link href={`/yacht-rentals/${yacht.slug}`}>
                  <h2 className="text-primary-blue text-xl font-bold pb-4 hover:text-primary-blue-2 transition-all duration-300 cursor-pointer">
                    {yacht.translations?.[locale]?.[0]?.name_of_yacht}
                  </h2>
                </Link>
              {/* Image with object-cover for proper scaling */}
              <div className="relative">

              <Link href={`/yacht-rentals/${yacht.slug}`}>
			  <img
                src={`https://www.centauruscharter.net/product/images/${yacht.yacht_image}`}
                alt={yacht.translations?.[locale]?.[0]?.name_of_yacht}
                className="rounded-lg w-full object-cover"
                />
			  </Link>
        <div className="lg:absolute grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 items-center gap-0 bg-primary-blue-light rounded-lg center-absolute -bottom-5 left-0 right-0 lg:mx-5 mt-4 lg:mt-0">
                  {/* Model */}
                  <div className="text-primary-grey p-2 flex flex-col items-center justify-center text-center w-full h-full">
                    <span className="text-sm">Model:</span>
                    <span className="font-semibold text-sm text-black">
                      {yacht.translations?.[locale]?.[0]?.model}
                    </span>
                  </div>
                  {/* Length */}
                  <div className="text-primary-grey p-2 flex flex-col items-center justify-center text-center w-full h-full">
                    <span className="text-sm">Length:</span>
                    <span className="font-semibold text-sm text-black">
                      {yacht.translations?.[locale]?.[0]?.size}
                    </span>
                  </div>
                  {/* Guests */}
                  <div className="text-primary-grey p-2 flex flex-col items-center justify-center text-center w-full h-full">
                    <span className="text-sm">Guests:</span>
                    <span className="font-semibold text-sm text-black">
                      {yacht.translations?.[locale]?.[0]?.guests}
                    </span>
                  </div>
                  {/* Good For */}
                  <div className="text-primary-grey w-full p-2 flex flex-col items-center justify-center text-center h-full">
                    <span className="text-sm">Good For:</span>
                    <span className="font-semibold text-black text-sm">
                      {/* Birthday/Parties */}
                      {yacht.translations?.[locale]?.[0]?.good_for}
                    </span>
                  </div>
                </div>
                </div>
              <div className="w-full flex justify-stretch flex-col pt-5 lg:pt-10">
                

                <div className="bg-primary-black w-full h-[0.05rem] "></div>
                <div className="flex flex-col sm:flex-row flex-grow items-left lg:items-end justify-between w-full pt-5 gap-2 md:gap-3">
                  {/* Pricing Section */}
                  <div className="flex flex-row items-center gap-1 xl:gap-3 lg:py-0 text-left">
                    <IoIosPricetag className="text-primary-blue-light-2 text-3xl lg:text-3xl" />
                    <div className="flex flex-col items-start justify-start text-left">
                      <p className="text-primary-grey font-semibold s:text-sm text-xs xl:text-lg">
                        {yacht.hours} Hours Rate
                        <br />
                        <span className="font-bold text-lg lg:text-xl text-primary-red">
                         AED {(Number(yacht.yacht_price) || 0).toLocaleString()}
                        </span>
                        <span className="text-primary-blue-2 s:text-sm  text-xs">
                          {" "}
                          +VAT
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Buttons Section */}
                  <div className="flex flex-col xs:flex-row md:flex-col lg:flex-row items-center gap-2 ml-auto text-right w-full sm:w-auto">
                    <a
                      href={experience.whatsapp_url}
                      target="_blank"
                      className="w-full flex items-center justify-center py-2 px-4 text-base md:text-sm xl:text-lg font-bold tracking-wider uppercase text-white bg-primary-blue-2 hover:scale-105 rounded-md shadow transition duration-150 ease-in-out transform"
                    >
                      <FaWhatsapp className="sm:text-md  mr-1" />
                      WHATSAPP
                    </a>
                    <a
                      href={`https://fareharbor.com/embeds/book/centauruscharter/items/${yacht.fareharbor_id}/?full-items=yes&flow=645487`}
                      className="w-full justify-center py-2 px-4 text-base md:text-sm xl:text-lg font-bold uppercase text-white bg-primary-blue-2 hover:scale-105 rounded-md shadow transition duration-150 ease-in-out transform flex flex-grow items-center"
                    >
                      BOOK NOW
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="container mx-auto py-5 md:py-10 ">
          <p
            className="text-base text-primary-grey"
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
