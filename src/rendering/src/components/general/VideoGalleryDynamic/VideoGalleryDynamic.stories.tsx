// Global
import { Story, Meta } from '@storybook/react';
// Local
import VideoGalleryDynamic, { VideoGalleryDynamicProps } from './VideoGalleryDynamic';
import defaultData from './VideoGalleryDynamic.mock-data';

export default {
  title: 'General/VideoGalleryDynamic',
  component: VideoGalleryDynamic,
} as Meta;
const Template: Story<VideoGalleryDynamicProps> = (props) => <VideoGalleryDynamic {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
