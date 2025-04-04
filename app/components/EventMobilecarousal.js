import { useEffect, useRef, useState } from "react";
import EmblaCarousel from "embla-carousel";
import Link from "next/link";
import { useData } from "@/app/context/DataContext";
import { useLocale } from "next-intl";
import { FaWhatsapp } from "react-icons/fa";

export default function EventCarousel() {
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
    <div className="md:px-4 pb-16">
      {/* Embla "viewport" container */}
      <div ref={emblaRef} className="overflow-hidden py-5">
        {/* Embla "container" for slides: using flex for horizontal layout */}
        <div className="flex gap-4">
          {!loading &&
            data?.events?.map((event) => (
              <div
                key={event.id}
                // This width shows one full event card plus a partial view of the next
                className="flex-[0_0_85%] md:flex-[0_0_50%] lg:flex-[0_0_40%]"
              >
                <div className="flex flex-col justify-start lg:justify-between rounded-md bg-white h-full overflow-hidden border border-gray-400 md:border-none xl:p-10 shadow-none">
                  {/* Event Image */}
                  <Link href={`/events/${event.slug}`}>
                    <img
                      src={`https://www.centauruscharter.com/product/images/${event.image}`}
                      alt={event.translations[locale].title}
                      className="rounded-tl-md rounded-tr-md w-full object-cover"
                    />
                  </Link>
                  <div className="flex flex-col justify-start px-5 lg:px-5 flex-grow">
                    {/* Event Title */}
                    <h2 className="text-[#232629] text-lg font-bold pt-4">
                      <Link href={`/events/${event.slug}`}>
                        {event.translations[locale].title}
                      </Link>
                    </h2>
                    {/* Event Heading */}
                    <p className="text-[#232629] font-bold text-xs pt-2 pb-4">
                      {event.translations[locale].heading_2}
                    </p>
                    {/* Separator */}
                    <div className="bg-[#232629] w-full h-[0.05rem]"></div>
                    {/* Validity Info */}
                    <div className="flex flex-col items-start justify-start py-2">
                      <p className="text-[#232629] font-bold text-sm xl:text-lg">
                        Validity Until:
                        <br />
                        {event.validity}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between px-5 pb-5">
                    {/* Buttons */}
                    <div className="w-full flex flex-col sm:flex-row items-center justify-end gap-2">
                      <a
                        href={`${event.whatsapp_url}`}
                        target="_blank"
                        className="w-full flex justify-center py-2 px-4 text-xs font-bold tracking-wider uppercase text-primary-yellow bg-primary-blue hover:bg-primary-yellow hover:text-primary-blue hover:scale-105 rounded-md shadow transition duration-150 ease-in-out transform items-center"
                      >
                        WHATSAPP
                      </a>
                      <Link
                        href={`/events/${event.slug}`}
                        className="w-full flex justify-center py-2 px-4 text-[0.68rem] font-bold uppercase text-primary-yellow bg-primary-blue hover:bg-primary-yellow hover:text-primary-blue hover:scale-105 rounded-md shadow transition duration-150 ease-in-out transform items-center"
                      >
                        KNOW MORE
                      </Link>
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
