import React from "react";
import { IoIosPricetag } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Route from "@/app/components/Route";
const page = async ({ params }) => {
  const { slug } = await params;
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
    <><div className="bg-white h-full w-full">
      <div className="flex flex-col items-center justify-center py-10 ">
        <h1 className="font-Montserrat text-[#0D2343] text-center font-bold text-4xl pb-4">
          YACHT TRIPS & EXPERIENCES IN DUBAI
        </h1>
      </div>
      <div className="grid grid-col-1 md:grid-cols-1 md:px-4 xl:px-48 2xl:px-[40rem] gap-7">
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
                href={`/yachttrip/${offer.title
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
              >
                <h1 className="text-[#0D2343] font-Montserrat text-2xl font-bold xl:pt-6  pt-6 md:pb-2 hover:text-blue-600 transition-all duration-300 cursor-pointer py-5 md:py-0">
                  {offer.title}
                </h1>
              </Link>
              <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 items-center gap-0 rounded-lg w-full overflow-hidden shadow-md mb-7">
                {/* Model */}
                <div className="bg-[#0d2343] text-white p-2 flex flex-col items-center ">
                  <span className="font-bold font-Montserrat text-sm">
                    Model:
                  </span>
                  <span className="font-semibold font-Montserrat text-sm text-[#e1ae48]">
                    Majesty
                  </span>
                </div>
                {/* Length */}
                <div className="bg-[#0d2343] text-white p-2 flex flex-col items-center">
                  <span className="font-bold font-Montserrat text-sm">
                    Length:
                  </span>
                  <span className="font-semibold font-Montserrat text-sm text-[#e1ae48]">
                    56 Feet
                  </span>
                </div>
                {/* Guests */}
                <div className="bg-[#0d2343] text-white p-2 flex flex-col items-center">
                  <span className="font-bold font-Montserrat text-sm">
                    Guests:
                  </span>
                  <span className="font-semibold font-Montserrat text-sm text-[#e1ae48]">
                    21
                  </span>
                </div>
                {/* Good For */}
                <div className="bg-[#e1ae48] text-[#0d2343] xl:w-36 p-2 flex flex-col items-center">
                  <span className="  font-Montserrat text-sm">Good For:</span>
                  <span className="font-semibold font-Montserrat text-sm">
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
                    <h1 className="text-black font-Montserrat font-bold s:text-sm text-xs xl:text-lg">
                      3 Hours Rate
                      <br />
                      <span className="xl:text-xl text-[#232629] text-xs">
                        {offer.validity}
                      </span>
                      <span className="text-[#e1ae48] s:text-sm font-Montserrat text-xs">
                        {" "}
                        +VAT
                      </span>
                    </h1>
                  </div>
                </div>

                {/* Buttons Section */}
                <div className="flex xl:flex-row flex-col items-center justify-end gap-3 ">
                  <button className="flex flex-row items-center justify-center py-2 px-4  rounded-md bg-[#0d2343] text-[#e1ae48] font-Montserrat font-bold text-[10px] md:text-xs xl:text-lg">
                    <FaWhatsapp className="xs:text-xl text-lg  mr-1" />
                    WHATSAPP
                  </button>
                  <button className="flex flex-row items-center justify-center py-2 px-6 md:py-2 md:px-4  rounded-md bg-[#0d2343] text-[#e1ae48] font-Montserrat font-bold text-[10px] md:text-sm xl:text-lg">
                    KNOW MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div><Route /></>
  );
};

export default page;
