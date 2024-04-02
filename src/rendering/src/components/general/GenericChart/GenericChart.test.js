// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import GenericChart from './GenericChart';
import defaultData from './GenericChart.mock-data';

it('renders correctly', async () => {
  const component = snapshot(GenericChart, { componentProps: defaultData });
  await hasDataComponent(component, 'general/genericchart');
});
