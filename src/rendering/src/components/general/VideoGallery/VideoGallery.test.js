// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
import 'lib/jest/match-media-mock';
// Local
import VideoGallery from './VideoGallery';
import defaultData from './VideoGallery.mock-data';

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

it('renders correctly', async () => {
  const component = snapshot(VideoGallery, { componentProps: defaultData });
  await hasDataComponent(component, 'general/videogallery');
});
