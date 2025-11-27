import { createPageLayout } from '@/app/lib/createPageLayout';
const { default: PageLayout, generateMetadata } = createPageLayout('offers/[slug]', 'offers-detail-page');
export default PageLayout;
export { generateMetadata };
