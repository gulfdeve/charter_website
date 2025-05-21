import React from 'react';

// Next.js App Router server component
export const runtime = 'edge';

// Helper for extracting real payment_id
function getRealPaymentId(raw) {
  if (!raw) return null;
  if (Array.isArray(raw)) {
    const real = raw.find((v) => typeof v === 'string' && v.length > 1);
    return real || raw[raw.length - 1];
  }
  return typeof raw === 'string' && raw.length > 1 ? raw : null;
}

async function fetchBooking(slug) {
  const url = new URL(
    `https://www.centauruscharter.net/api/api_new/booking_data/${slug}`
  );

  url.searchParams.set('token', process.env.CENTAURUS_API_KEY);

  const res = await fetch(url.toString(), {
    method: 'POST',
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed to load booking data (${res.status}): ${text}`);
  }

  const data = await res.json();
  return data[0];
}

export default async function PaymentResultPage({ searchParams }) {
  const { callback, slug } = searchParams;
  const paymentId = getRealPaymentId(searchParams.payment_id);

  // Fetch booking data
  let booking;
  try {
    booking = await fetchBooking(slug);
  } catch (err) {
    console.error('Failed to fetch booking data:', err);
    // Continue with the page render even if booking data fetch fails
  }

  // Determine status flags
  const isSuccess = callback === 'success';
  const isCancelled = callback === 'cancel';
  const isFailure = callback === 'failure';

  // Titles and messages
  let title = 'Thank you!';
  let message = 'Your booking has been successfully confirmed.';

  if (isCancelled) {
    title = 'Booking Cancelled';
    message = 'Your booking process was cancelled. No charges have been made.';
  } else if (isFailure) {
    title = 'Payment Failed';
    message = 'Unfortunately, there was an error processing your payment. Please try again or contact support.';
  }

  // Conditional padding classes
  const containerPadding = isSuccess ? 'py-10' : 'py-32';
  const innerPaddingTop = isSuccess ? 'pt-10' : 'pt-32';

  // Format date for display
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div className={
      `container mx-auto ${containerPadding} bg-white nav-space`
    }>
      <div className={
        `flex flex-col items-center justify-center ${innerPaddingTop}`
      }>
        <h2 className="text-primary-blue-2 font-bold">{title}</h2>
        <p className="max-w-2xl text-primary-grey text-center font-bold mb-5 md:text-xl">
          {message}
        </p>

        {/* Show image only on success */}
        {isSuccess && (
          <img
            src="/images/booking-confirmed.webp"
            alt="thank you"
            className="w-1/2 md:w-1/3 lg:w-1/6 my-5"
          />
        )}

        {isSuccess && (
          <p className="max-w-xl text-primary-grey text-center italic">
            A detailed invoice has been sent to your registered email address.<br />
            Please check your inbox for confirmation. If you have any questions or
            need further assistance, feel free to{' '}
            <span className="text-primary-blue-2">
              <a href="/contact" target="_blank" rel="noopener noreferrer">
                contact us.
              </a>
            </span>
          </p>
        )}

        {isCancelled && (
          <p className="max-w-xl text-primary-grey text-center italic">
            You have cancelled the booking. If this was a mistake or you need help,
            please{' '}
            <a href="/contact" className="text-primary-blue-2" rel="noopener noreferrer">
              contact us
            </a>.
          </p>
        )}

        {isFailure && (
          <p className="max-w-xl text-primary-grey text-center italic">
            Payment failed. Please try again or{' '}
            <a href="/contact" className="text-primary-blue-2" rel="noopener noreferrer">
              contact support
            </a>.
          </p>
        )}

        {isSuccess && booking && (
          <div className="bg-[#f5f5f5] w-full max-w-2xl rounded-lg p-6 m-5">
            {/* Booking Summary */}
            <div className="flex flex-col s:flex-row justify-between pb-5 border-b-2">
              <div className="flex flex-col">
                <p className="text-primary-grey text-xs">Booking No.</p>
                <p className="text-black">{slug}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-primary-grey text-xs">Booking Date & Time</p>
                <p className="text-black">{formatDate(booking.created_at)}</p>
              </div>
            </div>

            {/* Yacht Trip Details */}
            <p className="text-xl font-bold text-primary-blue-2 pt-6 pb-3">Yacht Trip Details</p>
            <div className="grid grid-cols-1 s:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <p className="text-primary-grey text-xs">Yacht Name</p>
                <p className="text-black">{booking.title}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-primary-grey text-xs">Trip Hours</p>
                <p className="text-black">{booking.hours} Hours</p>
              </div>
              <div className="flex flex-col">
                <p className="text-primary-grey text-xs">Trip Date & Time</p>
                <p className="text-black">
                  {formatDate(booking.booking_date)}
                </p>
              </div>
            </div>

            {/* Customer Details */}
            <p className="text-xl font-bold text-primary-blue-2 pt-6 pb-3">Customer Details</p>
            <div className="grid grid-cols-1 s:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <p className="text-primary-grey text-xs">Customer Name</p>
                <p className="text-black">{`${booking.first_name} ${booking.last_name}`}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-primary-grey text-xs">Phone Number</p>
                <p className="text-black">{booking.mobile}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-primary-grey text-xs">Email Address</p>
                <p className="text-black">{booking.email}</p>
              </div>
            </div>

            {/* Payment Details */}
            <p className="text-xl font-bold text-primary-blue-2 pt-6 pb-3">Payment Details</p>
            <div className="grid grid-cols-1 s:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <p className="text-primary-grey text-xs">Payment Method</p>
                <p className="text-black">Tabby</p>
              </div>
              <div className="flex flex-col">
                <p className="text-primary-grey text-xs">Total Price</p>
                <p className="text-black">AED {booking.amount}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-primary-grey text-xs">Amount Paid</p>
                <p className="text-black">AED {booking.amount}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
