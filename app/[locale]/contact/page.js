import { MdLocationOn } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Page() {
  return (
    <>
      <div className="bg-white w-full h-full">
        <div>
          <img alt="contact header banner" src="./Contactheader.webp" className="w-full" />
        </div>
        <div className="flex flex-col items-center justify-center py-10 ">
          <h1 className=" text-[#0D2343] text-center font-bold text-4xl pb-4">
         
           CONTACT US
          </h1>

          <p className=" text-[#848484] text-center  text-base  px-3 lg:px-12 xl:px-56">
            We at Centaurus Charter are well experienced to meet the
            expectations of your next yachting adventure in Dubai. Please fill
            ontact you shortly.
          </p>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center md:justify-end 2xl:justify-center xl:pl-32 md:gap-10 py-10">
        <div className="flex justify-center md:justify-start  items-center md:items-start  bg-white">
          <div className="w-full  m  p-6 bg-white   ">
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full xl:w-[50rem] p-3 border-4 placeholder: border-[#0D2343]  rounded-md bg-[#f5f5f5] text-gray-600 focus:outline-none focus:border-[#0D2343]"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border-4 placeholder: border-[#0D2343] rounded-md bg-[#f5f5f5] text-gray-600 focus:outline-none focus:border-[#0D2343]"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full p-3 border-4 placeholder: border-[#0D2343] rounded-md bg-[#f5f5f5] text-gray-600 focus:outline-none focus:border-[#0D2343]"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-3 border-4 placeholder: border-[#0D2343] rounded-md bg-[#f5f5f5] text-gray-600 focus:outline-none focus:border-[#0D2343]"
                ></textarea>
              </div>
              {/* Checkboxes */}
              <div className="space-y-2 text-gray-600">
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="updates"
                    className="mt-1 h-4 w-4 text-[#0D2343] focus:ring-2 focus:ring-[#0D2343] border-gray-300 rounded"
                  />
                  <label htmlFor="updates" className="text-sm leading-5">
                    I would like to sign up to receive email updates from
                    Centaurus Charter. See our{" "}
                    <a href="#" className="text-blue-500 underline">
                      Privacy Policy
                    </a>
                    .
                  </label>
                </div>
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 h-4 w-4 text-[#0D2343] focus:ring-2 focus:ring-[#0D2343] border-gray-300 rounded"
                  />
                  <label htmlFor="terms" className="text-sm leading-5">
                    I can confirm I have read and accepted the{" "}
                    <a href="#" className="text-blue-500 underline">
                      Terms and Conditions
                    </a>
                    .
                  </label>
                </div>
              </div>
              {/* Submit Button */}
              <div className="text-left">
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#1B498F] text-white  rounded-md hover:bg-[#0D2343] transition duration-200"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pl-7 space-y-7 md:-mt-40">
  {/* Location */}
  <div className="flex flex-row items-start justify-start">
    <MdLocationOn className="text-5xl" />
    <h1 className="text-sm  w-[16rem] xs:w-[19rem] pl-5">
      Office 907 ETA Star's Al Manara Tower 6, Marasi Drive Street Business Bay,
      Za'beel, Dubai United Arab Emirates
    </h1>
  </div>

  {/* Phone */}
  <div className="flex flex-row items-start justify-start">
    <IoCallSharp className="text-5xl" />
    <a
      href="tel:+97143521833"
      className="text-sm  w-[14rem] xs:w-[19rem] pl-5 text-blue-600 "
    >
      <span className=" text-black">Office:</span>  +971 4 352 1833
    </a>
  </div>

  {/* WhatsApp */}
  <div className="flex flex-row items-start justify-start">
    <FaWhatsapp className="text-5xl" />
    <a
      href="https://wa.me/971524901269"
      className="text-sm  w-[16rem] xs:w-[19rem] pl-5 text-blue-600 "
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className=" text-black">WhatsApp:</span>  +971 52 490 1269
    </a>
  </div>

  {/* Email */}
  <div className="flex flex-row items-start justify-start">
    <MdEmail className="text-5xl" />
    <a
      href="mailto:info@centauruscharter.com"
      className="text-sm  w-[16rem] xs:w-[19rem] pl-5 text-blue-600 "
    >
     <span className=" text-black">Email:</span>  info@centauruscharter.com
    </a>
  </div>
</div>

        </div>
      </div>
      
    </>
  );
}
