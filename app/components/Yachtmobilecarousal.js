import { useEffect, useRef, useState } from "react";
import EmblaCarousel from "embla-carousel";
import Link from "next/link";
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
    <div className="container mx-auto py-12 lg:p-6 md:px-6 xxs:px-2">
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
                <div className="flex flex-col border border-gray-400 xl:p-10 md:p-5 xxs:p-3 xxs:pb-5 rounded-lg shadow-none">
                  {/* Yacht Title */}
                  <Link href={`/yacht-rentals/${product.slug}`}>
                    <h2 className="xl:text-4xl md:text-lg xxs:text-sm text-xl font-bold">
                      {product.translations?.[locale].name_of_yacht}
                    </h2>
                  </Link>

                  {/* Yacht Image */}
                  <Link href={`/yacht-rentals/${product.slug}`}>
                    <Image
                      src={`https://www.centauruscharter.com/product/images/${product.image}`}
                      alt={product.translations?.[locale].name_of_yacht}
                      className="rounded-lg xl:w-[32rem] w-full mt-3"
                      width={400}
                      height={400}
                    />
                  </Link>

                  {/* Model / Length / Guests / Price */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 items-center gap-0 rounded-lg shadow-md mb-7 mt-5">
                    {/* Model */}
                    <div className="bg-primary-blue text-white p-1 xl:p-2.5 flex flex-col items-center xl:rounded-l-lg">
                      <span className="font-bold xxs:text-[0.5rem] xs:text-[0.6rem]">
                        Model:
                      </span>
                      <span className="font-semibold xxs:text-[0.5rem] xs:text-[0.6rem] xl:text-xs text-[#e1ae48]">
                        {product.translations?.[locale].model}
                      </span>
                    </div>
                    {/* Length */}
                    <div className="bg-primary-blue text-white p-1 xl:p-2 flex flex-col items-center">
                      <span className="font-bold xxs:text-[0.5rem] xs:text-[0.6rem]">
                        Length:
                      </span>
                      <span className="font-semibold xxs:text-[0.5rem] xs:text-[0.6rem] text-[#e1ae48]">
                        {product.translations?.[locale].size}
                      </span>
                    </div>
                    {/* Guests */}
                    <div className="bg-primary-blue text-white p-1 xl:p-2 flex flex-col items-center">
                      <span className="font-bold xxs:text-[0.5rem] xs:text-[0.6rem]">
                        Guests:
                      </span>
                      <span className="font-semibold xxs:text-[0.5rem] xs:text-[0.6rem] text-[#e1ae48]">
                        {product.translations?.[locale].guests}
                      </span>
                    </div>
                    {/* Per Hour */}
                    <div className="bg-primary-yellow text-primary-blue p-1 xl:p-2 flex flex-col items-center xl:rounded-r-lg">
                      <span className="xxs:text-[0.47rem] xs:text-[0.6rem]">
                        Per Hour:
                      </span>
                      <span className="font-semibold xxs:text-[0.46rem] xs:text-[0.6rem]">
                        {product.per_hour_price} +VAT
                      </span>
                    </div>
                  </div>

                  {/* Trip Inclusions & Partner Link */}
                  <div className="flex flex-row justify-between items-center xl:w-[32rem]">
                    <div>
                      <div className="font-bold md:text-base xxs:text-sm">Inclusions</div>
                      <ol className="list-disc ml-7 text-xs font-bold">
                        <li>
                          Hops, Wines, Bubbly Drinks, Coffee, Tea, Water, &
                          Softdrinks
                        </li>
                        <li>Transfer (upon request)</li>
                        <li>Canapés & Snacks (additional charges apply)</li>
                        <span className="text-blue-500 text-xs text-center  ">
                          T&C’s Apply
                        </span>
                      </ol>
                      {/* <div className="flex flex-col items-center justify-center">
                      
                    </div> */}
                    </div>
                  </div>

                  {/* Book Now & T&C */}
                  <div className="flex s:flex-row xxs:flex-col-reverse justify-between items-center xl:w-[32rem] mt-3">
                    <div className="pt-3">
                      <a
                        href={`https://fareharbor.com/embeds/book/centauruscharter/items/${product.fareharbor_id}/?full-items=yes&flow=645487`}
                        target="_self"
                        rel="noopener noreferrer"
                        className="py-3 px-6 xxs:py-2 xxs:px-3
          text-base xxs:text-xs font-bold tracking-wider uppercase
          text-primary-blue bg-primary-yellow
          hover:bg-primary-blue hover:text-primary-yellow hover:scale-105
          rounded-md shadow
          transition duration-150 ease-in-out transform "
                      >
                        Book Now
                      </a>
                    </div>

                    <div>
                      <Link
                        href={
                          "https://centaurusint.net/?utm_source=centauruscharter&utm_medium=logo_text&utm_campaign=branding"
                        }
                      >
                        <img
                          src="./centaurus_link.svg"
                          alt="centaurus link"
                          className="xxs:w-[5rem] xs:w-[7rem] xl:mt-3"
                        />
                      </Link>
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
