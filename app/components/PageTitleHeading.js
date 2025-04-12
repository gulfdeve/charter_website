import React from "react";

const PageTitleHeading = ({title, className=""}) => {
  return (
    <div className={`py-8 lg:py-12 ${className}`}>
      <h1 className="text-primary-blue text-center">
        {title}
      </h1>
    </div>
  );
};

export default PageTitleHeading;
