// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import BlogQuote from './BlogQuote';
import defaultData from './BlogQuote.mock-data';

it('renders correctly', async () => {
  const component = snapshot(BlogQuote, { componentProps: defaultData });
  await hasDataComponent(component, 'general/blogquote');
});
