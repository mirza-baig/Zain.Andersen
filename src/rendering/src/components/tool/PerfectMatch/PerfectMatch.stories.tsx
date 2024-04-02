// Global
import { Story, Meta } from '@storybook/react';
// Local
import PerfectMatch, { PerfectMatchProps } from './PerfectMatch';
import defaultData from './PerfectMatch.mock-data';

export default {
  title: 'PerfectMatch/PerfectMatch',
  component: PerfectMatch,
} as Meta;
const Template: Story<PerfectMatchProps> = (props) => <PerfectMatch {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
