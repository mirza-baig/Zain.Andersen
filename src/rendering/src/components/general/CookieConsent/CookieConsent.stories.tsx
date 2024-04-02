// Global
import { Story, Meta } from '@storybook/react';
// Local
import CookieConsent, { CookieConsentProps } from './CookieConsent.dynamic';
import defaultData from './CookieConsent.mock-data';

export default {
  title: 'General/CookieConsent',
  component: CookieConsent,
} as Meta;
const Template: Story<CookieConsentProps> = (props) => <CookieConsent {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
