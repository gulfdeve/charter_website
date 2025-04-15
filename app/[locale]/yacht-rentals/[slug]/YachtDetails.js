"use client";
import { FaQuestionCircle, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "@/app/i18n/routing";
import { useLocale, useTranslations } from "next-intl";

export default function YachtDetails({ yachtDetails, product, locale, whatsappUrl }) {
	const t = useTranslations();
	return (
    <div className="flex flex-col lg:flex-row w-full items-start lg:justify-between py-10">
      <div className="flex flex-col lg:items-start w-full lg:justify-start lg:w-1/2">
        <table className="w-full text-sm text-left text-gray-900">
          <tbody>
            {yachtDetails.map((detail, index) => (
              <tr key={index} className="border-b border-gray-200">
                <th className="py-3 px-4 font-semibold text-gray-700 w-2/5" scope="row">
                  {detail.label}:
                </th>
                <td className="py-3 px-4">{detail.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-start justify-center">
        <div className="rounded-lg p-3 lg:p-6">
          <p className="text-md text-black font-bold py-4">What to expect</p>
          <ol className="list-disc text-sm pl-6 space-y-4">
            {product.translations[locale].key_features.split("\n").map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ol>
          <p className="text-md text-black font-bold py-4">Ideal for:</p>
          <ol className="list-disc text-left text-sm pl-6 space-y-4">
            {product.translations[locale].ideal_for.split("\n").map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ol>

          <div className="flex items-start gap-3 items-center mt-10">
            <div>
              <FaMapMarkerAlt className="w-8 h-8 flex-shrink-0" />
            </div>
            <div className="uppercase">
              <p className="font-bold">Yacht location:</p>
              <p className="text-blue-800">
                <a
                  href="https://www.google.com/maps/place/CENTAURUS+CHARTER+-+Yachts+%26+Boats+Rental+Dubai+Harbour"
                  className="hover:text-white"
                  target="_blank"
                >
                  U-32 berth dubai marina (near spinneys)
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">
            <Link
              href="/faq"
              className="yellow-solid-button flex items-center justify-center gap-2"
            >
              <FaQuestionCircle size={20} />
              ASK A QUESTION
            </Link>
            <Link
              className="yellow-solid-button flex items-center justify-center gap-2"
              href={t("header.whatsapp_url")}
            >
              <FaWhatsapp size={20} />
              CHAT WITH US
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 