// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import TwoColumnHeadline from './TwoColumnHeadline';
import defaultData from './TwoColumnHeadline.mock-data';

it('renders correctly', async () => {
  let component = snapshot(TwoColumnHeadline, { componentProps: defaultData });
  await hasDataComponent(component, 'general/twocolumnheadline');
});
