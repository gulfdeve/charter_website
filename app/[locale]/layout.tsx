import { headers } from "next/headers";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "../globals.css";
import Navbar from "@/app/components/Navbar";
import FareHarborLoader from "@/app/components/FareHarborLoader";
import { LanguageProvider } from "../context/LanguageContext";
import { DataProvider } from "../context/DataContext";
import Sociallink from "@/app/components/Sociallink";
import FirstFooter from "@/app/components/FirstFooter";
import SecondFooter from "@/app/components/SecondFooter";
import CopyrightFooter from "@/app/components/CopyrightFooter";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "../i18n/routing";
import { notFound } from "next/navigation";
import TopLoader from "@/app/components/TopLoader";
import { FareHarborProvider } from "@/app/context/FareHarborContext";
import "react-phone-input-2/lib/style.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string; slug?: string[] }>;
}) {
  const { locale, slug } = await params;

  // Check that locale is supported (assuming routing.locales is something like ["en", "ar", "ru", "zh"])
  if (!routing.locales.includes(locale as "en" | "ar" | "ru" | "zh")) {
    notFound();
  }

  const messages = await getMessages();

  // Define defaultLocale – adjust as needed.
  const defaultLocale = "en";
  const localePrefix = locale === defaultLocale ? "" : `/${locale}`;

  // Reconstruct asPath from slug.
  // If no slug is passed, default to "/" which becomes an empty string in canonical URL.
  const asPath = slug && slug.length > 0 ? "/" + slug.join("/") : "/";
  const pathPart = asPath === "/" ? "" : asPath;

  // Use request headers to determine current host and protocol.
  const reqHeaders = headers();
  const host = (await reqHeaders).get("host") || "localhost:3000";
  const protocol = (await reqHeaders).get("x-forwarded-proto") || "https";

  // Construct canonical URL as: protocol://host + localePrefix + pathPart
  const canonicalUrl = `${protocol}://${host}${localePrefix}${pathPart}`;

  return (
    <html lang={locale}>
      <head>
        <link rel="canonical" href={canonicalUrl} />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=UA-131086702-1&AW-761360769"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-131086702-1');
              gtag('config', 'AW-761360769');
            `,
          }}
        />
      </head>
      <body className={`${montserrat.variable}`}>
        <TopLoader />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <DataProvider>
            <LanguageProvider>
              <Navbar />
              <FareHarborProvider>{children}</FareHarborProvider>
              <Sociallink />
              <FirstFooter />
              <SecondFooter />
              <CopyrightFooter />
              <FareHarborLoader />
            </LanguageProvider>
          </DataProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
