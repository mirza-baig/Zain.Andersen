// Global
import { Story, Meta } from '@storybook/react';
// Local
import HelpfulLinks, { HelpfulLinksProps } from './HelpfulLinks';
import defaultData from './HelpfulLinks.mock-data';

export default {
  title: 'General/HelpfulLinks',
  component: HelpfulLinks,
} as Meta;
const Template: Story<HelpfulLinksProps> = (props) => <HelpfulLinks {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
