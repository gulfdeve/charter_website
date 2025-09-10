'use client';

import { useState, useEffect, useRef } from 'react';
import SearchResultsClient from "@/app/components/SearchResultsClient";

export default function ClientSearchResults({ searchParams: initialSearchParams, hasParams: initialHasParams }) {
  // State for API data and loading status
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState(initialSearchParams);
  const [hasParams, setHasParams] = useState(initialHasParams);
  const [currentPage, setCurrentPage] = useState(1); // Separate page state
  const resultsContainerRef = useRef(null); // Ref for scrolling
  const [brandFilter, setBrandFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('');
  const [cabinsFilter, setCabinsFilter] = useState('');

  // Effect to handle form submission
  useEffect(() => {
    const form = document.getElementById('searchForm');
    if (!form) return;

    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      setCurrentPage(1); // Reset to first page on new search
      
      // Get form data
      const formData = new FormData(form);
      const params = {};
      
      // Convert FormData to object
      for (const [key, value] of formData.entries()) {
        if (value) {
          params[key] = value;
        }
      }
      
      // Ensure required parameters
      if (!params.currency) params.currency = 'USD';
      if (!params.priceMin) params.priceMin = '1000';
      if (!params.priceMax) params.priceMax = '5000';
      
      // Update search params and trigger search
      setSearchParams(params);
      setHasParams(true);
      
      // Update URL without page reload
      const url = new URL(window.location.pathname, window.location.origin);
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, value);
      }
      window.history.pushState({}, '', url.toString());
    };

    form.addEventListener('submit', handleSubmit);
    return () => form.removeEventListener('submit', handleSubmit);
  }, []);

  // Effect to fetch data when search parameters (except page) change
  useEffect(() => {
    if (!hasParams) return;
    setCurrentPage(1); // Reset to first page on new search
    fetchVessels();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify({ ...searchParams, page: undefined })]); // Ignore page param

  useEffect(() => {
  setCurrentPage(1);
  fetchVessels();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [JSON.stringify({ ...searchParams, page: undefined })]);
  // Function to fetch vessels from the API via our proxy
  async function fetchVessels() {
    setLoading(true);
    setError(null);
    
    try {
      // Build the proxy URL with search parameters (excluding page)
      const qp = new URLSearchParams();
      for (const [key, value] of Object.entries(searchParams)) {
        if (key === 'page') continue; // Don't send page param to API
        if (value) {
          qp.append(key, value);
        }
      }
      if (!qp.has('currency')) qp.append('currency', 'USD');
      if (!qp.has('priceMin')) qp.append('priceMin', '1000');
      if (!qp.has('priceMax')) qp.append('priceMax', '5000');
      const proxyUrl = `/api/ankor-proxy?${qp.toString()}`;
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000);
      try {
        const response = await fetch(proxyUrl, {
          signal: controller.signal
        });
        clearTimeout(timeoutId);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || `API Error: ${response.statusText}`);
        }
        const responseData = await response.json();
        setData(responseData);
      } catch (fetchError) {
        clearTimeout(timeoutId);
        if (fetchError.name === 'AbortError') {
          throw new Error('Request timed out after 30 seconds');
        }
        throw fetchError;
      }
    } catch (err) {
      setError(err.message || 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  }

  // Calculate pagination from data
  const pageSize = 20;
  const hits = data?.hits || [];
  // Get unique brands and years from hits
  const uniqueBrands = Array.from(new Set(hits.map(h => h.make).filter(Boolean)));
  const uniqueYears = Array.from(new Set(hits.map(h => h.builtYear).filter(Boolean))).sort((a, b) => b - a);
  const uniqueCabins = Array.from(new Set(hits.map(h => h.cabins).filter(Boolean))).sort((a, b) => a - b);
  // Filter hits by brand and year
  const filteredHits = hits.filter(h => {
    let brandMatch = true;
    let yearMatch = true;
    let cabinsMatch = true;
    if (brandFilter) brandMatch = h.make === brandFilter;
    if (yearFilter) yearMatch = String(h.builtYear) === String(yearFilter);
    if (cabinsFilter) cabinsMatch = String(h.cabins) === String(cabinsFilter);
    return brandMatch && yearMatch && cabinsMatch;
  });
  const totalPages = Math.ceil(filteredHits.length / pageSize);
  const paginatedHits = filteredHits.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  // Only show available cabins in the dropdown (after brand/year filter)
  const availableCabins = Array.from(new Set(filteredHits.map(h => h.cabins).filter(Boolean))).sort((a, b) => a - b);

  // Function to handle page change
  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);

    // Scroll to top of results container
    if (resultsContainerRef.current) {
      resultsContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    // Update URL without page reload (keep search params, update page param)
    const url = new URL(window.location.pathname, window.location.origin);
    for (const [key, value] of Object.entries(searchParams)) {
      if (key === 'page') continue;
      url.searchParams.set(key, value);
    }
    url.searchParams.set('page', pageNum);
    window.history.pushState({}, '', url.toString());
  };

  return (
    <>
      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <div className="flex items-center space-x-4">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-blue"></div>
              <div className="text-lg font-semibold">Searching for yachts...</div>
            </div>
          </div>
        </div>
      )}

      {/* Brand and Year Filters (only show if there are results) */}
      {!loading && filteredHits.length > 0 && (
        <div className="grid grid-cols-1 xs:grid-cols-3 gap-2 sm:gap-4 justify-center items-stretch my-4 sm:my-6 w-full max-w-2xl mx-auto px-4">
          {uniqueBrands.length > 1 && (
            <div className="relative w-full flex flex-col">
              <label className="mb-1 font-semibold text-sm sm:text-base">Brand:</label>
              <div className="relative">
                <select
                  value={brandFilter}
                  onChange={e => { setBrandFilter(e.target.value); setCurrentPage(1); }}
                  className="border border-gray-300 py-2 px-3 pr-10 appearance-none rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue-light-2 focus:border-primary-blue-light-2 w-full text-sm sm:text-base"
                >
                  <option value="">All Brands</option>
                  {uniqueBrands.map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
                <svg className="h-5 w-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          )}
          {uniqueYears.length > 1 && (
            <div className="relative w-full flex flex-col">
              <label className="mb-1 font-semibold text-sm sm:text-base">Year:</label>
              <div className="relative">
                <select
                  value={yearFilter}
                  onChange={e => { setYearFilter(e.target.value); setCurrentPage(1); }}
                  className="border border-gray-300 py-2 px-3 pr-10 appearance-none rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue-light-2 focus:border-primary-blue-light-2 w-full text-sm sm:text-base"
                >
                  <option value="">All Years</option>
                  {uniqueYears.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
                <svg className="h-5 w-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          )}
          {uniqueCabins.length > 1 && (
            <div className="relative w-full flex flex-col">
              <label className="mb-1 font-semibold text-sm sm:text-base">Cabins:</label>
              <div className="relative">
                <select
                  value={cabinsFilter}
                  onChange={e => { setCabinsFilter(e.target.value); setCurrentPage(1); }}
                  className="border border-gray-300 py-2 px-3 pr-10 appearance-none rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue-light-2 focus:border-primary-blue-light-2 w-full text-sm sm:text-base"
                >
                  <option value="">All Cabins</option>
                  {availableCabins.map(cabins => (
                    <option key={cabins} value={cabins}>{cabins}</option>
                  ))}
                </select>
                <svg className="h-5 w-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          )}
        </div>
      )}

      {/* API Diagnostics - show after search attempted */}
      {/* {hasParams && (
        <div className="bg-gray-100 border border-gray-300 rounded-md p-4 m-4">
          <h2 className="text-lg font-bold mb-2">API Diagnostic Information</h2>
          
          {loading && (
            <div className="bg-blue-100 p-3 mb-4 rounded border border-blue-300">
              <div className="flex items-center">
                <div className="mr-3">
                  <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500"></div>
                </div>
                <p className="font-semibold text-blue-700">Loading... Contacting Ankor API</p>
              </div>
              <p className="mt-2 text-sm">This might take a few moments</p>
            </div>
          )}
          
          {!loading && data && (
            <div className="bg-green-100 p-3 mb-4 rounded border border-green-300">
              <p className="font-bold text-green-700 mb-2">✅ Search successful! API is working.</p>
              <p>Found {hits.length} yachts matching your criteria!</p>
            </div>
          )}
          
          {!loading && error && (
            <>
              <div className="bg-red-100 p-3 mb-4 rounded border border-red-300">
                <p className="font-bold text-red-700 mb-2">❌ Search failed!</p>
                <p className="mb-2">Error: {error}</p>
                {debugInfo.apiDetails && (
                  <pre className="bg-gray-200 p-2 rounded text-xs overflow-auto mb-2">
                    {JSON.stringify(debugInfo.apiDetails, null, 2)}
                  </pre>
                )}
              </div>
              
              <button
                onClick={fetchVessels}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Try Again
              </button>
            </>
          )}
          
          <div className="text-sm mt-4">
            <details>
              <summary className="cursor-pointer">Debug Information</summary>
              <pre className="bg-white p-2 rounded text-xs overflow-auto mt-2">
                {JSON.stringify(debugInfo, null, 2)}
              </pre>
            </details>
          </div>
        </div>
      )} */}

      {/* Results */}
      <div ref={resultsContainerRef}>
        {!loading && data && (
          <SearchResultsClient
            paginatedHits={paginatedHits}
            currentPage={currentPage}
            totalPages={totalPages}
            previousPageLink={currentPage > 1 ? `#page-${currentPage - 1}` : null}
            nextPageLink={currentPage < totalPages ? `#page-${currentPage + 1}` : null}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </>
  );
}