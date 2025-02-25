'use client'
import Navbar from "@/app/components/Navbar";
import FirstFooter from "@/app/components/FirstFooter";
import SecondFooter from "@/app/components/SecondFooter";
import CopyrightFooter from "@/app/components/CopyrightFooter";
export default function NotFound() {
    return (
      <><Navbar /><div
        className=" flex items-center justify-center h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/404_Page_BG.webp')" }} // Replace with your image path
      >
        {/* Overlay for better readability */}


        {/* Content */}

      </div>
      <FirstFooter />
              <SecondFooter />
              <CopyrightFooter /></>
    );
  }
  