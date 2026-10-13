'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Modal = ({ show, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationState, setAnimationState] = useState(''); // Manage animation classes
  const [submissionSuccess, setSubmissionSuccess] = useState(false); // success state
  const [errors, setErrors] = useState({}); // validation errors

  useEffect(() => {
    if (typeof document === 'undefined') return; // Ensure it runs only on client

    const getCookie = name => {
      const cookieArr = document.cookie.split('; ');
      for (const cookie of cookieArr) {
        const [key, value] = cookie.split('=');
        if (key === name) return value;
      }
      return null;
    };

    const isSubmitted = getCookie('emailSubmitted');
    const isClosed = getCookie('modalClosed');

    // Show the modal after 5 seconds if user hasn't submitted or closed it before
    if (!isSubmitted && !isClosed) {
      setTimeout(() => {
        setIsVisible(true);
        setAnimationState('fade-slide-down'); // Trigger show animation
      }, 5000);
    }
  }, []);

  // Basic email validation
  const validateForm = email => {
    const newErrors = {};
    if (!email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Invalid email format.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit Handler
  const handleSubmit = async e => {
    e.preventDefault();
    const email = e.target.email.value;

    // Validate email
    if (!validateForm(email)) {
      return; // Stop if invalid
    }

    try {
      // Build the query string: ?email=...
      const queryParams = new URLSearchParams({ email }).toString();
      // Final URL: e.g. https://www.centauruscharter.com/public/view_news_subscriber?email=test1@test.com
      const url = `${process.env.NEXT_PUBLIC_API_DOMAIN}/api/api_new/save_subscriber?${queryParams}`;

      // Make a POST request with the query params
      const response = await fetch(url, {
        method: 'POST',
      });

      // Parse the JSON response
      const data = await response.json();
      console.log('API Response:', data);

      // Check for success
      if (response.ok && data.status === 'success') {
        // Mark as submitted so it doesn't appear again
        setCookie('emailSubmitted', 'true', 15);

        // Show success bar
        setSubmissionSuccess(true);

        // Auto-close after 5s
        setTimeout(() => {
          closeWithAnimation();
          setSubmissionSuccess(false);
        }, 5000);
      } else {
        alert('Something went wrong: ' + (data.message || 'Please try again.'));
      }
    } catch (error) {
      console.log('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const closeWithAnimation = () => {
    setCookie('modalClosed', 'true', 15); // Store cookie when closing
    setAnimationState('fade-slide-up'); // Trigger hide animation
    setTimeout(() => {
      setIsVisible(false);
      onClose(); // Trigger parent onClose after animation completes
    }, 500); // Match the duration of the animation
  };

  const setCookie = (name, value, days) => {
    if (typeof document === 'undefined') return; // Prevent execution on server

    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${animationState}`}>
      {/* Success Bar: appears on successful submission, closes after 5s */}
      {submissionSuccess && <div className="absolute top-0 left-0 right-0 bg-green-500 text-white p-3 text-center z-10">You have successfully subscribed!</div>}

      <div className={`modal-container w-full max-w-3xl h-[30rem] bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 ${animationState}`}>
        {/* Close Button */}
        <button onClick={closeWithAnimation} className="absolute top-4 right-4 text-2xl p-3 w-12 h-12 rounded-full flex items-center justify-center bg-white text-gray-500 hover:text-gray-800">
          &times;
        </button>

        <div className="flex h-full">
          {/* Left Section */}
          <div className="md:basis-1/2 flex flex-col p-6 justify-center items-center gap-5">
            <h2 className="text-3xl text-center text-primary-blue px-5">
              Join Our <span className="font-bold">Newsletter</span>
            </h2>
            <p className="mt-4 text-primary-blue text-center text-xl px-7">Get the latest updates &amp; special offers.</p>

            {/* Newsletter Form */}
            <form className="mt-4 w-full" onSubmit={handleSubmit}>
              <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none ring-2 ring-primary-blue" required />
              {/* Show validation error if any */}
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}

              <button type="submit" className="w-full px-4 py-2 p-3 mt-8 text-2xl text-white bg-primary-blue rounded-full">
                Sign Up
              </button>
            </form>
          </div>

          {/* Right Section (Hidden on small screens) */}
          <div className="basis-1/2 hidden md:block">
            <Image src="/yachtrentals6.webp" alt="Yacht" className="w-full h-full object-cover" width={800} height={600} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
