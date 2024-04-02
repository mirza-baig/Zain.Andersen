// Global
import { Story, Meta } from '@storybook/react';
// Local
import ProductGallery, { ProductGalleryProps } from './ProductGallery';
import defaultData from './ProductGallery.mock-data';

export default {
  title: 'General/ProductGallery',
  component: ProductGallery,
} as Meta;
const Template: Story<ProductGalleryProps> = (props) => <ProductGallery {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
