// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
// Components
import { Component } from 'src/helpers/Component';
import { ComponentProps } from 'lib/types/component-props';
import VideoListing from 'src/helpers/VideoGalleryHelpers/VideoListing';

export type VideoGalleryProps =
  Feature.EnterpriseWeb.RenewalByAndersen.Components.General.VideoGallery.VideoGallery &
    ComponentProps;

const VideoGallery = (props: VideoGalleryProps) => {
  return (
    <Component variant="lg" dataComponent="general/videogallery" {...props}>
      <VideoListing {...props} />
    </Component>
  );
};

export default withDatasourceCheck()<VideoGalleryProps>(VideoGallery);
