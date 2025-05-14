import React from 'react';
import { redirect } from 'next/navigation';

const {
  NEXT_PUBLIC_BASE_URL,
  TABBY_MERCHANT_CODE,
  TABBY_SECRET_KEY,
  CENTAURUS_API_KEY, // token to send back to Centaurus
} = process.env;

export const dynamicParams = true;
export const runtime = 'edge';

// Helper to extract the real payment_id (length > 1) from searchParams
function getRealPaymentId(raw) {
  if (!raw) return null;
  if (Array.isArray(raw)) {
    const real = raw.find((v) => typeof v === 'string' && v.length > 1);
    return real || raw[raw.length - 1];
  }
  return typeof raw === 'string' && raw.length > 1 ? raw : null;
}

export default async function PaymentPage({ params, searchParams }) {
  const { slug } = params;
  const callback = searchParams.callback; // "success", "cancel", etc.
  const paymentId = getRealPaymentId(searchParams.payment_id);

  // —— Callback phase: Tabby has redirected back
  if (callback && paymentId) {
    console.log(`🔔 Tabby ${callback.toUpperCase()} callback for slug ${slug}`, { paymentId });

    // 1) Retrieve full payment details from Tabby
    let paymentData;
    try {
      const res = await fetch(
        `https://api.tabby.ai/api/v2/payments/${paymentId}`,
        {
          headers: { Authorization: `Bearer ${TABBY_SECRET_KEY}` },
          cache: 'no-store',
        }
      );
      if (!res.ok) throw new Error(`Tabby fetch failed: ${res.status}`);
      paymentData = await res.json();
    } catch (err) {
      console.error('❌ Error fetching Tabby payment:', err);
      paymentData = { error: err.message };
    }

    // 2) Notify Centaurus via POST with query params
    let centResponse;
    try {
      const url = new URL(
        `https://www.centauruscharter.net/api/api_new/payments/tabby/${slug}`
      );
      url.searchParams.set('token', CENTAURUS_API_KEY);
      url.searchParams.set('id', slug);
      url.searchParams.set('status', callback);
      url.searchParams.set('payment_id', paymentId);
    

      console.log('🔗 Centaurus POST URL:', url.toString());

      const centRes = await fetch(url.toString(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      });
      console.log('🔄 Centaurus response status:', centRes.status);
      centResponse = centRes.ok ? await centRes.json() : { error: centRes.statusText };
    } catch (err) {
      console.error('❌ Error notifying Centaurus:', err);
      centResponse = { error: err.message };
    }

    // 3) Redirect to the result page with all params
    const target = `${NEXT_PUBLIC_BASE_URL}/payments/tabby_payment?callback=${callback}&slug=${slug}&payment_id=${paymentId}`;
    redirect(target);
  }

  // —— Initial load: create a Tabby session & redirect
  const centaurusRes = await fetch(
    `https://www.centauruscharter.net/api/api_new/booking_data/${slug}`,
    { cache: 'no-store' }
  );
  if (!centaurusRes.ok) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500">Failed to load booking data.</p>
      </div>
    );
  }
  const [booking] = await centaurusRes.json();

  const payload = {
    payment: {
      amount: booking.amount.toString(),
      currency: 'AED',
      description: `Booking ${booking.order_no}`,
      order: {
        tax_amount: '0.00',
        shipping_amount: '0.00',
        discount_amount: '0.00',
        updated_at: booking.booking_date,
        reference_id: booking.order_no,
        items: [
          {
            title: `Booking ${booking.order_no}`,
            description: `Charter booking on ${booking.booking_date}`,
            quantity: 1,
            unit_price: booking.amount.toString(),
            discount_amount: '0.00',
            reference_id: booking.order_no,
          },
        ],
      },
      meta: {
        order_id: booking.order_no,
        customer: booking.customer_id.toString(),
      },
    },
    lang: params.locale,
    merchant_code: TABBY_MERCHANT_CODE,
    merchant_urls: {
      success: `${NEXT_PUBLIC_BASE_URL}/payments/tabby/${slug}?callback=success`,
      cancel:  `${NEXT_PUBLIC_BASE_URL}/payments/tabby/${slug}?callback=cancel`,
      failure:`${NEXT_PUBLIC_BASE_URL}/payments/tabby/${slug}?callback=failure`,
    },
  };

  const tabbyRes = await fetch('https://api.tabby.ai/api/v2/checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TABBY_SECRET_KEY}`,
    },
    body: JSON.stringify(payload),
  });

  if (!tabbyRes.ok) {
    return <p className="text-red-500">Failed to create Tabby session.</p>;
  }
  const session = await tabbyRes.json();
  const product = session.configuration?.available_products?.installments?.[0];
  const redirectUrl = product?.web_url || session.api_url;

  redirect(redirectUrl);
}
