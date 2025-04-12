import { createPageLayout } from '@/app/lib/createPageLayout';
const { default: PageLayout, generateMetadata } = createPageLayout('events/[slug]', 'events-detail-page');
export default PageLayout;
export { generateMetadata };