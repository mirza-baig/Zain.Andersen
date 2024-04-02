import {
  loadSearchConfigurationActions,
  SearchEngine,
  StandaloneSearchBox as HeadlessStandaloneSearchBox,
  InstantResults as HeadlessInstantResults,
  loadAdvancedSearchQueryActions,
  buildInstantResults,
  buildStandaloneSearchBox,
  Unsubscribe,
} from '@coveo/headless';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Field, LinkField, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { twMerge } from 'tailwind-merge';

import { useTheme } from 'lib/context/ThemeContext';
import { FunctionComponent, SetStateAction, useEffect, useRef, useState } from 'react';
import { StandaloneSearchBoxTheme } from './StandaloneSearchBox.theme';
import { buildEngine } from 'lib/coveo';
import { replaceTokenInCoveoExpression } from 'lib/coveo/utils';
import { useAffiliate } from 'lib/context/AffiliateContext';
import { useFeatureToggles } from 'lib/context/FeatureToggleContext';

// TODO: Clean this up
const organizationId = process.env.NEXT_PUBLIC_EW_COVEO_ORGANIZATION_ID || '';
const farmName = process.env.NEXT_PUBLIC_EW_COVEO_FARM_NAME;

export type StandaloneSearchBoxProps = {
  standaloneSearchBoxClasses?: {
    [property: string]: string;
  };
  redirectionUrl: LinkField;
  showSuggestions: Field<boolean>;
  numberOfSuggestions: Field<number>;
  queryPipeline: Field<string>;
  searchHub: Field<string>;
  filterExpression: Field<string>;
  boostingExpression: Field<string>;
  suggestedResultsLabel: Field<string>;
  placeholderText: Field<string>;
  toggleSearchBoxVisibility?: React.Dispatch<SetStateAction<boolean>>;
  coveoAccessToken: string;
};

export const StandaloneSearchBox: FunctionComponent<StandaloneSearchBoxProps> = (props) => {
  const { themeName, themeData } = useTheme(StandaloneSearchBoxTheme);

  const [redirectionTrigggered, setRedirectionTrigggered] = useState(false);

  const standaloneSearchBoxController = useRef<HeadlessStandaloneSearchBox>();
  const instantResultsController = useRef<HeadlessInstantResults>();

  const [standaloneSearchBoxState, setStandaloneSearchBoxState] = useState(
    standaloneSearchBoxController.current?.state
  );

  const [instantResultsState, setInstantResultsState] = useState(
    instantResultsController.current?.state
  );

  const { sitecoreContext } = useSitecoreContext();
  const router = useRouter();

  const [focused, setFocused] = useState(false);

  const { redirectionUrl, suggestedResultsLabel, placeholderText, toggleSearchBoxVisibility } =
    props;

  const [engine, setEngine] = useState<SearchEngine>();

  const featureToggles = useFeatureToggles();
  const { userAffiliate, pageAffiliate } = useAffiliate();

  useEffect(() => {
    const allunsubscribers: { (): void }[] = [];

    const _engine = buildEngine(props.coveoAccessToken, organizationId);

    const {
      showSuggestions,
      numberOfSuggestions,
      queryPipeline,
      searchHub,
      filterExpression,
      boostingExpression,
    } = props;

    standaloneSearchBoxController.current =
      redirectionUrl &&
      buildStandaloneSearchBox(_engine, {
        options: {
          id: 'standaloneSearchBox',
          redirectionUrl: redirectionUrl?.value.href ?? '',
          numberOfSuggestions: showSuggestions?.value ? numberOfSuggestions.value : 0,
          highlightOptions: {
            exactMatchDelimiters: {
              open: '<strong class="text-black">',
              close: '</strong>',
            },
          },
        },
      });

    instantResultsController.current =
      showSuggestions &&
      buildInstantResults(_engine, {
        options: {
          maxResultsPerQuery: showSuggestions.value ? numberOfSuggestions.value : 0,
        },
      });

    const { updateSearchConfiguration } = loadSearchConfigurationActions(_engine);
    _engine.dispatch(
      updateSearchConfiguration({
        pipeline: queryPipeline?.value || 'sitesearch',
        searchHub: searchHub?.value || 'search',
      })
    );

    const { updateAdvancedSearchQueries } = loadAdvancedSearchQueryActions(_engine);

    boostingExpression.value = replaceTokenInCoveoExpression(
      boostingExpression?.value,
      userAffiliate?.affiliateId,
      pageAffiliate?.affiliateId,
      featureToggles
    );
    filterExpression.value = replaceTokenInCoveoExpression(
      filterExpression?.value,
      userAffiliate?.affiliateId,
      pageAffiliate?.affiliateId,
      featureToggles
    );

    const advancedQueries = `${boostingExpression?.value || ''} ${
      filterExpression?.value || ''
    }`.trim();

    _engine.dispatch(
      updateAdvancedSearchQueries({
        cq: `(@ew_excludefromsearch=="false") AND (@ew_sitelanguage==${
          sitecoreContext.language || 'en'
        }) AND (@source==EnterpriseWeb-${farmName}) `,
        aq: advancedQueries || '',
      })
    );

    subscribeToStateChangesAndReturnCleanup(allunsubscribers);

    setEngine(_engine);

    return function cleanup() {
      allunsubscribers.forEach((unsub) => unsub?.());
    };
    // Most of the suggested deps are from props.
    // However, Actual reason to ignore this react-hooks/exhaustive-deps is, Adding the suggested deps will cause engine to re initiate everytime deps changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.coveoAccessToken]);

  useEffect(() => {
    if (redirectionTrigggered) {
      const value = standaloneSearchBoxController.current?.state?.value || '';

      toggleSearchBoxVisibility && toggleSearchBoxVisibility(false);
      setRedirectionTrigggered(false);

      let currentPathName = window.location.pathname;
      const targetUrl = new URL(`${window.location.origin}${redirectionUrl.value.href || ''}`);

      if (targetUrl) {
        currentPathName = currentPathName.replace(/\/$/, '');

        // If standalone searchbox component present in same page as redirectionalUrl then we need to update only hash
        if (currentPathName === targetUrl.pathname) {
          window.location.hash = `q=${encodeURIComponent(value)}`;
        } else {
          targetUrl.hash += `q=${encodeURIComponent(value)}`;
          window.location.href = targetUrl.toString();
        }
      }
    }
    // We only need to run this useEffect if the redirectionTrigggered dependency changes.
    // Suggested deps are not required for the useEffect.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [redirectionTrigggered]);

  const subscribeToStateChangesAndReturnCleanup = (
    unsubscribers: Array<Unsubscribe | undefined>
  ) => {
    // Subscribe to standalone search controller
    unsubscribers?.push(
      standaloneSearchBoxController.current?.subscribe(() => {
        setStandaloneSearchBoxState(standaloneSearchBoxController.current?.state);
      })
    );
    // Subscribe to instant results controller
    unsubscribers?.push(
      instantResultsController.current?.subscribe(() =>
        setInstantResultsState(instantResultsController.current?.state)
      )
    );
  };

  function isEnterKey(e: React.KeyboardEvent<HTMLInputElement>) {
    return e.key === 'Enter';
  }

  if (!engine) {
    return null;
  }

  return (
    <div
      className={twMerge(
        themeData.classes?.standaloneSearchBoxContainer,
        focused &&
          standaloneSearchBoxState?.suggestions &&
          standaloneSearchBoxState.suggestions.length > 0 &&
          themeData.classes?.standaloneFocusedClasses
      )}
    >
      <div className={themeData.classes?.standaloneSearchBoxWrapper}>
        {/* Search icon */}
        <div
          className={themeData.classes?.searchIconWrapper}
          onMouseDown={() => {
            standaloneSearchBoxController?.current?.submit();
            setRedirectionTrigggered(true);
          }}
        >
          {/* We need to use static svg as using dynamic-import functionality causes flickering issues as coveo updates the state of the searchbox on keydown */}
          <svg
            role="img"
            width={themeName === 'aw' ? '20' : '16'}
            height={themeName === 'aw' ? '20' : '16'}
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Search Icon</title>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.5274 4.57599C13.7069 6.75552 13.7069 10.2892 11.5274 12.4688C9.34789 14.6483 5.81418 14.6483 3.63465 12.4688C1.45512 10.2892 1.45512 6.75552 3.63465 4.57599C5.81418 2.39646 9.34789 2.39646 11.5274 4.57599ZM13.6019 13.1305C15.8828 10.158 15.6628 5.8829 12.9416 3.16178C9.98106 0.201201 5.18101 0.201201 2.22043 3.16178C-0.740144 6.12236 -0.740144 10.9224 2.22043 13.883C4.94106 16.6036 9.21506 16.8241 12.1875 14.5445L16.7017 19.0587L18.1159 17.6445L13.6019 13.1305Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div className={themeData.classes?.searchBox}>
          <input
            className={themeData.classes?.searchBoxInput}
            value={standaloneSearchBoxState?.value}
            onChange={(e) => {
              standaloneSearchBoxController?.current?.updateText(e.target.value);
              instantResultsController?.current?.updateQuery(e.target.value);
            }}
            onKeyDown={(e) => {
              if (isEnterKey(e)) {
                standaloneSearchBoxController?.current?.submit();
                setRedirectionTrigggered(true);
                setFocused(false);
              }
            }}
            onFocus={() => setFocused(true)}
            onBlur={(event) => {
              event.preventDefault();
              event.stopPropagation();
              setFocused(false);
            }}
            placeholder={placeholderText?.value}
          />
          {/* Close icon */}
          {standaloneSearchBoxState?.value && (
            <div
              className={themeData.classes?.closeIconWrapper}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                standaloneSearchBoxController?.current?.clear();
              }}
            >
              {/* We need to use static svg as using dynamic-import functionality causes flickering issues as coveo updates the state of the searchbox on keydown */}
              <svg
                role="img"
                width={themeName === 'aw' ? '20' : '12'}
                height={themeName === 'aw' ? '20' : '12'}
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Close Icon</title>
                <path
                  d="M12 1.56941L10.7914 0.36084L6 5.15227L1.20857 0.36084L0 1.56941L4.79143 6.36084L0 11.1523L1.20857 12.3608L6 7.56941L10.7914 12.3608L12 11.1523L7.20857 6.36084L12 1.56941Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          )}
        </div>
      </div>
      {focused &&
        standaloneSearchBoxState?.suggestions &&
        standaloneSearchBoxState.suggestions.length > 0 && (
          <div className={themeData.classes?.omniResultsWrapper}>
            {/* Standalone search suggestions */}
            <ul className={themeData.classes?.suggestionsWrapper}>
              {standaloneSearchBoxState.suggestions?.map((suggestion) => {
                const value = suggestion.rawValue;
                return (
                  <li
                    key={value}
                    onMouseDown={() => {
                      standaloneSearchBoxController?.current?.selectSuggestion(value);
                      setRedirectionTrigggered(true);
                    }}
                    dangerouslySetInnerHTML={{ __html: suggestion.highlightedValue }}
                    className={themeData.classes?.suggestionItem}
                  ></li>
                );
              })}
            </ul>

            {/* Instant results suggestions */}
            {instantResultsState?.results && instantResultsState.results.length > 0 && (
              <>
                <p className={themeData.classes?.instantResultsTitle}>
                  {suggestedResultsLabel.value}
                </p>
                <ul className={themeData.classes?.instantResultsWrapper}>
                  {instantResultsState?.results?.map((result) => {
                    return (
                      <li
                        key={result.uniqueId}
                        className={themeData.classes?.suggestionItem}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          if (result.clickUri.split('.').pop() === 'pdf') {
                            return;
                          }
                          toggleSearchBoxVisibility && toggleSearchBoxVisibility(false);
                          router.push(result.clickUri);
                        }}
                      >
                        <Link href={result.clickUri}>
                          <a
                            target={result.clickUri.split('.').pop() === 'pdf' ? '_blank' : '_self'}
                          >
                            {result.title}
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </div>
        )}
    </div>
  );
};
