// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import ProductPreviewCard from './ProductPreviewCard';
import defaultData from './ProductPreviewCard.mock-data';

it('renders correctly', async () => {
  const component = snapshot(ProductPreviewCard, { componentProps: defaultData });
  await hasDataComponent(component, 'card/productpreview');
});
