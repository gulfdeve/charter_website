import { Montserrat } from "next/font/google";
import Script from 'next/script';
import "../globals.css";
import Navbar from "@/app/components/Navbar";
import FareHarborLoader from '@/app/components/FareHarborLoader';
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
// import TopLoader from '@/app/components/TopLoader';
import NProgressLoader from '@/app/components/NProgressLoader';
import { FareHarborProvider } from "@/app/context/FareHarborContext";
import 'react-phone-input-2/lib/style.css';
import { headers } from 'next/headers';
import { fetchData } from '@/app/lib/fetchData';

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
  const serverData = await fetchData();

  // Validate locale
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  // Define your base URL.
  const baseUrl = "https://www.centauruscharter.com";
  // Read the current pathname from the header (set by middleware).
  const currentPath = (await headers()).get("x-current-path");
  // Use the middleware header if available; otherwise, fallback to the slug-based path.
  const canonicalUrl = currentPath
    ? `${baseUrl}${currentPath}`
    : (slug ? `${baseUrl}/${slug.join("/")}` : baseUrl);

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
        <NProgressLoader />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <DataProvider initialData={serverData}>
            <LanguageProvider>
              <Navbar />
              <FareHarborProvider>
                {children}
              </FareHarborProvider>
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
