// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import HeroBlogArticle from './HeroBlogArticle';
import defaultData from './HeroBlogArticle.mock-data';

it('renders correctly', async () => {
  const component = snapshot(HeroBlogArticle, { componentProps: defaultData });
  await hasDataComponent(component, 'hero/heroblogarticle');
});
