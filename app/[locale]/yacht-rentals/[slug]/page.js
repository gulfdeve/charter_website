"use client";
import { useEffect, useRef, useState } from "react";
import EmblaCarousel from "embla-carousel";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaQuestionCircle } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/app/context/LanguageContext";
import Route from "@/app/components/Route";
import { use } from "react";
import YachtCarousal from "@/app/components/YachtCarousel";
import { useLocale, useTranslations } from "next-intl";
import generateMetadata from '@/app/components/metadataYacht'

export default function Home({ params }) {
  const { slug } = use(params);
  const emblaRef = useRef(null);
  const emblaInstance = useRef(null);
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbnailRef = useRef(null);
  const locale = useLocale();

  useEffect(() => {
    if (thumbnailRef.current) {
      const thumbnails = thumbnailRef.current.children;
      const thumbnailWidth = thumbnails[0]?.offsetWidth || 0;
      thumbnailRef.current.scrollLeft = thumbnailWidth * Math.max(activeIndex - 0, 0);
    }
  }, [activeIndex]);

  useEffect(() => {
    if (!slug) return;
    const fetchData = async () => {
      try {
        const response = await fetch("https://www.centauruscharter.com/api/api_new/basic");
        const data = await response.json();
        const yacht = data.products.find((item) => item.slug === slug);
        setProduct(yacht);
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching data:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [slug]);

  // Initialize Embla Carousel and set up autoplay every 3 seconds.
  useEffect(() => {
    if (emblaRef.current && product) {
      emblaInstance.current = EmblaCarousel(emblaRef.current, { loop: true });
      const autoplayInterval = setInterval(() => {
        emblaInstance.current.scrollNext();
        // Update activeIndex for thumbnail highlighting:
        setActiveIndex((prev) => (prev + 1) % product.gallery.length);
      }, 3000);

      return () => {
        clearInterval(autoplayInterval);
        emblaInstance.current && emblaInstance.current.destroy();
      };
    }
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
    { label: "Size", value: product.translations?.[locale]?.size },
    { label: "Decks", value: product.translations?.[locale]?.decks },
    { label: "Capacity", value: product.translations?.[locale]?.maximum_guest },
    { label: "Duration", value: "Minimum 1 Hour" },
    { label: "Cabin", value: product.translations?.[locale]?.cabin },
    { label: "Kitchen Equipment", value: product.translations?.[locale]?.kitchen_equipment },
    { label: "Music System", value: product.translations?.[locale]?.music_system },
    { label: "No of Staff", value: product.translations?.[locale]?.no_of_staff },
    { label: "Location", value: product.translations?.[locale]?.location },
    { label: "Extras", value: "Drinks Included (Bubbly drinks, Soft drinks, Coffee & Water)" },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto p-5 mt-14 lg:mt-0 ">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-4 mt-5">
          {product.translations?.[locale]?.name_of_yacht}
        </h1>
        <p className="text-xl text-center mb-4">Dubai Luxury Yacht</p>
        {/* Embla Carousel */}
        <div className="embla relative">
          <div className="embla__viewport overflow-hidden rounded-lg" ref={emblaRef}>
            <div className="embla__container flex">
              {product.gallery.map((item, index) => (
                <div key={index} className="embla__slide min-w-full flex justify-center items-center pb-5 lg:pb-0">
                  <img
                    src={`https://www.centauruscharter.com/product/galleryimages/${item.image}`}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-auto xl:h-5/6 max-w-7xl object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#d4cfce] text-white p-1 xl:p-2 rounded-full hover:bg-gray-700 z-10"
            onClick={() => {
              scrollPrev();
              setActiveIndex((prev) => Math.max(prev - 1, 0));
            }}
          >
            <IoIosArrowBack className="text-black" />
          </button>

          <div
            ref={thumbnailRef}
            className="overflow-x-auto flex space-x-2 max-w-7xl relative scrollbar-hidden"
            style={{
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
          >
            {product.gallery.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  emblaInstance.current?.scrollTo(index);
                  setActiveIndex(index);
                }}
                className={`w-1/5 lg:h-36 bg-gray-200 rounded overflow-hidden ${
                  activeIndex === index ? "ring-2 ring-blue-500" : "hover:ring-2 ring-blue-500"
                }`}
                style={{
                  flexShrink: 0,
                  scrollSnapAlign: 'center',
                }}
              >
                <img
                  src={`https://www.centauruscharter.com/product/galleryimages/${item.image}`}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#d4cfce] text-white p-1 xl:p-2 rounded-full hover:bg-gray-700 z-10"
            onClick={() => {
              scrollNext();
              setActiveIndex((prev) => Math.min(prev + 1, product.gallery.length - 1));
            }}
          >
            <IoIosArrowForward className="text-black" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-1 items-center gap-0 rounded-lg w-full overflow-hidden shadow-md mb-7 mt-6 max-w-7xl mx-auto">
          <div className="bg-[#0d2343] text-white p-2 flex flex-col items-center">
            <span className="font-bold text-sm">Model:</span>
            <span className="font-semibold text-sm text-[#e1ae48] xl:text-xl">
              {product.translations?.[locale]?.model}
            </span>
          </div>
          <div className="bg-[#0d2343] text-white p-2 flex flex-col items-center">
            <span className="font-bold text-sm">Length:</span>
            <span className="font-semibold text-sm text-[#e1ae48] xl:text-xl">
              {product.translations?.[locale]?.size}
            </span>
          </div>
          <div className="bg-[#0d2343] text-white p-2 flex flex-col items-center">
            <span className="font-bold text-sm">Guests:</span>
            <span className="font-semibold text-sm text-[#e1ae48] xl:text-xl">
              {product.translations?.[locale]?.guests}
            </span>
          </div>
          <div className="bg-[#0d2343] p-2 flex flex-col items-center">
            <span className="text-sm text-white">Price Per Hour:</span>
            <span className="font-semibold text-sm text-[#e1ae48] xl:text-xl">
              {product.per_hour_price}
            </span>
          </div>
          <div className="bg-[#0d2343] text-[#0d2343] p-2 flex flex-col items-center">
            <button className="flex flex-row items-center justify-center py-1 px-6 md:py-2 md:px-8 border-4 border-[#e1ae48] rounded-md bg-[#0d2343] hover:bg-[#0d2343] text-[#e1ae48] font-bold text-base md:text-sm xl:text-base transition-all duration-300">
              Book Now
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full items-start lg:justify-between py-10">
          <div className="flex flex-col lg:items-start w-full lg:justify-start lg:w-1/2">
            <p className="text-sm text-left">
              Get ready for the best yachting holiday on Lagoona. Lagoona 56Ft yacht is an exceptionally well-maintained luxury yacht and gives the feel of a brand new yacht. This true icon can accommodate up to 24 guests and has a cruising range of 22 knots. This ocean-going fleet carries up to three professional yacht staff members– one captain and two crew members who will cater to your needs during your tour. The design boasts contemporary interiors, fully air-conditioned, modern equipment and ample space for a comfortable social zone. She has 3 guest cabins for your comfort – a master suite, a double bed cabin and a twin guest cabin along with 3 restrooms. The spacious saloon comes with extensive windows so you can enjoy the views of the Arabian coastline. The stylish galley is stocked with all essentials like cutlery, refrigerator, microwave oven, electric grill and our crew can help you with heating or grilling and serving the meals. The front deck of the yacht comes with comfy sun loungers so you can unwind and feel the fresh breeze. The upper deck is a great place to enjoy your favorite tunes, have gatherings, eat outdoors at a great dining space and have a party on the yacht. The aft deck is well equipped with cozy upholstery so you and your family can spend time close to the waters. If that isn't enough; Lagoona also features adventurous activities like jet skis, parasailing, speed jet boat and banana ride at an extra cost. Your charter base will be Dubai Harbour Marina.
            </p>
            <h2 className="text-sm text-black font-bold pt-4">What to expect</h2>
            <ol className="list-disc text-sm lg:pl-6">
              {product.translations.en.key_features.split("\n").map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ol>
            <h2 className="text-sm text-black font-bold">Ideal for:</h2>
            <ol className="list-disc text-left text-sm lg:pl-6">
              {product.translations.en.ideal_for.split("\n").map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ol>
            <h2 className="text-sm text-black pt-4">
              Hire Dubai luxury yachts for your impeccable holiday.
            </h2>
          </div>

          <div className="flex items-start lg:items-end justify-end lg:w-1/2">
            <div className="bg-white rounded-lg p-3 lg:p-6">
              <table className="w-full text-sm text-left text-gray-900">
                <tbody>
                  {yachtDetails.map((detail, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <th className="py-3 px-4 font-semibold text-gray-700 w-2/5" scope="row">
                        {detail.label}:
                      </th>
                      <td className="py-3 px-4">{detail.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex flex-col lg:flex-row justify-center gap-4 mt-10">
                <button className="flex items-center justify-center gap-2 px-4 py-2 bg-[#e1ae48] text-[#0d2343] font-bold rounded-md hover:bg-yellow-600 transition">
                  <FaQuestionCircle size={20} />
                  ASK A QUESTION
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-3 bg-[#e1ae48] text-[#0d2343] font-bold rounded-md hover:bg-yellow-600 transition">
                  <FaWhatsapp size={20} />
                  CHAT WITH US
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Route />
      <YachtCarousal />
    </>
  );
}
