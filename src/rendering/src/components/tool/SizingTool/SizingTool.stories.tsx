// Global
import { Story, Meta } from '@storybook/react';
// Local
import SizingTool, { SizingToolProps } from './SizingTool';
import defaultData from './SizingTool.mock-data';

export default {
  title: 'Tool/SizingTool',
  component: SizingTool,
} as Meta;
const Template: Story<SizingToolProps> = (props) => <SizingTool {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
