import { createPageLayout } from '@/app/lib/createPageLayout';
const { default: PageLayout, generateMetadata } = createPageLayout(
  'aboutus',
  'about-us-page'
);
export default PageLayout;
export { generateMetadata };
