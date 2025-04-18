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
	revalidatePath('/offers');
	revalidatePath('/offers/[slug]');
	revalidatePath('/events');
	revalidatePath('/events/[slug]');
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