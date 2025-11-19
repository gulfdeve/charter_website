import { createPageLayout } from '@/app/lib/createPageLayout';
const { default: PageLayout, generateMetadata } = createPageLayout(
  'watersports/[slug]',
  'watersports-detail-page'
);
export default PageLayout;
export { generateMetadata };
