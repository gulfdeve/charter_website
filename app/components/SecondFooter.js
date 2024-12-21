import React from 'react'

const SecondFooter = () => {
  return (
    <div className="bg-[#0E2243]">
        <div className="flex justify-between flex-col gap-10 lg:flex-row lg:gap-0 items-center p-4 container mx-auto ">
            <div className="flex flex-col gap-2">
                <p className="text-[#969696] text-center lg:text-start">Official Partner</p>
                <img src="Centaurus International.png" alt="Centaurus International" />
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-5">
                <img src="Google.png" />
                <img src="Tripadvisor.png" />
                <div className="flex items-center ms-4 gap-3">
                    <img src="Cash.png" />
                    <img src="Visa.png" />
                    <img src="Mastercard.png" />
                </div>
            </div>
            <div className="flex lg:flex-col gap-5 lg:gap-2 text-[#969696]">
                <a href="" className="hover:underline">Terms and Conditions</a>
                <a href="" className="hover:underline">Privacy Policy</a>
            </div>
        </div>
    </div>
  )
}

export default SecondFooter