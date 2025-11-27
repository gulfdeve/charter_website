import { useEffect, useRef, useState } from 'react';
import EmblaCarousel from 'embla-carousel';
import { Link } from '@/app/i18n/routing';
import Image from 'next/image';
import { useData } from '@/app/context/DataContext';
import { useLocale } from 'next-intl';
import { FaYoutube } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';
import { IoIosSunny } from 'react-icons/io';
import { useTranslations } from 'next-intl';

export default function YachtmobileCarousal() {
  const t = useTranslations();
  const emblaRef = useRef(null);
  const [embla, setEmbla] = useState(null);
  const { data, loading, error } = useData();
  const locale = useLocale();
  const [activeFilter, setActiveFilter] = useState(null);
  const summeroffer = [
    {
      name: '36 Ft Yacht - Thunder',
      discounted: 'AED 415',
    },
    {
      name: '36 Ft Yacht - Storm',
      discounted: 'AED 415',
    },
    {
      name: '40 Ft Yacht - Riverside',
      discounted: 'AED 525',
    },
    {
      name: '56 Ft Yacht - Vassia',
      discounted: 'AED 725',
    },
    {
      name: '58 Ft Yacht - Etosha',
      discounted: 'AED 755',
    },
    {
      name: '56 Ft Yacht - Lagoona',
      discounted: 'AED 805',
    },
    {
      name: '61 Ft Yacht - Silver Creek',
      discounted: 'AED 875',
    },
    {
      name: '85 Ft Yacht - Kronos',
      discounted: 'AED 2,450',
    },
    {
      name: '118 Ft Yacht - Poseidon',
      discounted: 'AED 3,500',
    },
  ];
  // YouTube modal state
  const [videoModalVisible, setVideoModalVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState('');

  useEffect(() => {
    if (!embla && emblaRef.current) {
      const emblaInstance = EmblaCarousel(emblaRef.current, {
        loop: true,
        align: 'start',
        slidesToScroll: 1,
      });
      setEmbla(emblaInstance);
    }
  }, [embla]);

  const openVideoModal = url => {
    setSelectedVideo(url);
    setVideoModalVisible(true);
  };
  const closeVideoModal = () => {
    setSelectedVideo('');
    setVideoModalVisible(false);
  };

  const getFilteredProducts = () => {
    if (!data?.products) return [];
    if (!activeFilter) return data.products;

    return data.products.filter(product => {
      if (activeFilter === 'premium' && product.per_hour_price > 4000) {
        return true;
      }
      if (activeFilter === 'bestSellers' && ['56ft-lagoona', '61ft-silvercreek'].includes(product.slug)) {
        return true;
      }
      return false;
    });
  };

  const getFilterStyle = filterName => `px-2 py-1 transition-all duration-300 ${activeFilter === filterName ? 'text-primary-blue border-b-2 border-primary-blue' : 'hover:text-primary-blue'}`;

  return (
    <div className="container mx-auto py-6">
      {/* Filter Buttons */}
      <div className="hidden justify-center items-center gap-8 md:gap-8 text-xs sm:text-base md:text-lg font-semibold py-2 pb-10 md:py-2 px-2">
        <button onClick={() => setActiveFilter('bestSellers')} className={getFilterStyle('bestSellers')}>
          BEST SELLERS
        </button>
        <button onClick={() => setActiveFilter('premium')} className={getFilterStyle('premium')}>
          PREMIUM
        </button>
        {activeFilter && (
          <button onClick={() => setActiveFilter(null)} className="text-primary-red hover:text-primary-red-2 transition-all duration-300" aria-label="Clear filter">
            ✕
          </button>
        )}
      </div>

      {/* Embla viewport */}
      <div ref={emblaRef} className="overflow-hidden md:px-3 md:py-5 ">
        <div className="flex gap-4 px-3">
          {!loading &&
            getFilteredProducts().map(product => (
              <div key={product.id} className="flex-[0_0_85%] md:flex-[0_0_50%] lg:flex-[0_0_40%] relative">
                {/* YouTube Button */}
                {product.youtube_url && (
                  <button onClick={() => openVideoModal(product.youtube_url)} aria-label="Watch video" className="absolute top-2 right-2 z-20 bg-white p-1 rounded-full shadow-md hover:bg-red-600 hover:text-white text-red-600 transition-all">
                    <FaYoutube size={16} />
                  </button>
                )}

                <div className="flex flex-col border bg-white border-gray-300 xl:p-10 md:p-5 p-2 rounded-lg shadow-none">
                  {/* Yacht Title */}
                  <Link href={`/yacht-rentals/${product.slug}`}>
                    <h2 className="xl:text-4xl md:text-lg text-sm font-bold">{product.translations?.[locale].name_of_yacht}</h2>
                  </Link>

                  <div className="relative">
                    {/* Yacht Image */}
                    <Link href={`/yacht-rentals/${product.slug}`}>
                      <Image src={`https://www.centauruscharter.net/product/images/${product.image}`} alt={product.translations?.[locale].name_of_yacht} className="rounded-lg xl:w-[32rem] w-full mt-3" width={400} height={400} />
                    </Link>

                    {/* Category Badges */}
                    {/* Summer Offer Tag */}
                    {/* {product.id !== 20 && (
                  <a href="/resident-offer" target="_blank" className="cursor-pointer font-semibold absolute z-10 flex items-center gap-2 top-6 left-0 gradient-custom-3 text-primary-blue-2 text-xs s:text-md py-0.5 px-2 rounded-r-lg hover:pl-5 transition-all">
                    <IoIosSunny/>
                    <p>{t('offers.summer-offer-up-to-40')}</p>
                  </a>)} */}
                    {['56ft-lagoona', '61ft-silvercreek'].includes(product.slug) && (
                      <div className="absolute flex items-center gap-2 top-6 left-0 gradient-custom-2 text-primary-yellow-light text-xs s:text-md py-0.5 px-2 rounded-r-lg">
                        <BsStars />
                        <p>{t('offers.best-seller')}</p>
                      </div>
                    )}
                    {product.per_hour_price > 4000 && (
                      <div className="absolute flex items-center gap-2 top-6 left-0 gradient-custom-2 text-primary-yellow-light text-xs s:text-md  py-0.5 px-2 rounded-r-lg">
                        <BsStars />
                        <p>{t('offers.premium-yacht')}</p>
                      </div>
                    )}

                    {/* Model / Length / Guests */}
                    <div className="grid grid-cols-3 items-center gap-0 rounded-lg my-3">
                      {/* Model */}
                      <div className="bg-primary-blue-light p-1 xl:p-2.5 flex flex-col items-center rounded-l-lg">
                        <span className="font-semibold text-primary-grey text-[0.6rem]">Build:</span>
                        <span className="font-semibold text-xxs">{product.translations?.[locale].model}</span>
                      </div>
                      {/* Length */}
                      <div className="bg-primary-blue-light p-1 xl:p-2 flex flex-col items-center">
                        <span className="font-semibold text-primary-grey text-[0.6rem]">Length:</span>
                        <span className="font-semibold text-xxs ">{product.translations?.[locale].size}</span>
                      </div>
                      {/* Guests */}
                      <div className="bg-primary-blue-light p-1 xl:p-2 flex flex-col items-center rounded-r-lg">
                        <span className="font-semibold text-primary-grey text-[0.6rem]">Guests:</span>
                        <span className="font-semibold text-xxs">{product.translations?.[locale].guests}</span>
                      </div>
                    </div>
                  </div>

                  {/* Trip Inclusions & Partner Link */}
                  <div>{product.id === 24 && <p className="text-xxs font-normal italic text-primary-grey">Poseidon 118ft Trips: An Add on of AED 1000 per hour will be added for every additional 10 pax where the occupancy surpasses the 40 passengers.</p>}</div>
                  <div className="flex flex-row justify-between items-center xl:w-[32rem] z-10">
                    <div>
                      <div className="text-sm font-semibold mt-3 mb-2">
                        Inclusion: <span className="text-xs text-primary-grey font-normal">(min. booking of 3 hrs)</span>
                      </div>
                      <div>
                        <ol className="text-xs">
                          <li>Hops & Grapes</li>
                        </ol>
                      </div>
                      <div className="text-sm font-semibold mt-3 mb-2">
                        Extras: <span className="text-xs text-primary-grey font-normal">(additional charges apply)</span>
                      </div>
                      <ol className="text-xs list-disc list-inside">
                        <li>Transfer</li>
                        <li>Canapés & Snacks</li>
                        <li>DJ</li>
                      </ol>
                      <span className="text-primary-blue text-xs">T&Cs Apply</span>
                    </div>
                  </div>
                  <Link href={'https://centaurusint.net/?utm_source=centauruscharter&utm_medium=logo_text&utm_campaign=branding'}>
                    <img src="/centaurus_link.svg" alt="centaurus link" className="w-[10rem] xl:mt-3" />
                  </Link>

                  {/* Book Now & Pricing */}
                  <div className="flex s:flex-row xxs:flex-col-reverse justify-between items-center z-10 xl:w-[32rem] mt-3">
                    <div className="flex flex-col sm:flex-row w-full justify-between sm:items-end border-t border-gray-400 pt-3 pb-2 md:pb-0">
                      <div className="xl:p-2 flex flex-col xl:rounded-r-lg">
                        {/* {product.id === 20 && (<span className="text-sm">Price Per Hour:</span>)}
                      {product.id !== 20 && ( */}
                        <div>
                          {/* <span className=" text-sm">Regular Price:</span> */}
                          <div className="flex gap-2 font-bold text-lg text-primary-red items-center">
                            <span className="">AED {product.per_hour_price.toLocaleString()}</span>
                            <span className="text-sm text-primary-grey">per hour</span>
                          </div>
                        </div>
                        {/* )} */}
                        <span>
                          {/* {product.id !== 20 && (
                        <div>   
                        <p className="text-xs font-semibold italic mt-4 text-primary-grey">Summer Offer Exclusive
                        </p>
                        <p className="text-xxs font-normal italic text-primary-grey">minimum booking of 2 hours<br/>Exclusive for UAE Residents
                        </p>
                        </div>
                        )} */}
                        </span>
                        {/* <span className="font-bold text-lg text-primary-red">
                      {
                        summeroffer.find(offer =>
                          product.translations?.[locale].name_of_yacht
                            ?.toLowerCase()
                            .includes(offer.name.toLowerCase())
                        )?.discounted || `AED ${product.per_hour_price.toLocaleString()}`
                      } 
                      {product.id === 24 && (<span className="text-xs text-primary-grey"> (40 Pax)</span>)}
                      </span> */}
                      </div>
                      <div className="">
                        <a
                          href={`https://fareharbor.com/embeds/book/centauruscharter/items/${product.fareharbor_id}/?full-items=yes&flow=645487`}
                          target="_self"
                          rel="noopener noreferrer"
                          className="flex mt-3 p-3 text-base justify-center font-bold uppercase text-white bg-primary-blue-2 hover:bg-primary-blue hover:text-primary-yellow hover:scale-105 rounded-md shadow transition duration-150 ease-in-out transform"
                        >
                          Book Now
                        </a>
                      </div>
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
            <button onClick={closeVideoModal} className="absolute top-2 right-2 text-white text-xl z-10" aria-label="Close video">
              ✕
            </button>
            <iframe src={selectedVideo} className="w-full h-full" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="Yacht Video" />
          </div>
        </div>
      )}
    </div>
  );
}
