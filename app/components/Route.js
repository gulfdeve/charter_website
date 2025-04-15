import React from "react";
import { useLocale, useTranslations } from "next-intl";

const Route = ({ product, header_whatsapp_url }) => {
	  const t = useTranslations();
	//   console.log("product: ", product);
  return (
    <div>
      <div className="bg-primary-blue w-full h-auto py-10 xl:px-44 md:px-6 px-2">
        <div className="flex flex-col items-center justify-center pt-10 gap-5 py-6 mx-auto container">
          <h2 className="text-primary-yellow text-center font-bold text-2xl xl:text-3xl py-7">
            CRUISING ROUTE
          </h2>

          <p className=" text-center text-white text-lg px-4">
            Discover Dubai from the sea like never before. Enjoy our cruising
            options just for you:
          </p>
        </div>
        <div className="container mx-auto">
          <img className="w-full" alt="route map of centaurus charter yachts" src={`https://www.centauruscharter.net/product/images/${product.map_image}`} />
          <div className="grid grid-cols-1 md:grid-cols-4">
            <div className="flex flex-col items-start bg-red-100">
              <div className="bg-red-700 p-5 text-white uppercase text-center w-full">
                <h3 className="text-white text-lg font-bold">Marina Cruise</h3>
                <p className="text-white text-lg">
                  1 hour yacht trip <br />
                  (60 mins)
                </p>
              </div>
              <ul className=" text-left text-base lg:text-lg py-5 px-10 list-disc font-bold">
                <li>Dubai Marina</li>
                <li>Bluewaters Island</li>
                <li>Ain Dubai</li>
                <li>JBR</li>
              </ul>
            </div>
            <div className="flex flex-col items-start bg-blue-100">
              <div className="bg-primary-blue-2 p-5 text-white uppercase text-center w-full">
                <h3 className="text-white text-lg font-bold">
                  Atlantis Cruise
                </h3>
                <p className="text-white text-lg">
                  2 hours yacht trip <br />
                  (120 mins)
                </p>
              </div>
              <ul className=" text-left text-base lg:text-lg py-5 px-10 list-disc font-bold">
                <li>Dubai Marina</li>
                <li>Bluewaters Island</li>
                <li>Ain Dubai</li>
                <li>JBR</li>
                <li>Palm Jumeirah</li>
                <li>Atlantis</li>
              </ul>
            </div>
            <div className="flex flex-col items-start bg-green-100">
              <div className="bg-green-700 p-5 text-white uppercase text-center w-full">
                <h3 className="text-white text-lg font-bold">Marina Cruise</h3>
                <p className="text-white text-lg">
                  3 hours yacht trip <br />
                  (180 mins)
                </p>
              </div>
              <ul className=" text-left text-base lg:text-lg py-5 px-10 list-disc font-bold">
                <li>Dubai Marina</li>
                <li>Bluewaters Island</li>
                <li>Ain Dubai</li>
                <li>JBR</li>
                <li>Palm Jumeirah</li>
                <li>Atlantis</li>
                <li>Burj Al Arab</li>
              </ul>
            </div>
            <div className="flex flex-col items-start bg-yellow-100">
              <div className="bg-primary-yellow-dark p-5 text-white uppercase text-center w-full">
                <h3 className="text-white text-lg font-bold">Marina Cruise</h3>
                <p className="text-white text-lg">
                  1 hour yacht trip <br />
                  (60 mins)
                </p>
              </div>
              <ul className=" text-left text-base lg:text-lg py-5 px-10 list-disc font-bold">
                <li>Dubai Marina</li>
                <li>Bluewaters Island</li>
                <li>Ain Dubai</li>
                <li>JBR</li>
                <li>Palm Jumeirah</li>
                <li>Dubai Canal</li>
                <li>Burj Khalifa view (from the Canal)</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-col gap-5 md:flex-row md:justify-center md:gap-12 mt-5">
              <a
                href={t("header.whatsapp_url")}
                target="_blank"
                className="blue-lined-button"
              >
                Get a Quote
              </a>
              <a
                href="/CentaurusCharterRoutemap.pdf"
                target="_blank"
                className="blue-lined-button"
              >
                Download Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Route;
