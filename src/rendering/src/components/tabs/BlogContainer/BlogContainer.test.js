// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import BlogContainer from './BlogContainer';
import defaultData from './BlogContainer.mock-data';

it('renders correctly', async () => {
  const component = snapshot(BlogContainer, { componentProps: defaultData });
  await hasDataComponent(component, 'tabs/blogcontainer');
});
