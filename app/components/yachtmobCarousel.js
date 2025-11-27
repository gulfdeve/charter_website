import React, { useEffect, useRef } from 'react';
import EmblaCarousel from 'embla-carousel';
import { useData } from '../context/DataContext';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { useRouter, usePathname, Link } from '@/app/i18n/routing';

export default function YachtmobCarousel() {
  const { data, loading } = useData();
  const locale = useLocale();
  const emblaRef = useRef(null);
  const emblaInstance = useRef(null);

  useEffect(() => {
    if (emblaRef.current) {
      emblaInstance.current = EmblaCarousel(emblaRef.current, {
        align: 'start',
        loop: true,
      });
      const autoplay = setInterval(() => {
        emblaInstance.current?.scrollNext();
      }, 10000);
      return () => {
        clearInterval(autoplay);
        emblaInstance.current?.destroy();
      };
    }
  }, []);

  const scrollPrev = () => emblaInstance.current?.scrollPrev();
  const scrollNext = () => emblaInstance.current?.scrollNext();

  // Filter products to only include those with translations for the current locale
  const filteredProducts = data?.products?.filter(product => product.translations && product.translations[locale]) || [];

  return (
    <div className="container mx-auto lg:hidden">
      <div className="relative">
        {/* Embla viewport */}
        <div ref={emblaRef} className="overflow-hidden">
          {/* Embla container */}
          <div className="flex">
            {!loading &&
              filteredProducts?.map(product => (
                <div key={product.id} className="flex-[0_0_90%] min-w-0 pl-2 pr-2">
                  <div className="relative bg-transparent rounded-lg overflow-hidden aspect-square">
                    <Image src={`https://www.centauruscharter.net/product/images/${product.thumbnail_image}`} alt={product.translations[locale].name_of_yacht} width={450} height={450} className="w-full h-full object-cover rounded-lg" loading="lazy" />
                    <div className="absolute bottom-0 left-0 w-full bg-black-gradient p-3 text-white rounded-b-lg">
                      <h3 className="text-2xl font-bold text-left mb-2">
                        <Link href={`/yacht-rentals/${product.slug}`}>{product.translations[locale].name_of_yacht}</Link>
                      </h3>
                      <p className="text-sm text-left mb-2">{product.translations[locale].slider_text}</p>
                      <Link href={`/yacht-rentals/${product.slug}`}>
                        <button className="yellow-solid-button uppercase text-sm py-2 px-4">Book Now</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
