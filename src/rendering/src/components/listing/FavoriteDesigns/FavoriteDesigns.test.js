// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
import 'lib/jest/match-media-mock';
// Local
import FavoriteDesigns from './FavoriteDesigns.dynamic';
import defaultData from './FavoriteDesigns.mock-data';

it('renders correctly', async () => {
  fetch.mockResponseOnce(JSON.stringify({ productData: [] }));

  const component = snapshot(FavoriteDesigns, { componentProps: defaultData });
  await hasDataComponent(component, 'general/favoritedesigns');
});
