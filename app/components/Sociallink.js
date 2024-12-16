import React from "react";
import Image from 'next/image';
import Link from 'next/link';  // Import Next.js Link component

const Sociallink = () => {
  return (
    <div className="bg-[#1B498F] w-full h-[20rem] lg:h-[8rem] flex flex-col lg:flex-row items-center justify-center">
      {/* Mobile Version */}
      <div className="block lg:hidden">
        <div className="flex flex-row items-center justify-center gap-5">
          <Link href="https://www.facebook.com" passHref target="_blank">
            <Image src="/Facebook.png" alt="Facebook" width={26} height={26} />
          </Link>
          <Link href="https://www.twitter.com" passHref target="_blank">
            <Image src="/Twitter.png" alt="Twitter" width={26} height={26} />
          </Link>
          <Link href="https://www.instagram.com" passHref target="_blank">
            <Image src="/Instagram.png" alt="Instagram" width={26} height={26} />
          </Link>
          <Link href="https://www.pinterest.com" passHref target="_blank">
            <Image src="/Pinterest.png" alt="Pinterest" width={26} height={26} />
          </Link>
          <Link href="https://www.linkedin.com" passHref target="_blank">
            <Image src="/LinkedIn.png" alt="LinkedIn" width={26} height={26} />
          </Link>
          <Link href="https://www.youtube.com" passHref target="_blank">
            <Image src="/Youtube.png" alt="Youtube" width={26} height={26} />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-Montserrat text-white text-lg font-bold pt-2.5">
            Amazing Offers just for you
          </h1>
          <h1 className="font-Montserrat text-white text-lg pb-2 text-center">
            Sign up to receive amazing offers and tips
          </h1>
        </div>
        <div className="flex items-center overflow-hidden max-w-md xxs:px-2">
          <input
            type="email"
            placeholder="Your Email"
            className="flex-grow px-6 py-4 xxs:px-1 md:px-8 xxs:text-xs text-sm sm:text-lg font-Montserrat font-bold text-gray-700 border border-black focus:outline-none placeholder:font-Montserrat placeholder:text-lg placeholder:text-gray-700"
          />
          <button className="bg-gray-300 px-8 py-3 xxs:py-3.5 xxs:px-2 xxs:text-sm xs:px-3 md:py-4 text-lg sm:text-lg font-Montserrat font-bold text-gray-800 hover:bg-gray-400 border border-black">
            SIGN UP
          </button>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="lg:block hidden">
        <div className="flex flex-row items-center justify-between lg:px-12 gap-20">
          <div className="flex flex-col items-start justify-center">
            <h1 className="font-Montserrat text-white lg:text-sm xl:text-lg font-bold pt-2.5">
              Amazing Offers just for you
            </h1>
            <h1 className="font-Montserrat text-white xl:text-lg lg:text-sm pb-2">
              Sign up to receive amazing offers and tips
            </h1>
          </div>
          <div className="flex flex-row items-center justify-center gap-5">
            <Link href="https://www.facebook.com" passHref target="_blank">
              <Image src="/Facebook.png" alt="Facebook" width={26} height={26} />
            </Link>
            <Link href="https://www.twitter.com" passHref target="_blank">
              <Image src="/Twitter.png" alt="Twitter" width={26} height={26} />
            </Link>
            <Link href="https://www.instagram.com" passHref target="_blank">
              <Image src="/Instagram.png" alt="Instagram" width={26} height={26} />
            </Link>
            <Link href="https://www.pinterest.com" passHref target="_blank">
              <Image src="/Pinterest.png" alt="Pinterest" width={26} height={26} />
            </Link>
            <Link href="https://www.linkedin.com" passHref target="_blank">
              <Image src="/LinkedIn.png" alt="LinkedIn" width={26} height={26} />
            </Link>
            <Link href="https://www.youtube.com" passHref target="_blank">
              <Image src="/Youtube.png" alt="Youtube" width={26} height={26} />
            </Link>
          </div>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Your Email"
              className="px-1 py-2 xl:text-lg xl:px-2 text-sm sm:text-lg font-Montserrat font-bold text-gray-700 border border-black focus:outline-none placeholder:font-Montserrat placeholder:text-lg placeholder:text-gray-700"
            />
            <button className="bg-gray-300 px-7 py-1 xl:py-2 xl:text-lg lg:text-sm font-Montserrat font-bold text-gray-800 hover:bg-gray-400 border border-black">
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sociallink;
