import React from 'react'

const page = () => {
  return (
    <div className='container mx-auto py-10 bg-white nav-space'>
      <div className='flex flex-col items-center justify-center pt-10'>
        <h1 className='text-primary-blue-2 font-bold text-2xl md:text-3xl'>Checkout</h1>
      </div>
      <div className='flex flex-col lg:flex-row gap-6 mt-8'>
        {/* Left Side - Personal & Payment */}
        <div className='w-full lg:w-2/3 bg-[#f5f5f5] rounded-lg p-4 md:p-6'>
          <div>
            <p className='text-xl font-bold text-primary-blue-2 pt-4 pb-3'>Personal Information</p>
          </div>
          <form className='font-Inter flex flex-col gap-4'>
            <div className='flex flex-col md:flex-row gap-3'>
              <div className='flex flex-col w-full'>
                <label className='text-primary-grey text-xs'>First Name</label>
                <input type="text" placeholder='First Name' className='border-[1px] border-gray-400 rounded-md p-2 mt-2' />
              </div>
              <div className='flex flex-col w-full'>
                <label className='text-primary-grey text-xs'>Last Name</label>
                <input type="text" placeholder='Last Name' className='border-[1px] border-gray-400 rounded-md p-2 mt-2' />
              </div>
            </div>
            <div className='flex flex-col md:flex-row gap-3'>
              <div className='flex flex-col w-full'>
                <label className='text-primary-grey text-xs'>Email Address</label>
                <input type="email" placeholder='Email Address' className='border-[1px] border-gray-400 rounded-md p-2 mt-2' />
              </div>
              <div className='flex flex-col w-full'>
                <label className='text-primary-grey text-xs'>Phone Number</label>
                <input type="text" placeholder='Phone Number' className='border-[1px] border-gray-400 rounded-md p-2 mt-2' />
              </div>
            </div>
          </form>

          <p className='text-xl font-bold text-primary-blue-2 pt-6 pb-3'>Payment Method</p>
          <div className='flex flex-col sm:flex-row gap-4'>
            {/* Option selected */}
            <div className='w-full sm:w-auto'>
              <div className='flex gap-2 items-center p-4 bg-primary-blue-light border-2 border-primary-blue-2 rounded-lg'>
                <img src="/images/debit-credit.webp" alt="Credit Card and Debit Card" className='w-12' />
                <p className='text-primary-grey text-xs'>Debit/Credit Card</p>
              </div>
            </div>
            {/* Option Unselected */}
            <div className='w-full sm:w-auto'>
              <div className='flex gap-2 items-center p-4 border-2 border-gray-300 rounded-lg'>
                <img src="/images/tabby.webp" alt="Tabby" className='w-12' />
                <p className='text-primary-grey text-xs'>Tabby</p>
              </div>
            </div>
          </div>
        
        </div>
        {/* Right Side - Booking Info */}
        <div className='w-full lg:w-1/3 bg-[#f5f5f5] rounded-lg p-4 md:p-5'>
          <div>
            <p className='text-xl font-bold text-primary-blue-2 pt-4 pb-3'>Booking Information</p>
          </div>
          <p className='text-lg font-bold pt-4 pb-3'>56 Ft Yacht - Lagoona</p>
          <div className='flex flex-col s:flex-row gap-4'>
            <img src="/midday.webp" alt="Yacht" className='w-24 md:w-32 rounded-lg' />
            <div className='flex lg:flex-col flex-row gap-6 lg:gap-2'>
                <div className='flex flex-col'>
                <p className='text-primary-grey text-xs'>Trip Date & Time</p>
                <p className='text-black'>17 May, 2025<br />7:00 PM to 9:00 PM </p>
                </div>
                <div className='flex flex-col'>
                <p className='text-primary-grey text-xs'>Trip Hours</p>
                <p className='text-black'>2 Hours</p>
                </div>
            </div>
          </div>
          <div className='flex flex-col my-4 font-Inter'>
            <label className='text-primary-grey text-xs'>Promo Code</label>
            <div className='flex flex-col sm:flex-row gap-3 mt-2'>
              <input type="text" placeholder='Enter Promo Code' className='border-[1px] border-gray-400 rounded-md p-2 w-full' />
              <button className='w-full sm:w-auto bg-primary-blue-2 text-white rounded-md px-6 py-2'>Apply</button>
            </div>
          </div>
          <div className='py-6 border-y-2 border-gray-300'>
            <div className='flex flex-row justify-between'>
              <p className='text-primary-grey'>Yacht Price:</p>
              <p className='text-primary-grey font-semibold'>AED 500 per hour</p>
            </div>
            <div className='flex flex-row justify-between mt-4'>
              <p className='text-primary-grey'>Add-ons Price:</p>
              <p className='text-primary-grey font-semibold'>0</p>
            </div>
            <div className='flex flex-row justify-between mt-4'>
              <p className='text-primary-grey'>Subtotal:</p>
              <p className='text-primary-grey font-semibold'>AED 1040</p>
            </div>
            <div className='flex flex-row justify-between mt-4'>
              <p className='text-primary-grey'>Promo Discount:</p>
              <p className='text-primary-grey font-semibold'>AED 520</p>
            </div>
          </div>
          <div className='flex flex-row justify-between mt-4'>
            <p className='text-primary-grey'>Total:</p>
            <p className='text-primary-red font-bold'>AED 520</p>
          </div>
        </div>
      </div>
      <div className='mx-auto grid md:grid-cols-2 gap-4 mt-12 md:px-24'>
            <button className='p-2 rounded-md font-semibold border-2 border-gray-500'>Cancel</button>
            <button className='p-2 rounded-md font-semibold text-white bg-primary-blue-2 hover:bg-primary-blue'>Confirm Checkout</button>
        </div>
    </div>
  )
}

export default page