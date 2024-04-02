// Global
import { useSitecoreContext, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { useEffect, useRef, useState } from 'react';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import {
  ResultList,
  ResultListState,
  Unsubscribe,
  buildResultList,
  buildResultsPerPage,
  loadAdvancedSearchQueryActions,
  loadSearchConfigurationActions,
} from '@coveo/headless';
// Components
import { Component } from 'src/helpers/Component';
import VideoListing from 'src/helpers/VideoGalleryHelpers/VideoListing';
// Utils and others
import { ComponentProps } from 'lib/types/component-props';
import { buildEngineAsync, getFieldsToInclude } from 'lib/coveo';
import {
  defaultVideoFieldsToInclude,
  getVideoItemListProps,
} from 'src/helpers/VideoGalleryHelpers/VideoItemUtils.Helper';
import { replaceTokenInCoveoExpression } from 'lib/coveo/utils';
import { useFeatureToggles } from 'lib/context/FeatureToggleContext';
import { useAffiliate } from 'lib/context/AffiliateContext';

export type VideoGalleryDynamicProps =
  Feature.EnterpriseWeb.RenewalByAndersen.Components.General.VideoGalleryDynamic.VideoGalleryDynamic &
    ComponentProps;

const organizationId = process.env.NEXT_PUBLIC_EW_COVEO_ORGANIZATION_ID || '';
const farmName = process.env.NEXT_PUBLIC_EW_COVEO_FARM_NAME;

const VideoGalleryDynamic = (props: VideoGalleryDynamicProps) => {
  const { sitecoreContext } = useSitecoreContext();

  const resultListController = useRef<ResultList>();

  const [resultListState, setResultListState] = useState<ResultListState | undefined>(
    resultListController.current?.state
  );

  const subscribeToStateChangesAndReturnCleanup = (
    unsubscribers: Array<Unsubscribe | undefined>
  ) => {
    unsubscribers?.push(
      resultListController.current?.subscribe(() =>
        setResultListState(resultListController.current?.state)
      )
    );
  };

  const featureToggles = useFeatureToggles();
  const { userAffiliate, pageAffiliate } = useAffiliate();

  useEffect(() => {
    const allunsubscribers: { (): void }[] = [];

    (async () => {
      const _engine = await buildEngineAsync(organizationId);

      if (!_engine) {
        return;
      }

      const fieldsToInclude = getFieldsToInclude(props.fields.children, 'video-gallery-dynamic');

      // incase of no numberOfVideos, keeping higher number such as 500 to get all the available results at once
      buildResultsPerPage(_engine, {
        initialState: { numberOfResults: props.fields?.numberOfVideos?.value || 500 },
      });

      resultListController.current = buildResultList(_engine, {
        options: {
          fieldsToInclude: ['sc_templateid', ...defaultVideoFieldsToInclude, ...fieldsToInclude],
        },
      });

      const { updateSearchConfiguration } = loadSearchConfigurationActions(_engine);
      _engine.dispatch(
        updateSearchConfiguration({
          pipeline: props?.fields?.queryPipeline?.value,
          searchHub: props?.fields?.searchHub?.value,
        })
      );

      const { updateAdvancedSearchQueries } = loadAdvancedSearchQueryActions(_engine);
      let filterExp = props.fields?.filterExpression.value;
      let boostExp = props.fields?.boostingExpression.value;

      boostExp = replaceTokenInCoveoExpression(
        boostExp,
        userAffiliate?.affiliateId,
        pageAffiliate?.affiliateId,
        featureToggles
      );
      filterExp = replaceTokenInCoveoExpression(
        filterExp,
        userAffiliate?.affiliateId,
        pageAffiliate?.affiliateId,
        featureToggles
      );

      const advancedQueries = `${boostExp || ''} ${filterExp || ''}`.trim();

      _engine.dispatch(
        updateAdvancedSearchQueries({
          cq: `(@ew_excludefromsearch=="false") AND (@ew_sitelanguage==${
            sitecoreContext.language || 'en'
          }) AND (@source==EnterpriseWeb-${farmName}) `,
          aq: advancedQueries || '',
        })
      );

      _engine.executeFirstSearch();

      subscribeToStateChangesAndReturnCleanup(allunsubscribers);
    })();
    return function cleanup() {
      allunsubscribers.forEach((unsub) => unsub?.());
    };
    // We can ignore the warning for this useEffect as all the suggested deps are coming from layout service.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!props?.fields) {
    return <></>;
  }

  // prepare proxy props for the VideoListing helper
  const getVideoListingProps = () => {
    const galleryProps = {
      fields: {
        desktopDisplayStyle: props.fields?.desktopDisplayStyle,
        mobileDisplayStyle: props.fields?.mobileDisplayStyle,
        videos: resultListState && getVideoItemListProps(resultListState, props.fields?.children),
        headlineLevel: props.fields?.headlineLevel,
        headlineText: props.fields?.headlineText,
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
        children: [],
      },
    };

    return galleryProps;
  };

  return (
    <Component variant="lg" dataComponent="general/videogallerydynamic" {...props}>
      <VideoListing {...getVideoListingProps()} />
    </Component>
  );
};

export default withDatasourceCheck()<VideoGalleryDynamicProps>(VideoGalleryDynamic);
