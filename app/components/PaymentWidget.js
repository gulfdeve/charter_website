'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function PaymentWidget({
  checkoutScriptUrl,
  merchantId,       // ← new prop
  sessionId,
  cancelUrl,
}) {
  useEffect(() => {
    // Handle any checkout errors
    window.errorCallback = (error) => {
      console.error('Checkout Error:', error);
    };
    // On cancel, redirect to provided cancelUrl
    window.cancelCallback = () => {
      window.location.href = cancelUrl;
    };
  }, [cancelUrl]);

  return (
    <Script
      src={checkoutScriptUrl}
      data-error="errorCallback"
      data-cancel="cancelCallback"
      strategy="afterInteractive"
      onLoad={() => {
        if (window.Checkout) {
          window.Checkout.configure({
            merchant: { id: merchantId },   // ← merchant settings
            session:  { id: sessionId },
          });
          window.Checkout.showPaymentPage();
        } else {
          console.error('RAKB Checkout script didn’t load.');
        }
      }}
    />
  );
}
