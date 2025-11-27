import { createPageLayout } from '@/app/lib/createPageLayout';
const { default: PageLayout, generateMetadata } = createPageLayout('blogs', 'blogs-page');
export default PageLayout;
export { generateMetadata };
