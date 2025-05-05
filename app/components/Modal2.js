import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  isValidPhoneNumber,
  parsePhoneNumberFromString,
} from "libphonenumber-js";

const Modal2 = ({ isModalOpen, closeModal, idName, idValue, selectedVessel }) => {
  if (!isModalOpen) return null;

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneCountry, setPhoneCountry] = useState({
    countryCode: "ae",
    format: "",
  });
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
    }

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

    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Build enquiry comments, including yacht details if provided
    let enquiryComments = message;
    if (selectedVessel) {
      const { name, build, cabins, length, guests, year, price } = selectedVessel;
      enquiryComments += `<br><br>Yacht Details:<br>` +
        `Name: ${name || 'N/A'}<br>` +
        `Build: ${build || 'N/A'}<br>` +
        `Cabins: ${cabins || 'N/A'}<br>` +
        `Length: ${length || 'N/A'}<br>` +
        `Guests: ${guests || 'N/A'}<br>` +
        `Year: ${year || 'N/A'}<br>` +
        `Price: ${price || 'N/A'}`;
    }

    try {
      const queryParams = new URLSearchParams({
        name: fullName,
        phone: phoneNumber,
        email,
        comments: enquiryComments,
      });
      queryParams.set(idName, idValue);

      const endpoint =
        idName === "events_id"
          ? "https://www.centauruscharter.net/api/api_new/save_enquiry_events"
          : "https://www.centauruscharter.net/api/api_new/save_enquiry";
      const url = `${endpoint}?${queryParams}`;

      const response = await fetch(url, { method: "POST" });
      const data = await response.json();
      console.log('Submitting enquiry with params:', queryParams.toString());

      console.log("API response:", data);

      if (response.ok) {
        setSubmissionSuccess(true);
        setFullName("");
        setPhoneNumber("");
        setEmail("");
        setMessage("");
        setTimeout(() => {
          setSubmissionSuccess(false);
          closeModal();
        }, 5000);
      } else {
        alert("Something went wrong while sending the form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="fixed inset-0 bg-primary-grey bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-6xl mx-5 p-9 lg:p-6 relative">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-3xl p-3 w-10 h-10 rounded-full flex items-center justify-center text-primary-grey hover:text-primary-grey"
        >
          &times;
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="rounded-lg overflow-hidden hidden md:block">
            <img
              src="/Get a Quote.webp"
              alt="Get a Quote Yacht Image"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex items-center w-full lg:pr-10 pr-0 pt-12">
            <form onSubmit={handleSubmit} className="space-y-4 w-full">
              {submissionSuccess && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                  Your form has been successfully submitted. We will contact you
                  shortly.
                </div>
              )}

              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full border-l-4 rounded-md bg-[#f5f5f5] text-primary-grey focus:outline-none border-[#1b498f] focus:border-primary-yellow focus:bg-[#f3f7fd] transition duration-200 ease-in-out p-3"
                />
                {errors.fullName && (
                  <p className="text-red-600 text-sm">{errors.fullName}</p>
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
                  <p className="text-red-600 text-sm">{errors.phoneNumber}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-l-4 rounded-md bg-[#f5f5f5] text-primary-grey focus:outline-none border-[#1b498f] focus:border-primary-yellow focus:bg-[#f3f7fd] transition duration-200 ease-in-out p-3"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm">{errors.email}</p>
                )}
              </div>

              <div>
                <textarea
                  placeholder="Comments"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="8"
                  className="w-full border-l-4 rounded-md bg-[#f5f5f5] text-primary-grey focus:outline-none border-[#1b498f] focus:border-primary-yellow focus:bg-[#f3f7fd] transition duration-200 ease-in-out p-3"
                />
                {errors.message && (
                  <p className="text-red-600 text-sm">{errors.message}</p>
                )}
              </div>

              <button type="submit" className="blue-solid-button">
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal2;
