import { useEffect, useRef, useState } from "react";
import EmblaCarousel from "embla-carousel";
import { Link } from "@/app/i18n/routing";
import Image from "next/image";
import { useData } from "@/app/context/DataContext";
import { useLocale } from "next-intl";
import { FaYoutube } from "react-icons/fa";

export default function YachtmobileCarousal() {
  const emblaRef = useRef(null);
  const [embla, setEmbla] = useState(null);
  const { data, loading, error } = useData();
  const locale = useLocale();

  // YouTube modal state
  const [videoModalVisible, setVideoModalVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");

  useEffect(() => {
    if (!embla && emblaRef.current) {
      const emblaInstance = EmblaCarousel(emblaRef.current, {
        loop: true,
        align: "start",
        slidesToScroll: 1,
      });
      setEmbla(emblaInstance);
    }
  }, [embla]);

  const openVideoModal = (url) => {
    setSelectedVideo(url);
    setVideoModalVisible(true);
  };
  const closeVideoModal = () => {
    setSelectedVideo("");
    setVideoModalVisible(false);
  };

  return (
    <div className="container mx-auto py-6">
      {/* Embla viewport */}
      <div ref={emblaRef} className="overflow-hidden md:px-3 md:py-5 xxs:px-2">
        <div className="flex gap-4 px-3">
          {!loading && data?.products?.map((product) => (
            <div
              key={product.id}
              className="flex-[0_0_85%] md:flex-[0_0_50%] lg:flex-[0_0_40%] relative"
            >
              {/* YouTube Button */}
              {product.youtube_url && (
                <button
                  onClick={() => openVideoModal(product.youtube_url)}
                  aria-label="Watch video"
                  className="absolute top-2 right-2 z-20 bg-white p-1 rounded-full shadow-md hover:bg-red-600 hover:text-white text-red-600 transition-all"
                >
                  <FaYoutube size={16} />
                </button>
              )}

              <div className="flex flex-col border bg-white border-gray-300 xl:p-10 md:p-5 p-2 rounded-lg shadow-none">
                {/* Yacht Title */}
                <Link href={`/yacht-rentals/${product.slug}`}>
                  <h2 className="xl:text-4xl md:text-lg text-sm font-bold">
                    {product.translations?.[locale].name_of_yacht}
                  </h2>
                </Link>

                <div className="relative">
                  {/* Yacht Image */}
                  <Link href={`/yacht-rentals/${product.slug}`}>
                    <Image
                      src={`https://www.centauruscharter.net/product/images/${product.image}`}
                      alt={product.translations?.[locale].name_of_yacht}
                      className="rounded-lg xl:w-[32rem] w-full mt-3"
                      width={400}
                      height={400}
                    />
                  </Link>

                  {/* Model / Length / Guests */}
                  <div className="grid grid-cols-3 items-center gap-0 rounded-lg my-3">
                    <div className="bg-[#f1f1f1] p-1 xl:p-2.5 flex flex-col items-center rounded-l-lg">
                      <span className="font-semibold text-primary-grey text-[0.6rem]">Model:</span>
                      <span className="font-semibold text-xxs">{product.translations?.[locale].model}</span>
                    </div>
                    <div className="bg-[#f1f1f1] p-1 xl:p-2 flex flex-col items-center">
                      <span className="font-semibold text-primary-grey text-[0.6rem]">Length:</span>
                      <span className="font-semibold text-xxs ">{product.translations?.[locale].size}</span>
                    </div>
                    <div className="bg-[#f1f1f1] p-1 xl:p-2 flex flex-col items-center rounded-r-lg">
                      <span className="font-semibold text-primary-grey text-[0.6rem]">Guests:</span>
                      <span className="font-semibold text-xxs">{product.translations?.[locale].guests}</span>
                    </div>
                  </div>
                </div>

                {/* Trip Inclusions & Partner Link */}
                <div>{product.id === 24 && (
                  <p className="text-xxs font-normal italic text-primary-grey">
                    Poseidon 118ft Trips: An Add on of AED 1000 per hour will be added for every additional 10 pax where the occupancy surpasses the 40 passengers.
                  </p>
                )}</div>
                <div className="flex flex-row justify-between items-center xl:w-[32rem] z-10">
                  <div>
                    <div className="font-semibold text-xs mt-3 mb-2">Trip inclusions from 3 hours onwards:</div>
                    <ol className="text-xs list-disc list-inside">
                      <li>Hops, Wines, Bubbly Drinks, Coffee, Tea, Water, & Softdrinks</li>
                    </ol>
                    <div className="text-sm font-semibold mt-3 mb-2">
                      Extras: <span className="text-xs text-primary-grey font-normal">(additional charges apply)</span>
                    </div>
                    <ol className="text-xs list-disc list-inside">
                      <li>Transfer</li>
                      <li>Canapés & Snacks</li>
                      <li>DJ</li>
                    </ol>
                    <span className="text-primary-blue text-xs">T&C’s Apply</span>
                  </div>
                </div>
                <Link
                  href={
                    "https://centaurusint.net/?utm_source=centauruscharter&utm_medium=logo_text&utm_campaign=branding"
                  }
                >
                  <img
                    src="/centaurus_link.svg"
                    alt="centaurus link"
                    className="w-[10rem] xl:mt-3"
                  />
                </Link>

                {/* Book Now & Pricing */}
                <div className="flex s:flex-row xxs:flex-col-reverse justify-between items-center z-10 xl:w-[32rem] mt-3">
                  <div className="flex w-full justify-between items-center border-t border-gray-400 pt-3 pb-2 md:pb-0">
                    <div className="xl:p-2 flex flex-col xl:rounded-r-lg">
                      <span className="text-[0.47rem] xs:text-[0.6rem]">Price Per Hour:</span>
                      {product.id === 24 && (
                        <p className="text-xxs font-normal italic text-primary-grey">Starting from</p>
                      )}
                      <span className="font-bold text-sm xs:text-lg text-primary-red ">
                        AED {product.per_hour_price.toLocaleString()}
                      </span>
                    </div>
                    <a
                      href={`https://fareharbor.com/embeds/book/centauruscharter/items/${product.fareharbor_id}/?full-items=yes&flow=645487`}
                      target="_self"
                      rel="noopener noreferrer"
                      className="p-3 text-base text-xs font-bold tracking-wider uppercase text-white bg-primary-blue-2 hover:bg-primary-blue hover:text-primary-yellow hover:scale-105 rounded-md shadow transition duration-150 ease-in-out transform"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* YouTube Video Modal */}
      {videoModalVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative w-[90%] md:w-[60%] h-[60%] bg-black rounded-lg overflow-hidden">
            <button
              onClick={closeVideoModal}
              className="absolute top-2 right-2 text-white text-xl z-10"
              aria-label="Close video"
            >
              ✕
            </button>
            <iframe
              src={selectedVideo}
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Yacht Video"
            />
          </div>
        </div>
      )}
    </div>
  );
}
