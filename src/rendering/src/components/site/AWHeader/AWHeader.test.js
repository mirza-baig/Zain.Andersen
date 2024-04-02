// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
import 'lib/jest/match-media-mock';
// Local
import AWHeader from './AWHeader';
import defaultData from './AWHeader.mock-data';

beforeEach(() => {
  fetch.resetMocks()
})

it('renders correctly', async () => {
  fetch.mockResponse(JSON.stringify({ token: 'token' }));

  const component = snapshot(AWHeader, { componentProps: defaultData });
  await hasDataComponent(component, 'site/awheader');
});
