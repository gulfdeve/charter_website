import blogs from '../[locale]/blogs/blogs.json';
import buyYachtData from "@/app/components/buyYachtData.json";
import generateSitemapLinks from "../utils/sitemap";
import { fetchData } from '@/app/lib/fetchData';

export default async function SitemapHtmlPage() {

  const data = await fetchData();

  // Use a base URL for local rendering (can be window.location.origin if client-side, but here we use a placeholder)
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  // // Fetch data from the same API as the XML route
  // let data = {};
  // try {
  //   const res = await fetch(`${baseUrl}/api/get-data`);
  //   if (res.ok) {
  //     data = await res.json();
  //   }
  // } catch (e) {
  //   // fallback to empty data
  // }
  const languages = ["", "ar", "ru", "zh"];
  const links = generateSitemapLinks({ baseUrl, data, blogs, buyYachtData, languages });
  return (
    <html>
      <head>
        <title>Sitemap</title>
        <meta name="robots" content="noindex, follow" />
      </head>
      <body className='container mx-auto m-10'>
        <h1 className='mb-10'>Sitemap</h1>
        <ul>
          {links.map((link, i) => (
            <li className='py-1 m-2 bg-green-100 text-green-800' key={i}>
              <a className='hover:underline' href={link.url}>{link.url}</a>
            </li>
          ))}
        </ul>
      </body>
    </html>
  );
} 