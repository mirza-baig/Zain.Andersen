import React, { useEffect, useState } from 'react';
import { Item } from '@sitecore-jss/sitecore-jss-nextjs';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { SitecoreIds } from 'lib/constants';
import FacebookWrapper from './FacebookWrapper';
import VimeoWrapper from './VimeoWrapper';
import YoutubeWrapper from './YouTubeWrapper';
import { ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { guidEquals } from 'lib/utils/string-utils';

type VideoWrapperProps = {
  videoItem?:
    | Item
    | Feature.EnterpriseWeb.Enterprise.Elements.Media.VimeoVideo
    | Feature.EnterpriseWeb.Enterprise.Elements.Media.YouTubeVideo
    | Feature.EnterpriseWeb.Enterprise.Elements.Media.FacebookVideo;
  videoThumbnailImage?: ImageField;
  includeSEOSchemaForVimeoYouTube?: boolean;
};

const VideoWrapper = ({
  videoItem,
  videoThumbnailImage,
  includeSEOSchemaForVimeoYouTube,
}: VideoWrapperProps): JSX.Element => {
  // fetchVimeoThumbnail for SEO Schema
  const [vimeoThumbnailURL, setVimeoThumbnailURL] = useState();
  let vimeoThumbnailURLFetch = false;
  useEffect(() => {
    if (vimeoThumbnailURLFetch) {
      const fetchVimeoThumbnail = async (videoId: any) => {
        try {
          const response = await fetch(
            `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${videoId}`
          );
          const data = await response.json();
          setVimeoThumbnailURL(data.thumbnail_url);
          return data.thumbnail_url;
        } catch (error) {
          console.error('Error fetching Vimeo thumbnail:', error);
          return null;
        }
      };
      // @ts-ignore ignore video id type
      videoItem && fetchVimeoThumbnail(videoItem?.fields?.videoId?.value);
    }
  }, [videoItem, vimeoThumbnailURLFetch]);

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
    return (
      <YoutubeWrapper
        {...videoProps}
        videoThumbnailImage={videoThumbnailImage}
        includeSEOSchemaForVimeoYouTube={includeSEOSchemaForVimeoYouTube}
      />
    );
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
    if (videoProps.fields.videoId.value && videoThumbnailImage?.value?.src == null) {
      vimeoThumbnailURLFetch = true;
    }
    return (
      <VimeoWrapper
        {...videoProps}
        videoThumbnailImage={videoThumbnailImage}
        vimeoThumbnailURL={vimeoThumbnailURL}
        includeSEOSchemaForVimeoYouTube={includeSEOSchemaForVimeoYouTube}
      />
    );
  } else {
    return <div>Unrecognized Video Type: {videoItem.templateName}</div>;
  }
};

export default VideoWrapper;
