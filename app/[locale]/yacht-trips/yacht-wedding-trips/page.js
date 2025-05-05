"use client";
import React from "react";
import Videoweddingtrip from "@/app/components/Videoweddingtrip";
import { useRouter, usePathname, Link } from "@/app/i18n/routing";
import Videosharedtours from "@/app/components/Video-sharedtours";
import { FaWhatsapp } from "react-icons/fa";
import YachtCarousel from "@/app/components/YachtCarousel";
import { useData } from "@/app/context/DataContext";
import { useLocale, useTranslations } from "next-intl";
import VideoLocal from "@/app/components/VideoLocal";
const page = () => {
  const { data, loading, error } = useData();
  const locale = useLocale();

  return (
    <>
      {/* <div>
        <Videosharedtours/>
      </div> */}
      <VideoLocal
        filename="/yacht-wedding-trips.mp4"
        section="yacht-wedding-trips.mp4"
      />

      <div className="container mx-auto bg-white nav-space">
        <div className="flex flex-col items-center justify-center pb-12 lg:pt-5">
          <h1 className=" text-primary-blue text-center font-bold text-lg md:text-3xl lg:text-4xl pb-4">
            YACHT WEDDING CHARTER
          </h1>
          <p className=" text-primary-blue text-sm text-center">
            Your Perfect Yacht Wedding in Dubai
          </p>
        </div>
        <div className="md:container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-10">
          {!loading &&
            data?.products?.map((product) => (
              <div
                key={product.id}
                className="relative flex flex-col md:p-5 p-3 rounded-lg shadow-custom"
              >
                <div className="relative">
                <Link href={`/yacht-rentals/${product.slug}`}>
                      <h2 className="text-primary-blue text-xl font-bold pb-4 hover:text-blue-600 transition-all duration-300 cursor-pointer">
                        {product.translations?.[locale]?.name_of_yacht}
                      </h2>
                    </Link>
                <Link href={`/yacht-rentals/${product.slug}`}>
                  <img
                    src={`https://www.centauruscharter.net/product/images/${product.image}`}
                    className="rounded-lg w-full object-contain"
                    alt={product.translations?.[locale].name_of_yacht}
                  />
                </Link>
                <div className="absolute grid grid-cols-3 items-center gap-0 rounded-lg center-absolute -bottom-5 left-0 right-0 px-3">
                  <div className="bg-[#f1f1f1] text-primary-grey p-1 xl:p-2 flex flex-col items-center rounded-l-lg">
                    <span className="text-xs">Model:</span>
                    <span className="font-bold text-xs md:text-sm text-black">{product.translations?.[locale]?.model}</span>
                  </div>
                  <div className="bg-[#f1f1f1] text-primary-grey p-1 xl:p-2 flex flex-col items-center">
                    <span className="text-xs">Length:</span>
                    <span className="font-bold text-xs md:text-sm text-black">{product.translations?.[locale]?.size}</span>
                  </div>
                  <div className="bg-[#f1f1f1] text-primary-grey p-1 xl:p-2 flex flex-col items-center rounded-r-lg">
                    <span className="text-xs">Guests:</span>
                    <span className="font-bold text-xs md:text-sm text-black">{product.translations?.[locale]?.guests}</span>
                  </div>
                </div>
                </div>
                <div className="flex flex-col flex-grow justify-end py-4">
                  <div className=" mt-5">{product.id === 24 && (
                        <p className="text-xs font-normal italic text-primary-grey">Poseidon 118ft Trips: An Add on of AED 1000 per hour will be added for every additional 10 pax where the occupancy surpasses the 40 passengers.
                        </p>
                        )
                      }
                  </div>
                <div className="flex flex-row justify-between items-center z-20 border-t border-gray-400 pt-3  mt-5">
                  <div className="p-1 xl:p-2 flex flex-col text-left"><span className=" text-xs md:text-sm">Price per hour:</span>
                  <span>{product.id === 24 && (
                      <p className="text-xs font-normal italic text-primary-grey">Starting from</p> )
                          }
                  </span>        
                  <span className="font-bold text-md md:text-lg lg:text-xl text-primary-red">AED {product.per_hour_price}</span>
                  </div>
                  <a
                    href={`https://fareharbor.com/embeds/book/centauruscharter/items/${
                      product.fareharbor_id
                    }/?full-items=yes&flow=645487&back=${encodeURIComponent(
                      "http://example.com"
                    )}`}
                    className="blue-solid-button"
                  >
                    Book Now
                  </a>
                </div>
              
                </div>
              </div>
            ))}
        </div>
        <div className="mt-10">
          <div className="flex flex-col  lg:flex-row-reverse items-center justify-center lg:justify-start lg:gap-0  rounded-lg bg-primary-blue overflow-hidden ">
            <div className="w-full lg:w-1/2 xl:w-1/2">
              <img
                src="/Inquire-Now.webp"
                className="rounded-t-lg lg:rounded-l-xl  w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:rounded-r-xl lg:items-start justify-center text-center lg:text-left lg:px-16 px-6 py-5">
              <h2 className=" text-white font-bold text-2xl pt-5">
                Let Us Make Your Dream Wedding Come True
              </h2>
              <p className=" text-white text-xl pt-2 pb-8">
                An unforgettable journey, turning your wedding dreams into
                reality. Our yacht wedding charter redefines romance, offering
                an extraordinary backdrop for your special day.
              </p>
              <button className="blue-solid-button">
                INQUIRE
              </button>
            </div>
          </div>
        </div>
        <div className="md:block hidden">
          <div className="flex items-center justify-center w-full my-6 xl:px-36 lg:px-20 mt-20">
            <hr className="flex-grow border-primary-yellow-dark" />
            <span className="font-Montserrat px-4 text-2xl lg:text-3xl font-semibold  text-black">
              CUSTOMIZED YOUR WEDDING
            </span>
            <hr className="flex-grow border-primary-yellow-dark " />
          </div>
          <p className=" text-primary-grey text-base pb-5 xl:px-36 lg:px-20 md:px-16 text-center">
            Tailor your celebration to perfection with our customizable yacht
            wedding packages. From intimate ceremonies to grand affairs, our
            expert team ensures every detail reflects your unique love story,
            creating a day that's truly yours.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-5 mt-10">
          <div>
            <img className="rounded-t-lg" src="/BBQ.webp" />
            <p className="bg-primary-blue-2 text-primary-yellow text-center  textsm  font-bold p-2 rounded-b-lg md:px-10 lg:px-0 ">
              LIVE BBQ
            </p>
          </div>
          <div>
            <img className="rounded-t-lg" src="/Picturemoments.webp" />
            <p className="bg-primary-blue-2 text-primary-yellow text-center  textsm  font-bold p-2 rounded-b-lg ">
              PREMIUM DRINKS
            </p>
          </div>
          <div>
            <img className="rounded-t-lg" src="/Amazing-View.webp" />
            <p className="bg-primary-blue-2 text-primary-yellow text-center  textsm  font-bold p-2 rounded-b-lg ">
              AMAZING VIEW
            </p>
          </div>
          <div>
            <img className="rounded-t-lg" src="/Great-Food.webp" />
            <p className="bg-primary-blue-2 text-primary-yellow text-center  textsm  font-bold p-2 rounded-b-lg md:px-10 lg:px-0 ">
              GREAT FOOD
            </p>
          </div>
          <div>
            <img className="rounded-t-lg" src="/Amazing-View.webp" />
            <p className="bg-primary-blue-2 text-primary-yellow text-center  text-sm font-bold p-2 rounded-b-lg ">
              AMAZING VIEW
            </p>
          </div>
        </div>
        <div className="md:block hidden">
          <div className="flex items-center justify-center w-full my-6 xl:px-36 lg:px-20 mt-20 ">
            <hr className="flex-grow border-primary-yellow-dark" />
            <span className="font-Montserrat px-4 text-2xl lg:text-3xl font-semibold  text-black">
              YACHT MARRIAGE PROPOSAL
            </span>
            <hr className="flex-grow border-primary-yellow-dark " />
          </div>
          <p className=" text-primary-grey text-base pb-5 xl:px-36 lg:px-20 md:px-16 text-center">
            Elevate your proposal to new heights with our yacht marriage
            proposal experiences. Sail into the sunset with your beloved,
            surrounded by the beauty of the open sea, creating a moment that's
            as breathtaking as your commitment.
          </p>
        </div>
        <div className="flex flex-col  md:flex-row items-center justify-center py-10">
          <div>
            <div className="xl:w-[30rem] 2xl:w-[40rem] lg:w-[32rem] md:w-[12rem]">
              <img
                src="Marry-me-on-a-yacht.webp"
                className="md:h-[670px] xl:h-[600px] lg:h-[560px]"
              />
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-start sm:justify-start justify-center bg-primary-blue px-5  xl:px-20 xl:py-12 py-5  md:h-[670px] xl:h-[600px] lg:h-[560px]">
            <h2 className=" text-white text-center  text-2xl xl:text-3xl pt-7">
              Why Choose Us
            </h2>
            <h3 className="text-primary-yellow  text-2xl">
              Unmatched Elegance
            </h3>
            <p className=" text-white text-center sm:text-left  text-xs  sm:text-sm xl:text-md pb-10">
              Step aboard our fleet of yachts, where unmatched elegance meets
              impeccable design. Each vessel is a testament to our commitment to
              providing the pinnacle of luxury, ensuring a setting as
              extraordinary as your love.
            </p>
            <h3 className="text-primary-yellow  text-2xl">Experienced Crew</h3>
            <p className=" text-white text-center sm:text-left  text-xs  sm:text-sm xl:text-md pb-10">
              Behind every successful event is a team of experts. Our crew and
              event planners bring a wealth of experience, ensuring your wedding
              day unfolds seamlessly. Trust us to navigate every detail, leaving
              you free to savor every moment.
            </p>
            <h3 className="text-primary-yellow  text-2xl">
              Reviews from Couples
            </h3>
            <p className=" text-white text-center sm:text-left  text-xs  sm:text-sm xl:text-md pb-10">
              Don't just take our word for it – our track record speaks for
              itself. Glowing testimonials from couples who have celebrated
              their love with us underscore our commitment to delivering
              exceptional experiences. Join the ranks of those who chose
              extraordinary for their special day.
            </p>
          </div>
        </div>
        <div className="md:block hidden">
          <div className="flex items-center justify-center w-full my-6 xl:px-36 lg:px-20 mt-20">
            <hr className="flex-grow border-primary-yellow-dark" />
            <span className="font-Montserrat px-4 text-2xl lg:text-3xl font-semibold  text-black">
              EXPERIENCE OF A LIFETIME
            </span>
            <hr className="flex-grow border-primary-yellow-dark " />
          </div>
          <p className=" text-primary-grey text-base pb-5 xl:px-36 lg:px-20 md:px-16 text-center">
            Create lasting memories with our yacht charter for weddings. Our
            photography and videography services capture every breathtaking
            moment against the stunning backdrop of the open sea, ensuring your
            wedding day is etched in time.
          </p>
        </div>
        <div className="grid md:grid-cols-12 items-center gap-6">
          <img src="/marryleft.webp" className="rounded-lg md:col-span-3" />
          <img src="/marrycenter.webp" className="rounded-lg md:col-span-6 " />
          <img src="/marryright.webp" className="rounded-lg md:col-span-3" />
        </div>
        <div className="py-5 xl:px-32 ">
          <div className="flex flex-col md:flex-row rounded-lg md:px-10 items-center  gap-5 justify-center  md:justify-between bg-transparent md:bg-primary-blue py-5">
            <button className="text-white  font-bold bg-primary-blue px-5 py-3 text-xl rounded">
              REACH OUT TO US
            </button>
            <div className=" flex md:flex-row md:gap-10">
              <button className="flex items-center justify-center gap-2 px-4 py-3 bg-primary-blue text-primary-yellow border border-primary-yellow-dark  font-bold rounded-md hover:bg-primary-blue-2 transition">
                <FaWhatsapp size={20} />
                WHATSAPP US
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-3 bg-primary-blue text-primary-yellow border border-primary-yellow-dark  font-bold rounded-md hover:bg-primary-blue-2 transition">
                GET A QUOTE
              </button>
            </div>
          </div>
        </div>
      </div>
      <YachtCarousel />
    </>
  );
};

export default page;
