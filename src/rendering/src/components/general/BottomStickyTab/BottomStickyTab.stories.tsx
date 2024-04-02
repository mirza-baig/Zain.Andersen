// Global
import { Story, Meta } from '@storybook/react';
// Local
import { BottomStickyTabProps } from './BottomStickyTab';
import defaultData from './BottomStickyTab.mock-data';
import BottomStickyTab from './BottomStickyTab';

export default {
  title: 'General/BottomStickyTab',
  component: BottomStickyTab,
} as Meta;
const Template: Story<BottomStickyTabProps> = (props) => <BottomStickyTab {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
