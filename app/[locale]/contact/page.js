import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { IoCallSharp } from 'react-icons/io5';
import { FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useTranslations } from 'next-intl';
import ContactForm from './ContactForm';

// Force static generation with ISR (24 hours revalidation)
export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

// Pre-generate all locale versions at build time
export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }, { locale: 'ru' }, { locale: 'zh' }];
}

export default function Page() {
  const t = useTranslations();

  return (
    <>
      <div className="bg-white w-full h-full nav-space">
        <div>
          <img alt="contact header banner" src="/Contactheader.webp" className="w-full" />
        </div>
        <div className="flex flex-col items-center justify-center py-10 ">
          <h1 className="text-primary-blue text-center font-bold text-xl sm:text:2xl md:text-3xl lg:text-4xl pb-4">CONTACT US</h1>
          <p className="container text-primary-grey text-center text-base px-3 lg:px-12 xl:px-56">We at Centaurus Charter are well experienced to meet the expectations of your next yachting adventure in Dubai. Please fill contact you shortly.</p>
        </div>

        <div className="container mx-auto flex flex-col md:flex-row-reverse items-center md:justify-end 2xl:justify-center md:gap-4 lg:gap-20 py-10">
          <div className="flex justify-center md:justify-start items-center md:items-start bg-white pb-12 md:pb-0">
            <ContactForm />
          </div>
          <div className="flex flex-col items-start md:items-center justify-center space-y-7 md:-mt-40">
            <div className="flex flex-row items-start justify-start">
              <div className="p-3 rounded-full bg-primary-blue-2">
                <MdLocationOn className="text-2xl text-primary-yellow" />{' '}
              </div>
              <a href="https://maps.app.goo.gl/mFvSe2XsrVUDRdfK6" target="_blank" className="text-sm w-[16rem] xs:w-[19rem] pl-5 font-medium">
                {t('footer.office-location')}
              </a>
            </div>
            <div className="flex flex-row items-center justify-start">
              <div className="p-3 rounded-full bg-primary-blue-2">
                <IoCallSharp className="text-2xl text-primary-yellow" />
              </div>
              <a href="tel:+97143521833" className="text-sm w-[14rem] xs:w-[19rem] pl-5 text-primary-blue-2 font-medium">
                <span className="text-black">Office:</span> +971 4 352 1833
              </a>
            </div>
            <div className="flex flex-row items-center justify-start">
              <div className="p-3 rounded-full bg-primary-blue-2">
                <FaWhatsapp className="text-2xl text-primary-yellow" />{' '}
              </div>
              <a href={t('header.whatsapp_url')} target="_blank" className="text-sm w-[16rem] xs:w-[19rem] pl-5 text-primary-blue-2 font-medium" rel="noopener noreferrer">
                <span className="text-black">WhatsApp:</span> +971 52 490 1269
              </a>
            </div>
            <div className="flex flex-row items-center justify-start">
              <div className="p-3 rounded-full bg-primary-blue-2">
                <MdEmail className="text-2xl text-primary-yellow" />
              </div>
              <a href="mailto:info@centauruscharter.com" className="text-sm w-[16rem] xs:w-[19rem] pl-5 text-primary-blue-2 font-medium">
                <span className="text-black">Email:</span> info@centauruscharter.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
