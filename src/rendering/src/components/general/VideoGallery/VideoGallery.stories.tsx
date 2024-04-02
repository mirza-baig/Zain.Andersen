// Global
import { Story, Meta } from '@storybook/react';
// Local
import VideoGallery, { VideoGalleryProps } from './VideoGallery';
import defaultData from './VideoGallery.mock-data';

export default {
  title: 'General/VideoGallery',
  component: VideoGallery,
} as Meta;
const Template: Story<VideoGalleryProps> = (props) => <VideoGallery {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
