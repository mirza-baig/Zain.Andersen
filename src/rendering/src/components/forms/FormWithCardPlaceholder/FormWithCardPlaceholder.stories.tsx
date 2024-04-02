// Global
import { SitecoreContext } from '@sitecore-jss/sitecore-jss-react';
import { Story, Meta } from '@storybook/react';
import { createComponentFactory } from 'lib/mocks/mock-placeholder';
// Local
import FormWithCardPlaceholder, { FormWithCardPlaceholderProps } from './FormWithCardPlaceholder';
import defaultData from './FormWithCardPlaceholder.mock-data';

const componentFactory = createComponentFactory();
export default {
  title: 'Forms/FormWithCardPlaceholder',
  component: FormWithCardPlaceholder,
  decorators: [
    (Story) => <SitecoreContext componentFactory={componentFactory}>{Story()}</SitecoreContext>,
  ],
} as Meta;
const Template: Story<FormWithCardPlaceholderProps> = (props) => (
  <FormWithCardPlaceholder {...props} />
);
export const Default = Template.bind({});
Default.args = defaultData;
