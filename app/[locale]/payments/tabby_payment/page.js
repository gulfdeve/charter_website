import React from 'react';

const PaymentResultPage = ({ searchParams }) => {
  const { callback } = searchParams;

  // Determine status
  const isSuccess = callback === 'success';
  const isCancelled = callback === 'cancel';
  const isFailure = callback === 'failure';

  // Default title and message
  let title = 'Thank you!';
  let message = 'Your booking has been successfully confirmed.';
  let imageSrc = '/images/booking-confirmed.webp';
  let imageAlt = 'thank you';

  if (isCancelled) {
    title = 'Booking Cancelled';
    message = 'Your booking process was cancelled. No charges have been made.';
   
  } else if (isFailure) {
    title = 'Payment Failed';
    message = 'Unfortunately, there was an error processing your payment. Please try again or contact support.';
    
  }

  return (
    <div className="container mx-auto   bg-white nav-space">
      <div className="flex flex-col items-center h-screen justify-center pt-1">
        {/* Header */}
        <h2 className="text-primary-blue-2 font-bold">{title}</h2>
        <p className="max-w-2xl text-primary-grey text-center font-bold mb-5 md:text-xl">
          {message}
        </p>
        

        {/* Contextual sub-message */}
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

        {/* Detailed summary shown only on success */}
        {isSuccess && (
          <div className="bg-[#f5f5f5] w-full max-w-2xl rounded-lg p-6 m-5">
            {/* Booking Summary */}
            <div className="flex flex-col s:flex-row justify-between pb-5 border-b-2">
              <div className="flex flex-col">
                <p className="text-primary-grey text-xs">Booking No.</p>
                <p className="text-black">123456789</p>
              </div>
              <div className="flex flex-col">
                <p className="text-primary-grey text-xs">Booking Date & Time</p>
                <p className="text-black">05 May, 2025 - 3:08 PM</p>
              </div>
            </div>

            {/* Yacht Trip Details */}
            <p className="text-xl font-bold text-primary-blue-2 pt-6 pb-3">Yacht Trip Details</p>
            <div className="grid grid-cols-1 s:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <p className="text-primary-grey text-xs">Yacht Name</p>
                <p className="text-black">56 Ft Yacht - Lagoona</p>
              </div>
              <div className="flex flex-col">
                <p className="text-primary-grey text-xs">Trip Hours</p>
                <p className="text-black">2 Hours</p>
              </div>
              <div className="flex flex-col">
                <p className="text-primary-grey text-xs">Trip Date & Time</p>
                <p className="text-black">
                  17 May, 2025<br />7:00 PM to 9:00 PM
                </p>
              </div>
            </div>

            {/* Customer Details */}
            <p className="text-xl font-bold text-primary-blue-2 pt-6 pb-3">Customer Details</p>
            <div className="grid grid-cols-1 s:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <p className="text-primary-grey text-xs">Booked by</p>
                <p className="text-black">Bianca Quicho</p>
              </div>
              <div className="flex flex-col">
                <p className="text-primary-grey text-xs">Phone Number</p>
                <p className="text-black">+971 124 589 406</p>
              </div>
              <div className="flex flex-col">
                <p className="text-primary-grey text-xs">Email Address</p>
                <p className="text-black">bianca@gmail.com</p>
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
                <p className="text-black">AED 25,000</p>
              </div>
              <div className="flex flex-col">
                <p className="text-primary-grey text-xs">Amount Paid</p>
                <p className="text-black">AED 25,000</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentResultPage;
