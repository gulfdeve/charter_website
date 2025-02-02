import React from 'react';
import { useLocale } from "next-intl";

interface Metadata {
  title: string;
  description: string;
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

// Using generateMetadata to fetch dynamic metadata
export async function generateMetadata({ params }: { params: { slug: string; locale: string } }) {
    
    const locale = await params.locale || 'en'; // Ensure locale is set
  
    try {
      const response = await fetch('https://www.centauruscharter.com/api/api_new/basic');
      const data = await response.json();
  
      // ✅ Find the yacht by slug, with a check to prevent errors
      const experience = await data?.experiences?.find((item: { slug: string }) => item.slug === params.slug);
  
      if (!experience) {
        console.warn(`No yacht found for slug: `);
        return {
          title: 'Default Title',
          description: 'Default Description',
        };
      }
  
      return {
        title: experience.translations?.[locale]?.meta.title || 'Default Title',
        description: experience.translations?.[locale]?.meta.description || 'Default Description',
      };
    } catch (error) {
      console.error('Error fetching metadata:', error);
      return {
        title: 'Default Title',
        description: 'Default Description',
      };
    }
  }
  
export default Layout;
