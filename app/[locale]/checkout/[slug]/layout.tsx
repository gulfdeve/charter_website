import { createPageLayout } from '@/app/lib/createPageLayout';
const { default: PageLayout, generateMetadata } = createPageLayout(
  'checkout',
  'checkout-page'
);
export default PageLayout;
export { generateMetadata };
