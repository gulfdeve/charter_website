// Create an API route that triggers revalidation
// app/api/revalidate/route.js
import { revalidatePath, revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

async function purgeVercelCache() {
	try {
		if (!process.env.VERCEL_TOKEN) {
			console.error('VERCEL_TOKEN environment variable is required');
			return false;
		}

		// Use Vercel's purge API endpoint for personal accounts
		const response = await fetch('https://api.vercel.com/v1/purge', {
			method: 'POST',
			headers: {
				'Authorization': `Bearer ${process.env.VERCEL_TOKEN}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				tags: ['data-cache']
			})
		});
		
		if (!response.ok) {
			const errorText = await response.text();
			console.error('Failed to purge Vercel cache:', response.status, errorText);
			return false;
		}
		
		const result = await response.json();
		console.log('Vercel cache purged successfully:', result);
		return true;
	} catch (error) {
		console.error('Error purging Vercel cache:', error);
		return false;
	}
}

export async function GET(request) {
	const secret = request.nextUrl.searchParams.get('secret');
	
	// Uncomment this in production
	// if (secret !== process.env.REVALIDATION_SECRET) {
	//   return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
	// }
	
	// Revalidate using the tag
	revalidateTag('data-cache');
	
	// Also purge Vercel's edge cache
	const vercelPurged = await purgeVercelCache();
	
	// Also revalidate paths that use this data
	revalidatePath('/');
	revalidatePath('/yacht-rentals');
	revalidatePath('/yacht-rentals/[slug]');
	revalidatePath('/yacht-rentals/36ft-Storm');
	revalidatePath('/yacht-rentals/56ft-lagoona');
	revalidatePath('/yacht-rentals/85ft-yacht-Kronos');
	revalidatePath('/yacht-rentals/36ft-thunder');
	revalidatePath('/yacht-rentals/40ft-yacht-Riverside');
	revalidatePath('/yacht-rentals/56ft-vassia');
	revalidatePath('/yacht-rentals/58ft-etosha');
	revalidatePath('/yacht-rentals/61ft-silvercreek');
	revalidatePath('/yacht-rentals/77ft-dionysos');
	revalidatePath('/yacht-rentals/118ft-poseidon');

	revalidatePath('/offers');
	revalidatePath('/offers/[slug]');
	revalidatePath('/offers/business-council');
	revalidatePath('/offers/emirates-staff');
	revalidatePath('/offers/dubai-yachts-winter-offers');
	revalidatePath('/offers/fazaa-card');


	revalidatePath('/events');
	revalidatePath('/events/[slug]');
	revalidatePath('/events/super-yacht-party-dubai');

	revalidatePath('/yacht-trips');
	revalidatePath('/yacht-trips/[slug]');
	revalidatePath('/watersports');
	revalidatePath('/watersports/[slug]');

	revalidatePath('/shared-yacht-tours-dubai');
	revalidatePath('/contact');
	revalidatePath('/aboutus');
	revalidatePath('/terms-and-condition');
	revalidatePath('/privacy-and-policy');
	revalidatePath('/faq');
	
	
	
	
	const response = NextResponse.json({ 
		revalidated: true, 
		vercelCachePurged: vercelPurged,
		now: Date.now() 
	});
	
	// Add headers to force cache invalidation
	response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
	response.headers.set('Pragma', 'no-cache');
	response.headers.set('Expires', '0');
	
	return response;
}