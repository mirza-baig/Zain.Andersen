// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import GlobalMasthead from './GlobalMasthead';
import defaultData from './GlobalMasthead.mock-data';

it('renders correctly', async () => {
  const component = snapshot(GlobalMasthead, { componentProps: defaultData });
  await hasDataComponent(component, 'general/globalmasthead');
});
