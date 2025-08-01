import { createPageLayout } from '@/app/lib/createPageLayout';
const { default: PageLayout, generateMetadata } = createPageLayout('blogs/[slug]', 'blogs-detail-page');
export default PageLayout;
export { generateMetadata };