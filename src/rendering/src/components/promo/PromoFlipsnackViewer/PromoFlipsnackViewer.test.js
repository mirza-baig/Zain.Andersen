// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import PromoFlipsnackViewer from './PromoFlipsnackViewer';
import defaultData from './PromoFlipsnackViewer.mock-data';

it('renders correctly', async () => {
  const component = snapshot(PromoFlipsnackViewer, { componentProps: defaultData });
  await hasDataComponent(component, 'promo/promoflipsnackviewer');
});
