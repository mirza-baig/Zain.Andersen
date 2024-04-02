// Globalit('renders correctly', async () => {
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import HeroHalfMedia from './HeroHalfMedia';
import defaultData from './HeroHalfMedia.mock-data';
import darkData from './HeroHalfMedia.mock-data-dark';
import grayData from './HeroHalfMedia.mock-data-gray';
import leftAlignData from './HeroHalfMedia.mock-data-left-align';
import videoData from './HeroHalfMedia.mock-data-video';

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
  const component = snapshot(HeroHalfMedia, { componentProps: defaultData });
  await hasDataComponent(component, 'hero/herohalfmedia');
});

it('dark renders correctly', async () => {
  const component = snapshot(HeroHalfMedia, { componentProps: darkData });
  await hasDataComponent(component, 'hero/herohalfmedia');
});

it('left align renders correctly', async () => {
  const component = snapshot(HeroHalfMedia, { componentProps: leftAlignData });
  await hasDataComponent(component, 'hero/herohalfmedia');
});

it('gray renders correctly', async () => {
  const component = snapshot(HeroHalfMedia, { componentProps: grayData });
  await hasDataComponent(component, 'hero/herohalfmedia');
});

it('video renders correctly', async () => {
  const component = snapshot(HeroHalfMedia, { componentProps: videoData });
  await hasDataComponent(component, 'hero/herohalfmedia');
});
