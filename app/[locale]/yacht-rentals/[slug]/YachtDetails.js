"use client";
import { FaQuestionCircle, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "@/app/i18n/routing";
import { useLocale, useTranslations } from "next-intl";

export default function YachtDetails({
  yachtDetails,
  product,
  locale,
  whatsappUrl,
}) {
  const t = useTranslations();
  const locationMap = {
    "56ft-vassia": {
      berth: "U-32 Berth, Dubai Marina Walk (Near Spinneys)",
      address: "Dubai Marina, United Arab Emirates",
      mapUrl: "https://maps.app.goo.gl/QSj2E2dSANthgjSx9",
    },
    "58ft-etosha": {
      berth: "U-27 Berth, Dubai Marina Walk, Near Spinneys",
      address: "Dubai Marina, United Arab Emirates",
      mapUrl: "https://maps.app.goo.gl/QSj2E2dSANthgjSx9",
    },
    "36ft-thunder": {
      berth: "U-47 Berth, Dubai Marina Walk, Near Spinneys",
      address: "United Arab Emirates",
      mapUrl: "https://maps.app.goo.gl/QSj2E2dSANthgjSx9",
    },
    "61ft-silvercreek": {
      berth: "B-B09 Berth, D Marin, Dubai Harbour",
      address: "Dubai Harbour, United Arab Emirates",
      mapUrl: "https://maps.app.goo.gl/7XosKc57ijvNTVeY9",
    },
    "56ft-lagoona": {
      berth: "BB07 Berth, D Marin, Dubai Harbour",
      address: "United Arab Emirates",
      mapUrl: "https://maps.app.goo.gl/7XosKc57ijvNTVeY9",
    },
    "40ft-yacht-Riverside": {
      berth: "B-D26 Berth, Near Dockmaster 1 Building, Dubai Harbour",
      address: "United Arab Emirates",
      mapUrl: "https://maps.app.goo.gl/oGk6YfdTv1PtRCwD7",
    },
    "36ft-Storm": {
      berth: "A-G36 Berth, Dubai Harbour, Near Dockmaster 1 Building",
      address: "Dubai Harbour, United Arab Emirates",
      mapUrl: "https://maps.app.goo.gl/bKrvqKZUkhfr9h8x9",
    },
    "118ft-poseidon": {
      berth: "A-B05 Berth, Dubai Harbour, Near Harbour Bridge",
      address: "Dubai Harbour, United Arab Emirates",
      mapUrl: "https://maps.app.goo.gl/3KAyipRTujeWihAG6",
    },
    "77ft-dionysos": {
      berth: "D-A18 Berth, Dubai Harbour, Near Bar Du Port",
      address: "Dubai Harbour, United Arab Emirates",
      mapUrl: "https://maps.app.goo.gl/RG7xmTtjcYf7syVQ8",
    },
    "85ft-yacht-Kronos": {
      berth: "E06 G gate - D-Marin - Marasi Dr - Bay Marina - Dubai",
      address: "Dubai, United Arab Emirates",
      mapUrl: "https://maps.app.goo.gl/XVPwMjj8uWpwocsh6",
    },
  };
  const loc = locationMap[product.slug] || {};

  return (
    <div className="flex flex-col lg:flex-row w-full items-start lg:justify-between py-3">
      <div className="flex flex-col lg:items-start w-full lg:justify-start lg:w-1/2">
        <h3 className="text-base text-black font-bold py-4">
          Yacht Specifications
        </h3>
        <table className="w-full text-sm text-left text-gray-900">
          <tbody>
            {yachtDetails.map((detail, index) => (
              <tr key={index} className="border-b border-gray-200">
                <th
                  className="py-3 px-4 font-semibold text-gray-700 w-2/5"
                  scope="row"
                >
                  {detail.label}:
                </th>
                <td className="py-3 px-4">{detail.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-start justify-center">
        <div className="rounded-lg">
          <h3 className="text-base text-black font-bold py-4">
            What to expect
          </h3>
          <ol className="list-disc text-sm pl-6 space-y-4">
            {product.translations[locale].key_features
              .split("\n")
              .map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
          </ol>
          <h3 className="text-base text-black font-bold py-4">Ideal for:</h3>
          <ol className="list-disc text-left text-sm pl-6 space-y-4">
            {product.translations[locale].ideal_for
              .split("\n")
              .map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
          </ol>

          <div className="flex items-start gap-3 items-center mt-10">
            <div>
              <FaMapMarkerAlt className="w-8 h-8 flex-shrink-0" />
            </div>
            <div className="uppercase">
              <h3 className="font-bold text-base">Yacht location:</h3>
              {loc.mapUrl ? (
                <p className="text-blue-800">
                  <a
                    href={loc.mapUrl}
                    className="hover:text-blue-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {loc.berth}
                  </a>
                </p>
              ) : (
                <p className="text-gray-500">Location not available</p>
              )}
              {loc.address && <p>{loc.address}</p>}
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
