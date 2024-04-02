// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import FormWithCardPlaceholder from './FormWithCardPlaceholder';
import defaultData from './FormWithCardPlaceholder.mock-data';

it('renders correctly', async () => {
  const component = snapshot(FormWithCardPlaceholder, { componentProps: defaultData });
  await hasDataComponent(component, 'forms/formwithcardplaceholder');
});
