import fs from "fs";
import jwt from "jsonwebtoken";
import MultiDatePicker from "@/app/components/MultiDatePicker";
import { Link } from "@/app/i18n/routing";
import SearchResultsClient from "@/app/components/SearchResultsClient";

// --------------------
// 1) fetchVessels function
// --------------------
async function fetchVessels(searchParams) {
  
  console.log("Received searchParams:", searchParams);

  // --- Generate JWT Token ---
  // const privateKey = fs.readFileSync('private_key.pem', 'utf8');
	const privateKey = process.env.ANKOR_PRIVATE_KEY.replace(/\\n/g, '\n');
  const kid = "jSZNvbnPK03KXEEo0-bJw4XPF1z68eW_OpHFW_9XvLY";
  const companyUri = "c::19468221194";

  const issuedAt = Math.floor(Date.now() / 1000);
  const expiryTime = issuedAt + 3600; // Valid for 1 hour

  const payload = {
    scopes: ["website:read:*"],
    iss: companyUri,
    aud: "ankor.io",
    sub: companyUri,
    iat: issuedAt,
    exp: expiryTime,
  };

  const token = jwt.sign(payload, privateKey, {
    algorithm: "RS256",
    header: { alg: "RS256", typ: "JWT", kid },
  });
  console.log("Generated JWT Token:", token);

  // --- Build Query Params ---
  const queryObject = {
    name: searchParams.name || "",
    charterType: searchParams.charterType || "",
    minLength: searchParams.minLength || "",
    maxLength: searchParams.maxLength || "",
    sleeps: searchParams.sleeps || "",
    yachtType: searchParams.yachtType || "",
    region: searchParams.region || "",
    currency: "USD",
    priceMin: 1000,
    priceMax: 5000,
  };

  // Remove empty keys
  Object.keys(queryObject).forEach(
    (key) => !queryObject[key] && delete queryObject[key]
  );

  const queryString = new URLSearchParams(queryObject).toString();
  const url = `https://api.ankor.io/website/search?${queryString}`;

  const response = await fetch(url, {
    method: "GET",
    headers: { Accept: "application/json", Authorization: `Bearer ${token}` },
  });

  if (!response.ok) throw new Error(`API Error: ${response.statusText}`);

  return response.json();
}

// --------------------
// 2) Page Component
// --------------------

export default async function VesselsPage({ searchParams }) {
  
  let data = null;
  const hasAnyParam = Object.keys(searchParams || {}).length > 0;

  if (hasAnyParam) {
    try {
      data = await fetchVessels(searchParams);
    } catch (error) {
      console.error("Error fetching vessels:", error);
    }
  }

  // --------- Pagination Logic ----------
  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;
  const pageSize = 20;
  let paginatedHits = [];
  let totalPages = 1;
  if (data && data.hits) {
    totalPages = Math.ceil(data.hits.length / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    paginatedHits = data.hits.slice(startIndex, endIndex);
  }
  
  // Build page link function must be declared before usage
  const buildPageLink = (pageNumber) => {
    const cleanParams = Object.entries(searchParams).reduce((acc, [key, value]) => {
      if (typeof value !== "symbol") {
        acc[key] = value;
      }
      return acc;
    }, {});
    cleanParams.page = pageNumber;
    return `?${new URLSearchParams(cleanParams).toString()}`;
  };

  // Pre-compute pagination links
  const previousPageLink = currentPage > 1 ? buildPageLink(currentPage - 1) : null;
  const nextPageLink = currentPage < totalPages ? buildPageLink(currentPage + 1) : null;

  return (
    <div className="bg-white w-full h-full mt-14 md:mt-0 mb-36 nav-space">
      {/* --- HERO IMAGE (full-width at top) --- */}
      <div className="relative w-full h-[500px]">
        <img
          src="/international-yacht.jpeg"
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* --- HEADER BELOW IMAGE --- */}
      <div className="text-center my-8">
        <h1 className=" font-extrabold mb-2 tracking-tight">HEADER</h1>
        <h3 className=" font-light">SUB HEADER</h3>
      </div>

      {/* --- SEARCH FORM --- */}
      <section className="max-w-6xl mx-auto px-4 pb-8">
        <form method="GET" className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
          {/* 1) VESSEL NAME */}
          <div className="relative">
            <input
              name="name"
              placeholder="VESSEL NAME"
              defaultValue={searchParams.name || ""}
              className="block w-full border border-gray-300 rounded-none py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* 2) DESTINATION */}
          <div className="relative">
            <select
              name="region"
              defaultValue={searchParams.region || ""}
              className="block w-full appearance-none border border-gray-300 rounded-none py-2 px-3 pr-10 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" >
                CHOOSE DESTINATION
              </option>
              <option value="Africa">Africa</option>
              <option value="Antartica">Antartica</option>
              <option value="Arabian Gulf">Arabian Gulf</option>
              <option value="Australasia & South Pacific">Australasia & South Pacific</option>
              <option value="Caribbean">Caribbean</option>
              <option value="East Mediterranean">East Mediterranean</option>
              <option value="Indian Ocean & South East Asia">Indian Ocean & South East Asia </option>
              <option value="North America">North America</option>
              <option value="Northern Europe">Northern Europe</option>
              <option value="South & Central America">South & Central America</option>
              <option value="West Mediterranean">West Mediterranean</option>
           
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center bg-primary-blue px-2">
              <svg
                className="h-4 w-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>

          {/* 3) TYPE OF BOAT */}
          <div className="relative">
            <select
              name="yachtType"
              defaultValue={searchParams.yachtType || ""}
              className="block w-full appearance-none border border-gray-300 rounded-none py-2 px-3 pr-10 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value=""  >
                CHOOSE TYPE OF BOAT
              </option>
              <option value="Sailboat">Gulet</option>
              <option value="Motor ">Motor </option>
              <option value="Catamaran">Catamaran</option>
              <option value="Sailing">Sailing</option>
              <option value="Classic">Classic</option>
              <option value="Power Catamaran">Power Catamaran</option>
              <option value="Expedition">Expedition</option>
              <option value="Classic">Classic</option>
              <option value="Sport fishing">Sport Fishing</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center bg-primary-blue px-2">
              <svg
                className="h-4 w-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>

          {/* 4) TYPE OF CHARTER */}
          <div className="relative">
            <select
              name="charterType"
              defaultValue={searchParams.charterType || ""}
              className="block w-full appearance-none border border-gray-300 rounded-none py-2 px-3 pr-10 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled hidden>
                CHOOSE TYPE OF CHARTER
              </option>
              <option value="Crewed">Crewed</option>
              <option value="Bareboat">Bareboat</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center bg-primary-blue px-2">
              <svg
                className="h-4 w-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>

          {/* 5) RENTAL PERIOD (Multi‑Date Picker) */}
          <div>
            <MultiDatePicker
              name="rentalPeriod"
              defaultDates={searchParams.rentalPeriod || []}
            />
          </div>

          {/* Row 2 */}
          {/* 6) MIN LENGTH */}
          <div className="relative">
            <input
              name="minLength"
              placeholder="MIN LENGTH"
              defaultValue={searchParams.minLength || ""}
              className="block w-full border border-gray-300 rounded-none py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* 7) MAX LENGTH */}
          <div className="relative">
            <input
              name="maxLength"
              placeholder="MAX LENGTH"
              defaultValue={searchParams.maxLength || ""}
              className="block w-full border border-gray-300 rounded-none py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* 8) SLEEPS */}
          <div className="relative">
            <input
              name="sleeps"
              placeholder="SLEEPS"
              defaultValue={searchParams.sleeps || ""}
              className="block w-full border border-gray-300 rounded-none py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* 9) SEARCH BUTTON */}
          <div className="col-span-2">
            <button
              type="submit"
              className="mt-4 md:mt-0 bg-primary-blue hover:bg-blue-700 text-white font-semibold rounded-none px-6 py-2 uppercase transition shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            >
              SEARCH
            </button>
          </div>
        </form>
      </section>

      {/* --- SEARCH RESULTS --- */}
      {hasAnyParam && (
        <SearchResultsClient
          paginatedHits={paginatedHits}
          currentPage={currentPage}
          totalPages={totalPages}
          previousPageLink={previousPageLink}
          nextPageLink={nextPageLink}
        
        />
      )}
    </div>
  );
}
