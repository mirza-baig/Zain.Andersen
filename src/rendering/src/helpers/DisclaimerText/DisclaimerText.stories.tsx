// Global
import { Story, Meta } from '@storybook/react';
// Local
import DisclaimerText, { DisclaimerProps } from './DisclaimerText';
import defaultData from './DisclaimerText.mock-data';

export default {
  title: 'Helpers/DisclaimerText',
  component: DisclaimerText,
} as Meta;
const Template: Story<DisclaimerProps> = (props) => <DisclaimerText {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
