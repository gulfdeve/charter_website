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
	
	return NextResponse.json({ revalidated: true, now: Date.now() });
  }