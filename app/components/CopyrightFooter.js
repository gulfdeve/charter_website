import React from 'react'

const CopyrightFooter = () => {
  return (
    <div className="bg-[#1D1D1D] p-4 flex flex-row md:flex-row w-full items-center justify-center gap-8">
        <div className="text-white text-xs max-w-[650px] w-full text-left md:text-center md:w-auto md:max-w-max ">
            © {/*get year*/ 
            new Date().getFullYear()
            } Centaurus Passenger Yachts &amp; Boats Rental LLC, All rights reserved.
        </div>
        <img src="/CentaurusLogoWhite.png" alt="centaurus charter logo" className="w-32 md:w-auto" />
    </div>
  )
}

export default CopyrightFooter