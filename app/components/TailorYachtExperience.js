import React from "react";
import { Link } from "../i18n/routing";

const TailorYachtExperience = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-primary-blue-light w-full py-12 px-6">
      <h2 className=" text-primary-blue text-3xl lg:text-4xl font-bold text-center px-6 lg:px-0">
        Tailor your Yacht Charter Experience in Dubai
      </h2>
      <p className=" text-primary-grey text-center  text-base py-5">
        Live your life in a new way and get in touch with our agent for your
        customized tours
      </p>
      <Link href="/contact" className="px-5 py-3 bg-primary-blue text-white text-xl  font-bold rounded-md ">
        CONTACT US
      </Link>
    </div>
  );
};

export default TailorYachtExperience;
