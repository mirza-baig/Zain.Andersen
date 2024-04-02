// Global
import { ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { CSSProperties, useEffect, useState, useRef } from 'react';
// Local
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import Image from './Image';
import { SvgIcon } from '../SvgIcon';
import classNames from 'classnames';
import { playStopVideo } from './VideoUtils';
import { getBreakpoint, useCurrentScreenType } from 'lib/utils/get-screen-type';

const container: CSSProperties = {
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  paddingTop: '56.25%',
};

const iframestyle: CSSProperties = {
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  width: '100%',
  height: '100%',
};

export type YouTubeProps = Feature.EnterpriseWeb.Enterprise.Elements.Media.YouTubeVideo & {
  videoThumbnailImage?: ImageField;
};

const YoutubeWrapper = (videoItem: YouTubeProps): JSX.Element => {
  const [showThumbnail, setShowThumbnail] = useState(
    Boolean(videoItem?.videoThumbnailImage?.value?.src)
  );

  const { currentScreenWidth } = useCurrentScreenType();
  const {
    videoHeight,
    videoWidth,
    videoId,
    // videoLazyLoad, // @TODO: implement this
    youTubeAutoLoop,
    youTubeShowControls,
    youTubeAutoPlay,
    youTubeDisableKeyboard,
    youTubeModestBranding,
    youTubeMute,
    // youTubeCaptions,
  } = videoItem.fields;

  const youtubeUrl = `https://www.youtube.com/embed/${videoId.value}?&loop=${
    youTubeAutoLoop.value ? 1 : 0
  }&controls=${youTubeShowControls.value ? 1 : 0}&autoplay=${
    youTubeAutoPlay.value ? 1 : 0
  }&disablekb=${youTubeDisableKeyboard.value ? 1 : 0}&modestbranding=${
    youTubeModestBranding.value ? 1 : 0
  }&mute=${youTubeAutoPlay.value ? 1 : youTubeMute.value}&playlist=${videoId.value}`;

  const [load, setLoad] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const currentVideoRef = videoRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setLoad(true);
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );

    if (currentVideoRef) {
      observer.observe(currentVideoRef);
    }

    return () => {
      if (currentVideoRef) {
        observer.unobserve(currentVideoRef);
      }
    };
  }, []);

  // If the video has no value, return nothing - not sure if videoId is the best way to check this currently
  if (!videoItem.fields?.videoId) {
    return <></>;
  }

  function hideThumbnailAndPlayVideo() {
    playStopVideo(videoId.value, 'playVideo', 'youtube');
    setShowThumbnail(false);
  }

  return (
    <>
      <div className="relative">
        {showThumbnail && !youTubeAutoPlay.value && (
          <div className="relative z-[10] bg-white">
            <span
              onKeyDown={(e) => {
                if (e.code === 'Enter' || e.code === 'Space') {
                  hideThumbnailAndPlayVideo();
                }
              }}
              onClick={() => hideThumbnailAndPlayVideo()}
              className="absolute top-1/2 left-1/2 z-[10] -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            >
              <SvgIcon icon="play" size={currentScreenWidth > getBreakpoint('md') ? 80 : 91} />
            </span>
            <Image image={videoItem.videoThumbnailImage} layout="responsive" />
          </div>
        )}

        <div
          ref={videoRef}
          style={container}
          className={classNames(
            showThumbnail && !youTubeAutoPlay.value ? '!absolute top-0 left-0 right-0 !p-0' : ''
          )}
        >
          {load && (
            <iframe
              id={videoId.value}
              style={iframestyle}
              name="ytwrapper"
              width={videoWidth.value}
              height={videoHeight.value}
              src={youtubeUrl}
              title={'Youtube Video'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </>
  );
};

export default YoutubeWrapper;
