// Global
import { Story, Meta } from '@storybook/react';
// Local
import VenturesPartner, { VenturesPartnerProps } from './VenturesPartner.dynamic';
import defaultData from './VenturesPartner.mock-data';

export default {
  title: 'Forms/VenturesPartner',
  component: VenturesPartner,
} as Meta;
const Template: Story<VenturesPartnerProps> = (props) => <VenturesPartner {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
