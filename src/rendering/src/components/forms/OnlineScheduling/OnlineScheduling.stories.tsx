// Global
import { Story, Meta } from '@storybook/react';
// Local
import OnlineScheduling, { OnlineSchedulingProps } from './OnlineScheduling';
import defaultData from './OnlineScheduling.mock-data';

export default {
  title: 'Forms/OnlineScheduling',
  component: OnlineScheduling,
} as Meta;
const Template: Story<OnlineSchedulingProps> = (props) => <OnlineScheduling {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
