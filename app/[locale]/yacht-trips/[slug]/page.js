'use client'
import React from "react";
import { IoIosPricetag } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
// import Link from "next/link";
import { useRouter, usePathname, Link } from "@/app/i18n/routing";
import { useLocale } from "next-intl";
import { useData } from "@/app/context/DataContext";
import Route from "@/app/components/Route";
import ExperienceCarousal from "@/app/components/ExperienceCarousal";
import ExperienceMobilecarousel from "@/app/components/ExperienceMobilecarousal"
const page =  () => {
 
  const { data, loading, error } = useData();
  
  const locale = useLocale
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
                <h1 className=" text-primary-blue text-center font-bold text-4xl pb-10">
               YACHT EXPERIENCES
                </h1>
              </div><div className="grid grid-col-1 md:grid-cols-1 md:px-4 xl:px-44  gap-7 container mx-auto pb-10">
                  {offers.map((offer) => (
                    <div
                      key={offer.id}
                      className="flex flex-col md:flex-row justify-start  rounded-md bg-white px-2 shadow-xl"
                    >
                      {/* Image with object-cover for proper scaling */}
                      <img
                        src={offer.image}
                        alt={offer.title}
                        className="rounded-md w-[35rem] md:w-[25rem] xl:w-[35rem]  xl:h-[400px] md:h-[300px] h-[400px]  object-cover" />
                      <div className="flex flex-col  justify-center px-3 xl:px-6 ">
                        {/* Title with Link */}
                        <Link
                          href={`/yacht-trips/${offer.title
                            .toLowerCase()
                            .replace(/ /g, "-")}`}
                        >
                          <h1 className="text-primary-blue  text-2xl font-bold xl:pt-6  pt-6 md:pb-2 hover:text-blue-600 transition-all duration-300 cursor-pointer py-5 md:py-0">
                            {offer.title}
                          </h1>
                        </Link>
                        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 items-center gap-0 rounded-lg w-full overflow-hidden shadow-md mb-7">
                          {/* Model */}
                          <div className="bg-primary-blue text-white p-2 flex flex-col items-center ">
                            <span className="font-bold  text-sm">Model:</span>
                            <span className="font-semibold  text-sm text-primary-yellow">
                              Majesty
                            </span>
                          </div>
                          {/* Length */}
                          <div className="bg-primary-blue text-white p-2 flex flex-col items-center">
                            <span className="font-bold  text-sm">Length:</span>
                            <span className="font-semibold  text-sm text-primary-yellow">
                              56 Feet
                            </span>
                          </div>
                          {/* Guests */}
                          <div className="bg-primary-blue text-white p-2 flex flex-col items-center">
                            <span className="font-bold  text-sm">Guests:</span>
                            <span className="font-semibold  text-sm text-primary-yellow">
                              21
                            </span>
                          </div>
                          {/* Good For */}
                          <div className="bg-primary-yellow text-primary-blue xl:w-36 p-2 flex flex-col items-center">
                            <span className="   text-sm">Good For:</span>
                            <span className="font-semibold  text-sm">
                              Birthday/Parties
                            </span>
                          </div>
                        </div>

                        <div className="bg-[#232629] w-full h-[0.05rem] "></div>
                        <div className="flex flex-row items-center justify-between  py-5 md:gap-3">
                          {/* Pricing Section */}
                          <div className="flex flex-row items-center justify-evenly gap-1 xl:gap-3 py-5">
                            <IoIosPricetag className="text-3xl lg:text-3xl" />
                            <div className="flex flex-col items-start justify-start">
                              <h1 className="text-black  font-bold s:text-sm text-xs xl:text-lg">
                                3 Hours Rate
                                <br />
                                <span className="xl:text-xl text-[#232629] text-xs">
                                  {offer.validity}
                                </span>
                                <span className="text-primary-yellow s:text-sm  text-xs">
                                  {" "}
                                  +VAT
                                </span>
                              </h1>
                            </div>
                          </div>

                          {/* Buttons Section */}
                          <div className="flex xl:flex-row flex-col items-center justify-end gap-3 ">
                            <button className="flex flex-row items-center justify-center py-2 px-4  rounded-md bg-primary-blue text-primary-yellow  font-bold text-[10px] md:text-xs xl:text-lg">
                              <FaWhatsapp className="xs:text-xl text-lg  mr-1" />
                              WHATSAPP
                            </button>
                            <button className="flex flex-row items-center justify-center py-2 px-6 md:py-2 md:px-4  rounded-md bg-primary-blue text-primary-yellow  font-bold text-[10px] md:text-sm xl:text-lg">
                              KNOW MORE
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
             
                <div className="max-w-7xl mx-auto px-3 md:px-16 2xl:px-0 py-5 ">
                  <p className=" text-gray-500 text-md ">
                    Discover the beauty of the night sky and deep blue sea as you sail
                    into a most happening Night Yacht Party. Treat yourself to something
                    truly special - an evening on our luxurious yacht, surrounded by
                    stunning views of Dubai Marina, Atlantis and Burj Al Arab and an
                    unforgettable atmosphere.<br /> Pick from our selection of cozy sailing
                    vessels — from 36ft smallest to 118ft largest one — to make your
                    night party one-of-a-kind. Our boats are equipped with modern
                    amenities and plenty of space as you dance to music by some of the
                    favorite tunes or enjoy a relaxing time with friends. Make your
                    moments magical with our unrivaled hospitality - all while you savor
                    the complimentary drinks. Our experienced crew ensure your party is
                    nothing short of extraordinary. Our hassle-free booking process
                    makes it easy to plan your next yacht party. Keep the party scene on
                    till the midnight. We have great deal here.<br/> Plan
                    your unique night out in Dubai.<br/> Offer is not valid on pubic holidays
                    and festive seasons & valid only for UAE residents.T&Cs apply*
                    <br />
                    <br />{" "}
                    <strong>
                      For a perfect excursion with friends and family, book your yachts
                      with water sports activity in Dubai today.
                    </strong>
                  </p>
                </div>
      
      </div>
      <div >
<ExperienceCarousal/>
      </div>
      
    </>
  );
};

export default page;
