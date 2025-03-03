'use client'
import React, { useState } from "react";
import Image from "next/image";

const Sociallink = () => {
  const [email, setEmail] = useState("");
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      return;
    }

    try {
      const queryParams = new URLSearchParams({ email }).toString();
      const url = `https://www.centauruscharter.com/api/api_new/save_subscriber?${queryParams}`;

      const response = await fetch(url, {
        method: "POST",
      });

      const data = await response.json();
      console.log("API Response:", data);

      if (response.ok && data.status === "success") {
        setEmail("");
        setSubmissionSuccess(true);

        // Auto-hide the success message after 5 seconds
        setTimeout(() => {
          setSubmissionSuccess(false);
        }, 5000);
      }
    } catch (error) {
      console.log("Error submitting form:", error);
    }
  };

  return (
    <div className="bg-[#1B498F] w-full h-[20rem] lg:h-[8rem] flex items-center justify-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between xl:px-12 lg:px-3 gap-5 lg:gap-8 xl:gap-20">
        <div className="order-1 lg:order-2 flex flex-row items-center justify-center gap-5">
          <a href="https://www.facebook.com/centauruscharteryachtsrental/" target="_blank" rel="noopener noreferrer">
            <Image src="/Facebook.png" alt="Facebook" width={30} height={30} />
          </a>
          <a href="https://twitter.com/centaurscharter" target="_blank" rel="noopener noreferrer">
            <Image src="/Twitter.png" alt="Twitter" width={30} height={30} />
          </a>
          <a href="https://www.instagram.com/centauruscharter/" target="_blank" rel="noopener noreferrer">
            <Image src="/Instagram.png" alt="Instagram" width={30} height={30} />
          </a>
          <a href="https://www.pinterest.com/centauruscharteryachtsdubai/" target="_blank" rel="noopener noreferrer">
            <Image src="/Pinterest.png" alt="Pinterest" width={30} height={30} />
          </a>
          <a href="https://www.linkedin.com/company/centauruscharter" target="_blank" rel="noopener noreferrer">
            <Image src="/LinkedIn.png" alt="LinkedIn" width={30} height={30} />
          </a>
          <a href="https://www.youtube.com/channel/UCcvuO64sGm4HxfNMZRYfScQ?view_as=subscriber" target="_blank" rel="noopener noreferrer">
            <Image src="/Youtube.png" alt="Youtube" width={30} height={30} />
          </a>
        </div>

        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start justify-center">
          <p className="text-white text-lg font-bold pt-2.5 lg:text-sm xl:text-lg">Amazing Offers just for you</p>
          <p className="text-white text-lg pb-2 text-center lg:text-left lg:text-sm xl:text-lg">Sign up to receive amazing offers and tips</p>
        </div>

        <form onSubmit={handleSubmit} className="order-3 flex flex-col items-center overflow-hidden max-w-md xxs:px-2">
          <div className="flex w-full">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-6 py-4 xxs:px-1 md:px-8 lg:px-1 lg:py-2 xl:px-2 xxs:text-xs text-sm sm:text-lg lg:text-sm xl:text-lg font-bold text-gray-700 border border-black focus:outline-none placeholder:text-lg placeholder:text-gray-700"
            />
            <button
              type="submit"
              className="bg-gray-300 px-8 py-3 xxs:py-3.5 xxs:px-2 xxs:text-sm xs:px-3 md:py-4 text-lg sm:text-lg lg:px-7 lg:py-2 xl:px-7 2xl:px-7 2xl:py-3 lg:text-sm xl:py-1 xl:text-md font-bold text-gray-800 hover:bg-gray-400 border border-black"
            >
              SIGN UP
            </button>
          </div>
          {submissionSuccess && (
            <p className="mt-2 text-green-500 text-sm">Subscription successful!</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Sociallink;
