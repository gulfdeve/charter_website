export const config = {
  runtime: 'edge',
  regions: ['fra1'],
};

export async function GET() {
  try {
    const url = `${process.env.API_DOMAIN}/api/api_new/basic`;
    //   console.log("using url: ", url);

    // Add no-cache headers for development
    const fetchOptions =
      process.env.NODE_ENV === 'development'
        ? { cache: 'no-store', headers: { 'Cache-Control': 'no-cache' } }
        : {};

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
        status: 500,
      });
    }
    //   console.log("loading data from api");
    const data = await response.json();

    // Add no-cache headers to response in development
    const headers =
      process.env.NODE_ENV === 'development'
        ? {
            'Cache-Control':
              'no-store, no-cache, must-revalidate, proxy-revalidate',
          }
        : {
            'Cache-Control':
              'public, max-age=3600, s-maxage=7200, stale-while-revalidate=86400',
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
