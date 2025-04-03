import fs from 'fs';
import jwt from 'jsonwebtoken';

async function fetchVessels(searchParams) {
  console.log('Received searchParams:', searchParams);

  // --- Generate JWT Token ---
  const privateKey = fs.readFileSync('private_key.pem', 'utf8');
  const kid = 'jSZNvbnPK03KXEEo0-bJw4XPF1z68eW_OpHFW_9XvLY';
  const companyUri = 'c::19468221194';

  const issuedAt = Math.floor(Date.now() / 1000);
  const expiryTime = issuedAt + 3600; // Valid for 1 hour

  const payload = {
    scopes: ['website:read:*'],
    iss: companyUri,
    aud: 'ankor.io',
    sub: companyUri,
    iat: issuedAt,
    exp: expiryTime,
  };

  const token = jwt.sign(payload, privateKey, {
    algorithm: 'RS256',
    header: { alg: 'RS256', typ: 'JWT', kid },
  });

  // --- Build Query Params ---
  const queryObject = {
    name: searchParams.name || '',
    charterType: searchParams.charterType || '',
    minLength: searchParams.minLength || '',
    maxLength: searchParams.maxLength || '',
    sleeps: searchParams.sleeps || '',
    yachtType: searchParams.yachtType || '',
    region: searchParams.region || '',
    currency: 'USD',
    priceMin: 1000,
    priceMax: 5000,
  };

  Object.keys(queryObject).forEach((key) => !queryObject[key] && delete queryObject[key]);

  const queryString = new URLSearchParams(queryObject).toString();
  const url = `https://api.ankor.io/website/search?${queryString}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Accept': 'application/json', 'Authorization': `Bearer ${token}` },
  });

  if (!response.ok) throw new Error(`API Error: ${response.statusText}`);

  return response.json();
}

export default async function VesselsPage({ searchParams }) {
  let data = null;
  const hasAnyParam = Object.keys(searchParams || {}).length > 0;

  if (hasAnyParam) {
    try {
      data = await fetchVessels(searchParams);
    } catch (error) {
      console.error('Error fetching vessels:', error);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50  dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-8">
      <h1 className="text-4xl font-extrabold text-center mb-10 tracking-tight">
        Vessel Search
      </h1>

      {/* Search Form */}
      <form method="GET" className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 space-y-6">
        <div className="grid grid-cols-1 gap-4">
          <input 
            name="name" 
            placeholder="Vessel Name" 
            defaultValue={searchParams.name || ''} 
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition" 
          />
          <input 
            name="charterType" 
            placeholder="Charter Type" 
            defaultValue={searchParams.charterType || ''} 
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition" 
          />
          <div className="flex space-x-4">
            <input 
              name="minLength" 
              placeholder="Min Length" 
              defaultValue={searchParams.minLength || ''} 
              className="w-1/2 px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition" 
            />
            <input 
              name="maxLength" 
              placeholder="Max Length" 
              defaultValue={searchParams.maxLength || ''} 
              className="w-1/2 px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition" 
            />
          </div>
          <input 
            name="sleeps" 
            placeholder="Sleeps" 
            defaultValue={searchParams.sleeps || ''} 
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition" 
          />
          <input 
            name="yachtType" 
            placeholder="Yacht Type" 
            defaultValue={searchParams.yachtType || ''} 
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition" 
          />
          <input 
            name="region" 
            placeholder="Region" 
            defaultValue={searchParams.region || ''} 
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition" 
          />
        </div>
        <button 
          type="submit" 
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </form>

      {/* Search Results */}
      {/* Search Results */}
{hasAnyParam && (
  <div className="mt-12 flex flex-col items-center justify-center">
    <h2 className="text-3xl font-semibold text-center mb-8">Search Results</h2>
    {data && data.hits && data.hits.length > 0 ? (
      <div className="flex flex-wrap justify-center gap-8">
        {data.hits.map((vessel, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 max-w-2xl w-full">
            <h3 className="text-2xl font-bold mb-4">Vessel {index + 1}</h3>
            {Object.entries(vessel).map(([key, value]) => (
              <p key={key} className="mb-2 text-gray-600 dark:text-gray-400">
                <span className="font-medium capitalize">{key.replace(/_/g, ' ')}:</span> {value || 'N/A'}
              </p>
            ))}
          </div>
        ))}
      </div>
    ) : (
      <p className="text-center text-gray-500 dark:text-gray-400">No results found.</p>
    )}
  </div>
)}

    </div>
  );
}
