"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  isValidPhoneNumber,
  parsePhoneNumberFromString,
} from "libphonenumber-js";
export default function Contactform() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [yachtName, setYachtName] = useState("88 FT YACHT SUNCRACKER");
  const [phoneCountry, setPhoneCountry] = useState({
    countryCode: "ae",
    format: "",
  });
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Name: only alphabets and spaces, required
    if (!fullName.trim()) {
      newErrors.fullName = "Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(fullName)) {
      newErrors.fullName = "Name must contain only letters and spaces";
    }

    // Email: required and valid
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    // Phone: required, only digits, length 7-15
    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone Number is required.";
    } else {
      try {
        const parsedPhone = parsePhoneNumberFromString("+" + phoneNumber);
        if (!parsedPhone || !parsedPhone.isValid()) {
          newErrors.phoneNumber = "Please enter a valid phone number.";
        }
      } catch (e) {
        newErrors.phoneNumber = "Please enter a valid phone number.";
      }
    }

    // Yacht name: required
    if (!yachtName.trim()) {
      newErrors.yachtName = "Yacht name is required";
    }

    // Message: required and at least 10 characters
    if (!message.trim()) {
      newErrors.message = "Message is required";
    } else if (message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const queryParams = new URLSearchParams({
        name: fullName,
        phone: phoneNumber,
        email: email,
        comments: message,
        yachtname: yachtName,
      });

      queryParams.set("offers_id", "43");

      const url = `https://www.centauruscharter.net/api/api_new/save_enquiry?${queryParams}`;
      const response = await fetch(url, { method: "POST" });
      const data = await response.json();

      if (response.ok) {
        setFullName("");
        setPhoneNumber("");
        setEmail("");
        setYachtName("88 FT YACHT SUNCRACKER");
        setMessage("");
        alert("Success! Your message was sent.");
      } else {
        alert("Something went wrong while sending the form.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center py-10 px-2">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-6xl bg-white rounded-lg custom-shadow p-6"
      >
        <h3 className="text-center text-primary-blue text-4xl font-bold pb-7">
          INQUIRE
        </h3>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex flex-col w-full gap-4">
            <div>
              <input
                type="text"
                className="w-full border-l-4 rounded-md bg-[#f5f5f5] text-primary-grey focus:outline-none border-[#1b498f] focus:border-primary-yellow focus:bg-[#f3f7fd] transition duration-200 ease-in-out p-3"
                placeholder="Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              {errors.fullName && (
                <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                className="w-full border-l-4 rounded-md bg-[#f5f5f5] text-primary-grey focus:outline-none border-[#1b498f] focus:border-primary-yellow focus:bg-[#f3f7fd] transition duration-200 ease-in-out p-3"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
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
                isValid={(value, country) => {
                  try {
                    const parsed = parsePhoneNumberFromString("+" + value);
                    return parsed && parsed.isValid();
                  } catch {
                    return false;
                  }
                }}
                //   defaultErrorMessage="Please enter a valid phone number"
                inputStyle={{
                  width: "100%",
                  padding: "20px",
                  paddingLeft: "65px",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
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
                <p className="text-red-400 text-sm mt-1">
                  {errors.phoneNumber}
                </p>
              )}
            </div>
            <div>
              <input
                type="text"
                className="w-full p-3 border rounded-md focus:ring"
                placeholder="88 FT YACHT SUNCRACKER"
                value={yachtName}
                onChange={(e) => setYachtName(e.target.value)}
              />
              {errors.yachtName && (
                <p className="text-red-400 text-sm mt-1">{errors.yachtName}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col w-full gap-4">
            <div>
              <textarea
                className="w-full border-l-4 rounded-md bg-[#f5f5f5] text-primary-grey focus:outline-none border-[#1b498f] focus:border-primary-yellow focus:bg-[#f3f7fd] transition duration-200 ease-in-out p-3"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="terms" className="w-5 h-5" />
              <label htmlFor="terms" className="text-sm text-primary-grey">
                I'd like to receive updates on special offers, news and events
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-primary-blue-2 text-white font-bold py-3 rounded-md"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
