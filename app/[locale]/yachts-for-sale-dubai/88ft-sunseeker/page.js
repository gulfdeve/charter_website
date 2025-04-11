"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import YachtCarousal from "@/app/components/YachtCarousel";

export default function Page() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [subscribe, setSubscribe] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errs = {};
    if (!fullName) errs.fullName = "Name is required";
    if (!email) errs.email = "Email is required";
    if (!phoneNumber) errs.phoneNumber = "Phone number is required";
    if (!message) errs.message = "Message is required";
    if (!acceptedTerms) errs.acceptedTerms = "Please accept the Terms and Conditions";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form:", { fullName, email, phoneNumber, message, subscribe, acceptedTerms });
    if (!validateForm()) return;

    try {
      const queryParams = new URLSearchParams({
        name: fullName,
        email: email,
        phone: phoneNumber,
        comments: message,
      });
      queryParams.set("offers_id", "43");

      const url = `${process.env.NEXT_PUBLIC_API_DOMAIN}/api/api_new/save_enquiry?${queryParams}`;
      const response = await fetch(url, { method: "POST" });
      const data = await response.json();

      if (response.ok) {
        setFullName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
        setSubscribe(false);
        setAcceptedTerms(false);
        setErrors({});
        alert("Success");
      } else {
        alert("Something went wrong while sending the form.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
        <div className="container mx-auto mt-20">
            <div className='bg-primary-blue-2 rounded-lg shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2 justify-center'>
                <div className='flex flex-col text-white py-3 md:py-10'>            
                    <h3 className='text-center font-bold text-xl sm:text-xxl uppercase py-5'>
                        Upon request
                    </h3>
                    <hr className='mx-20 my-6'></hr>
                    <table className='px-3 md:px-20 text-base sm:text-xl uppercase border-separate border-spacing-4'>
                        <thead>
                        <tr>
                            <td>Condition:</td>
                            <td className='font-bold'>new</td>
                        </tr>
                        <tr>
                            <td>Year:</td>
                            <td className='font-bold'>2024</td>
                        </tr>
                        <tr>
                            <td>location:</td>
                            <td className='font-bold'>Dubai</td>
                        </tr>
                        <tr>
                            <td>Availability:</td>
                            <td className='font-bold'>Available</td>
                        </tr>
                        </thead>
                    </table>
                    <button className=" m-10 lg:m-20 flex items-center justify-center gap-2 px-4 py-3 bg-primary-yellow text-primary-blue font-bold rounded-md hover:bg-yellow-600 transition">
                        CHAT WITH US
                    </button>
                </div>
                <div className='bg-white py-3 md:py-10'>            
                    <h3 className='text-center font-bold text-xl sm:text-xxl uppercase py-5'>
                    Technical specs
                    </h3>
                    <hr className='mx-20 my-6'></hr>
                    <table className='px-3 md:px-20 text-base uppercase border-separate border-spacing-2'>
                        <thead>
                        <tr>
                            <td className='font-bold'>Length:</td>
                            <td>86.7 FT / 26.43 M</td>
                        </tr>
                        <tr>
                            <td className='font-bold'>Max Speed:</td>
                            <td>28 knots</td>
                        </tr>
                        <tr>
                            <td className='font-bold'>BEAM:</td>
                            <td>21.3 FT / 6.49 M</td>
                        </tr>
                        <tr>
                            <td className='font-bold'>CRUISING Speed:</td>
                            <td>12 KNOTS</td>
                        </tr>
                        <tr>
                            <td className='font-bold'>Builder:</td>
                            <td>Sunseeker</td>
                        </tr>
                        <tr>
                            <td className='font-bold'>WATER CAPACITY:</td>
                            <td>1400 L / 369.84 US GAL</td>
                        </tr>
                        <tr>
                            <td className='font-bold'>YEAR BUILD:</td>
                            <td>SUNSEEKER</td>
                        </tr>
                        <tr>
                            <td className='font-bold'>FUEL CAPACITY:</td>
                            <td>11000 L / 2905.89 US GAL</td>
                        </tr>
                        <tr>
                            <td className='font-bold'>PROPULSION:</td>
                            <td>Shafts</td>
                        </tr>
                        <tr>
                            <td className='font-bold'>Engine:</td>
                            <td>TWIN MTU 10V 2000 M96L SHAFT (2 X 1622PS), TWIN MTU 12V 2000 M96L SHAFT (2 X 1950PS), TWIN MTU 12V M96X SHAFT (2 X 2000PS)</td>
                
                        </tr>
                        </thead>
                    </table>
                
                </div>
            </div>
        </div>

          <div className="container mx-auto mt-20">
          <div className="flex items-center justify-center w-full my-6 xl:px-36 lg:px-20 ">
            <hr className="flex-grow border-primary-yellow-dark" />
            <span className="px-4 text-3xl 2xl:text-3xl font-bold uppercase  text-black text-center">
            88 ft Yacht Sunseeker
            </span>
            <hr className="flex-grow border-primary-yellow-dark " />
          </div>
          <p className=" text-black text-lg 2xl:text-xl pt-2 pb-5 xl:px-36 lg:px-20 md:px-16 text-center">
          Step into a world of luxury with the 2024 Sunseeker 88, a masterpiece of seductive styling and smart, practical spaces. If you’re looking to buy a yacht in Dubai, this stunning yacht features a built-in hardtop and a cleverly configured interior that offers unparalleled comfort and elegance. The improved, sumptuous master cabin layout ensures a luxurious retreat, while the Beach Club with its innovative X-TEND™ sunbed at the aft promises relaxation and enjoyment. For those aiming to buy a luxury yacht, the 88 ft Sunseeker is an icon worthy of your immediate attention. Don't miss this opportunity to buy a boat in Dubai and experience the pinnacle of maritime luxury.
          </p>
        </div>
        <div className="container mx-auto ">
        <div className="bg-primary-blue-3 shadow-lg rounded-lg py-10 px-5 md:px-20 my-10">

        <h2 className="text-white px-4 text-3xl 2xl:text-3xl py-10 font-bold uppercase  text-black text-center">
            Inquiry
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border-l-4 rounded-md bg-[#f5f5f5] text-gray-600 focus:outline-none border-x-primary-blue-2 focus:border-primary-yellow focus:bg-[#f3f7fd] transition duration-200 ease-in-out"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  {errors.fullName && <p className="text-red-600 text-sm">{errors.fullName}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border-l-4 rounded-md bg-[#f5f5f5] text-gray-600 focus:outline-none border-x-primary-blue-2 focus:border-primary-yellow focus:bg-[#f3f7fd] transition duration-200 ease-in-out"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
                </div>
                <div>
                  {/* PhoneInput replaces the standard phone input */}
                  <PhoneInput
                    country="ae"
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                    placeholder="Enter phone number"
                    className="flex-1  rounded-md bg-gray-100"
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
                  {errors.phoneNumber && <p className="text-red-600 text-sm">{errors.phoneNumber}</p>}
                </div>
                <div>
                <input type="text" className="form-control w-full p-3 border-l-4 rounded-md bg-[#f5f5f5] text-gray-600 focus:outline-none border-x-primary-blue-2 cursor-not-allowed focus:bg-[#f3f7fd] transition duration-200 ease-in-out" name="interest" aria-label="Text input with dropdown button" value="88 FT YACHT SUNSEEKER" placeholder="INTERESTED IN"></input>
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-3 border-l-4 rounded-md bg-[#f5f5f5] text-gray-600 focus:outline-none border-x-primary-blue-2 focus:border-primary-yellow focus:bg-[#f3f7fd] transition duration-200 ease-in-out"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
                </div>
                <div className="space-y-2 text-white">
                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="updates"
                      className="mt-1 h-4 w-4 text-primary-blue focus:ring-2 focus:ring-[#0D2343] border-gray-300 rounded"
                      checked={subscribe}
                      onChange={(e) => setSubscribe(e.target.checked)}
                    />
                    <label htmlFor="updates" className="text-sm leading-5">
                      I would like to sign up to receive email updates from Centaurus Charter. See our{" "}
                      <a href="#" className="text-blue-500 underline">
                        Privacy Policy
                      </a>.
                    </label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="terms"
                      className="mt-1 h-4 w-4 text-primary-blue focus:ring-2 focus:ring-[#0D2343] border-gray-300 rounded"
                      checked={acceptedTerms}
                      onChange={(e) => setAcceptedTerms(e.target.checked)}
                    />
                    <label htmlFor="terms" className="text-sm leading-5">
                      I can confirm I have read and accepted the{" "}
                      <a href="#" className="text-blue-500 underline">
                        Terms and Conditions
                      </a>.
                    </label>
                    {errors.acceptedTerms && <p className="text-red-600 text-sm">{errors.acceptedTerms}</p>}
                  </div>
                </div>
                <div className="text-left">
                  <button
                    type="submit"
                    className="px-6 py-3 yellow-solid-button"
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </form>
              </div>
              </div>
              <YachtCarousal />
    </div>
  );
}
