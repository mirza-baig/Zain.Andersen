import { Foundation } from 'src/.generated/Foundation.EnterpriseWeb.model';
import ImageWrapper from './ImageWrapper';
import VideoWrapper from './VideoWrapper';
import { LayoutValue, RatioTypes, maxhTypes, maxwTypes } from '.';
import { ImageField } from '@sitecore-jss/sitecore-jss-nextjs';

export type ImagePrimaryProps = Foundation.EnterpriseWeb.Enterprise.FieldSets.ImagePrimary &
  Foundation.EnterpriseWeb.Enterprise.FieldSets.ImagePrimaryCaption &
  Foundation.EnterpriseWeb.Enterprise.FieldSets.VideoPrimary & {
    videoThumbnailImage?: ImageField;
    hideCaption?: boolean;
    imageLayout?: LayoutValue;
    additionalDesktopClasses?: string;
    additionalMobileClasses?: string;
    ratio?: RatioTypes;
    maxH?: maxhTypes;
    maxW?: maxwTypes;
    focusArea?: string;
    priority?: boolean;
    rendering?: {
      componentName?: string;
    };
    includeSEOSchema?: boolean;
  };

// need to include SEO Schema For Vimeo and YouTube Videos for - ContentBlockWithMedia HeroHalfMedia PromoFeaturedMedia PromoGeneric PromoReviewContentAuthored
// PromoSwatches GenericCard Video Gallery Video Gallery Dynamic components

const MediaPrimary = (props: ImagePrimaryProps): JSX.Element => {
  const componentName = props?.rendering?.componentName as string;
  const includeSEOSchemaForVimeoYouTube =
    props.includeSEOSchema === true ||
    [
      'ContentBlockWithMedia',
      'HeroHalfMedia',
      'PromoFeaturedMedia',
      'PromoGeneric',
      'PromoReviewContentAuthored',
      'PromoSwatches',
      'GenericCard',
    ].includes(componentName);
  if (props.fields?.primaryVideo) {
    return (
      <VideoWrapper
        includeSEOSchemaForVimeoYouTube={includeSEOSchemaForVimeoYouTube}
        videoItem={props.fields?.primaryVideo}
        videoThumbnailImage={props?.videoThumbnailImage}
      />
    );
  }

  const params = {
    image: props.fields?.primaryImage,
    mobileImage: props.fields?.primaryImageMobile,
    mobileFocusArea: props.fields?.primaryImageMobileFocusArea,
    caption: props.fields?.primaryImageCaption,
    hideCaption: props.hideCaption,
    imageLayout: props.imageLayout,
    additionalDesktopClasses: props.additionalDesktopClasses,
    additionalMobileClasses: props.additionalMobileClasses,
    ratio: props.ratio,
    maxH: props.maxH,
    maxW: props.maxW,
    focusArea: props.focusArea,
    priority: props.priority,
  };

  return <ImageWrapper {...params} />;
};

export default MediaPrimary;
