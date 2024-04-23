import { SitecoreIds } from 'lib/constants';
import { normalizeSitecoreDateString } from 'lib/utils/string-utils';
import { IndexableItem, SitemapItem } from '../..';
import { checkHostNameInMediaURL } from 'lib/coveo/utils';

export class VideoProperties {
  order = 70;

  async exec(siteMapItem: SitemapItem, indexableItem: IndexableItem) {
    const baseGalleryVideoTemplateId =
      SitecoreIds.Foundation.Enterprise.BaseTemplates._BaseGalleryVideo.TemplateId.replace(
        /-/g,
        ''
      );

    if (indexableItem.allTemplateIds.indexOf(baseGalleryVideoTemplateId) == -1) {
      return siteMapItem;
    }

    siteMapItem.loc = siteMapItem.itemUri;

    const lastUpdated = indexableItem.fields.getDateField('lastUpdated');
    if (lastUpdated && lastUpdated.value) {
      const normalized = normalizeSitecoreDateString(lastUpdated.value);
      siteMapItem.lastmod = new Date(normalized);
    }

    siteMapItem.metaData['siteLanguage'] = indexableItem.language;

    siteMapItem.metaData['siteName'] = indexableItem.siteName;

    siteMapItem.metaData['sitesearchtopic'] = 'Videos';

    const eyebrowText = indexableItem.fields.getTextField('eyebrowText');
    if (eyebrowText) {
      siteMapItem.metaData[`video_${eyebrowText.name}`] = eyebrowText.value;
    }

    const headlineText = indexableItem.fields.getTextField('headlineText');
    if (headlineText) {
      siteMapItem.metaData[`video_${headlineText.name}`] = headlineText.value;
    }

    const body = indexableItem.fields.getRichTextField('body');
    if (body) {
      siteMapItem.metaData[`video_${body.name}`] = body.value;
    }

    const videoThumbnail = indexableItem.fields.getImageField('videoThumbnail');
    if (videoThumbnail && videoThumbnail.src) {
      const src = checkHostNameInMediaURL(videoThumbnail.src);
      siteMapItem.metaData[videoThumbnail.name] = src;
      siteMapItem.metaData[`${videoThumbnail.name}_alt`] = videoThumbnail.alt;
      siteMapItem.metaData[`${videoThumbnail.name}_height`] = videoThumbnail.height;
      siteMapItem.metaData[`${videoThumbnail.name}_width`] = videoThumbnail.width;
    }

    const videoThumbnailMobile = indexableItem.fields.getImageField('videoThumbnailMobile');
    if (videoThumbnailMobile && videoThumbnailMobile?.src) {
      const src = checkHostNameInMediaURL(videoThumbnailMobile.src);
      siteMapItem.metaData[videoThumbnailMobile.name] = src;
      siteMapItem.metaData[`${videoThumbnailMobile.name}_alt`] = videoThumbnailMobile.alt;
      siteMapItem.metaData[`${videoThumbnailMobile.name}_height`] = videoThumbnailMobile.height;
      siteMapItem.metaData[`${videoThumbnailMobile.name}_width`] = videoThumbnailMobile.width;
    }

    const videoThumbnailMobileFocusArea = indexableItem.fields.getLookupField(
      'videoThumbnailMobileFocusArea'
    );
    if (videoThumbnailMobileFocusArea) {
      const value = videoThumbnailMobileFocusArea.targetItem?.fields.getTextField('Value');
      if (value) {
        siteMapItem.metaData[videoThumbnailMobileFocusArea.name] = value.value;
      }
    }

    const primaryVideo = indexableItem.fields.getLookupField('primaryVideo');
    if (primaryVideo && primaryVideo.targetItem) {
      const videoId = primaryVideo.targetItem.fields.getTextField('videoId');

      if (videoId) {
        siteMapItem.metaData[videoId.name] = videoId.value;

        const videoName = primaryVideo.targetItem.fields.getTextField('videoName');
        if (videoName) {
          siteMapItem.metaData[videoName.name] = videoName.value;
        }

        const videoDescription = primaryVideo.targetItem.fields.getTextField('videoDescription');
        if (videoDescription) {
          siteMapItem.metaData[videoDescription.name] = videoDescription.value;
        }

        const lastUpdated = primaryVideo.targetItem.fields.getDateField('lastUpdated');
        if (lastUpdated && lastUpdated.value) {
          const normalized = normalizeSitecoreDateString(lastUpdated.value);
          siteMapItem.metaData[lastUpdated.name] = new Date(normalized);
        }

        siteMapItem.metaData['videotype'] = primaryVideo.targetItem.template?.id;

        if (
          primaryVideo.targetItem.template?.id?.toLowerCase() ===
          SitecoreIds.Feature.Data.Elements.Videos.YouTubeVideo.TemplateId.replace(/-/g, '')
        ) {
          const youTubeAutoLoop =
            primaryVideo.targetItem.fields.getCheckboxField('youTubeAutoLoop');
          if (youTubeAutoLoop) {
            siteMapItem.metaData[`video_${youTubeAutoLoop.name}`] = youTubeAutoLoop.boolValue
              ? 'true'
              : 'false';
          }

          const youTubeClosedCaptions =
            primaryVideo.targetItem.fields.getCheckboxField('youTubeClosedCaptions');
          if (youTubeClosedCaptions) {
            siteMapItem.metaData[`video_${youTubeClosedCaptions.name}`] =
              youTubeClosedCaptions.boolValue ? 'true' : 'false';
          }

          const youTubeShowControls =
            primaryVideo.targetItem.fields.getCheckboxField('youTubeShowControls');
          if (youTubeShowControls) {
            siteMapItem.metaData[`video_${youTubeShowControls.name}`] =
              youTubeShowControls.boolValue ? 'true' : 'false';
          }

          const youTubeMute = primaryVideo.targetItem.fields.getCheckboxField('youTubeMute');
          if (youTubeMute) {
            siteMapItem.metaData[`video_${youTubeMute.name}`] = youTubeMute.boolValue
              ? 'true'
              : 'false';
          }
        } else if (
          primaryVideo.targetItem.template?.id?.toLowerCase() ===
          SitecoreIds.Feature.Data.Elements.Videos.FacebookVideo.TemplateId.replace(/-/g, '')
        ) {
          const facebookShowCaptions =
            primaryVideo.targetItem.fields.getCheckboxField('facebookShowCaptions');
          if (facebookShowCaptions) {
            siteMapItem.metaData[`video_${facebookShowCaptions.name}`] =
              facebookShowCaptions.boolValue ? 'true' : 'false';
          }

          const facebookShowText =
            primaryVideo.targetItem.fields.getCheckboxField('facebookShowText');
          if (facebookShowText) {
            siteMapItem.metaData[`video_${facebookShowText.name}`] = facebookShowText.boolValue
              ? 'true'
              : 'false';
          }
        }
      }
    }

    const excludeFromSearch = indexableItem.fields.getCheckboxField('excludeFromSearch');
    if (excludeFromSearch) {
      siteMapItem.metaData[excludeFromSearch.name] = excludeFromSearch.boolValue ? 'true' : 'false';
    }

    return siteMapItem;
  }
}

export const videoPropertiesPlugin = new VideoProperties();
