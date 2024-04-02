// Global
import { Story, Meta } from '@storybook/react';
// Local
import SwatchCollection from './SwatchCollection';
import { SwatchCollectionProps } from './SwatchCollection';
import defaultData from './SwatchCollection.mock-data';
import largeCirclesData from './SwatchCollection.mock-data-large-circles';
import squaresData from './SwatchCollection.mock-data-squares';

export default {
  title: 'General/SwatchCollection',
  component: SwatchCollection,
} as Meta;
const Template: Story<SwatchCollectionProps> = (props) => <SwatchCollection {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
export const LargeCircles = Template.bind({});
LargeCircles.args = largeCirclesData;
export const Squares = Template.bind({});
Squares.args = squaresData;
