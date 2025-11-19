export const config = {
  runtime: 'edge',
  regions: ['fra1'],
};

export async function GET() {
  try {
    const url = `${process.env.API_DOMAIN}/api/api_new/basic/generate`;
    console.log("using url: ", url);

    // ISR: Cache for 24 hours (86400 seconds) in production
    // In development, always fetch fresh data for easier debugging
    const fetchOptions = process.env.NODE_ENV === 'development'
      ? { cache: 'no-store' } // Dev: Always fetch fresh
      : {
          next: { 
            revalidate: 86400, // Production: 24 hours
            tags: ['data-cache'] // Same tag as fetchData - critical for revalidation!
          },
        };

    // Fetch from external API
    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      console.error('External API error:', response.status, response.statusText);
      return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
        status: 500,
      });
    }
    
    const data = await response.json();
    console.log("✅ Data fetched from external API at:", new Date().toISOString());
    
    // Log a sample to verify we're getting fresh data
    if (data?.offers?.[0]) {
      console.log("Sample offer validity:", data.offers[0].validity);
    }

    // ISR-optimized cache headers
    // Important: Must match the revalidate time and allow tag-based revalidation
    const headers = {
      'Cache-Control': 'public, max-age=0, s-maxage=86400, stale-while-revalidate=172800, must-revalidate',
      'CDN-Cache-Control': 'max-age=0, s-maxage=86400',
      'Vercel-CDN-Cache-Control': 'max-age=0, s-maxage=86400',
    };

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: headers,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
