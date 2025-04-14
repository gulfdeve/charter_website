// app/NotFoundClient.js
"use client";

import { useTranslations } from "next-intl";
import { DataProvider } from "../context/DataContext";
import Navbar from "./Navbar";
import FirstFooter from "@/app/components/FirstFooter";
import SecondFooter from "@/app/components/SecondFooter";
import CopyrightFooter from "@/app/components/CopyrightFooter";
import { Link } from "@/app/i18n/routing";
import PageTitleHeading from "@/app/components/PageTitleHeading";
export default function NotFoundClient() {
  const t = useTranslations();

  return (
    <>
      {" "}
      <DataProvider>
        <Navbar />{" "}
		{/* <div
          className=" flex items-center justify-center h-screen w-full bg-cover bg-center"
          style={{ backgroundImage: "url('/404_bg.webp')" }} // Replace with your image path
        ></div> */}
		<div className="container mx-auto nav-space">
			<PageTitleHeading title="OOPS! THIS PAGE WAS LOST AT SEA" />
			<Link href="/">
			<img src="/404 Page_wt.webp" alt="404 Not Found" className="" />
			</Link>
			<Link href="/" className="block mx-auto w-full my-10 flex flex-row items-center justify-center yellow-solid-button">
				SAIL BACK
			</Link>
		</div>
        <FirstFooter />
        <SecondFooter />
        <CopyrightFooter />
      </DataProvider>
    </>
  );
}
