// Global
import { Story, Meta } from '@storybook/react';
// Local
import ContactUs, { ContactUsProps } from './ContactUs.dynamic';
import defaultData from './ContactUs.mock-data';

export default {
  title: 'Forms/ContactUs',
  component: ContactUs,
} as Meta;
const Template: Story<ContactUsProps> = (props) => <ContactUs {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
