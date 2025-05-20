// app/payment-test/[slug]/page.js

import React from 'react';
import PaymentWidget from '../../../../components/PaymentWidget';
import { headers } from 'next/headers';
import Script from 'next/script';

const {
  CENTAURUS_API_KEY,
  RAKBANK_CHECKOUT_SCRIPT,
  RAKBANK_MPGS_MERCHANT,
  NODE_ENV,
} = process.env;

export const dynamicParams = true;
export const runtime = 'edge';

async function fetchBooking(slug) {
  const url = new URL(
    `https://www.centauruscharter.net/api/api_new/booking_data/${slug}`
  );
  url.searchParams.set('token', CENTAURUS_API_KEY);

  const res = await fetch(url.toString(), {
    method: 'POST', cache: 'no-store', headers: { 'Content-Type': 'application/json' }
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Booking data failed (${res.status}): ${text}`);
  }
  const [booking] = await res.json();
  return booking;
}

export default async function PaymentTestPage({ params }) {
  const { slug } = params;
  const hdrs     = headers();
  const host     = hdrs.get('host') || 'localhost:3000';
  const protocol = NODE_ENV === 'production' ? 'https' : 'http';
  const baseUrl  = `${protocol}://${host}`;

  let booking;
  try {
    booking = await fetchBooking(slug);
  } catch (err) {
    return <div className="p-8 text-red-600">
      <h1>Error loading booking:</h1>
      <p>{err.message}</p>
    </div>;
  }

  const yachtPrice = parseFloat(booking.amount);
  const addons     = booking.addons_price   || 0;
  const promoDisc  = booking.promo_discount || 0;
  const subtotal   = yachtPrice * booking.hours + addons;
  const total      = subtotal - promoDisc;
  const orderNo    = booking.order_no || slug;

  const payload = { orderId: orderNo, slug, amount: total.toString(), currency: 'AED' };
  const paymentRes = await fetch(`${baseUrl}/api/payment`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload), cache: 'no-store'
  });
  if (!paymentRes.ok) {
    return <div className="p-8 text-red-600">Payment API error: {paymentRes.status}</div>;
  }

  const { parsedResponse } = await paymentRes.json();
  const sessionId        = parsedResponse['session.id'];
  const sessionVersion   = parsedResponse['session.version'];
  const successIndicator = parsedResponse['success.indicator'];
  const scriptUrl        = RAKBANK_CHECKOUT_SCRIPT;
  const cancelUrl        = `${baseUrl}/checkout/${slug}`;
  const merchantId       = RAKBANK_MPGS_MERCHANT;

  if (sessionId && sessionVersion && successIndicator) {
    const statusUrl = new URL(
      `https://www.centauruscharter.net/api/api_new/payments/rakbank/${slug}`
    );
    statusUrl.searchParams.set('token', CENTAURUS_API_KEY);
    statusUrl.searchParams.set('id', slug);
    statusUrl.searchParams.set('status', 'initial');
    statusUrl.searchParams.set('session_id', sessionId);
    statusUrl.searchParams.set('session_version', sessionVersion);
    statusUrl.searchParams.set('success_indicator', successIndicator);

    console.log('Sending Rakbank status to:', statusUrl.toString());
    try {
      const statusRes = await fetch(statusUrl.toString(), { method: 'POST', cache: 'no-store' });
      console.log('Rakbank initial status response OK?', statusRes.ok);
    } catch (error) {
      console.error('Error sending Rakbank status:', error);
    }
  }

  return (
    <div className="container mx-auto p-10">
      {/* Add script to check for cancel hash and redirect */}
      <Script id="check-cancel-redirect" strategy="afterInteractive">
        {`
          if (window.location.hash === '#__hc-action-cancel') {
            window.location.href = '/checkout/${slug}';
          }
        `}
      </Script>
      <h1 className="text-2xl font-bold mb-6">Complete Payment for Booking: {slug}</h1>
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