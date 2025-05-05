'use client';

import { useState, useEffect } from 'react';
import SearchResultsClient from "@/app/components/SearchResultsClient"; // Your existing component

export default function ClientSearchResults({ searchParams, hasParams }) {
  // State for API data and loading status
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [debugInfo, setDebugInfo] = useState({
    apiCalled: false,
    apiStatus: null,
    apiDetails: null,
    timestamp: new Date().toISOString()
  });

  // Effect to fetch data when search parameters change
  useEffect(() => {
    // Only run search if there are parameters
    if (!hasParams) return;
    
    // Call our fetch function
    fetchVessels();
  }, [searchParams, hasParams]);

  // Function to fetch vessels from the API via our proxy
  async function fetchVessels() {
    setLoading(true);
    setError(null);
    
    try {
      console.log("🔍 Starting search with parameters:", searchParams);
      
      // Build the proxy URL with search parameters
      const qp = new URLSearchParams();
      
      // Add all search parameters
      for (const [key, value] of Object.entries(searchParams)) {
        if (value) {
          qp.append(key, value);
        }
      }
      
      // Ensure required parameters
      if (!qp.has('currency')) qp.append('currency', 'USD');
      if (!qp.has('priceMin')) qp.append('priceMin', '1000');
      if (!qp.has('priceMax')) qp.append('priceMax', '5000');
      
      // Construct the proxy URL
      const proxyUrl = `/api/ankor-proxy?${qp.toString()}`;
      
      setDebugInfo(prev => ({ 
        ...prev, 
        apiCalled: true,
        proxyUrl: proxyUrl,
        fetchStartTime: new Date().toISOString() 
      }));
      
      console.log("🛰️ Fetching data via proxy:", proxyUrl);
      
      // Make the request to our proxy
      const response = await fetch(proxyUrl);
      
      setDebugInfo(prev => ({ 
        ...prev, 
        apiStatus: `${response.status} ${response.statusText}`,
        fetchEndTime: new Date().toISOString()
      }));
      
      // Handle error responses
      if (!response.ok) {
        const errorData = await response.json();
        setDebugInfo(prev => ({ 
          ...prev, 
          apiDetails: errorData
        }));
        throw new Error(errorData.error || `API Error: ${response.statusText}`);
      }
      
      // Parse the JSON response
      const responseData = await response.json();
      console.log("✅ API request successful!");
      
      // Update state with the data
      setData(responseData);
    } catch (err) {
      console.error("❌ Error fetching vessels:", err);
      setError(err.message || 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  }

  // Calculate pagination from data
  const pageSize = 20;
  const currentPage = parseInt(searchParams.page || "1", 10);
  const hits = data?.hits || [];
  const totalPages = Math.ceil(hits.length / pageSize);
  const startIdx = (currentPage - 1) * pageSize;
  const paginatedHits = hits.slice(startIdx, startIdx + pageSize);

  // Function to build page links
  const buildPageLink = (pageNum) => {
    // take only string keys from searchParams, drop empty
    const entries = Object.entries(searchParams)
      .filter(([k, v]) => typeof v === "string" && v !== "")
      .map(([k, v]) => [k, v]);

    // add/replace page
    const qp = new URLSearchParams(entries);
    qp.set("page", pageNum);
    return `?${qp.toString()}`;
  };

  return (
    <>
      {/* API Diagnostics - show after search attempted */}
      {hasParams && (
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
      )}

      {/* Results */}
      {hasParams && !loading && data && (
        <SearchResultsClient
          paginatedHits={paginatedHits}
          currentPage={currentPage}
          totalPages={totalPages}
          previousPageLink={currentPage > 1 ? buildPageLink(currentPage - 1) : null}
          nextPageLink={currentPage < totalPages ? buildPageLink(currentPage + 1) : null}
        />
      )}
    </>
  );
}