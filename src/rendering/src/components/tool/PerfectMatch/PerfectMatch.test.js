// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import PerfectMatch from './PerfectMatch';
import defaultData from './PerfectMatch.mock-data';

jest.mock('next/router', () => ({
  useRouter() {
    return ({
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn()
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null)
    });
  },
}));

it('renders correctly', async () => {
  const component = snapshot(PerfectMatch, { componentProps: defaultData });
  await hasDataComponent(component, 'perfectmatch/perfectmatch');
});
