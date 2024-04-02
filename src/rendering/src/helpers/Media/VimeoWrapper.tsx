// Global
import { ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { CSSProperties, useState } from 'react';
// Local
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { SvgIcon } from '../SvgIcon';
import Image from './Image';
import { getBreakpoint, useCurrentScreenType } from 'lib/utils/get-screen-type';
import { playStopVideo } from './VideoUtils';
import classNames from 'classnames';

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

export type VimeoProps = Feature.EnterpriseWeb.Enterprise.Elements.Media.VimeoVideo & {
  videoThumbnailImage?: ImageField;
};

const VimeoWrapper = (videoItem: VimeoProps): JSX.Element => {
  const [showThumbnail, setShowThumbnail] = useState(
    Boolean(videoItem?.videoThumbnailImage?.value?.src)
  );

  const { currentScreenWidth } = useCurrentScreenType();

  // If the video has no value, return nothing - not sure if videoId is the best way to check this currently
  if (!videoItem.fields?.videoId) {
    return <></>;
  }

  const {
    videoHeight,
    videoWidth,
    videoId,
    // videoLazyLoad, // @TODO: implement this
    vimeoAutoPause,
    vimeoAutoPlay,
    vimeoBackground,
    vimeoByline,
    vimeoColor,
    // vimeoControls, // this is currently breaking things for some reason
    vimeoDNT,
    vimeoKeyboard,
    vimeoLoop,
    vimeoMuted,
    vimeoPictureInPicture,
    vimeoPlaysInline,
  } = videoItem.fields;

  const vimeoUrl = `https://player.vimeo.com/video/${videoId.value}?portrait=0&autopause=${vimeoAutoPause.value}&autoplay=${vimeoAutoPlay.value}&background=${vimeoBackground.value}&byline=${vimeoByline.value}&color=${vimeoColor.value}&dnt=${vimeoDNT.value}&keyboard=${vimeoKeyboard.value}&loop=${vimeoLoop.value}&muted=${vimeoMuted.value}&pip=${vimeoPictureInPicture.value}&playsinline=${vimeoPlaysInline.value}`;

  function hideThumbnailAndPlayVideo() {
    playStopVideo(videoId.value, 'playVideo', 'vimeo');
    setShowThumbnail(false);
  }

  return (
    <div className="relative">
      {showThumbnail && !vimeoAutoPlay.value && (
        <div className="relative z-[10] bg-white ">
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
        style={container}
        className={classNames(
          showThumbnail && !vimeoAutoPlay.value ? '!absolute top-0 left-0 right-0 !p-0' : ''
        )}
      >
        <iframe
          id={videoId.value}
          style={iframestyle}
          src={vimeoUrl}
          width={videoWidth.value || '640'}
          height={videoHeight.value || '360'}
          loading="lazy"
          allow="autoplay; fullscreen; picture-in-picture"
        ></iframe>
      </div>
    </div>
  );
};

export default VimeoWrapper;
