// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import SwatchCollection from './SwatchCollection';
import defaultData from './SwatchCollection.mock-data';

it('renders correctly', async () => {
  const component = snapshot(SwatchCollection, { componentProps: defaultData });
  await hasDataComponent(component, 'general/swatchcollection');
});
