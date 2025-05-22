"use client";
import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { parsePhoneNumberFromString } from "libphonenumber-js";

export default function Contactform({ yachtName: initialYachtName = "" }) {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneCountry, setPhoneCountry] = useState({ countryCode: "ae", format: "" });
  const [email, setEmail] = useState("");
  const [yachtName, setYachtName] = useState(initialYachtName);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  // Sync yachtName if parent prop changes
  useEffect(() => {
    setYachtName(initialYachtName);
  }, [initialYachtName]);

  const validate = () => {
    const newErrors = {};
    if (!fullName.trim()) newErrors.fullName = "Name is required";
    else if (!/^[a-zA-Z\s]+$/.test(fullName)) newErrors.fullName = "Name must contain only letters and spaces";

    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Invalid email format";

    if (!phoneNumber.trim()) newErrors.phoneNumber = "Phone Number is required.";
    else {
      try {
        const parsed = parsePhoneNumberFromString("+" + phoneNumber);
        if (!parsed || !parsed.isValid()) newErrors.phoneNumber = "Please enter a valid phone number.";
      } catch {
        newErrors.phoneNumber = "Please enter a valid phone number.";
      }
    }

    if (!yachtName.trim()) newErrors.yachtName = "Yacht name is required";

    if (!message.trim()) newErrors.message = "Message is required";
    else if (message.trim().length < 5) newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Build query params & include the offer ID
    const queryParams = new URLSearchParams({
      name: fullName,
      phone: phoneNumber,
      email,
      comments: message,
      yachtname: yachtName,
    });
    queryParams.set("offers_id", "43");

    try {
      const url = `https://www.centauruscharter.net/api/api_new/save_enquiry?${queryParams}`;
      const response = await fetch(url, { method: "POST" });
      const data = await response.json();

      if (response.ok) {
        // Show success banner
        setSubmissionSuccess(true);
        // Reset form fields
        setFullName("");
        setPhoneNumber("");
        setEmail("");
        setMessage("");
        setYachtName(initialYachtName);

        // Hide banner & (optionally) close form after 5s
        setTimeout(() => setSubmissionSuccess(false), 5000);
      } else {
        alert("Something went wrong while sending the form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center py-10 px-2">
      <form onSubmit={handleSubmit} className="w-full max-w-6xl bg-white rounded-lg custom-shadow p-6">
        {submissionSuccess && (
          <div className="mb-4 p-3 bg-green-500 text-white text-center rounded">
            Your enquiry was sent successfully!
          </div>
        )}
        <h3 className="text-center text-primary-blue text-4xl font-bold pb-7">INQUIRE</h3>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left column */}
          <div className="flex flex-col w-full gap-4">
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border-l-4 rounded-md bg-[#f5f5f5] text-primary-grey focus:outline-none border-[#1b498f] focus:border-primary-yellow focus:bg-[#f3f7fd] transition duration-200 ease-in-out p-3"
              />
              {errors.fullName && <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-l-4 rounded-md bg-[#f5f5f5] text-primary-grey focus:outline-none border-[#1b498f] focus:border-primary-yellow focus:bg-[#f3f7fd] transition duration-200 ease-in-out p-3"
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <PhoneInput
                country={phoneCountry.countryCode}
                value={phoneNumber}
                onChange={(val, country) => {
                  setPhoneNumber(val);
                  setPhoneCountry(country);
                }}
                placeholder="Enter phone number"
                isValid={(value) => {
                  try {
                    const parsed = parsePhoneNumberFromString("+" + value);
                    return parsed && parsed.isValid();
                  } catch {
                    return false;
                  }
                }}
                inputStyle={{
                  width: "100%", padding: "20px", paddingLeft: "65px",
                  border: "1px solid #ddd", borderRadius: "6px",
                  fontFamily: "Montserrat, sans-serif",
                }}
                buttonStyle={{
                  padding: "10px", border: "1px solid #ddd",
                  borderRadius: "4px", fontSize: "14px",
                  width: "60px", fontFamily: "Montserrat, sans-serif",
                }}
              />
              {errors.phoneNumber && <p className="text-red-400 text-sm mt-1">{errors.phoneNumber}</p>}
            </div>
            <div>
              <input
                type="text"
                name="yachtName"
                placeholder="Yacht Name"
                value={yachtName}
                onChange={(e) => setYachtName(e.target.value)}
                className="w-full p-3 border rounded-md focus:ring"
              />
              {errors.yachtName && <p className="text-red-400 text-sm mt-1">{errors.yachtName}</p>}
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col w-full gap-4">
            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                className="w-full border-l-4 rounded-md bg-[#f5f5f5] text-primary-grey focus:outline-none border-[#1b498f] focus:border-primary-yellow focus:bg-[#f3f7fd] transition duration-200 ease-in-out p-3"
              />
              {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="terms" className="w-5 h-5" />
              <label htmlFor="terms" className="text-sm text-primary-grey">
                I'd like to receive updates on special offers, news and events
              </label>
            </div>
            <button type="submit" className="w-full bg-primary-blue-2 text-white font-bold py-3 rounded-md">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
