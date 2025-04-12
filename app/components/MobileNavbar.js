"use client";
import { useLocale, useTranslations } from "next-intl";
import { useRef } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "../i18n/routing";
import Image from "next/image";

export default function MobileNavbar({
  currentLanguage,
  istheDropdownOpen,
  setIsDropdownOpen,
  mobileDropdownOpen,
  setMobileDropdownOpen,
  languages,
  handleLanguageChange,
  locale,
  toggleSubmenu,
}) {
  const t = useTranslations();
  const dropdownRef = useRef(null);

  return (
    <div className="lg:hidden block">
      <nav className="bg-primary-blue w-full h-14 p-3 fixed top-0 z-50">
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
          <div className="flex items-center gap-6">
            {/* WhatsApp Icon */}
            <Link href="https://wa.me/1234567890">
              <Image
                src="/whatsapp.svg"
                alt="whatsapp logo"
                width={24}
                height={24}
              />
            </Link>

            {/* Phone Icon */}
            <Link aria-label="phone icon" href="tel:1234567890">
              <FaPhoneAlt className="text-white w-5 h-5" />
            </Link>

            {/* Language Selector */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => {
                  setIsDropdownOpen((prev) => !prev);
                  if (mobileDropdownOpen) {
                    setMobileDropdownOpen(false);
                  }
                }}
                className="flex items-center gap-2 p-1 rounded text-white text-sm"
              >
                <img
                  src={currentLanguage?.flag}
                  alt={currentLanguage?.name}
                  className="w-6 h-6"
                />
              </button>

              {/* Dropdown Menu */}
              {istheDropdownOpen && (
                <ul className="absolute right-0 top-11 w-48 bg-white border font-bold text-primary-blue shadow-lg z-20">
                  {languages.map((lang) => (
                    <li
                      key={lang.code}
                      onClick={() => {
                        handleLanguageChange(lang.code);
                        setIsDropdownOpen(false);
                      }}
                      className={`flex justify-center gap-2 p-2 cursor-pointer hover:bg-gray-200 ${
                        lang.code === locale ? "bg-gray-100 font-bold" : ""
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
            className="absolute right-0 top-14 w-48 bg-white border font-bold text-primary-blue shadow-lg z-20"
            style={{ zIndex: 999 }}
          >
            <ul className="flex flex-col p-4 gap-4 mobile-navbar">
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
                </div>
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
                </div>
              </li>

              <li className="font-bold cursor-pointer hover:text-blue-500">
                <Link
                  href={`/offers`}
                  onClick={() => setMobileDropdownOpen(false)}
                >
                  {t("navbar.offers")}
                </Link>
              </li>
              <li className="font-bold cursor-pointer hover:text-blue-500">
                <Link
                  href={`/events`}
                  onClick={() => setMobileDropdownOpen(false)}
                >
                  {t("navbar.events")}
                </Link>
              </li>

              <li className="font-bold cursor-pointer hover:text-blue-500">
                <Link
                  href={`/watersports`}
                  onClick={() => setMobileDropdownOpen(false)}
                >
                  {t("navbar.water-sports")}
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
} 