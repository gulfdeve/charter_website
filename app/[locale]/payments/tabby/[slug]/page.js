import React from 'react';
import { redirect } from 'next/navigation';
import { createTabbySession } from '@/app/utils/tabby';
import Image from 'next/image';

const {
  NEXT_PUBLIC_BASE_URL,
  CENTAURUS_API_KEY,
} = process.env;

export const dynamicParams = true;
export const runtime = 'edge';

export default async function PaymentPage({ params, searchParams }) {
  const { slug } = params;
  const callback = searchParams.callback; // "success", "cancel", etc.
  const paymentId = searchParams.payment_id;

  // —— Callback phase: Tabby has redirected back
  if (callback && paymentId) {
    console.log(`🔔 Tabby ${callback.toUpperCase()} callback for slug ${slug}`, { paymentId });

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
    
    // Client-side redirect with animated loading screen
    return (
      <html>
        <head>
          <meta httpEquiv="refresh" content={`0;url=${redirectUrl}`} />
          <title>Redirecting to Tabby...</title>
          <style>{`
            @keyframes fadeInOut {
              0% { opacity: 0; transform: translateY(20px); }
              20% { opacity: 1; transform: translateY(0); }
              80% { opacity: 1; transform: translateY(0); }
              100% { opacity: 0; transform: translateY(-20px); }
            }
            @keyframes pulse {
              0% { transform: scale(1); }
              50% { transform: scale(1.05); }
              100% { transform: scale(1); }
            }
            .loading-container {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
            }
            .logo-container {
              display: flex;
              align-items: center;
              gap: 2rem;
              margin-bottom: 2rem;
              animation: fadeInOut 2s ease-in-out;
            }
            .logo {
              height: 60px;
              width: auto;
              object-fit: contain;
            }
            .loading-text {
              font-size: 1.5rem;
              color: #333;
              margin-top: 2rem;
              animation: pulse 2s infinite;
            }
            .arrow {
              font-size: 2rem;
              color: #666;
              margin: 0 1rem;
            }
          `}</style>
        </head>
        <body>
          <div className="loading-container">
            <div className="logo-container">
              <Image
                src="/images/centaurus-charter-logo.webp"
                alt="Centaurus Charter"
                width={200}
                height={60}
                className="logo"
                priority
              />
              <span className="arrow">→</span>
              <Image
                src="/images/tabby.webp"
                alt="Tabby"
                width={200}
                height={60}
                className="logo"
                priority
              />
            </div>
            <p className="loading-text">Redirecting to Tabby payment page...</p>
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
