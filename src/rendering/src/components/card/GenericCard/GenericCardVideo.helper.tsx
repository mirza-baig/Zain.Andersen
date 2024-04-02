import { Field, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { DesktopVideoDisplayStyleType } from 'components/listing/XupCardCollection/XupCardCollection';
import { getBreakpoint, useCurrentScreenType } from 'lib/utils/get-screen-type';
import React, { useState } from 'react';
import { Image, MediaPrimary } from 'src/helpers/Media';
import { ImagePrimaryProps } from 'src/helpers/Media/ImagePrimary';
import { getSourceNameFromVideoItem, playStopVideo } from 'src/helpers/Media/VideoUtils';
import ModalWrapper from 'src/helpers/ModalWrapper/ModalWrapper';
import ReactDOM from 'react-dom';
import { useTheme } from 'lib/context/ThemeContext';
import { SvgIcon } from 'src/helpers/SvgIcon';
import { Foundation } from 'src/.generated/Foundation.EnterpriseWeb.model';

type VideoCardProps = ImagePrimaryProps &
  Foundation.EnterpriseWeb.Enterprise.FieldSets.VideoPrimary & {
    fields?: { videoThumbnailImage?: ImageField };
    desktopVideoDisplayStyle: DesktopVideoDisplayStyleType;
  };

const VideoCard = ({ desktopVideoDisplayStyle, ...props }: VideoCardProps) => {
  const { currentScreenWidth } = useCurrentScreenType();

  const { themeName } = useTheme();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalAndPlayVideo = () => {
    const primaryVideo = props.fields?.primaryVideo;
    setIsModalOpen(true);
    playStopVideo(
      (primaryVideo?.fields?.videoId as Field<string>)?.value || '',
      'playVideo',
      primaryVideo && getSourceNameFromVideoItem(primaryVideo)
    );
  };

  if (desktopVideoDisplayStyle === 'in-line' && currentScreenWidth > getBreakpoint('md')) {
    return <MediaPrimary {...props} videoThumbnailImage={props?.fields?.videoThumbnailImage} />;
  }

  if (desktopVideoDisplayStyle === 'in-modal' || currentScreenWidth <= getBreakpoint('md')) {
    return (
      <>
        <div className="relative">
          {props.fields?.videoThumbnailImage?.value?.src && (
            <>
              <span
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.code === 'Enter' || e.code === 'Space') {
                    openModalAndPlayVideo();
                  }
                }}
                onClick={() => openModalAndPlayVideo()}
                className="absolute top-1/2 left-1/2 z-[10] -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              >
                <SvgIcon icon="play" size={currentScreenWidth > getBreakpoint('md') ? 80 : 91} />
              </span>
              <Image image={props.fields?.videoThumbnailImage} layout="responsive" />
            </>
          )}
        </div>
        {isModalOpen &&
          ReactDOM.createPortal(
            <ModalWrapper
              size="w-full md:w-[65vw] md:max-w-[1199px] h-auto max-h-[540px] md:max-h-[753px]"
              isModalOpen={isModalOpen}
              handleClose={() => setIsModalOpen(false)}
            >
              <div className="p-m">
                <MediaPrimary {...props} />
              </div>
            </ModalWrapper>,
            document.querySelector(`.${themeName}`) || document.body
          )}
      </>
    );
  }

  return <></>;
};

export default VideoCard;
