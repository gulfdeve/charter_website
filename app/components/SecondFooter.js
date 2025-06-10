import { useRouter, usePathname, Link } from "@/app/i18n/routing";
import React from "react";
import Image from "next/image";

const SecondFooter = () => {
  return (
    <div className="bg-primary-blue-3">
      <div className="flex justify-between flex-col gap-10 lg:flex-row lg:gap-10 items-center p-4 container mx-auto ">
        <div className="flex flex-col gap-2">
          <p className="text-text-primary-white text-center  lg:text-start">
            Official Partner
          </p>
          <a href="http://bit.ly/3BOrIIF" target="_blank">
            <Image
              src="/Centaurus-Internatioanl-Horizontal-white.webp"
              alt="Centaurus International"
              width={152}
              height={100}
            />
          </a>
        </div>
        <div className="flex h-5 items-center justify-between gap-7 md:pt-2">
          <a
            href="https://play.google.com/store/apps/details?id=com.centaurus.charter&hl=en"
            target="_blank"
          >
            <Image
              src="/Google store@2x.webp"
              alt="google play logo"
              width={152}
              height={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </a>
          <a
            href="https://apps.apple.com/us/app/centaurus-charter/id6447861141"
            target="_blank"
          >
            <Image
              src="/Apple Store@2x.webp"
              alt="app store logo"
              width={152}
              height={100}
            />
          </a>
        </div>
        {/* For Google and TripAdvisor logos */}
        <div className="flex flex-row md:flex-row items-center gap-16 xs:gap-9">
          <div className="flex flex-row gap-3">
            {" "}
            {/* Changed to always be flex-row */}
            <Link href="https://g.co/kgs/jfR6mP6" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/google-logo.webp"
              alt="google logo"
              width={80}
              height={100}
            />
            </Link>
            <Link href="https://www.tripadvisor.com/Attraction_Review-g295424-d15699786-Reviews-Centaurus_Yachts_Boats_Dubai-Dubai_Emirate_of_Dubai.html" target="_blank" rel="noopener noreferrer">
            <Image
              src="/Tripadvisor-logo.webp"
              alt="tripadvisor logo"
              width={80}
              height={0}
            />
            </Link>
          </div>
          <div className="flex flex-row items-center gap-3">
            {" "}
            {/* Changed to always be flex-row */}
            <Image src="/Cash.png" alt="cash-logo" width={45} height={100} />
            <Image src="/Visa.png" alt="visa-logo" width={45} height={100} />
            <Image
              src="/Mastercard.png"
              alt="mastercard-logo"
              width={45}
              height={100}
            />
            <Image src="/images/crypto.webp" alt="crpto-logo" width={45} height={100} />
          </div>
        </div>
        <div className="flex lg:flex-col justify-between gap-4 xs:gap-10 lg:gap-2 text-text-primary-white">
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
