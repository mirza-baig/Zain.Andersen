// Global
import { Story, Meta } from '@storybook/react';
// Local
import FreeStandingCta, { FreeStandingCtaProps } from './FreeStandingCta';
import defaultData from './FreeStandingCta.mock-data';

export default {
  title: 'General/FreeStandingCta',
  component: FreeStandingCta,
} as Meta;
const Template: Story<FreeStandingCtaProps> = (props) => <FreeStandingCta {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
