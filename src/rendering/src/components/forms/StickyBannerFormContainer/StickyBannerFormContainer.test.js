// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import StickyBannerFormContainer from './StickyBannerFormContainer';
import defaultData from './StickyBannerFormContainer.mock-data';

it('renders correctly', async () => {
  const component = snapshot(StickyBannerFormContainer, { componentProps: defaultData });
  await hasDataComponent(component, 'forms/stickybannerformcontainer');
});
