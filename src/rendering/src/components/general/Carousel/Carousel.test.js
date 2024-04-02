// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
import 'lib/jest/match-media-mock';
// Local
import Carousel from './Carousel';
import defaultData from './Carousel.mock-data';

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
  const component = snapshot(Carousel, { componentProps: defaultData });
  await hasDataComponent(component, 'general/carousel');
});
