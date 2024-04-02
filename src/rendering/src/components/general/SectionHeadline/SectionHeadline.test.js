// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import SectionHeadline from './SectionHeadline';
import defaultData from './SectionHeadline.mock-data';

it('renders correctly', async () => {
  const component = snapshot(SectionHeadline, { componentProps: defaultData });
  await hasDataComponent(component, 'general/sectionheadline');
});
