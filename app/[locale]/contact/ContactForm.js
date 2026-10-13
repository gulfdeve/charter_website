'use client';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Link } from '@/app/i18n/routing';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

export default function ContactForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneCountry, setPhoneCountry] = useState({
    countryCode: 'ae',
    format: '',
  });
  const [message, setMessage] = useState('');
  const [subscribe, setSubscribe] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const errs = {};
    if (!fullName) errs.fullName = 'Name is required';
    if (!email) errs.email = 'Email is required';
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
    if (!message) errs.message = 'Message is required';
    if (!acceptedTerms) errs.acceptedTerms = 'Please accept the Terms and Conditions';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('Submitting form:', {
      fullName,
      email,
      phoneNumber,
      message,
      subscribe,
      acceptedTerms,
    });

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Original API call
      const queryParams = new URLSearchParams({
        name: fullName,
        email,
        phone: phoneNumber,
        comments: message,
      });
      queryParams.set('offers_id', '43');

      const apiUrl = `${process.env.NEXT_PUBLIC_API_DOMAIN}/api/api_new/save_enquiry?${queryParams}`;
      const apiResponse = await fetch(apiUrl, { method: 'POST' });
      const apiData = await apiResponse.json();

      // New email API call
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
          subscribe,
        }),
      });

      const emailData = await emailResponse.json();

      if (apiResponse.ok && emailResponse.ok) {
        setFullName('');
        setEmail('');
        setPhoneNumber('');
        setMessage('');
        setSubscribe(false);
        setAcceptedTerms(false);
        setErrors({});
        // Set success message
        setSuccessMessage('Your form has been successfully submitted. We will contact you shortly.');
        // Scroll to the top of the form to make message visible
        window.scrollTo({
          top: document.getElementById('contact-form').offsetTop - 100,
          behavior: 'smooth',
        });
      } else {
        setSuccessMessage('');
        alert('Something went wrong while sending the form.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSuccessMessage('');
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact-form" className="w-full xl:w-[40rem] p-0 md:p-6 bg-white">
      {successMessage && <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">{successMessage}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input type="text" placeholder="Your Name" className="w-full p-3 border-l-4 rounded-md bg-[#f5f5f5] text-primary-grey focus:outline-none border-[#1b498f] focus:border-primary-yellow focus:bg-[#f3f7fd] transition duration-200 ease-in-out" value={fullName} onChange={e => setFullName(e.target.value)} />
          {errors.fullName && <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>}
        </div>
        <div>
          <input type="email" placeholder="Your Email" className="w-full p-3 border-l-4 rounded-md bg-[#f5f5f5] text-primary-grey focus:outline-none border-[#1b498f] focus:border-primary-yellow focus:bg-[#f3f7fd] transition duration-200 ease-in-out" value={email} onChange={e => setEmail(e.target.value)} />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          {/* PhoneInput replaces the standard phone input */}
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
                const parsed = parsePhoneNumberFromString('+' + value);
                return parsed && parsed.isValid();
              } catch {
                return false;
              }
            }}
            inputStyle={{
              width: '100%',
              padding: '20px',
              paddingLeft: '65px',
              border: '1px solid #ddd',
              borderRadius: '4px',
            }}
            buttonStyle={{
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '14px',
              width: '60px',
            }}
          />
          {errors.phoneNumber && <p className="text-red-600 text-sm mt-1">{errors.phoneNumber}</p>}
        </div>
        <div>
          <textarea placeholder="Your Message" rows={4} className="w-full p-3 border-l-4 rounded-md bg-[#f5f5f5] text-primary-grey focus:outline-none border-[#1b498f] focus:border-primary-yellow focus:bg-[#f3f7fd] transition duration-200 ease-in-out" value={message} onChange={e => setMessage(e.target.value)}></textarea>
          {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
        </div>
        <div className="space-y-2 text-primary-grey">
          <div className="flex items-start space-x-2">
            <input type="checkbox" id="updates" className="mt-1 h-4 w-4 text-primary-blue focus:ring-2 focus:ring-[#0D2343] border-gray-300 rounded" checked={subscribe} onChange={e => setSubscribe(e.target.checked)} />
            <label htmlFor="updates" className="text-sm leading-5">
              I would like to sign up to receive email updates from Centaurus Charter. See our{' '}
              <Link href="/privacy-and-policy" className="text-blue-500 underline">
                Privacy Policy
              </Link>
              .
            </label>
          </div>
          <div className="flex items-start space-x-2">
            <input type="checkbox" id="terms" className="mt-1 h-4 w-4 text-primary-blue focus:ring-2 focus:ring-[#0D2343] border-gray-300 rounded" checked={acceptedTerms} onChange={e => setAcceptedTerms(e.target.checked)} />
            <label htmlFor="terms" className="text-sm leading-5">
              I can confirm I have read and accepted the{' '}
              <Link href="/terms-and-condition" className="text-blue-500 underline">
                Terms and Conditions
              </Link>
              .
            </label>
            {errors.acceptedTerms && <p className="text-red-600 text-sm mt-1">{errors.acceptedTerms}</p>}
          </div>
        </div>
        <div className="text-left">
          <button type="submit" disabled={isSubmitting} className="px-6 py-3 bg-primary-blue-2 text-white rounded-md hover:bg-primary-blue transition duration-200 disabled:opacity-50">
            {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
          </button>
        </div>
      </form>
    </div>
  );
}
