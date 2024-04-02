import React from 'react';
import { VideoItemProps } from './VideoListing';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import VideoPlayerHelper from './VideoPlayer.Helper';

const VideoGalleryItem = ({
  video,
  isVideoModalVisible,
  closeModal,
  videoGalleryItemClasses,
}: {
  video: VideoItemProps;
  isVideoModalVisible: boolean;
  closeModal: () => void;
  videoGalleryItemClasses: { [key: string]: string };
}) => {
  return (
    <ModalWrapper
      isModalOpen={isVideoModalVisible}
      handleClose={closeModal}
      size="large"
      closeIconClasses="mt-xs mb-xxxs mr-s"
    >
      <VideoPlayerHelper video={video} videoPlayerClasses={videoGalleryItemClasses} />
    </ModalWrapper>
  );
};
export default VideoGalleryItem;
