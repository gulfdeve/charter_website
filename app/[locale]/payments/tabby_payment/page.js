import React from 'react';
import { redirect } from 'next/navigation';

// Next.js App Router server component
// export const runtime = 'edge';
const { NEXT_PUBLIC_SITE_URL } = process.env;
// Helper for extracting real payment_id
function getRealPaymentId(raw) {
  if (!raw) return null;
  if (Array.isArray(raw)) {
    const real = raw.find(v => typeof v === 'string' && v.length > 1);
    return real || raw[raw.length - 1];
  }
  return typeof raw === 'string' && raw.length > 1 ? raw : null;
}

async function fetchBooking(slug) {
  const url = new URL(`https://www.centauruscharter.net/api/api_new/booking_data/${slug}`);
  url.searchParams.set('token', process.env.CENTAURUS_API_KEY);

  const res = await fetch(url.toString(), {
    method: 'POST',
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed to load booking data (${res.status}): ${text}`);
  }

  const data = await res.json();
  return data[0];
}

export default async function PaymentResultPage({ searchParams }) {
  const { callback, slug } = searchParams;
  const paymentId = getRealPaymentId(searchParams.payment_id);

  // Redirects based on callback
  if (callback === 'success') {
    return redirect(`${NEXT_PUBLIC_SITE_URL}/payments/success?slug=${slug}&payment_id=${paymentId}`);
  }
  if (callback === 'cancel' || callback === 'failure') {
    return redirect(`${NEXT_PUBLIC_SITE_URL}/checkout/${slug}?callback=${callback}`);
  }

  // Fetch booking data for any other states (unlikely)
  let booking;
  try {
    booking = await fetchBooking(slug);
  } catch (err) {
    console.error('Failed to fetch booking data:', err);
  }

  // Fallback UI (should not normally render)
  return (
    <div className="container mx-auto py-32 bg-white nav-space">
      <div className="flex flex-col items-center justify-center pt-32">
        <h2 className="text-primary-blue-2 font-bold text-2xl mb-4">Unknown Status</h2>
        <p className="max-w-xl text-primary-grey text-center italic">We encountered an unexpected status. Please try again or contact support.</p>
      </div>
    </div>
  );
}
