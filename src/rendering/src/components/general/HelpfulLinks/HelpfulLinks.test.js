// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import HelpfulLinks from './HelpfulLinks';
import defaultData from './HelpfulLinks.mock-data';

it('renders correctly', async () => {
  const component = snapshot(HelpfulLinks, { componentProps: defaultData });
  await hasDataComponent(component, 'general/helpfullinks');
});
