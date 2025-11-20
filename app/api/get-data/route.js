export const config = {
  runtime: 'edge',
  regions: ['dxb1'], // Dubai - optimal for UAE users
};

// Make this route dynamic (not cached) - only the fetch inside should be cached
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const url = `${process.env.API_DOMAIN}/api/api_new/basic`;
    console.log("✅ Fetching from external API:", url);
    console.log("⏰ Request time:", new Date().toISOString());

    // ISR: Cache the FETCH (not the route) for 24 hours with tags
    // In development, always fetch fresh data for easier debugging
    const fetchOptions = process.env.NODE_ENV === 'development'
      ? { cache: 'no-store' } // Dev: Always fetch fresh
      : {
          cache: 'force-cache', // Explicitly cache this fetch
          next: { 
            revalidate: 86400, // Production: 24 hours
            tags: ['data-cache'] // Critical: This tag enables revalidation!
          },
        };

    console.log("🔧 Fetch options:", JSON.stringify(fetchOptions, null, 2));

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
      console.log("📦 Sample offer validity:", data.offers[0].validity);
    }

    // IMPORTANT: Don't cache the API route response itself
    // The fetch inside is cached with tags, but the route must be dynamic
    // This ensures revalidateTag works correctly
    const headers = {
      'Cache-Control': 'no-store, must-revalidate',
      'CDN-Cache-Control': 'no-store',
      'Vercel-CDN-Cache-Control': 'no-store',
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
