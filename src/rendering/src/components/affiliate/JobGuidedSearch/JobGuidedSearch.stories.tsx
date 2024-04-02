// Global
import { Story, Meta } from '@storybook/react';
// Local
import JobGuidedSearch, { JobGuidedSearchProps } from './JobGuidedSearch';
import defaultData from './JobGuidedSearch.mock-data';

export default {
  title: 'Affiliate/JobGuidedSearch',
  component: JobGuidedSearch,
} as Meta;
const Template: Story<JobGuidedSearchProps> = (props) => <JobGuidedSearch {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
