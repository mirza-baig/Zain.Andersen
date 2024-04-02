// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { useSitecoreContext, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import {
  SearchEngine,
  SearchBox as HeadlessSearchBox,
  ResultList as HeadlessResultList,
  QuerySummary as HeadlessQuerySummary,
  SearchStatus as HeadlessSearchStatus,
  BreadcrumbManager as HeadlessBreadcrumbManager,
  Facet as HeadlessFacet,
  buildBreadcrumbManager,
  buildFacet,
  buildFacetConditionsManager,
  buildQuerySummary,
  buildResultList,
  buildResultsPerPage,
  buildSearchBox,
  buildSearchStatus,
  buildSort,
  loadAdvancedSearchQueryActions,
  loadFacetOptionsActions,
  loadSearchConfigurationActions,
  ResultListState,
  Unsubscribe,
} from '@coveo/headless';
// Components
import { Component } from 'src/helpers/Component';
import { ComponentProps } from 'lib/types/component-props';
import { useEffect, useRef, useState } from 'react';
import {
  CoveoEngineContext,
  buildEngineAsync,
  getInitialCriterion,
  mapFacetOptions,
} from 'lib/coveo';
import { getFieldsToInclude, replaceTokenInCoveoExpression } from 'lib/coveo/utils';
import { useAffiliate } from 'lib/context/AffiliateContext';
import { useFeatureToggles } from 'lib/context/FeatureToggleContext';
import {
  BreadcrumbManager,
  FacetGroup,
  QuerySummary,
  SearchBox,
  bindUrlManager,
} from 'src/helpers/Coveo';
import { useTheme } from 'lib/context/ThemeContext';
import { SearchTheme } from 'components/search/Search/Search.theme';
import SingleButton from 'src/helpers/SingleButton/SingleButton';
import { Headline } from 'src/helpers/Headline';
import { Spinner } from 'src/helpers/Spinner';
import classNames from 'classnames';
import { JobCard } from 'src/helpers/Coveo/JobCard/JobCard';
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { useRouter } from 'next/router';
import { SummaryTypes } from 'src/helpers/Coveo/QuerySummary/QuerySummary';
import { BodyCopy } from 'src/helpers/BodyCopy';
import { Field } from 'lib/jss21.2.1/layout';

const organizationId = process.env.NEXT_PUBLIC_EW_COVEO_ORGANIZATION_ID || '';
const farmName = process.env.NEXT_PUBLIC_EW_COVEO_FARM_NAME;

export type JobSearchProps =
  Feature.EnterpriseWeb.RenewalByAndersen.Components.Affiliates.Jobs.JobSearch.JobSearch &
    ComponentProps;

const JobSearch = (props: JobSearchProps) => {
  const { fields } = props;

  //#region controllers refs
  const breadcrumbManager = useRef<HeadlessBreadcrumbManager>();
  const searchBoxController = useRef<HeadlessSearchBox>();
  const resultListController = useRef<HeadlessResultList>();
  const querySummaryController = useRef<HeadlessQuerySummary>();
  const searchStatusController = useRef<HeadlessSearchStatus>();
  const facetControllers = useRef<Record<string, { facet: HeadlessFacet }>>();
  //#endregion

  //#region states
  const [engine, setEngine] = useState<SearchEngine>();
  const [resultListState, setResultListState] = useState<ResultListState | undefined>(
    resultListController.current?.state
  );
  //#endregion

  //#region customHooks and contexts
  const { themeName, themeData } = useTheme(SearchTheme);
  const featureToggles = useFeatureToggles();
  const { userAffiliate, pageAffiliate } = useAffiliate();
  const { sitecoreContext } = useSitecoreContext();
  const router = useRouter();
  //#endregion

  const jobStateUniqueIdentifier =
    ((fields?.jobStateFacet?.fields?.uniqueIdentifier as Field<string>)?.value as string) ||
    'location';

  //#region useEffects
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
          numberOfSuggestions: fields?.searchBox?.fields.showSuggestions?.value
            ? fields.searchBox?.fields.numberOfSuggestions?.value || 5
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
          numberOfResults: fields?.searchParameters?.fields.numberOfResultsPerPage?.value ?? 15,
        },
      });

      resultListController.current = buildResultList(_engine, {
        options: {
          fieldsToInclude: [
            ...getFieldsToInclude(
              [
                props.fields
                  ?.resultItem as unknown as Feature.EnterpriseWeb.RenewalByAndersen.Elements.Search.JobResultItem,
              ],
              'list'
            ),
            'sc_templateid',
            'ew_jobdetailspageurl',
          ],
        },
      });

      querySummaryController.current = buildQuerySummary(_engine);
      searchStatusController.current = buildSearchStatus(_engine);

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
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          facetControllers.current![controller.state.facetId] = { facet: controller };
        }
      );

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

      bindUrlManager(_engine);

      _engine.executeFirstSearch();

      subscribeToStateChangesAndReturnCleanup(allunsubscribers);

      setEngine(_engine);
    })();

    return function cleanup() {
      allunsubscribers.forEach((unsub) => unsub?.());
    };
    // All the dependencies which are shown in react-hooks/exhaustive-deps are coming from layout directly which are fixed.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Need to select the current state once router completed the fetching data, otherwise it'll override the hash url.
    userAffiliate.affiliateId !== '0' &&
      userAffiliate?.state?.fullName &&
      router?.isReady &&
      !facetControllers.current?.[jobStateUniqueIdentifier]?.facet?.state?.hasActiveValues &&
      facetControllers.current?.[jobStateUniqueIdentifier]?.facet?.toggleSelect({
        state: 'selected',
        value: userAffiliate?.state?.fullName,
        numberOfResults: 1,
      });
    // 'fields?.jobStateFacet?.fields.uniqueIdentifier' can be ignored as dependency as its coming from layout service.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router?.isReady, facetControllers.current?.[jobStateUniqueIdentifier]?.facet?.state.enabled]);
  //#endregion

  //#region utils
  const subscribeToStateChangesAndReturnCleanup = (
    unsubscribers: Array<Unsubscribe | undefined>
  ) => {
    unsubscribers?.push(
      resultListController.current?.subscribe(() =>
        setResultListState(resultListController.current?.state)
      )
    );
  };

  const heroSearchContentWrapperClass = () => {
    if (fields?.headlineText.value == '' && fields.cta1Link.value.href == '') {
      return themeData.classes.heroSearchContentWrapperWithOutBar;
    } else {
      return themeData.classes.heroSearchContentWrapper;
    }
  };
  //#endregion

  if (!fields) {
    return <></>;
  }

  const isFacetsAvailable = fields?.facets.length > 0;

  const renderNoResults = () => {
    return (
      <>
        <Headline
          classes="text-sm-xs font-heavy ml:font-medium ml:text-s font-serif ml:font-sans mb-s"
          useTag="h2"
          fields={{
            headlineText: { value: fields.searchParameters?.fields.noResultsHeadline.value },
          }}
        />
        <BodyCopy
          classes={themeData.classes.noResultsBody}
          fields={{ body: fields.searchParameters?.fields.noResultsBody }}
        />
        <Placeholder name="form" rendering={props.rendering} />
      </>
    );
  };

  return (
    <Component variant="lg" padding="px-m lg:px-0" dataComponent="affiliate/jobsearch" {...props}>
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
          {fields.searchBox && searchBoxController.current && (
            <div className="col-span-12">
              <SearchBox
                controller={searchBoxController.current}
                searchBoxClasses={themeData.classes.searchBoxClasses}
                placeholderText={fields.searchBox.fields.placeholderText}
              />
            </div>
          )}
          {(!router?.isReady || !resultListState?.firstSearchExecuted) && (
            <div className="col-span-12">
              <div className="relative py-xxl">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Spinner size={56} />
                </div>
              </div>
            </div>
          )}
          {router?.isReady && resultListState?.hasResults ? (
            <>
              {/* Optional heading */}
              {fields?.searchResultsHeadline?.value && (
                <div className="col-span-12">
                  <Headline
                    classes="text-m font-medium"
                    useTag="h2"
                    fields={{
                      headlineText: fields.searchResultsHeadline,
                    }}
                  />
                </div>
              )}
              {querySummaryController.current && (
                <div className="col-span-12">
                  <QuerySummary
                    controller={querySummaryController.current}
                    querySummaryClasses={themeData.classes.querySummaryClasses}
                    summaryType={SummaryTypes.RbAJobQuery}
                  />
                </div>
              )}
              {isFacetsAvailable && (
                <>
                  {breadcrumbManager.current?.state?.hasBreadcrumbs && (
                    <div className="col-span-12">
                      <BreadcrumbManager
                        controller={breadcrumbManager.current}
                        breadcrumbClasses={themeData.classes.breadcrumbClasses}
                        facetSectionHeading={fields?.searchParameters?.fields?.facetSectionHeading}
                        clearAllLabel={fields?.searchParameters?.fields?.clearAllLabel}
                        isInlineBreadcrumb={false}
                      />
                    </div>
                  )}
                  <div className={classNames('relative col-span-12 hidden ml:col-span-3 ml:block')}>
                    <FacetGroup
                      {...props}
                      themeData={themeData}
                      querySummaryController={querySummaryController.current}
                      breadcrumbManager={breadcrumbManager.current}
                      facetControllers={facetControllers.current}
                      doesContainInlineBreadcrumb={false}
                    />
                  </div>
                </>
              )}
              <div
                className={classNames(
                  'relative col-span-12',
                  isFacetsAvailable && 'ml:col-span-9',
                  (resultListState.isLoading || !router.isReady) &&
                    'before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-white before:opacity-50 before:content-[""]'
                )}
              >
                <div className="mb-xxs flex items-end justify-between">
                  {isFacetsAvailable && (
                    <div className="w-full ml:hidden">
                      <FacetGroup
                        {...props}
                        themeData={themeData}
                        querySummaryController={querySummaryController.current}
                        breadcrumbManager={breadcrumbManager.current}
                        facetControllers={facetControllers.current}
                        isFullWidthFilterButton
                      />
                    </div>
                  )}
                </div>
                <ul className="flex flex-col md:mt-[21px]">
                  {resultListState.results.map((result) => {
                    return (
                      <JobCard
                        jobResultItems={
                          props.fields
                            .resultItem as unknown as Feature.EnterpriseWeb.RenewalByAndersen.Elements.Search.JobResultItem
                        }
                        key={result.uniqueId}
                        result={result}
                      />
                    );
                  })}
                </ul>
                {resultListState.moreResultsAvailable && (
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      resultListController.current?.fetchMoreResults();
                    }}
                  >
                    <SingleButton
                      classes={{ wrapper: 'justify-center mt-[14px]' }}
                      fields={{
                        cta1Link: {
                          value: {
                            text: 'Load more',
                            href: '',
                          },
                        },
                        cta1AriaLabel: {
                          value: 'Load more',
                        },
                        cta1ModalLinkText: {
                          value: '',
                        },
                        cta1Style: {
                          id: '',
                          url: '',
                          name: 'Link',
                          displayName: 'Link',
                          fields: {
                            Value: {
                              value: 'secondary',
                            },
                          },
                          templateId: '',
                          templateName: 'Enum',
                        },
                        cta1Icon: {
                          id: '',
                          url: '',
                          name: 'Arrow',
                          displayName: 'Arrow',
                          fields: {
                            Value: {
                              value: 'dropdown-arrow',
                            },
                          },
                          templateId: '',
                          templateName: 'Enum',
                        },
                      }}
                    />
                  </div>
                )}
              </div>
            </>
          ) : (
            resultListState?.firstSearchExecuted &&
            !resultListState.hasResults && <div className="col-span-12">{renderNoResults()}</div>
          )}
        </CoveoEngineContext.Provider>
      )}
    </Component>
  );
};

export default withDatasourceCheck()<JobSearchProps>(JobSearch);
