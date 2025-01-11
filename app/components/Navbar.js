"use client";
import { MdMail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { useLanguage } from "@/app/context/LanguageContext";
import { useState, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useData } from "../context/DataContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { language, changeLanguage } = useLanguage();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null); // Tracks open submenu
  const { data, loading, error } = useData();
  const router = useRouter();
  const pathname = usePathname();
  const toggleSubmenu = (index) => {
    setSubmenuOpen(submenuOpen === index ? null : index);
  };

  const handleLanguageChange = (lang) => {
    let segments = pathname.split("/");
  
    // If changing to a non-English language, replace "en" with the new language code
    if (lang !== "en") {
      if (segments[1] === "en") {
        segments[1] = lang;  // Replace "en" with the selected language
      } else if (segments.length === 1 || segments[1] === "en") {
        segments.splice(1, 1, lang);  // Insert the new language code
      } else {
        segments.splice(1, 0, lang);  // Insert language code if it doesn't exist
      }
    } 
    // If the language is English, ensure "en" stays in the URL (never remove it), but remove "en" only on the root page
    else if (segments[1] !== "en") {
      if (segments.length === 1) {
        segments.unshift("en"); // Add "en" for root if not present
      } else {
        segments.splice(1, 0, "en"); // Add "en" at the second position for other pages
      }
    }
  
    // Special logic for when switching to "en" on the homepage
    if (lang === "en" && pathname === "/") {
      segments.splice(1, 1); // Remove "en" on the homepage
    }
  
    const newPath = segments.join("/");
    router.replace(newPath);  // Change the URL without reloading the page
  
    // Save selected language to localStorage
    localStorage.setItem("selectedLanguage", lang);
  
    // Update the context
    changeLanguage(lang);
  
    // Reload the page after a slight delay for a better user experience
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };
  
  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
  
    // If the saved language is not in the URL, update the URL accordingly
    if (savedLanguage !== "en" && !pathname.startsWith(`/${savedLanguage}`)) {
      const newPath = `/${savedLanguage}${pathname.slice(3)}`;  // Add the saved language to the current path
      router.push(newPath);
    }
  
    // Ensure "en" stays in the URL when it's selected, but remove it on the homepage
    if (savedLanguage === "en" && !pathname.startsWith("/en") && pathname !== "/") {
      const newPath = `/en${pathname.slice(3)}`;
      router.push(newPath);  // Make sure "en" is always part of the URL when English is selected
    }
  
    if (savedLanguage === "en" && pathname === "/") {
      const newPath = pathname.slice(3); // Remove "en" if we are on the homepage
      router.push(newPath);  // Remove "en" on homepage only
    }
  
    changeLanguage(savedLanguage);
  }, [pathname, changeLanguage, router]);
  


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
  return (
    <>
      {/* First Navbar */}
      <div className="lg:block hidden">
        <nav className="p-4 container mx-auto bg-white text-black flex items-center justify-between xl:gap-64 2xl:gap-64 md:gap-24">
          <h1 className="text-xl font-bold">
            <Link href={"/"}>
              <img
                src="./CentaurusLogo.png"
                alt="Centaurus Logo"
                className="cursor-pointer"
              />
            </Link>
          </h1>
          <div className="flex items-center justify-end">
            <button className="flex flex-row items-center justify-center font-RedHatDisplay py-2 w-full md:py-2 md:px-4 rounded-md bg-[#e1ae48] text-[#0d2343] hover:bg-[#0d2343] hover:text-[#e1ae48] font-Montserrat font-bold text-base md:text-sm xl:text-lg transition-all duration-300">
              <Link href={'/contact'}>CONTACT US </Link>
            </button>
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
                <ul className="absolute right-0 w-32 bg-white border rounded-md shadow-lg z-20">
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
        <div
          className={`bg-[#0d2343] w-full ${
            isSticky ? "fixed top-0 z-50 transition-all " : ""
          } `}
        >
          <nav
            className={` w-full bg-[#0D2343] text-[#e1ae48] font-Montserrat font-bold ${
              isSticky
                ? " p-3  lg:p-2 xl:h-20 md:h-16 sticky top-0 z-50"
                : "h-14 2xl:h-16  2xl:p-1"
            }`}
          >
            <div className="flex flex-row items-center justify-center">
              <ul
                className={`flex flex-row items-center justify-center gap-6 xl:gap-[3rem] 2xl:gap-[3rem] text-[11px] md:text-[7px] ${
                  isSticky
                    ? "2xl:text-[15px] xl:text-[11px] md:text-[7px]"
                    : " 2xl:text-[15px] xl:text-[12px] md:text-[9px] lg:text-[10px]"
                }`}
              >
                <li
                  className={`transition-opacity ${
                    isSticky
                      ? "w-44 md:w-28 xl:w-44 2xl:w-48 opacity-100"
                      : "w-0 opacity-0 absolute"
                  }`}
                >
                  <img src="./CentaurusLogoWhite.png" alt="Logo" />
                </li>

                {/* PRIVATE YACHTS with Dropdown */}

                <li className="relative group">
                  <span className="flex items-center justify-between cursor-pointer p-5 gap-1">
                    <Link href={`/${language}/yacht-rentals`}>
                      PRIVATE YACHTS
                    </Link>
                    <svg
                      className="xl:w-5 lg:w-4 h-5 lg:h-4 transform group-hover:rotate-180 transition-transform duration-300"
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
                  <ul className="absolute top-[85%] p-3 left-0 w-60 bg-white text-black border shadow-lg hidden group-hover:block z-20">
                    {!loading &&
                      data?.products?.map((product) => (
                        <Link
                          href={`/${language}/yacht-rentals/${product.slug}`}
                          key={product.id}
                        >
                          <li className="py-2 px-4 cursor-pointer text-base font-normal text-gray-500 font-Montserrat hover:bg-gray-200">
                            {product.title}
                          </li>
                        </Link>
                      ))}
                  </ul>
                </li>

                {/* BUY A YACHT */}
                <Link href={`/${language}/yachts-for-sale-dubai`}>
                  <li className="pr-5">BUY A YACHT</li>
                </Link>
                {/* SHARED TOURS */}
                <Link href={`/${language}/shared-yacht-tours-dubai`}>
                  <li className="pr-5">SHARED TOURS</li>
                </Link>
                {/* EXPERIENCES with Dropdown */}
                <li className="relative group">
                  <span className="flex items-center justify-between cursor-pointer p-5 gap-1">
                    <Link href={`/${language}/yacht-trips`}>EXPERIENCES</Link>
                    <svg
                      className="w-5 h-5 xl:w-5 xl:w-5 lg:w-4 lg:h-4 transform group-hover:rotate-180 transition-transform duration-300"
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
                  <ul className="absolute top-[85%] p-3 left-0 w-60 bg-white text-black border shadow-lg hidden group-hover:block z-20">
                    {!loading &&
                      data?.experiences?.map((experience) => {
                        const title =
                          experience.translations?.[language]?.title ||
                          experience.translations?.en?.title ||
                          "Untitled";
                        return (
                          <Link
                            href={`/${language}/yacht-trips/${experience.slug}`}
                            key={experience.id}
                          >
                            <li className="py-2 px-4 cursor-pointer text-base font-normal text-gray-500 font-Montserrat hover:bg-gray-200">
                              {title}
                            </li>
                          </Link>
                        );
                      })}
                  </ul>
                </li>

                {/* OFFERS */}
                <Link href={`/${language}/offers`}>
                  <li className="pr-5">OFFERS</li>
                </Link>
                <Link href={`/${language}/watersports`}>
                  <li className="pr-5">WATER SPORTS</li>
                </Link>
                {/* NEWYEAR */}
                <Link href={`/${language}/newyear`}>
                  <li>NEWYEAR</li>
                </Link>
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
      <Link href={"/"}>
        <div className="w-32 pr-3">
          <img src="./CentaurusLogoWhite.png" alt="Logo" />
        </div>
      </Link>
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
          onChange={(e) => handleLanguageChange(e.target.value)}
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

    {/* Mobile Dropdown Menu */}
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
              <Link href={`/${language}/yacht-rentals`} passHref>
                <span onClick={() => setMobileDropdownOpen(false)}>
                  PRIVATE YACHTS
                </span>
              </Link>
              <span className="text-black">
                <MdKeyboardArrowDown />
              </span>
            </div>
            {submenuOpen === 0 && (
              <ul className="pl-4 pt-3 space-y-3">
                {!loading &&
                  data?.products?.map((product) => (
                    <Link
                      href={`/${language}/yacht-rentals/${product.slug}`}
                      key={product.id}
                      passHref
                    >
                      <li
                        className="cursor-pointer text-xs font-normal text-gray-500 font-Montserrat"
                        onClick={() => setMobileDropdownOpen(false)}
                      >
                        {product.title}
                      </li>
                    </Link>
                  ))}
              </ul>
            )}
          </li>
          <Link href={`/${language}/yacht-sale-for-dubai`} passHref>
            <li
              className="font-bold cursor-pointer hover:text-blue-500"
              onClick={() => setMobileDropdownOpen(false)}
            >
              BUY A YACHT
            </li>
          </Link>
          <Link href={`/${language}shared-yacht-tours-dubai`} passHref>
            <li
              className="font-bold cursor-pointer hover:text-blue-500"
              onClick={() => setMobileDropdownOpen(false)}
            >
              SHARED TOURS
            </li>
          </Link>
          <li className="font-bold cursor-pointer">
            <div
              className="flex justify-between items-center"
              onClick={() => toggleSubmenu(1)}
            >
              <Link href={`/${language}/yacht-trips`} passHref>
                <span onClick={() => setMobileDropdownOpen(false)}>
                  EXPERIENCES
                </span>
              </Link>
              <span className="text-black">
                <MdKeyboardArrowDown />
              </span>
            </div>
            {submenuOpen === 1 && (
              <ul className="pl-4 pt-3 space-y-3">
                {!loading &&
                  data?.experiences?.map((experience) => (
                    <Link
                      href={`/${language}/yacht-trips/${experience.slug}`}
                      key={experience.id}
                      passHref
                    >
                      <li
                        className="cursor-pointer text-xs font-normal text-gray-500 font-Montserrat"
                        onClick={() => setMobileDropdownOpen(false)}
                      >
                        {experience.translations[language].title}
                      </li>
                    </Link>
                  ))}
              </ul>
            )}
          </li>
          <Link href={`/${language}/offers`} passHref>
            <li
              className="font-bold cursor-pointer hover:text-blue-500"
              onClick={() => setMobileDropdownOpen(false)}
            >
              OFFERS
            </li>
          </Link>
          <Link href={`/${language}/newyear`} passHref>
            <li
              className="font-bold cursor-pointer hover:text-blue-500"
              onClick={() => setMobileDropdownOpen(false)}
            >
              NEWYEAR
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