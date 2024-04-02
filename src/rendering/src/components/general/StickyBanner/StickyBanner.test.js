// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import StickyBanner from './StickyBanner';
import defaultData from './StickyBanner.mock-data';

it('renders correctly', async () => {
  const component = snapshot(StickyBanner, { componentProps: defaultData });
  await hasDataComponent(component, 'general/stickybanner');
});
