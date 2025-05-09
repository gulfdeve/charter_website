// app/sitemap.xml/route.js
import { formatISO } from 'date-fns'
import { NextResponse } from 'next/server'
import { fetchData } from '@/app/lib/fetchData'

const baseUrl = process.env.SITE_URL || 'https://yourdomain.com'
const now = formatISO(new Date())
const locales = ['', 'ar', 'zh', 'ru']

async function getSlugs(endpoint) {
  const items = await fetchData(endpoint)
  return items.map(item => item.slug)
}

export async function GET() {
  const [
    productSlugs,
    packageSlugs,
    experienceSlugs,
    eventSlugs,
    pagePaths,
    assetPaths,
  ] = await Promise.all([
    getSlugs('/products'),
    getSlugs('/packages'),
    getSlugs('/experiences'),
    getSlugs('/events'),
    getSlugs('/pages'),
    getSlugs('/assets'),
  ])

  const urlBlock = loc => `
    <url>
      <loc>${loc}</loc>
      <lastmod>${now}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`

  const urls = []

  // roots
  locales.forEach(locale => {
    const prefix = locale ? `/${locale}` : ''
    urls.push(urlBlock(`${baseUrl}${prefix}/`))
  })

  // dynamic routes…
  productSlugs.forEach(slug =>
    locales.forEach(locale => {
      const prefix = locale ? `/${locale}` : ''
      urls.push(urlBlock(`${baseUrl}${prefix}/yacht-rentals/${slug}`))
    })
  )

  // repeat for packages, experiences, events, pages, assets…

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.join('')}
  </urlset>`

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml' },
  })
}
