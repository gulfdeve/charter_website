"use client";
import { MdMail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { useLanguage } from "@/app/context/LanguageContext";
import { useState, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useData } from "../context/DataContext";
import Link from "next/link";

export default function Navbar() {
  const { language, changeLanguage } = useLanguage();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null); // Tracks open submenu
  const { data, loading, error } = useData();

  const toggleSubmenu = (index) => {
    setSubmenuOpen(submenuOpen === index ? null : index);
  };
  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setDropdownOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 150) {
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

  return (
    <>
      {/* First Navbar */}
      <div className="md:block hidden">
        <nav className="container mx-auto p-4 bg-white text-black flex items-center justify-between xl:gap-96 md:gap-24 ">
          <div className="text-xl font-bold">
            <Link href="/">
              <img src="./CentaurusLogo.png" alt="Centaurus Logo" />
            </Link>
          </div>
          <div className="flex items-center justify-end">
            <Link
              href="/contact"
              className="flex flex-row items-center justify-center py-2 w-full md:py-2 md:px-4 rounded-md bg-[#e1ae48] text-[#0d2343] hover:bg-[#0d2343] hover:text-[#e1ae48] font-Montserrat font-bold text-base md:text-sm xl:text-lg transition-all duration-300"
            >
              CONTACT US
            </Link>
            <div className="flex flex-row px-8 gap-8">
              {/* Email Icon */}
              <Link href="mailto:example@example.com">
                <MdMail
                  size={30}
                  className="text-[#e1ae48] hover:text-[#0d2343]"
                />
              </Link>

              {/* WhatsApp Icon */}
              <Link href="https://wa.me/1234567890">
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
              <div className="p-3 rounded text-black font-Montserrat cursor-pointer scale-105">
                {language.toUpperCase()}
              </div>
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <ul className="absolute right-0  w-32 bg-white border rounded-md shadow-lg z-20">
                  <li
                    onClick={() => handleLanguageChange("en")}
                    className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-200"
                  >
                    <img src="/uk.svg" alt="English" className="w-4 h-4" />
                    English
                  </li>
                  <li
                    onClick={() => handleLanguageChange("ar")}
                    className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-200"
                  >
                    <img src="/uae.svg" alt="Arabic" className="w-4 h-4" />
                    Arabic
                  </li>
                  <li
                    onClick={() => handleLanguageChange("ru")}
                    className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-200"
                  >
                    <img src="/ru.svg" alt="Russian" className="w-4 h-4" />
                    Russian
                  </li>
                </ul>
              )}
            </div>
          </div>
        </nav>

        {/* Second Navbar (Sticky) */}
        {/* add sticky class to the navbar when scrolling */}
        <div
          className={`bg-[#0d2343] w-full ${
            isSticky ? "fixed top-0 z-50 transition-all " : ""
          } `}
        >
          <nav
            className={`container mx-auto  text-[#e1ae48] font-Montserrat font-bold`}
          >
            <div className="">
              <ul className="flex flex-row items-center justify-between">
                <li
                  className={`transition-opacity  ${
                    isSticky ? "opacity-100" : "w-0 opacity-0 absolute"
                  }`}
                >
                  <img src="./CentaurusLogoWhite.png" alt="Logo" />
                </li>

                {/* PRIVATE YACHTS with Dropdown */}
                <li className="relative group">
                  <Link
                    href="/yacht-rentals"
                    className={`header_links cursor-pointer flex items-center ${
                      isSticky ? "p-8" : "p-5"
                    } `}
                  >
                    PRIVATE YACHTS
                    <svg
                      className="ml-2 w-6 h-6 transform group-hover:rotate-180 transition-transform duration-300"
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
                  </Link>
                  <ul className="absolute space-y-5 left-0 w-60 bg-white text-black border shadow-lg hidden group-hover:block z-20 group-hover:scale-105 transition-transform duration-300">
                    {!loading &&
                      data?.products?.map((product) => (
                        <Link
                          href={`/yacht-rentals/${product.slug}`}
                          key={product.id}
                        >
                          <li className="header_dropdown_links">
                            {product.title}
                          </li>
                        </Link>
                      ))}
                  </ul>
                </li>

                {/* BUY A YACHT */}
                <li>
                  <Link
                    className={`header_links cursor-pointer flex items-center ${
                      isSticky ? "p-8" : "p-5"
                    } `}
                    href={"yachts-for-sale-dubai"}
                  >
                    BUY A YACHT
                  </Link>
                </li>
                {/* SHARED TOURS */}
                <li>
                  <Link
                    className={`header_links cursor-pointer flex items-center ${
                      isSticky ? "p-8" : "p-5"
                    } `}
                    href={"shared-yacht-tours-dubai"}
                  >
                    SHARED TOURS
                  </Link>
                </li>
                {/* EXPERIENCES with Dropdown */}

                {/* EXPERIENCES with Dropdown */}
                <li className="relative group">
                  <Link
                    href="/yacht-trips"
                    className={`header_links cursor-pointer flex items-center ${
                      isSticky ? "p-8" : "p-5"
                    } `}
                  >
                    EXPERIENCES
                    <svg
                      className="ml-2 w-6 h-6 transform group-hover:rotate-180 transition-transform duration-300"
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
                  </Link>
                  <ul className="absolute space-y-5 left-0 w-80 bg-white text-black border shadow-lg hidden group-hover:block z-20 group-hover:scale-105 transition-transform duration-300">
                    {!loading &&
                      data?.experiences?.map((experience) => (
                        <Link
                          href={`/yacht-trips/${experience.slug}`}
                          key={experience.id}
                        >
                          <li className="header_dropdown_links">
                            {experience.translations[language].title}
                          </li>
                        </Link>
                      ))}
                  </ul>
                </li>
                <li>
                  <Link
                    className={`header_links cursor-pointer flex items-center ${
                      isSticky ? "p-8" : "p-5"
                    } `}
                    href={"/watersports"}
                  >
                    WATER SPORTS
                  </Link>
                </li>
                <li>
                  <Link
                    className={`header_links cursor-pointer flex items-center ${
                      isSticky ? "p-8" : "p-5"
                    } `}
                    href={"/events"}
                  >
                    Events
                  </Link>
                </li>
                {/* OFFERS */}
                <li>
                  <Link
                    className={`header_links cursor-pointer flex items-center ${
                      isSticky ? "p-8" : "p-5"
                    } `}
                    href={"/offers"}
                  >
                    OFFERS
                  </Link>
                </li>
                {/* NEWYEAR */}
                {/* <li>NEWYEAR</li> */}
              </ul>
            </div>
          </nav>
        </div>

        {/* Logo Added to Sticky Navbar */}
      </div>
      <div className="md:hidden block">
        <nav className="bg-[#0d2343] w-full h-14 p-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="w-36 pr-3">
              <img src="./CentaurusLogoWhite.png" alt="Logo" />
            </div>

            {/* Icons and Dropdown Trigger */}
            <div className="flex items-center gap-2">
              {/* WhatsApp Icon */}
              <Link href="https://wa.me/1234567890" passHref>
                <IoLogoWhatsapp className="text-blue-500 w-6 h-6" />
              </Link>

              {/* Phone Icon */}
              <Link href="tel:1234567890" passHref>
                <FaPhoneAlt className="text-blue-500 w-5 h-5" />
              </Link>
              {/* Language Selector */}
              <select
                value={language}
                onChange={(e) => changeLanguage(e.target.value)}
                className="p-1 rounded text-white text-xs font-Montserrat bg-blue-500"
              >
                <option value="en">English</option>
                <option value="ar">Arabic</option>
                <option value="ru">Russian</option>
              </select>
              {/* Hamburger Menu */}
              <div
                className="w-8 cursor-pointer"
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              >
                <img src="/download.svg" alt="Menu" />
              </div>
            </div>
          </div>

          {/* Dropdown Menu */}
          {mobileDropdownOpen && (
            <div
              className="absolute top-11 right-0 bg-white text-black w-full mt-3 shadow-lg"
              style={{ zIndex: 999 }}
            >
              <ul className="flex flex-col p-4 gap-4 font-Montserrat">
                {/* Menu Items */}
                <li className="font-bold cursor-pointer hover:text-blue-500">
                  <div
                    className="flex justify-between items-center"
                    onClick={() => toggleSubmenu(0)}
                  >
                    PRIVATE YACHTS
                    <span className="text-black">
                      <MdKeyboardArrowDown />
                    </span>
                  </div>
                  {submenuOpen === 0 && (
                    <ul className="pl-4 pt-3 space-y-3">
                      {!loading &&
                        data?.products?.map((product) => (
                          <Link href={`/yacht-rentals/${product.slug}`}>
                            <li
                              key={product.id}
                              className="cursor-pointer text-xs font-normal text-gray-500 font-Montserrat"
                            >
                              {product.title}
                            </li>
                          </Link>
                        ))}
                      <li className="cursor-pointer text-black">Submenu 2</li>
                    </ul>
                  )}
                </li>
                <Link href={"yachts-for-sale-dubai"}>
                  <li className="font-bold cursor-pointer hover:text-blue-500">
                    BUY A YACHT
                  </li>
                </Link>
                <Link href={"shared-yacht-tours-dubai"}>
                  <li className="font-bold cursor-pointer hover:text-blue-500">
                    SHARED TOURS
                  </li>
                </Link>
                <li className="font-bold cursor-pointer ">
                  <div
                    className="flex justify-between items-center"
                    onClick={() => toggleSubmenu(1)}
                  >
                    <Link href={"/yacht-trips"}>EXPERIENCES</Link>
                    <span className="text-black">
                      <MdKeyboardArrowDown />
                    </span>
                  </div>
                  {submenuOpen === 1 && (
                    <ul className="pl-4 pt-3 space-y-3">
                      {!loading &&
                        data?.experiences?.map((experience) => (
                          <Link href={`/yacht-trips/${experience.slug}`}>
                            <li
                              key={experience.id}
                              className="cursor-pointer text-xs font-normal text-gray-500 font-Montserrat"
                            >
                              {experience.translations[language].title}
                            </li>
                          </Link>
                        ))}
                    </ul>
                  )}
                </li>
                <Link href={"/offers"}>
                  <li className="font-bold cursor-pointer hover:text-blue-500">
                    OFFERS
                  </li>
                </Link>
                <Link href={"new-year-yacht-party"}>
                  <li className="font-bold cursor-pointer hover:text-blue-500">
                    NEW YEAR
                  </li>
                </Link>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}
