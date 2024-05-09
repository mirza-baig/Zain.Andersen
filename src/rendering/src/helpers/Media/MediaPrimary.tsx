import { Foundation } from 'src/.generated/Foundation.EnterpriseWeb.model';
import ImageWrapper from './ImageWrapper';
import VideoWrapper, { getStaticProps as getVideoStaticProps } from './VideoWrapper';
import { LayoutValue, MediaStaticProps, RatioTypes, maxhTypes, maxwTypes } from '.';
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
    staticProps?: MediaStaticProps;
  };

// need to include SEO Schema For Vimeo and YouTube Videos for - ContentBlockWithMedia HeroHalfMedia PromoFeaturedMedia PromoGeneric PromoReviewContentAuthored
// PromoSwatches GenericCard Video Gallery Video Gallery Dynamic components

const MediaPrimary = (props: ImagePrimaryProps): JSX.Element => {
  console.log('MediaPrimary props', props);
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
        staticProps={props.staticProps?.videoStaticProps}
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

export const getStaticProps = async (props: ImagePrimaryProps): Promise<MediaStaticProps> => {
  const result: MediaStaticProps = {};

  if (props.fields?.primaryVideo) {
    result.videoStaticProps = await getVideoStaticProps(props.fields?.primaryVideo);
  }

  return result;
};

export default MediaPrimary;
