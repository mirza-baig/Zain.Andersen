// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import ContentBlockWithMedia from './ContentBlockWithMedia';
import defaultData from './ContentBlockWithMedia.mock-data';

it('renders correctly', async () => {
  const component = snapshot(ContentBlockWithMedia, { componentProps: defaultData });
  await hasDataComponent(component, 'general/contentblockwithmedia');
});
