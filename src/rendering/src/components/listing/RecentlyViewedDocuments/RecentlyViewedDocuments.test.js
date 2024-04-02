// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import RecentlyViewedDocuments from './RecentlyViewedDocuments.dynamic';
import defaultData from './RecentlyViewedDocuments.mock-data';

it('renders correctly', async () => {
  const component = snapshot(RecentlyViewedDocuments, { componentProps: defaultData });
  await hasDataComponent(component, 'listing/recentlyvieweddocuments');
});
