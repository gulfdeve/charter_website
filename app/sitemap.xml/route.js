import blogs from '../[locale]/blogs/blogs.json';
import buyYachtData from '@/app/components/buyYachtData.json';
import generateSitemapLinks from '../utils/sitemap';
import { fetchData } from '@/app/lib/fetchData';

export async function GET(request) {
  try {
    const data = await fetchData();
    // // Get the base URL from the request
    // // const baseUrl = new URL(request.url).origin;
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

    // // Fetch data from our existing API
    // const response = await fetch(`${baseUrl}/api/get-data`);

    // if (!response.ok) {
    // 	throw new Error("Failed to fetch data");
    // }

    // const data = await response.json();

    const languages = ['', 'ar', 'ru', 'zh'];

    const links = generateSitemapLinks({
      baseUrl,
      data,
      blogs,
      buyYachtData,
      languages,
    });

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${links
      .map(
        link =>
          `  <url>\n    <loc>${link.url}</loc>\n    <lastmod>${link.lastmod}</lastmod>\n    <changefreq>${link.changefreq}</changefreq>\n    <priority>${link.priority}</priority>\n  </url>`
      )
      .join('\n')}\n</urlset>`;

    return new Response(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=7200',
      },
    });
  } catch (error) {
    console.error('Sitemap generation error:', error);

    // Return a basic sitemap even if data fetch fails
    const baseUrl = new URL(request.url).origin;
    const basicSitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${baseUrl}</loc>\n    <lastmod>${new Date().toISOString()}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>\n  <url>\n    <loc>${baseUrl}/ar</loc>\n    <lastmod>${new Date().toISOString()}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>\n  <url>\n    <loc>${baseUrl}/ru</loc>\n    <lastmod>${new Date().toISOString()}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>\n  <url>\n    <loc>${baseUrl}/zh</loc>\n    <lastmod>${new Date().toISOString()}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>\n</urlset>`;

    return new Response(basicSitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=1800',
      },
    });
  }
}
