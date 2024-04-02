// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import HeroWithFormFill from './HeroWithFormFill';
import defaultData from './HeroWithFormFill.mock-data';

it('renders correctly', async () => {
  const component = snapshot(HeroWithFormFill, { componentProps: defaultData });
  await hasDataComponent(component, 'hero/herowithformfill');
});
