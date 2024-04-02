import { Story, Meta } from '@storybook/react';

// Local
import RbAConsultRequestCanada, { RbAConsultRequestCanadaProps } from './RbAConsultRequestCanada';
import defaultData from './RbAConsultRequestCanada.mock-data';

export default {
  title: 'General/RbAConsultRequestCanada',
  component: RbAConsultRequestCanada,
} as Meta;

const Template: Story<RbAConsultRequestCanadaProps> = (props) => (
  <RbAConsultRequestCanada {...props} />
);

export const Default = Template.bind({});
Default.args = defaultData;
