import React from 'react';
import { redirect } from 'next/navigation';

// app/[locale]/payments/tabby/[slug]/page.js
export const dynamicParams = true;

// Pull environment variables
const { NEXT_PUBLIC_BASE_URL, TABBY_MERCHANT_CODE, TABBY_SECRET_KEY } = process.env;

export default async function PaymentPage({ params }) {
  const { locale, slug } = params;

  // 1. Fetch booking data from Centaurus API
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

  // 2. Create Tabby checkout session
  const tabbyPayload = {
    payment: {
      amount: booking.amount.toString(),
      currency: 'AED',
      description: `Booking ${booking.order_no}`,
      buyer: {},
      buyer_history: {},
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
            image_url: '',
            product_url: '',
            gender: '',
            category: '',
            color: '',
            product_material: '',
            size_type: '',
            size: '',
            brand: ''
          }
        ]
      },
      meta: {
        order_id: booking.order_no,
        customer: booking.customer_id.toString()
      }
    },
    lang: locale,
    merchant_code: TABBY_MERCHANT_CODE,
    merchant_urls: {
      success: `${NEXT_PUBLIC_BASE_URL}/${locale}/payments/tabby/${slug}/success`,
      cancel: `${NEXT_PUBLIC_BASE_URL}/${locale}/payments/tabby/${slug}/cancel`,
      failure: `${NEXT_PUBLIC_BASE_URL}/${locale}/payments/tabby/${slug}/failure`
    }
  };

  const tabbyRes = await fetch('https://api.tabby.ai/api/v2/checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TABBY_SECRET_KEY}`
    },
    body: JSON.stringify(tabbyPayload)
  });

  if (!tabbyRes.ok) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500">Failed to create Tabby checkout session.</p>
      </div>
    );
  }

  const session = await tabbyRes.json();

  // 3. Redirect to Tabby's hosted payment page
  const product = session.configuration?.available_products?.installments?.[0];
  const redirectUrl = product?.web_url || session.api_url;

  // Perform server-side redirect
  redirect(redirectUrl);
}
