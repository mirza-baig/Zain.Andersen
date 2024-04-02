// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import JobGuidedSearch from './JobGuidedSearch';
import defaultData from './JobGuidedSearch.mock-data';

it('renders correctly', async () => {
  const component = snapshot(JobGuidedSearch, { componentProps: defaultData });
  await hasDataComponent(component, 'affiliate/jobguidedsearch');
});
