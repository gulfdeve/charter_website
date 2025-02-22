"use client";
import React from "react";

import { useLanguage } from "@/app/context/LanguageContext";
import { useData } from "@/app/context/DataContext";
import { Link } from "@/app/i18n/routing";

import { useLocale, useTranslations } from "next-intl";

const FirstFooter = () => {
  const { language } = useLanguage();
  const locale = useLocale();
  const { data, loading, error } = useData();

  const t = useTranslations();

  return (
    <>
      <footer className="text-sm bg-[#1D1D1D] py-10 font-Montserrat">
        <div className="p-4 container mx-auto">
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 ">
            <div>
              <h3 className="text-lg text-white font-semibold mb-4">
                {t("footer.centaurus-charter")}
              </h3>
              <ul>
                <li className="mb-2">
                  <Link
                    className="text-[#969696]  transition-colors duration-200"
                    href="/"
                  >
                    {t("navbar.home")}
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-[#969696]  transition-colors duration-200"
                    href={`/aboutus`}
                  >
                    {t("navbar.about")}
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-[#969696]  transition-colors duration-200"
                    href={`/yacht-rentals`}
                  >
                    {t("navbar.yacht-rentals")}
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-[#969696]  transition-colors duration-200"
                    href={`/watersports`}
                  >
                    {t("navbar.water-sports")}
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-[#969696]  transition-colors duration-200"
                    href={`/offers`}
                  >
                    {t("navbar.offers")}
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-[#969696]  transition-colors duration-200"
                    href={`/events`}
                  >
                    {t("navbar.events")}
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-[#969696]  transition-colors duration-200"
                    href={`/faq`}
                  >
                    {t("navbar.faq")}
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-[#969696]  transition-colors duration-200"
                    href={`/contact`}
                  >
                    {t("navbar.contact-us")}
                  </Link>
                </li>
                <li className="mb-2">
                  <a
                    className="text-[#969696]  transition-colors duration-200"
                    href="https://www.centauruscharter.com/public/pdf/Centaurus-Charter-Profile-2023.pdf"
                  >
                    {t("navbar.company-profile")}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg text-white font-semibold mb-4">
                Our Luxury Yachts
              </h3>
              <ul>
                {!loading &&
                  data?.products?.map((product) => (
                    <li className="mb-2 text-[#969696]  transition-colors duration-200">
                      <Link
                        href={`/yacht-rentals/${product.slug}`}
                        key={product.id}
                      >
                        {product.translations?.[locale]?.name_of_yacht}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg text-white font-semibold mb-4">
                {t("navbar.experiences")}
              </h3>
              <ul>
                {!loading &&
                  data?.experiences?.map((experience) => {
                    return (
                      <li className=" mb-2 text-[#969696]  transition-colors duration-200">
                        <Link
                          href={`/yacht-trips/${experience.slug}`}
                          key={experience.id}
                        >
                          {experience.translations?.[locale]?.title}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div>
              <h3 className="text-lg text-white font-semibold mb-4">
                {t("footer.reach-out-to-us")}
              </h3>
              <ul className="flex flex-col gap-2">
                <div className="mb-2 flex gap-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 384 512"
                    className="w-[24px] mt-1.5 text-[#969696] "
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                  </svg>
                  <div>
                    <p className="text-[#969696] ">
                      <a href="https://www.google.com/maps/place/CENTAURUS+CHARTER+-+Yachts+%26+Boats+Rental+Dubai+Harbour/@25.097395,55.1431033,15z/data=!4m6!3m5!1s0x3e5f6b1f6453e121:0x45035717db6c3954!8m2!3d25.0948183!4d55.1390062!16s%2Fg%2F11kb9bzw9v?hl=en&entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D">
                        {" "}
                        Marina Walk (Near Spinneys)
                        <br /> Dubai, United Arab Emirates
                      </a>
                    </p>
                  </div>
                </div>
                <div className="mb-2 flex gap-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 384 512"
                    className="w-[24px] mt-1.5 text-[#969696] "
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                  </svg>
                  <div>
                    <p className="text-[#969696] ">
                      <a href="https://www.google.com/maps/place/CENTAURUS+CHARTER+-+Yachts+%26+Boats+Rental+Dubai+Harbour/@25.097395,55.1431033,15z/data=!4m6!3m5!1s0x3e5f6b1f6453e121:0x45035717db6c3954!8m2!3d25.0948183!4d55.1390062!16s%2Fg%2F11kb9bzw9v?hl=en&entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D">
                        {" "}
                        Dubai Harbour Marina
                        <br /> Dubai, United Arab Emirates
                      </a>
                    </p>
                  </div>
                </div>
                <div className="mb-2 flex gap-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 384 512"
                    className="w-[24px] mt-1.5 text-[#969696] "
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                  </svg>
                  <div>
                    <p className="text-[#969696] ">
                      <a href="https://www.google.com/maps/place/CENTAURUS+CHARTER+-+Yachts+%26+Boats+Rental+Dubai+Harbour/@25.097395,55.1431033,15z/data=!4m6!3m5!1s0x3e5f6b1f6453e121:0x45035717db6c3954!8m2!3d25.0948183!4d55.1390062!16s%2Fg%2F11kb9bzw9v?hl=en&entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D">
                        {" "}
                        Berth No AB05 - near Harbour Bridge - Dubai Harbour
                        <br /> Dubai, United Arab Emirates
                      </a>
                    </p>
                  </div>
                </div>
                <div className="mb-2 flex gap-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 384 512"
                    className="w-[24px] mt-1.5 text-[#969696] "
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                  </svg>
                  <div>
                    <p className="text-[#969696] ">
                      <a href="https://www.google.com/maps/place/CENTAURUS+CHARTER+-+Yachts+%26+Boats+Rental+Dubai+Harbour/@25.097395,55.1431033,15z/data=!4m6!3m5!1s0x3e5f6b1f6453e121:0x45035717db6c3954!8m2!3d25.0948183!4d55.1390062!16s%2Fg%2F11kb9bzw9v?hl=en&entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D">
                        {" "}
                        Dubai Harbour Marina, Berth No A-G36 Near Dockmaster 1
                        Building
                        <br /> Dubai, United Arab Emirates
                      </a>
                    </p>
                  </div>
                </div>
                <div className="mb-2 flex gap-2"></div>
                <li className="mb-2 flex items-start">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="mt-1 mr-2 text-[#969696] "
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
                  </svg>
                  <div>
                    <a href="tel:+97143521833">+971 4 352 1833</a><br />
                    <a href="tel:+971524901269">+971 52 490 1269</a><br />
                    <a href="mailto:info@centauruscharter.com">
                      info@centauruscharter.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg text-white font-semibold mb-4">
                For Enquiries
              </h3>
              <ul>
                <li className="flex flex-col">
                  <p className="text-[#969696]  font-semibold py-3">
                    English / Russian
                  </p>
                  <a href="tel:+971505484685">+971 50 548 4685</a>
                  <a href="tel:+971502484678">+971 50 248 4678</a>
                  <a href="tel:+971502014225">+971 50 201 4225</a>
                </li>
                <li className="flex flex-col">
                  <p className="text-[#969696]  font-semibold py-3">
                    English / Spanish / Portuguese
                  </p>
                  <a href="tel:+971567277387">+971 56 727 7387</a>
                </li>
                <li className="flex flex-col">
                  <p className="text-[#969696]  font-semibold py-3">
                    English / Chinese
                  </p>
                  <a href="tel:+971506484625">+971 50 648 4625</a>
                </li>
                <li className="flex flex-col">
                  <p className="text-[#969696]  font-semibold py-3">
                    English / Arabic
                  </p>
                  <a href="tel:+971565017078">+971 56 501 7078</a>
                </li>
                <li className="flex flex-col">
                  <p className="text-[#969696]  font-semibold py-3">
                    English / Filipino
                  </p>
                  <a href="tel:+971565017057">+971 56 501 7057</a>
                </li>
                <li className="flex flex-col">
                  <p className="text-[#969696]  font-semibold py-3">
                    English / Hindi
                  </p>
                  <a href="tel:+971501452203">+971 50 145 2203</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FirstFooter;
