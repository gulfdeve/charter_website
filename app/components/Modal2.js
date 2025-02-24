import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Import the styles for react-phone-input-2

const Modal2 = ({ isModalOpen, closeModal }) => {
  if (!isModalOpen) return null;

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ fullName, phoneNumber, email, message });
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-6xl h-[34rem] p-6 relative">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-2xl p-3 w-10 h-10 rounded-full flex items-center justify-center  text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>

        <div className="grid grid-cols-2 gap-5">
          <div className="rounded-lg overflow-hidden ">
            <img
              src="/modal2.jpg"
              alt="Yacht Image"
              className="w-[32rem] h-[31rem] object-cover"
            />
          </div>

          <div className="pr-10">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border outline outline-primary-blue bg-gray-100 border-primary-blue  placeholder: rounded-md p-3 "
              />

             
              <div className="flex items-center">
                <PhoneInput
                  country="ae" 
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  className="flex-1 outline outline-primary-blue rounded-md bg-gray-100  placeholder:"
                  placeholder="Enter phone number"
                  inputStyle={{
                    width: "100%",
                    padding: "20px",
                    paddingLeft: "65px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    display: "flex",
                    justifyContent: "space-between",
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
              </div>

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border outline outline-primary-blue bg-gray-100 border-primary-blue  placeholder: rounded-md p-3"
              />

              <textarea
                placeholder="UAE Residents Yacht Offers"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="8" // Set the number of rows to 12
                className="w-full border outline outline-primary-blue bg-gray-100 border-primary-blue  placeholder: rounded-md p-3"
              />

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
