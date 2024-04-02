// Global
import { Story, Meta } from '@storybook/react';
// Local
import HeroWithFormFill, { HeroWithFormFillProps } from './HeroWithFormFill';
import defaultData from './HeroWithFormFill.mock-data';

export default {
  title: 'Hero/HeroWithFormFill',
  component: HeroWithFormFill,
} as Meta;
const Template: Story<HeroWithFormFillProps> = (props) => <HeroWithFormFill {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
