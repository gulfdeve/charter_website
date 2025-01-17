import React, { useState, useEffect } from "react";

const Modal = ({ show, onClose }) => {
  const [isVisible, setIsVisible] = useState(show);
  const [animationState, setAnimationState] = useState(""); // To manage animation classes

  useEffect(() => {
    const isSubmitted = getCookie("emailSubmitted");
    if (isSubmitted) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
      setAnimationState("fade-slide-down"); // Trigger show animation
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email) {
      setCookie("emailSubmitted", "true", 15); // Set cookie for 15 days
      closeWithAnimation(); // Close modal with animation
    }
  };

  const closeWithAnimation = () => {
    setAnimationState("fade-slide-up"); // Trigger hide animation
    setTimeout(() => {
      setIsVisible(false);
      onClose(); // Trigger parent onClose after animation completes
    }, 500); // Match the duration of the animation
  };

  const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
  };

  const getCookie = (name) => {
    const cookieArr = document.cookie.split("; ");
    for (let cookie of cookieArr) {
      const [key, value] = cookie.split("=");
      if (key === name) {
        return value;
      }
    }
    return null;
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className={`modal-container w-full max-w-3xl h-[30rem] bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 ${animationState}`}
      >
        {/* Close Button */}
        <button
          onClick={closeWithAnimation}
          className="absolute top-4 right-4 text-2xl p-3 w-12 h-12 rounded-full flex items-center justify-center bg-white text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>

        <div className="flex h-full">
          {/* Left Section */}
          <div className="md:basis-1/2 flex flex-col p-6 justify-center items-center gap-5">
            <h2 className="text-3xl text-center text-primary-blue font-Montserrat px-5">
              Join Our <span className="font-bold">Newsletter</span>
            </h2>
            <h3 className="text-4xl font-bold text-center text-primary-blue mt-2 font-Montserrat">
              
              
            </h3>
            <p className="mt-4 text-primary-blue text-center text-xl px-7 font-Montserrat">
              Get the latest updates & special offers.
            </p>
            <form className="mt-4 w-full" onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none ring-2 ring-primary-blue placeholder:font-Montserrat"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 p-3 mt-8 text-2xl font-Montserrat text-white bg-primary-blue rounded-full"
              >
                Sign Up
              </button>
            </form>
          </div>

          {/* Right Section */}
          <div className="basis-1/2 hidden md:block">
            <img
              src="/yachtrentals6.webp" // Replace this with your image path
              alt="Yacht"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
