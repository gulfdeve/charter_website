import React from 'react';
import { redirect } from 'next/navigation';

export const dynamicParams = true;
export const runtime = 'edge';

async function fetchBooking(slug) {
  const res = await fetch(
    `https://www.centauruscharter.net/api/api_new/booking_data/${slug}`,
    { cache: 'no-store' }
  );
  if (!res.ok) throw new Error('Failed to load booking data');
  const data = await res.json();
  return data[0];
}

export default async function CheckoutPage({ params, searchParams }) {
  const { slug } = params;
  const { confirm, method } = searchParams;

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

  const {
    title,
    image,
    booking_date,
    start_time,
    end_time,
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
  const subtotal = yachtPrice * hours + addons_price;
  const total = subtotal - promo_discount;

  return (
    <div className="container mx-auto py-10 bg-white nav-space">
      <div className="flex flex-col items-center justify-center pt-10">
        <h1 className="text-primary-blue-2 font-bold text-2xl md:text-3xl">Checkout</h1>
      </div>
      
      {/* Form with ID for button association */}
      <form id="checkout-form" method="get" className="flex flex-col lg:flex-row gap-6 mt-8">
        <input type="hidden" name="confirm" value="1" />
        
        {/* Left Side - Personal & Payment */}
        <div className="w-full lg:w-2/3 bg-[#f5f5f5] rounded-lg p-4 md:p-6">
          <p className="text-xl font-bold text-primary-blue-2 pt-4 pb-3">Personal Information</p>
          <div className="font-Inter flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-3">
              <input
                name="first_name"
                type="text"
                defaultValue={first_name}
                placeholder="First Name"
                className="border-[1px] border-gray-400 rounded-md p-2 mt-2 w-full"
              />
              <input
                name="last_name"
                type="text"
                defaultValue={last_name}
                placeholder="Last Name"
                className="border-[1px] border-gray-400 rounded-md p-2 mt-2 w-full"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              <input
                name="email"
                type="email"
                defaultValue={email}
                placeholder="Email Address"
                className="border-[1px] border-gray-400 rounded-md p-2 mt-2 w-full"
              />
              <input
                name="mobile"
                type="text"
                defaultValue={mobile}
                placeholder="Phone Number"
                className="border-[1px] border-gray-400 rounded-md p-2 mt-2 w-full"
              />
            </div>
          </div>

          <p className="text-xl font-bold text-primary-blue-2 pt-6 pb-3">Payment Method</p>
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
                <img src="/images/debit-credit.webp" alt="Debit/Credit Card" className="w-12" />
                <p className="text-primary-grey text-xs">Debit/Credit Card</p>
              </div>
            </label>
            <label className="w-full sm:w-auto">
              <input
                type="radio"
                name="method"
                value="tabby"
                defaultChecked={method === 'tabby'}
                className="peer hidden"
              />
              <div className="border-2 rounded-lg p-4 flex items-center gap-2 cursor-pointer peer-checked:border-primary-blue-2 peer-checked:bg-primary-blue-light">
                <img src="/images/tabby.webp" alt="Tabby" className="w-12" />
                <p className="text-primary-grey text-xs">Tabby</p>
              </div>
            </label>
          </div>
        </div>

        {/* Right Side - Booking Info */}
        <div className="w-full lg:w-1/3 bg-[#f5f5f5] rounded-lg p-4 md:p-5">
          <p className="text-xl font-bold text-primary-blue-2 pt-4 pb-3">Booking Information</p>
          <p className="text-lg font-bold pt-4 pb-3">{title}</p>
          <img
            src={`https://www.centauruscharter.net/product/images/${image}`}
            alt="Yacht"
            className="w-24 md:w-32 rounded-lg mb-4"
          />
          <p className="text-primary-grey text-xs">Trip Date & Time</p>
          <p className="text-black mb-2">
            {new Date(booking_date).toLocaleDateString('en-GB', { 
              day: '2-digit', 
              month: 'short', 
              year: 'numeric' 
            })} <br />
            {start_time} to {end_time}
          </p>
          <p className="text-primary-grey text-xs">Trip Hours</p>
          <p className="text-black mb-4">{hours} Hours</p>

          <div className="py-6 border-y-2 border-gray-300">
            <div className="flex justify-between text-primary-grey">
              <span>Yacht Price:</span>
              <span>AED {amount} per hour</span>
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
          Cancel
        </button>
        <button
          type="submit"
          form="checkout-form"  // Associate with form
          className="p-2 rounded-md font-semibold text-white bg-primary-blue-2 hover:bg-primary-blue"
        >
          Confirm Checkout
        </button>
      </div>
    </div>
  );
}