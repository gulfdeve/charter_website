'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Link } from '@/app/i18n/routing';
import Image from 'next/image';
import EmblaCarousel from 'embla-carousel';
import { FaArrowLeft, FaArrowRight, FaYoutube } from 'react-icons/fa';
import BookNowButton from '@/app/components/BookNowButton';
import { BsStars } from 'react-icons/bs';
import { IoIosSunny } from 'react-icons/io';
import { FiTool } from 'react-icons/fi';
import { useTranslations } from 'next-intl';

const UNDER_MAINTENANCE_SLUGS = ['56ft-lagoona', '58ft-etosha', '61ft-silvercreek'];

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
function getDiscountedPrice(yachtName) {
  if (!yachtName) return null;
  const normalize = str => str.replace(/[\s\-]/g, '').toLowerCase();
  const yachtNorm = normalize(yachtName);
  const offer = summeroffer.find(item => normalize(item.name) === yachtNorm);
  return offer ? offer.discounted : null;
}
const YachtCard = ({ yacht, t }) => {
  const emblaRef = useRef(null);
  const emblaApi = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState('');

  useEffect(() => {
    if (emblaRef.current) {
      emblaApi.current = EmblaCarousel(emblaRef.current, { loop: true });
    }
    return () => emblaApi.current?.destroy();
  }, [yacht]);

  const scrollPrev = () => emblaApi.current?.scrollPrev();
  const scrollNext = () => emblaApi.current?.scrollNext();

  const openModal = videoUrl => {
    setSelectedVideo(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedVideo('');
    setIsModalOpen(false);
  };

  return (
    <div className="relative flex flex-col md:p-5 p-3 rounded-lg shadow-custom">
      {/* Yacht Details */}
      <div className="flex flex-col items-start">
        <Link href={`yacht-rentals/${yacht.slug}`}>
          <h2 className="text-primary-blue text-xl font-bold pb-4 hover:text-primary-blue-2 transition-all duration-300 cursor-pointer">{yacht.title}</h2>
        </Link>
      </div>

      <div className="relative">
        <div className="overflow-hidden rounded-lg" ref={emblaRef}>
          <div className="flex">
            {yacht.images.map((img, index) => (
              <div key={index} className="min-w-full relative aspect-[5/3]">
                <Link href={`yacht-rentals/${yacht.slug}`}>
                  <Image src={`https://www.centauruscharter.net/product/galleryimages/${img}`} alt={`${yacht.title} gallery ${index + 1}`} className="object-cover" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority={index === 0} />
                </Link>
                {/* YouTube Icon only on first slide if URL exists */}
                {/* {index === 0 && yacht.youtube_url && (
                  <button
                    onClick={() =>
                      openModal(
                        yacht.youtube_url
                      )
                    }
                    className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-red-600 hover:text-white text-red-600 transition-all"
                    aria-label="Watch video"
                  >
                    <FaYoutube size={20} />
                  </button>
                )} */}
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Arrows */}
        {yacht.images.length > 1 && (
          <>
            <button onClick={scrollPrev} aria-label="Previous slide" className="bg-white text-gray-500 opacity-80 hover:opacity-90 transition duration-150 ease-in-out transform absolute top-1/2 left-2 -translate-y-1/2 p-2 rounded-full shadow-md">
              <FaArrowLeft />
            </button>
            <button onClick={scrollNext} aria-label="Next slide" className="bg-white text-gray-500 opacity-80 hover:opacity-90 transition duration-150 ease-in-out transform absolute top-1/2 right-2 -translate-y-1/2 p-2 rounded-full shadow-md">
              <FaArrowRight />
            </button>
          </>
        )}

        {/* Status / Category Badges */}
        {UNDER_MAINTENANCE_SLUGS.includes(yacht.slug) ? (
          <div className="absolute z-20 flex items-center gap-2 top-4 left-0 bg-amber-500 text-white text-sm font-semibold py-0.5 px-2 rounded-r-lg">
            <FiTool />
            <p>Under Maintenance</p>
          </div>
        ) : (
          <>
            {yacht.category.includes('bestSellers') && (
              <div className="absolute flex items-center gap-2 top-4 left-0 gradient-custom-2 text-primary-yellow-light text-sm py-0.5 px-2 rounded-r-lg">
                <BsStars />
                <p>{t('offers.best-seller')}</p>
              </div>
            )}
            {yacht.category.includes('premium') && (
              <div className="absolute flex items-center gap-2 top-4 left-0 gradient-custom-2 text-primary-yellow-light text-sm py-0.5 px-2 rounded-r-lg">
                <BsStars />
                <p>{t('offers.premium-yacht')}</p>
              </div>
            )}
          </>
        )}
        {/* Summer Offer Tag */}
        {/* {yacht.id !== 20 && (
          <a href="/resident-offer" target="_blank" className="cursor-pointer font-semibold absolute flex items-center gap-2 top-4 left-0 gradient-custom-3 text-primary-blue-2 text-sm py-0.5 px-2 rounded-r-lg hover:pl-5 transition-all">
            <IoIosSunny/>
            <p>{t('offers.summer-offer-up-to-40')}</p>
          </a>
        )} */}
        {/* YouTube Icon (same design, moved above carousel) */}
        {yacht.youtube_url && (
          <button onClick={() => openModal(yacht.youtube_url)} aria-label="Watch video" className="absolute top-4 right-4 z-30 bg-white p-2 rounded-full shadow-md hover:bg-red-600 hover:text-white text-red-600 transition-all">
            <FaYoutube size={20} />
          </button>
        )}

        {/* Model, Length, Guests */}
        <div className="absolute grid grid-cols-3 items-center gap-0 rounded-lg center-absolute -bottom-5 left-0 right-0 px-3">
          <div className="bg-primary-blue-light text-primary-grey p-1 xl:p-2 flex flex-col items-center rounded-l-lg">
            <span className="text-xs">Build:</span>
            <span className="font-bold text-xs md:text-sm text-black">{yacht.model}</span>
          </div>
          <div className="bg-primary-blue-light text-primary-grey p-1 xl:p-2 flex flex-col items-center">
            <span className="text-xs">Length:</span>
            <span className="font-bold text-xs md:text-sm text-black">{yacht.length}</span>
          </div>
          <div className="bg-primary-blue-light text-primary-grey p-1 xl:p-2 flex flex-col items-center rounded-r-lg">
            <span className="text-xs">Guests:</span>
            <span className="font-bold text-xs md:text-sm text-black">{yacht.guests}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-grow justify-end pt-4">
        {yacht.id === 24 && <p className="text-xs font-normal italic text-primary-grey mt-5">Poseidon 118ft Trips: An Add on of AED 1000 per hour will be added for every additional 10 pax where the occupancy surpasses the 40 passengers.</p>}

        <div className="flex flex-col s:flex-row md:flex-col lg:flex-row justify-between s:items-end md:items-stretch lg:items-end z-20 gap-2 border-t border-gray-400 pt-3 mt-5">
          <div className="flex flex-col text-left">
            {/* {yacht.id === 20 && (<span className=" text-sm">Price per hour:</span>)}
            {yacht.id !== 20 && ( */}
            <div>
              {/* <span className=" text-sm">Regular Price:</span> */}
              <div className="flex gap-2 font-bold text-base lg:text-lg text-primary-red items-center">
                <span className="">AED {parseInt(yacht.price).toLocaleString()}</span>
                <span className="text-sm text-primary-grey">per hour</span>
              </div>
            </div>
            {/* )} */}
            {/* <span>
            {yacht.id !== 20 && (
            <div>   
            <p className="text-xs font-semibold italic mt-4 text-primary-grey">Summer Offer Exclusive
            </p>
            <p className="text-xxs font-normal italic text-primary-grey">minimum booking of 2 hours<br/>Exclusive for UAE Residents
            </p>
            </div>
            )}
          </span> */}
            {/* <span className="font-bold text-md md:text-lg lg:text-xl text-primary-red line">
              {getDiscountedPrice(yacht.title) || `AED ${parseInt(yacht.price).toLocaleString()}`}
            {yacht.id === 24 && (<span className="text-xs text-primary-grey"> (40 Pax)</span>)}
            </span> */}
          </div>

          <BookNowButton fareharborId={yacht.fareharbor_id} />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative w-[90%] md:w-[60%] h-[60%] bg-black rounded-lg overflow-hidden">
            <button onClick={closeModal} className="absolute top-2 right-2 text-white text-xl z-10" aria-label="Close video">
              ✕
            </button>
            <iframe src={selectedVideo} className="w-full h-full" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="Yacht Video" />
          </div>
        </div>
      )}
    </div>
  );
};

export default function YachtList({ yachts }) {
  const t = useTranslations();
  const [activeTab, setActiveTab] = useState('allYachts');

  const filteredYachts = activeTab === 'allYachts' ? yachts : yachts.filter(yacht => yacht.category.includes(activeTab));

  const getTabStyle = tabName => `px-2 py-1 transition-all duration-300 ${activeTab === tabName ? 'text-primary-blue border-b-2 border-primary-blue' : 'hover:text-primary-blue'}`;

  return (
    <>
      <div className="flex justify-center items-center gap-8 md:gap-8 text-xs sm:text-base md:text-lg font-semibold py-2 pb-10 md:py-2 px-2">
        <button onClick={() => setActiveTab('allYachts')} className={getTabStyle('allYachts')}>
          ALL YACHTS
        </button>
        <button onClick={() => setActiveTab('bestSellers')} className={getTabStyle('bestSellers')}>
          BEST SELLERS
        </button>
        <button onClick={() => setActiveTab('premium')} className={getTabStyle('premium')}>
          PREMIUM
        </button>
      </div>

      <div className="p-0 md:p-6 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-10 gap-6 container mx-auto">
          {filteredYachts.map(yacht => (
            <YachtCard key={yacht.id} yacht={yacht} t={t} />
          ))}
        </div>
      </div>
    </>
  );
}
