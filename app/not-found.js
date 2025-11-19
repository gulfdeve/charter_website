// app/not-found.js (or .tsx)
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import NotFoundClient from './components/NotFoundClient';
import { fetchData } from '@/app/lib/fetchData';

export default async function NotFoundPage() {
  // Choose your default locale; adjust as needed.
  const locale = 'en';
  const messages = await getMessages(locale);

  const data = await fetchData();

  return (
    <html lang="en">
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NotFoundClient />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
