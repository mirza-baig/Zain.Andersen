// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import FavoriteProducts from './FavoriteProducts.dynamic';
import defaultData from './FavoriteProducts.mock-data';

beforeEach(() => {
  fetch.resetMocks();
});

it('renders correctly', async () => {
  fetch.mockResponseOnce(JSON.stringify({ productData: [] }));

  const component = snapshot(FavoriteProducts, { componentProps: defaultData });
  await hasDataComponent(component, 'listing/favoriteproducts');
});
