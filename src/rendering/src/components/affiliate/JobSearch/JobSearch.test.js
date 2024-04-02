// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import 'lib/jest/match-media-mock';
import JobSearch from './JobSearch';
import defaultData from './JobSearch.mock-data';

it('renders correctly', async () => {
  const component = snapshot(JobSearch, { componentProps: defaultData });
  await hasDataComponent(component, 'affiliate/jobsearch');
});
