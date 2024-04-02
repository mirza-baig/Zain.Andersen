// Global
import { Story, Meta } from '@storybook/react';
// Local
import defaultData from './SwatchCollection.mock-data';
import SwatchCollection, { SwatchCollectionProps } from './SwatchCollection';

export default {
  title: 'Helpers/SwatchCollection',
  component: SwatchCollection,
} as Meta;
const Template: Story<SwatchCollectionProps> = (props) => <SwatchCollection {...props} />;
export const FullWidth = Template.bind({});
FullWidth.args = defaultData as unknown as SwatchCollectionProps;
