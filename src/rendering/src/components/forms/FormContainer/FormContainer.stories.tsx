// Global
import { Story, Meta } from '@storybook/react';
// Local
import FormContainer, { FormContainerProps } from './FormContainer';
import defaultData from './FormContainer.mock-data';

export default {
  title: 'Forms/FormContainer',
  component: FormContainer,
} as Meta;
const Template: Story<FormContainerProps> = (props) => <FormContainer {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
