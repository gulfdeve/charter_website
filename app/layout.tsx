
import "./globals.css";
import { Montserrat } from "next/font/google";
import { routing } from "./i18n/routing";
import { notFound } from "next/navigation";

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

  // Validate locale
 

 
  return (
    <html lang={locale}>
       <body className={`${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
