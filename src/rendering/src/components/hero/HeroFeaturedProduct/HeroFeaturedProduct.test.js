// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import HeroFeaturedProduct from './HeroFeaturedProduct';
import defaultData from './HeroFeaturedProduct.mock-data';

it('renders correctly', async () => {
  const component = snapshot(HeroFeaturedProduct, { componentProps: defaultData });
  await hasDataComponent(component, 'hero/herofeaturedproduct');
});
