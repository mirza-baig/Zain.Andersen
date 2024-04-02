// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
import 'lib/jest/match-media-mock';
// Local
import ProductCarousel from './ProductCarousel';
import defaultData from './ProductCarousel.mock-data';

it('renders correctly', async () => {
  const component = snapshot(ProductCarousel, { componentProps: defaultData });
  await hasDataComponent(component, 'general/productcarousel');
});
