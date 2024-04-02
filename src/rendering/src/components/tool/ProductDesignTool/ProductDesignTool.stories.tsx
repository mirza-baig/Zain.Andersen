// Global
import { Story, Meta } from '@storybook/react';
// Local
import React from 'react';
import ProductDesignTool, { ProductDesignToolProps } from './ProductDesignTool';
import defaultData from './ProductDesignTool.mock-data';

export default {
  title: 'Tool/ProductDesignTool',
  component: ProductDesignTool,
} as Meta;
const Template: Story<ProductDesignToolProps> = (props) => <ProductDesignTool {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
