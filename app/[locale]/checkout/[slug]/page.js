export const dynamicParams = true;
export const runtime = 'edge';
import React from 'react';
import { redirect } from 'next/navigation';
import { createTabbySession } from '@/app/utils/tabby';
import Script from 'next/script';
import TabbyPromoSection from './TabbyPromoSection';
import { getTranslations } from 'next-intl/server';

// Make sure we import the environment variables at the top
const {
  NEXT_PUBLIC_TABBY_MERCHANT_CODE,
  TABBY_SECRET_KEY,
  CENTAURUS_API_KEY,
} = process.env;

async function fetchBooking(slug) {
  const url = new URL(
    `https://www.centauruscharter.net/api/api_new/booking_data/${slug}`
  );

  // attach your API key as ?token=...
  url.searchParams.set('token', process.env.CENTAURUS_API_KEY);

  const res = await fetch(url.toString(), {
    method: 'POST',
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
    },
    // no body required; server ignores it
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed to load booking data (${res.status}): ${text}`);
  }

  const data = await res.json();
  return data[0];
}

async function checkTabbyPreApproval(booking) {
  try {
    const session = await createTabbySession(booking);
    
    // Check if installments are available (pre-approved)
    const installments = session.configuration?.available_products?.installments;
    
    return {
      isApproved: !!installments && installments.length > 0,
      sessionData: session,
      error: null
    };
  } catch (error) {
    console.error('Tabby pre-approval check failed:', error);
    return { 
      isApproved: false, 
      error: error.message || 'Failed to check Tabby eligibility',
      sessionData: null
    };
  }
}

// Server component - all async operations happen here
export default async function CheckoutPage({ params, searchParams }) {
  const t = await getTranslations();
  const { slug } = params;
  const { confirm, method,callback } = searchParams;

  if (confirm === '1') {
    if (method === 'tabby') return redirect(`/payments/tabby/${slug}`);
    if (method === 'rakbank') return redirect(`/payments/rakbank/${slug}`);
  }

  let booking;
  try {
    booking = await fetchBooking(slug);
  } catch (err) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500">{err.message}</p>
      </div>
    );
  }

  // Check Tabby pre-approval status
  const tabbyStatus = await checkTabbyPreApproval(booking);

  const {
    title,
    image,
    booking_date,
    per_hour_price,
    hours,
    amount,
    addons_price = 0,
    promo_discount = 0,
    first_name,
    last_name,
    email,
    mobile,
  } = booking;

  const yachtPrice = parseFloat(amount);
//   const subtotal = yachtPrice * hours + addons_price;
  const subtotal = parseFloat(amount)
  const total = subtotal - promo_discount;

  return (
    <div className="container mx-auto py-10 bg-white nav-space">
      <div className="flex flex-col items-center justify-center pt-10">
        <h1 className="text-primary-blue-2 font-bold text-2xl md:text-3xl">{t('checkout.checkout')}</h1>
      </div>
      
      {(callback === 'cancel' || callback === 'failure') && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4 mt-4 mx-auto max-w-7xl">
          <p className="text-red-600 text-sm">
            {callback === 'cancel'
              ? 'You aborted the payment. Please retry or choose another payment method.'
              : 'Sorry, Tabby is unable to approve this purchase. Please use an alternative payment method for your order'}
          </p>
        </div>
      )}
      
      {/* Form with ID for button association */}
      <form id="checkout-form" method="get" className="flex flex-col lg:flex-row gap-6 mt-8">
        <input type="hidden" name="confirm" value="1" />
        
        {/* Left Side - Personal & Payment */}
        <div className="w-full lg:w-2/3 bg-[#f5f5f5] rounded-lg p-4 md:p-6">
          <p className="text-xl font-bold text-primary-blue-2 pt-4 pb-3">{t('checkout.personal-information')}</p>
          <div className="font-secondary flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-3">
              <input
                name="first_name"
                type="text"
                value={first_name}
                readOnly
                placeholder="First Name"
                className="border-[1px] border-gray-400 bg-gray-100 rounded-md p-2 mt-2 w-full"
              />
              <input
                name="last_name"
                type="text"
                value={last_name}
                readOnly
                placeholder="Last Name"
                className="border-[1px] border-gray-400 bg-gray-100 rounded-md p-2 mt-2 w-full"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              <input
                name="email"
                type="email"
                value={email}
                readOnly
                placeholder="Email Address"
                className="border-[1px] border-gray-400 bg-gray-100 rounded-md p-2 mt-2 w-full"
              />
              <input
                name="mobile"
                type="text"
                value={mobile}
                readOnly
                placeholder="Phone Number"
                className="border-[1px] border-gray-400 bg-gray-100 rounded-md p-2 mt-2 w-full"
              />
            </div>
          </div>

          <p className="text-xl font-bold text-primary-blue-2 pt-6 pb-3">{t('checkout.payment-method')}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <label className="w-full sm:w-auto">
              <input
                type="radio"
                name="method"
                value="rakbank"
                defaultChecked={method === 'rakbank' || !method}
                className="peer hidden"
              />
              <div className="border-2 rounded-lg p-4 flex items-center gap-2 cursor-pointer peer-checked:border-primary-blue-2 peer-checked:bg-primary-blue-light">
                <img src="/images/debit-credit.webp" alt="Debit/Credit Card" className="w-16" />
                <p className="text-primary-grey text-xs">{t('checkout.debit-credit-card')}</p>
              </div>
            </label>
            <label className="w-full sm:w-auto relative">
              <input
                type="radio"
                name="method"
                value="tabby"
                defaultChecked={method === 'tabby'}
                className="peer hidden"
                disabled={!tabbyStatus.isApproved}
              />
              <div className={`border-2 rounded-lg p-4 flex items-center gap-2 cursor-pointer 
                ${!tabbyStatus.isApproved ? 'opacity-60 cursor-not-allowed' : 'peer-checked:border-primary-blue-2 peer-checked:bg-primary-blue-light'}`}>
                <img src="/images/tabby.webp" alt="Tabby" className="w-16" />
                <div>
                  <p className="text-primary-grey text-xs">{t('checkout.pay-in-4-no-interest-no-fees')}</p>
                  {tabbyStatus.isApproved ? (
                    <span className="text-green-600 text-xs block"></span>
                  ) : (
                    <span className="text-red-500 text-xs block">{t('checkout.not-available')}</span>
                  )}
                </div>
              </div>
              {tabbyStatus.error && typeof tabbyStatus.error === 'string' && (
                <div className="absolute bottom-0 translate-y-full left-0 text-xs text-red-500 mt-1">
                  {tabbyStatus.error}
                </div>
              )}
            </label>
          </div>

          {/* {tabbyStatus.isApproved && tabbyStatus.sessionData?.configuration?.available_products?.installments?.[0] && (
            <div className="mt-4 p-3 bg-blue-50 rounded-md border border-blue-200">
              <p className="text-sm font-medium text-gray-700 mb-1">Pay with Tabby:</p>
              <p className="text-xs text-gray-600">
                Split your payment into {tabbyStatus.sessionData.configuration.available_products.installments[0].installments_count} 
                {' '}interest-free payments of {' '}
                <span className="font-semibold">
                  AED {tabbyStatus.sessionData.configuration.available_products.installments[0].pay_per_installment}
                </span>
              </p>
            </div>
          )} */}

          {/* Tabby Promo Section */}
          <div className="mt-4">
            <TabbyPromoSection total={total} locale={params.locale} />
          </div>
        </div>

        {/* Right Side - Booking Info */}
        <div className="w-full lg:w-1/3 bg-[#f5f5f5] rounded-lg p-4 md:p-5">
          <p className="text-xl font-bold text-primary-blue-2 pt-4 pb-3">{t('checkout.booking-information')}</p>
          <p className="text-lg font-bold pt-4 pb-3">{title}</p>
          <img
            src={`https://www.centauruscharter.net/product/images/${image}`}
            alt="Yacht"
            className="w-24 md:w-32 rounded-lg mb-4"
          />
          <p className="text-primary-grey text-xs">{t('checkout.trip-date-and-time')}</p>
          <p className="text-black mb-2">
            {/* {new Date(booking_date).toISOString()} */}
            {new Date(booking_date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
          </p>
          <p className="text-primary-grey text-xs">Trip Hours</p>
          <p className="text-black mb-4">{hours} Hours</p>

          <div className="py-6 border-y-2 border-gray-300">
            <div className="flex justify-between text-primary-grey">
              <span>Yacht Price:</span>
              <span>AED {per_hour_price} per hour</span>
            </div>
            <div className="flex justify-between text-primary-grey mt-4">
              <span>Add-ons Price:</span>
              <span>AED {addons_price}</span>
            </div>
            <div className="flex justify-between text-primary-grey mt-4">
              <span>Subtotal:</span>
              <span>AED {subtotal}</span>
            </div>
            <div className="flex justify-between text-primary-grey mt-4">
              <span>Promo Discount:</span>
              <span>AED {promo_discount}</span>
            </div>
          </div>
          <div className="flex justify-between font-bold mt-4">
            <span>Total:</span>
            <span>AED {total}</span>
          </div>
        </div>
      </form>

      {/* Buttons remain outside form but linked via form attribute */}
      <div className="mx-auto grid md:grid-cols-2 gap-4 mt-12 md:px-24">
        <button 
          type="button"
          className="p-2 rounded-md font-semibold border-2 border-gray-500"
        >
          {t('checkout.cancel')}
        </button>
        <button
          type="submit"
          form="checkout-form"
          className="p-2 rounded-md font-semibold text-white bg-primary-blue-2 hover:bg-primary-blue"
        >
          {t('checkout.confirm-checkout')}
        </button>
      </div>
    </div>
  );
}