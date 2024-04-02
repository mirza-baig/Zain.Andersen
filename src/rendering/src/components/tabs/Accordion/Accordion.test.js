// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import Accordion from './Accordion';
import defaultData from './Accordion.mock-data';

it('renders correctly', async () => {
  const component = snapshot(Accordion, { componentProps: defaultData });
  await hasDataComponent(component, 'tabs/accordion');
});
