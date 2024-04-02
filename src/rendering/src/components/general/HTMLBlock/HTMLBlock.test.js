// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import HTMLBlock from './HTMLBlock.dynamic';
import defaultData from './HTMLBlock.mock-data';

it('renders correctly', async () => {
  const component = snapshot(HTMLBlock, { componentProps: defaultData });
  await hasDataComponent(component, 'general/htmlblock');
});
