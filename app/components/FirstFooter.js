"use client";
import React, { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/app/i18n/routing";
import { useData } from "@/app/context/DataContext";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
export default function FirstFooter() {
  const [openIndex, setOpenIndex] = useState(null);

  const locale = useLocale();
  const { data, loading } = useData();
  const t = useTranslations();

  // Scroll to top function
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 300);
    }
  };

  // Toggle a particular section by index
  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  // Define each footer section and its content
  const footerSections = [
    {
      title: t("footer.centaurus-charter"),
      content: (
        <ul>
          <li className="mb-2">
            <Link
              href="/"
              onClick={scrollToTop}
              className="text-text-primary-white capitalize"
            >
              {t("navbar.home")}
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href="/aboutus"
              onClick={scrollToTop}
              className="text-text-primary-white capitalize"
            >
              {t("navbar.about")}
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href="/yacht-rentals"
              onClick={scrollToTop}
              className="text-text-primary-white capitalize"
            >
              {t("navbar.yacht-rentals")}
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href="/watersports"
              onClick={scrollToTop}
              className="text-text-primary-white capitalize"
            >
              {t("navbar.water-sports")}
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href="/offers"
              onClick={scrollToTop}
              className="text-text-primary-white capitalize"
            >
              {t("navbar.offers")}
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href="/events"
              onClick={scrollToTop}
              className="text-text-primary-white capitalize"
            >
              {t("navbar.events")}
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href="/faq"
              onClick={scrollToTop}
              className="text-text-primary-white capitalize"
            >
              {t("navbar.faq")}
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href="/contact"
              onClick={scrollToTop}
              className="text-text-primary-white capitalize"
            >
              {t("navbar.contact-us")}
            </Link>
          </li>
          <li className="mb-2">
            <a
              className="text-text-primary-white capitalize"
              href="https://www.centauruscharter.com/public/pdf/Centaurus-Charter-Profile-2023.pdf"
              onClick={scrollToTop}
            >
              {t("navbar.company-profile")}
            </a>
          </li>
        </ul>
      ),
    },
    {
      title: "Our Luxury Yachts",
      content: (
        <ul>
          {!loading &&
            data?.products?.map((product) => (
              <li key={product.id} className="mb-2 text-text-primary-white">
                <Link
                  href={`/yacht-rentals/${product.slug}`}
                  onClick={scrollToTop}
                >
                  {product.translations?.[locale]?.name_of_yacht}
                </Link>
              </li>
            ))}
        </ul>
      ),
    },
    {
      title: t("navbar.experiences"),
      content: (
        <ul>
          {!loading &&
            data?.experiences?.map((experience) => (
              <li key={experience.id} className="mb-2 text-text-primary-white">
                <Link
                  href={`/yacht-trips/${experience.slug}`}
                  onClick={scrollToTop}
                >
                  {experience.translations?.[locale]?.title}
                </Link>
              </li>
            ))}
        </ul>
      ),
    },
    {
      title: t("footer.reach-out-to-us"),
      content: (
        <ul className="text-text-primary-white space-y-3">
          {[
            {
              address: "Marina Walk (Near Spinneys)",
              location: "Dubai, United Arab Emirates",
            },
            {
              address: "Dubai Harbour Marina",
              location: "Dubai, United Arab Emirates",
            },
            {
              address: "Berth No AB05 - near Harbour Bridge - Dubai Harbour",
              location: "Dubai, United Arab Emirates",
            },
            {
              address:
                "Dubai Harbour Marina, Berth No A-G36 Near Dockmaster 1 Building",
              location: "Dubai, United Arab Emirates",
            },
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3 items-center">
              <FaMapMarkerAlt className="w-5 h-5 flex-shrink-0 text-text-primary-white" />
              <a
                href="https://www.google.com/maps/place/CENTAURUS+CHARTER+-+Yachts+%26+Boats+Rental+Dubai+Harbour"
                className="hover:text-white"
              >
                {item.address}
                <br />
                {item.location}
              </a>
            </li>
          ))}
          <ul className="text-text-primary-white space-y-2">
            <li className="flex items-center space-x-2">
              <FaPhoneAlt className="w-5 h-5" />
              <a href="tel:+97143521833" className="hover:text-white">
                +971 4 352 1833
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <FaWhatsapp className="w-5 h-5" />
              <a href="tel:+971524901269" className="hover:text-white">
                +971 52 490 1269
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <MdEmail className="w-5 h-5" />
              <a
                href="mailto:info@centauruscharter.com"
                className="hover:text-white"
              >
                info@centauruscharter.com
              </a>
            </li>
          </ul>
        </ul>
      ),
    },
    {
      title: "For Enquiries",
      content: (
        <ul className="text-text-primary-white">
          <li className="flex flex-col md:items-start items-center text-center md:text-left">
            <p className="font-semibold py-3">English / Russian</p>
            <a
              className="mb-2 inline-block"
              href="tel:+971505484685"
              onClick={scrollToTop}
            >
              +971 50 548 4685
            </a>
            <a
              className="mb-2 inline-block"
              href="tel:+971502484678"
              onClick={scrollToTop}
            >
              +971 50 248 4678
            </a>
            <a
              className="mb-2 inline-block"
              href="tel:+971502014225"
              onClick={scrollToTop}
            >
              +971 50 201 4225
            </a>
          </li>
          <li className="flex flex-col md:items-start items-center text-center md:text-left">
            <p className="font-semibold py-3">English / Spanish / Portuguese</p>
            <a
              className="mb-2 inline-block"
              href="tel:+971567277387"
              onClick={scrollToTop}
            >
              +971 56 727 7387
            </a>
          </li>
          {/* <li className="flex flex-col md:items-start items-center text-center md:text-left">
            <p className="font-semibold py-3">English / Chinese</p>
            <a className="mb-2 inline-block" href="tel:+971506484625" onClick={scrollToTop}>
              +971 50 648 4625
            </a>
          </li> */}
          <li className="flex flex-col md:items-start items-center text-center md:text-left">
            <p className="font-semibold py-3">English / Arabic</p>
            <a
              className="mb-2 inline-block"
              href="tel:+971565017078"
              onClick={scrollToTop}
            >
              +971 56 501 7078
            </a>
            <a
              className="mb-2 inline-block"
              href="tel:++971501452203"
              onClick={scrollToTop}
            >
              +971 50 145 2203
            </a>
          </li>
          <li className="flex flex-col md:items-start items-center text-center md:text-left">
            <p className="font-semibold py-3">English / Filipino</p>
            <a
              className="mb-2 inline-block"
              href="tel:+971565017057"
              onClick={scrollToTop}
            >
              +971 56 501 7057
            </a>
          </li>
          {/* <li className="flex flex-col md:items-start items-center text-center md:text-left">
            <p className="font-semibold py-3">English / Hindi</p>
            <a className="mb-2 inline-block" href="tel:+971501452203" onClick={scrollToTop}>
              +971 50 145 2203
            </a>
          </li> */}
        </ul>
      ),
    },
  ];

  return (
    <footer className="text-sm bg-primary-black py-10">
      <div className="p-4 container mx-auto">
        {/** DESKTOP / LARGER SCREENS (Grid) **/}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <div className="text-lg text-white font-semibold mb-4">
                {section.title}
              </div>
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
                <button
                  onClick={() => handleToggle(index)}
                  className="relative w-full py-3 text-white"
                >
                  {/* Centered text */}
                  <span className="block text-center text-base font-semibold">
                    {section.title}
                    <span className="absolute ml-3 top-1/2 -translate-y-1/2 text-xl">
                      <svg
                        className={`w-5 h-5 transform transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </span>
                </button>

                {/* Accordion Content (centered on mobile) */}
                <div
                  className={`transition-all duration-300 overflow-hidden text-center ${
                    isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {section.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container mx-auto px-4">
        <a
          href="https://fareharbor.com/embeds/book/centauruscharter/?full-items=yes"
          className="yellow-solid-button fixed fixed-btn bottom-4 hover:no-underline z-10 w-[calc(100%-2rem)] md:w-auto mx-auto left-0 right-0 text-center md:left-auto md:right-4"
        >
          BOOK YOUR YACHT
        </a>
      </div>
    </footer>
  );
}
