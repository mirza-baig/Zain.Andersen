// Global
import { Story, Meta } from '@storybook/react';
// Local
import EnewsHeader, { EnewsHeaderProps } from './EnewsHeader';
import defaultData from './EnewsHeader.mock-data';

export default {
  title: 'Site/EnewsHeader',
  component: EnewsHeader,
} as Meta;
const Template: Story<EnewsHeaderProps> = (props) => <EnewsHeader {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
