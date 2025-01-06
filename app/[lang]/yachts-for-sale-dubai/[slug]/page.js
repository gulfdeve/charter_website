"use client";
import { useEffect, useRef, useState } from "react";
import EmblaCarousel from "embla-carousel";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaQuestionCircle } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/app/context/LanguageContext";
import { use } from "react";
import ContactForm from "@/app/components/Contactform"
import YachtCarousel from "@/app/components/YachtCarousel"
export default function Home({ params }) {
  // Get the router object
  const { slug } = use(params); // Get the slug from the URL
  const emblaRef = useRef(null);
  const emblaInstance = useRef(null);
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { language } = useLanguage();
  const slides = [
    "/yacht-rentals/56ftLagoona1.jpg", // Replace with your image paths
    "/yacht-rentals/56ftLagoona2.jpg",
    "/yacht-rentals/56ftLagoona3.jpg",
    "/yacht-rentals/56ftLagoona4.jpg",
    "/yacht-rentals/56ftLagoona5.jpg",
    "/yacht-rentals/56ftLagoona4.jpg",
    "/yacht-rentals/56ftLagoona5.jpg",
  ];

  useEffect(() => {
    if (!slug) return; // Wait for the slug to be available
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.centauruscharter.com/api/api_new/basic"
        );
        const data = await response.json();
        // Find the product with the matching slug
        const yacht = data.products.find((item) => item.slug === slug);
        setProduct(yacht);
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching data:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [slug]); // Fetch when the slug changes

  useEffect(() => {
    if (emblaRef.current) {
      emblaInstance.current = EmblaCarousel(emblaRef.current, { loop: true });
    }
    return () => emblaInstance.current && emblaInstance.current.destroy();
  }, [product]);

  const scrollPrev = () => emblaInstance.current?.scrollPrev();
  const scrollNext = () => emblaInstance.current?.scrollNext();

  if (isLoading) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  if (!product) {
    return <div className="text-center mt-20">No product found.</div>;
  }

  const yachtDetails = [
    { label: "Size", value: product.translations.en.size },
    { label: "Decks", value: product.translations.en.decks },
    { label: "Capacity", value: product.translations.en.maximum_guest },
    { label: "Duration", value: "Minimum 1 Hour" },
    { label: "Cabin", value: product.translations.en.cabin },
    {
      label: "Kitchen Equipment",
      value: product.translations.en.kitchen_equipment,
    },
    {
      label: "Music System",
      value: product.translations.en.music_system,
    },
    { label: "No of Staff", value: product.translations.en.no_of_staff },
    { label: "Location", value: product.translations.en.location },
    {
      label: "Extras",
      value: "Drinks Included (Bubbly drinks, Soft drinks, Coffee & Water)",
    },
  ];
  return (
    <>
      <div className="container mx-auto p-6">
        {/* Title */}
        <h1 className="text-4xl font-Montserrat font-bold text-center mb-4 mt-5">
          {product.title}
        </h1>
        <p className="text-xl font-Montserrat  text-center mb-4">
          Dubai Luxury Yacht
        </p>
        {/* Embla Carousel */}
        <div className="embla relative">
          {/* Viewport */}
          <div
            className="embla__viewport overflow-hidden rounded-lg"
            ref={emblaRef}
          >
            <div className="embla__container flex">
              {product.gallery.map((item, index) => (
                <div
                  key={index}
                  className="embla__slide min-w-full flex justify-center items-center"
                >
                  <img
                    src={`https://www.centauruscharter.com/product/galleryimages/${item.image}`}
                    alt={`Slide ${index + 1}`}
                    className="w-full  h-auto xl:h-5/6 object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnails and Navigation */}
        <div className="xl:-mt-4 mt-4 flex justify-center relative">
          {/* Thumbnails */}
          <div className="flex space-x-2 relative">
            {product.gallery.map((item, index) => (
              <button
                key={index}
                onClick={() => emblaInstance.current?.scrollTo(index)}
                className="w-full h-10 xl:w-full xl:h-full bg-gray-200 rounded overflow-hidden hover:ring-2 ring-blue-500"
              >
                <img
                  src={`https://www.centauruscharter.com/product/galleryimages/${item.image}`}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}

            {/* Previous Button */}
            <button
              className="absolute left-[0rem] top-1/2 transform -translate-y-1/2 bg-[#d4cfce] text-white p-1 xl:p-2 rounded-full hover:bg-gray-700 z-10"
              onClick={scrollPrev}
            >
              <IoIosArrowBack className="text-black" />
            </button>

            {/* Next Button */}
            <button
              className="absolute right-[0rem] top-1/2 transform -translate-y-1/2 bg-[#d4cfce] text-white p-1 xl:p-2 rounded-full hover:bg-gray-700 z-10"
              onClick={scrollNext}
            >
              <IoIosArrowForward className="text-black" />
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center py-7">
  {/* Parent container for unified styling */}
  <div className="flex flex-col lg:flex-row w-full max-w-6xl rounded-xl overflow-hidden shadow-lg">
    {/* Upon Request Section */}
    <div className="flex flex-col items-center justify-center bg-[#1a428a] w-full lg:w-1/2 p-5 h-full lg:pb-60">
      <h1 className="font-Montserrat text-white text-3xl font-bold text-center py-7 px-3">
        UPON REQUEST
      </h1>
      <div className="w-full h-0.5 bg-gray-500"></div>
      <div className="flex flex-row items-center lg:items-start justify-between gap-5 pt-4 lg:pt-12">
        <h3 className="text-lg text-white font-Montserrat">CONDITION:</h3>
        <h3 className="text-lg text-white font-Montserrat font-bold">NEW</h3>
      </div>
      <div className="flex flex-row items-center lg:items-start justify-between gap-5 pt-4 lg:pt-10">
        <h3 className="text-lg text-white font-Montserrat">YEAR:</h3>
        <h3 className="text-lg text-white font-Montserrat font-bold">2024</h3>
      </div>
      <div className="flex flex-row items-center lg:items-start justify-between gap-5 pt-4 lg:pt-10">
        <h3 className="text-lg text-white font-Montserrat">LOCATION:</h3>
        <h3 className="text-lg text-white font-Montserrat font-bold">DUBAI</h3>
      </div>
      <div className="flex flex-row items-center lg:items-start justify-between gap-5 pt-4 lg:pt-10 pb-10">
        <h3 className="text-lg text-white font-Montserrat">AVAILIBILITY:</h3>
        <h3 className="text-lg text-white font-Montserrat font-bold">AVAILABLE</h3>
      </div>
      <button className="flex items-center justify-center gap-2 px-4 py-3 bg-[#e1ae48] text-[#0d2343] font-bold rounded-md hover:bg-yellow-600 transition">
        CHAT WITH US
      </button>
    </div>

    {/* Technical Specs Section */}
    <div className="flex flex-col  bg-white w-full lg:h-[51%] lg:w-1/2 p-5 xl:px-24 lg:px-7 shadow-2xl">
      <h1 className="font-Montserrat text-[#1a428a] text-3xl font-bold text-center py-7 px-3">
        TECHNICAL SPECS
      </h1>
      <div className="w-full h-0.5 bg-gray-500"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6 lg:gap-2 pt-4">
        <div>
          <h3 className="text-lg text-[#1a428a] font-Montserrat">LENGTH:</h3>
          <h3 className="text-lg text-[#1a428a] font-Montserrat font-bold">86.7 FT / 26.43 M</h3>
        </div>
        <div>
          <h3 className="text-lg text-[#1a428a] font-Montserrat">MAX SPEED:</h3>
          <h3 className="text-lg text-[#1a428a] font-Montserrat font-bold">28 KNOTS</h3>
        </div>
        <div>
          <h3 className="text-lg text-[#1a428a] font-Montserrat">BEAM:</h3>
          <h3 className="text-lg text-[#1a428a] font-Montserrat font-bold">21.3 FT / 6.49 M</h3>
        </div>
        <div>
          <h3 className="text-lg text-[#1a428a] font-Montserrat">CRUISING SPEED:</h3>
          <h3 className="text-lg text-[#1a428a] font-Montserrat font-bold">12 KNOTS</h3>
        </div>
        <div>
          <h3 className="text-lg text-[#1a428a] font-Montserrat">BUILDER:</h3>
          <h3 className="text-lg text-[#1a428a] font-Montserrat font-bold">SUNSEEKER</h3>
        </div>
        <div>
          <h3 className="text-lg text-[#1a428a] font-Montserrat">WATER CAPACITY:</h3>
          <h3 className="text-lg text-[#1a428a] font-Montserrat font-bold">1400 L / 369.84 US GAL</h3>
        </div>
        <div>
          <h3 className="text-lg text-[#1a428a] font-Montserrat">YEAR BUILD:</h3>
          <h3 className="text-lg text-[#1a428a] font-Montserrat font-bold">2024</h3>
        </div>
        <div>
          <h3 className="text-lg text-[#1a428a] font-Montserrat">FUEL CAPACITY:</h3>
          <h3 className="text-lg text-[#1a428a] font-Montserrat font-bold">11000 L / 2905.89 US GAL</h3>
        </div>
        <div>
          <h3 className="text-lg text-[#1a428a] font-Montserrat">PROPULSION:</h3>
          <h3 className="text-lg text-[#1a428a] font-Montserrat font-bold">SHAFTS</h3>
        </div>
        <div>
          <h3 className="text-lg text-[#1a428a] font-Montserrat">ENGINE:</h3>
          <h3 className="text-lg text-[#1a428a] font-Montserrat font-bold">TWIN MTU 10V 2000 M96L SHAFT (2 X 1622PS), TWIN MTU 12V 2000 M96L SHAFT (2 X 1950PS), TWIN MTU 12V M96X SHAFT (2 X 2000PS)</h3>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="md:block hidden">
          <div className="flex items-center justify-center w-full my-6 xl:px-36 lg:px-20 ">
            <hr className="flex-grow border-primary-yellow-dark" />
            <span className="px-4 text-3xl 2xl:text-5xl font-semibold font-Montserrat text-black">
            88 ft Yacht Sunseeker
            </span>
            <hr className="flex-grow border-primary-yellow-dark " />
          </div>
          <p className="font-Montserrat text-black text-lg 2xl:text-2xl pt-2 pb-5 xl:px-36 lg:px-20 md:px-16 text-center">
          Step into a world of luxury with the 2024 Sunseeker 88, a masterpiece of seductive styling and smart, practical spaces. If you’re looking to buy a yacht in Dubai, this stunning yacht features a built-in hardtop and a cleverly configured interior that offers unparalleled comfort and elegance. The improved, sumptuous master cabin layout ensures a luxurious retreat, while the Beach Club with its innovative X-TEND™ sunbed at the aft promises relaxation and enjoyment. For those aiming to buy a luxury yacht, the 88 ft Sunseeker is an icon worthy of your immediate attention. Don't miss this opportunity to buy a boat in Dubai and experience the pinnacle of maritime luxury.
          </p>
        </div>
        <ContactForm/>
       
      </div>
      <YachtCarousel/>
      
    </>
  );
}
