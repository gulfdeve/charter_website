"use client";
import { useEffect, useRef, useState } from "react";
import EmblaCarousel from "embla-carousel";
import { Link } from "@/app/i18n/routing";
import { useData } from "@/app/context/DataContext";
import { useLocale } from "next-intl";
import { IoIosPricetag } from "react-icons/io"; // <-- Import your icon

export default function WatersportCarousal({ packages, language }) {
  const emblaRef = useRef(null);
  const [embla, setEmbla] = useState(null);
  const { data, loading } = useData();
  const locale = useLocale();

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

  return (
    <div className="pb-16">
      {/* Embla "viewport" container */}
      <div ref={emblaRef} className="overflow-hidden">
        {/* Embla "container" for slides: using flex for horizontal layout */}
        <div className="flex gap-4 px-2">
          {packages?.map((package_a) => (
            // Fallback title logic

            <div
              key={package_a.id}
              // Adjust the width to control how many cards appear at once / partial next card
              className="flex-[0_0_85%] md:flex-[0_0_50%] lg:flex-[0_0_40%]"
            >
              <div className="flex flex-col justify-start lg:justify-between rounded-md bg-white h-full overflow-hidden border border-gray-400 md:border-none xl:p-10 shadow-none">
                {/* Image */}
                <Link href={`/watersports/${package_a.slug}`}>
                  <img
                    src={`https://www.centauruscharter.net/product/images/${package_a.image}`}
                    alt={package_a.translations[language].title}
                    className="rounded-tl-md rounded-tr-md w-full object-cover"
                  />
                </Link>

                {/* Card Content */}
                <div className="flex flex-col items-start justify-start sm:px-5 xxs:px-3">
                  <h2 className="text-primary-black text-base sm:text-xl font-bold pt-6 hover:text-blue-600 transition-all duration-300 cursor-pointer">
                    <Link href={`/watersports/${package_a.slug}`}>
                      {package_a.translations[language].title}
                    </Link>
                  </h2>

                  <p className="text-primary-grey text-xs pt-2 pb-9">
                    {package_a.translations[language].preview_text}
                  </p>

                  <div className="bg-primary-black w-full h-[0.05rem]" />

                  <div className="flex gap-3 sm:gap-0 flex-row sm:flex-row  justify-between w-full py-5">
                    <div className="flex flex-row items-center gap-1 sm:gap-4">
                      <IoIosPricetag className="text-2xl lg:text-5xl" />
                      <div className="flex flex-col">
                        <p className="text-primary-black font-bold text-xs xl:text-base">
                          Starting
                          <br className="hidden sm:block" />
                          <span className="text-xs pl-1 sm:pl-0">
                            {" "}
                            AED {package_a.amount.toLocaleString()}
                          </span>
                        </p>
                      </div>
                    </div>
                    {/* Wrap the Know More button in a div with ml-auto */}
                    <div className="sm:ml-auto items-end flex">
                      <Link
                        href={`/watersports/${package_a.slug}`}
                        className="py-2 px-4 text-[0.75rem] xs:text-xs font-bold uppercase text-primary-yellow bg-primary-blue hover:bg-primary-yellow hover:text-primary-blue hover:scale-105 rounded-md shadow transition duration-150 ease-in-out transform"
                      >
                        KNOW MORE
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
