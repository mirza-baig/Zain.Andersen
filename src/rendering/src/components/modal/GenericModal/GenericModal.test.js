// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import GenericModal from './GenericModal';
import defaultData from './GenericModal.mock-data';

it('renders correctly', async () => {
  const component = snapshot(GenericModal, { componentProps: defaultData });
  await hasDataComponent(component, 'modal/genericmodal');
});
