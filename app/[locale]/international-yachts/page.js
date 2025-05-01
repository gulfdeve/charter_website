// app/[locale]/international-yachts/page.js
import jwt from "jsonwebtoken";
import MultiDatePicker from "@/app/components/MultiDatePicker";
import SearchResultsClient from "@/app/components/SearchResultsClient";

// --- fetchVessels: builds query with required + optional params ---
async function fetchVessels(searchParams) {
  // 1) JWT setup
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
        kid: "jSZNvbnPK03KXEEo0-bJw4XPF1z68eW_OpHFW_9XvLY",
      },
    }
  );

  // 2) Prepare params object
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

  // only append others if they’re not null/undefined/empty-string
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

  const res = await fetch(url, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error(`API Error: ${res.statusText}`);
  return res.json();
}

// --- Page Component ---
export default async function VesselsPage({ searchParams }) {
  // 1) Fetch data if any filter/search has run
  const hasParams = Object.keys(searchParams).length > 0;
  let data = null;
  if (hasParams) {
    try {
      data = await fetchVessels(searchParams);
    } catch (err) {
      console.error("Error fetching vessels:", err);
    }
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
      {hasParams && (
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
