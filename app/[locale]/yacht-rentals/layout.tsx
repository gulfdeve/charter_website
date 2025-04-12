import { createPageLayout } from '@/app/lib/createPageLayout';
const { default: PageLayout, generateMetadata } = createPageLayout('yacht-rentals', 'yacht-rentals-page');
export default PageLayout;
export { generateMetadata };