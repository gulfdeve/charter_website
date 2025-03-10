import React from "react";

const PageTitleHeading = ({title}) => {
  return (
    <div className="flex flex-col items-center justify-center py-10 ">
      <h1 className=" text-primary-blue text-center font-bold md:text-4xl ">
        {title}
      </h1>
    </div>
  );
};

export default PageTitleHeading;
