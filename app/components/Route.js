import React from "react";

const Route = () => {
  return (
    <div>
      <div className="bg-primary-blue w-full h-auto py-10 xl:px-44 md:px-6 px-2">
        <div className="flex flex-col items-center justify-center pt-10 gap-5 lg:p-6 lg:mx-auto container">
          <h2 className=" text-center text-primary-yellow text-4xl font-bold">
          CRUISING ROUTE
          </h2>

          <p className=" text-center text-white text-lg px-4">
          Discover Dubai from the sea like never before. Enjoy our cruising options just for you:
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between lg:p-6 lg:mx-auto container">
          <div className="  lg:w-[47.5rem]">
            <div className="flex flex-col items-start justify-center px-4 py-3">
              <h3 className=" text-left text-white text-lg">
                Dubai Marine Cruise
              </h3>
              <ul className=" text-left text-white text-lg px-4 list-disc ">
                <li>
                1 Hour Yacht Trip (60 Mins)
                </li>
                <li>
                Dubai Marina · Bluewaters Island · Ain Dubai · JBR
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-center px-4 py-3">
              <h3 className=" text-left text-white text-lg">
                Atlantis Cruise
              </h3>
              <ul className=" text-left text-white text-lg px-4 list-disc ">
                <li>2 Hour Yacht Trip (120 Mins)</li>
                <li>Dubai Marina · Bluewaters Island · Ain Dubai · JBR</li>
                <li>Palm Jumeirah · Altantis</li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-center px-4 py-3">
              <h3 className=" text-left text-white text-lg">
                Burj Al Arab Cruise
              </h3>
              <ul className=" text-left text-white text-lg px-4 list-disc ">
                <li>3 Hour Yacht Trip (180 Mins)</li>
                <li>Dubai Marina · Bluewaters Island · Ain Dubai · JBR</li>
                <li>Palm Jumeirah · Altantis · Burj Al Arab</li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-center px-4 py-3">
              <h3 className=" text-left text-white text-lg">
                Dubai Canal Cruise
              </h3>
              <ul className=" text-left text-white text-lg px-4 list-disc ">
                <li>4 - 6 Hours Yacht Trip (240-360 Mins)</li>
                <li>Dubai Marina · Bluewaters Island · Ain Dubai · JBR</li>
                <li>Palm Jumeirah · Altantis · Burj Al Arab · Dubai Canal</li>
              </ul>
            </div>
            <div className="w-full bg-white h-0.5 my-14 "></div>
            <p className=" text-left text-white text-lg px-4 xl:px-0 xl:pb-6">If you want a tailored cruise, please don't hesitate to contact us. We will gladly assist you with your requirements.</p>
            <div className="flex flex-col items-start justify-center px-7 xl:px-0 py-3">
              <button className="blue-lined-button">
                Get a Quote
              </button>
            </div>
          </div>
          <div className="flex flex-col lg:items-center lg:justify-start px-4 gap-5 lg:w-2/3 lg:pt-10 ">
            <img src="/Route-map.jpg" />

            <button className="blue-lined-button">
              Download Map
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Route;
