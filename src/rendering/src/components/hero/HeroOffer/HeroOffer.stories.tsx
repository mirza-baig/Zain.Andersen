// Global
import { Story, Meta } from '@storybook/react';
// Local
import HeroOffer, { HeroOfferProps } from './HeroOffer';
import defaultData from './HeroOffer.mock-data';
import darkData from './HeroOffer.mock-data-dark';
import whiteData from './HeroOffer.mock-data-white';

export default {
  title: 'Hero/HeroOffer',
  component: HeroOffer,
} as Meta;

const Template: Story<HeroOfferProps> = (props) => <HeroOffer {...props} />;

export const Default = Template.bind({});
Default.args = defaultData;

export const Dark = Template.bind({});
Dark.args = darkData;

export const White = Template.bind({});
White.args = whiteData;
