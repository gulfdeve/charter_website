// app/[locale]/aboutus/layout.tsx
import { createPageLayout } from '@/app/lib/createPageLayout';

// Create a layout for the "aboutus" page with a custom class if needed
const PageMetaLayout = createPageLayout('abu-dhabi-race-2024-yacht-packages', 'abu-dhabi-race-2024-yacht-packages-page');

// Export the layout component as default
export default PageMetaLayout;

// Export the generateMetadata function
export const generateMetadata = PageMetaLayout.generateMetadata;