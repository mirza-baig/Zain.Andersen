// Global
import { Story, Meta } from '@storybook/react';
// Local
import JobApplicant, { JobApplicantProps } from './JobApplicant.dynamic';
import defaultData from './JobApplicant.mock-data';

export default {
  title: 'Forms/JobApplicant',
  component: JobApplicant,
} as Meta;
const Template: Story<JobApplicantProps> = (props) => <JobApplicant {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
