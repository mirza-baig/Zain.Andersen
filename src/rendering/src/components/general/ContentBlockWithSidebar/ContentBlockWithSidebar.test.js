// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import ContentBlockWithSidebar from './ContentBlockWithSidebar';
import defaultData from './ContentBlockWithSidebar.mock-data';

it('renders correctly', async () => {
  const component = snapshot(ContentBlockWithSidebar, { componentProps: defaultData });
  await hasDataComponent(component, 'general/contentblockwithsidebar');
});
