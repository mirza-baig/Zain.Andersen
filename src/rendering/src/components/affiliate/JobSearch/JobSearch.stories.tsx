// Global
import { Story, Meta } from '@storybook/react';
// Local
import JobSearch, { JobSearchProps } from './JobSearch';
import defaultData from './JobSearch.mock-data';

export default {
  title: 'Affiliate/JobSearch',
  component: JobSearch,
} as Meta;
const Template: Story<JobSearchProps> = (props) => <JobSearch {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
