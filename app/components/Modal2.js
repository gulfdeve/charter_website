import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Modal2 = ({ isModalOpen, closeModal, idName, idValue }) => {
  if (!isModalOpen) return null;

  // State for form fields
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // State for validation errors
  const [errors, setErrors] = useState({});
  // State for success
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  // Basic form validation
  const validateForm = () => {
    const newErrors = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
    }
    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone Number is required.";
    } else if (phoneNumber.replace(/\D/g, "").length < 7) {
      newErrors.phoneNumber = "Please enter a valid phone number.";
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

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      // Build query parameters
      const queryParams = new URLSearchParams({
        name: fullName,
        phone: phoneNumber,
        email: email,
        comments: message,
      });

      // Dynamically set the ID key (offers_id, events_id, etc.)
      queryParams.set(idName, idValue);

      // Construct final URL
      const url = `https://www.centauruscharter.com/api/api_new/save_enquiry?${queryParams}`;

      // Send POST request
      const response = await fetch(url, {
        method: "POST",
      });

      const data = await response.json();
      console.log("API response:", data);

      if (response.ok) {
        // Show success bar
        setSubmissionSuccess(true);

        // Clear form fields if you like
        setFullName("");
        setPhoneNumber("");
        setEmail("");
        setMessage("");

        // Automatically close the modal after 5 seconds
        setTimeout(() => {
          setSubmissionSuccess(false);
          closeModal();
        }, 5000);
      } else {
        alert("Something went wrong while sending the form.");
      }
    } catch (error) {
      console.log("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white h-fit rounded-lg shadow-lg w-full max-w-6xl   p-9 lg:p-6 relative">
        {/* Success Bar (absolute, on top of modal) */}
        {submissionSuccess && (
          <div className="absolute top-0 left-0 right-0 bg-green-500 text-white p-3 text-center">
            Enquiry sent successfully! 
          </div>
        )}

        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-2xl p-3 w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="rounded-lg overflow-hidden hidden md:block">
            <img
              src="/modal2.jpg"
              alt="Yacht Image"
              className="w-[32rem] h-[31rem] object-cover"
            />
          </div>

          <div className="lg:pr-10 pr-5">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full border outline outline-primary-blue bg-gray-100 border-primary-blue rounded-md p-3"
                />
                {errors.fullName && (
                  <p className="text-red-600 text-sm">{errors.fullName}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
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
                {errors.phoneNumber && (
                  <p className="text-red-600 text-sm">{errors.phoneNumber}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border outline outline-primary-blue bg-gray-100 border-primary-blue rounded-md p-3"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm">{errors.email}</p>
                )}
              </div>

              {/* Message / Comments */}
              <div>
                <textarea
                  placeholder="Comments"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="8"
                  className="w-full border outline outline-primary-blue bg-gray-100 border-primary-blue rounded-md p-3"
                />
                {errors.message && (
                  <p className="text-red-600 text-sm">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
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
