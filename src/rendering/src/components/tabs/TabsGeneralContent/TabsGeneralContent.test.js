// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
import 'lib/jest/match-media-mock';
// Local
import TabsGeneralContent from './TabsGeneralContent';
import defaultData from './TabsGeneralContent.mock-data';

it('renders correctly', async () => {
  const component = snapshot(TabsGeneralContent, { componentProps: defaultData });
  await hasDataComponent(component, 'tabs/tabsgeneralcontent');
});
