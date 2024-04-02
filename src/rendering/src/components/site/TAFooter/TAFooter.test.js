// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import TAFooter from './TAFooter';
import defaultData from './TAFooter.mock-data';

it('renders correctly', async () => {
  const component = snapshot(TAFooter, { componentProps: defaultData });
  await hasDataComponent(component, 'site/tafooter');
});
