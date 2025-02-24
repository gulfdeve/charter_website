import Script from 'next/script';
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
import TopLoader from '@/app/components/TopLoader';
import { FareHarborProvider } from "@/app/context/FareHarborContext";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string; slug?: string[] }>;
}) {
  const { locale, slug } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  const baseUrl = "https://www.centauruscharter.com";
  const canonicalUrl = slug ? `${baseUrl}/${slug.join("/")}` : baseUrl;

  return (
    <>
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
      <link rel="canonical" href={canonicalUrl} />
      <TopLoader />
      <NextIntlClientProvider locale={locale} messages={messages}>
        <DataProvider>
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
    </>
  );
}