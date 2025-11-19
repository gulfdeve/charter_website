"use client";
import { Link } from "../i18n/routing";
import Image from "next/image";

export default function LandingNavbar() {
  return (
    <>
      {/* Desktop Navbar */}
      <div className="fixed h-[4.5rem] top-0 left-0 w-full z-50 bg-white shadow-md lg:block hidden">
        <div className="container mx-auto px-6">
          <nav className="flex h-[4.5rem] items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/images/centaurus-charter-logo.webp"
                  alt="Centaurus charter Logo"
                  width={150}
                  height={0}
                  priority={true}
                />
              </Link>
            </div>

            {/* Book Now Button */}
            <div className="flex items-center">
              <Link
                href="/contact"
                className="bg-primary-blue text-white px-6 py-3 rounded-lg font-semibold uppercase tracking-wider hover:bg-primary-blue-2 transition-all duration-300 font-primary"
              >
                Book Now
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="fixed h-[4.5rem] top-0 left-0 w-full z-50 bg-white shadow-md lg:hidden block">
        <div className="container mx-auto px-4">
          <nav className="flex h-[4.5rem] items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/images/centaurus-charter-logo.webp"
                  alt="Centaurus charter Logo"
                  width={120}
                  height={0}
                  priority={true}
                />
              </Link>
            </div>

            {/* Book Now Button */}
            <div className="flex items-center">
              <Link
                href="/contact"
                className="bg-primary-blue text-white px-4 py-2 rounded-lg font-semibold uppercase text-sm tracking-wider hover:bg-primary-blue-2 transition-all duration-300 font-primary"
              >
                Book Now
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
