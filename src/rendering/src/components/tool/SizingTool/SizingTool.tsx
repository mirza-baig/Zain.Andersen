// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { Field, useSitecoreContext, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
// Components
import { Component } from 'src/helpers/Component';
import { ComponentProps } from 'lib/types/component-props';
import { useEffect, useRef, useState } from 'react';
import {
  ResultList as HeadlessResultList,
  BreadcrumbManager as HeadlessBreadcrumbManager,
  QuerySummary as HeadlessQuerySummary,
  SearchStatus as HeadlessSearchStatus,
  Facet as HeadlessFacet,
  Result,
  ResultListState,
  ResultTemplatesManager,
  SearchEngine,
  buildBreadcrumbManager,
  buildResultList,
  buildResultTemplatesManager,
  loadAdvancedSearchQueryActions,
  buildResultsPerPage,
  buildSort,
  buildSearchStatus,
  buildQuerySummary,
  buildFacet,
  buildFacetConditionsManager,
  loadSearchConfigurationActions,
  loadFacetOptionsActions,
  Unsubscribe,
} from '@coveo/headless';
import {
  CoveoEngineContext,
  buildEngineAsync,
  getInitialCriterion,
  mapFacetOptions,
} from 'lib/coveo';
import { Headline } from 'src/helpers/Headline';
import { BodyCopy } from 'src/helpers/BodyCopy';
import { DimensionsFacet, ProductTypeFacet } from './SizingTool.helper';
import { FacetGroup, ResultList, bindUrlManager } from 'src/helpers/Coveo';
import { useTheme } from 'lib/context/ThemeContext';
import { SizingToolTheme } from './SizingTool.theme';
import classNames from 'classnames';
import { Subheadline } from 'src/helpers/Subheadline';
import { Spinner } from 'src/helpers/Spinner';
import SizingToolTemplate from './SizingTool.ResultTemplate.helper';
import { replaceTokenInCoveoExpression } from 'lib/coveo/utils';
import { useAffiliate } from 'lib/context/AffiliateContext';
import { useFeatureToggles } from 'lib/context/FeatureToggleContext';

// TODO: Clean this up
const organizationId = process.env.NEXT_PUBLIC_EW_COVEO_ORGANIZATION_ID || '';
const farmName = process.env.NEXT_PUBLIC_EW_COVEO_FARM_NAME;

export type SizingToolProps = Feature.EnterpriseWeb.AndersenWindows.Components.Tool.SizingTool & {
  fields?: {
    pager: Feature.EnterpriseWeb.Enterprise.Elements.Search.Pager;
    facets: Array<Feature.EnterpriseWeb.Enterprise.Elements.Search.Facet>;
    searchParameters: Feature.EnterpriseWeb.Enterprise.Elements.Search.SearchParameters;
    productTypeFacet: Feature.EnterpriseWeb.Enterprise.Elements.Search.Facet;
    productDimensionsFacet: Feature.EnterpriseWeb.Enterprise.Elements.Search.Facet;
  };
} & ComponentProps;
const SizingTool = (props: SizingToolProps) => {
  const { fields } = props;
  const { sitecoreContext } = useSitecoreContext();
  const { themeData } = useTheme(SizingToolTheme);

  const resultTemplatesManager = useRef<ResultTemplatesManager<(result: Result) => JSX.Element>>();
  const resultListController = useRef<HeadlessResultList>();
  const breadcrumbManager = useRef<HeadlessBreadcrumbManager>();
  const querySummaryController = useRef<HeadlessQuerySummary>();
  const searchStatusController = useRef<HeadlessSearchStatus>();
  const facetControllers = useRef<Record<string, { facet: HeadlessFacet }>>();

  const [resultListState, setResultListState] = useState<ResultListState | undefined>(
    resultListController.current?.state
  );

  const [isProductTypeSelected, setIsProductTypeSelected] = useState(false);
  const [isDimensionsSelected, setIsDimensionsSelected] = useState(false);

  const isFacetsAvailable = props.fields?.facets?.length && props.fields.facets.length > 0;

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

      const { updateAdvancedSearchQueries } = loadAdvancedSearchQueryActions(_engine);
      let filterExp = fields?.searchParameters?.filterExpression?.value;
      let boostExp = fields?.searchParameters?.boostingExpression?.value;

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

      resultTemplatesManager.current = buildResultTemplatesManager(_engine);
      breadcrumbManager.current = buildBreadcrumbManager(_engine);
      buildResultsPerPage(_engine, {
        initialState: {
          numberOfResults: fields?.searchParameters?.fields?.numberOfResultsPerPage?.value ?? 15,
        },
      });
      resultListController.current = buildResultList(_engine);
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

      // query summary is needed for facets mobile version (showing filtered results count in cta)
      querySummaryController.current = buildQuerySummary(_engine);

      //   Normal Facets
      facetControllers.current = {};
      props.fields?.facets.forEach(
        (facet: Feature.EnterpriseWeb.Enterprise.Elements.Search.Facet) => {
          const options = mapFacetOptions(facet);
          const controller = buildFacet(_engine, { options });
          if (facet.fields.dependsOn) {
            //const facetConditionsManager =
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
            // return () => {
            //   facetConditionsManager.stopWatching();
            // };
          }
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          facetControllers.current![controller.state.facetId] = { facet: controller };
        }
      );

      //  Product Type Facets ( for Door / Window values)
      facetControllers.current['productTypeFacet'] = {
        facet:
          props.fields?.productTypeFacet &&
          buildFacet(_engine, {
            options: mapFacetOptions(props.fields?.productTypeFacet),
          }),
      };

      //  Product Dimension Facets ( for Door / Window values)
      facetControllers.current['productDimensionsFacet'] = {
        facet:
          props.fields?.productDimensionsFacet &&
          buildFacet(_engine, {
            options: mapFacetOptions(props.fields?.productDimensionsFacet),
          }),
      };

      resultTemplatesManager.current.registerTemplates({
        ...SizingToolTemplate(props),
      });

      const { updateSearchConfiguration } = loadSearchConfigurationActions(_engine);
      _engine.dispatch(
        updateSearchConfiguration({
          pipeline: fields?.searchParameters?.fields.queryPipeline.value,
          searchHub: fields?.searchParameters?.fields.searchHub.value,
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

    // Suggested deps "fields" are coming directly from layout service. We can ignore react-hooks/exhaustive-deps warning.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [featureToggles, pageAffiliate, useAffiliate]);

  const renderNoResults = () => {
    const noResultsHeadlineText = `${fields.searchParameters.fields.noResultsHeadline.value} ${
      engine?.state.query?.q && `for "${engine?.state.query?.q}"`
    }`;

    if (resultListState?.hasResults) {
      return <></>;
    }

    return (
      <>
        <Headline
          classes=""
          useTag="h2"
          fields={{
            headlineText: { value: noResultsHeadlineText },
          }}
        />
        <BodyCopy
          classes=""
          fields={{ body: fields?.searchParameters.fields.noResultsBody || { value: '' } }}
        />
      </>
    );
  };

  if (!engine) {
    return null;
  }

  return (
    <Component variant="lg" gap="gap-x-s md:gap-x-s" dataComponent="tool/sizingtool" {...props}>
      <CoveoEngineContext.Provider value={engine}>
        {!resultListState?.firstSearchExecuted ? (
          <div className="col-span-12">
            <div className="relative py-xxl">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Spinner size={56} />
              </div>
            </div>
          </div>
        ) : (
          <>
            {facetControllers.current && (
              <>
                <ProductTypeFacet
                  controller={facetControllers.current.productTypeFacet.facet}
                  setIsProductTypeSelected={setIsProductTypeSelected}
                  {...props}
                />

                <DimensionsFacet
                  isProductTypeSelected={isProductTypeSelected}
                  controller={facetControllers.current.productDimensionsFacet.facet}
                  setIsDimensionsSelected={setIsDimensionsSelected}
                  {...props}
                />
              </>
            )}
            {isProductTypeSelected && isDimensionsSelected && (
              <>
                {isFacetsAvailable && (
                  <div className="col-span-12 mt-[6px] hidden ml:col-span-3 ml:block">
                    <FacetGroup
                      {...props}
                      themeData={themeData}
                      querySummaryController={querySummaryController.current}
                      breadcrumbManager={breadcrumbManager.current}
                      facetControllers={facetControllers.current}
                    />
                  </div>
                )}
                <div className={classNames('col-span-12', isFacetsAvailable && 'ml:col-span-9')}>
                  <div className="flex items-start  justify-between">
                    <Subheadline
                      classes="font-sans font-heavy text-s mb-m ml:mb-xxs"
                      useTag="div"
                      fields={{
                        subheadlineText: props.fields?.resultsLabel || { value: '' },
                      }}
                    />
                    {isFacetsAvailable && (
                      <div className="ml:hidden">
                        <FacetGroup
                          {...props}
                          themeData={themeData}
                          querySummaryController={querySummaryController.current}
                          breadcrumbManager={breadcrumbManager.current}
                          facetControllers={facetControllers.current}
                        />
                      </div>
                    )}
                  </div>

                  {renderNoResults()}

                  {resultListController.current && resultTemplatesManager.current && (
                    <ul
                      className={classNames(
                        'relative grid gap-s ml:grid-cols-12 ml:gap-s',
                        resultListState.isLoading &&
                          'before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-white before:opacity-50 before:content-[""]'
                      )}
                    >
                      <ResultList
                        display={'raw'}
                        gridLightbox={false}
                        hasFacets={true}
                        controller={resultListController.current}
                        resultTemplatesManager={resultTemplatesManager.current}
                      />
                    </ul>
                  )}
                </div>
              </>
            )}
          </>
        )}
      </CoveoEngineContext.Provider>
    </Component>
  );
};

export default withDatasourceCheck()<SizingToolProps>(SizingTool);
