import { useEffect, useRef, useState } from "react";
import EmblaCarousel from "embla-carousel";
import { Link } from "@/app/i18n/routing";
import Image from "next/image";
import { useData } from "@/app/context/DataContext";
import { useLocale, useTranslations } from "next-intl";

export default function YachtmobileCarousal() {
  const emblaRef = useRef(null);
  const [embla, setEmbla] = useState(null);
  const { data, loading, error } = useData();
  const locale = useLocale();
  useEffect(() => {
    if (!embla && emblaRef.current) {
      const emblaInstance = EmblaCarousel(emblaRef.current, {
        loop: true,
        align: "start",
        slidesToScroll: 1,
        // Feel free to tweak additional options here
      });
      setEmbla(emblaInstance);
    }
  }, [embla]);

  return (
    <div className="container mx-auto py-6">
      {/* Embla "viewport" container */}
      <div ref={emblaRef} className="overflow-hidden md:px-3 md:py-5 xxs:px-2">
        {/* Embla "container" for slides: use flex + partial widths */}
        <div className="flex gap-4 px-3">
          {!loading &&
            data?.products?.map((product) => (
              <div
                key={product.id}
                // This width ensures one full card + part of the next is visible
                className="flex-[0_0_85%] md:flex-[0_0_50%] lg:flex-[0_0_40%]"
              >
                <div className="flex flex-col border border-gray-300 xl:p-10 md:p-5 p-3 rounded-lg shadow-none">
                  {/* Yacht Title */}
                  <Link href={`/yacht-rentals/${product.slug}`}>
                    <h2 className="xl:text-4xl md:text-lg xxs:text-sm text-xl font-bold">
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

                  {/* Model / Length / Guests / Price */}
                  <div className="grid grid-cols-3 items-center gap-0 rounded-lg px-3 absolute -bottom-5 left-0 right-0">
                    {/* Model */}
                    <div className="bg-[#f1f1f1] p-1 xl:p-2.5 flex flex-col items-center rounded-l-lg">
                      <span className="font-semibold text-primary-grey text-[0.6rem]">
                        Model:
                      </span>
                      <span className="font-semibold text-xs">
                        {product.translations?.[locale].model}
                      </span>
                    </div>
                    {/* Length */}
                    <div className="bg-[#f1f1f1] p-1 xl:p-2 flex flex-col items-center">
                      <span className="font-semibold text-primary-grey text-[0.6rem]">
                        Length:
                      </span>
                      <span className="font-semibold text-xs ">
                        {product.translations?.[locale].size}
                      </span>
                    </div>
                    {/* Guests */}
                    <div className="bg-[#f1f1f1] p-1 xl:p-2 flex flex-col items-center rounded-r-lg">
                      <span className="font-semibold text-primary-grey text-[0.6rem]">
                        Guests:
                      </span>
                      <span className="font-semibold text-xs">
                        {product.translations?.[locale].guests}
                      </span>
                    </div>
                  </div>
                  </div>

                  {/* Trip Inclusions & Partner Link */}
                  <div className="flex flex-row justify-between items-center xl:w-[32rem] pt-8 z-10">
                    <div>
                      <div className="font-semibold text-xs mt-3 mb-2">Trip inclusions from 3 hours onwards:
                      </div>
                      <ol className="text-xs">
                        <li>
                          Hops, Wines, Bubbly Drinks, Coffee, Tea, Water, &
                          Softdrinks
                        </li>
                      </ol>
                      <div class="text-sm font-semibold mt-3 mb-2">Extras: <span class="text-xs text-primary-grey font-normal">(additional charges apply)</span></div>
                      <ol className="text-xs">
                      <li>Transfer</li>
                        <li>Canapés & Snacks</li>
                        <li>DJ</li>
                        </ol>
					  <span className="text-primary-blue text-xs text-center  ">
                          T&C’s Apply
                        </span>
                        
                      {/* <div className="flex flex-col items-center justify-center">
                      
                    </div> */}
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
                          className="xxs:w-[5rem] xs:w-[7rem] xl:mt-3"
                        />
                      </Link>
                  {/* Book Now & T&C */}
                  <div className="flex s:flex-row xxs:flex-col-reverse justify-between items-center z-10 xl:w-[32rem] mt-3">
                    <div className="flex w-full justify-between items-center border-t border-gray-400 pt-3">
                    {/* Per Hour */}
                <div className=" xl:p-2 flex flex-col xl:rounded-r-lg">
                      <span className="xxs:text-[0.47rem] xs:text-[0.6rem]">
                        Price Per Hour:
                      </span>
                      <span className="font-bold text-sm xs:text-lg text-primary-red ">
					              {product.per_hour_price.toLocaleString()} +VAT
                      </span>
                    </div>
                    <div className="">
                      <a
                        href={`https://fareharbor.com/embeds/book/centauruscharter/items/${product.fareharbor_id}/?full-items=yes&flow=645487`}
                        target="_self"
                        rel="noopener noreferrer"
                        className="p-3
                        text-base xxs:text-xs font-bold tracking-wider uppercase
                        text-white bg-primary-blue-2
                        hover:bg-primary-blue hover:text-primary-yellow hover:scale-105
                        rounded-md shadow
                        transition duration-150 ease-in-out transform"
                      >
                        Book Now
                      </a>
                    </div>
                    </div>
                    <div>
                     
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="flex items-center justify-center py-5 px-6">
        <button className="yellow-solid-button w-full ">
          {" "}
          BOOK YOUR YACHT
        </button>
      </div>
    </div>
  );
}
