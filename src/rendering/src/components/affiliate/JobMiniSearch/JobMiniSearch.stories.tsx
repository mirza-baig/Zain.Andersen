// Global
import { Story, Meta } from '@storybook/react';
// Local
import JobMiniSearch, { JobMiniSearchProps } from './JobMiniSearch';
import defaultData from './JobMiniSearch.mock-data';

export default {
  title: 'Affiliate/JobMiniSearch',
  component: JobMiniSearch,
} as Meta;
const Template: Story<JobMiniSearchProps> = (props) => <JobMiniSearch {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
