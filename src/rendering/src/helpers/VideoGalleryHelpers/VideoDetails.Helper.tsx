import React from 'react';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import classNames from 'classnames';
import { Eyebrow } from '../Eyebrow';
import { Headline } from '../Headline';
import { BodyCopy } from '../BodyCopy';
import { Foundation } from 'src/.generated/Foundation.EnterpriseWeb.model';
import MediaPrimary, { ImagePrimaryProps as VideoPrimaryProps } from '../Media/MediaPrimary';
import { DesktopGalleryStyles, VideoItemProps } from './VideoListing';
import { SvgIcon } from '../SvgIcon';
import { getBreakpoint, useCurrentScreenType } from 'lib/utils/get-screen-type';
import ImageWrapper from '../Media/ImageWrapper';
import { ImagePrimaryProps } from '../Media/ImagePrimary';
import { SliderRefType } from '../SliderWrapper/SliderWrapper';

const VideoDetails = ({
  videoItem,
  videoItemIndex,
  isSelectedVideo,
  isVideoPlayerItem,
  displayStyle,
  videoDetailsClasses,
  selectVideo,
  sliderRef,
}: {
  videoItem: VideoItemProps;
  videoItemIndex?: number;
  isSelectedVideo?: boolean;
  isVideoPlayerItem: boolean;
  displayStyle?: DesktopGalleryStyles;
  videoDetailsClasses: { [key: string]: string };
  selectVideo?: (videoId: string, videoItemIndex: number) => void;
  sliderRef?: SliderRefType;
}) => {
  type EyebrowProps = Foundation.EnterpriseWeb.Enterprise.FieldSets.Eyebrow;
  type HeadlineProps = Foundation.EnterpriseWeb.Enterprise.FieldSets.Headline;
  type BodyProps = Foundation.EnterpriseWeb.Enterprise.FieldSets.BodyCopy;

  const { currentScreenWidth } = useCurrentScreenType();

  const playVideo = () => {
    selectVideo &&
      selectVideo(
        ((videoItem as VideoPrimaryProps).fields?.primaryVideo?.fields?.videoId as Field<string>)
          ?.value,
        videoItemIndex || 0
      );
  };

  return (
    <div
      tabIndex={0}
      className={classNames(
        videoDetailsClasses?.videoDetailsWrapper,
        isSelectedVideo &&
          displayStyle !== 'sidescrollwithoutvideo' &&
          videoDetailsClasses?.selectedVideo
      )}
      onKeyDown={(e) => {
        if (e.code === 'Enter' || e.code === 'Space') {
          playVideo();
        } else if (e.shiftKey && e.keyCode == 9) {
          sliderRef?.current && videoItemIndex && sliderRef?.current.slickPrev();
        } else if (e.keyCode == 9) {
          sliderRef?.current && videoItemIndex && sliderRef?.current.slickNext();
        }
      }}
      onClick={() => playVideo()}
    >
      {!isVideoPlayerItem && (
        <div className="relative">
          {/* Render inline video player if display style is sidescroll in mobile */}
          {currentScreenWidth < getBreakpoint('md') &&
          displayStyle === 'sidescroll' &&
          isSelectedVideo ? (
            <MediaPrimary
              {...(videoItem as unknown as ImagePrimaryProps)}
              includeSEOSchema={true}
            />
          ) : (
            <>
              <ImageWrapper
                additionalDesktopClasses={videoDetailsClasses?.thumbnail}
                additionalMobileClasses={videoDetailsClasses?.thumbnail}
                imageLayout={
                  displayStyle === 'sidescroll' || displayStyle === 'sidescrollwithoutvideo'
                    ? 'intrinsic'
                    : 'fill'
                }
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
              />
              <div
                className={classNames(
                  'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black'
                )}
              >
                <SvgIcon
                  icon="play"
                  size={
                    currentScreenWidth < getBreakpoint('ml')
                      ? displayStyle === 'sidescroll' || displayStyle === 'sidescrollwithoutvideo'
                        ? '48'
                        : '32'
                      : displayStyle === 'playlist' && '28'
                  }
                />
              </div>
            </>
          )}
        </div>
      )}

      {/* Don't render the Video Details for 'sidescrollwithoutvideo' variant in desktop view */}
      {!(
        displayStyle === 'sidescrollwithoutvideo' && currentScreenWidth >= getBreakpoint('md')
      ) && (
        <div className={videoDetailsClasses?.videoDescriptionWrapper}>
          {displayStyle !== 'playlist' && (
            <Eyebrow
              classes={videoDetailsClasses?.eyebrow}
              {...(videoItem as unknown as EyebrowProps)}
            />
          )}

          <Headline
            classes={videoDetailsClasses?.headline}
            {...(videoItem as unknown as HeadlineProps)}
          />
          {displayStyle !== 'playlist' && (
            <BodyCopy
              classes={videoDetailsClasses?.body}
              {...(videoItem as unknown as BodyProps)}
            />
          )}
        </div>
      )}
    </div>
  );
};
export default React.memo(VideoDetails);
