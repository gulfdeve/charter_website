"use client";
import { useEffect, useRef, useState } from "react";
import EmblaCarousel from "embla-carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaQuestionCircle, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import Route from "@/app/components/Route";
import YachtCarousal from "@/app/components/YachtCarousel";
import { useLocale } from "next-intl";
import { use } from "react";
import { useData } from "@/app/context/DataContext";
import { Link } from "@/app/i18n/routing";

export default function Home({ params }) {
  const { slug } = use(params);
  const emblaRef = useRef(null);
  const emblaInstance = useRef(null);
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbnailRef = useRef(null);
  const locale = useLocale();
  const { data, loading, error } = useData();

  const settingsItem = data?.settings?.[0];
  const { header_email, header_phone_number_url, header_whatsapp_url } =
    settingsItem || {};

  // Scroll thumbnails container so active thumbnail is visible.
  useEffect(() => {
    if (thumbnailRef.current) {
      const thumbnails = thumbnailRef.current.children;
      const thumbnailWidth = thumbnails[0]?.offsetWidth || 0;
      thumbnailRef.current.scrollLeft = thumbnailWidth * activeIndex;
    }
  }, [activeIndex]);

  // Find product based on slug using DataContext
  useEffect(() => {
    if (!slug || loading) return;

    if (data && data.products) {
      const yacht = data.products.find((item) => item.slug === slug);
      setProduct(yacht);
      setIsLoading(false);
    }
  }, [slug, data, loading]);

  // Initialize Embla Carousel with loop mode and set up autoplay.
  useEffect(() => {
    if (emblaRef.current && product) {
      emblaInstance.current = EmblaCarousel(emblaRef.current, { loop: true });

      // Listen for Embla's "select" event to update activeIndex.
      emblaInstance.current.on("select", () => {
        const index = emblaInstance.current.selectedScrollSnap();
        setActiveIndex(index);
      });

      const autoplayInterval = setInterval(() => {
        emblaInstance.current.scrollNext();
      }, 10000);

      return () => {
        clearInterval(autoplayInterval);
        emblaInstance.current && emblaInstance.current.destroy();
      };
    }
  }, [product]);

//   console.log("Product:", product);

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
    {
      label: "Kitchen Equipment",
      value: product.translations?.[locale]?.kitchen_equipment,
    },
    {
      label: "Music System",
      value: product.translations?.[locale]?.music_system,
    },
    {
      label: "No of Staff",
      value: product.translations?.[locale]?.no_of_staff,
    },
    { label: "Location", value: product.translations?.[locale]?.location },
    {
      label: "Extras",
      value: "Drinks Included (Bubbly drinks, Soft drinks, Coffee & Water)",
    }
  ];

  return (
    <>
      <div className="container mx-auto p-5 nav-space">
        {/* Title */}

        <h1 className="text-xl sm:text:2xl md:text-3xl lg:text-4xl text-center mb-5 mt-5 lg:mt-14 font-bold">
          {product.translations?.[locale]?.name_of_yacht}
        </h1>
        <h2 className="text-base sm:text:2xl lg:text-3xl text-center mb-4">
          Boat Rental Dubai
        </h2>

        {/* Embla Carousel */}
        <div className="embla relative">
          <div
            className="embla__viewport overflow-hidden rounded-lg"
            ref={emblaRef}
          >
            <div className="embla__container flex">
              {product.gallery.map((item, index) => (
                <div
                  key={index}
                  className="embla__slide min-w-full flex justify-center items-center pb-5 lg:pb-0"
                >
                  <img
                    src={`https://www.centauruscharter.net/product/galleryimages/${item.image}`}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-auto xl:h-5/6 max-w-7xl object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation and Thumbnails */}
        <div className="relative">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#d4cfce] text-white p-1 xl:p-2 rounded-full hover:bg-gray-700 z-10"
            onClick={scrollPrev}
          >
            <IoIosArrowBack className="text-black" />
          </button>

          <div
            ref={thumbnailRef}
            className="overflow-x-auto flex space-x-2 container relative scrollbar-hidden"
            style={{
              scrollSnapType: "x mandatory",
              scrollBehavior: "smooth",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            {product.gallery.map((item, index) => (
              <button
                key={index}
                onClick={() => emblaInstance.current?.scrollTo(index)}
                className={`w-1/5 lg:h-36 bg-gray-200 rounded overflow-hidden ${
                  activeIndex === index
                    ? "ring-2 ring-blue-500"
                    : "hover:ring-2 ring-blue-500"
                }`}
                style={{
                  flexShrink: 0,
                  scrollSnapAlign: "center",
                }}
              >
                <img
                  src={`https://www.centauruscharter.net/product/galleryimages/${item.image}`}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#d4cfce] text-white p-1 xl:p-2 rounded-full hover:bg-gray-700 z-10"
            onClick={scrollNext}
          >
            <IoIosArrowForward className="text-black" />
          </button>
        </div>

        {/* Yacht Details */}
        <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-2 items-center gap-0 rounded-lg w-full overflow-hidden shadow-md mb-7 mt-6 mx-auto">
          <div className="bg-primary-blue text-white p-2 flex flex-col items-center">
            <span className="font-bold text-sm">Model:</span>
            <span className="font-semibold text-sm text-primary-yellow xl:text-xl">
              {product.translations?.[locale]?.model}
            </span>
          </div>
          <div className="bg-primary-blue text-white p-2 flex flex-col items-center">
            <span className="font-bold text-sm">Length:</span>
            <span className="font-semibold text-sm text-primary-yellow xl:text-xl">
              {product.translations?.[locale]?.size}
            </span>
          </div>
          <div className="bg-primary-blue text-white p-2 flex flex-col items-center">
            <span className="font-bold text-sm">Guests:</span>
            <span className="font-semibold text-sm text-primary-yellow xl:text-xl">
              {product.translations?.[locale]?.guests}
            </span>
          </div>
          <div className="bg-primary-blue p-2 flex flex-col items-center">
            <span className="text-sm text-white">Price Per Hour:</span>
            <span className="font-semibold text-sm text-primary-yellow xl:text-xl">
              {product.per_hour_price} AED
            </span>
          </div>
          <div className="bg-primary-blue text-primary-blue p-2 lg:p-1.5 xl:p-2 flex flex-col col-span-2 lg:col-span-1 items-center">
            <a
              href={`https://fareharbor.com/embeds/book/centauruscharter/items/${product.fareharbor_id}/?full-items=yes&flow=645487`}
              target="_self"
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-center py-1 px-6 md:py-2 md:px-8 border-4 border-primary-yellow rounded-md bg-primary-blue hover:bg-primary-blue text-primary-yellow font-bold text-base md:text-sm xl:text-base transition-all duration-300 "
            >
              Book Now
            </a>
          </div>
        </div>

        {/* Yacht Description and Details */}
        <div className="flex flex-col lg:flex-row w-full items-start lg:justify-between py-10">
          <div className="flex flex-col lg:items-start w-full lg:justify-start lg:w-1/2">
            <table className="w-full text-sm text-left text-gray-900">
              <tbody>
                {yachtDetails.map((detail, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <th
                      className="py-3 px-4 font-semibold text-gray-700 w-2/5"
                      scope="row"
                    >
                      {detail.label}:
                    </th>
                    <td className="py-3 px-4">{detail.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-start justify-center ">
            <div className="rounded-lg p-3 lg:p-6">
              <p className="text-md text-black font-bold py-4">
                What to expect
              </p>
              <ol className="list-disc text-sm pl-6 space-y-4">
                {product.translations.en.key_features
                  .split("\n")
                  .map((item, index) => (
                    <li
                      key={index}
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  ))}
              </ol>
              <p className="text-md text-black font-bold py-4">Ideal for:</p>
              <ol className="list-disc text-left text-sm pl-6 space-y-4 ">
                {product.translations.en.ideal_for
                  .split("\n")
                  .map((item, index) => (
                    <li
                      key={index}
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  ))}
              </ol>

              <div className="flex items-start gap-3 items-center mt-10">
                <div>
                  <FaMapMarkerAlt className="w-8 h-8 flex-shrink-0" />
                </div>
                <div className="uppercase">
                  <p className="font-bold">Yacht location:</p>
                  <p className="text-blue-800">
                    <a
                      href="https://www.google.com/maps/place/CENTAURUS+CHARTER+-+Yachts+%26+Boats+Rental+Dubai+Harbour"
                      className="hover:text-white"
                      target="_blank"
                    >
                      U-32 berth dubai marina (near spinneys)
                    </a>{" "}
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">
                <Link
                  href="/faq"
                  className="yellow-solid-button flex items-center justify-center gap-2"
                >
                  <FaQuestionCircle size={20} />
                  ASK A QUESTION
                </Link>
                <Link
                  className="yellow-solid-button flex items-center justify-center gap-2"
                  href={header_whatsapp_url || "#"}
                >
                  <FaWhatsapp size={20} />
                  CHAT WITH US
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <p className="text-sm text-center">
          The 56 Ft <strong>private yacht</strong> is beautiful and versatile. A
          perfect <strong>yacht</strong> available for rental to celebrate any
          special occasion on the waters. This yacht is kept in top condition
          with a cruising speed of 22 knots. Vassia is loaded with all guest
          amenities, a fully AC yacht and plenty of space for you and your
          guests. The overall length is 56 Feet/17.6 meters can accommodate up
          to 21 guests and has 3 comfortable cabins with 6 sleeps.
          <br />
          <br />
          In addition to this; it contains 3 separate heads. Also, there is one
          captain and two crew members on board to provide great service on your
          charter. Our fleet features an array of outdoor and indoor areas. The
          outdoor dining area on the cockpit is sheltered by a hard-top and
          furnished with sofas, a table, an electric BBQ and a great sound
          system to enjoy every moment on the sea. Sip your coffee or wine,
          relax on the front-deck sun loungers or party hard in the open ocean.
          This wonderful party yacht rental is moored at{" "}
          <strong>Dubai Marina</strong> and ready to cruise.



        </p> */}


		<p className="text-sm text-center"
  dangerouslySetInnerHTML={{ 
    __html: product.translations?.[locale]?.description || '' 
  }} 
/>

<p className="text-sm text-center font-bold my-8">
          Rent a yacht in Dubai Marina
        </p>

      </div>
      <Route header_whatsapp_url={header_whatsapp_url} />
      <YachtCarousal />
    </>
  );
}
