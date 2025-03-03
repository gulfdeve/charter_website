// app/not-found.js (or .tsx)
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import NotFoundClient from "./components/NotFoundClient"

export default async function NotFoundPage() {
  // Choose your default locale; adjust as needed.
  const locale = "en";
  const messages = await getMessages(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>.

      <NotFoundClient />
     
    </NextIntlClientProvider>
  );
}
