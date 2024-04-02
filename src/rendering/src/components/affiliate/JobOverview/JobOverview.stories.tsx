// Global
import { Story, Meta } from '@storybook/react';
// Local
import JobOverview, { JobOverviewProps } from './JobOverview';
import defaultData from './JobOverview.mock-data';

export default {
  title: 'Affiliate/JobOverview',
  component: JobOverview,
} as Meta;
const Template: Story<JobOverviewProps> = (props) => <JobOverview {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
