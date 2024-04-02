// Global
import { Story, Meta } from '@storybook/react';
// Local
import StormDoorChooseTool, { StormDoorChooseToolProps } from './StormDoorChooseTool';
import defaultData from './StormDoorChooseTool.mock-data';

export default {
  title: 'General/StormDoorChooseTool',
  component: StormDoorChooseTool,
} as Meta;
const Template: Story<StormDoorChooseToolProps> = (props) => <StormDoorChooseTool {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
