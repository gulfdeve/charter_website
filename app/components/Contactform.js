"use client";
import React, { useState } from "react";

export default function Contactform() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [yachtName, setYachtName] = useState("88 FT YACHT SUNCRACKER");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting form:", { fullName, phoneNumber, email, yachtName, message });

    try {
      const queryParams = new URLSearchParams({
        name: fullName,
        phone: phoneNumber,
        email: email,
        comments: message,
        yachtname: yachtName,
      });

      queryParams.set("offers_id", "43");

      const url = `https://www.centauruscharter.com/api/api_new/save_enquiry?${queryParams}`;
      const response = await fetch(url, { method: "POST" });
      const data = await response.json();

      if (response.ok) {
        setFullName("");
        setPhoneNumber("");
        setEmail("");
        setYachtName("88 FT YACHT SUNCRACKER");
        setMessage("");
        alert("success");
      } else {
        alert("Something went wrong while sending the form.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center py-10 px-2">
      <form onSubmit={handleSubmit} className="w-full max-w-6xl bg-primary-blue rounded-lg shadow-lg p-6">
        <h1 className="text-center text-white text-4xl font-bold pb-7">INQUIRE</h1>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex flex-col w-full gap-4">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                placeholder="Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                placeholder="Phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="yachtname"
                name="yachtname"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                placeholder="88 FT YACHT SUNCRACKER"
                value={yachtName}
                onChange={(e) => setYachtName(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col w-full gap-4">
            <div>
              <textarea
                id="message"
                name="message"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 h-32"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring focus:ring-blue-300"
              />
              <label htmlFor="terms" className="text-sm text-white">
                I'd like to receive updates on special offers, news and events
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-primary-yellow text-primary-blue font-bold py-3 rounded-md"
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
