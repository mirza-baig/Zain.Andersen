// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import CardImageAndProductDetails from './CardImageAndProductDetails';
import defaultData from './CardImageAndProductDetails.mock-data';

it('renders correctly', async () => {
  const component = snapshot(CardImageAndProductDetails, { componentProps: defaultData });
  await hasDataComponent(component, 'card/cardimageandproductdetails');
});
