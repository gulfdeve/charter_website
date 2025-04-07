import React from "react";

const PageTitleHeading = ({title}) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 lg:pt-14">
      <h1 className=" text-primary-blue text-center font-bold text-lg md:text-3xl lg:text-4xl">
        {title}
      </h1>
    </div>
  );
};

export default PageTitleHeading;
