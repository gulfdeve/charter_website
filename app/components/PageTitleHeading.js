import React from "react";

const PageTitleHeading = ({title}) => {
  return (
    <div className="flex flex-col items-center justify-center py-8 md:py-24 lg:py-14">
      <h1 className=" text-primary-blue text-center font-bold text-lg md:text-3xl lg:text-4xl">
        {title}
      </h1>
    </div>
  );
};

export default PageTitleHeading;
