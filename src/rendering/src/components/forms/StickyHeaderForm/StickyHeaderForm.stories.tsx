// Global
import { Story, Meta } from '@storybook/react';
// Local
import StickyHeaderForm, { StickyHeaderFormProps } from './StickyHeaderForm';
import defaultData from './StickyHeaderForm.mock-data';

export default {
  title: 'Forms/StickyHeaderForm',
  component: StickyHeaderForm,
} as Meta;
const Template: Story<StickyHeaderFormProps> = (props) => <StickyHeaderForm {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
