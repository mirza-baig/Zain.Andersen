// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import PromoReviewContentAuthored from './PromoReviewContentAuthored';
import defaultData from './PromoReviewContentAuthored.mock-data';

it('renders correctly', async () => {
  const component = snapshot(PromoReviewContentAuthored, { componentProps: defaultData });
  await hasDataComponent(component, 'promo/promoreviewcontentauthored');
});
