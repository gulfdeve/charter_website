// app/lib/createPageLayout.tsx
import React from 'react';
import { fetchData } from '@/app/lib/fetchData';
import { Metadata } from 'next';

interface APIMetaData {
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
}

/**
 * Factory function that creates a page layout component with metadata generation
 * @param pagePath The page path pattern to use for metadata generation (can include placeholders like 'offers/[slug]')
 * @param className Optional CSS class name for styling
 * @param includeCanonical Whether to include canonical URL in metadata (default: true)
 */
export function createPageLayout(pagePath: string, className: string = '', includeCanonical: boolean = true) {
  // Create the layout component
  const PageLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
    return (
      <main className={className}>
        {children}
      </main>
    );
  };

  // This is properly typed for Next.js generateMetadata
  const generateMetadata = async (props: any): Promise<Metadata> => {
    // Next.js might provide params as a promise or direct object
    const params = props.params instanceof Promise ? await props.params : props.params;
    const { locale, ...dynamicParams } = params;
    const resolvedLocale = locale || "en"; // Default to English if locale is missing
    const baseUrl = "https://www.centauruscharter.com";

    // Replace dynamic path segments with actual values
    let resolvedPath = pagePath;
    Object.entries(dynamicParams).forEach(([key, value]) => {
      if (value) {
        resolvedPath = resolvedPath.replace(`[${key}]`, value.toString());
      }
    });

    try {
      // Use fetchData utility to get data
      const data = await fetchData();
      
      if (!data) {
        throw new Error('Failed to fetch data');
      }
      
      // Construct canonical URL based on locale and page path
      const canonicalUrl = resolvedLocale === "en"
        ? `${baseUrl}/${resolvedPath}`
        : `${baseUrl}/${resolvedLocale}/${resolvedPath}`;

      // Try to get metadata for the specific page
      const pageMeta: APIMetaData | undefined =
        data?.meta_tags?.[resolvedPath]?.[resolvedLocale]?.[0];
      
      // Fall back to home page metadata if specific page metadata is not available
      const homeMeta: APIMetaData | undefined =
        data?.meta_tags?.["home"]?.[resolvedLocale]?.[0];

      // Ensure we always have metadata to return
      const finalMeta: APIMetaData = pageMeta || homeMeta || {
        meta_title: `Default ${resolvedPath} Title`,
        meta_description: `Default ${resolvedPath} Description`,
        meta_keywords: `${resolvedPath}, default, keywords`,
      };

      const metadata: Metadata = {
        title: finalMeta.meta_title || `Default ${resolvedPath} Title`,
        description: finalMeta.meta_description || `Default ${resolvedPath} Description`,
        keywords: finalMeta.meta_keywords || `${resolvedPath}, default, keywords`,
      };

      // Only add canonical URLs if requested
      if (includeCanonical) {
        metadata.alternates = {
          canonical: canonicalUrl,
        };
      }

      return metadata;
    } catch (error) {
      console.error(`Error fetching metadata for ${resolvedPath}:`, error);
      
      const metadata: Metadata = {
        title: `Default ${resolvedPath} Title`,
        description: `Default ${resolvedPath} Description`,
        keywords: `${resolvedPath}, default, keywords`,
      };

      // Only add canonical URLs if requested
      if (includeCanonical) {
        const fallbackCanonical = resolvedLocale === "en"
          ? `${baseUrl}/${resolvedPath}`
          : `${baseUrl}/${resolvedLocale}/${resolvedPath}`;
          
        metadata.alternates = {
          canonical: fallbackCanonical,
        };
      }

      return metadata;
    }
  };

  // Return both the component and the generateMetadata function
  return {
    default: PageLayout,
    generateMetadata
  };
}