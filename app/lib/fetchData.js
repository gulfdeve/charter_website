import { cache } from 'react';

export const fetchData = cache(async () => {
  try {
    // Check if we're on the server or client
    const baseUrl = typeof window === 'undefined' ? process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000' : '';

    // Don't cache the API route call itself - let the route handle external API caching
    // The API route is dynamic but caches the external API fetch with tags
    // This ensures revalidateTag works correctly
    const fetchOptions = {
      cache: 'no-store', // Always call the API route fresh
    };

    console.log('📞 Calling /api/get-data from fetchData');
    const response = await fetch(`${baseUrl}/api/get-data`, fetchOptions);

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
