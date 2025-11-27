// "use client";
import { Link } from '../i18n/routing';
import Image from 'next/image';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

export default function LandingNavbar() {
  return (
    <div className="fixed h-[4.5rem] top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 lg:px-6">
        <nav className="flex h-[4.5rem] items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image src="/images/centaurus-charter-logo.webp" alt="Centaurus charter Logo" width={150} height={0} priority={true} className="w-[120px] lg:w-[150px]" />
            </Link>
          </div>

          {/* Contact Icons */}
          <div className="flex items-center gap-6 lg:gap-6">
            {/* WhatsApp Icon */}
            <a href="https://wa.link/k3yiet" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center" aria-label="Contact via WhatsApp">
              <IoLogoWhatsapp className="w-8 h-8 lg:w-8 lg:h-8 text-black" />
            </a>

            {/* Email Icon */}
            <a href="mailto:info@centauruscharter.com" className="flex items-center justify-center" aria-label="Send Email">
              <MdEmail className="w-8 h-8 lg:w-8 lg:h-8 text-black" />
            </a>

            {/* Phone Icon */}
            <a href="tel:+971544427786" className="flex items-center justify-center" aria-label="Call Us">
              <FaPhoneAlt className="w-8 h-8 lg:w-8 lg:h-8 text-black" />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
