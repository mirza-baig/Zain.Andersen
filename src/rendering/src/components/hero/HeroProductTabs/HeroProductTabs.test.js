// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
import 'lib/jest/match-media-mock';
// Local
import HeroProductTabs from './HeroProductTabs';
import defaultData from './HeroProductTabs.mock-data';

it('renders correctly', async () => {
  const component = snapshot(HeroProductTabs, { componentProps: defaultData });
  await hasDataComponent(component, 'hero/heroproducttabs');
});
