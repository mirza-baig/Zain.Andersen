// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import PromoBannerAuthored from './PromoBannerAuthored';
import defaultData from './PromoBannerAuthored.mock-data';
import withImageData from './PromoBannerAuthored.mock-data-with-image';
import rightAlignData from './PromoBannerAuthored.mock-data-right-align';
import withImageRightAlignData from './PromoBannerAuthored.mock-data-with-image-right-align';
import brandColorOutline from './PromoBannerAuthored.mock-data-brand-color-outline';
import blackSolid from './PromoBannerAuthored.mock-data-black-solid';
import blackOutline from './PromoBannerAuthored.mock-data-black-outline';

it('renders correctly', async () => {
  const component = snapshot(PromoBannerAuthored, { componentProps: defaultData });
  await hasDataComponent(component, 'promo/promobannerauthored');
});

it('with image renders correctly', async () => {
  const component = snapshot(PromoBannerAuthored, { componentProps: withImageData });
  await hasDataComponent(component, 'promo/promobannerauthored');
});

it('right align renders correctly', async () => {
  const component = snapshot(PromoBannerAuthored, { componentProps: rightAlignData });
  await hasDataComponent(component, 'promo/promobannerauthored');
});

it('with image right align renders correctly', async () => {
  const component = snapshot(PromoBannerAuthored, { componentProps: withImageRightAlignData });
  await hasDataComponent(component, 'promo/promobannerauthored');
});

it('brand color outline renders correctly', async () => {
  const component = snapshot(PromoBannerAuthored, { componentProps: brandColorOutline });
  await hasDataComponent(component, 'promo/promobannerauthored');
});

it('black solid renders correctly', async () => {
  const component = snapshot(PromoBannerAuthored, { componentProps: blackSolid });
  await hasDataComponent(component, 'promo/promobannerauthored');
});

it('black outline renders correctly', async () => {
  const component = snapshot(PromoBannerAuthored, { componentProps: blackOutline });
  await hasDataComponent(component, 'promo/promobannerauthored');
});

