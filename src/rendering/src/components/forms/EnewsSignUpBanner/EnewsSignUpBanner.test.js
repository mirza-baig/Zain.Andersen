// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import EnewsSignUpBanner from './EnewsSignUpBanner';
import defaultData from './EnewsSignUpBanner.mock-data';

it('renders correctly', async () => {
  const component = snapshot(EnewsSignUpBanner, { componentProps: defaultData });
  await hasDataComponent(component, 'forms/enewssignupbanner');
});
