// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import PromoFeaturedMedia from './PromoFeaturedMedia';
import defaultData from './PromoFeaturedMedia.mock-data';
import blackData from './PromoFeaturedMedia.mock-data-black';
import grayData from './PromoFeaturedMedia.mock-data-gray';
import videoData from './PromoFeaturedMedia.mock-data-video';

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
  const component = snapshot(PromoFeaturedMedia, { componentProps: defaultData });
  await hasDataComponent(component, 'promo/promofeaturedmedia');
});

it('black renders correctly', async () => {
  const component = snapshot(PromoFeaturedMedia, { componentProps: blackData });
  await hasDataComponent(component, 'promo/promofeaturedmedia');
});

it('gray renders correctly', async () => {
  const component = snapshot(PromoFeaturedMedia, { componentProps: grayData });
  await hasDataComponent(component, 'promo/promofeaturedmedia');
});

it('video renders correctly', async () => {
  const component = snapshot(PromoFeaturedMedia, { componentProps: videoData });
  await hasDataComponent(component, 'promo/promofeaturedmedia');
});
