// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import OnlineScheduling from './OnlineScheduling';
import defaultData from './OnlineScheduling.mock-data';

it('renders correctly', async () => {
  const component = snapshot(OnlineScheduling, { componentProps: defaultData });
  await hasDataComponent(component, 'forms/onlinescheduling');
});
