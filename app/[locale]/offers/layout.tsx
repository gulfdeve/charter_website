// app/[locale]/offers/layout.tsx
import React from 'react';
import { fetchData } from '@/app/lib/fetchData';

interface LayoutParams {
  locale: string;
}

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<LayoutParams>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<LayoutParams>;
}) {
  const { locale } = await params;
  const resolvedLocale = locale || "en";
  
  const data = await fetchData();
  
  const metaData = data?.meta_tags?.["offers"]?.[resolvedLocale]?.[0];
  const metaHome = data?.meta_tags?.["home"]?.[resolvedLocale]?.[0];
  
  const finalMeta = metaData || metaHome || {
    meta_title: "Default Title",
    meta_description: "Default Description",
  };
  
  return {
    title: finalMeta.meta_title || "Default Title",
    description: finalMeta.meta_description || "Default Description",
    keywords: finalMeta.meta_keywords || "default, keywords",
  };
}

const Layout = async ({ children, params }: LayoutProps) => {
  const { locale } = await params;
  return <main>{children}</main>;
};

export default Layout;