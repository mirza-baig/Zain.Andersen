// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import ButtonCard from './ButtonCard';
import defaultData from './ButtonCard.mock-data';

it('renders correctly', async () => {
  const component = snapshot(ButtonCard, { componentProps: defaultData });
  await hasDataComponent(component, 'card/buttoncard');
});
