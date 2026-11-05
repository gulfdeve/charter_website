import { cache } from 'react';

export const fetchData = cache(async () => {
  try {
    const isServer = typeof window === 'undefined';

    // Server: call the upstream API directly. Calling our own /api/get-data over HTTP
    // fails on Vercel (localhost:3000 fallback) and the null result got cached by ISR.
    // Same cache tag as the API route, so revalidateTag('data-cache') still works.
    const response = isServer
      ? await fetch(`${process.env.API_DOMAIN}/api/api_new/basic`, {
          cache: process.env.NODE_ENV === 'development' ? 'no-store' : 'force-cache',
          next: { revalidate: 86400, tags: ['data-cache'] },
        })
      : await fetch('/api/get-data', { cache: 'no-store' });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    return response.json();
    // Log the data for debugging
  } catch (error) {
    console.log('Error fetching data:', error);
    return null;
  }
});
