// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
import 'lib/jest/match-media-mock';
// Local
import ProductIntro from './ProductIntro';
import defaultData from './ProductIntro.mock-data';

it('renders correctly', async () => {
  const component = snapshot(ProductIntro, { componentProps: defaultData });
  await hasDataComponent(component, 'product/productintro');
});
