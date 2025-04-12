import { createPageLayout } from '@/app/lib/createPageLayout';
const { default: PageLayout, generateMetadata } = createPageLayout('faq', 'faq-page');
export default PageLayout;
export { generateMetadata };