import React from 'react';
import Image from 'next/image';
const CopyrightFooter = () => {
  return (
    <div className="bg-primary-black p-4 flex flex-col md:flex-row w-full items-center justify-center gap-8">
      <div className="text-white text-xs max-w-[650px] w-full text-center md:w-auto md:max-w-max ">
        © {/*get year*/ new Date().getFullYear()} Centaurus Passenger Yachts
        &amp; Boats Rental LLC, All rights reserved.
      </div>
      <Image
        src="/images/centaurus-charter-logo2.webp"
        alt="centaurus charter logo"
        width={200}
        height={0}
        style={{ height: 'auto' }}
      />
    </div>
  );
};

export default CopyrightFooter;
