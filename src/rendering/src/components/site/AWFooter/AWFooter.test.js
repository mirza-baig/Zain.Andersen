// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import AWFooter from './AWFooter';
import defaultData from './AWFooter.mock-data';

it('renders correctly', async () => {
  const component = snapshot(AWFooter, { componentProps: defaultData });
  await hasDataComponent(component, 'site/awfooter');
});
