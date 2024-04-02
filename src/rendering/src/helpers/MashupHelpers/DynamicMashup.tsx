// Global
import { useTheme } from 'lib/context/ThemeContext';
import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
// Components
import { MashupTheme } from './Mashup.theme';
import { Headline } from 'src/helpers/Headline';
import { BodyCopy } from 'src/helpers/BodyCopy';
import SingleButton from 'src/helpers/SingleButton/SingleButton';
import { getEnum } from 'lib/utils';
import { MashupStyle } from './Mashup.Types';
import { useEffect, useRef, useState } from 'react';
import {
  Result,
  ResultList,
  ResultListState,
  ResultTemplatesManager,
  SearchEngine,
  buildResultList,
  buildSort,
  buildResultTemplatesManager,
  buildResultsPerPage,
  loadAdvancedSearchQueryActions,
  loadSearchConfigurationActions,
  Unsubscribe,
} from '@coveo/headless';
import { buildEngineAsync } from 'lib/coveo';
import DynamicMashupTemplate from './DynamicMashup.Template.helper';
import { PageMashupDynamicProps } from 'components/general/PageMashupDynamic/PageMashupDynamic';
import { getInitialCriterion, replaceTokenInCoveoExpression } from 'lib/coveo/utils';
import { useFeatureToggles } from 'lib/context/FeatureToggleContext';
import { useAffiliate } from 'lib/context/AffiliateContext';

// TODO: Clean this up
const organizationId = process.env.NEXT_PUBLIC_EW_COVEO_ORGANIZATION_ID || '';
const farmName = process.env.NEXT_PUBLIC_EW_COVEO_FARM_NAME;

const DynamicMashup = (props: PageMashupDynamicProps) => {
  const { themeData } = useTheme(MashupTheme);
  const { sitecoreContext } = useSitecoreContext();

  const resultTemplatesManager = useRef<ResultTemplatesManager<(result: Result) => JSX.Element>>();
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

  const mashupStyle = getEnum<MashupStyle>(props.fields?.mashupStyle) || 'images-for-all';

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

      resultTemplatesManager.current = buildResultTemplatesManager(_engine);

      resultListController.current = buildResultList(_engine);
      buildSort(_engine, {
        initialState: {
          criterion: getInitialCriterion(
            props.fields?.sortType,
            props.fields?.sortDirection,
            props.fields?.sortField
          ),
        },
      });
      resultTemplatesManager.current.registerTemplates({
        ...DynamicMashupTemplate(
          props.fields?.children,
          mashupStyle,
          props.fields?.placeholderImage
        ),
      });

      buildResultsPerPage(_engine, {
        initialState: { numberOfResults: 4 },
      });

      const { updateSearchConfiguration } = loadSearchConfigurationActions(_engine);
      _engine.dispatch(
        updateSearchConfiguration({
          pipeline: props?.fields?.queryPipeline.value,
          searchHub: props?.fields?.searchHub.value,
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
      setEngine(_engine);
    })();

    return function cleanup() {
      allunsubscribers.forEach((unsub) => unsub?.());
    };

    // ------ we can ignore react-hooks/exhaustive-deps warning for these following suggested dependencies: ------
    // "sitecoreContext.language" it is related to language;
    // "pageAffiliate?.affiliateId" and "userAffiliate?.affiliateId" are configured from affiliateId;
    // "props.fields?.filterExpression.value", "props.fields?.boostingExpression.value" are configured for "replaceTokenInCoveoExpression";
    // "featureToggles" is configured for coveo driven state;
    // "props.fields?.children", "props.fields?.placeholderImage", "props.fields?.queryPipeline.value", "props.fields?.searchHub.value", "props.fields?.sortDirection", "props.fields?.sortField", and "props.fields?.sortType" are props coming from layout, which will not change;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mashupStyle]);

  if (!props.fields) {
    return <></>;
  }

  const getTemplate = (result: Result) => {
    const template = resultTemplatesManager?.current?.selectTemplate(result);

    if (!template) {
      throw new Error(`No result template provided for ${result.title}.`);
    }
    return template;
  };

  const renderFeaturedCard = () => {
    const featuredResult = resultListState?.results[0];

    if (featuredResult) {
      const _result = { ...featuredResult, cardIndex: 0 };
      return getTemplate(featuredResult)(_result);
    }
    return <></>;
  };

  const renderRegularCards = () => {
    return resultListState?.results?.slice(1).map((result, index) => {
      const _result = { ...result, cardIndex: index + 1 };
      return getTemplate(result)(_result);
    });
  };

  if (!engine) {
    return <></>;
  }

  return (
    <div className="col-span-12 py-l">
      <div className="grid-rows-auto grid grid-cols-12 gap-s px-m md:max-w-screen-lg lg:mx-auto">
        <div className="col-span-12 md:col-span-6">
          <Headline {...props} classes={themeData.classes.sectionheadline} />
        </div>
        <div className="col-span-12 md:col-span-6">
          <BodyCopy {...props} classes={themeData.classes.sectionBody} />
          <SingleButton {...props} classes={themeData.classes.sectionCta} />
        </div>
        {renderFeaturedCard()}
        {mashupStyle !== 'images-for-all' ? (
          <div className="md:gap-lg col-span-12  grid grid-cols-12 gap-x-s gap-y-ml self-start border-t border-gray pt-s md:col-span-6">
            {renderRegularCards()}
          </div>
        ) : (
          renderRegularCards()
        )}
      </div>
    </div>
  );
};

export default DynamicMashup;
