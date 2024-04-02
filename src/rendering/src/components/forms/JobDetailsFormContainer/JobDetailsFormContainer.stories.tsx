// Global
import { Story, Meta } from '@storybook/react';
// Local
import JobDetailsFormContainer, { JobDetailsFormContainerProps } from './JobDetailsFormContainer';
import defaultData from './JobDetailsFormContainer.mock-data';

export default {
  title: 'Forms/JobDetailsFormContainer',
  component: JobDetailsFormContainer,
} as Meta;
const Template: Story<JobDetailsFormContainerProps> = (props) => (
  <JobDetailsFormContainer {...props} />
);
export const Default = Template.bind({});
Default.args = defaultData;
