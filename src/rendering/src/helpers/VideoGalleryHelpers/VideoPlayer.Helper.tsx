import React from 'react';
import { ImagePrimaryProps } from '../Media/ImagePrimary';
import { MediaPrimary } from '../Media';
import { VideoItemProps } from './VideoListing';
import VideoDetails from './VideoDetails.Helper';

const VideoPlayer = ({
  video,
  videoPlayerClasses,
}: {
  video: VideoItemProps;
  videoPlayerClasses: { [key: string]: string };
}) => {
  return (
    <>
      <div className={videoPlayerClasses?.videoWrapper}>
        <MediaPrimary {...(video as unknown as ImagePrimaryProps)} />
      </div>
      <VideoDetails
        isVideoPlayerItem={true}
        videoDetailsClasses={videoPlayerClasses}
        videoItem={video}
      />
    </>
  );
};

export default React.memo(VideoPlayer);
