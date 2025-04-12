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
import MobileNavbar from './MobileNavbar';

export default function Navbar() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [istheDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null); // Tracks open submenu
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

  // Initialize language from localStorage on page load

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
      {/* First Navbar */}
      <div className="lg:block hidden">
        <nav className="py-4 container mx-auto bg-white text-black flex items-center justify-between xl:gap-64 2xl:gap-64 md:gap-24">
          <div className="text-xl font-bold">
            <Link href={"/"}>
              <Image
                src="/CentaurusLogo.png"
                alt="Centaurus charter Logo"
                width={200}
                priority={true}
                height={100}
              />
            </Link>
          </div>
          <div className="flex items-center justify-end">
            <Link
              aria-label="contact us icon"
              href={"/contact"}
              className="flex flex-row items-center justify-center yellow-solid-button"
            >
              {t("navbar.contact-us")}
            </Link>
            <div className="flex flex-row px-8 gap-8">
              {/* Email Icon */}
              <Link aria-label="email icon" href={header_email || "#"}>
                <MdMail
                  size={30}
                  className="text-primary-yellow hover:text-primary-blue hover:scale-110"
                />
              </Link>
              <Link
                aria-label="phone icon"
                href={header_phone_number_url || "#"}
              >
                <FaPhoneAlt
                  size={23}
                  className="text-primary-yellow hover:text-primary-blue mt-1  hover:scale-110"
                />
              </Link>
              {/* WhatsApp Icon */}
              <Link
                aria-label="whatsapp icon"
                href={header_whatsapp_url || "#"}
              >
                <IoLogoWhatsapp
                  size={30}
                  className="text-primary-yellow hover:text-primary-blue  hover:scale-110"
                />
              </Link>
            </div>
            {/* Language Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              {/* Trigger */}
              <div className="p-3 rounded text-black  cursor-pointer scale-105 flex items-center gap-2">
                <img
                  src={
                    locale === "en"
                      ? "/uk.svg"
                      : locale === "ar"
                      ? "/uae.svg"
                      : locale === "ru"
                      ? "/ru.svg"
                      : locale === "zh"
                      ? "/zh.svg"
                      : null
                  }
                  alt={locale}
                  className="w-4 h-4"
                />
                {locale.toUpperCase()}
              </div>
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <ul className="absolute right-0 w-44 bg-white border  rounded-md shadow-lg z-20">
                  <li
                    onClick={() => handleLanguageChange("en")}
                    className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-200"
                  >
                    <img src="/uk.svg" alt="English" className="w-4 h-4" />
                    ENGLISH - EN
                  </li>
                  <li
                    onClick={() => handleLanguageChange("ar")}
                    className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-200"
                  >
                    <img src="/uae.svg" alt="Arabic" className="w-4 h-4" />
                    ARABIC - AR
                  </li>
                  <Link className="bg-gray-300" href={pathname} locale="ru">
                    <li className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-200">
                      <img src="/ru.svg" alt="Russian" className="w-4 h-4" />
                      RUSSIAN - RU
                    </li>
                  </Link>
                  <Link className="bg-gray-300" href={pathname} locale="zh">
                    <li className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-200">
                      <img src="/zh.svg" alt="Chinese" className="w-4 h-4" />
                      CHINESE - ZH
                    </li>
                  </Link>
                </ul>
              )}
            </div>
          </div>
        </nav>

        {/* Second Navbar (Sticky) */}
        <div
          className={`bg-primary-blue w-full ${
            isSticky ? "fixed top-0 z-50 transition-all " : ""
          } `}
        >
          <nav
            className={` w-full bg-primary-blue text-primary-yellow  font-bold ${
              isSticky ? " sticky top-0 z-50" : ""
            }`}
          >
            <div className="container mx-auto">
              <ul
                className={`flex flex-row items-center justify-between text-[11px] md:text-[12px] ${
                  isSticky
                    ? "2xl:text-[15px] xl:text-[11px] md:text-[11px]"
                    : " 2xl:text-[15px] xl:text-[12px] md:text-[11px] lg:text-[12px]"
                }`}
              >
                <li
                  className={`transition-opacity ${
                    isSticky
                      ? "w-44 md:w-28 xl:w-44 2xl:w-48 opacity-100"
                      : "w-0 opacity-0 absolute"
                  }`}
                >
                  <Link href={"/"}>
                    <Image
                      src="/CentaurusLogoWhite.png"
                      alt="centaurus charter logo"
                      width={200}
                      height={0}
					  priority={true}
                      style={{ height: "auto" }}
                    />
                  </Link>
                </li>

                {/* PRIVATE YACHTS with Dropdown */}

                <li className="relative group">
                  <span
                    className={`flex items-center justify-between cursor-pointer gap-1 ${
                      pathname === "/yacht-rentals" ||
                      pathname.startsWith("/yacht-rentals/")
                        ? "text-white"
                        : ""
                    }`}
                  >
                    <Link
                      className="py-6 inline-block tracking-wider hover:text-white"
                      href={`/yacht-rentals`}
                    >
                      {t("navbar.private-yachts")}
                    </Link>
                    <svg
                      className="xl:w-5 lg:w-5 h-5 lg:h-5 transform group-hover:rotate-180 transition-transform duration-300"
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
                  <ul className="absolute top-[85%] left-0 w-80 bg-white text-black shadow-lg rounded-lg overflow-hidden border border-gray-200 hidden group-hover:block z-50">
                    {!loading &&
                      data?.products?.map((product) => (
                        <li
                          key={product.id}
                          className="cursor-pointer text-base font-medium text-gray-600 hover:text-white hover:bg-primary-blue transition-all duration-300"
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

                <li
                  className={`uppercase ${
                    pathname === "/yachts-for-sale-dubai" ? "text-white" : ""
                  }`}
                >
                  {" "}
                  <Link
                    className="py-6 inline-block tracking-wider hover:text-white"
                    href={`/yachts-for-sale-dubai`}
                  >
                    {t("navbar.buy-a-yacht")}
                  </Link>
                </li>

                {/* SHARED TOURS */}

                <li
                  className={`uppercase ${
                    pathname === "/shared-yacht-tours-dubai" ? "text-white" : ""
                  }`}
                >
                  {" "}
                  <Link
                    className="py-6 inline-block tracking-wider hover:text-white"
                    href={`/shared-yacht-tours-dubai`}
                  >
                    {t("navbar.shared-tours")}
                  </Link>
                </li>

                {/* EXPERIENCES with Dropdown */}
                <li className="relative group">
                  <span
                    className={`flex items-center justify-between cursor-pointer gap-1 ${
                      pathname === "/yacht-trips" ||
                      pathname.startsWith("/yacht-trips/")
                        ? "text-white"
                        : ""
                    }`}
                  >
                    <Link
                      className="py-6 inline-block tracking-wider hover:text-white"
                      href={`/yacht-trips`}
                    >
                      {t("navbar.experiences")}
                    </Link>
                    <svg
                      className="w-5 h-5 lg:w-5 lg:h-5 transform group-hover:rotate-180 transition-transform duration-300"
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
                  <ul className="absolute top-[85%] left-0 w-80 bg-white text-black shadow-lg rounded-lg overflow-hidden border border-gray-200 hidden group-hover:block z-50">
                    {!loading &&
                      data?.experiences?.map((experience) => {
                        return (
                          <li
                            key={experience.id}
                            className="cursor-pointer text-base font-medium text-gray-600 hover:text-white hover:bg-primary-blue transition-all duration-300"
                          >
                            <Link
                              href={`/yacht-trips/${experience.slug}`}
                              key={experience.id}
                              className="py-2 px-4 block"
                            >
                              {" "}
                              {experience.translations?.[locale]?.title}
                            </Link>
                          </li>
                        );
                      })}
                  </ul>
                </li>

                <li
                  className={`uppercase ${
                    pathname === "/offers" || pathname.startsWith("/offers/")
                      ? "text-white"
                      : ""
                  }`}
                >
                  {" "}
                  <Link
                    className="py-6 inline-block tracking-wider hover:text-white"
                    href={`/offers`}
                  >
                    {t("navbar.offers")}{" "}
                  </Link>
                </li>

                <li
                  className={`uppercase ${
                    pathname === "/events" || pathname.startsWith("/events/")
                      ? "text-white"
                      : ""
                  }`}
                >
                  {" "}
                  <Link
                    className="py-6 inline-block tracking-wider hover:text-white"
                    href={`/events`}
                  >
                    Events
                  </Link>
                </li>

                <li
                  className={`uppercase ${
                    pathname === "/watersports" ||
                    pathname.startsWith("/watersports/")
                      ? "text-white"
                      : ""
                  }`}
                >
                  <Link
                    className="py-6 inline-block tracking-wider hover:text-white"
                    href={`/watersports`}
                  >
                    {t("navbar.water-sports")}
                  </Link>
                </li>

                {/* NEWYEAR */}

                {/* <li
                  className={`uppercase ${
                    pathname === "/newyear" ? "text-white" : ""
                  }`}
                >
                  <Link className="py-6 inline-block tracking-wider hover:text-white" href={`/newyear`}>{t("navbar.new-year")}</Link>
                </li> */}
              </ul>
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
