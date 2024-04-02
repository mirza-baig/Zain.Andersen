// Global
import { Story, Meta } from '@storybook/react';
// Local
import EnewsSignUpBanner, { EnewsSignUpBannerProps } from './EnewsSignUpBanner';
import defaultData from './EnewsSignUpBanner.mock-data';

export default {
  title: 'Forms/EnewsSignUpBanner',
  component: EnewsSignUpBanner,
} as Meta;
const Template: Story<EnewsSignUpBannerProps> = (props) => <EnewsSignUpBanner {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
