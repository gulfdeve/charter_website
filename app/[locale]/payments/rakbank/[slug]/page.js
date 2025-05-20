// app/payment-test/[slug]/page.js

import React from 'react';
import PaymentWidget from '../../../../components/PaymentWidget';
import { headers } from 'next/headers';

const {
  CENTAURUS_API_KEY,        // ← your token for Centaurus booking-data
  RAKBANK_CHECKOUT_SCRIPT,  // assuming this is set in env
  NODE_ENV,
} = process.env;

export const dynamicParams = true;
export const runtime = 'edge';

async function fetchBooking(slug) {
  // build URL with token query-param
  const url = new URL(
    `https://www.centauruscharter.net/api/api_new/booking_data/${slug}`
  );
  url.searchParams.set('token', CENTAURUS_API_KEY);

  const res = await fetch(url.toString(), {
    method: 'POST',
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
    },
    // no JSON body needed per your API spec
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed to load booking data (${res.status}): ${text}`);
  }

  const [booking] = await res.json();
  return booking;
}

export default async function PaymentTestPage({ params }) {
  const { slug }    = params;
  const hdrs        = headers();
  const host        = hdrs.get('host') || 'localhost:3000';
  const protocol    = NODE_ENV === 'production' ? 'https' : 'http';
  const baseUrl     = `${protocol}://${host}`;

  // 1️⃣ Fetch booking & compute amount
  let booking;
  try {
    booking = await fetchBooking(slug);
  } catch (err) {
    return (
      <div className="p-8 text-red-600">
        <h1>Error loading booking:</h1>
        <p>{err.message}</p>
      </div>
    );
  }

  const yachtPrice = parseFloat(booking.amount);
  const addons     = booking.addons_price   || 0;
  const promoDisc  = booking.promo_discount || 0;
  const subtotal   = yachtPrice * booking.hours + addons;
  const total      = subtotal - promoDisc;
  const orderNo    = booking.order_no || slug;

  // 2️⃣ Call your internal payment API for a session
  const payload = {
    orderId : orderNo,
    slug,
    amount  : total.toString(),
    currency: 'AED',
  };
  const paymentRes = await fetch(`${baseUrl}/api/payment`, {
    method : 'POST',
    headers: { 'Content-Type': 'application/json' },
    body   : JSON.stringify(payload),
    cache  : 'no-store',
  });
  if (!paymentRes.ok) {
    return (
      <div className="p-8 text-red-600">
        Payment API error: {paymentRes.status}
      </div>
    );
  }
  const { parsedResponse } = await paymentRes.json();
  const sessionId  = parsedResponse['session.id'];
  const scriptUrl  = RAKBANK_CHECKOUT_SCRIPT;
  const cancelUrl  = `${baseUrl}/checkout/${slug}`;
  const merchantId = process.env.RAKBANK_MPGS_MERCHANT;
  // 3️⃣ Render the client-only widget, passing slug along
  return (
    <div className="container mx-auto p-10">
      <h1 className="text-2xl font-bold mb-6">
        Complete Payment for Booking: {slug}
      </h1>

      {sessionId && scriptUrl ? (
        <PaymentWidget
          slug={slug}
          checkoutScriptUrl={scriptUrl}
          sessionId={sessionId}
          cancelUrl={cancelUrl}
          merchantId={merchantId}
        />
      ) : (
        <p className="text-red-600">
          Unable to initialize payment widget.  
          { !sessionId && ' (missing session)' }
          { !scriptUrl   && ' (missing script URL)' }
          { !merchantId  && ' (missing merchant ID)' }
        </p>
      )}
    </div>
  );
}
