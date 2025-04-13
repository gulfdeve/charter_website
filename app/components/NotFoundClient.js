// app/NotFoundClient.js
"use client";

import { useTranslations } from "next-intl";
import { DataProvider } from "../context/DataContext";
import Navbar from "./Navbar";
import FirstFooter from "@/app/components/FirstFooter";
import SecondFooter from "@/app/components/SecondFooter";
import CopyrightFooter from "@/app/components/CopyrightFooter";
import { Link } from "@/app/i18n/routing";
export default function NotFoundClient() {
  const t = useTranslations();

  return (
    <>
      {" "}
      <DataProvider>
        <Navbar />{" "}
        <Link href="/">
		<div
          className=" flex items-center justify-center h-screen w-full bg-cover bg-center"
          style={{ backgroundImage: "url('/404_Page_BG.webp')" }} // Replace with your image path
        ></div>
		</Link>
        <FirstFooter />
        <SecondFooter />
        <CopyrightFooter />
      </DataProvider>
    </>
  );
}
