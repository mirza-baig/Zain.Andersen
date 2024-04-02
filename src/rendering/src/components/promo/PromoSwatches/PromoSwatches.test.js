// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import PromoSwatches from './PromoSwatches';
import defaultData from './PromoSwatches.mock-data.full-width'

it('renders correctly', async () => {
  const component = snapshot(PromoSwatches, { componentProps: defaultData });
  await hasDataComponent(component, 'promo/promoswatches');
});
