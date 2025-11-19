import { cache } from 'react';

export const fetchData = cache(async () => {
  try {
    // Check if we're on the server or client
    const baseUrl =
      typeof window === 'undefined'
        ? process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
        : '';

    // ISR: Revalidate every 24 hours (86400 seconds) since API rarely changes
    // In development, use no-store to always fetch fresh data for easier debugging
    const fetchOptions = process.env.NODE_ENV === 'development'
      ? { cache: 'no-store' } // Dev: Always fetch fresh
      : { 
          next: { 
            revalidate: 86400, // Production: 24 hours cache
            tags: ['data-cache'] 
          } 
        };

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
