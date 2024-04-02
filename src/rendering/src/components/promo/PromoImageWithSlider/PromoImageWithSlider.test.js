// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import PromoImageWithSlider from './PromoImageWithSlider';
import defaultData from './PromoImageWithSlider.full-width.mock-data';

it('renders correctly', async () => {
  const component = snapshot(PromoImageWithSlider, { componentProps: defaultData });
  await hasDataComponent(component, 'promo/promoimagewithslider');
});
