// Create an API route that triggers revalidation
// app/api/revalidate/route.js
import { revalidatePath, revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const secret = request.nextUrl.searchParams.get('secret');
  
  // Check for secret to prevent public access
//   if (secret !== process.env.REVALIDATION_SECRET) {
//     return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
//   }
  
  // Revalidate the specific path that uses this data
  revalidatePath('/api/get-data');
  
  // Or use tags if you're using them
  // revalidateTag('your-tag');
  
  return NextResponse.json({ revalidated: true, now: Date.now() });
}