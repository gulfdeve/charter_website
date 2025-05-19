'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function PaymentWidget({ checkoutScriptUrl, sessionId, cancelUrl }) {
  useEffect(() => {
    window.errorCallback = function (error) {
      console.error('Checkout Error:', error);
    };
    window.cancelCallback = function () {
      console.log('Payment cancelled');
    };
  }, []);

  return (
    <>
      <Script
        src={checkoutScriptUrl}
        data-error="errorCallback"
        data-cancel={cancelUrl}
        strategy="afterInteractive"
        onLoad={() => {
          if (window.Checkout) {
            window.Checkout.configure({ session: { id: sessionId } });
            window.Checkout.showPaymentPage();
          }
        }}
      />
    </>
  );
}
