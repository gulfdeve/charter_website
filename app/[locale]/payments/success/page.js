// File: app/payment/success/page.jsx
import React from "react";
import { getTranslations } from 'next-intl/server';
import Link from "next/link";

// Next.js App Router server component
export const runtime = "edge";

// Helper for extracting real payment_id
function getRealPaymentId(raw) {
  if (!raw) return null;
  if (Array.isArray(raw)) {
    const real = raw.find((v) => typeof v === "string" && v.length > 1);
    return real || raw[raw.length - 1];
  }
  return typeof raw === "string" && raw.length > 1 ? raw : null;
}

async function fetchBooking(slug) {
  const url = new URL(
    `https://www.centauruscharter.net/api/api_new/booking_data/${slug}`
  );
  url.searchParams.set("token", process.env.CENTAURUS_API_KEY);

  const res = await fetch(url.toString(), {
    method: "POST",
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed to load booking data (${res.status}): ${text}`);
  }

  const [booking] = await res.json();
  return booking;
}

// The page component must be the default export named 'Page'
export default async function Page({ searchParams }) {
  const t = await getTranslations();
  const { slug } = searchParams;
  const paymentId = getRealPaymentId(searchParams.payment_id);

  let booking = null;
  try {
    booking = await fetchBooking(slug);
  } catch (err) {
    console.error("Error fetching booking:", err);
  }

  const formatDate = (iso) =>
    new Date(iso).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  return (
    <div className="container mx-auto py-10 bg-white nav-space">
      <div className="flex flex-col items-center justify-center pt-10">
        <h2 className="text-primary-blue-2 font-bold text-2xl mb-4">
          {t('payment_success.payment-successful')}
        </h2>
        <p className="max-w-xl text-primary-grey text-center mb-6">
          {t('thank-you-paragraph.thank-you-for-your-booking-a-confirmation-and-invoice-have-been-sent-to-your-email')}
        </p>
        <img
          src="/images/booking-confirmed.webp"
          alt="thank you"
          className="w-1/2 md:w-1/3 lg:w-1/6 my-5"
        />
        {booking && (
          <div className="bg-[#f5f5f5] w-full max-w-2xl rounded-lg p-6 m-5">
            {/* Booking Summary */}
            <div className="flex flex-col s:flex-row justify-between pb-5 border-b-2">
              <div className="flex flex-col">
                <p className="text-primary-grey text-xs">{t('checkout.booking-information')}</p>
                <p className="text-black">{slug}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-primary-grey text-xs">{t('checkout.trip-date-and-time')}</p>
                <p className="text-black">{formatDate(booking.created_at)}</p>
              </div>
            </div>

            {/* Yacht Trip Details */}
            <p className="text-xl font-bold text-primary-blue-2 pt-6 pb-3">
              {t('checkout.trip-date-and-time')}
            </p>
            <div className="grid grid-cols-1 s:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <p className="text-primary-grey text-xs">{t('checkout.yacht-name')}</p>
                <p className="text-black">{booking.title}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-primary-grey text-xs">{t('checkout.trip-hours')}</p>
                <p className="text-black">{booking.hours} Hours</p>
              </div>
              <div className="flex flex-col">
                <p className="text-primary-grey text-xs">{t('checkout.trip-date-and-time')}</p>
                <p className="text-black">{formatDate(booking.booking_date)}</p>
              </div>
            </div>

            {/* Customer Details */}
            <p className="text-xl font-bold text-primary-blue-2 pt-6 pb-3">
              {t('checkout.customer-details')}
            </p>
            <div className="grid grid-cols-1 s:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <p className="text-primary-grey text-xs">{t('checkout.customer-name')}</p>
                <p className="text-black">{`${booking.first_name} ${booking.last_name}`}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-primary-grey text-xs">{t('checkout.phone-number')}</p>
                <p className="text-black">{booking.mobile}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-primary-grey text-xs">{t('checkout.email-address')}</p>
                <p className="text-black">{booking.email}</p>
              </div>
            </div>

            {/* Payment Details */}
            <p className="text-xl font-bold text-primary-blue-2 pt-6 pb-3">
              {t('checkout.payment-details')}
            </p>
            <div className="grid grid-cols-1 s:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <p className="text-primary-grey text-xs">{t('checkout.payment-method')}</p>
                <p className="text-black">Tabby</p>
              </div>
              <div className="flex flex-col">
                <p className="text-primary-grey text-xs">{t('checkout.total')}</p>
                <p className="text-black">AED {booking.amount}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-primary-grey text-xs">{t('checkout.amount-paid')}</p>
                <p className="text-black">AED {booking.amount}</p>
              </div>
            </div>
          </div>
        )}
        {/* Add Go to Homepage button */}
        <Link
          href="/"
          className="mt-8 inline-block px-6 py-3 bg-primary-blue-2 text-white font-semibold rounded-lg shadow hover:bg-primary-blue-1 transition-colors text-lg"
        >
          {t('checkout.go-to-homepage')}
        </Link>
      </div>
    </div>
  );
}
