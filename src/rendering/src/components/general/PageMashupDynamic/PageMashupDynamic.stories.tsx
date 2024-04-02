// Global
import { Story, Meta } from '@storybook/react';
// Local
import PageMashupDynamic, { PageMashupDynamicProps } from './PageMashupDynamic';
import defaultData from './PageMashupDynamic.mock-data';

export default {
  title: 'General/PageMashupDynamic',
  component: PageMashupDynamic,
} as Meta;
const Template: Story<PageMashupDynamicProps> = (props) => <PageMashupDynamic {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
