import Link from "next/link";
import React from "react";

const SecondFooter = () => {
  return (
    <div className="bg-[#0E2243]">
      <div className="flex justify-between flex-col gap-10 lg:flex-row lg:gap-0 items-center p-4 container mx-auto ">
        <div className="flex flex-col gap-2">
          <p className="text-[#969696] text-center  lg:text-start">
            Official Partner
          </p>
          <a href="https://centaurusint.net/" target="_blank">
            <img
              src="/Centaurus International.png"
              alt="Centaurus International"
            />
          </a>
        </div>
        <div className="flex h-5 items-center justify-between gap-7 md:pt-2">
          <a
            href="https://play.google.com/store/apps/details?id=com.centaurus.charter&hl=en"
            target="_blank"
          >
            <img src="/gplay.svg" className="w-[9rem]" />
          </a>
          <a
            href="https://apps.apple.com/us/app/centaurus-charter/id6447861141"
            target="_blank"
          >
            <img src="/appstore.svg " className="w-28" />
          </a>
        </div>
        <div className="flex flex-row  md:flex-row items-center md:items-start gap-16 xs:gap-9 ">
          <div className="flex flex-col xs:flex-row gap-3">
            <img src="/Google.png" />

            <img src="/Tripadvisor.png" />
          </div>
          <div className="flex flex-col xs:flex-row items-center  gap-3">
            <img src="/Cash.png" />
            <img src="/Visa.png" />
            <img src="/Mastercard.png" />
          </div>
        </div>
        <div className="flex lg:flex-col justify-between gap-4 xs:gap-10 lg:gap-2 text-[#969696]">
          <Link
            href="/terms-and-condition"
            className="hover:underline  text-xs xs:text-sm xs:pr-0"
          >
            Terms and Conditions
          </Link>
          <Link
            href="/privacy-and-policy"
            className="hover:underline  text-xs xs:text-sm xs:pr-10"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SecondFooter;
