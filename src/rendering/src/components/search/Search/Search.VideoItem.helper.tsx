import { Result } from '@coveo/headless';
import classNames from 'classnames';
import { useModalIdContext } from 'lib/context/GenericModalIDContext';
import { useTheme } from 'lib/context/ThemeContext';
import { useState } from 'react';
import { Foundation } from 'src/.generated/Foundation.EnterpriseWeb.model';
import { LayoutValue, RatioTypes } from 'src/helpers/Media';
import ImageWrapper from 'src/helpers/Media/ImageWrapper';
import { SvgIcon } from 'src/helpers/SvgIcon';
import VideoGalleryItem from 'src/helpers/VideoGalleryHelpers/VideoGalleryItem.Helper';
import { VideoItemProps } from 'src/helpers/VideoGalleryHelpers/VideoListing';

type SearchVideoItemProps = {
  videoItem: VideoItemProps;
  result: Result;
  //VideoPlayerClasses can have string as a classes or nested themeclasses objects as well
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  videoPlayerClasses?: { [key: string]: any };
  additionalDesktopClasses?: string;
  additionalMobileClasses?: string;
  ratio?: RatioTypes;
  thumbnailImageLayout?: LayoutValue;
  playIconSize?: string;
};

const SearchVideoItem = ({
  videoItem,
  result,
  videoPlayerClasses,
  additionalDesktopClasses,
  additionalMobileClasses,
  ratio,
  thumbnailImageLayout,
  playIconSize,
}: SearchVideoItemProps) => {
  // Modal state
  const [isVideoModalVisible, setIsVideoModalVisible] = useState(false);
  //

  const { themeName } = useTheme();
  const { setSelectedModalId } = useModalIdContext();

  const closeModal = () => {
    try {
      const videoId = result?.raw['ew_videoid'] as string;
      playStopVideo(videoId, 'stopVideo');

      setSelectedModalId('');
      setIsVideoModalVisible(false);
    } catch (error) {
      setIsVideoModalVisible(false);
    }
  };

  const selectVideo = (videoId: string) => {
    setIsVideoModalVisible(true);
    setSelectedModalId('VideoItemModal');
    playStopVideo(videoId, 'playVideo');
  };

  const playStopVideo = (videoId: string, action: 'playVideo' | 'stopVideo') => {
    const videoIframe = document.getElementById(videoId) as HTMLIFrameElement;

    // If videoIframe element is not rendered in DOM try to get it again
    if (!videoIframe) {
      setTimeout(() => playStopVideo(videoId, action), 1000);
    } else {
      videoIframe.contentWindow?.postMessage(
        `{"event":"command", "func":"${action}", "args":""}`,
        '*'
      );
    }
  };

  return (
    <>
      <div
        className={classNames(videoPlayerClasses?.itemWrapper)}
        onClick={() => selectVideo((result?.raw['ew_videoid'] as string) || '')}
      >
        <ImageWrapper
          additionalDesktopClasses={additionalDesktopClasses}
          additionalMobileClasses={additionalMobileClasses}
          imageLayout={thumbnailImageLayout}
          image={
            (
              videoItem as unknown as Foundation.EnterpriseWeb.Enterprise.BaseTemplates.BaseGalleryVideo
            )?.fields?.videoThumbnail
          }
          mobileImage={
            (
              videoItem as unknown as Foundation.EnterpriseWeb.Enterprise.BaseTemplates.BaseGalleryVideo
            )?.fields?.videoThumbnailMobile
          }
          mobileFocusArea={
            (
              videoItem as unknown as Foundation.EnterpriseWeb.Enterprise.BaseTemplates.BaseGalleryVideo
            )?.fields?.videoThumbnailMobileFocusArea
          }
          ratio={ratio}
        />
        <div
          className={classNames(
            'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full',
            { 'bg-black': themeName === 'rba' }
          )}
        >
          <SvgIcon icon="play" size={playIconSize} />
        </div>
      </div>
      {isVideoModalVisible && (
        <VideoGalleryItem
          video={videoItem as VideoItemProps}
          isVideoModalVisible={isVideoModalVisible}
          closeModal={closeModal}
          videoGalleryItemClasses={{ ...videoPlayerClasses }}
        />
      )}
    </>
  );
};

export default SearchVideoItem;
