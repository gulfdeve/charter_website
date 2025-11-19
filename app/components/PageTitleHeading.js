import React from 'react';

const PageTitleHeading = ({ title, className = '' }) => {
  return (
    <div className={`text-primary-blue py-8 lg:py-12 ${className}`}>
      <h1 className="text-center">{title}</h1>
    </div>
  );
};

export default PageTitleHeading;
