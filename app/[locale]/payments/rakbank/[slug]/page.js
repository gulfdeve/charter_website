// app/payment-test/[slug]/page.js
import React from 'react';
import PaymentWidget from '../../../../components/PaymentWidget';
import ClientPaymentInitializer from '../../../../components/ClientPaymentInitializer';
import { headers } from 'next/headers';
import Script from 'next/script';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

const { CENTAURUS_API_KEY, RAKBANK_CHECKOUT_SCRIPT, RAKBANK_MPGS_MERCHANT, NODE_ENV } = process.env;

export const dynamicParams = true;
// export const runtime = "edge";

async function fetchBooking(slug) {
  const url = new URL(`https://www.centauruscharter.net/api/api_new/booking_data/${slug}`);
  url.searchParams.set('token', CENTAURUS_API_KEY);

  const res = await fetch(url.toString(), {
    method: 'POST',
    cache: 'no-store',
    headers: { 'Content-Type': 'application/json' },
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Booking data failed (${res.status}): ${text}`);
  }
  const [booking] = await res.json();
  return booking;
}

export default async function PaymentTestPage({ params }) {
  const t = await getTranslations();
  const { slug } = await params;
  const hdrs = await headers();
  const host = hdrs.get('host') || 'localhost:3000';
  const protocol = NODE_ENV === 'production' ? 'https' : 'http';
  const baseUrl = `${protocol}://${host}`;

  let booking,
    error = null;
  try {
    booking = await fetchBooking(slug);
  } catch (err) {
    error = err;
  }

  let sessionId, sessionVersion, successIndicator, scriptUrl, cancelUrl, merchantId, parsedResponse;
  if (!error && booking) {
    const yachtPrice = parseFloat(booking.amount);
    const addons = booking.addons_price || 0;
    const promoDisc = booking.promo_discount || 0;
    const subtotal = yachtPrice * booking.hours + addons;
    const total = subtotal - promoDisc;
    const orderNo = booking.order_no || slug;

    // 1) create your checkout session on YOUR back end
    const payload = {
      orderId: orderNo,
      title: booking.title,
      slug,
      amount: Number(booking.amount),
      currency: 'AED',
    };
    // console.log("Rakbank payment payload:", payload);
    const paymentRes = await fetch(`${baseUrl}/api/payment`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      cache: 'no-store',
    });
    if (!paymentRes.ok) {
      error = new Error(`Payment API error here: ${paymentRes.status}`);
    } else {
      ({ parsedResponse } = await paymentRes.json());
      // console.log("parsedResponse", parsedResponse);
      sessionId = parsedResponse['session.id'];
      sessionVersion = parsedResponse['session.version'];
      successIndicator = parsedResponse['successIndicator'];
      scriptUrl = RAKBANK_CHECKOUT_SCRIPT;
      cancelUrl = `${baseUrl}/checkout/${slug}?callback=cancel`;
      merchantId = RAKBANK_MPGS_MERCHANT;

      //save the data here
      try {
        const saveRes = await fetch(`https://www.centauruscharter.net/api/api_new/payments/rakbank/${booking.id}?token=${CENTAURUS_API_KEY}` + `&id=${booking.id}` + `&status=initiated` + `&session_id=${sessionId}` + `&session_version=${sessionVersion}` + `&success_indicator=${successIndicator}`, {
          method: 'POST',
        });
        const saveText = await saveRes.text();
        // console.log("Rakbank save payment response:", saveText);
      } catch (saveErr) {
        console.error('Error saving Rakbank payment:', saveErr);
      }
    }
  }

  if (error) {
    return (
      <div className="p-8 text-red-600">
        <h1>Error loading booking:</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  // console.log("sessionId", sessionId);
  // console.log("scriptUrl", scriptUrl);
  // console.log("merchantId", merchantId);

  // Session is ready, render payment widget
  return (
    <html>
      <head>
        <title>Redirecting to RakBank...</title>
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
            <Image src="/images/centaurus-charter-logo.webp" alt="Centaurus Charter" width={200} height={60} className="logo" priority />
            <span className="arrow">→</span>
            <Image src="/rakbank.svg" alt="Tabby" width={200} height={60} className="logo" priority />
          </div>
          <p className="loading-text">Redirecting to RakBank payment page...</p>
          <div className="container mx-auto p-10">
            <Script id="check-cancel-redirect" strategy="afterInteractive">
              {`
          if (window.location.hash === '#__hc-action-cancel') {
            window.location.href = '/checkout/${slug}?callback=cancel';
          }
        `}
            </Script>
            <Script id="check-success-redirect" strategy="afterInteractive">
              {`
          if (window.location.hash === '#__hc-action-success') {
            window.location.href = '/payments/success/${slug}';
          }
        `}
            </Script>
            <ClientPaymentInitializer slug={slug} CENTAURUS_API_KEY={CENTAURUS_API_KEY} sessionId={sessionId} sessionVersion={sessionVersion} successIndicator={successIndicator}>
              <PaymentWidget slug={slug} checkoutScriptUrl={scriptUrl} sessionId={sessionId} cancelUrl={cancelUrl} merchantId={merchantId} />
            </ClientPaymentInitializer>
          </div>
        </div>
      </body>
    </html>
  );
}
