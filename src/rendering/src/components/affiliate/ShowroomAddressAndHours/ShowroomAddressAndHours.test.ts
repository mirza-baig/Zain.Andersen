// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import ShowroomAddressAndHours from './ShowroomAddressAndHours';
import defaultData from './ShowroomAddressAndHours.mock-data';

it('renders correctly', async () => {
  const component = snapshot(ShowroomAddressAndHours, {
    sitecoreContext: {
      route: defaultData,
    },
  });
  await hasDataComponent(component, 'affiliate/showroom-address-and-hours');
});
