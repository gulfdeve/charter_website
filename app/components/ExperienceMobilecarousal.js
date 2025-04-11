"use client";
import { useEffect, useRef, useState } from "react";
import EmblaCarousel from "embla-carousel";
import Link from "next/link";
import { useData } from "@/app/context/DataContext";
import { useLocale } from "next-intl";
import { IoIosPricetag } from "react-icons/io"; // <-- Import your icon

export default function ExperiencesCarousel() {
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
    <div className="">
      {/* Embla "viewport" container */}
      <div ref={emblaRef} className="overflow-hidden sm:px-3 py-5">
        {/* Embla "container" for slides: using flex for horizontal layout */}
        <div className="flex gap-4 px-2">
          {!loading &&
            data?.experiences?.map((experience) => {
              // Fallback title logic
              const title =
                experience.translations?.[locale]?.title ||
                experience.translations?.en?.title ||
                "Untitled";

              return (
                <div
                  key={experience.id}
                  // Adjust the width to control how many cards appear at once / partial next card
                  className="flex-[0_0_85%] md:flex-[0_0_50%] lg:flex-[0_0_40%]"
                >
                  <div className="flex flex-col justify-start lg:justify-between rounded-md bg-white h-full overflow-hidden border border-gray-400 md:border-none xl:p-10 shadow-none">
                    {/* Image */}
                    <Link href={`/yacht-trips/${experience.slug}`}>
                      <img
                        src={`https://www.centauruscharter.com/product/images/${experience.image}`}
                        alt="yacht"
                        className="rounded-tl-md rounded-tr-md w-full object-cover"
                      />
                    </Link>

                    {/* Card Content */}
                    <div className="flex flex-col items-start justify-start px-3 sm:px-5">
                      <h2 className="text-[#232629] text-base sm:text-xl font-bold pt-6 hover:text-blue-600 transition-all duration-300 cursor-pointer">
                        <Link href={`/yacht-trips/${experience.slug}`}>
                          {title}
                        </Link>
                      </h2>

                      <p className="text-[#848484] text-xs pt-2 pb-9">
                        {experience.translations?.[locale]?.preivew_text}
                      </p>
                
                      <div className="bg-[#232629] w-full h-[0.05rem]" />

                      <div className="flex gap-3 sm:gap-0 flex-col sm:flex-row items-center w-full py-5">
                        <div className="flex flex-row items-center gap-1 sm:gap-4">
                          <IoIosPricetag className="text-2xl lg:text-5xl" />
                          <div className="flex flex-col">
                            <p className="text-[#232629] font-bold text-xs xl:text-base">
                              Starting
                              <br className="hidden sm:block" />
                              <span className="text-xs pl-1 sm:pl-0">AED 3120</span>
                            </p>
                          </div>
                        </div>
                        {/* Wrap the Know More button in a div with ml-auto */}
                        <div className="sm:ml-auto">
                          <Link
                            href={`/yacht-trips/${experience.slug}`}
                            className="py-2 px-4 text-[0.75rem] xs:text-xs font-bold uppercase text-primary-yellow bg-primary-blue hover:bg-primary-yellow hover:text-primary-blue hover:scale-105 rounded-md shadow transition duration-150 ease-in-out transform"
                          >
                            KNOW MORE
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
