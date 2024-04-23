// Global
import { ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { CSSProperties, useState } from 'react';
import Head from 'next/head';
// Local
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { SvgIcon } from '../SvgIcon';
import Image from './Image';
import { getBreakpoint, useCurrentScreenType } from 'lib/utils/get-screen-type';
import { playStopVideo } from './VideoUtils';
import classNames from 'classnames';
import { normalizeSitecoreDateStringFormattedWithTime } from 'lib/utils/string-utils';

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
  includeSEOSchemaForVimeoYouTube?: boolean;
  vimeoThumbnailURL?: string;
};

const VimeoWrapper = (videoItem: VimeoProps): JSX.Element => {
  const [showThumbnail, setShowThumbnail] = useState(
    Boolean(videoItem?.videoThumbnailImage?.value?.src)
  );

  const { currentScreenWidth } = useCurrentScreenType();

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

  const formattedDate =
    videoItem.fields.lastUpdated.value &&
    videoItem.fields.lastUpdated.value != '0001-01-01T00:00:00Z' &&
    normalizeSitecoreDateStringFormattedWithTime(videoItem.fields.lastUpdated.value);

  const ldJsonScriptVimeo = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    contentURL: videoItem.fields.videoId
      ? `https://vimeo.com/${videoItem.fields.videoId.value}`
      : '',
    description: videoItem.fields.videoDescription.value || '',
    embedUrl: videoItem.fields.videoId
      ? `https://player.vimeo.com/video/${videoItem.fields.videoId.value}`
      : '',
    name: videoItem.fields.videoName.value || '',
    thumbnailUrl: videoItem?.videoThumbnailImage?.value?.src || videoItem?.vimeoThumbnailURL || '',
    uploadDate: formattedDate || '',
  };
  // If the video has no value, return nothing - not sure if videoId is the best way to check this currently
  if (!videoItem.fields?.videoId) {
    return <></>;
  }

  function hideThumbnailAndPlayVideo() {
    playStopVideo(videoId.value, 'playVideo', 'vimeo');
    setShowThumbnail(false);
  }
  return (
    <>
      {videoItem.includeSEOSchemaForVimeoYouTube && (
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJsonScriptVimeo) }}
          />
        </Head>
      )}
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
    </>
  );
};

export default VimeoWrapper;
