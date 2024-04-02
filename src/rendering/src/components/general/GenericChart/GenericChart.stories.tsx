// Global
import { Story, Meta } from '@storybook/react';
// Local
import GenericChart, { GenericChartProps } from './GenericChart';
import defaultData from './GenericChart.mock-data';

export default {
  title: 'General/GenericChart',
  component: GenericChart,
} as Meta;
const Template: Story<GenericChartProps> = (props) => <GenericChart {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
