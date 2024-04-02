// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import FreeStandingCta from './FreeStandingCta';
import defaultData from './FreeStandingCta.mock-data';

it('renders correctly', async () => {
  const component = snapshot(FreeStandingCta, { componentProps: defaultData });
  await hasDataComponent(component, 'general/freestandingcta');
});
