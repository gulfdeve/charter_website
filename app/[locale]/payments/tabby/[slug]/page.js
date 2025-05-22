import React from 'react';
import { redirect } from 'next/navigation';
import { createTabbySession } from '@/app/utils/tabby';

const {
  NEXT_PUBLIC_BASE_URL,
  CENTAURUS_API_KEY,
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

    let captureData;
    let paymentData;

    // Only capture on success
    if (callback === 'success') {
      try {
        console.log('Attempting to capture payment:', paymentId);
        // First get payment details to use in capture
        const paymentDetailsRes = await fetch(
          `https://api.tabby.ai/api/v2/payments/${paymentId}`,
          {
            headers: { Authorization: `Bearer ${process.env.TABBY_SECRET_KEY}` },
            cache: 'no-store',
          }
        );
        if (!paymentDetailsRes.ok) {
          throw new Error(`Failed to get payment details: ${paymentDetailsRes.status}`);
        }
        const paymentDetails = await paymentDetailsRes.json();
        console.log('Payment details:', paymentDetails);

        // Prepare capture payload
        const capturePayload = {
          amount: paymentDetails.amount,
          reference_id: `capture_${paymentDetails.id}_${Date.now()}`,
          tax_amount: paymentDetails.order?.tax_amount || "0",
          shipping_amount: paymentDetails.order?.shipping_amount || "0",
          discount_amount: paymentDetails.order?.discount_amount || "0",
          items: paymentDetails.order?.items || []
        };
        console.log('Capture payload:', capturePayload);

        const captureRes = await fetch(
          `https://api.tabby.ai/api/v2/payments/${paymentId}/captures`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${process.env.TABBY_SECRET_KEY}`
            },
            body: JSON.stringify(capturePayload),
            cache: 'no-store',
          }
        );
        if (!captureRes.ok) {
          const errorText = await captureRes.text();
          throw new Error(`Tabby capture failed (${captureRes.status}): ${errorText}`);
        }
        captureData = await captureRes.json();
        console.log('Payment captured successfully:', captureData);
      } catch (err) {
        console.error('❌ Error capturing Tabby payment:', err);
        return (
          <div className="flex items-center justify-center h-screen">
            <p className="text-red-500">Failed to capture payment: {err.message}</p>
          </div>
        );
      }
    }

    // Retrieve payment details regardless of callback type
    try {
      console.log('Retrieving payment details:', paymentId);
      const res = await fetch(
        `https://api.tabby.ai/api/v2/payments/${paymentId}`,
        {
          headers: { Authorization: `Bearer ${process.env.TABBY_SECRET_KEY}` },
          cache: 'no-store',
        }
      );
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Tabby fetch failed (${res.status}): ${errorText}`);
      }
      paymentData = await res.json();
      console.log('Payment details retrieved:', paymentData);
    } catch (err) {
      console.error('❌ Error fetching Tabby payment:', err);
      paymentData = { error: err.message };
    }

    // Notify Centaurus via POST with query params
    let centResponse;
    try {
      const url = new URL(
        `https://www.centauruscharter.net/api/api_new/payments/tabby/${slug}`
      );
      url.searchParams.set('token', CENTAURUS_API_KEY);
      url.searchParams.set('id', slug);
      url.searchParams.set('payment_id', paymentId);
      if (paymentData) {
        url.searchParams.set('received_amount', paymentData.amount);
        url.searchParams.set('status', paymentData.status);
      }

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
      console.log('Centaurus response:', centResponse);
    } catch (err) {
      console.error('❌ Error notifying Centaurus:', err);
      centResponse = { error: err.message };
    }

    // Redirect to the result page with all params
    const target = `${NEXT_PUBLIC_BASE_URL}/payments/tabby_payment?callback=${callback}&slug=${slug}&payment_id=${paymentId}`;
    return redirect(target);
  }

  // —— Initial load: load booking data (POST with token query-param)
  const bookingUrl = new URL(
    `https://www.centauruscharter.net/api/api_new/booking_data/${slug}`
  );
  bookingUrl.searchParams.set('token', CENTAURUS_API_KEY);

  const centaurusRes = await fetch(bookingUrl.toString(), {
    method: 'POST',
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!centaurusRes.ok) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500">Failed to load booking data.</p>
      </div>
    );
  }
  const [booking] = await centaurusRes.json();

  try {
    // Define merchant URLs for the payment flow
    const merchantUrls = {
      success: `${NEXT_PUBLIC_BASE_URL}/payments/tabby/${slug}?callback=success`,
      cancel: `${NEXT_PUBLIC_BASE_URL}/payments/tabby/${slug}?callback=cancel`,
      failure: `${NEXT_PUBLIC_BASE_URL}/payments/tabby/${slug}?callback=failure`,
    };

    const session = await createTabbySession(booking, params.locale, merchantUrls);
    console.log('Tabby session created:', session);
    
    // Get the first available installment product
    const product = session.configuration?.available_products?.installments?.[0];
    
    // Use web_url from the product if available, otherwise use api_url
    const redirectUrl = product?.web_url || session.api_url;
    
    if (!redirectUrl) {
      throw new Error('No redirect URL available from Tabby');
    }

    console.log('Redirecting to Tabby:', redirectUrl);
    
    // Client-side redirect
    return (
      <html>
        <head>
          <meta httpEquiv="refresh" content={`0;url=${redirectUrl}`} />
          <title>Redirecting to Tabby...</title>
        </head>
        <body>
          <div className="flex items-center justify-center h-screen">
            <p>Redirecting to payment page...</p>
          </div>
        </body>
      </html>
    );
  } catch (error) {
    console.error('Tabby session creation error:', error);
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500">Failed to create Tabby session: {error.message}</p>
      </div>
    );
  }
}
