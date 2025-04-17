import { createPageLayout } from '@/app/lib/createPageLayout';

const { default: PageLayout, generateMetadata } = createPageLayout('centaurus-gems-offer', 'centaurus-gems-offer-page');
export default PageLayout;
export { generateMetadata };