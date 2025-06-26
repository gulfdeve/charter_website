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
  const totalPages = Math.ceil(hits.length / pageSize);
  const paginatedHits = hits.slice((currentPage - 1) * pageSize, currentPage * pageSize);

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
        {hasParams && !loading && data && (
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