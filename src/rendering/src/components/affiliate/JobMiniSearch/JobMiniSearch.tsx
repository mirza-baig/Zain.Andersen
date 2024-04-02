// Global
import classNames from 'classnames';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useSitecoreContext, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { getCookie, setCookie } from 'cookies-next';

// Contexts
import { useFeatureToggles } from 'lib/context/FeatureToggleContext';
import { useAffiliate } from 'lib/context/AffiliateContext';
import { useTheme } from 'lib/context/ThemeContext';

// Helpers
import { Headline } from 'src/helpers/Headline';
import { JobCard } from 'src/helpers/Coveo/JobCard/JobCard';
import { SvgIcon } from 'src/helpers/SvgIcon';
import { BodyCopy } from 'src/helpers/BodyCopy';
import { Subheadline } from 'src/helpers/Subheadline';
import SingleButton from 'src/helpers/SingleButton/SingleButton';
import { Component } from 'src/helpers/Component';

// Coveo Utils
import { serialize } from 'src/helpers/Coveo/UrlManager/UrlManager';
import { bindUrlManager } from 'src/helpers/Coveo';
import {
  ResultList as HeadlessResultList,
  ResultListState,
  SearchEngine,
  buildResultsPerPage,
  buildResultList,
  buildSort,
  loadSearchConfigurationActions,
  loadAdvancedSearchQueryActions,
  loadSearchActions,
  loadSearchAnalyticsActions,
  SearchParameters,
  Unsubscribe,
} from '@coveo/headless';
import { CoveoEngineContext, buildEngineAsync, getInitialCriterion } from 'lib/coveo';
import { getFieldsToInclude, replaceTokenInCoveoExpression } from 'lib/coveo/utils';

// Utils and Others
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { JobMiniSearchTheme } from './JobMiniSearch.theme';
import { replacePlaceholders } from 'lib/forms/FormFieldUtils';

export type JobMiniSearchProps =
  Feature.EnterpriseWeb.RenewalByAndersen.Components.Affiliates.Jobs.JobMiniSearch.JobMiniSearch;

const organizationId = process.env.NEXT_PUBLIC_EW_COVEO_ORGANIZATION_ID || '';
const farmName = process.env.NEXT_PUBLIC_EW_COVEO_FARM_NAME;
const USER_CURRENT_STATE_COOKIE = 'userCurrentState';

const JobMiniSearch = (props: JobMiniSearchProps) => {
  const { themeData } = useTheme(JobMiniSearchTheme);
  const { sitecoreContext } = useSitecoreContext();
  const resultListController = useRef<HeadlessResultList>();
  const featureToggles = useFeatureToggles();
  const { userAffiliate, pageAffiliate } = useAffiliate();

  const [showDropdown, setShowDropdown] = useState(false);
  const [engine, setEngine] = useState<SearchEngine>();
  const [currentState, setCurrentState] = useState<string>('');
  const [resultListState, setResultListState] = useState<ResultListState | undefined>(
    resultListController.current?.state
  );

  const JOB_CATEGORY_NAME = sitecoreContext?.jobDetails?.jobCategory?.categoryName;

  const dispatchAdvancedSearchQueries = useCallback(
    (state: string, _searchEngine?: SearchEngine) => {
      if (!_searchEngine) {
        return;
      }

      const { updateAdvancedSearchQueries } = loadAdvancedSearchQueryActions(_searchEngine);

      let filterExp = props?.fields?.filterExpression?.value;
      let boostExp = props?.fields?.boostingExpression?.value;

      boostExp = replaceTokenInCoveoExpression(
        boostExp,
        userAffiliate?.affiliateId,
        pageAffiliate?.affiliateId,
        featureToggles,
        JOB_CATEGORY_NAME
      );

      filterExp = replaceTokenInCoveoExpression(
        filterExp,
        userAffiliate?.affiliateId,
        pageAffiliate?.affiliateId,
        featureToggles,
        JOB_CATEGORY_NAME
      );

      const advancedQueries = `${boostExp || ''} ${filterExp || ''} ${
        props?.fields?.filterJobsByState?.value ? `(@ew_jobstate_fullname=${state})` : ''
      }`.trim();

      _searchEngine.dispatch(
        updateAdvancedSearchQueries({
          cq: `(@ew_excludefromsearch=="false") AND (@ew_sitelanguage==${
            sitecoreContext.language || 'en'
          }) AND (@source==EnterpriseWeb-${farmName}) `,
          aq: advancedQueries || '',
        })
      );
    },
    // suggested dependencies are either coming from layout directly or the context which triggers reload so we can ignore the deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    const allunsubscribers: { (): void }[] = [];

    (async () => {
      const _engine = await buildEngineAsync(organizationId);

      if (!_engine) {
        return;
      }

      buildResultsPerPage(_engine, {
        initialState: {
          numberOfResults: props?.fields?.numberOfJobCards?.value ?? 3,
        },
      });

      resultListController.current = buildResultList(_engine, {
        options: {
          fieldsToInclude: [
            ...getFieldsToInclude(
              [
                props.fields
                  .jobResultItem as unknown as Feature.EnterpriseWeb.RenewalByAndersen.Elements.Search.JobResultItem,
              ],
              'list'
            ),
            'sc_templateid',
            'ew_jobdetailspageurl',
          ],
        },
      });

      buildSort(_engine, {
        initialState: {
          criterion: getInitialCriterion(
            props?.fields?.sortType,
            props?.fields?.sortDirection,
            props?.fields?.sortField
          ),
        },
      });

      const { updateSearchConfiguration } = loadSearchConfigurationActions(_engine);

      _engine.dispatch(
        updateSearchConfiguration({
          pipeline: props?.fields?.queryPipeline?.value,
          searchHub: props?.fields?.searchHub?.value,
        })
      );

      const _currentState =
        (getCookie(USER_CURRENT_STATE_COOKIE) as string) || userAffiliate.state.fullName;

      setCurrentState(_currentState);

      dispatchAdvancedSearchQueries(_currentState, _engine);

      bindUrlManager(_engine);

      _engine.executeFirstSearch();

      subscribeToStateChangesAndReturnCleanup(allunsubscribers);

      setEngine(_engine);
    })();

    return function cleanup() {
      allunsubscribers.forEach((unsub) => unsub?.());
    };
    /* we can ignore 'currentState' from deps as we only want to execute this effect once on first load
     and 'props' are coming from layout data  */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatchAdvancedSearchQueries]);

  if (!props.fields) {
    return <></>;
  }

  const subscribeToStateChangesAndReturnCleanup = (
    unsubscribers: Array<Unsubscribe | undefined>
  ) => {
    unsubscribers?.push(
      resultListController.current?.subscribe(() =>
        setResultListState(resultListController.current?.state)
      )
    );
  };

  function renderLocationSwitcher() {
    return (
      <div
        className={classNames(themeData.classes.locationSwitchWrapper, {
          'flex-col gap-y-s md:flex-row': showDropdown,
        })}
      >
        {/* Swich location Text with icon */}
        <div className={themeData.classes.locationText}>
          <span className={themeData.classes.locationIcon}>
            <svg
              width="12"
              height="16"
              viewBox="0 0 12 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.9999 0C2.9039 0 0.399902 2.504 0.399902 5.6C0.399902 9.8 5.9999 16 5.9999 16C5.9999 16 11.5999 9.8 11.5999 5.6C11.5999 2.504 9.0959 0 5.9999 0ZM5.9999 7.6C4.8959 7.6 3.9999 6.704 3.9999 5.6C3.9999 4.496 4.8959 3.6 5.9999 3.6C7.1039 3.6 7.9999 4.496 7.9999 5.6C7.9999 6.704 7.1039 7.6 5.9999 7.6Z"
                fill="#6CC14C"
              />
            </svg>
          </span>

          <span>You are viewing jobs in</span>
        </div>

        {/* Location state dropdown */}
        {showDropdown ? (
          <div className="relative w-full md:w-auto md:max-w-[325px] md:flex-grow">
            <select
              onChange={(e) => {
                if (engine) {
                  dispatchAdvancedSearchQueries(e.target.value, engine);
                  const { executeSearch } = loadSearchActions(engine);
                  const searchAnalyticsActions = loadSearchAnalyticsActions(engine);
                  engine?.dispatch(executeSearch(searchAnalyticsActions.logTriggerExecute()));
                }
                setCurrentState(e.target.value);
                setCookie(USER_CURRENT_STATE_COOKIE, e.target.value);
              }}
              value={currentState}
              className={themeData.classes.locationDropdown}
              disabled={resultListState?.isLoading}
            >
              {props?.fields?.states?.children?.map(
                (state: Feature.EnterpriseWeb.Enterprise.Data.Geography.State) => {
                  const stateValue = state?.fields?.FullName?.value;
                  return (
                    <option key={stateValue} value={stateValue}>
                      {stateValue}
                    </option>
                  );
                }
              )}
            </select>
            <SvgIcon
              icon="dropdown-arrow"
              className={classNames(
                'pointer-events-none absolute bottom-1/2 right-[12px] z-[0] translate-y-1/2',
                {
                  'text-gray': resultListState?.isLoading,
                }
              )}
            />
          </div>
        ) : (
          <span className={themeData.classes.currentState}>{currentState}</span>
        )}

        {/* Toggle Location dropdown */}
        <button
          className={themeData.classes.dropdownToggle}
          onClick={() => setShowDropdown(!showDropdown)}
        >
          {showDropdown ? 'Cancel' : 'Change'}
        </button>
      </div>
    );
  }

  function getCtaPropsWithHash() {
    const jobCategoryFacetIdentifier =
      props?.fields?.jobCategoryFacet?.fields?.uniqueIdentifier?.value;
    const jobStateFacetIdentifier = props?.fields?.jobStateFacet?.fields?.uniqueIdentifier?.value;

    const isCategoryAvailable = JOB_CATEGORY_NAME && jobCategoryFacetIdentifier;
    const isStateAvailable = jobStateFacetIdentifier && currentState;

    if (!isCategoryAvailable && !isStateAvailable) {
      return props;
    }

    const { cta1Link } = props?.fields;
    const hashParams = cta1Link?.value?.anchor;

    const facetParams = {
      f: {
        [jobCategoryFacetIdentifier]: [JOB_CATEGORY_NAME],
        [jobStateFacetIdentifier]: [currentState],
      },
    };

    // if any of the property type is undefined, remove it
    Object.keys(facetParams.f).forEach(
      (k: unknown) =>
        k === 'undefined' && delete facetParams.f[k as unknown as keyof typeof facetParams.f]
    );

    const facetAnchor = serialize(facetParams as SearchParameters);

    return {
      ...props,
      fields: {
        cta1Link: {
          value: {
            ...cta1Link.value,
            anchor: hashParams ? `${hashParams}&${facetAnchor}` : facetAnchor,
            text: replacePlaceholders(cta1Link?.value?.text, {
              jobCategory: JOB_CATEGORY_NAME || '',
            }),
          },
        },
      },
    };
  }

  if (
    !props?.fields?.displayNoResultsBody?.value &&
    resultListState?.firstSearchExecuted &&
    !resultListState?.hasResults &&
    !resultListState?.isLoading
  ) {
    return <></>;
  }

  return (
    <Component variant="lg" dataComponent="affiliate/jobminisearch" {...props}>
      {engine && (
        <CoveoEngineContext.Provider value={engine}>
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <Headline classes={themeData.classes.headline} {...props} />
            <Subheadline classes={themeData.classes.subheadline} {...props} />

            {props?.fields?.filterJobsByState?.value && renderLocationSwitcher()}

            {resultListState?.hasResults ? (
              <ul
                className={classNames('relative flex flex-col md:mt-[21px]', {
                  'before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:w-full before:bg-white before:opacity-50 before:content-[""]':
                    resultListState?.isLoading,
                })}
              >
                {resultListState?.results?.map((result) => {
                  return (
                    <JobCard
                      jobResultItems={
                        props.fields
                          .jobResultItem as unknown as Feature.EnterpriseWeb.RenewalByAndersen.Elements.Search.JobResultItem
                      }
                      key={result.uniqueId}
                      result={result}
                    />
                  );
                })}
              </ul>
            ) : (
              !resultListState?.isLoading && (
                <BodyCopy
                  refer=""
                  classes={themeData.classes.noResultsBody}
                  fields={{ body: props?.fields?.noResultsBody }}
                />
              )
            )}

            <SingleButton classes={themeData.classes.singleButton} {...getCtaPropsWithHash()} />
          </div>
        </CoveoEngineContext.Provider>
      )}
    </Component>
  );
};

export default withDatasourceCheck()<JobMiniSearchProps>(JobMiniSearch);
