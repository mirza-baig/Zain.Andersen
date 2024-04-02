// Global
import { Story, Meta } from '@storybook/react';
// Local
import ComparisonTableProducts, { ComparisonTableProductsProps } from './ComparisonTableProducts';
import defaultData from './ComparisonTableProducts.mock-data';

export default {
  title: 'Product/ComparisonTableProducts',
  component: ComparisonTableProducts,
} as Meta;
const Template: Story<ComparisonTableProductsProps> = (props) => (
  <ComparisonTableProducts {...props} />
);
export const Default = Template.bind({});
Default.args = defaultData;
