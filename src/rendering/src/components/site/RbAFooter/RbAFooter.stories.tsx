// Global
import { Story, Meta } from '@storybook/react';
// Local
import RbAFooter, { RbAFooterProps } from './RbAFooter';
import defaultData from './RbAFooter.mock-data';

export default {
  title: 'Site/RbAFooter',
  component: RbAFooter,
} as Meta;
const Template: Story<RbAFooterProps> = (props) => <RbAFooter {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
