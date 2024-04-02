// Global
import { Story, Meta } from '@storybook/react';
// Local
import DesignTool, { DesignToolProps } from './DesignTool';
import defaultData from './DesignTool.mock-data';

export default {
  title: 'Tool/DesignTool',
  component: DesignTool,
} as Meta;
const Template: Story<DesignToolProps> = (props) => <DesignTool {...props} />;
export const Default = Template.bind({});

Default.args = defaultData;
