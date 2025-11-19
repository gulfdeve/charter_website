'use client';
import { useLocale, useTranslations } from 'next-intl';
import { useRef, useEffect, useState } from 'react';
import EmblaCarousel from 'embla-carousel';
import { IoIosArrowBack, IoIosArrowForward, IoIosSunny } from 'react-icons/io';
import WhyChooseUs from '@/app/components/WhyChooseUs';
import Aboutus from '@/app/components/Aboutus';
import Reviews from '@/app/components/Reviews';
// import Modal from "@/app/components/Modal"
import Counters from '@/app/components/Counters';
import LocationCarousel from '@/app/components/LocationCarousel';
import Video from '@/app/components/Video';
import { useData } from '@/app/context/DataContext';
import { useLanguage } from '@/app/context/LanguageContext';
import { Link } from '../i18n/routing';
import Image from 'next/image';
import { FaYoutube } from 'react-icons/fa';
import Yachtmobilecarousal from '@/app/components/Yachtmobilecarousal';
import VideoLocal from '@/app/components/VideoLocal';
import { FiArrowRight } from 'react-icons/fi';
import ModalAfternoon from '@/app/components/ModalAfternoon';
import { BsStars } from 'react-icons/bs';

export default function Home() {
  const t = useTranslations();
  const emblaRef = useRef(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [videoModalVisible, setVideoModalVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState('');
  const emblaInstance = useRef(null);
  const { data, loading, error } = useData();
  const { language } = useLanguage();
  const locale = useLocale();
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

  const [activeFilter, setActiveFilter] = useState(null);

  useEffect(() => {
    // Show modal when the page loads
    setIsModalVisible(true);
  }, []);

  const closeModal = () => {
    setIsModalVisible(false);
  };

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
      if (
        activeFilter === 'bestSellers' &&
        ['56ft-lagoona', '61ft-silvercreek'].includes(product.slug)
      ) {
        return true;
      }
      return false;
    });
  };

  const getFilterStyle = filterName =>
    `px-2 py-1 transition-all duration-300 ${
      activeFilter === filterName
        ? 'text-primary-blue border-b-2 border-primary-blue'
        : 'hover:text-primary-blue'
    }`;

  useEffect(() => {
    if (emblaRef.current) {
      emblaInstance.current = EmblaCarousel(emblaRef.current, { loop: true });
    }

    // Return a cleanup function if needed
    return () => {
      if (emblaInstance.current) {
        emblaInstance.current.destroy(); // Properly destroy the instance if it exists
      }
    };
  }, []);

  const scrollPrev = () => emblaInstance.current?.scrollPrev();
  const scrollNext = () => emblaInstance.current?.scrollNext();

  return (
    <>
      <div>
        {/* <Modal show={isModalVisible} onClose={closeModal} /> */}
        {/* <ModalAfternoon show={isModalVisible} onClose={closeModal} /> */}
        <div>
          {/* <Video /> */}
          <VideoLocal
            filename="/Seasonal Tour _ Luxury Tours.mp4"
            section="home"
          />
        </div>
        <div className="relative">
          <div className="flex flex-col items-center justify-center">
            <h2 className=" text-primary-blue text-center font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl md:p-4 pb-4 px-3">
              {t('home.dubai-yachts-online-booking')}
            </h2>
            <p className=" text-primary-blue text-center text-lg sm:text-xl md:text-xl lg:text-2xl  pb-6 md:pb-12">
              {t('home.enjoy-your-luxury-yacht-experience')}
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="hidden flex justify-center items-center gap-8 md:gap-8 text-xs sm:text-base md:text-lg font-semibold py-2 pb-10 md:py-2 px-2">
            <button
              onClick={() => setActiveFilter('bestSellers')}
              className={getFilterStyle('bestSellers')}
            >
              BEST SELLERS
            </button>
            <button
              onClick={() => setActiveFilter('premium')}
              className={getFilterStyle('premium')}
            >
              PREMIUM
            </button>
            {activeFilter && (
              <button
                onClick={() => setActiveFilter(null)}
                className="text-primary-red hover:text-primary-red-2 transition-all duration-300"
                aria-label="Clear filter"
              >
                ✕
              </button>
            )}
          </div>

          {/* DESKTOP */}
          <div className="hidden md:block z-30">
            <div className="container mx-auto p-0">
              <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 md:gap-4">
                {!loading &&
                  getFilteredProducts().map(product => (
                    <div
                      key={product.id}
                      className="relative flex flex-col p-5 rounded-lg shadow-custom bg-white"
                    >
                      {/* YouTube Button */}
                      {product.youtube_url && (
                        <button
                          onClick={() => openVideoModal(product.youtube_url)}
                          aria-label="Watch video"
                          className="absolute top-4 right-4 z-20 bg-white p-2 rounded-full shadow-md hover:bg-red-600 hover:text-white text-red-600 transition-all"
                        >
                          <FaYoutube size={20} />
                        </button>
                      )}
                      <Link href={`/yacht-rentals/${product.slug}`}>
                        <h3 className="md:text-lg  font-bold hover:text-primary-blue-2 transition-all duration-300 cursor-pointer">
                          {product.translations?.[locale].name_of_yacht}
                        </h3>
                      </Link>
                      <div className="relative">
                        {/* Yacht Image */}
                        <Link href={`/yacht-rentals/${product.slug}`}>
                          <Image
                            src={`https://www.centauruscharter.net/product/images/${product.image}`}
                            alt={product.translations?.[locale].name_of_yacht}
                            className="w-full rounded-lg mt-3"
                            width={400}
                            height={400}
                          />
                        </Link>

                        {/* Category Badges */}
                        {/* Summer Offer Tag */}
                        {/* {product.id !== 20 && (
                  <a href="/resident-offer" target="_blank" className="cursor-pointer font-semibold absolute z-10 flex items-center gap-2 top-6 left-0 gradient-custom-3 text-primary-blue-2 text-sm py-0.5 px-2 rounded-r-lg hover:pl-5 transition-all">
                    <IoIosSunny/>
                    <p>{t('offers.summer-offer-up-to-40')}</p>
                  </a>)}            */}
                        {['56ft-lagoona', '61ft-silvercreek'].includes(
                          product.slug
                        ) && (
                          <div className="absolute flex items-center gap-2 top-6 left-0 gradient-custom-2 text-primary-yellow-light text-sm py-0.5 px-2 rounded-r-lg">
                            <BsStars />
                            <p>{t('offers.best-seller')}</p>
                          </div>
                        )}
                        {product.per_hour_price > 4000 && (
                          <div className="absolute flex items-center gap-2 top-6 left-0 gradient-custom-2 text-primary-yellow-light text-sm py-0.5 px-2 rounded-r-lg">
                            <BsStars />
                            <p>{t('offers.premium-yacht')}</p>
                          </div>
                        )}

                        <div className="absolute grid grid-cols-3 items-center gap-0 rounded-lg center-absolute -bottom-5 left-0 right-0 px-5">
                          {/* Model */}
                          <div className="bg-primary-blue-light text-primary-grey p-1 xl:p-2 flex flex-col items-center rounded-l-lg">
                            <span className="text-xs">Build:</span>
                            <span className="font-bold text-sm text-black">
                              {product.translations?.[locale].model}
                            </span>
                          </div>

                          {/* Length */}
                          <div className="bg-primary-blue-light text-primary-grey p-1 xl:p-2 flex flex-col items-center">
                            <span className="text-xs">Length:</span>
                            <span className="font-bold text-sm text-black">
                              {product.translations?.[locale].size}
                            </span>
                          </div>

                          {/* Guests */}
                          <div className="bg-primary-blue-light text-primary-grey p-1 xl:p-2 flex flex-col items-center rounded-r-lg">
                            <span className="text-xs">Guests:</span>
                            <span className="font-bold text-sm text-black">
                              {product.translations?.[locale].guests}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="z-10 mt-8">
                        {product.id === 24 && (
                          <p className="text-xs font-normal italic text-primary-grey">
                            Poseidon 118ft Trips: An Add on of AED 1000 per hour
                            will be added for every additional 10 pax where the
                            occupancy surpasses the 40 passengers.
                          </p>
                        )}
                      </div>

                      <div className="flex flex-row justify-between items-start z-10">
                        <div>
                          <div className="text-sm font-semibold mt-3 mb-2">
                            Inclusion:{' '}
                            <span className="text-xs text-primary-grey font-normal">
                              (min. booking of 3 hrs)
                            </span>
                          </div>
                          <div>
                            <ol className="text-xs">
                              <li>Hops & Grapes</li>
                            </ol>
                          </div>
                          <div className="text-sm font-semibold mt-3 mb-2">
                            Extras:{' '}
                            <span className="text-xs text-primary-grey font-normal">
                              (additional charges apply)
                            </span>
                          </div>
                          <div>
                            <ol className="text-xs">
                              <li> Transfer</li>
                              <li>Canapés & Snacks</li>
                              <li>DJ</li>
                            </ol>
                          </div>
                        </div>
                        <div>
                          <Link
                            href={
                              'https://centaurusint.net/?utm_source=centauruscharter&utm_medium=logo_text&utm_campaign=branding'
                            }
                          >
                            <img
                              src="/centaurus_link.svg"
                              alt="centaurus link"
                              className="w-[10rem]"
                            />
                          </Link>
                          <div className="flex flex-col items-center justify-center">
                            <span className=" text-primary-blue-2 text-xs text-center">
                              <a
                                href="https://www.centauruscharter.com/terms-and-condition"
                                target="_blank"
                              >
                                T&Cs Apply
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-grow gap-2 flex-col lg:flex-row justify-end lg:justify-between lg:items-end z-20 border-t border-gray-400 pt-3 mt-5">
                        {/* Price per Hour */}
                        <div className="">
                          {/* {product.id === 20 && (<span className=" text-sm  ">Price per hour:</span>)} */}
                          <span>
                            {/* {product.id !== 20 && ( */}
                            <div>
                              {/* <p className="text-xs font-semibold italic text-primary-grey">Summer Offer Exclusive
                        </p> */}
                              {/* <p className="text-xs font-normal italic text-primary-red">Minimum booking of 3 hours
                        </p> */}
                              {/* {product.id !== 20 && ( */}
                              <div>
                                {/* <span className=" text-sm">Regular Price:</span> */}
                                <div className="flex gap-2 font-bold text-base lg:text-lg text-primary-red items-center mt-4">
                                  <span className="">
                                    AED{' '}
                                    {product.per_hour_price.toLocaleString()}
                                  </span>{' '}
                                  <span className="text-sm text-primary-grey">
                                    per hour
                                  </span>
                                </div>
                              </div>
                              {/* )} */}
                            </div>
                            {/* )} */}
                          </span>
                          {/* <div className="flex gap-2 items-center">
                      <span className="font-bold text-base lg:text-lg text-primary-red line">
                      {
                        summeroffer.find(offer =>
                          product.translations?.[locale].name_of_yacht
                            ?.toLowerCase()
                            .includes(offer.name.toLowerCase())
                        )?.discounted || `AED ${product.per_hour_price.toLocaleString()}`
                      } 
                      {product.id === 24 && (<span className="text-xs text-primary-grey"> (40 Pax)</span>)}
                      </span>
                      <span className="font-semibold text-sm text-primary-grey"></span>
                      </div> */}
                        </div>
                        <a
                          href={`https://fareharbor.com/embeds/book/centauruscharter/items/${product.fareharbor_id}/?full-items=yes&flow=645487`}
                          target="_self"
                          rel="noopener noreferrer"
                          className="blue-solid-button text-center"
                        >
                          Book Now
                        </a>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* MOBILE */}
          <div className="md:hidden block">
            <Yachtmobilecarousal />
          </div>
          <p className=" text-primary-grey text-center  text-base py-4 md:py-14 px-3 mx-auto container">
            {t('home.card-description-below')}
          </p>
          {/* Background SVG in Behind */}
          <div
            className="hidden lg:block absolute inset-0 z-[-10]"
            style={{
              backgroundImage: "url('/images/bg-svg-blue.svg')",
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'top',
              backgroundSize: 'contain',
              backgroundAttachment: 'fixed',
            }}
          ></div>
        </div>

        <div className="bg-[#fafafa] py-20">
          <div className="container mx-auto ]">
            {/* Grid Layout for 4 Boxes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 auto-rows-fr">
              {/* Box 1 */}
              <a
                href="/yacht-rentals"
                className="relative group bg-primary-blue-2 text-white py-8 px-5 md:py-8 md:px-10 rounded-lg shadow-lg overflow-hidden flex flex-col"
              >
                {/* Background Image */}
                <img
                  src="/LUXURY YACHT CHARTER.webp"
                  alt="Luxury Yacht Rentals"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 md:opacity-60 md:group-hover:opacity-10 transition-opacity duration-300"
                />
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <h2 className="text-xl md:text-2xl xl:text-2xl font-bold mb-4">
                    {t('home.luxury-yacht-rentals')}
                  </h2>
                  <p className="md:opacity-0 md:group-hover:opacity-100 leading-7 transition-opacity duration-300 text-sm mb-4">
                    {t('home.luxury-yacht-card-description')}
                    <br />
                    <br />
                    {t('home.luxury-yacht-card-description-one')}
                  </p>
                  <div className="flex items-center mt-auto pt-5 group">
                    <div className="btn-info">
                      {t('home.luxury-yacht-card-button')}
                    </div>
                    <FiArrowRight
                      size={20}
                      className="text-lg transform md:group-hover:translate-x-4 transition-transform duration-300"
                    />
                  </div>
                </div>
              </a>

              {/* Box 2 */}
              <a
                href="/yacht-trips"
                className="relative group bg-primary-blue-2 text-white py-8 px-5 md:py-8 md:px-10 rounded-lg shadow-lg overflow-hidden flex flex-col"
              >
                {/* Background Image */}
                <img
                  src="/CUSTOMIZEDEXPERIENCES.webp"
                  alt="Customized Yacht Trips"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 md:opacity-60 md:group-hover:opacity-10 transition-opacity duration-300"
                />
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <h2 className="text-xl md:text-2xl xl:text-2xl font-bold mb-4">
                    {t('home.customized-yacht-trips')}
                  </h2>
                  <p className="md:opacity-0 md:group-hover:opacity-100 leading-7 transition-opacity duration-300 text-sm mb-4">
                    {t('home.customized-yacht-trips-description')}
                    <br />
                    <br />
                    {t('home.customized-yacht-trips-description-one')}
                  </p>
                  <div className="flex items-center mt-auto pt-5 group">
                    <div className="btn-info">
                      {t('home.explore-our-experiences-button')}
                    </div>
                    <FiArrowRight
                      size={20}
                      className="text-lg transform md:group-hover:translate-x-4 transition-transform duration-300"
                    />
                  </div>
                </div>
              </a>

              {/* Box 3 */}
              <a
                href="/offers"
                className="relative group bg-primary-blue-2 text-white py-8 px-5 md:py-8 md:px-10 rounded-lg shadow-lg overflow-hidden flex flex-col"
              >
                {/* Background Image */}
                <img
                  src="/EXCLUSIVEOFFERS.webp"
                  alt="Exclusive Offers"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 md:opacity-60 md:group-hover:opacity-10 transition-opacity duration-300"
                />
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <h2 className="text-xl md:text-2xl xl:text-2xl font-bold mb-4">
                    {t('home.exclusive-offers')}
                  </h2>
                  <p className="md:opacity-0 md:group-hover:opacity-100 leading-7 transition-opacity duration-300 text-sm mb-4">
                    {t('home.exclusive-offers-description')}
                    <br />
                    <br />
                    {t('home.exclusive-offers-description-one')}
                  </p>
                  <div className="flex items-center mt-auto pt-5 group">
                    <div className="btn-info">
                      {t('home.explore-all-offers-button')}
                    </div>
                    <FiArrowRight
                      size={20}
                      className="text-lg transform md:group-hover:translate-x-4 transition-transform duration-300"
                    />
                  </div>
                </div>
              </a>

              {/* Box 4 */}
              <a
                href="/watersports"
                className="relative group bg-primary-blue-2 text-white py-8 px-5 md:py-8 md:px-10 rounded-lg shadow-lg overflow-hidden flex flex-col"
              >
                {/* Background Image */}
                <img
                  src="/WATERACTIVITIES.webp"
                  alt="Water Sports Add-ons"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 md:opacity-60 md:group-hover:opacity-10 transition-opacity duration-300"
                />
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <h2 className="text-xl md:text-2xl xl:text-2xl font-bold mb-4">
                    {t('home.water-sports-add-ons')}
                  </h2>
                  <p className="md:opacity-0 md:group-hover:opacity-100 leading-7 transition-opacity duration-300 text-sm mb-4">
                    {t('home.water-sports-add-ons-description')}
                    <br />
                    <br />
                    {t('home.water-sports-add-ons-description-one')}
                  </p>
                  <div className="flex items-center mt-auto pt-5 group">
                    <div className="btn-info">
                      {t('home.explore-our-water-activities-button')}
                    </div>
                    <FiArrowRight
                      size={20}
                      className="text-lg transform md:group-hover:translate-x-4 transition-transform duration-300"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <WhyChooseUs />
        <div className="h-[30vh] lg:h-[50vh] relative">
          {/* Scrollable Background */}
          <div
            className="h-[30vh] lg:h-[50vh] bg-cover bg-fixed lg:bg-top bg-center"
            style={{
              backgroundImage: "url('/images/yacht-sun.webp')",
            }}
          >
            {/* SVG Divider */}
            <div className="divider-top absolute w-full -top-2">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                className="w-full "
              >
                <path
                  d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                  className="shape-fill fill-white"
                ></path>
              </svg>
            </div>
          </div>

          {/* Fixed Content */}
        </div>
        <Aboutus />
        <Reviews />
        <Counters />
        <LocationCarousel />
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
    </>
  );
}
