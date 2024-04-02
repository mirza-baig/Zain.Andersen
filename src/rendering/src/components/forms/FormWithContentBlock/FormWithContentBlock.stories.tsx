// Global
import { SitecoreContext } from '@sitecore-jss/sitecore-jss-react';
import { Story, Meta } from '@storybook/react';
import { createComponentFactory } from 'lib/mocks/mock-placeholder';
// Local
import FormWithContentBlock, { FormWithContentBlockProps } from './FormWithContentBlock';
import defaultData from './FormWithContentBlock.mock-data';

const componentFactory = createComponentFactory();
export default {
  title: 'Forms/FormWithContentBlock',
  component: FormWithContentBlock,
  decorators: [
    (Story) => <SitecoreContext componentFactory={componentFactory}>{Story()}</SitecoreContext>,
  ],
} as Meta;
const Template: Story<FormWithContentBlockProps> = (props) => <FormWithContentBlock {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
