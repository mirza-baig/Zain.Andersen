// Global
import { Story, Meta } from '@storybook/react';
// Local
import StickyBannerFormContainer, {
  StickyBannerFormContainerProps,
} from './StickyBannerFormContainer';
import defaultData from './StickyBannerFormContainer.mock-data';

export default {
  title: 'Forms/StickyBannerFormContainer',
  component: StickyBannerFormContainer,
} as Meta;
const Template: Story<StickyBannerFormContainerProps> = (props) => (
  <StickyBannerFormContainer {...props} />
);
export const Default = Template.bind({});
Default.args = defaultData;
