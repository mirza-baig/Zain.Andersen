// Global
import { Story, Meta } from '@storybook/react';

// Local
import FoldingDoorSizingCalculator, {
  FoldingDoorSizingCalculatorProps,
} from './FoldingDoorSizingCalculator.dynamic';
import defaultData from './FoldingDoorSizingCalculator.mock-data';

export default {
  title: 'Tool/FoldingDoorSizingCalculator',
  component: FoldingDoorSizingCalculator,
} as Meta;

const Template: Story<FoldingDoorSizingCalculatorProps> = (props) => (
  <FoldingDoorSizingCalculator {...props} />
);

export const Default = Template.bind({});
Default.args = defaultData;
