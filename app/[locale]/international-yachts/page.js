// app/[locale]/international-yachts/page.js
import jwt from "jsonwebtoken";
import MultiDatePicker from "@/app/components/MultiDatePicker";
import SearchResultsClient from "@/app/components/SearchResultsClient";

// --- fetchVessels: builds query with required + optional params ---
async function fetchVessels(searchParams) {
  // Store debug information
  let tokenUsed = '';
  let responseStatus = '';
  let responseDetails = '';
  
  try {
    // 1) JWT setup
    console.log("🔑 Setting up JWT authentication...");
    const rawKey = process.env.ANKOR_PRIVATE_KEY;
    const privateKey = rawKey.replace(/\\n/g, "\n");
    const now = Math.floor(Date.now() / 1000);
    
    // Log key identification
    console.log("🔐 Key ID being used: ", process.env.ANKOR_KEY_ID || "Not set");

    const token = jwt.sign(
      {
        scopes: ["website:read:*"],
        iss: "c::19468221194",
        aud: "ankor.io",
        sub: "c::19468221194",
        iat: now,
        exp: now + 3600,
      },
      privateKey,
      {
        algorithm: "RS256",
        header: {
          alg: "RS256",
          typ: "JWT",
          kid: process.env.ANKOR_KEY_ID || "jSZNvbnPK03KXEEo0-bJw4XPF1z68eW_OpHFW_9XvLY",
        },
      }
    );

    // Save token for inspection
    tokenUsed = token;
    console.log("🎫 Generated token: ", token.substring(0, 50) + "...");

    // 2) Prepare params object
    console.log("📝 Preparing request parameters...");
    const params = {
      currency: "USD",      // always include
      priceMin: 1000,       // always include
      priceMax: 5000,       // always include

      // optional
      name: searchParams.name,
      region: searchParams.region,
      yachtType: searchParams.yachtType,
      charterType: searchParams.charterType,
      minLength: searchParams.minLength,
      maxLength: searchParams.maxLength,
      sleeps: searchParams.sleeps,
      rentalPeriod: searchParams.rentalPeriod, // array
    };

    // 3) Build the query string
    const qp = new URLSearchParams();
    // mandatory three
    qp.append("currency", params.currency);
    qp.append("priceMin", params.priceMin);
    qp.append("priceMax", params.priceMax);

    // only append others if they're not null/undefined/empty-string
    for (const [key, value] of Object.entries(params)) {
      if (
        ["currency", "priceMin", "priceMax"].includes(key) ||
        value == null ||
        (typeof value === "string" && value.trim() === "")
      ) {
        continue;
      }

      if (Array.isArray(value)) {
        value.forEach((v) => qp.append(key, v));
      } else {
        qp.append(key, value);
      }
    }

    const url = `https://api.ankor.io/website/search?${qp.toString()}`;
    console.log("🛰️  Fetching:", url);

    // 4) Make the API request
    console.log("📡 Sending API request with Authorization: Bearer " + token.substring(0, 20) + "...");
    
    const res = await fetch(url, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    
    // Store response status
    responseStatus = `${res.status} ${res.statusText}`;
    console.log("📨 Received API response:", responseStatus);
    
    if (!res.ok) {
      const errorText = await res.text();
      responseDetails = errorText;
      console.error("❌ API Error:", res.status, errorText);
      throw new Error(`API Error: ${res.statusText}`);
    }
    
    // Success! Parse the JSON response
    console.log("✅ API request successful!");
    const data = await res.json();
    return data;
  } catch (error) {
    // Add debug info to the error object
    error.tokenUsed = tokenUsed;
    error.responseStatus = responseStatus;
    error.responseDetails = responseDetails;
    throw error;
  }
}

// --- Page Component ---
export default async function VesselsPage({ searchParams }) {
  // States for tracking debug info
  let token = null;
  let apiStatus = null;
  let apiDetails = null;
  let searchSuccessful = false;
  
  // 1) Fetch data if any filter/search has run
  const hasParams = Object.keys(searchParams).length > 0;
  let data = null;
  if (hasParams) {
    try {
      console.log("🔍 Starting search with parameters:", searchParams);
      data = await fetchVessels(searchParams);
      
      // If we get here, the search was successful
      searchSuccessful = true;
      apiStatus = "Success! API call completed without errors.";
      token = await generateTokenForDisplay();  // Generate a fresh token for display
      
    } catch (err) {
      console.error("❌ Error fetching vessels:", err);
      
      // Extract debug info from the error
      token = err.tokenUsed || "No token captured";
      apiStatus = err.responseStatus || "Unknown error";
      apiDetails = err.responseDetails || err.message;
    }
  } else {
    console.log("ℹ️ No search parameters provided yet");
  }

  // 2) Pagination
  const pageSize = 20;
  const currentPage = parseInt(searchParams.page || "1", 10);
  const hits = data?.hits || [];
  const totalPages = Math.ceil(hits.length / pageSize);
  const startIdx = (currentPage - 1) * pageSize;
  const paginatedHits = hits.slice(startIdx, startIdx + pageSize);

  // 3) Build page links without spreading searchParams
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
    <div className="bg-white w-full h-full mt-14 md:mt-0 mb-36 nav-space">
      {/* Debug Panel */}
      {hasParams && (
        <div className="bg-gray-100 border border-gray-300 rounded-md p-4 m-4">
          <h2 className="text-lg font-bold mb-2">API Diagnostic Information</h2>
          
          {searchSuccessful ? (
            <div className="bg-green-100 p-3 mb-4 rounded border border-green-300">
              <p className="font-bold text-green-700 mb-2">✅ Search successful! API is working.</p>
              <p className="mb-2">Here's the token that was used:</p>
              <textarea
                className="w-full h-40 font-mono text-xs p-2 border border-gray-300 rounded"
                readOnly
                value={token}
              ></textarea>
              <p className="text-sm mt-2">
                ✨ Key ID: {process.env.ANKOR_KEY_ID || "jSZNvbnPK03KXEEo0-bJw4XPF1z68eW_OpHFW_9XvLY"}
              </p>
            </div>
          ) : (
            <>
              <div className="bg-red-100 p-3 mb-4 rounded border border-red-300">
                <p className="font-bold text-red-700 mb-2">❌ Search failed!</p>
                <p className="mb-2">API Response: {apiStatus}</p>
                {apiDetails && (
                  <pre className="bg-gray-200 p-2 rounded text-xs overflow-auto mb-2">
                    {apiDetails}
                  </pre>
                )}
              </div>
              
              <div className="mb-4">
                <p className="font-semibold mb-2">Token that was used:</p>
                <textarea
                  className="w-full h-40 font-mono text-xs p-2 border border-gray-300 rounded"
                  readOnly
                  value={token}
                ></textarea>
              </div>
            </>
          )}
          
          <div className="text-sm mt-4">
            <p><strong>Environment:</strong> {process.env.VERCEL ? 'Vercel Production' : 'Local Development'}</p>
            <p><strong>Key ID:</strong> {process.env.ANKOR_KEY_ID || "Not set (using default)"}</p>
            <p><strong>Private Key Available:</strong> {process.env.ANKOR_PRIVATE_KEY ? 'Yes' : 'No'}</p>
          </div>
        </div>
      )}

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
          method="GET"
          className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end"
        >
          <input
            name="name"
            placeholder="VESSEL NAME"
            defaultValue={searchParams.name || ""}
            className="block w-full border border-gray-300 py-2 px-3 focus:outline-none"
          />

          <select
            name="region"
            defaultValue={searchParams.region || ""}
            className="block w-full border border-gray-300 py-2 px-3 focus:outline-none"
          >
            <option value="">CHOOSE DESTINATION</option>
            <option value="Africa">Africa</option>
            {/* … */}
          </select>

          <select
            name="yachtType"
            defaultValue={searchParams.yachtType || ""}
            className="block w-full border border-gray-300 py-2 px-3 focus:outline-none"
          >
            <option value="">CHOOSE TYPE OF BOAT</option>
            <option value="Sailboat">Gulet</option>
            {/* … */}
          </select>

          <select
            name="charterType"
            defaultValue={searchParams.charterType || ""}
            className="block w-full border border-gray-300 py-2 px-3 focus:outline-none"
          >
            <option value="">CHOOSE TYPE OF CHARTER</option>
            <option value="Crewed">Crewed</option>
            <option value="Bareboat">Bareboat</option>
          </select>

          <MultiDatePicker
            name="rentalPeriod"
            defaultDates={searchParams.rentalPeriod || []}
          />

          <input
            name="minLength"
            placeholder="MIN LENGTH"
            defaultValue={searchParams.minLength || ""}
            className="block w-full border border-gray-300 py-2 px-3 focus:outline-none"
          />

          <input
            name="maxLength"
            placeholder="MAX LENGTH"
            defaultValue={searchParams.maxLength || ""}
            className="block w-full border border-gray-300 py-2 px-3 focus:outline-none"
          />

          <input
            name="sleeps"
            placeholder="SLEEPS"
            defaultValue={searchParams.sleeps || ""}
            className="block w-full border border-gray-300 py-2 px-3 focus:outline-none"
          />

          <button
            type="submit"
            className="col-span-2 bg-primary-blue text-white font-semibold py-2 px-6 uppercase"
          >
            SEARCH
          </button>
        </form>
      </section>

      {/* Results */}
      {hasParams && searchSuccessful && (
        <SearchResultsClient
          paginatedHits={paginatedHits}
          currentPage={currentPage}
          totalPages={totalPages}
          previousPageLink={currentPage > 1 ? buildPageLink(currentPage - 1) : null}
          nextPageLink={currentPage < totalPages ? buildPageLink(currentPage + 1) : null}
        />
      )}
    </div>
  );
}

// Helper function to generate a token for display
async function generateTokenForDisplay() {
  try {
    const rawKey = process.env.ANKOR_PRIVATE_KEY;
    const privateKey = rawKey.replace(/\\n/g, "\n");
    const now = Math.floor(Date.now() / 1000);
    
    const token = jwt.sign(
      {
        scopes: ["website:read:*"],
        iss: "c::19468221194",
        aud: "ankor.io",
        sub: "c::19468221194",
        iat: now,
        exp: now + 3600,
      },
      privateKey,
      {
        algorithm: "RS256",
        header: {
          alg: "RS256",
          typ: "JWT",
          kid: process.env.ANKOR_KEY_ID || "jSZNvbnPK03KXEEo0-bJw4XPF1z68eW_OpHFW_9XvLY",
        },
      }
    );
    
    return token;
  } catch (error) {
    console.error("Error generating token for display:", error);
    return "Error generating token: " + error.message;
  }
}