// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
import 'lib/jest/match-media-mock';
// Local
import RbAHeader from './RbAHeader';
import defaultData from './RbAHeader.mock-data';

import { currentAccessToken } from 'lib/coveo';

jest.mock('lib/coveo');

jest.mock('src/helpers/Coveo', () => ({
  StandaloneSearchBox: () => <div>StandaloneSearchBox</div>,
}));

it('renders correctly', async () => {
  currentAccessToken.mockResolvedValue(Promise.resolve('mock-token'));

  const component = snapshot(RbAHeader, { componentProps: defaultData });
  await hasDataComponent(component, 'site/rbaheader');
});
