"use client";
import React from "react";
import Videoweddingtrip from "@/app/components/Videoweddingtrip";
// import Link from "next/link";
import { useRouter, usePathname, Link } from "@/app/i18n/routing";
import Videosharedtours from "@/app/components/Video-sharedtours";
import { FaWhatsapp } from "react-icons/fa";
import YachtCarousel from "@/app/components/YachtCarousel"
import { useData } from "@/app/context/DataContext";
import { useLocale, useTranslations } from "next-intl";
const page = () => {
    const { data, loading, error } = useData();
    const locale = useLocale();
 

  return (
    <>
      {/* <div>
        <Videosharedtours/>
      </div> */}
     
      <div className="container mx-auto bg-white nav-space">
        <div className="flex flex-col items-center justify-center py-12 lg:pt-14"> 
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
              className="flex flex-col justify-stretch bg-white rounded-md shadow-2xl h-auto"
            >
              <Link href={`/yacht-rentals/${product.slug}`}>
                <img
                  src={`https://www.centauruscharter.net/product/images/${product.image}`}
                  className="rounded-t-md w-full object-contain"
                  alt={product.translations?.[locale].name_of_yacht}
                />
              </Link>
              <div className="flex flex-col justify-between flex-grow p-4">
              <div className="flex flex-col">
                <Link href={`/yacht-rentals/${product.slug}`}>
                  <h2 className="text-primary-blue text-base sm:text-xl font-bold xl:pt-6 md:pb-2 hover:text-blue-600 transition-all duration-300 cursor-pointer py-1 md:py-0">
                  {product.translations?.[locale]?.name_of_yacht}
                  </h2>
                </Link>
                <p className="text-xs s:text-sm md:text-xs lg:text-sm text-primary-blue">
                Model:
                  <span className=" text-primary-blue font-bold">
                    {" "}
                    {product.translations?.[locale]?.model}
                  </span>{" "}
                | Length:
                  <span className=" text-primary-blue font-bold">
                    {" "}
                    {product.translations?.[locale]?.size}
                  </span>{" "}
                  | Guests:
                  <span className=" text-primary-blue font-bold">
                    {" "}
                    {product.translations?.[locale]?.guests}
                  </span>
                </p>
                <p className=" text-primary-blue font-bold text-base sm:text-xl pt-4 pb-2">
                  AED  {product.per_hour_price}{" "}
                  <span className=" text-primary-blue">
                    Per Hour
                  </span>
                </p>
              
              </div>
              
              <a
                  href={`https://fareharbor.com/embeds/book/centauruscharter/items/${
                    product.fareharbor_id
                  }/?full-items=yes&flow=645487&back=${encodeURIComponent(
                    "http://example.com"
                  )}`}
                  className="flex-row items-center justify-center text-center py-2 w-full md:py-2 md:px-4 rounded-md bg-primary-yellow text-primary-blue hover:bg-primary-blue hover:text-primary-yellow font-bold text-base md:text-sm xl:text-lg transition-all duration-300"
                >
                  Book Now
                </a>
                </div>
            </div>
           
          ))}
        </div>
        <div>
          <p className="text-xs  text-gray-400 xl:px-44 px-2 pt-2">
            *POSEIDON 118FT TRIPS: An Add on of AED 1000 per hour will be added
            for every additional 10 pax where the occupancy surpasses the 50
            passengers
          </p>
        </div>
        <div className="mt-10">
          <div className="flex flex-col  lg:flex-row-reverse items-center justify-center lg:justify-start lg:gap-0  custom-shadow rounded-lg bg-primary-blue overflow-hidden ">
            <div className="w-full lg:w-1/2 xl:w-1/2">
              <img
                src="/Inquire-Now.webp"
                className="rounded-t-lg lg:rounded-l-xl  w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:rounded-r-xl lg:items-start justify-center text-center lg:text-left lg:px-16 px-6 py-5">
              <h2 className=" text-white font-bold text-2xl 2xl:text-4xl pt-5">
                Let Us Make Your Dream Wedding Come True
              </h2>
              <p className=" text-white 2xl:text-2xl py-2 pb-5">
                An unforgettable journey, turning your wedding dreams into
                reality. Our yacht wedding charter redefines romance, offering
                an extraordinary backdrop for your special day.
              </p>
              <button className="flex items-center justify-center gap-2 px-7 py-3 bg-primary-blue text-primary-yellow border border-primary-yellow-dark   font-bold rounded-md hover:bg-primary-blue-2 transition">
                INQUIRE
              </button>
            </div>
          </div>
        </div>
        <div className="md:block hidden">
        <div className="flex items-center justify-center w-full my-6 xl:px-36 lg:px-20 ">
            <hr className="flex-grow border-primary-yellow-dark" />
            <span className="px-4 text-2xl 2xl:text-5xl font-semibold  text-black">
            CUSTOMIZED YOUR WEDDING
            </span>
            <hr className="flex-grow border-primary-yellow-dark " />
          </div>
          <p className=" text-black text-md 2xl:text-2xl  pb-5 xl:px-36 lg:px-20 md:px-16 text-center">
          Tailor your celebration to perfection with our customizable yacht wedding packages. From intimate ceremonies to grand affairs, our expert team ensures every detail reflects your unique love story, creating a day that's truly yours.
          </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5  gap-5 ">
          <div>
            <img src="/BBQ.webp" />
            <h2 className="bg-primary-blue-2 text-primary-yellow text-center  textsm  font-bold p-2 rounded-b-lg md:px-10 lg:px-0 ">
              LIVE BBQ
            </h2>
          </div>
          <div>
            <img src="/Picturemoments.webp" />
            <h2 className="bg-primary-blue-2 text-primary-yellow text-center  textsm  font-bold p-2 rounded-b-lg ">
            PREMIUM DRINKS
            </h2>
          </div>
          <div>
            <img src="/Amazing-View.webp" />
            <h2 className="bg-primary-blue-2 text-primary-yellow text-center  textsm  font-bold p-2 rounded-b-lg ">
              AMAZING VIEW
            </h2>
          </div>
          <div>
            <img src="/Great-Food.webp" />
            <h2 className="bg-primary-blue-2 text-primary-yellow text-center  textsm  font-bold p-2 rounded-b-lg md:px-10 lg:px-0 ">
              GREAT FOOD
            </h2>
          </div>
          <div>
            <img src="/Amazing-View.webp" />
            <h2 className="bg-primary-blue-2 text-primary-yellow text-center  text-sm font-bold p-2 rounded-b-lg ">
              AMAZING VIEW
            </h2>
          </div>
        </div>
        <div className="md:block hidden">
        <div className="flex items-center justify-center w-full my-6 xl:px-36 lg:px-20 ">
            <hr className="flex-grow border-primary-yellow-dark" />
            <span className="px-4 text-2xl 2xl:text-5xl font-semibold  text-black">
            YACHT MARRIAGE PROPOSAL
            </span>
            <hr className="flex-grow border-primary-yellow-dark " />
          </div>
          <p className=" text-black text-md 2xl:text-2xl  pb-5 xl:px-36 lg:px-20 md:px-16 text-center">
          Elevate your proposal to new heights with our yacht marriage proposal experiences. Sail into the sunset with your beloved, surrounded by the beauty of the open sea, creating a moment that's as breathtaking as your commitment.
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
            Step aboard our fleet of yachts, where unmatched elegance meets impeccable design. Each vessel is a testament to our commitment to providing the pinnacle of luxury, ensuring a setting as extraordinary as your love.
            </p>
            <h3 className="text-primary-yellow  text-2xl">
            Experienced Crew
            </h3>
            <p className=" text-white text-center sm:text-left  text-xs  sm:text-sm xl:text-md pb-10">
            Behind every successful event is a team of experts. Our crew and event planners bring a wealth of experience, ensuring your wedding day unfolds seamlessly. Trust us to navigate every detail, leaving you free to savor every moment.
            </p>
            <h3 className="text-primary-yellow  text-2xl">
            Reviews from Couples
            </h3>
            <p className=" text-white text-center sm:text-left  text-xs  sm:text-sm xl:text-md pb-10">
            Don't just take our word for it – our track record speaks for itself. Glowing testimonials from couples who have celebrated their love with us underscore our commitment to delivering exceptional experiences. Join the ranks of those who chose extraordinary for their special day.
            </p>
            
          </div>
        </div>
        <div className="md:block hidden">
        <div className="flex items-center justify-center w-full my-6 xl:px-36 lg:px-20 ">
            <hr className="flex-grow border-primary-yellow-dark" />
            <span className="px-4 text-2xl 2xl:text-5xl font-semibold  text-black">
            EXPERIENCE OF A LIFETIME
            </span>
            <hr className="flex-grow border-primary-yellow-dark " />
          </div>
          <p className=" text-black text-md 2xl:text-2xl  pb-5 xl:px-36 lg:px-20 md:px-16 text-center">
          Create lasting memories with our yacht charter for weddings. Our photography and videography services capture every breathtaking moment against the stunning backdrop of the open sea, ensuring your wedding day is etched in time.
          </p>
          </div>
          <div className="grid md:grid-cols-12 items-center gap-6">
<img src="/marryleft.webp" className="rounded-lg md:col-span-3"/>
<img src="/marrycenter.webp" className="rounded-lg md:col-span-6 "/>
<img src="/marryright.webp" className="rounded-lg md:col-span-3"/>
          </div>
          <div className="py-5 xl:px-32 ">
        <div className="flex flex-col md:flex-row rounded-lg md:px-10 xl:px-44 items-center  gap-5 justify-center  md:justify-between bg-transparent md:bg-primary-blue py-5">
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
        
                        </div></div>
        </div>
        
      </div>
      <YachtCarousel/>
    </>
        
  );
};

export default page;
