import React, { useEffect, useRef } from "react";
import EmblaCarousel from "embla-carousel";

import { useData } from "../context/DataContext";

import { useLocale } from "next-intl";
import Image from "next/image";

// import Link from "next/link";
import { useRouter, usePathname, Link } from "@/app/i18n/routing";



// Mobile Version: Uses updated card design and responsive widths
export default function YachtmobCarousel() {
   const { data, loading } = useData();
   const locale = useLocale()
  const emblaRef = useRef(null);
  const emblaInstance = useRef(null);

  useEffect(() => {
    if (emblaRef.current) {
      emblaInstance.current = EmblaCarousel(emblaRef.current, {
        align: "start",
        loop: true,
      });
      const autoplay = setInterval(() => {
        emblaInstance.current?.scrollNext();
      }, 3000);
      return () => {
        clearInterval(autoplay);
        emblaInstance.current?.destroy();
      };
    }
  }, []);

  const scrollPrev = () => emblaInstance.current?.scrollPrev();
  const scrollNext = () => emblaInstance.current?.scrollNext();

  return (
    <div className="container mx-auto md:px-4 pb-16 md:hidden">
      {/* Optional heading */}
      
      
      <div className="relative">
        {/* Embla viewport */}
        <div ref={emblaRef} className="overflow-hidden px-3 py-5 ">
          {/* Embla container */}
          <div className="flex gap-4 px-3">
          {!loading &&
              data?.products?.map((product) => (
                <div
                key={product.id}
                // Control how many cards appear at once (85%, 50%, 40%, etc.)
                className="flex-[0_0_80%] md:flex-[0_0_50%] lg:flex-[0_0_40%]"
              >
                <div
                  key={product.id}
                  className="embla__slide p-4 w-full lg:basis-[calc(100%/3)] flex-none"
                >
                  <div className="relative bg-transparent rounded-lg overflow-hidden space-y-5">
                    <Image
                      src={`https://www.centauruscharter.com/product/images/${product.thumbnail_image}`}
                      alt={product.translations[locale].name_of_yacht}
                      width={450}
                      height={0}
                      className="w-full h-[24rem] rounded-lg object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-black-gradient p-4 text-white rounded-lg">
                      <h3 className="text-3xl font-bold text-left mb-3">
                        <Link href={`/yacht-rentals/${product.slug}`}>
                          {product.translations[locale].name_of_yacht}
                        </Link>
                      </h3>
                      <p className="text-md text-left mb-3">
                        {product.translations[locale].slider_text}
                      </p>
                      <Link href={`/yacht-rentals/${product.slug}`}>
                        <button className="yellow-solid-button uppercase">
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                </div>
              ))}
          
    
        {/* Navigation Buttons */}
        </div>
        </div>
      </div>
    </div>
  );
}

// Desktop Version: Keeps your original design code


