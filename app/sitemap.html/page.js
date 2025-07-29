import blogs from '../[locale]/blogs/blogs.json';
import buyYachtData from "@/app/components/buyYachtData.json";
import { generateSitemapLinks } from "../utils/sitemap";

export default async function SitemapHtmlPage() {
  // Use a base URL for local rendering (can be window.location.origin if client-side, but here we use a placeholder)
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://charter.centarus.ae';
  // Fetch data from the same API as the XML route
  let data = {};
  try {
    const res = await fetch(`${baseUrl}/api/get-data`);
    if (res.ok) {
      data = await res.json();
    }
  } catch (e) {
    // fallback to empty data
  }
  const languages = ["", "ar", "ru", "zh"];
  const links = generateSitemapLinks({ baseUrl, data, blogs, buyYachtData, languages });
  return (
    <html>
      <head>
        <title>Sitemap</title>
        <meta name="robots" content="noindex, follow" />
      </head>
      <body>
        <h1>Sitemap</h1>
        <ul>
          {links.map((link, i) => (
            <li key={i}>
              <a href={link.url}>{link.url}</a>
            </li>
          ))}
        </ul>
      </body>
    </html>
  );
} 