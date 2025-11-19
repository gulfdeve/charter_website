import { createPageLayout } from '@/app/lib/createPageLayout';
const { default: PageLayout, generateMetadata } = createPageLayout(
  'yachts-for-sale-dubai/[slug]',
  'yachts-for-sale-dubai-detail-page'
);
export default PageLayout;
export { generateMetadata };
