/**
 * On-Demand Revalidation API Route
 *
 * This endpoint triggers instant cache revalidation when your API data changes.
 * Call this after updating your backend API to see changes immediately.
 *
 * Usage:
 *   GET /api/revalidate?secret=YOUR_SECRET
 *   GET /api/revalidate?secret=YOUR_SECRET&tag=data-cache
 *   GET /api/revalidate?secret=YOUR_SECRET&path=/offers
 *
 * Security: Requires REVALIDATION_SECRET environment variable
 */

import { revalidatePath, revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const secret = searchParams.get('secret');
    const tag = searchParams.get('tag');
    const path = searchParams.get('path');
    const locale = searchParams.get('locale'); // optional locale prefix

    // Security: Verify secret token
    if (!secret || secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid or missing secret token',
        },
        { status: 401 }
      );
    }

    const revalidatedItems = [];

    // Option 1: Revalidate by tag (RECOMMENDED - revalidates all pages using this data)
    if (tag) {
      revalidateTag(tag);
      revalidatedItems.push(`tag:${tag}`);
      console.log(`✅ Revalidated cache tag: ${tag}`);
    }
    // Option 2: Revalidate specific path
    else if (path) {
      const fullPath = locale ? `/${locale}${path}` : path;
      revalidatePath(fullPath);
      revalidatedItems.push(`path:${fullPath}`);
      console.log(`✅ Revalidated path: ${fullPath}`);
    }
    // Default: Revalidate the main data-cache tag (all pages using fetchData)
    else {
      // Step 1: Revalidate by tag (clears Data Cache)
      revalidateTag('data-cache');
      revalidatedItems.push('tag:data-cache');
      console.log('✅ Revalidated data-cache tag');

      // Step 2: Revalidate API route
      revalidatePath('/api/get-data');
      revalidatedItems.push('path:/api/get-data');
      console.log('✅ Revalidated API route');

      // Step 3: CRITICAL - Revalidate actual pages (Full Route Cache)
      // This clears the static HTML so pages regenerate with fresh data
      const locales = ['en', 'ar', 'ru', 'zh'];
      const pagesToRevalidate = [
        '/', // home page
        '/offers',
        '/faq',
        '/terms-and-condition',
        '/blogs',
        '/abu-dhabi-race-yacht-charter',
        '/yacht-rentals',
        '/yacht-rentals-spring-offer',
        '/yachts-for-sale-dubai',
        '/events',
        '/yacht-trips',
        '/yacht-trips/yacht-wedding-trips',
        '/watersports',
      ];

      // Revalidate all static pages
      pagesToRevalidate.forEach(page => {
        locales.forEach(loc => {
          const path = loc === 'en' ? page : `/${loc}${page}`;
          try {
            revalidatePath(path);
            revalidatedItems.push(`path:${path}`);
            console.log(`✅ Revalidated page: ${path}`);
          } catch (error) {
            console.error(`❌ Failed to revalidate ${path}:`, error.message);
          }
        });
      });

      // Also revalidate dynamic routes (this will revalidate ALL pages under these paths)
      const dynamicRoutes = ['/offers/[slug]', '/blogs/[slug]', '/yacht-rentals/[slug]', '/yachts-for-sale-dubai/[slug]', '/events/[slug]', '/yacht-trips/[slug]', '/watersports/[slug]'];

      dynamicRoutes.forEach(route => {
        locales.forEach(loc => {
          const path = loc === 'en' ? route : `/${loc}${route}`;
          try {
            revalidatePath(path, 'page');
            revalidatedItems.push(`dynamic:${path}`);
            console.log(`✅ Revalidated dynamic route: ${path}`);
          } catch (error) {
            console.error(`❌ Failed to revalidate ${path}:`, error.message);
          }
        });
      });
    }

    const response = NextResponse.json({
      success: true,
      revalidated: true,
      items: revalidatedItems,
      message: 'Cache revalidated successfully. Changes will appear on next page visit.',
      timestamp: new Date().toISOString(),
      note: 'Pages will regenerate in the background on the next request',
    });

    // Ensure this endpoint itself is never cached
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate, max-age=0');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');

    return response;
  } catch (error) {
    console.error('❌ Revalidation error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Revalidation failed',
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// Also support POST requests for webhooks
export async function POST(request) {
  return GET(request);
}
