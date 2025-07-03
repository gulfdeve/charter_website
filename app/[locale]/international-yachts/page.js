// app/[locale]/international-yachts/page.js
"use client"
import MultiDatePicker from "@/app/components/MultiDatePicker";
import ClientSearchResults from "@/app/components/ClientSearchResults"; // New client component
import PriceRangeSlider from "@/app/components/PriceRangeSlider";
import LengthRangeSlider from "@/app/components/LengthRangeSlider";
import React, { useRef, useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';

export default function VesselsPage() {
  const searchParamsObj = {};
  const searchParams = useSearchParams();
  // Convert searchParams (URLSearchParams) to plain object
  if (searchParams && typeof searchParams.forEach === 'function') {
    searchParams.forEach((value, key) => {
      searchParamsObj[key] = value;
    });
  }

  // Additional diagnostic information
  // const renderInfo = {
  //   timestamp: new Date().toISOString(),
  //   vercel: process.env.VERCEL ? 'Yes' : 'No',
  //   searchParamsReceived: Object.keys(searchParams).length > 0 ? 'Yes' : 'No',
  //   searchParamsKeys: Object.keys(searchParams),
  //   nodeVersion: process.version,
  //   privateKeyAvailable: process.env.ANKOR_PRIVATE_KEY ? 'Yes' : 'No',
  //   keyIdAvailable: process.env.ANKOR_KEY_ID ? 'Yes' : 'No'
  // };
  
  // Determine if we have search parameters
  const hasParams = Object.keys(searchParamsObj).length > 0;
  // renderInfo.hasParamsValue = hasParams;

  // For controlled length range
  const [lengthValue, setLengthValue] = useState(() => {
    // Try to infer from minLength/maxLength in searchParamsObj
    if (searchParamsObj.minLength && searchParamsObj.maxLength) {
      return `${searchParamsObj.minLength}-${searchParamsObj.maxLength}`;
    } else if (searchParamsObj.maxLength === '19') {
      return '<20';
    } else {
      return '';
    }
  });

  useEffect(() => {
    // Sync hidden fields for minLength and maxLength with dropdown
    const form = document.getElementById('searchForm');
    if (!form) return;
    const minField = form.querySelector('input[name="minLength"]');
    const maxField = form.querySelector('input[name="maxLength"]');
    if (!minField || !maxField) return;
    if (lengthValue === '') {
      minField.value = '';
      maxField.value = '';
    } else if (lengthValue === '<20') {
      minField.value = '';
      maxField.value = '19';
    } else {
      const [min, max] = lengthValue.split('-');
      minField.value = min;
      maxField.value = max;
    }
  }, [lengthValue]);

  return (
    <div className="bg-white w-full h-full  md:mt-0 mb-36 nav-space">
      {/* Always show basic diagnostic info at the top */}
      {/* <div className="bg-blue-50 border border-blue-200 rounded-md p-4 m-4">
        <h2 className="text-lg font-bold mb-2">Page Render Diagnostics</h2>
        <pre className="bg-white p-2 rounded text-xs overflow-auto max-h-40">
          {JSON.stringify(renderInfo, null, 2)}
        </pre>
      </div> */}

      {/* Hero */}
      <div className="relative w-full h-[500px]">
        <img
          src="/international-yacht.jpeg"
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Header */}
      <div className="text-center my-8">
        <h1 className="font-extrabold mb-2 tracking-tight">HEADER</h1>
        <h3 className="font-light">SUB HEADER</h3>
      </div>

      {/* Search Form */}
      <section className="max-w-6xl mx-auto px-4 pb-8">
        <form
          id="searchForm"
          className="text-sm grid grid-cols-2 md:grid-cols-5 gap-4 items-end p-5 rounded-md bg-primary-blue-light"
        >
          {/* Always include these hidden fields for the required parameters */}
          <input type="hidden" name="currency" value="USD" />
          {/* Hidden fields for minLength and maxLength */}
          <input type="hidden" name="minLength" defaultValue={searchParamsObj.minLength || ''} />
          <input type="hidden" name="maxLength" defaultValue={searchParamsObj.maxLength || ''} />
          
          <div className="w-full mb-2 md:mb-0">
            <input
              name="name"
              placeholder="VESSEL NAME"
              defaultValue={searchParamsObj.name || ""}
              className="block w-full border border-gray-300 py-2 px-3 focus:outline-none"
            />
          </div>

          <div className="w-full mb-2 md:mb-0 relative">
            <select
              name="region"
              defaultValue={searchParamsObj.region || ""}
              className="block w-full border border-gray-300 py-2 px-3 pr-10 focus:outline-none appearance-none"
            >
              <option value="">CHOOSE DESTINATION</option>
              <option value="Africa">Africa</option>
              <option value="Antarctica">Antarctica</option>
              <option value="Arabian Gulf">Arabian Gulf</option>
              <option value="Australasia & South Pacific">Australasia & South Pacific</option>
              <option value="Caribbean">Caribbean</option>
              <option value="East Mediterranean">East Mediterranean</option>
              <option value="Indian Ocean & South East Asia">Indian Ocean & South East Asia</option>
              <option value="North America">North America</option>
              <option value="Northern Europe">Northern Europe</option>
              <option value="South & Central America">South & Central America</option>
              <option value="West Mediterranean">West Mediterranean</option>
            </select>
            <svg className="h-5 w-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </div>

          <div className="w-full mb-2 md:mb-0 relative">
            <select
              name="yachtType"
              defaultValue={searchParamsObj.yachtType || ""}
              className="block w-full border border-gray-300 py-2 px-3 pr-10 focus:outline-none appearance-none"
            >
              <option value="">CHOOSE TYPE OF BOAT</option>
              <option value="Gulet">Gulet</option>
              <option value="Sailing">Sailing</option>
              <option value="Catamaran">Catamaran</option>
              <option value="Motor">Motor</option>
              <option value="Power Catamaran">Power Catamaran</option>
              <option value="Classic">Classic</option>
              <option value="Expedition">Expedition</option>
              <option value="Sport fishing">Sport fishing</option>
            </select>
            <svg className="h-5 w-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </div>

          <div className="w-full mb-2 md:mb-0 relative">
            <select
              name="charterType"
              defaultValue={searchParamsObj.charterType || ""}
              className="block w-full border border-gray-300 py-2 px-3 pr-10 focus:outline-none appearance-none"
            >
              <option value="">CHOOSE TYPE OF CHARTER</option>
              <option value="Crewed">Crewed</option>
              <option value="Bareboat">Bareboat</option>
            </select>
            <svg className="h-5 w-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </div>

          <div className="w-full mb-2 md:mb-0">
            <MultiDatePicker
              name="rentalPeriod"
              defaultDates={searchParamsObj.rentalPeriod || []}
            />
          </div>

          {/* Length Dropdown replaced with LengthRangeSlider */}
          <LengthRangeSlider
            min={0}
            max={54}
            step={1}
            defaultValue={[
              Number(searchParamsObj.minLength) || 10,
              Number(searchParamsObj.maxLength) || 54
            ]}
          />

          <div className="w-full mb-2 md:mb-0 relative">
            <select
              name="sleeps"
              defaultValue={searchParamsObj.sleeps || ""}
              className="block w-full border border-gray-300 py-2 px-3 pr-10 focus:outline-none appearance-none"
            >
              <option value="">SLEEPS</option>
              {Array.from({ length: 20 }, (_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
            <svg className="h-5 w-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </div>

          {/* Price Range Dropdown with Slider */}
          {/* <div className="w-full mb-2 md:mb-0">
            <PriceRangeSlider
              min={0}
              max={250000}
              step={1000}
              defaultValue={[
                Number(searchParamsObj.priceMin) || 0,
                Number(searchParamsObj.priceMax) || 250000
              ]}
            />
          </div> */}

          <button
            type="submit"
            className="col-span-2 bg-primary-blue text-white font-semibold py-2 px-6 rounded-md uppercase"
          >
            SEARCH
          </button>
        </form>
      </section>

      {/* Client-side component to handle API calls */}
      <ClientSearchResults searchParams={searchParamsObj} hasParams={hasParams} />
    </div>
  );
}