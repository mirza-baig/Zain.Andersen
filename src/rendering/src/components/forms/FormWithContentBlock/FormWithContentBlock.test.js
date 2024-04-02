// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import FormWithContentBlock from './FormWithContentBlock';
import defaultData from './FormWithContentBlock.mock-data';

it('renders correctly', async () => {
  const component = snapshot(FormWithContentBlock, { componentProps: defaultData });
  await hasDataComponent(component, 'forms/formwithcontentblock');
});
