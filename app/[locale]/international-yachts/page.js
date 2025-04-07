import fs from "fs";
import jwt from "jsonwebtoken";
import { FaCalendarAlt } from "react-icons/fa";
// Import the client component
import MultiDatePicker from "@/app/components/MultiDatePicker";
import Link from "next/link";
// --------------------
// 1) fetchVessels function
// --------------------
async function fetchVessels(searchParams) {
  console.log("Received searchParams:", searchParams);

  // --- Generate JWT Token ---
  const privateKey = fs.readFileSync("private_key.pem", "utf8");
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
  console.log(token);
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

  return (
    <div className="bg-white w-full h-full mt-14 md:mt-0">
      {/* --- HERO IMAGE (full-width at top) --- */}
      <div className="relative w-full h-[500px]">
        <img
          src="./international-yacht.jpeg"
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* --- HEADER BELOW IMAGE --- */}
      <div className="text-center my-8">
        <h1 className="text-4xl font-extrabold mb-2 tracking-tight">HEADER</h1>
        <h2 className="text-xl font-light">SUB HEADER</h2>
      </div>

      {/* --- SEARCH FORM --- */}
      <section className="max-w-6xl mx-auto px-4 pb-8">
        <form
          method="GET"
          className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end"
        >
          {/* Row 1 */}
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
              <option value="" disabled hidden>
                DESTINATION
              </option>
              <option value="Abacos">Abacos</option>
              <option value="Abu Dhabi">Abu Dhabi</option>
              <option value="Aegean Sea">Aegean Sea</option>
              <option value="Algarve">Algarve</option>
              <option value="America">America</option>
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
              <option value="" disabled hidden>
                TYPE OF BOAT
              </option>
              <option value="Sailboat">Sailboat</option>
              <option value="Motor Yacht">Motor Yacht</option>
              <option value="Catamaran">Catamaran</option>
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
                TYPE OF CHARTER
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
        <div className="mt-12 flex flex-col items-center justify-center px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Search Results
          </h2>
          {data && data.hits && data.hits.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-8">
              {data.hits.map((vessel, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden px-2 max-w-md w-full"
                >
                  {/* Image and clickable link */}
                  <Link
                    href={`/yachts-for-sale-dubai/${
                      vessel.slug || "some-default"
                    }`}
                  >
                    <img
                      src={
                        vessel.hero
                          ? `https://radar.ankor.io${vessel.hero.replace(
                              "{imageVariant}",
                              "2560w"
                            )}`
                          : "/fallback-image.jpg"
                      }
                      alt={vessel.name || "Yacht Image"}
                      className="w-full object-cover"
                    />
                  </Link>

                  {/* Card content */}
                  <div className="p-6">
                    <Link
                      href={`/yachts-for-sale-dubai/${
                        vessel.slug || "some-default"
                      }`}
                    >
                      <h2 className="text-2xl font-bold text-navy-900 mb-4">
                        {vessel.name || "Unnamed Yacht"}
                      </h2>
                    </Link>

                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div className="border-b-2 border-gray-200">
                        <p className="text-[#125589] font-medium mb-1 ">
                          Build:
                        </p>
                        <p className="text-gray-900 font-bold ">
                          {vessel.make || "N/A"}
                        </p>
                      </div>
                      <div className="border-b-2 border-gray-200">
                        <p className="text-[#125589] font-medium mb-1 ">
                          Cabins:
                        </p>
                        <p className="text-gray-900 font-bold ">
                          {vessel.cabins || "N/A"}
                        </p>
                      </div>
                      <div className="border-b-2 border-gray-200">
                        <p className="text-[#125589] font-medium mb-1 ">
                          Length:
                        </p>
                        <p className="text-gray-900 font-bold ">
                          {vessel.length || "N/A"}
                        </p>
                      </div>
                      <div className="border-b-2 border-gray-200">
                        <p className="text-[#125589] font-medium mb-1 ">
                          Guests:
                        </p>
                        <p className="text-gray-900 font-bold ">
                          {vessel.sleeps || "N/A"}
                        </p>
                      </div>
                      <div className="border-b-2 border-gray-200">
                        <p className="text-[#125589] font-medium mb-1 ">
                          Year:
                        </p>
                        <p className="text-gray-900 font-bold ">
                          {vessel.builtYear || "N/A"}
                        </p>
                      </div>
                      <div className="border-b-2 border-gray-200">
                        <p className="text-[#125589] font-medium mb-1 ">
                          Price:
                        </p>
                        <p className="text-gray-900 font-bold ">
                          {vessel.price || "N/A"}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Link
                        href={`/yachts-for-sale-dubai/${
                          vessel.slug || "some-default"
                        }`}
                        className="blue-solid-button text-center"
                      >
                        KNOW MORE
                      </Link>
                      <button className="blue-solid-button">INQUIRE NOW</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400">
              No results found.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
