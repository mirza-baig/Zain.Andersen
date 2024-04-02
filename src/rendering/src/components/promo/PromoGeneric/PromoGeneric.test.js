// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import PromoGeneric from './PromoGeneric';
import { leftImage, rightImage } from './PromoGeneric.mock-data';

it('leftImage renders correctly', async () => {
  const component = snapshot(PromoGeneric, { componentProps: leftImage });
  await hasDataComponent(component, 'general/promogeneric');
});

it('rightImage renders correctly', async () => {
  const component = snapshot(PromoGeneric, { componentProps: rightImage });
  await hasDataComponent(component, 'general/promogeneric');
});
