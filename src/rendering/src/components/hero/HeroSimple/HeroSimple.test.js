// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import HeroSimple from './HeroSimple';
import defaultData from './HeroSimple.mock-data';

it('renders correctly', async () => {
  const component = snapshot(HeroSimple, { componentProps: defaultData });
  await hasDataComponent(component, 'general/herosimple');
});
