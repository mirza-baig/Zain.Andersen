// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import ContentBlock from './ContentBlock';
import defaultData from './ContentBlock.mock-data-center';

it('renders correctly', async () => {
  let component = snapshot(ContentBlock, { componentProps: defaultData });
  await hasDataComponent(component, 'general/contentblock');
});
