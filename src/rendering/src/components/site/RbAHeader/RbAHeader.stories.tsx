// Global
import { Story, Meta } from '@storybook/react';
// Local
import RbAHeader, { RbAHeaderProps } from './RbAHeader';
import defaultData from './RbAHeader.mock-data';

export default {
  title: 'Site/RbAHeader',
  component: RbAHeader,
} as Meta;
const Template: Story<RbAHeaderProps> = (props) => <RbAHeader {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
