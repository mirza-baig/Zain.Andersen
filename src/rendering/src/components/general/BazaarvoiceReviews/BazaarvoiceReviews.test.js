// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import BazaarvoiceReviews from './BazaarvoiceReviews';
import defaultData from './BazaarvoiceReviews.mock-data';

it('renders correctly', async () => {
  const component = snapshot(BazaarvoiceReviews, { componentProps: defaultData });
  await hasDataComponent(component, 'general/bazaarvoicereviews');
});
