// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
//lib
import 'lib/jest/match-media-mock';
// Local
import JobMiniSearch from './JobMiniSearch';
import defaultData from './JobMiniSearch.mock-data';

it('renders correctly', async () => {
  const component = snapshot(JobMiniSearch, { componentProps: defaultData });
  await hasDataComponent(component, 'affiliate/jobminisearch');
});
