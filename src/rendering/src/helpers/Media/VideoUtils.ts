import { Item } from '@sitecore-jss/sitecore-jss-nextjs';
import { SitecoreIds } from 'lib/constants';
import { normalizeGuid } from 'lib/utils/string-utils';

type VideoSource = 'youtube' | 'vimeo' | 'facebook';

export const playStopVideo = (
  videoId: string,
  action: 'playVideo' | 'stopVideo',
  source: VideoSource = 'youtube'
): void => {
  if (!videoId) {
    return;
  }
  const videoIframe = document.getElementById(videoId) as HTMLIFrameElement;
  console.log(`{"method":"${action === 'playVideo' ? 'play' : 'pause'}"}`, '+');
  // If videoIframe element is not rendered in DOM try to get it again
  if (!videoIframe) {
    setTimeout(() => playStopVideo(videoId, action, source), 1000);
  } else {
    switch (source) {
      case 'youtube':
        videoIframe.contentWindow?.postMessage(
          `{"event":"command", "func":"${action}", "args":""}`,
          '*'
        );
        break;
      case 'vimeo':
        videoIframe.contentWindow?.postMessage(
          `{"method":"${action === 'playVideo' ? 'play' : 'pause'}"}`,
          '*'
        );
        break;
    }
  }
};

export const getSourceNameFromVideoItem = (videoItem: Item): VideoSource | undefined => {
  const templateIdMap: Record<string, VideoSource> = {
    [normalizeGuid(SitecoreIds.Feature.Data.Elements.Videos.YouTubeVideo.TemplateId)]: 'youtube',
    [normalizeGuid(SitecoreIds.Feature.Data.Elements.Videos.FacebookVideo.TemplateId)]: 'facebook',
    [normalizeGuid(SitecoreIds.Feature.Data.Elements.Videos.VimeoVideo.TemplateId)]: 'vimeo',
  };

  return templateIdMap[normalizeGuid(videoItem.templateId || '')];
};
