// Global
import { Story, Meta } from '@storybook/react';
// Local
import Form, { FormProps } from './Form';
import defaultData from './Form.mock-data';
import multiStepData from './Form.mock-data-multistep';
import phone_emailData from './Form.mock-data-email-phone';
import addressData from './Form.mock-data-address';

export default {
  title: 'Forms/Form',
  component: Form,
} as Meta;
const Template: Story<FormProps> = (props) => <Form {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;

export const multistep = Template.bind({});
multistep.args = multiStepData;

export const phone_email = Template.bind({});
phone_email.args = phone_emailData;

export const address = Template.bind({});
address.args = addressData;
