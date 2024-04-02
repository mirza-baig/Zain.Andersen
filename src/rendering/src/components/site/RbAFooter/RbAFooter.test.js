// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import RbAFooter from './RbAFooter';
import defaultData from './RbAFooter.mock-data';

it('renders correctly', async () => {
  const component = snapshot(RbAFooter, { componentProps: defaultData });
  await hasDataComponent(component, 'site/rbafooter');
});
