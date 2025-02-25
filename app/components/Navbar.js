"use client";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState, useRef } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdKeyboardArrowDown, MdMail } from "react-icons/md";
import { useData } from "../context/DataContext";
import { useRouter, usePathname, Link } from "../i18n/routing";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
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
        <nav className="p-4 container mx-auto bg-white text-black flex items-center justify-between xl:gap-64 2xl:gap-64 md:gap-24">
          <div className="text-xl font-bold">
            <Link href={"/"}>
              <Image 
                src="/CentaurusLogo.png"
                alt="Centaurus charter Logo"
                width={200}
                height={100}
              />
            </Link>
          </div>
          <div className="flex items-center justify-end">
            <Link aria-label="contact us icon" href={"/contact"} className="flex flex-row items-center justify-center yellow-solid-button">
              {t("navbar.contact-us")}
            </Link>
            <div className="flex flex-row px-8 gap-8">
              {/* Email Icon */}
              <Link aria-label="email icon" href="mailto:example@example.com">
                <MdMail
                  size={30}
                  className="text-[#e1ae48] hover:text-[#0d2343]"
                />
              </Link>
              <Link aria-label="phone icon" href="tel:1234567890">
                <FaPhoneAlt
                  size={23}
                  className="text-[#e1ae48] hover:text-[#0d2343] mt-1"
                />
              </Link>
              {/* WhatsApp Icon */}
              <Link aria-label="whatsapp icon" href="https://wa.me/1234567890">
                <IoLogoWhatsapp
                  size={30}
                  className="text-[#e1ae48] hover:text-[#0d2343]"
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
          className={`bg-[#0d2343] w-full ${
            isSticky ? "fixed top-0 z-50 transition-all " : ""
          } `}
        >
          <nav
            className={` w-full bg-[#0D2343] text-[#e1ae48]  font-bold ${
              isSticky
                ? " p-3  lg:p-2 xl:h-20 md:h-16 sticky top-0 z-50"
                : "h-14 2xl:h-16  2xl:p-1"
            }`}
          >
            <div className="flex flex-row items-center justify-center">
              <ul
                className={`flex flex-row items-center justify-center gap-6 xl:gap-[3rem] 2xl:gap-[3rem] text-[11px] md:text-[12px] ${
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
                      style={{ height: "auto" }}
                    />
                  </Link>
                </li>

                {/* PRIVATE YACHTS with Dropdown */}

                <li className="relative group">
                  <span
                    className={`flex items-center justify-between cursor-pointer p-5 gap-1 ${
                      pathname === "/yacht-rentals" || pathname.startsWith("/yacht-rentals/") ? "text-white" : ""
                    }`}
                  >
                    <Link href={`/yacht-rentals`}>
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
                  <ul className="absolute top-[85%] left-0 w-60 bg-white text-black shadow-lg hidden group-hover:block z-20">
                    {!loading &&
                      data?.products?.map((product) => (
                        <li
                          key={product.id}
                          className="cursor-pointer text-base font-normal text-gray-500 hover:font-bold hover:bg-primary-blue hover:text-primary-yellow"
                        >
                          {/* {product.title} */}
                          <Link
                            href={`/yacht-rentals/${product.slug}`}
                            className="py-2 px-4 block"
                            key={product.id}
                          >
                            {" "}
                            {product.translations?.[locale]?.name_of_yacht}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </li>

                {/* BUY A YACHT */}

                <li
                  className={`pr-5 uppercase ${
                    pathname === "/yachts-for-sale-dubai" ? "text-white" : ""
                  }`}
                >
                  {" "}
                  <Link href={`/yachts-for-sale-dubai`}>
                    {t("navbar.buy-a-yacht")}
                  </Link>
                </li>

                {/* SHARED TOURS */}

                <li
                  className={`pr-5 uppercase ${
                    pathname === "/shared-yacht-tours-dubai" ? "text-white" : ""
                  }`}
                >
                  {" "}
                  <Link href={`/shared-yacht-tours-dubai`}>
                    {t("navbar.shared-tours")}
                  </Link>
                </li>

                {/* EXPERIENCES with Dropdown */}
                <li className="relative group">
                  <span
                    className={`flex items-center justify-between cursor-pointer p-5 gap-1 ${
                      pathname === "/yacht-trips" || pathname.startsWith("/yacht-trips/") ? "text-white" : ""
                    }`}
                  >
                    <Link href={`/yacht-trips`}>{t("navbar.experiences")}</Link>
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
                  <ul className="absolute top-[85%] left-0 w-60 bg-white text-black shadow-lg hidden group-hover:block z-20">
                    {!loading &&
                      data?.experiences?.map((experience) => {
                        return (
                          <li
                            key={experience.id}
                            className="cursor-pointer text-base font-normal text-gray-500 hover:font-bold hover:bg-primary-blue hover:text-primary-yellow"
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
                  className={`pr-5 uppercase ${
                    pathname === "/offers" || pathname.startsWith("/offers/") ? "text-white" : ""
                  }`}
                >
                  {" "}
                  <Link href={`/offers`}>{t("navbar.offers")} </Link>
                </li>

                <li
                  className={`pr-5 uppercase ${
                    pathname === "/events" || pathname.startsWith("/events/") ? "text-white" : ""
                  }`}
                >
                  {" "}
                  <Link href={`/events`}>Events</Link>
                </li>

                <li
                  className={`pr-5 uppercase ${
                    pathname === "/watersports" || pathname.startsWith("/watersports/") ? "text-white" : ""
                  }`}
                >
                  <Link href={`/watersports`}>{t("navbar.water-sports")}</Link>
                </li>

                {/* NEWYEAR */}

                <li
                  className={`pr-5 uppercase ${
                    pathname === "/newyear" ? "text-white" : ""
                  }`}
                >
                  <Link href={`/newyear`}>{t("navbar.new-year")}</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      {/* Mobile Navbar */}
      <div className="lg:hidden block">
        <nav className="bg-[#0d2343] w-full h-14 p-3">
          <div className="flex items-center justify-between">
            {/* Logo */}

            <div className="w-32 pr-3">
              <Link href={"/"}>
                <Image 
                  src="/CentaurusLogoWhite.png" 
                  alt="centaurus charter logo" 
                  width={200}
                  height={0}
                  style={{ height: "auto" }}
                />
              </Link>
            </div>

            {/* Icons and Dropdown Trigger */}
            <div className="flex items-center gap-2">
              {/* WhatsApp Icon */}
              <Link href="https://wa.me/1234567890">
                <img alt="whatsapp logo" src="/whatsapp.svg" className="text-blue-500 w-6 h-6" />
              </Link>

              {/* Phone Icon */}
              <Link aria-label="phone icon" href="tel:1234567890">
                <FaPhoneAlt className="text-white w-5 h-5" />
              </Link>

              {/* Language Selector */}
              <div className="relative" ref={dropdownRef}>
                {/* Trigger Button */}
                <button
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                  className="flex items-center gap-2 p-1 rounded text-white text-sm "
                >
                  <img
                    src={currentLanguage?.flag}
                    alt={currentLanguage?.name}
                    className="w-6 h-6"
                  />
                </button>

                {/* Dropdown Menu */}
                {istheDropdownOpen && (
                  <ul className="absolute -right-14 top-11 w-48 text-center bg-white border  font-bold text-primary-blue  shadow-lg z-20">
                    {languages.map((lang) => (
                      <li
                        key={lang.code}
                        onClick={() => {
                          handleLanguageChange(lang.code);
                          setIsDropdownOpen(false);
                        }}
                        className={`flex justify-center items-center gap-2 p-2 cursor-pointer  hover:bg-gray-200 ${
                          lang.code === locale ? "bg-gray-100 font-bold " : ""
                        }`}
                      >
                        {lang.name.toUpperCase()} - {lang.code.toUpperCase()}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {/* Hamburger Menu */}
              <div
                className="w-8 cursor-pointer"
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              >
                <GiHamburgerMenu size={30} className="text-white" />
              </div>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {mobileDropdownOpen && (
            <div
              className="absolute top-11 right-0 bg-white text-black w-full mt-3 shadow-lg"
              style={{ zIndex: 999 }}
            >
              <ul className="flex flex-col p-4 gap-4 ">
                {/* Menu Items */}
                <li className="font-bold cursor-pointer hover:text-blue-500">
                  <div
                    className="flex justify-between items-center"
                    onClick={() => toggleSubmenu(0)}
                  >
                    <Link
                      href={`/yacht-rentals`}
                      onClick={() => setMobileDropdownOpen(false)}
                    >
                      {t("navbar.private-yachts")}
                    </Link>
                    <span className="text-black">
                      <MdKeyboardArrowDown />
                    </span>
                  </div>
                  {submenuOpen === 0 && (
                    <ul className="pl-4 pt-3 space-y-3">
                      {!loading &&
                        data?.products?.map((product) => (
                          <li className="cursor-pointer text-sm mt-2 font-normal text-gray-500 ">
                            <Link
                              href={`/yacht-rentals/${product.slug}`}
                              key={product.id}
                              onClick={() => setMobileDropdownOpen(false)}
                            >
                              {product.title}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  )}
                </li>
                <Link
                  href={`/yacht-sale-for-dubai`}
                  onClick={() => setMobileDropdownOpen(false)}
                >
                  <li className="font-bold cursor-pointer hover:text-blue-500">
                    {t("navbar.buy-a-yacht")}
                  </li>
                </Link>

                <li className="font-bold cursor-pointer hover:text-blue-500">
                  <Link
                    href={`/shared-yacht-tours-dubai`}
                    onClick={() => setMobileDropdownOpen(false)}
                  >
                    {" "}
                    {t("navbar.shared-tours")}
                  </Link>
                </li>

                <li className="font-bold cursor-pointer">
                  <div
                    className="flex justify-between items-center"
                    onClick={() => toggleSubmenu(1)}
                  >
                    <Link
                      href={`/yacht-trips`}
                      onClick={() => setMobileDropdownOpen(false)}
                    >
                      {t("navbar.experiences")}
                    </Link>
                    <span className="text-black">
                      <MdKeyboardArrowDown />
                    </span>
                  </div>
                  {submenuOpen === 1 && (
                    <ul className="pl-4 pt-3 space-y-3">
                      {!loading &&
                        data?.experiences?.map((experience) => (
                          <li className="cursor-pointer text-sm mt-2 font-normal text-gray-500 ">
                            <Link
                              href={`/yacht-trips/${experience.slug}`}
                              key={experience.id}
                              onClick={() => setMobileDropdownOpen(false)}
                            >
                              {" "}
                              {experience.translations[locale].title}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  )}
                </li>

                <li className="font-bold cursor-pointer hover:text-blue-500">
                  <Link
                    href={`/offers`}
                    onClick={() => setMobileDropdownOpen(false)}
                  >
                    {" "}
                    {t("navbar.offers")}
                  </Link>
                </li>

                <li className="font-bold cursor-pointer hover:text-blue-500">
                  <Link
                    href={`/newyear`}
                    onClick={() => setMobileDropdownOpen(false)}
                  >
                    {" "}
                    {t("navbar.new-year")}
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}
