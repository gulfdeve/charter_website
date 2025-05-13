// Create an API route that triggers revalidation
// app/api/revalidate/route.js
import { revalidatePath, revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export async function GET(request) {
	const secret = request.nextUrl.searchParams.get('secret');
	
	// Uncomment this in production
	// if (secret !== process.env.REVALIDATION_SECRET) {
	//   return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
	// }
	
	// Revalidate using the tag
	revalidateTag('data-cache');
	
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
	
	
	
	
	return NextResponse.json({ revalidated: true, now: Date.now() });
  }