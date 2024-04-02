// Global
import { Story, Meta } from '@storybook/react';
// Local
import TAFooter, { TAFooterProps } from './TAFooter';
import defaultData from './TAFooter.mock-data';

export default {
  title: 'Site/TAFooter',
  component: TAFooter,
} as Meta;
const Template: Story<TAFooterProps> = (props) => <TAFooter {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
