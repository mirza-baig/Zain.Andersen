// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import StormDoorChooseTool from './StormDoorChooseTool';
import defaultData from './StormDoorChooseTool.mock-data';

it('renders correctly', () => {
  const component = snapshot(StormDoorChooseTool, { componentProps: defaultData });
  hasDataComponent(component, 'general/stormdoorchoosetool');
});
