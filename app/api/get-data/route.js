export const config = {
  runtime: 'edge',
  regions: ['fra1'],
};

export async function GET() {
  try {
    const url = `${process.env.API_DOMAIN}/api/api_new/basic`;
    //   console.log("using url: ", url);

    // ISR: Cache for 24 hours (86400 seconds) in all environments
    // Use the SAME tag so revalidation clears this cache too
    const fetchOptions = {
      next: { 
        revalidate: 86400, // 24 hours
        tags: ['data-cache'] // Same tag as fetchData - critical for revalidation!
      },
    };

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
        status: 500,
      });
    }
    //   console.log("loading data from api");
    const data = await response.json();

    // ISR-optimized cache headers for all environments
    // Cache for 24 hours, serve stale content while revalidating for up to 48 hours
    const headers = {
      'Cache-Control':
        'public, max-age=86400, s-maxage=86400, stale-while-revalidate=172800',
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
