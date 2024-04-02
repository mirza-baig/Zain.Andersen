/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useState, useRef } from 'react';
import {
  SearchEngine,
  ResultTemplatesManager,
  SearchBox as HeadlessSearchBox,
  ResultList as HeadlessResultList,
  NotifyTrigger as HeadlessNotifyTrigger,
  QuerySummary as HeadlessQuerySummary,
  SearchStatus as HeadlessSearchStatus,
  DidYouMean as HeadlessDidYouMean,
  Pager as HeadlessPager,
  BreadcrumbManager as HeadlessBreadcrumbManager,
  Facet as HeadlessFacet,
  buildBreadcrumbManager,
  buildDidYouMean,
  buildFacet,
  buildFacetConditionsManager,
  buildNotifyTrigger,
  buildPager,
  buildQuerySummary,
  buildResultList,
  buildResultTemplatesManager,
  buildResultsPerPage,
  buildSearchBox,
  buildSearchStatus,
  buildSort,
  loadAdvancedSearchQueryActions,
  loadFacetOptionsActions,
  loadSearchConfigurationActions,
  ResultListState,
  Result,
  Unsubscribe,
} from '@coveo/headless';
import classNames from 'classnames';
import { useTheme } from 'lib/context/ThemeContext';
import { Component } from 'src/helpers/Component';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { Headline } from 'src/helpers/Headline';
import SingleButton from 'src/helpers/SingleButton/SingleButton';
import { SearchTheme } from './Search.theme';
import {
  CoveoEngineContext,
  LayoutType,
  buildEngineAsync,
  getFieldsToInclude,
  getInitialCriterion,
  mapFacetOptions,
} from 'lib/coveo';

import { Field, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { BodyCopy } from 'src/helpers/BodyCopy';
import { getEnum } from 'lib/utils';
import { Spinner } from 'src/helpers/Spinner';
import {
  DidYouMean,
  FacetGroup,
  GlobalVideoGallery,
  Pager,
  QuerySummary,
  ResultList,
  SearchBox,
  TriggeredBanner,
  bindUrlManager,
} from 'src/helpers/Coveo';
import ListTemplate from './Search.ListTemplate.helper';
import GridTemplate from './Search.GridTemplate.helper';
import TableTemplate from './Search.TableTemplate.helper';
import { getBreakpoint } from 'lib/utils/get-screen-type';
import { defaultVideoFieldsToInclude } from 'src/helpers/VideoGalleryHelpers/VideoItemUtils.Helper';
import { CoveoTabs } from 'src/helpers/Coveo/CoveoTabs/CoveoTabs';
import { replaceTokenInCoveoExpression } from 'lib/coveo/utils';
import { useAffiliate } from 'lib/context/AffiliateContext';
import { useFeatureToggles } from 'lib/context/FeatureToggleContext';

// TODO: Clean this up
const organizationId = process.env.NEXT_PUBLIC_EW_COVEO_ORGANIZATION_ID || '';
const farmName = process.env.NEXT_PUBLIC_EW_COVEO_FARM_NAME;

export type GridStyle = 'photo-gallery' | 'result-with-image' | 'result-without-image';

export type SearchProps = Feature.EnterpriseWeb.Enterprise.Components.Search.Search & {
  fields: {
    searchBox: Feature.EnterpriseWeb.Enterprise.Elements.Search.SearchBox;
    pager: Feature.EnterpriseWeb.Enterprise.Elements.Search.Pager;
    facets: Feature.EnterpriseWeb.Enterprise.Elements.Search.Facet[];
    searchParameters: Feature.EnterpriseWeb.Enterprise.Elements.Search.SearchParameters;
    tabs: Feature.EnterpriseWeb.Enterprise.Elements.Search.Tab[];
    listResultItems: Feature.EnterpriseWeb.Enterprise.Elements.Search.ListResultItem[];
    gridResultItems: Feature.EnterpriseWeb.Enterprise.Elements.Search.GridResultItem[];
    columns: Feature.EnterpriseWeb.Enterprise.Elements.Search.ResultColumn[];
    didYouMean: Feature.EnterpriseWeb.Enterprise.Elements.Search.DidYouMean;
  };
};

const getVisiblePagerNumbers = (
  fields: Feature.EnterpriseWeb.Enterprise.Elements.Search.Pager['fields']
): number => {
  return window.outerWidth < getBreakpoint('md')
    ? fields?.numberOfPagesMobile.value ?? 3
    : fields?.numberOfPages.value ?? 5;
};

const Search = (props: SearchProps) => {
  const { themeName, themeData } = useTheme(SearchTheme);
  const { fields } = props;
  const { sitecoreContext } = useSitecoreContext();

  const resultTemplatesManager = useRef<ResultTemplatesManager<(result: Result) => JSX.Element>>();
  const breadcrumbManager = useRef<HeadlessBreadcrumbManager>();
  const searchBoxController = useRef<HeadlessSearchBox>();
  const resultListController = useRef<HeadlessResultList>();
  const notifyTriggerController = useRef<HeadlessNotifyTrigger>();
  const querySummaryController = useRef<HeadlessQuerySummary>();
  const searchStatusController = useRef<HeadlessSearchStatus>();
  const didYouMeanController = useRef<HeadlessDidYouMean>();
  const pagerController = useRef<HeadlessPager>();
  const facetControllers = useRef<Record<string, { facet: HeadlessFacet }>>();

  const [resultListState, setResultListState] = useState<ResultListState | undefined>(
    resultListController.current?.state
  );

  const resultLayout = getEnum<LayoutType>(fields?.resultLayout);

  const getLayoutClasses = () => {
    switch (resultLayout) {
      case 'list':
        return themeData.classes.listTemplateClasses;
      case 'table':
        return themeData.classes.tableTemplateClasses;
      case 'grid':
        return themeData.classes.gridTemplateClasses;
      default:
        return themeData.classes.listTemplateClasses;
    }
  };

  const isFacetsAvailable = fields?.facets.length > 0;

  const subscribeToStateChangesAndReturnCleanup = (
    unsubscribers: Array<Unsubscribe | undefined>
  ) => {
    unsubscribers?.push(
      resultListController.current?.subscribe(() =>
        setResultListState(resultListController.current?.state)
      )
    );
  };

  const [engine, setEngine] = useState<SearchEngine>();

  const featureToggles = useFeatureToggles();
  const { userAffiliate, pageAffiliate } = useAffiliate();

  useEffect(() => {
    const allunsubscribers: { (): void }[] = [];

    (async () => {
      const _engine = await buildEngineAsync(organizationId);

      if (!_engine) {
        return;
      }

      breadcrumbManager.current = buildBreadcrumbManager(_engine);
      searchBoxController.current = buildSearchBox(_engine, {
        options: {
          clearFilters: false,
          numberOfSuggestions: fields?.searchBox?.fields.showSuggestions.value
            ? fields.searchBox?.fields.numberOfSuggestions.value || 5
            : 0,
          highlightOptions: {
            exactMatchDelimiters: {
              open: '<strong class="text-black font-demi">',
              close: '</strong>',
            },
          },
        },
      });
      buildResultsPerPage(_engine, {
        initialState: {
          numberOfResults: fields?.searchParameters?.fields.numberOfResultsPerPage.value ?? 15,
        },
      });

      resultListController.current = buildResultList(_engine, {
        options:
          resultLayout === 'video'
            ? {
                fieldsToInclude: [
                  ...getFieldsToInclude(
                    props.fields
                      .videoResultItems as unknown as Feature.EnterpriseWeb.Enterprise.Elements.Search.VideoResultItem[],
                    'video'
                  ),
                  'sc_templateid',
                  ...defaultVideoFieldsToInclude,
                ],
              }
            : {},
      });
      notifyTriggerController.current = buildNotifyTrigger(_engine);
      querySummaryController.current = buildQuerySummary(_engine);
      searchStatusController.current = buildSearchStatus(_engine);
      didYouMeanController.current = buildDidYouMean(_engine);
      fields?.pager &&
        (pagerController.current = buildPager(_engine, {
          options: { numberOfPages: getVisiblePagerNumbers(fields.pager.fields) },
        }));

      buildSort(_engine, {
        initialState: {
          criterion: getInitialCriterion(
            fields?.searchParameters?.fields?.sortType,
            fields?.searchParameters?.fields?.sortDirection,
            fields?.searchParameters?.fields?.sortField
          ),
        },
      });
      facetControllers.current = {};
      props.fields?.facets.forEach(
        (facet: Feature.EnterpriseWeb.Enterprise.Elements.Search.Facet) => {
          const options = mapFacetOptions(facet);
          const controller = buildFacet(_engine, { options });
          if (facet.fields.dependsOn) {
            buildFacetConditionsManager(_engine, {
              facetId: controller.state.facetId,
              conditions: [
                {
                  parentFacetId:
                    (facet.fields.dependsOn.fields.uniqueIdentifier as Field<string>)?.value || '',
                  condition: (parentValues) =>
                    parentValues.some((value) => value.state === 'selected'),
                },
              ],
            });
          }
          facetControllers.current![controller.state.facetId] = { facet: controller };
        }
      );

      resultTemplatesManager.current = buildResultTemplatesManager(_engine);

      resultLayout == 'list' &&
        resultTemplatesManager.current.registerTemplates({
          ...ListTemplate(fields.listResultItems, getLayoutClasses()),
        });
      resultLayout == 'table' &&
        resultTemplatesManager.current.registerTemplates({
          ...TableTemplate(fields.columns, getLayoutClasses()),
        });
      resultLayout == 'grid' &&
        resultTemplatesManager.current.registerTemplates({
          ...GridTemplate(
            fields.gridResultItems,
            getLayoutClasses(),
            getEnum<GridStyle>(fields.gridStyle) || 'photo-gallery'
          ),
        });

      const { updateSearchConfiguration } = loadSearchConfigurationActions(_engine);
      _engine.dispatch(
        updateSearchConfiguration({
          pipeline: fields?.searchParameters?.fields.queryPipeline.value,
          searchHub: fields?.searchParameters?.fields.searchHub.value,
        })
      );

      const { updateAdvancedSearchQueries } = loadAdvancedSearchQueryActions(_engine);
      let filterExp = fields?.searchParameters?.fields.filterExpression.value;
      let boostExp = fields?.searchParameters?.fields.boostingExpression.value;

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

      const { updateFacetOptions } = loadFacetOptionsActions(_engine);
      _engine.dispatch(updateFacetOptions({ freezeFacetOrder: true }));

      bindUrlManager(_engine, searchStatusController.current);

      _engine.executeFirstSearch();

      subscribeToStateChangesAndReturnCleanup(allunsubscribers);

      setEngine(_engine);
    })();

    return function cleanup() {
      allunsubscribers.forEach((unsub) => unsub?.());
    };
    // We can ignore the react-hooks/exhaustive-deps warning for this useEffect as it only uses the props which are coming from layout service.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderNoResults = () => {
    const noResultsHeadlineText = `${fields.searchParameters?.fields.noResultsHeadline.value} ${
      engine?.state.query?.q && `for "${engine?.state.query?.q}"`
    }`;

    return (
      <>
        <Headline
          classes={themeData.classes.noResultsHeadline ?? ''}
          useTag="h2"
          fields={{
            headlineText: { value: noResultsHeadlineText },
          }}
        />
        <BodyCopy
          classes={themeData.classes.noResultsBody}
          fields={{ body: fields.searchParameters?.fields.noResultsBody }}
        />
        <TriggeredBanner
          triggeredBannerClasses={themeData.classes.triggeredBannerClasses}
          controller={notifyTriggerController.current!}
        />
      </>
    );
  };

  if (!fields || !engine) {
    return null;
  }

  const heroSearchContentWrapperClass = () => {
    if (fields.headlineText.value == '' && fields.cta1Link.value.href == '') {
      return themeData.classes.heroSearchContentWrapperWithOutBar;
    } else {
      return themeData.classes.heroSearchContentWrapper;
    }
  };

  return (
    <Component variant="lg" padding="px-m lg:px-0" dataComponent="search/searchhero" {...props}>
      {engine && (
        <CoveoEngineContext.Provider value={engine}>
          <div className="col-span-12">
            <div className={themeName === 'rba' ? 'mx-[calc(50%-50vw)] bg-secondary px-m' : ''}>
              <div className={heroSearchContentWrapperClass()}>
                <Headline classes={themeData.classes.headline} {...props} />
                <div className={themeData.classes.ctaWrapper}>
                  <SingleButton {...props} />
                </div>
              </div>
            </div>
          </div>
          {fields.searchBox && (
            <div className="col-span-12">
              <SearchBox
                controller={searchBoxController.current!}
                searchBoxClasses={themeData.classes.searchBoxClasses}
                placeholderText={fields.searchBox.fields.placeholderText}
              />
            </div>
          )}
          {!resultListState!.firstSearchExecuted && (
            <div className="col-span-12">
              <div className="relative py-xxl">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Spinner size={56} />
                </div>
              </div>
            </div>
          )}
          {fields?.tabs?.length > 0 && <CoveoTabs tabs={fields.tabs} />}
          {resultListState?.hasResults ? (
            <>
              {isFacetsAvailable && (
                <div className={classNames('relative col-span-12 hidden ml:col-span-3 ml:block')}>
                  <FacetGroup
                    {...props}
                    themeData={themeData}
                    querySummaryController={querySummaryController.current!}
                    breadcrumbManager={breadcrumbManager.current!}
                    facetControllers={facetControllers.current!}
                  />
                </div>
              )}
              <div
                className={classNames(
                  'relative col-span-12',
                  isFacetsAvailable && 'ml:col-span-9',
                  resultListState.isLoading &&
                    'before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-white before:opacity-50 before:content-[""]'
                )}
              >
                <DidYouMean
                  controller={didYouMeanController.current!}
                  didYouMeanClasses={themeData.classes.didYouMeanClasses}
                  noResultsText={fields?.didYouMean?.fields?.noResultsText}
                  autoCorrectionText={fields?.didYouMean?.fields?.autoCorrectionText}
                  didYouMeanText={fields?.didYouMean?.fields?.didYouMeanText}
                />
                <div
                  className={classNames(
                    'mb-xxs flex items-end justify-between',
                    resultLayout === 'video' && 'ml:!mb-0'
                  )}
                >
                  <QuerySummary
                    controller={querySummaryController.current!}
                    querySummaryClasses={themeData.classes.querySummaryClasses}
                  />
                  {isFacetsAvailable && (
                    <div className="ml:hidden">
                      <FacetGroup
                        {...props}
                        themeData={themeData}
                        querySummaryController={querySummaryController.current!}
                        breadcrumbManager={breadcrumbManager.current!}
                        facetControllers={facetControllers.current!}
                      />
                    </div>
                  )}
                </div>
                <TriggeredBanner
                  triggeredBannerClasses={themeData.classes.triggeredBannerClasses}
                  controller={notifyTriggerController.current!}
                />
                {resultLayout === 'video' ? (
                  <GlobalVideoGallery
                    controller={resultListController.current!}
                    pagerController={pagerController.current!}
                    videoResultItems={
                      props.fields
                        .videoResultItems as unknown as Feature.EnterpriseWeb.Enterprise.Elements.Search.VideoResultItem[]
                    }
                    hasFacets={isFacetsAvailable}
                  />
                ) : (
                  <ResultList
                    controller={resultListController.current!}
                    resultTemplatesManager={resultTemplatesManager.current!}
                    display={resultLayout}
                    columnTitles={fields.columns?.map(
                      (column: Feature.EnterpriseWeb.Enterprise.Elements.Search.ResultColumn) =>
                        column.fields?.displayName.value
                    )}
                    columnClasses={themeData.classes.tableTemplateClasses?.itemTitle}
                    hasFacets={isFacetsAvailable}
                    gridLightbox={
                      resultLayout === 'grid' &&
                      getEnum<GridStyle>(fields.gridStyle) === 'photo-gallery'
                    }
                  />
                )}
                {resultLayout !== 'video' && pagerController && (
                  <Pager
                    pagerClasses={themeData.classes.pagerClasses}
                    controller={pagerController.current!}
                  />
                )}
              </div>
            </>
          ) : (
            !resultListState!.isLoading && <div className="col-span-12">{renderNoResults()}</div>
          )}
        </CoveoEngineContext.Provider>
      )}
    </Component>
  );
};

export default Search;
