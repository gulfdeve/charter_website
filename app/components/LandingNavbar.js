// "use client";
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
                href="https://wa.link/8nj51w"
                className="red-solid-button"
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
              <a
                href="https://wa.link/8nj51w"
                target="_blank"
                className="red-solid-button"
              >
                Book Now
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
