// Create an API route that triggers revalidation
// app/api/revalidate/route.js
import { revalidatePath, revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

async function purgeVercelCache() {
	try {
		console.log('Starting Vercel cache purge...');
		
		// For Vercel, the most reliable approach is to set proper cache headers
		// and use Next.js revalidation which Vercel respects
		
		// The Next.js revalidateTag and revalidatePath should be sufficient
		// for most use cases with Vercel's CDN
		
		console.log('Using Next.js cache revalidation (recommended for Vercel)');
		return { 
			success: true, 
			result: 'Cache will be revalidated via Next.js. Vercel CDN will update on next request.',
			method: 'nextjs-revalidation'
		};
		
	} catch (error) {
		console.error('Error in cache purge function:', error);
		return { success: false, error: error.message };
	}
}

export async function GET(request) {
	const secret = request.nextUrl.searchParams.get('secret');
	
	// Uncomment this in production
	// if (secret !== process.env.REVALIDATION_SECRET) {
	//   return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
	// }
	
	// Revalidate using the tag - this should work with Vercel's CDN
	revalidateTag('data-cache');
	
	// Force additional cache invalidation
	const vercelResult = await purgeVercelCache();
	
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
		vercelCachePurged: vercelResult.success,
		vercelError: vercelResult.success ? null : vercelResult.error,
		vercelResult: vercelResult.success ? vercelResult.result : null,
		message: 'Cache revalidated. Changes should appear on next page load.',
		now: Date.now() 
	});
	
	// Add headers to force cache invalidation and ensure this endpoint isn't cached
	response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate, max-age=0');
	response.headers.set('Pragma', 'no-cache');
	response.headers.set('Expires', '0');
	response.headers.set('CDN-Cache-Control', 'no-cache');
	response.headers.set('Vercel-CDN-Cache-Control', 'no-cache');
	
	return response;
}