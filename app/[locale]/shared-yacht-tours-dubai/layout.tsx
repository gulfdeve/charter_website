// app/[locale]/aboutus/layout.tsx
import { createPageLayout } from '@/app/lib/createPageLayout';

// Create a layout for the "aboutus" page with a custom class if needed
const PageMetaLayout = createPageLayout('shared-yacht-tours-dubai', 'shared-yacht-tours-dubai-page');

// Export the layout component as default
export default PageMetaLayout;

// Export the generateMetadata function
export const generateMetadata = PageMetaLayout.generateMetadata;