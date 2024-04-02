// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
import 'lib/jest/match-media-mock';
// Local
import ProductGallery from './ProductGallery';
import defaultData from './ProductGallery.mock-data';

it('renders correctly', async () => {
  const component = snapshot(ProductGallery, { componentProps: defaultData });
  await hasDataComponent(component, 'general/productgallery');
});
