import { Story, Meta } from '@storybook/react';

// Local
import RbAConsultRequest, { RbAConsultRequestProps } from './RbAConsultRequest';
import defaultData from './RbAConsultRequest.mock-data';

export default {
  title: 'General/RbAConsultRequest',
  component: RbAConsultRequest,
} as Meta;

const Template: Story<RbAConsultRequestProps> = (props) => <RbAConsultRequest {...props} />;

export const Default = Template.bind({});
Default.args = defaultData;
