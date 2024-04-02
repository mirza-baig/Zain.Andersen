// Global
import { Story, Meta } from '@storybook/react';
// Local
import HTMLBlock, { HTMLBlockProps } from './HTMLBlock.dynamic';
import defaultData from './HTMLBlock.mock-data';

export default {
  title: 'General/HTMLBlock',
  component: HTMLBlock,
} as Meta;
const Template: Story<HTMLBlockProps> = (props) => <HTMLBlock {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
