import React from 'react'

const CopyrightFooter = () => {
  return (
    <div className="bg-[#1D1D1D] p-4 flex flex-col md:flex-row w-full items-center justify-center gap-10">
        <div className="text-white max-w-[500px] w-full text-center md:w-auto md:max-w-max">
            © 2024 Centaurus Passenger Yachts &amp; Boats Rental LLC, All rights reserved.
        </div>
        <img src="CentaurusLogoWhite.png" alt="Centaurus Passenger Yachts & Boats Rental LLC" className="" />
    </div>
  )
}

export default CopyrightFooter