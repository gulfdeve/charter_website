import React from "react";

const Modal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className={`w-full max-w-3xl h-[30rem] bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl p-3 w-12 h-12 rounded-full flex items-center justify-center bg-white text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>

        <div className="flex h-full">
          {/* Left Section */}
          <div className="md:basis-1/2 flex flex-col p-6 justify-center items-center gap-5">
            <h2 className="text-3xl text-center text-primary-blue font-Montserrat px-5">
              Join Our <span className=" font-bold">Newsletter</span>
            </h2>
            <h3 className="text-4xl font-bold text-center text-primary-blue mt-2 font-Montserrat">
              SUBSCRIBE
            </h3>
            <p className="mt-4 text-primary-blue text-center text-xl px-7 font-Montserrat">
              Get the latest updates & special offers.
            </p>
            <form className="mt-4 w-full">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none ring-2 ring-primary-blue placeholder:font-Montserrat"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 p-3 mt-8 text-2xl font-Montserrat text-white bg-primary-blue rounded-full "
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
