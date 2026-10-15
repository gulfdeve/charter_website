'use client';
import React, { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname, Link } from '@/app/i18n/routing';
import { useData } from '@/app/context/DataContext';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoBoat } from 'react-icons/io5';

export default function FirstFooter() {
  const [openIndex, setOpenIndex] = useState(null);

  const locale = useLocale();
  const { data, loading } = useData();
  const t = useTranslations();
  const pathname = usePathname();

  // Scroll to top function
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 300);
    }
  };

  // Toggle a particular section by index
  const handleToggle = index => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  // Define each footer section and its content
  const footerSections = [
    {
      title: t('home.centaurus-charter'),
      content: (
        <ul>
          <li className="mb-2">
            <Link href="/" onClick={scrollToTop} className="text-text-primary-white capitalize">
              {t('navbar.home')}
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/aboutus" onClick={scrollToTop} className="text-text-primary-white capitalize">
              {t('navbar.about')}
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/yacht-rentals" onClick={scrollToTop} className="text-text-primary-white capitalize">
              {t('navbar.yacht-rentals')}
            </Link>
          </li>
          {/* <li className="mb-2">
            <Link
              href="/watersports"
              onClick={scrollToTop}
              className="text-text-primary-white capitalize"
            >
              {t("navbar.water-sports")}
            </Link>
          </li> */}
          <li className="mb-2">
            <Link href="/offers" onClick={scrollToTop} className="text-text-primary-white capitalize">
              {t('navbar.offers')}
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/resident-offer" onClick={scrollToTop} className="text-text-primary-white capitalize">
              {t('navbar.summer-offers')}
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/offers/dubai-yachts-winter-offers" onClick={scrollToTop} className="text-text-primary-white capitalize">
              {t('navbar.winter-offer')}
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/events" onClick={scrollToTop} className="text-text-primary-white capitalize">
              {t('navbar.events')}
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/blogs" onClick={scrollToTop} className="text-text-primary-white capitalize">
              {t('navbar.blogs')}
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/abu-dhabi-race-yacht-charter" onClick={scrollToTop} className="text-text-primary-white capitalize">
              {t('navbar.formula-1')}
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/new-year-yacht-party" onClick={scrollToTop} className="text-text-primary-white capitalize">
              {t('navbar.new-year')}
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/faq" onClick={scrollToTop} className="text-text-primary-white capitalize">
              {t('navbar.faq')}
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/contact" onClick={scrollToTop} className="text-text-primary-white capitalize">
              {t('navbar.contact-us')}
            </Link>
          </li>
          <li className="mb-2">
            <a className="text-text-primary-white capitalize" href="https://www.centauruscharter.net/public/pdf/Centaurus-Charter-Profile-2023.pdf" onClick={scrollToTop}>
              {t('navbar.company-profile')}
            </a>
          </li>
        </ul>
      ),
    },
    {
      title: t('footer.luxury-yachts'),
      content: (
        <ul>
          {!loading &&
            data?.products?.map(product => (
              <li key={product.id} className="mb-2 text-text-primary-white">
                <Link href={`/yacht-rentals/${product.slug}`} onClick={scrollToTop}>
                  {product.translations?.[locale]?.name_of_yacht}
                </Link>
              </li>
            ))}
        </ul>
      ),
    },
    {
      title: t('navbar.experiences'),
      content: (
        <ul>
          {!loading &&
            data?.experiences?.map(experience => (
              <li key={experience.id} className="mb-2 text-text-primary-white capitalize">
                <Link href={`/yacht-trips/${experience.slug}`} onClick={scrollToTop}>
                  {experience.translations?.[locale]?.title}
                </Link>
              </li>
            ))}
        </ul>
      ),
    },
    {
      title: t('footer.reach-out-to-us'),
      content: (
        <div className="pb-4">
          <ul className="text-text-primary-white space-y-4">
            {[
              {
                address: t('footer.office-location'),
                link: 'https://www.google.com/maps/search/?api=1&query=The+Bayswater+by+Omniyat+Marasi+Dr+Business+Bay&query_place_id=ChIJEecg8dFpXz4R7CTL8wQFnPE',
              },
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <FaMapMarkerAlt className="w-5 h-5 flex-shrink-0 text-text-primary-white mt-1" />
                <a href={item.link} target="_blank" className="hover:text-white text-left">
                  {item.address}
                  <br />
                  {item.location}
                </a>
              </li>
            ))}
          </ul>

          <ul className="text-text-primary-white space-y-4 mt-6">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="w-5 h-5 flex-shrink-0" />
              <a href="tel:+97143521833" className="hover:text-white text-left">
                +971 4 352 1833
              </a>
            </li>
            <li className="flex items-center gap-2">
              <IoLogoWhatsapp className="w-5 h-5 flex-shrink-0" />
              <a href="tel:+971524901269" className="hover:text-white text-left">
                +971 52 490 1269
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MdEmail className="w-5 h-5 flex-shrink-0" />
              <a href="mailto:info@centauruscharter.com" className="hover:text-white text-left">
                info@centauruscharter.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MdEmail className="w-5 h-5 flex-shrink-0" />
              <a href="mailto:sales@centauruscharter.com" className="hover:text-white text-left">
                sales@centauruscharter.com
              </a>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: t('footer.for-enquiries'),
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ul className="text-text-primary-white">
            <li className="flex flex-col md:items-start items-center text-center md:text-left">
              <p className="font-semibold pb-3">{t('footer.english-russian')}</p>
              <p className="">Lilia</p>
              <a className="mb-2 inline-block" href="tel:+971505484685">
                +971 50 548 4685
              </a>
              <p className="">Aliona</p>
              <a className="mb-2 inline-block" href="tel:+971502484678">
                +971 50 248 4678
              </a>
              <a className="mb-2 inline-block" href="tel:+971502014225">
                +971 50 201 4225
              </a>
              {/* <p className="">Maya</p>
            <a
              className="mb-2 inline-block"
              href="tel:+971501452203"
            >
              +971 50 145 2203
            </a> */}
            </li>
            {/* <li className="flex flex-col md:items-start items-center text-center md:text-left">
            <p className="font-semibold py-3">English / Chinese</p>
            <a className="mb-2 inline-block" href="tel:+971506484625" onClick={scrollToTop}>
              +971 50 648 4625
            </a>
          </li> */}
          </ul>
          <ul className="text-text-primary-white">
            <li className="flex flex-col md:items-start items-center text-center md:text-left">
              <p className="font-semibold pb-3">{t('footer.english-filipino')}</p>
              <p className="">Tracy</p>
              <a className="mb-2 inline-block" href="tel:+971524901269">
                +971 52 490 1269
              </a>
              <a className="mb-2 inline-block" href="tel:+971567277387">
                +971 56 727 7387
              </a>
              {/* <p className="">May</p>
              <a className="mb-2 inline-block" href="tel:+971565017057">
                +971 56 501 7057
              </a> */}
              {/* <p className="">Vicky</p>
            <a
              className="mb-2 inline-block"
              href="tel:+971544783156"
            >
              +971 54 478 3156
            </a> */}
            </li>
            {/* <li className="flex flex-col md:items-start items-center text-center md:text-left">
              <p className="font-semibold pb-3">English / German / Arabic</p>
              <p className="">Wael</p>
              <a className="mb-2 inline-block" href="tel:+971565017057">
                +971 56 501 7057
              </a>
            </li> */}
          </ul>
          <ul className="text-text-primary-white">
            <ul>
              {/* <li className="flex flex-col md:items-start items-center text-center md:text-left">
            <p className="font-semibold pb-3">{t('footer.english-chinese')}</p>
            <p className="">Cher</p>          
            <a
              className="mb-2 inline-block"
              href="tel:+971544948573"
              >
              +971 54 494 8573
            </a>
          </li> */}
              {/* <li className="flex flex-col md:items-start items-center text-center md:text-left">
                <p className="font-semibold pb-3">{t('footer.english-arabic')}</p>
                <p className="">Hesham</p>
                <a className="mb-2 inline-block" href="tel:+971565017078">
                  +971 56 501 7078
                </a>
              </li> */}
              {/* <li className="flex flex-col md:items-start items-center text-center md:text-left">
                <p className="font-semibold py-3">{t('footer.english-spanish-portuguese')}</p>
                <p className="">Yasser</p>
                <a className="mb-2 inline-block" href="tel:+971567277387">
                  +971 56 727 7387
                </a>
              </li> */}
            </ul>
            {/* <li className="flex flex-col md:items-start items-center text-center md:text-left">
            <p className="font-semibold py-3">English / Hindi</p>
            <a className="mb-2 inline-block" href="tel:+971501452203" onClick={scrollToTop}>
              +971 50 145 2203
            </a>
          </li> */}
          </ul>
        </div>
      ),
    },
    {
      title: t('footer.yachts-location'),
      content: (
        <div className="pb-4">
          <ul className="text-text-primary-white space-y-4">
            {[
              {
                address: 'Dubai Marina Walk, (Near Spinneys)',
                link: 'https://g.page/r/CRSFyJhKh2TUEAE',
              },
              {
                address: 'Dubai Harbour Marina',
                link: 'https://goo.gl/maps/ySfLoXGZ348Hs2rWA',
              },
              {
                address: 'Dubai Harbour Marina (Near Dockmaster)',
                link: 'https://maps.app.goo.gl/PpBaHSR3ZjCNbpKDA',
              },
              {
                address: 'Dubai Harbour Marina (Near Harbour Bridge)',
                link: 'https://goo.gl/maps/NPhE8NUps51fSAAJ9',
              },
              {
                address: 'Dubai Harbour Marina (Near Bar Du Port)',
                link: 'https://goo.gl/maps/NPhE8NUps51fSAAJ9',
              },
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <FaMapMarkerAlt className="w-5 h-5 flex-shrink-0 text-text-primary-white mt-1" />
                <a href={item.link} target="_blank" className="hover:text-white text-left">
                  {item.address}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
  ];

  return (
    <>
      <footer className="text-sm bg-primary-black pb-10 pt-10 md:pt-24 lg:pt-24 xl:pt-36 relative">
        {/* SVG Divider */}
        <div className="divider-top -top-2 w-full z-10">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M987.16,44.39c-78.99-8.42-163.38-20.36-243.32-27.16-82.26-7.01-168.06-6.6-250.45.16-57.84,4.74-114,12.56-172,16.92C213.61,42.32,102.47,38.25,0,22.55v37.45h1200v-21.1c-67.81,9.35-142.79,12.95-212.84,5.48Z" className="fill-primary-blue-2"></path>
          </svg>
        </div>
        <div className="container py-4 mx-auto">
          {/** DESKTOP / LARGER SCREENS (Grid) **/}
          <div className="hidden md:grid gap-8 lg:[grid-template-columns:repeat(4,1fr)]">
            {footerSections.map((section, index) => (
              <div
                key={index}
                className={`
              ${index >= 4 ? 'col-span-2' : ''}
            `}
              >
                <div className="text-white font-semibold mb-4">{section.title}</div>
                {section.content}
              </div>
            ))}
          </div>

          {/** MOBILE SCREENS (Accordion) **/}
          <div className="block md:hidden">
            {footerSections.map((section, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="pb-2 mb-2">
                  {/* Accordion Header (centered title + arrow) */}
                  <button onClick={() => handleToggle(index)} className="relative w-full py-3 text-white">
                    {/* Centered text */}
                    <span className="block text-center text-base font-semibold">
                      {section.title}
                      <span className="absolute ml-3 top-1/2 -translate-y-1/2 text-xl">
                        <svg className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </span>
                  </button>

                  {/* Accordion Content (centered on mobile) */}
                  <div className={`transition-all duration-300 overflow-hidden text-center ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>{section.content}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="container mx-auto px-4">
          <a
            href={pathname.includes('shared-yacht-tours-dubai') ? 'https://fareharbor.com/embeds/book/centauruscharter/?full-items=yes&flow=1038617' : 'https://fareharbor.com/embeds/book/centauruscharter/?full-items=yes'}
            className="flex items-center justify-center gap-2 blue-solid-button fixed fixed-btn bottom-4 hover:no-underline z-40 w-[calc(100%-2rem)] md:w-auto mx-auto left-0 right-0 text-center md:left-auto md:right-4"
          >
            <IoBoat size={20} />
            BOOK YOUR YACHT
          </a>
          {/* <a
      href='yacht-rentals'
      className="flex items-center justify-center gap-2 blue-solid-button fixed fixed-btn bottom-4 hover:no-underline z-40 w-[calc(100%-2rem)] md:w-auto mx-auto left-0 right-0 text-center md:left-auto md:right-4"
    ><IoBoat size={20}/>
      BOOK YOUR YACHT
    </a> */}
        </div>
      </footer>
    </>
  );
}
