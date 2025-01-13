"use client";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdKeyboardArrowDown, MdMail } from "react-icons/md";
import { useData } from "../context/DataContext";
import { useRouter, usePathname, Link } from "../i18n/routing";

export default function Navbar() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

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
              <Link href={"/contact"}>{t("navbar.contact-us")}</Link>
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
  <div className="p-3 rounded text-black font-Montserrat cursor-pointer scale-105 flex items-center gap-2">
    <img
      src={
        locale === "en"
          ? "/uk.svg"
          : locale === "ar"
          ? "/uae.svg"
          : locale === "ru"
          ? "/ru.svg"
          : ""
      }
      alt={locale}
      className="w-4 h-4"
    />
    {locale.toUpperCase()}
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
      <Link className="bg-gray-300" href={pathname} locale="ru">
        <li className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-200">
          <img src="/ru.svg" alt="Russian" className="w-4 h-4" />
          Russian
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
                    <Link href={`/yacht-rentals`}>
                      {t("navbar.private-yachts")}
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
                          href={`/yacht-rentals/${product.slug}`}
                          key={product.id}
                        >
                          <li className="py-2 px-4 cursor-pointer text-base font-normal text-gray-500 font-Montserrat hover:bg-gray-200">
                            {/* {product.title} */}
                            {product.translations?.[locale]?.name_of_yacht}
                          </li>
                        </Link>
                      ))}
                  </ul>
                </li>

                {/* BUY A YACHT */}
                <Link href={`/yachts-for-sale-dubai`}>
                  <li className="pr-5">{t('navbar.buy-a-yacht')}</li>
                </Link>
                {/* SHARED TOURS */}
                <Link href={`/shared-yacht-tours-dubai`}>
                  <li className="pr-5">{t('navbar.shared-tours')}</li>
                </Link>
                {/* EXPERIENCES with Dropdown */}
                <li className="relative group">
                  <span className="flex items-center justify-between cursor-pointer p-5 gap-1">
                    <Link href={`/yacht-trips`}>{t('navbar.experiences')}</Link>
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
                        return (
                          <Link
                            href={`/yacht-trips/${experience.slug}`}
                            key={experience.id}
                          >
                            <li className="py-2 px-4 cursor-pointer text-base font-normal text-gray-500 font-Montserrat hover:bg-gray-200">
                              {experience.translations?.[locale]?.title}
                            </li>
                          </Link>
                        );
                      })}
                  </ul>
                </li>

                {/* OFFERS */}
                <Link href={`/offers`}>
                  <li className="pr-5">{t('navbar.offers')}</li>
                </Link>
                <Link href={`/watersports`}>
                  <li className="pr-5">{t('navbar.water-sports')}</li>
                </Link>
                {/* NEWYEAR */}
                <Link href={`/newyear`}>
                  <li>{t('navbar.new-year')}</li>
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
                value={locale}
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
                    <Link href={`/yacht-rentals`}>{t('navbar.private-yachts')}</Link>
                    <span className="text-black">
                      <MdKeyboardArrowDown />
                    </span>
                  </div>
                  {submenuOpen === 0 && (
                    <ul className="pl-4 pt-3 space-y-3">
                      {!loading &&
                        data?.products?.map((product) => (
                          <Link
                            href={`/yacht-rentals/${product.slug}`}
                            key={product.id}
                          >
                            <li className="cursor-pointer text-xs font-normal text-gray-500 font-Montserrat">
                              {product.title}
                            </li>
                          </Link>
                        ))}
                    </ul>
                  )}
                </li>
                <Link href={`/yacht-sale-for-dubai`}>
                  <li className="font-bold cursor-pointer hover:text-blue-500">
                    {t('navbar.buy-a-yacht')}
                  </li>
                </Link>
                <Link href={`shared-yacht-tours-dubai`}>
                  <li className="font-bold cursor-pointer hover:text-blue-500">
                    {t('navbar.shared-tours')}
                  </li>
                </Link>
                <li className="font-bold cursor-pointer">
                  <div
                    className="flex justify-between items-center"
                    onClick={() => toggleSubmenu(1)}
                  >
                    <Link href={`/yacht-trips`}>{t('navbar.experiences')}</Link>
                    <span className="text-black">
                      <MdKeyboardArrowDown />
                    </span>
                  </div>
                  {submenuOpen === 1 && (
                    <ul className="pl-4 pt-3 space-y-3">
                      {!loading &&
                        data?.experiences?.map((experience) => (
                          <Link
                            href={`/yacht-trips/${experience.slug}`}
                            key={experience.id}
                          >
                            <li className="cursor-pointer text-xs font-normal text-gray-500 font-Montserrat">
                              {experience.translations[locale].title}
                            </li>
                          </Link>
                        ))}
                    </ul>
                  )}
                </li>
                <Link href={`/offers`}>
                  <li className="font-bold cursor-pointer hover:text-blue-500">
                    {t('navbar.offers')}
                  </li>
                </Link>
                <Link href={`/newyear`}>
                  <li className="font-bold cursor-pointer hover:text-blue-500">
                    {t('navbar.new-year')}
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
