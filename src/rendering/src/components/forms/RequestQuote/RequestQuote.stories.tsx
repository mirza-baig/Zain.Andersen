// Global
import { Story, Meta } from '@storybook/react';
// Local
import RequestQuote, { RequestQuoteProps } from './RequestQuote.dynamic';
import defaultData from './RequestQuote.mock-data';

export default {
  title: 'Forms/RequestQuote',
  component: RequestQuote,
} as Meta;
const Template: Story<RequestQuoteProps> = (props) => <RequestQuote {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
