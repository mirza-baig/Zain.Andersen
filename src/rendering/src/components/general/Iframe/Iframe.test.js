// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import Iframe from './Iframe.dynamic';
import defaultData from './Iframe.mock-data';

it('renders correctly', async () => {
  const component = snapshot(Iframe, { componentProps: defaultData });
  await hasDataComponent(component, 'general/iframe');
});
