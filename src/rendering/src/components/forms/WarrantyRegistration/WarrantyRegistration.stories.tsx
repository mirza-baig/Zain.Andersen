// Global
import { Story, Meta } from '@storybook/react';
// Local
import WarrantyRegistration, { WarrantyRegistrationProps } from './WarrantyRegistration.dynamic';
import defaultData from './WarrantyRegistration.mock-data';

export default {
  title: 'Forms/WarrantyRegistration',
  component: WarrantyRegistration,
} as Meta;
const Template: Story<WarrantyRegistrationProps> = (props) => <WarrantyRegistration {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
