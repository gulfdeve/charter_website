"use client";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState, useRef } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdMail } from "react-icons/md";
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
  const [istheDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
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
    setDropdownOpen(false);
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

  const languages = [
    { code: "en", name: "English", flag: "/uk.svg" },
    { code: "ar", name: "Arabic", flag: "/uae.svg" },
    { code: "ru", name: "Russian", flag: "/ru.svg" },
    { code: "zh", name: "Chinese", flag: "/zh.svg" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === locale);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Fixed Single Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md lg:block hidden gradient-custom">
        <div className="container mx-auto">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div className="py-4">
              <Link href="/">
                <Image
                  src="/Cenaturus Logo top.png"
                  alt="Centaurus charter Logo"
                  width={150}
                  height={0}
                  priority={true}
                />
              </Link>
            </div>

            {/* Main Menu Items */}
            <div className="flex items-center text-xs">
              <ul className="flex space-x-6 text-xs font-semibold">
                {/* PRIVATE YACHTS with Dropdown */}
                <li className="relative group">
                  <span
                    className={`flex items-center justify-between cursor-pointer gap-1 py-6 ${
                      pathname === "/yacht-rentals" || pathname.startsWith("/yacht-rentals/")
                        ? "text-primary-blue"
                        : "text-primary-blue hover:text-primary-blue"
                    }`}
                  >
                    <Link
                      className="tracking-wider"
                      href={`/yacht-rentals`}
                    >
                      {t("navbar.private-yachts")}
                    </Link>
                    <svg
                      className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300"
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
                  <ul className="absolute top-full left-0 w-60 bg-white text-black shadow-lg rounded-lg overflow-hidden border border-gray-200 hidden group-hover:block z-50">
                    {!loading &&
                      data?.products?.map((product) => (
                        <li
                          key={product.id}
                          className="cursor-pointer text-xs font-medium text-primary-grey hover:text-white hover:bg-primary-blue transition-all duration-300"
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
                </li>

                {/* BUY A YACHT */}
                <li className={pathname === "/yachts-for-sale-dubai" ? "text-primary-blue" : "text-primary-blue hover:text-primary-blue"}>
                  <Link
                    className="py-6 inline-block tracking-wider"
                    href={`/yachts-for-sale-dubai`}
                  >
                    {t("navbar.buy-a-yacht")}
                  </Link>
                </li>

                {/* SHARED TOURS */}
                <li className={pathname === "/shared-yacht-tours-dubai" ? "text-primary-blue" : "text-primary-blue hover:text-primary-blue"}>
                  <Link
                    className="py-6 inline-block tracking-wider"
                    href={`/shared-yacht-tours-dubai`}
                  >
                    {t("navbar.shared-tours")}
                  </Link>
                </li>

                {/* EXPERIENCES with Dropdown */}
                <li className="relative group">
                  <span
                    className={`flex items-center justify-between cursor-pointer gap-1 py-6 ${
                      pathname === "/yacht-trips" || pathname.startsWith("/yacht-trips/")
                        ? "text-primary-blue"
                        : "text-primary-blue hover:text-primary-blue"
                    }`}
                  >
                    <Link
                      className="tracking-wider"
                      href={`/yacht-trips`}
                    >
                      {t("navbar.experiences")}
                    </Link>
                    <svg
                      className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300"
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
                  <ul className="absolute top-full left-0 w-60 bg-white text-black shadow-lg rounded-lg overflow-hidden border border-gray-200 hidden group-hover:block z-50">
                    <li className="cursor-pointer uppercase text-xs font-medium text-primary-grey hover:text-white hover:bg-primary-blue transition-all duration-300">
                      <Link href="/watersports" className="py-2 px-4 block">
                        {t("navbar.water-sports")}
                      </Link>
                    </li>
                    {!loading &&
                      data?.experiences?.map((experience) => (
                        <li
                          key={experience.id}
                          className="cursor-pointer text-xs font-medium text-primary-grey hover:text-white hover:bg-primary-blue transition-all duration-300"
                        >
                          <Link
                            href={`/yacht-trips/${experience.slug}`}
                            className="py-2 px-4 block"
                          >
                            {experience.translations?.[locale]?.title}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </li>

                {/* OFFERS */}
                <li className={pathname === "/offers" || pathname.startsWith("/offers/") ? "text-primary-blue" : "text-primary-blue hover:text-primary-blue"}>
                  <Link
                    className="py-6 inline-block tracking-wider uppercase"
                    href={`/offers`}
                  >
                    {t("navbar.offers")}
                  </Link>
                </li>

                {/* EVENTS */}
                <li className={pathname === "/events" || pathname.startsWith("/events/") ? "text-primary-blue" : "text-primary-blue hover:text-primary-blue"}>
                  <Link
                    className="py-6 inline-block tracking-wider"
                    href={`/events`}
                  >
                    EVENTS
                  </Link>
                </li>

                {/* CONTACT US */}
                <li className={pathname === "/contact" ? "text-primary-blue" : "text-primary-blue hover:text-primary-blue"}>
                  <Link
                    className="py-6 inline-block tracking-wider uppercase"
                    href={`/contact`}
                  >
                    {t("navbar.contact-us")}
                  </Link>
                </li>

              </ul>
            </div>

            {/* Contact & Language Section */}
            <div className="flex items-center gap-4">
              {/* Contact Icons */}
              <Link aria-label="email icon" href={header_email || "#"}>
                <MdMail
                  size={24}
                  className="text-primary-blue hover:text-primary-blue hover:scale-110"
                />
              </Link>
			  <Link
                aria-label="phone icon"
                href={header_phone_number_url || "#"}
              >
                <FaPhoneAlt
                  size={20}
                  className="text-primary-blue hover:text-primary-blue mt-1  hover:scale-110"
                />
              </Link>
              <Link aria-label="whatsapp icon" href={t("header.whatsapp_url")}>
                <IoLogoWhatsapp
                  size={24}
                  className="text-primary-blue hover:text-primary-blue hover:scale-110"
                />
              </Link>

              {/* Language Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <div className="p-2 cursor-pointer flex items-center gap-1">
                  <img
                    src={currentLanguage?.flag}
                    alt={locale}
                    className="w-5 h-5"
                  />
                  <span className="text-xs font-medium">{locale.toUpperCase()}</span>
                </div>
                {isDropdownOpen && (
                  <ul className="absolute text-xs right-0 w-36 bg-white text-primary-blue border rounded-md shadow-lg z-20">
                    {languages.map((lang) => (
                      <li
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100"
                      >
                        <img src={lang.flag} alt={lang.name} className="w-4 h-4" />
                        {lang.name.toUpperCase()} - 
						{lang.code.toUpperCase()}
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
        istheDropdownOpen={istheDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
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