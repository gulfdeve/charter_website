import "./globals.css";
import { Montserrat } from "next/font/google";
import "react-phone-input-2/lib/style.css";
import { routing } from "./i18n/routing";
import { notFound } from "next/navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default async function RootLayout({ children, params }) {
  // Await the params object
  const { locale, slug } = await params;

  // Validate the locale; if invalid, show a 404 page.
  if (!routing.locales.includes(locale)) {
    notFound();
  }

export default function RootLayout({ children }) {
  return children;
}
