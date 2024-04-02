// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import TabsFeaturedPromo from './TabsFeaturedPromo';
import defaultData from './TabsFeaturedPromo.mock-data';

it('renders correctly', async () => {
  const component = snapshot(TabsFeaturedPromo, { componentProps: defaultData });
  await hasDataComponent(component, 'promo/tabsfeaturedpromo');
});
