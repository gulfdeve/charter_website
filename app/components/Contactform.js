import React from "react";

const Contactform = () => {
  return (
    <div className="flex items-center justify-center py-10 px-2">
      <form className="w-full max-w-6xl bg-primary-blue rounded-lg shadow-lg p-6 ">
      <h1 className="text-center text-white font-Montserrat text-4xl font-bold pb-7 ">INQUIRE</h1>
        <div class="flex flex-col lg:flex-row gap-6">
          
          <div class="flex flex-col w-full  gap-4">
            <div>
              
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 font-Montserrat rounded-md focus:ring focus:ring-blue-300"
                placeholder="Name"
              />
            </div>
            <div>
              
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 font-Montserrat rounded-md focus:ring focus:ring-blue-300"
                placeholder="Email"
              />
            </div>
            <div>
              
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full p-3 border border-gray-300 font-Montserrat rounded-md focus:ring focus:ring-blue-300"
                placeholder="Phone"
              />
            </div>
            <div>
             
              <input
                type="text"
                id="yachtname"
                name="yachtname"
                className="w-full p-3 border border-gray-300 font-Montserrat rounded-md focus:ring focus:ring-blue-300"
                placeholder="88 FT YACHT SUNCRACKER"
              />
            </div>
          </div>

          <div class="flex flex-col w-full  gap-4">
            <div>
            
              <textarea
                id="message"
                name="message"
                className="w-full p-3 border border-gray-300 font-Montserrat rounded-md focus:ring focus:ring-blue-300 h-32"
                placeholder="Message"
              ></textarea>
            </div>
            <div class="flex items-center gap-2">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring focus:ring-blue-300"
              />
              <label htmlFor="terms" class="text-sm text-white font-Montserrat">
              I'd like to receive updates on special offers, news and events
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-primary-yellow font-Montserrat text-primary-blue font-bold py-3 rounded-md "
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contactform;
