// app/payment-test/[slug]/page.js

import PaymentWidget from '../../../../components/PaymentWidget';
import { headers }   from 'next/headers';

export const dynamicParams = true;
export const runtime       = 'edge';

async function fetchBooking(slug) {
  const res = await fetch(
    `https://www.centauruscharter.net/api/api_new/booking_data/${slug}`,
    { cache: 'no-store' }
  );
  if (!res.ok) throw new Error('Failed to load booking data');
  const [booking] = await res.json();
  return booking;
}

export default async function PaymentTestPage({ params }) {
  const { slug }       = params;
  const headersList    = headers();
  const host           = headersList.get('host') || 'localhost:3000';
  const protocol       = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const baseUrl        = `${protocol}://${host}`;

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
  const sessionId = parsedResponse['session.id'];
  const scriptUrl = process.env.RAKBANK_CHECKOUT_SCRIPT; 
  const cancelUrl = `${baseUrl}/payment-test/${slug}?payment=cancel`;

  // 3️⃣ Render the client-only widget
  return (
    <div className="container mx-auto p-10">
      <h1 className="text-2xl font-bold mb-6">
        Complete Payment for Booking: {slug}
      </h1>

      {sessionId && scriptUrl ? (
        <PaymentWidget
          checkoutScriptUrl={scriptUrl}
          sessionId={sessionId}
          cancelUrl={cancelUrl}
        />
      ) : (
        <p className="text-red-600">Unable to initialize payment widget.</p>
      )}
    </div>
  );
}
