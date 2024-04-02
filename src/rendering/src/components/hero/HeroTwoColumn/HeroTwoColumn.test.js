// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import HeroTwoColumn from './HeroTwoColumn';
import defaultData from './HeroTwoColumn.mock-data';

it('renders correctly', async () => {
  let component = snapshot(HeroTwoColumn, { componentProps: defaultData });
  await hasDataComponent(component, 'hero/herotwocolumn');
});
