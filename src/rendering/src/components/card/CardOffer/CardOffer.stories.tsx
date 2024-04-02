// Global
import { Story, Meta } from '@storybook/react';
// Local
import CardOffer, { CardOfferProps } from './CardOffer';
import defaultData from './CardOffer.mock-data';
import darkData from './CardOffer.mock-dark';
import whiteData from './CardOffer.mock-white';

export default {
  title: 'Card/CardOffer',
  component: CardOffer,
} as Meta;
const Template: Story<CardOfferProps> = (props) => <CardOffer {...props} />;

export const Default = Template.bind({});
Default.args = defaultData;

export const Dark = Template.bind({});
Dark.args = darkData;

export const White = Template.bind({});
White.args = whiteData;
