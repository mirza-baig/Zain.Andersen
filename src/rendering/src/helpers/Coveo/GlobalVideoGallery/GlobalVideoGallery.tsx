import { ResultList } from '@coveo/headless';
import { ResultListState } from '@coveo/headless';
import { Pager } from '@coveo/headless';
import { VideoGalleryProps } from 'components/general/VideoGallery/VideoGallery';
import React, { useEffect, useState } from 'react';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { getVideoItemListProps } from 'src/helpers/VideoGalleryHelpers/VideoItemUtils.Helper';
import VideoListing from 'src/helpers/VideoGalleryHelpers/VideoListing';

export type GlobalVideoGalleryProps = {
  controller: ResultList;
  pagerController: Pager;
  videoResultItems: Feature.EnterpriseWeb.Enterprise.Elements.Search.VideoResultItem[];
  hasFacets: boolean;
};

export const GlobalVideoGallery = ({
  controller,
  videoResultItems,
  pagerController,
}: GlobalVideoGalleryProps) => {
  const [videoListState, setVideoListState] = useState<ResultListState | undefined>(
    controller?.state
  );

  useEffect(() => controller?.subscribe(() => setVideoListState(controller.state)), [controller]);

  const getVideoListingProps = () => {
    const galleryProps = {
      fields: {
        videos: videoListState && getVideoItemListProps(videoListState, videoResultItems),
        componentSpacing: null,
        sectionId: {
          value: '',
        },
        eventName: {
          value: '',
        },
        eventType: {
          value: '',
        },
        eventZone: {
          value: '',
        },
      },
    };

    return galleryProps;
  };
  return (
    <div className="grid gap-s md:grid-cols-12 md:gap-s">
      <VideoListing
        isCoveoDrivenPagination
        pagerController={pagerController}
        {...(getVideoListingProps() as unknown as VideoGalleryProps)}
      />
    </div>
  );
};
