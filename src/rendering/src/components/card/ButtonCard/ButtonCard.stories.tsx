// Global
import { Story, Meta } from '@storybook/react';
// Local
import ButtonCard, { ButtonCardProps } from './ButtonCard';
import defaultData from './ButtonCard.mock-data';

export default {
  title: 'Card/ButtonCard',
  component: ButtonCard,
} as Meta;
const Template: Story<ButtonCardProps> = (props) => <ButtonCard {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
