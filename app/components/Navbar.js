"use client";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState, useRef } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { useData } from "../context/DataContext";
import { useRouter, usePathname, Link } from "../i18n/routing";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [isPrivateYachtsOpen, setPrivateYachtsOpen] = useState(false);
  const [isExperiencesOpen, setExperiencesOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null);
  const { data, loading, error } = useData();

  const settingsItem = data?.settings?.[0];
  const { header_email, header_phone_number_url, header_whatsapp_url } =
    settingsItem || {};

  const toggleSubmenu = (index) => {
    setSubmenuOpen(submenuOpen === index ? null : index);
  };

  const handleLanguageChange = (lang) => {
    router.replace(pathname, { locale: lang });
    setLanguageDropdownOpen(false);
  };
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Refs for dropdown containers

  const languages = [
    { code: "en", name: "English", flag: "/uk.svg" },
    { code: "ar", name: "Arabic", flag: "/uae.svg" },
    { code: "ru", name: "Russian", flag: "/ru.svg" },
    { code: "zh", name: "Chinese", flag: "/zh.svg" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === locale);
  const languageDropdownRef = useRef(null);
  const privateYachtsRef = useRef(null);
  const experiencesRef = useRef(null);
  // Handle clicks outside dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target) &&
        privateYachtsRef.current &&
        !privateYachtsRef.current.contains(event.target) &&
        experiencesRef.current &&
        !experiencesRef.current.contains(event.target)
      ) {
        setLanguageDropdownOpen(false);
        setPrivateYachtsOpen(false);
        setExperiencesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <div className="fixed h-[4.5rem] top-0 left-0 w-full z-50 bg-white shadow-md lg:block hidden gradient-custom">
        <div className="container lg:max-w-none px-0 mx-auto">
          <nav className="flex h-[4.4rem] items-stretch justify-around">
            {/* Logo */}
            <div className="flex items-center justify-center h-full">
              <Link href="/">
                <Image
                  src="/images/centaurus-charter-logo.webp"
                  alt="Centaurus charter Logo"
                  width={150}
                  height={0}
                  priority={true}
                />
              </Link>
            </div>

            {/* Main Menu Items */}
            <div className="flex h-full items-stretch text-xs xxl:text-base">
              <ul className="flex items-stretch h-full space-x-6 lg:space-x-8 text-xs xxl:text-base font-semibold">
                {/* Private Yachts Dropdown */}
                <li
                  className="relative group h-full"
                  ref={privateYachtsRef}
                  onMouseEnter={() => setPrivateYachtsOpen(true)}
                  onMouseLeave={() => setPrivateYachtsOpen(false)}
                >
                  <span
                    className={`h-full flex items-center justify-between cursor-pointer gap-1 py-2 transition-all duration-200 font-primary ${
                      pathname === "/yacht-rentals" ||
                      pathname.startsWith("/yacht-rentals/")
                        ? "text-primary-blue border-primary-yellow font-semibold"
                        : "text-primary-blue border-transparent"
                    }`}
                  >
                    <Link href="/yacht-rentals" className="tracking-[1px] uppercase">
                      {t("navbar.private-yachts")}
                    </Link>
                    <svg
                      className={`w-4 h-4 transform transition-transform duration-300 ${
                        isPrivateYachtsOpen ? "rotate-180" : ""
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
                  {isPrivateYachtsOpen && (
                    <ul className="absolute top-full left-0 w-60 bg-white text-black shadow-lg rounded-lg overflow-hidden border border-gray-200 z-50">
                      {!loading &&
                        data?.products?.map((product) => (
                          <li
                            key={product.id}
                            onClick={() => setPrivateYachtsOpen(false)}
                            className="cursor-pointer text-xs font-medium text-primary-grey hover:text-white hover:bg-primary-blue transition-all duration-300 font-primary"
                          >
                            <Link
                              href={`/yacht-rentals/${product.slug}`}
                              className="py-2 px-4 block"
                            >
                              {product.translations?.[locale]?.name_of_yacht}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  )}
                </li>

                {/* Buy Yacht */}
                <li>
                  <Link
                    href="/yachts-for-sale-dubai"
                    className={`h-full flex items-center tracking-[1px] uppercase underline decoration-2 underline-offset-8 transition-all duration-200 font-primary ${
                      pathname === "/yachts-for-sale-dubai" ||
                      pathname.startsWith("/yachts-for-sale-dubai/")
                        ? "text-primary-blue decoration-primary-yellow font-semibold"
                        : "text-primary-blue decoration-transparent hover:decoration-primary-yellow"
                    }`}
                  >
                    {t("navbar.buy-a-yacht")}
                  </Link>
                </li>

                {/* Shared Tours */}
                <li className="hidden">
                  <Link
                    href="/shared-yacht-tours-dubai"
                    className={`h-full flex items-center tracking-[1px] uppercase underline decoration-2 underline-offset-8 transition-all duration-200 font-primary ${
                      pathname === "/shared-yacht-tours-dubai" ||
                      pathname.startsWith("/shared-yacht-tours-dubai/")
                        ? "text-primary-blue decoration-primary-yellow font-semibold"
                        : "text-primary-blue decoration-transparent hover:decoration-primary-yellow"
                    }`}
                  >
                    {t("navbar.shared-tours")}
                  </Link>
                </li>

                {/* Experiences Dropdown */}
                <li
                  className="relative group h-full"
                  ref={experiencesRef}
                  onMouseEnter={() => setExperiencesOpen(true)}
                  onMouseLeave={() => setExperiencesOpen(false)}
                >
                  <span
                    className={`h-full flex items-center justify-between cursor-pointer gap-1 py-2 transition-all duration-200 font-primary ${
                      pathname === "/yacht-trips" ||
                      pathname.startsWith("/yacht-trips/")
                        ? "text-primary-blue underline-primary-yellow font-semibold"
                        : "text-primary-blue underline-transparent"
                    }`}
                  >
                    <Link href="/yacht-trips" className="tracking-[1px] uppercase">
                      {t("navbar.experiences")}
                    </Link>
                    <svg
                      className={`w-4 h-4 transform transition-transform duration-300 ${
                        isExperiencesOpen ? "rotate-180" : ""
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
                  {isExperiencesOpen && (
                    <ul className="absolute top-full left-0 w-60 bg-white text-black transition-all duration-150 shadow-lg rounded-lg overflow-hidden border border-gray-200 z-50">
                      <li
                        onClick={() => setExperiencesOpen(false)}
                        className="cursor-pointer capitalize text-xs font-medium text-primary-grey hover:text-white hover:bg-primary-blue transition-all duration-300 font-primary"
                      >
                        <Link href="/watersports" className="py-2 px-4 block">
                          {t("navbar.water-sports")}
                        </Link>
                      </li>
                      {!loading &&
                        data?.experiences?.map((experience) => (
                          <li
                            key={experience.id}
                            onClick={() => setExperiencesOpen(false)}
                            className="cursor-pointer text-xs font-medium text-primary-grey hover:text-white hover:bg-primary-blue transition-all duration-300 font-primary"
                          >
                            <Link
                              href={`/yacht-trips/${experience.slug}`}
                              className="py-2 px-4 block capitalize"
                            >
                              {experience.translations?.[locale]?.title}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  )}
                </li>

                {/* Offers */}
                {/* <li>
                  <Link
                    href="/offers"
                    className={`h-full flex items-center tracking-[1px] uppercase underline decoration-2 underline-offset-8 transition-all duration-200 font-primary ${
                      pathname === "/offers" || pathname.startsWith("/offers/")
                        ? "text-primary-blue decoration-primary-yellow font-semibold"
                        : "text-primary-blue decoration-transparent hover:decoration-primary-yellow"
                    }`}
                  >
                    {t("navbar.offers")}
                  </Link>
                </li> */}

                {/* SUMMER Offers */}
                <li>
                  <Link
                    href="/resident-offer"
                    className={`h-full flex items-center tracking-[1px] uppercase underline decoration-2 underline-offset-8 transition-all duration-200 font-primary ${
                      pathname === "/resident-offer" || pathname.startsWith("/resident-offer/")
                        ? "text-primary-blue decoration-primary-yellow font-semibold"
                        : "text-primary-blue decoration-transparent hover:decoration-primary-yellow"
                    }`}
                  >
                    {t('navbar.summer-offers')}
                  </Link>
                </li>
                {/* Formula 1 */}
                <li>
                  <Link
                    href="/abu-dhabi-race-yacht-charter"
                    className={`h-full flex items-center tracking-[1px] uppercase underline decoration-2 underline-offset-8 transition-all duration-200 font-primary ${
                      pathname === "/abu-dhabi-race-yacht-charter" || pathname.startsWith("/abu-dhabi")
                        ? "text-primary-blue decoration-primary-yellow font-semibold"
                        : "text-primary-blue decoration-transparent hover:decoration-primary-yellow"
                    }`}
                  >
                    {t("navbar.formula-1")}
                  </Link>
                </li>
                {/* Events */}
                <li>
                  <Link
                    href="/events"
                    className={`h-full flex items-center tracking-[1px] uppercase underline decoration-2 underline-offset-8 transition-all duration-200 font-primary ${
                      pathname === "/events" || pathname.startsWith("/events/")
                        ? "text-primary-blue decoration-primary-yellow font-semibold"
                        : "text-primary-blue decoration-transparent hover:decoration-primary-yellow"
                    }`}
                  >
                    {t("navbar.events")}
                  </Link>
                </li>

                {/* Contact */}
                <li>
                  <Link
                    href="/contact"
                    className={`h-full flex items-center tracking-[1px] uppercase underline decoration-2 underline-offset-8 transition-all duration-200 font-primary ${
                      pathname === "/contact" ||
                      pathname.startsWith("/contact/")
                        ? "text-primary-blue decoration-primary-yellow font-semibold"
                        : "text-primary-blue decoration-transparent hover:decoration-primary-yellow"
                    }`}
                  >
                    {t("navbar.contact-us")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact & Language Section */}
            <div className="flex items-center gap-4">
              {/* Contact Icons */}
              <Link href={header_email || "#"} aria-label="Email">
                <MdEmail className="w-5 h-5 text-primary-blue-2 hover:text-primary-blue hover:scale-110 transition-transform duration-200 text-2xl" />
              </Link>
              <Link href={header_phone_number_url || "#"} aria-label="Phone">
                <FaPhoneAlt className="w-4 h-4 text-primary-blue-2 hover:text-primary-blue hover:scale-110 transition-transform duration-200 text-2xl" />
              </Link>
              <Link href={t("header.navbar_whatsapp_url")} aria-label="WhatsApp">
                <IoLogoWhatsapp className="w-5 h-5 text-primary-blue-2 hover:text-primary-blue hover:scale-110 transition-transform duration-200 text-2xl" />
              </Link>

              {/* Language Dropdown */}
              <div
                className="relative group"
                ref={languageDropdownRef}
                onMouseEnter={() => setLanguageDropdownOpen(true)}
                onMouseLeave={() => setLanguageDropdownOpen(false)}
              >
                <div className="p-2 cursor-pointer flex items-center gap-1">
                  <img
                    src={currentLanguage?.flag}
                    alt={locale}
                    className="w-5 h-5"
                  />
                  <span className="text-xs font-medium">
                    {locale.toUpperCase()}
                  </span>
                </div>
                {isLanguageDropdownOpen && (
                  <ul className="absolute right-0 w-36 bg-white text-primary-blue border rounded-md shadow-lg z-20 text-xs">
                    {languages.map((lang) => (
                      <li
                        key={lang.code}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLanguageChange(lang.code);
                        }}
                        className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100"
                      >
                        <img
                          src={lang.flag}
                          alt={lang.name}
                          className="w-4 h-4"
                        />
                        {lang.name.toUpperCase()} - {lang.code.toUpperCase()}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Navbar */}
      <MobileNavbar
        currentLanguage={currentLanguage}
        isLanguageDropdownOpen={isLanguageDropdownOpen}
        setLanguageDropdownOpen={setLanguageDropdownOpen}
        mobileDropdownOpen={mobileDropdownOpen}
        setMobileDropdownOpen={setMobileDropdownOpen}
        languages={languages}
        handleLanguageChange={handleLanguageChange}
        locale={locale}
        toggleSubmenu={toggleSubmenu}
        header_email={header_email}
        header_phone_number_url={header_phone_number_url}
        header_whatsapp_url={header_whatsapp_url}
      />
    </>
  );
}
