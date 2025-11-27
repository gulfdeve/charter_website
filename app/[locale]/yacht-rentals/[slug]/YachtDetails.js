import { FaQuestionCircle, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from '@/app/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import TabbyPromoSection from '@/app/[locale]/checkout/[slug]/TabbyPromoSection';
import summerRate from '../../resident-offer/tabby-rate.json';

export default function YachtDetails({ yachtDetails, product, locale, whatsappUrl }) {
  const normalize = str => str?.toLowerCase().replace(/[^a-z0-9]/g, '');
  const matchingRate = summerRate.find(rate => rate?.name && product?.slug && normalize(rate.name).includes(normalize(product.slug)));

  const t = useTranslations();
  const locationMap = {
    '56ft-vassia': {
      berth: 'U-32 Berth, Dubai Marina Walk (Near Spinneys)',
      address: 'Dubai Marina, United Arab Emirates',
      mapUrl: 'https://maps.app.goo.gl/QSj2E2dSANthgjSx9',
    },
    '58ft-etosha': {
      berth: 'U-27 Berth, Dubai Marina Walk, Near Spinneys',
      address: 'Dubai Marina, United Arab Emirates',
      mapUrl: 'https://maps.app.goo.gl/QSj2E2dSANthgjSx9',
    },
    '36ft-thunder': {
      berth: 'U-47 Berth, Dubai Marina Walk, Near Spinneys',
      address: 'United Arab Emirates',
      mapUrl: 'https://maps.app.goo.gl/QSj2E2dSANthgjSx9',
    },
    '61ft-silvercreek': {
      berth: 'B-B09 Berth, D Marin, Dubai Harbour',
      address: 'Dubai Harbour, United Arab Emirates',
      mapUrl: 'https://maps.app.goo.gl/7XosKc57ijvNTVeY9',
    },
    '56ft-lagoona': {
      berth: 'BB07 Berth, D Marin, Dubai Harbour',
      address: 'United Arab Emirates',
      mapUrl: 'https://maps.app.goo.gl/7XosKc57ijvNTVeY9',
    },
    '40ft-yacht-Riverside': {
      berth: 'B-D26 Berth, Near Dockmaster 1 Building, Dubai Harbour',
      address: 'United Arab Emirates',
      mapUrl: 'https://maps.app.goo.gl/oGk6YfdTv1PtRCwD7',
    },
    '36ft-Storm': {
      berth: 'A-G36 Berth, Dubai Harbour, Near Dockmaster 1 Building',
      address: 'Dubai Harbour, United Arab Emirates',
      mapUrl: 'https://maps.app.goo.gl/bKrvqKZUkhfr9h8x9',
    },
    '118ft-poseidon': {
      berth: 'A-B05 Berth, Dubai Harbour, Near Harbour Bridge',
      address: 'Dubai Harbour, United Arab Emirates',
      mapUrl: 'https://maps.app.goo.gl/3KAyipRTujeWihAG6',
    },
    '77ft-dionysos': {
      berth: 'D-A18 Berth, Dubai Harbour, Near Bar Du Port',
      address: 'Dubai Harbour, United Arab Emirates',
      mapUrl: 'https://maps.app.goo.gl/RG7xmTtjcYf7syVQ8',
    },
    '85ft-yacht-Kronos': {
      berth: 'Berth No. A-H33T, Dubai Harbour Marina',
      address: 'Dubai, United Arab Emirates',
      mapUrl: 'https://maps.app.goo.gl/PpBaHSR3ZjCNbpKDA',
    },
  };
  const loc = locationMap[product.slug] || {};

  return (
    <>
      <div className="flex flex-col lg:flex-row w-full items-start  py-3 gap-10">
        <div className="flex flex-col lg:items-start w-full lg:justify-start lg:w-1/2">
          <h3 className="text-base text-black font-bold py-4">Yacht Specifications</h3>
          <table className="w-full text-sm text-left text-gray-900">
            <colgroup>
              <col className="w-2/5" />
              <col className="w-3/5" />
            </colgroup>
            <tbody>
              {yachtDetails.map((detail, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <th className="py-3 px-4 font-semibold text-gray-700 w-2/5" scope="row">
                    {detail.label}:
                  </th>
                  <td className="py-3 px-4 break-words" dangerouslySetInnerHTML={{ __html: detail.value }} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-start justify-center">
          <div className="rounded-lg">
            <h3 className="text-base text-black font-bold py-4">What to expect</h3>
            <ol className="list-disc text-sm pl-6 space-y-4">
              {product.translations[locale].key_features.split('\n').map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ol>
            <h3 className="text-base text-black font-bold py-4">Ideal for:</h3>
            <ol className="list-disc text-left text-sm pl-6 space-y-4">
              {product.translations[locale].ideal_for.split('\n').map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ol>
            <div className="flex justify-start items-center">
              <div className="flex gap-2 rounded-full justify-center items-center p-4 mt-4 gradient-custom-2">
                <img src="/images/crypto-coin.webp" alt="we-accept-crypto" className="w-8 object-cover rounded-full" />
                <p className="font-bold text-white text-center text-xs ">We Accept Crypto Payment</p>
              </div>
            </div>
            <div className="flex justify-center items-center mt-4">{matchingRate && <TabbyPromoSection total={matchingRate.discounted} locale="en" />} </div>
            <div className="flex gap-3 items-center mt-8">
              <div>
                <FaMapMarkerAlt className="w-8 h-8 flex-shrink-0" />
              </div>
              <div className="uppercase">
                <h3 className="font-bold text-base">Yacht location:</h3>
                {loc.mapUrl ? (
                  <p className="text-blue-800">
                    <a href={loc.mapUrl} className="hover:text-blue-600" target="_blank" rel="noopener noreferrer">
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
              <Link href="/faq" className="yellow-solid-button flex items-center justify-center gap-2">
                <FaQuestionCircle size={20} />
                ASK A QUESTION
              </Link>
              <Link className="yellow-solid-button flex items-center justify-center gap-2" href={t('header.whatsapp_url')}>
                <FaWhatsapp size={20} />
                CHAT WITH US
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="flex items-center justify-center w-full my-6 xl:px-36 lg:px-20 mt-20">
          <hr className="flex-grow border-primary-yellow-dark" />
          <span className="uppercase font-primary px-4 text-base md:text-2xl lg:text-3xl font-semibold  text-black">Customize Your Yacht Experience</span>
          <hr className="flex-grow border-primary-yellow-dark " />
        </div>
        <p className=" text-primary-grey text-base pb-5 xl:px-36 lg:px-20 md:px-16 text-center">
          Level up your private yacht charter with premium add-ons like watersports, photography, decorations & more.
          <br />
          <span className="italic">Available upon request.</span>
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-5 my-10">
        <div>
          <img className="rounded-t-lg" src="/images/decoration.webp" />
          <p className="bg-primary-blue-2 text-white text-center  text-sm  font-bold p-2 rounded-b-lg md:px-10 lg:px-0 ">DECORATIONS</p>
        </div>
        <div>
          <img className="rounded-t-lg" src="/images/watersports.webp" />
          <p className="uppercase bg-primary-blue-2 text-white text-center  text-sm  font-bold p-2 rounded-b-lg ">watersports</p>
        </div>
        <div>
          <img className="rounded-t-lg" src="/images/flowers.webp" />
          <p className="uppercase bg-primary-blue-2 text-white text-center  text-sm  font-bold p-2 rounded-b-lg ">flowers</p>
        </div>
        <div>
          <img className="rounded-t-lg" src="/images/premium-drinks.webp" />
          <p className="uppercase bg-primary-blue-2 text-white text-center  text-sm  font-bold p-2 rounded-b-lg md:px-10 lg:px-0 ">premium drinks</p>
        </div>
        <div>
          <img className="rounded-t-lg" src="/images/catering.webp" />
          <p className="uppercase bg-primary-blue-2 text-white text-center  text-sm font-bold p-2 rounded-b-lg ">catering</p>
        </div>
        <div>
          <img className="rounded-t-lg" src="/images/dj.webp" />
          <p className="uppercase bg-primary-blue-2 text-white text-center  text-sm font-bold p-2 rounded-b-lg ">DJ/Music</p>
        </div>
        <div>
          <img className="rounded-t-lg" src="/images/photography.webp" />
          <p className="uppercase bg-primary-blue-2 text-white text-center  text-sm font-bold p-2 rounded-b-lg ">Photography</p>
        </div>
      </div>
    </>
  );
}
