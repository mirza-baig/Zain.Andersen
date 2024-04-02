// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import bottomStickyTab from './BottomStickyTab';
import defaultData from './BottomStickyTab.mock-data';

it('renders correctly', async () => {
  const component = snapshot(bottomStickyTab, { componentProps: defaultData });
  await hasDataComponent(component, 'general/bottomstickytab');
});
