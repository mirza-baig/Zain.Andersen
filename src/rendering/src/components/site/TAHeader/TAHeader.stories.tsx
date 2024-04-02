// Global
import { Story, Meta } from '@storybook/react';
// Local
import TAHeader, { TAHeaderProps } from './TAHeader';
import defaultData from './TAHeader.mock-data';

export default {
  title: 'Site/TAHeader',
  component: TAHeader,
} as Meta;
const Template: Story<TAHeaderProps> = (props) => <TAHeader {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
