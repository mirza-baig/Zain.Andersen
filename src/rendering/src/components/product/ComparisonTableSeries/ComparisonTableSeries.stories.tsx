// Global
import { Story, Meta } from '@storybook/react';
// Local
import ComparisonTableSeries, { ComparisonTableSeriesProps } from './ComparisonTableSeries';
import defaultData from './ComparisonTableSeries.mock-data';

export default {
  title: 'Product/ComparisonTableSeries',
  component: ComparisonTableSeries,
} as Meta;
const Template: Story<ComparisonTableSeriesProps> = (props) => <ComparisonTableSeries {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
