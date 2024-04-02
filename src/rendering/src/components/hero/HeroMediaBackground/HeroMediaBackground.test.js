// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import HeroMediaBackground from './HeroMediaBackground';
import defaultData from './HeroMediaBackground.mock-data';

it('renders correctly', async () => {
  const component = snapshot(HeroMediaBackground, { componentProps: defaultData });
  await hasDataComponent(component, 'hero/heromediabackground');
});
