// app/[locale]/offers/[slug]/layout.tsx
import { createPageLayout } from '@/app/lib/createPageLayout';

// Create a layout for the dynamic offers pages
// The '[slug]' placeholder will be replaced with the actual slug at runtime
const PageMetaLayout = createPageLayout('yacht-rentals/[slug]', 'yacht-rentals-detail-page');

// Export the layout component as default
export default PageMetaLayout;

// Export the generateMetadata function
export const generateMetadata = PageMetaLayout.generateMetadata;