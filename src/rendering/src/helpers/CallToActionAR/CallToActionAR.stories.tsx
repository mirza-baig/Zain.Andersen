// Global
import { Story, Meta } from '@storybook/react';

// Local
import CallToActionAR, { CallToActionARProps } from './CallToActionAR';
import defaultData from './CallToActionAR.mock-data';

export default {
  title: 'Helpers/CallToActionAR',
  component: CallToActionAR,
} as Meta;

const Template: Story<CallToActionARProps> = (props) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-12">
      <div className="min-h-10 col-span-6 mt-6 p-3 md:col-span-3 md:col-start-6">
        <CallToActionAR {...props} />
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = defaultData;
