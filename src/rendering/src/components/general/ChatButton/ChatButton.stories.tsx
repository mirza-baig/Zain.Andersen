// Global
import { Story, Meta } from '@storybook/react';
// Local
import ChatButton, { ChatButtonProps } from './ChatButton';
import defaultData from './ChatButton.mock-data';

export default {
  title: 'General/ChatButton',
  component: ChatButton,
} as Meta;
const Template: Story<ChatButtonProps> = (props) => <ChatButton {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
