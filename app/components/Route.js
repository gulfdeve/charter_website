import React from 'react';
import { useTranslations } from 'next-intl';
import routesData from '@/app/components/routesData.json';

const Route = ({ product, slug, header_whatsapp_url }) => {
  const t = useTranslations();
  const routes = routesData[slug];

  if (!routes) {
    return <div>Product not found.</div>;
  }

  // Manual color configuration
  const headerColors = [
    'bg-red-700', // For first route
    'bg-primary-blue-2', // For second route
    'bg-green-700', // For third route
    'bg-primary-yellow-dark', // For fourth route
  ];

  const bodyColors = ['bg-red-100', 'bg-blue-100', 'bg-green-100', 'bg-yellow-100'];

  const routePDF = {
    '56ft-vassia': {
      pdf: 'ROUTE MAP-ALL YACHTS-ETOSHA-VASSIA-THUNDER.pdf',
    },
    '58ft-etosha': {
      pdf: 'ROUTE MAP-ALL YACHTS-ETOSHA-VASSIA-THUNDER.pdf',
    },
    '36ft-thunder': {
      pdf: 'ROUTE MAP-ALL YACHTS-ETOSHA-VASSIA-THUNDER.pdf',
    },
    '61ft-silvercreek': {
      pdf: 'ROUTE MAP-ALL YACHTS-LAGOONA-SILVER.pdf',
    },
    '56ft-lagoona': {
      pdf: 'ROUTE MAP-ALL YACHTS-LAGOONA-SILVER.pdf',
    },
    '40ft-yacht-Riverside': {
      pdf: 'ROUTE MAP-ALL YACHTS-RIVERSIDE.pdf',
    },
    '36ft-Storm': {
      pdf: 'ROUTE MAP-ALL YACHTS-STORM.pdf',
    },
    '118ft-poseidon': {
      pdf: 'ROUTE MAP-ALL YACHTS-POSEIDON.pdf',
    },
    '77ft-dionysos': {
      pdf: 'ROUTE MAP-ALL YACHTS-DIONYSOS.pdf',
    },
    '85ft-yacht-Kronos': {
      pdf: 'ROUTE MAP-ALL YACHTS-KRONOS.pdf',
    },
  };

  const pdfFile = routePDF[product.slug] || {};

  return (
    <div>
      <div className="bg-primary-blue w-full h-auto py-10 xl:px-44 md:px-6 px-2">
        <div className="flex flex-col items-center justify-center pb-6 mx-auto container">
          <h2 className="text-primary-yellow text-center font-bold text-2xl xl:text-3xl py-4">CRUISING ROUTE</h2>
          <p className="text-center text-white text-base px-4">Discover Dubai from the sea like never before. Enjoy our cruising options just for you:</p>
        </div>
        <div className="container mx-auto">
          <img className="w-full" alt="route map of centaurus charter yachts" src={`https://www.centauruscharter.net/product/images/${product.map_image}`} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {routes.map((route, idx) => (
              <div key={idx} className={`flex flex-col items-start ${bodyColors[idx % bodyColors.length]}`}>
                <div className={`${headerColors[idx % headerColors.length]} p-5 text-white uppercase text-center w-full`}>
                  <h3 className={`text-lg font-bold ${idx === 3 ? 'text-black' : 'text-white'}`}>{route.title}</h3>
                  <p className={`${idx === 3 ? 'text-black' : 'text-white'}`}>
                    {route.duration} <br />({route.minutes})
                  </p>
                </div>
                {/* <ul className="text-left text-base lg:text-lg py-5 px-10 list-disc font-bold">
                  {route.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul> */}
                <ul className="text-left text-primary-blue text-base py-5 px-10 list-disc font-bold uppercase">
                  {route.points.map((point, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: point }}></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col gap-5 md:flex-row md:justify-center md:gap-12 mt-5">
              <a href={t('header.whatsapp_url')} target="_blank" rel="noopener noreferrer" className="blue-lined-button">
                Get a Quote
              </a>
              <a href={`/${pdfFile.pdf}`} target="_blank" rel="noopener noreferrer" className="blue-lined-button">
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
