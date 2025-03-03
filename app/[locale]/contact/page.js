"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { MdLocationOn } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Page() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [subscribe, setSubscribe] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errs = {};
    if (!fullName) errs.fullName = "Name is required";
    if (!email) errs.email = "Email is required";
    if (!phoneNumber) errs.phoneNumber = "Phone number is required";
    if (!message) errs.message = "Message is required";
    if (!acceptedTerms) errs.acceptedTerms = "Please accept the Terms and Conditions";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form:", { fullName, email, phoneNumber, message, subscribe, acceptedTerms });
    if (!validateForm()) return;

    try {
      const queryParams = new URLSearchParams({
        name: fullName,
        email: email,
        phone: phoneNumber,
        comments: message,
      });
      queryParams.set("offers_id", "43");

      const url = `https://www.centauruscharter.com/api/api_new/save_enquiry?${queryParams}`;
      const response = await fetch(url, { method: "POST" });
      const data = await response.json();

      if (response.ok) {
        setFullName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
        setSubscribe(false);
        setAcceptedTerms(false);
        setErrors({});
        alert("Success");
      } else {
        alert("Something went wrong while sending the form.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <div className="bg-white w-full h-full mt-14 md:mt-0">
        <div>
          <img alt="contact header banner" src="./Contactheader.webp" className="w-full" />
        </div>
        <div className="flex flex-col items-center justify-center py-10 ">
          <h1 className="text-primary-blue text-center font-bold text-4xl pb-4">
            CONTACT US
          </h1>
          <p className="text-[#848484] text-center text-base px-3 lg:px-12 xl:px-56">
            We at Centaurus Charter are well experienced to meet the expectations of your next yachting adventure in Dubai. Please fill contact you shortly.
          </p>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center md:justify-end 2xl:justify-center xl:pl-32 md:gap-10 py-10">
          <div className="flex justify-center md:justify-start items-center md:items-start bg-white">
            <div className="w-full p-6 bg-white">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full xl:w-[50rem] p-3 border-4 border-[#0D2343] rounded-md bg-[#f5f5f5] text-gray-600 focus:outline-none focus:border-[#0D2343]"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  {errors.fullName && <p className="text-red-600 text-sm">{errors.fullName}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border-4 border-[#0D2343] rounded-md bg-[#f5f5f5] text-gray-600 focus:outline-none focus:border-[#0D2343]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
                </div>
                <div>
                  {/* PhoneInput replaces the standard phone input */}
                  <PhoneInput
                    country="ae"
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                    placeholder="Enter phone number"
                    className="flex-1 outline outline-primary-blue rounded-md bg-gray-100"
                    inputStyle={{
                      width: "100%",
                      padding: "20px",
                      paddingLeft: "65px",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                    buttonStyle={{
                      padding: "10px",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      fontSize: "14px",
                      width: "60px",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  />
                  {errors.phoneNumber && <p className="text-red-600 text-sm">{errors.phoneNumber}</p>}
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-3 border-4 border-[#0D2343] rounded-md bg-[#f5f5f5] text-gray-600 focus:outline-none focus:border-[#0D2343]"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
                </div>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="updates"
                      className="mt-1 h-4 w-4 text-primary-blue focus:ring-2 focus:ring-[#0D2343] border-gray-300 rounded"
                      checked={subscribe}
                      onChange={(e) => setSubscribe(e.target.checked)}
                    />
                    <label htmlFor="updates" className="text-sm leading-5">
                      I would like to sign up to receive email updates from Centaurus Charter. See our{" "}
                      <a href="#" className="text-blue-500 underline">
                        Privacy Policy
                      </a>.
                    </label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="terms"
                      className="mt-1 h-4 w-4 text-primary-blue focus:ring-2 focus:ring-[#0D2343] border-gray-300 rounded"
                      checked={acceptedTerms}
                      onChange={(e) => setAcceptedTerms(e.target.checked)}
                    />
                    <label htmlFor="terms" className="text-sm leading-5">
                      I can confirm I have read and accepted the{" "}
                      <a href="#" className="text-blue-500 underline">
                        Terms and Conditions
                      </a>.
                    </label>
                    {errors.acceptedTerms && <p className="text-red-600 text-sm">{errors.acceptedTerms}</p>}
                  </div>
                </div>
                <div className="text-left">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#1B498F] text-white rounded-md hover:bg-primary-blue transition duration-200"
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center pl-7 space-y-7 md:-mt-40">
            <div className="flex flex-row items-start justify-start">
              <MdLocationOn className="text-5xl" />
              <h1 className="text-sm w-[16rem] xs:w-[19rem] pl-5">
                Office 907 ETA Star's Al Manara Tower 6, Marasi Drive Street Business Bay, Za'beel, Dubai United Arab Emirates
              </h1>
            </div>
            <div className="flex flex-row items-start justify-start">
              <IoCallSharp className="text-5xl" />
              <a
                href="tel:+97143521833"
                className="text-sm w-[14rem] xs:w-[19rem] pl-5 text-blue-600"
              >
                <span className="text-black">Office:</span> +971 4 352 1833
              </a>
            </div>
            <div className="flex flex-row items-start justify-start">
              <FaWhatsapp className="text-5xl" />
              <a
                href="https://wa.me/971524901269"
                className="text-sm w-[16rem] xs:w-[19rem] pl-5 text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-black">WhatsApp:</span> +971 52 490 1269
              </a>
            </div>
            <div className="flex flex-row items-start justify-start">
              <MdEmail className="text-5xl" />
              <a
                href="mailto:info@centauruscharter.com"
                className="text-sm w-[16rem] xs:w-[19rem] pl-5 text-blue-600"
              >
                <span className="text-black">Email:</span> info@centauruscharter.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
