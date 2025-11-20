'use client';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { IoClose } from 'react-icons/io5';

export default function F1BookingModal({ isOpen, onClose }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState(
    "I'd like to book a ticket for the Formula 1 Abu Dhabi 2025 Yacht Party."
  );
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let errs = {};
    if (!fullName.trim()) errs.fullName = 'Name is required';
    if (!email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) errs.email = 'Email is invalid';
    
    if (!phoneNumber.trim()) {
      errs.phoneNumber = 'Phone Number is required.';
    } else {
      try {
        const parsedPhone = parsePhoneNumberFromString('+' + phoneNumber);
        if (!parsedPhone || !parsedPhone.isValid()) {
          errs.phoneNumber = 'Please enter a valid phone number.';
        }
      } catch (e) {
        errs.phoneNumber = 'Please enter a valid phone number.';
      }
    }
    
    if (!message.trim()) errs.message = 'Message is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const emailResponse = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          email,
          phoneNumber,
          message,
          subject: 'Formula 1 Abu Dhabi 2025 Yacht Party Booking Inquiry',
          recipients: 'habibjutt868@gmail.com, qadooshabib@gmail.com',
        }),
      });

      const emailData = await emailResponse.json();

      if (emailResponse.ok) {
        setSuccessMessage(
          'Thank you! Your booking inquiry has been submitted successfully. Our team will get back to you shortly.'
        );
        setFullName('');
        setEmail('');
        setPhoneNumber('');
        setMessage(
          "I'd like to book a ticket for the Formula 1 Abu Dhabi 2025 Yacht Party."
        );
        setErrors({});

        // Close modal after 3 seconds
        setTimeout(() => {
          onClose();
          setSuccessMessage('');
        }, 3000);
      } else {
        setErrors({
          submit: emailData.message || 'Failed to send inquiry. Please try again.',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({
        submit: 'An error occurred. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .react-tel-input .flag-dropdown {
          background: white !important;
          border: none !important;
          border-radius: 0.5rem 0 0 0.5rem !important;
          position: absolute !important;
          top: 0 !important;
          bottom: 0 !important;
          padding: 0 !important;
        }
        .react-tel-input .selected-flag {
          padding: 0 8px 0 12px !important;
          width: auto !important;
          min-width: 70px !important;
          display: flex !important;
          align-items: center !important;
          height: 50px !important;
        }
        .react-tel-input .selected-flag .flag {
          margin-right: 8px !important;
        }
        .react-tel-input .selected-flag .arrow {
          margin-left: 6px !important;
        }
        .react-tel-input .form-control {
          height: 50px !important;
          font-size: 16px !important;
          line-height: 1.5 !important;
          padding-left: 80px !important;
        }
      `}} />
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50 p-4 overflow-y-auto">
        <div className="relative w-full max-w-2xl my-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-600 hover:text-gray-800 transition-colors"
          aria-label="Close modal"
        >
          <IoClose className="w-8 h-8" />
        </button>

        <div className="p-8 md:p-12">
          {/* Header */}
          <h2 className="text-2xl md:text-3xl font-bold text-center text-red-900 mb-4">
            BOOK YOUR FORMULA 1<br />YACHT PARTY EXPERIENCE!
          </h2>

          <p className="text-center text-gray-800 mb-8 text-sm md:text-base leading-relaxed">
            Secure your spot at the exclusive Formula 1 Abu Dhabi 2025 Yacht Party. Our team will get back to you shortly with confirmation. Don't miss this luxury race-day experience!
          </p>

          {successMessage && (
            <div className="mb-6 p-4 bg-green-100 border-l-4 border-green-500 text-green-700 rounded">
              {successMessage}
            </div>
          )}

          {errors.submit && (
            <div className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded">
              {errors.submit}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={`w-full h-[50px] px-4 py-3 border-l-4 ${
                  errors.fullName ? 'border-red-600' : 'border-red-900'
                } bg-white rounded-lg shadow-sm focus:outline-none transition-all`}
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full h-[50px] px-4 py-3 border-l-4 ${
                  errors.email ? 'border-red-600' : 'border-red-900'
                } bg-white rounded-lg shadow-sm focus:outline-none transition-all`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <PhoneInput
                country={'ae'}
                value={phoneNumber}
                onChange={(phone) => setPhoneNumber(phone)}
                inputClass={`!w-full !pr-4 !py-3 !h-[50px] !border-l-4 ${
                  errors.phoneNumber ? '!border-red-600' : '!border-red-900'
                } !bg-white !rounded-lg !shadow-sm !text-base !leading-normal`}
                containerClass="!w-full !h-[50px] !relative"
                buttonClass="!bg-white !border-none !rounded-l-lg"
                dropdownClass="!bg-white !shadow-lg !rounded-lg"
                placeholder="Phone Number"
              />
              {errors.phoneNumber && (
                <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <textarea
                rows={5}
                placeholder="I'd like to book a ticket for the Formula 1 Abu Dhabi 2025 Yacht Party."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`w-full px-4 py-3 border-l-4 ${
                  errors.message ? 'border-red-600' : 'border-red-900'
                } bg-white rounded-lg shadow-sm focus:outline-none transition-all resize-none`}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-red-900 hover:bg-red-800 text-white font-bold py-4 px-12 rounded-lg shadow-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

