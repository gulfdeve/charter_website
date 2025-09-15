"use client";
import { useLocale, useTranslations } from "next-intl";
import { useState, useEffect, useRef } from "react";
import { MdOutlinePhone } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogoWhatsapp } from "react-icons/io5";
import { Link } from "../i18n/routing";
import Image from "next/image";

export default function MobileNavbar({
  currentLanguage,
  mobileDropdownOpen,
  setMobileDropdownOpen,
  languages,
  handleLanguageChange,
  locale,
  toggleSubmenu,
  header_whatsapp_url,
  header_phone_number_url,
  header_email,
}) {
  const t = useTranslations();

 
  const [isLangOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);

 
  useEffect(() => {
    const onClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div className="lg:hidden block">
      <nav className="gradient-custom w-full h-14 p-3 fixed top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="w-40 pr-3">
            <Link href="/">
              <Image src="/Cenaturus Logo top.png" alt="logo" width={200} height={0} style={{ height: "auto" }} />
            </Link>
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            {/* WhatsApp */}
            <Link aria-label="whatsapp" href={t("header.navbar_whatsapp_url")}>
              <IoLogoWhatsapp size={24} className="text-primary-blue-2" />
            </Link>
            {/* Phone */}
            <a aria-label="phone" href={header_phone_number_url || "#"}>
              <MdOutlinePhone className="text-primary-blue-2 w-5 h-5" />
            </a>

            {/* Mobile Language Selector */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => {
                  setLangOpen((prev) => !prev);
                  if (mobileDropdownOpen) setMobileDropdownOpen(false);
                }}
                className="flex items-center gap-2 p-1 rounded text-white text-sm"
              >
                <img src={currentLanguage.flag} alt={currentLanguage.name} className="w-6 h-6" />
              </button>
              {isLangOpen && (
                <ul className="absolute right-0 top-11 w-48 bg-white border font-bold text-primary-blue shadow-lg z-60">
                  {languages.map((lang) => (
                    <li
                      key={lang.code}
                      onClick={() => {
                        handleLanguageChange(lang.code);
                        setLangOpen(false);
                        setMobileDropdownOpen(false);
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

            {/* Hamburger */}
            <div className="w-8 cursor-pointer" onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}>
              <GiHamburgerMenu size={30} className="text-primary-blue-2" />
            </div>
          </div>
        </div>

        {/* Mobile Menu Items */}
        {mobileDropdownOpen && (
          <div className="absolute right-0 top-14 w-full sm:w-80 bg-[#fafafa] border font-bold text-primary-blue shadow-lg z-20" style={{ zIndex: 999 }}>
            <ul className="flex flex-col p-4 gap-7 mobile-navbar">
              <li className="font-bold cursor-pointer hover:text-primary-blue-2" onClick={() => { toggleSubmenu(0); }}>
                <Link href="/yacht-rentals" onClick={() => setMobileDropdownOpen(false)}>
                  {t("navbar.private-yachts")}
                </Link>
              </li>
              <li onClick={() => setMobileDropdownOpen(false)}>
                <Link href="/yachts-for-sale-dubai" className="font-bold hover:text-primary-blue-2">
                  {t("navbar.buy-a-yacht")}
                </Link>
              </li>
              <li onClick={() => setMobileDropdownOpen(false)} className="font-bold hover:text-primary-blue-2">
                <Link href="/shared-yacht-tours-dubai">
                  {t("navbar.shared-tours")}
                </Link>
              </li>
              <li className="font-bold cursor-pointer hover:text-primary-blue-2" onClick={() => { toggleSubmenu(1); }}>
                <Link href="/yacht-trips" onClick={() => setMobileDropdownOpen(false)}>
                  {t("navbar.experiences")}
                </Link>
              </li>
              {/* <li onClick={() => setMobileDropdownOpen(false)} className="font-bold hover:text-primary-blue-2">
                <Link href="/offers">{t("navbar.offers")}</Link>
              </li> */}
              <li onClick={() => setMobileDropdownOpen(false)} className="hidden font-bold hover:text-primary-blue-2">
                <Link href="/resident-offer">{t('navbar.summer-offers')}</Link>
              </li>
              <li onClick={() => setMobileDropdownOpen(false)} className="font-bold hover:text-primary-blue-2">
                <Link href="/resident-offer">{t('navbar.winter-offer')}</Link>
              </li>
              <li onClick={() => setMobileDropdownOpen(false)} className="font-bold hover:text-primary-blue-2">
                <Link href="/abu-dhabi-race-yacht-charter">{t('navbar.formula-1')}</Link>
              </li>
              <li onClick={() => setMobileDropdownOpen(false)} className="font-bold hover:text-primary-blue-2">
                <Link href="/events">{t("navbar.events")}</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
