// Global
import { Story, Meta } from '@storybook/react';

// Local

import ShowroomAddressAndHours from './ShowroomAddressAndHours';
import defaultData from './ShowroomAddressAndHours.mock-data';
import { ComponentProps } from 'lib/types/component-props';
import { LayoutServiceData, SitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { createComponentFactory } from 'lib/mocks/mock-placeholder';

const layoutData = {
  sitecore: {
    context: {},
    route: defaultData,
  },
};

export default {
  title: 'Affiliate/ShowroomAddressAndHours',
  component: ShowroomAddressAndHours,
} as Meta;

const Template: Story<ComponentProps> = (props) => (
  <SitecoreContext
    layoutData={layoutData as unknown as LayoutServiceData}
    componentFactory={createComponentFactory()}
  >
    <ShowroomAddressAndHours {...props} />
  </SitecoreContext>
);

export const Default = Template.bind({});
// DefaultCenter.args = defaultDataCenter;
