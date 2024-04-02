import { useTheme } from 'lib/context/ThemeContext';
import React, { useEffect, useRef, useState } from 'react';
import { VideoListingTheme } from './VideoGallery.theme';
import { Pager as HeadlessPager } from '@coveo/headless';
import { Headline } from '../Headline';
import { VideoGalleryProps } from 'components/general/VideoGallery/VideoGallery';
import { getBreakpoint, useCurrentScreenType } from 'lib/utils/get-screen-type';
import { getEnum } from 'lib/utils';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { ImagePrimaryProps } from '../Media/ImagePrimary';
import { ImagePrimaryProps as VideoPrimaryProps } from '../Media/MediaPrimary';
import Pagination from './Pagination.Helper';
import VideoPlayer from './VideoPlayer.Helper';
import VideoDetails from './VideoDetails.Helper';
import { SliderWrapper } from '../SliderWrapper';
import VideoGalleryItem from './VideoGalleryItem.Helper';
import { useModalIdContext } from 'lib/context/GenericModalIDContext';
import { getPagerTheme } from 'components/search/Search/Search.Pager.theme';
import { Pager } from '../Coveo';
import { SliderRefType, SliderType } from '../SliderWrapper/SliderWrapper';

type MobileGalleryStyles = 'list' | 'sidescroll';
export type DesktopGalleryStyles = MobileGalleryStyles | 'playlist' | 'sidescrollwithoutvideo';
export type VideoItemProps = (ImagePrimaryProps | VideoPrimaryProps) & {
  fields: { createdBy: Field<string>; postedDate: Field<string> };
};

const MAX_IFRAME_LOOKUP_COUNT = 5;

const VideoListing = (
  props: VideoGalleryProps & { isCoveoDrivenPagination?: boolean; pagerController?: HeadlessPager }
) => {
  const { themeData, themeName } = useTheme(VideoListingTheme);
  const pagerThemeData = getPagerTheme(themeName);

  const { fields, isCoveoDrivenPagination = false, pagerController } = props;

  const { currentScreenWidth } = useCurrentScreenType();
  const { setSelectedModalId } = useModalIdContext();

  //#region States
  const [currentPlayingVideo, setCurrentPlayingVideo] = useState<VideoItemProps>(
    fields?.videos?.[0] as unknown as VideoItemProps
  );
  const [isVideoModalVisible, setIsVideoModalVisible] = useState(false);
  const [coveoPagerState, setCoveoPagerState] = useState<HeadlessPager['state']>(
    pagerController?.state
  );
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  //#endregion

  const sliderRef = useRef<SliderType>();

  useEffect(() => {
    setSelectedVideoIndex(window.innerWidth < 1008 ? -1 : 0);
  }, []);

  useEffect(
    () => pagerController?.subscribe(() => setCoveoPagerState(pagerController.state)),
    [pagerController]
  );

  useEffect(() => {
    let _videoIndex = selectedVideoIndex;

    if (isCoveoDrivenPagination && coveoPagerState) {
      // Coveo does not have all the videos in the source. Video list have only videos of current page.
      // In order to handle selection of video on different page we gotta perform below calculations.
      const _currentPageIndex = coveoPagerState.currentPage - 1;
      _videoIndex = Math.abs(_currentPageIndex * videosPerPage - selectedVideoIndex);

      setCurrentPageIndex(_currentPageIndex);
    }

    fields?.videos?.length > 0 &&
      setCurrentPlayingVideo(fields?.videos[_videoIndex] as unknown as VideoItemProps);

    // 'coveoPagerState' and 'isCoveoDrivenPagination' are configured for coveo driven state and pagination;
    // 'videosPerPage' is passing layout props which can not change, so we can ignore react-hooks/exhaustive-deps warning for this suggested dependencies.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedVideoIndex, fields?.videos]);

  // This useEffect handles the video changes for non coveo components as in non coveo components video fields will be init only for the first time
  useEffect(() => {
    !isCoveoDrivenPagination &&
      fields?.videos?.length > 0 &&
      setCurrentPlayingVideo(fields?.videos[selectedVideoIndex] as unknown as VideoItemProps);

    // 'isCoveoDrivenPagination' are configured for coveo driven state and pagination;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedVideoIndex, fields?.videos]);

  useEffect(() => {
    // Handle page change events for coveo pager
    if (isCoveoDrivenPagination && coveoPagerState) {
      setCurrentPageIndex(coveoPagerState.currentPage - 1);
    }

    // 'coveoPagerState' and 'isCoveoDrivenPagination' are configured for coveo driven state and pagination;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coveoPagerState?.currentPage]);

  if (!fields || !fields?.videos) {
    return null;
  }

  // Common settings
  const videosPerPage = coveoPagerState?.currentPages.length || 5; //If this is coveo pager then set max items per page as configured in coveo

  const displayStyle =
    getEnum<DesktopGalleryStyles>(
      currentScreenWidth < getBreakpoint('ml')
        ? fields?.mobileDisplayStyle
        : fields?.desktopDisplayStyle
    ) || 'list';

  const layoutClasses = themeData.classes?.layouts?.[displayStyle] || 'list';

  const sliderSettings = {
    // React-slick's responsive functionality does not work properly here that's why we've opt for the conditional slider settings
    infinite: false,
    speed: 500,
    dots: currentScreenWidth < getBreakpoint('ml') || displayStyle === 'sidescrollwithoutvideo',
    slidesToShow:
      currentScreenWidth < getBreakpoint('md')
        ? 1
        : currentScreenWidth < getBreakpoint('ml')
        ? 2
        : 4,
    slidesToScroll: 1,
    initialSlide:
      currentScreenWidth < getBreakpoint('ml') && displayStyle === 'sidescroll'
        ? 0
        : selectedVideoIndex,
    enableNumberedPagination:
      currentScreenWidth < getBreakpoint('ml') || displayStyle === 'sidescrollwithoutvideo',
    afterIndexChange: () => currentScreenWidth < getBreakpoint('ml') && setSelectedVideoIndex(-1),
  };
  //

  //#region Logic functions
  const playStopVideo = (
    videoId: string,
    action: 'playVideo' | 'stopVideo',
    iframeLookupTryCount = 3
  ) => {
    try {
      const videoIframe = document.getElementById(videoId) as HTMLIFrameElement;

      // If videoIframe element is not rendered in DOM try to get it again
      if (!videoIframe && iframeLookupTryCount <= MAX_IFRAME_LOOKUP_COUNT) {
        setTimeout(() => playStopVideo(videoId, action, ++iframeLookupTryCount), 1000);
      } else {
        videoIframe.contentWindow?.postMessage(
          `{"event":"command", "func":"${action}", "args":""}`,
          '*'
        );
      }
    } catch (_) {
      console.error("ERROR! Can't find Video iFrame");
    }
  };

  const selectVideo = (videoId: string, videoItemIndex: number) => {
    setSelectedVideoIndex(videoItemIndex);

    if (currentScreenWidth < getBreakpoint('ml') || displayStyle === 'sidescrollwithoutvideo') {
      setIsVideoModalVisible(true);
      setSelectedModalId('VideoItemModal');
    }

    playStopVideo(videoId, 'playVideo');
  };

  const closeModal = () => {
    try {
      const videoId = (
        (currentPlayingVideo as unknown as VideoPrimaryProps).fields?.primaryVideo?.fields
          ?.videoId as Field<string>
      )?.value;

      playStopVideo(videoId, 'stopVideo');
      setSelectedModalId('');
      setIsVideoModalVisible(false);
    } catch (error) {
      setIsVideoModalVisible(false);
    }
  };

  //#endregion

  //#region Rendering functions
  const renderVideoCardsList = () => {
    let _videos = fields?.videos;

    if (!isCoveoDrivenPagination && displayStyle === 'list') {
      _videos = _videos.slice(
        currentPageIndex * videosPerPage,
        (currentPageIndex + 1) * videosPerPage
      );
    }

    const renderVideoCards = () => {
      return _videos.map((video: VideoItemProps, index: number) => {
        const videoItemIndex = videosPerPage * currentPageIndex + index;

        return (
          <VideoDetails
            key={index}
            isVideoPlayerItem={false}
            isSelectedVideo={videoItemIndex === selectedVideoIndex}
            videoDetailsClasses={layoutClasses?.videoCardsList}
            videoItem={video}
            videoItemIndex={videoItemIndex}
            selectVideo={selectVideo}
            displayStyle={displayStyle}
            sliderRef={sliderRef as SliderRefType}
          />
        );
      });
    };

    const renderCards = (): JSX.Element | JSX.Element[] => {
      switch (displayStyle) {
        case 'sidescroll':
        case 'sidescrollwithoutvideo':
          return (
            <SliderWrapper
              sliderRef={sliderRef as SliderRefType}
              sliderSettings={sliderSettings}
              theme={'rba'}
            >
              {renderVideoCards()}
            </SliderWrapper>
          );
        case 'list':
        case 'playlist':
        default:
          return renderVideoCards();
      }
    };

    return (
      <div className={layoutClasses?.videoCardsList?.videoCardsListWrapper}>{renderCards()}</div>
    );
  };
  //#endregion

  return (
    <>
      {displayStyle === 'sidescrollwithoutvideo' && (
        <div className="col-span-12 h-[1px] bg-gray"></div>
      )}
      {props.fields?.headlineText?.value && (
        <div className="col-span-12">
          <Headline classes={layoutClasses.headlineText} {...props} />
        </div>
      )}
      {isVideoModalVisible &&
        ((currentScreenWidth < getBreakpoint('md') && displayStyle !== 'sidescroll') ||
          displayStyle === 'sidescrollwithoutvideo') && (
          <VideoGalleryItem
            video={currentPlayingVideo}
            isVideoModalVisible={isVideoModalVisible}
            closeModal={closeModal}
            videoGalleryItemClasses={{ ...layoutClasses?.videoPlayer }}
          />
        )}
      {currentScreenWidth >= getBreakpoint('md') && displayStyle !== 'sidescrollwithoutvideo' && (
        <>
          <div className="col-span-12 h-[1px] bg-gray"></div>
          <VideoPlayer
            video={currentPlayingVideo}
            videoPlayerClasses={{ ...layoutClasses?.videoPlayer }}
          />
          {displayStyle !== 'list' && <div className="col-span-12 h-[1px] bg-gray"></div>}
        </>
      )}
      {renderVideoCardsList()}
      {
        // Don't render pagination if display style is not list
        displayStyle === 'list' &&
          (isCoveoDrivenPagination && pagerController ? (
            <div className="col-span-12">
              <Pager pagerClasses={pagerThemeData} controller={pagerController} />
            </div>
          ) : (
            fields.videos.length > 5 && (
              <Pagination
                totalPages={fields.videos.length}
                currentPageIndex={currentPageIndex}
                setCurrentPageIndex={setCurrentPageIndex}
                paginationClasses={layoutClasses?.pagination}
              />
            )
          ))
      }
      {displayStyle === 'sidescrollwithoutvideo' && currentScreenWidth >= getBreakpoint('md') && (
        <div className="col-span-12 h-[1px] bg-gray"></div>
      )}
    </>
  );
};

export default VideoListing;
