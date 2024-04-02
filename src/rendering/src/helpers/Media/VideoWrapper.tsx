import React from 'react';
import { Item } from '@sitecore-jss/sitecore-jss-nextjs';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { SitecoreIds } from 'lib/constants';
import FacebookWrapper from './FacebookWrapper';
import VimeoWrapper from './VimeoWrapper';
import YoutubeWrapper from './YouTubeWrapper';
import { ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { guidEquals } from 'lib/utils/string-utils';

type VideoWrapperProps = {
  videoItem?: Item;
  videoThumbnailImage?: ImageField;
};
const VideoWrapper = ({ videoItem, videoThumbnailImage }: VideoWrapperProps): JSX.Element => {
  if (!videoItem) {
    return <></>;
  }
  if (
    guidEquals(
      videoItem.templateId,
      SitecoreIds.Feature.Data.Elements.Videos.YouTubeVideo.TemplateId
    )
  ) {
    const videoProps = videoItem as Feature.EnterpriseWeb.Enterprise.Elements.Media.YouTubeVideo;
    return <YoutubeWrapper {...videoProps} videoThumbnailImage={videoThumbnailImage} />;
  } else if (
    guidEquals(
      videoItem.templateId,
      SitecoreIds.Feature.Data.Elements.Videos.FacebookVideo.TemplateId
    )
  ) {
    const videoProps = videoItem as Feature.EnterpriseWeb.Enterprise.Elements.Media.FacebookVideo;
    return <FacebookWrapper {...videoProps} />;
  } else if (
    guidEquals(videoItem.templateId, SitecoreIds.Feature.Data.Elements.Videos.VimeoVideo.TemplateId)
  ) {
    const videoProps = videoItem as Feature.EnterpriseWeb.Enterprise.Elements.Media.VimeoVideo;
    return <VimeoWrapper {...videoProps} videoThumbnailImage={videoThumbnailImage} />;
  } else {
    return <div>Unrecognized Video Type: {videoItem.templateName}</div>;
  }
};

export default VideoWrapper;
