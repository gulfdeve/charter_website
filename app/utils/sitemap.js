// Utility to generate all sitemap URLs as objects for XML or HTML rendering
export default function generateSitemapLinks({ baseUrl, data, blogs, buyYachtData, languages = ['', 'ar', 'ru', 'zh'] }) {
  const now = new Date().toISOString();
  const staticUrls = [
    '/contact',
    '/faq',
    '/new-year-yacht-party',
    '/abu-dhabi-race-yacht-charter',
    '/blogs',
    '/resident-offer',
    '/aboutus',
    '/events',
    '/offers',
    '/yacht-rentals',
    '/watersports',
    '/yachts-for-sale-dubai',
    '/shared-yacht-tours-dubai',
    '/yacht-trips',
    '/terms-and-condition',
    '/privacy-and-policy',
    '/centaurus-gems-offer',
    '/international-yachts',
    '/rent-yacht-fifa-world-cup',
    '/yacht-rentals-spring-offer',
  ];
  // Home links
  const homeLinks = languages.map(lang => {
    const langPrefix = lang ? `/${lang}` : '';
    return {
      url: `${baseUrl}${langPrefix || ''}`,
      lastmod: now,
      changefreq: 'weekly',
      priority: 1.0,
    };
  });
  // Static URLs
  const staticLinks = staticUrls.flatMap(url =>
    languages.map(lang => {
      const langPrefix = lang ? `/${lang}` : '';
      return {
        url: `${baseUrl}${langPrefix}${url}`,
        lastmod: now,
        changefreq: 'weekly',
        priority: 0.8,
      };
    })
  );
  // Events
  const eventLinks = data?.events
    ? data.events.flatMap(event =>
        languages.map(lang => {
          const langPrefix = lang ? `/${lang}` : '';
          return {
            url: `${baseUrl}${langPrefix}/events/${event.slug}`,
            lastmod: now,
            changefreq: 'weekly',
            priority: 0.7,
          };
        })
      )
    : [];
  // Offers
  const offerLinks = data?.offers
    ? data.offers.flatMap(offer =>
        languages.map(lang => {
          const langPrefix = lang ? `/${lang}` : '';
          return {
            url: `${baseUrl}${langPrefix}/offers/${offer.slug}`,
            lastmod: now,
            changefreq: 'weekly',
            priority: 0.7,
          };
        })
      )
    : [];
  // Yacht rentals (products)
  const productLinks = data?.products
    ? data.products.flatMap(yacht =>
        languages.map(lang => {
          const langPrefix = lang ? `/${lang}` : '';
          return {
            url: `${baseUrl}${langPrefix}/yacht-rentals/${yacht.slug}`,
            lastmod: now,
            changefreq: 'weekly',
            priority: 0.7,
          };
        })
      )
    : [];
  // Yachts for sale (buyYachtData)
  const productsBuyLinks = buyYachtData?.products
    ? buyYachtData.products.flatMap(yacht =>
        languages.map(lang => {
          const langPrefix = lang ? `/${lang}` : '';
          return {
            url: `${baseUrl}${langPrefix}/yachts-for-sale-dubai/${yacht.slug}`,
            lastmod: now,
            changefreq: 'weekly',
            priority: 0.7,
          };
        })
      )
    : [];
  // Experiences
  const experiencesLinks = data?.experiences
    ? data.experiences.flatMap(experience =>
        languages.map(lang => {
          const langPrefix = lang ? `/${lang}` : '';
          return {
            url: `${baseUrl}${langPrefix}/yacht-trips/${experience.slug}`,
            lastmod: now,
            changefreq: 'weekly',
            priority: 0.6,
          };
        })
      )
    : [];
  // Watersports
  const watersportsLinks = data?.packages
    ? data.packages.flatMap(pkg =>
        languages.map(lang => {
          const langPrefix = lang ? `/${lang}` : '';
          return {
            url: `${baseUrl}${langPrefix}/watersports/${pkg.slug}`,
            lastmod: now,
            changefreq: 'weekly',
            priority: 0.6,
          };
        })
      )
    : [];
  // Blogs
  const blogsLinks = blogs
    ? blogs.flatMap(blog =>
        languages.map(lang => {
          const langPrefix = lang ? `/${lang}` : '';
          return {
            url: `${baseUrl}${langPrefix}/blogs/${blog.slug}`,
            lastmod: now,
            changefreq: 'weekly',
            priority: 0.7,
          };
        })
      )
    : [];
  return [...homeLinks, ...staticLinks, ...eventLinks, ...offerLinks, ...productLinks, ...experiencesLinks, ...watersportsLinks, ...blogsLinks, ...productsBuyLinks];
}
