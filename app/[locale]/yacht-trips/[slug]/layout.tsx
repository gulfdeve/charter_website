import { createPageLayout } from '@/app/lib/createPageLayout';
const { default: PageLayout, generateMetadata } = createPageLayout(
  'yacht-trips/[slug]',
  'yacht-trips-detail-page'
);
export default PageLayout;
export { generateMetadata };
