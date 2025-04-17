"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { usePathname, Link } from "@/app/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
const ContactGem = () => {
      const [fullName, setFullName] = useState("");
      const [email, setEmail] = useState("");
      const [phoneNumber, setPhoneNumber] = useState("");
      const [message, setMessage] = useState("");
      const [subscribe, setSubscribe] = useState(false);
      const [acceptedTerms, setAcceptedTerms] = useState(false);
      const [errors, setErrors] = useState({});
      const [successMessage, setSuccessMessage] = useState("");
   
    
      const validateForm = () => {
        let errs = {};
        if (!fullName) errs.fullName = "Name is required";
        if (!email) errs.email = "Email is required";
        if (!phoneNumber) errs.phoneNumber = "Phone number is required";
        if (!message) errs.message = "Message is required";
        if (!acceptedTerms)
          errs.acceptedTerms = "Please accept the Terms and Conditions";
        setErrors(errs);
        return Object.keys(errs).length === 0;
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting form:", {
          fullName,
          email,
          phoneNumber,
          message,
          subscribe,
          acceptedTerms,
        });
        if (!validateForm()) return;
    
        try {
          const queryParams = new URLSearchParams({
            name: fullName,
            email: email,
            phone: phoneNumber,
            comments: message,
          });
          queryParams.set("offers_id", "43");
    
          const url = `https://www.centauruscharter.net/api/api_new/save_enquiry?${queryParams}`;
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
            // Replace alert with success message
            setSuccessMessage("Your form has been successfully submitted. We will contact you shortly.");
            // Scroll to the top of the form to make message visible
            window.scrollTo({ top: document.getElementById('contact-form').offsetTop - 100, behavior: 'smooth' });
          } else {
            setSuccessMessage("");
            alert("Something went wrong while sending the form.");
          }
        } catch (error) {
          setSuccessMessage("");
          alert("An error occurred. Please try again later.");
        }
      };
    
  return (
    <div>
      <div className="max-w-lg mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-[#0F274E] text-center mb-8">
        Inquire Now
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border-l-4 rounded-md bg-[#f5f5f5] text-primary-grey focus:outline-none border-[#1b498f] focus:border-primary-yellow focus:bg-[#f3f7fd] transition duration-200 ease-in-out"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  {errors.fullName && (
                    <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border-l-4 rounded-md bg-[#f5f5f5] text-primary-grey focus:outline-none border-[#1b498f] focus:border-primary-yellow focus:bg-[#f3f7fd] transition duration-200 ease-in-out"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  {/* PhoneInput replaces the standard phone input */}
                  <PhoneInput
                    country="ae"
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                    placeholder="Enter phone number"
                    className="flex-1  rounded-md bg-gray-100"
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
                  {errors.phoneNumber && (
                    <p className="text-red-600 text-sm mt-1">{errors.phoneNumber}</p>
                  )}
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-3 border-l-4 rounded-md bg-[#f5f5f5] text-primary-grey focus:outline-none border-[#1b498f] focus:border-primary-yellow focus:bg-[#f3f7fd] transition duration-200 ease-in-out"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-600 text-sm mt-1">{errors.message}</p>
                  )}
                </div>
                <div className="space-y-2 text-primary-grey">
                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="updates"
                      className="mt-1 h-4 w-4 text-primary-blue focus:ring-2 focus:ring-[#0D2343] border-gray-300 rounded"
                      checked={subscribe}
                      onChange={(e) => setSubscribe(e.target.checked)}
                    />
                    <label htmlFor="updates" className="text-sm leading-5">
                      I would like to sign up to receive email updates from
                      Centaurus Charter. See our{" "}
                      <Link href="/privacy-and-policy" className="text-blue-500 underline">
                        Privacy Policy
                      </Link>
                      .
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
                      <Link href="/terms-and-condition" className="text-blue-500 underline">
                        Terms and Conditions
                      </Link>
                      .
                    </label>
                    {errors.acceptedTerms && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.acceptedTerms}
                      </p>
                    )}
                  </div>
                </div>
                <div className="text-left">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-primary-blue-2 text-white rounded-md hover:bg-primary-blue transition duration-200"
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </form>
    </div>
    </div>
  )
}

export default ContactGem
