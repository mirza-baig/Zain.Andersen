// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import ChatButton from './ChatButton';
import defaultData from './ChatButton.mock-data';

it('renders correctly', async () => {
  const component = snapshot(ChatButton, { componentProps: defaultData });
  await hasDataComponent(component, 'general/chatbutton');
});
