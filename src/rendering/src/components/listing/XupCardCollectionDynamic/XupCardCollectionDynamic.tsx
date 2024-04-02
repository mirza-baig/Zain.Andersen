// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { useTheme } from 'lib/context/ThemeContext';
import { useSitecoreContext, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
// Components
import { Component } from 'src/helpers/Component';
import {
  Result,
  buildResultList,
  buildResultTemplatesManager,
  buildResultsPerPage,
  buildSort,
  loadAdvancedSearchQueryActions,
  ResultListState,
  loadSearchConfigurationActions,
  ResultTemplatesManager,
  ResultList as HeadlessResultList,
  SearchEngine,
  Unsubscribe,
} from '@coveo/headless';
import classNames from 'classnames';
import { ReactElement, useEffect, useRef, useState } from 'react';

import { getEnum } from 'lib/utils';
import ModalWrapper from 'src/helpers/ModalWrapper/ModalWrapper';
import { SliderWrapper } from 'src/helpers/SliderWrapper';
import { getPhotoItemProps } from 'src/helpers/PhotoItemWithDetail/PhotoItemWithDetail.Utils';
import PhotoItemWithDetail, {
  PhotoItemWithDetailProps,
} from 'src/helpers/PhotoItemWithDetail/PhotoItemWithDetail';
import { SvgIcon } from 'src/helpers/SvgIcon';
import { getBreakpoint, useCurrentScreenType } from 'lib/utils/get-screen-type';
import { XupDisplayStyle } from '../XupCardCollection/XupCardCollection';
import { Headline } from 'src/helpers/Headline';
import { BodyCopy } from 'src/helpers/BodyCopy';
import { ButtonGroup } from 'src/helpers/ButtonGroup';
import { GridDisplay, SliderDisplay } from './DynamicXupDisplayModes.helper';
import { XupCardCollectionDynamicTheme } from './XupCardCollectionDynamic.theme';
import { ComponentProps } from 'lib/types/component-props';
import { Spinner } from 'src/helpers/Spinner';
import { buildEngineAsync, getInitialCriterion } from 'lib/coveo';
import XupCardTemplate from './XupCardCollectionDynamic.Template.helper';
import { replaceTokenInCoveoExpression } from 'lib/coveo/utils';
import { useFeatureToggles } from 'lib/context/FeatureToggleContext';
import { useAffiliate } from 'lib/context/AffiliateContext';
import { SliderRefType, SliderType } from 'src/helpers/SliderWrapper/SliderWrapper';

type AffiliateCardStyle = 'renewal-cares' | 'events' | 'showrooms';

export type DynamicXupCardStyle =
  | 'photo-gallery'
  | 'result-with-image'
  | 'result-without-image'
  | 'awards'
  | AffiliateCardStyle;

// TODO: Clean this up
const organizationId = process.env.NEXT_PUBLIC_EW_COVEO_ORGANIZATION_ID || '';
const farmName = process.env.NEXT_PUBLIC_EW_COVEO_FARM_NAME;

export type XupCardCollectionDynamicProps =
  Feature.EnterpriseWeb.Enterprise.Components.Listing.XupCardCollectionDynamic.XupCardCollectionDynamic & {
    fields?: {
      children: Feature.EnterpriseWeb.Enterprise.Components.Listing.XupCardCollectionDynamic.ResultItem[];
    };
  } & ComponentProps;

export type cardAlignment = 'left' | 'center';

const XupCardCollectionDynamic = (props: XupCardCollectionDynamicProps) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isLightboxVisible, setIsLightboxVisible] = useState(false);

  const { currentScreenWidth } = useCurrentScreenType();

  const cardStyle = getEnum<DynamicXupCardStyle>(props?.fields?.cardStyle) || 'photo-gallery';
  const cardAlignment = getEnum<cardAlignment>(props.fields?.alignment) || 'left';

  const hideAndExcludeFromNoResult: Array<DynamicXupCardStyle> = [
    'events',
    'showrooms',
    'renewal-cares',
  ];

  const { themeData } = useTheme(XupCardCollectionDynamicTheme(cardAlignment, cardStyle));

  const { sitecoreContext } = useSitecoreContext();
  const sliderRef = useRef<SliderType>();

  const resultTemplatesManager = useRef<ResultTemplatesManager<(result: Result) => JSX.Element>>();
  const resultListController = useRef<HeadlessResultList>();

  // //#region initialise xupCoveoEngine, resultListState, registerTemplates
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
      buildResultsPerPage(_engine, {
        initialState: { numberOfResults: props.fields?.numberOfCards?.value || 12 },
      });
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
        ...XupCardTemplate(
          props.fields?.children,
          themeData.classes.gridTemplateClasses,
          cardStyle
        ),
      });

      const { updateSearchConfiguration } = loadSearchConfigurationActions(_engine);
      _engine.dispatch(
        updateSearchConfiguration({
          pipeline: props.fields?.queryPipeline?.value,
          searchHub: props.fields?.searchHub?.value,
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
    // Suggested deps are coming directly from layout service. We can ignore react-hooks/exhaustive-deps warning.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // //#endregion

  const desktopDisplayStyle = getEnum<XupDisplayStyle>(props.fields?.desktopDisplayStyle) || 'grid';
  const mobileDisplayStyle = getEnum<XupDisplayStyle>(props.fields?.mobileDisplayStyle) || 'grid';

  const maxCardsPerRow: number = parseInt(getEnum<string>(props.fields?.cardsPerRow) || '3');

  const XupSliderSettings = {
    dots: false,
    infinite: false,
    slidesToShow: maxCardsPerRow,
    responsive: [
      {
        breakpoint: getBreakpoint('md'),
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  const LightboxSliderSettings = {
    initialSlide:
      resultListState?.results.length && resultListState?.results.length > 1
        ? currentSlideIndex
        : 0,
    arrows: false,
    dots: false,
  };

  // Render Xup cardcollection based XupDisplayStyle
  const renderCardColection = (): ReactElement => {
    if (currentScreenWidth < getBreakpoint('md')) {
      // Renderings for mobile devices
      if (mobileDisplayStyle === 'grid') {
        return <GridDisplay renderXupCard={renderXupCard} resultListState={resultListState} />;
      } else {
        return (
          <SliderDisplay
            sliderSettings={XupSliderSettings}
            renderXupCard={renderXupCard}
            resultListState={resultListState}
          />
        );
      }
    } else {
      // Renderings for tablets and large screen devices
      if (desktopDisplayStyle === 'grid') {
        return (
          <GridDisplay
            maxCardsPerRow={maxCardsPerRow}
            renderXupCard={renderXupCard}
            resultListState={resultListState}
          />
        );
      } else {
        return (
          <SliderDisplay
            sliderSettings={XupSliderSettings}
            renderXupCard={renderXupCard}
            resultListState={resultListState}
          />
        );
      }
    }
  };

  const NoResult = () => {
    if (!resultListState?.results?.length) {
      return (
        <div className="col-span-12">
          <BodyCopy
            classes={themeData.classes.bodyClass}
            fields={{ body: props.fields?.noResultsText }}
          />
        </div>
      );
    } else {
      return <></>;
    }
  };

  // use Coveo resultTemplateManager to choose and implement style of card
  const renderXupCard = (result: Result, index: number): ReactElement => {
    const template = resultTemplatesManager?.current?.selectTemplate(result);

    if (!template) {
      throw new Error(`No result template provided for ${result.title}.`);
    }

    return (
      <div
        tabIndex={0}
        onClick={() => {
          openModal(index);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            openModal(index);
          }
        }}
        className={classNames('h-full', {
          '[&_.imageWrapper]:mb-0': cardStyle === 'photo-gallery',
        })}
      >
        {template(result)}
      </div>
    );
  };

  // handle opening the lightbox
  const openModal = (index: number) => {
    setIsLightboxVisible(true);
    setCurrentSlideIndex(index);
  };

  // renders photoGallery lightbox
  const photoGalleryLightbox = (): ReactElement | void => {
    const isModalOpen = cardStyle === 'photo-gallery' && isLightboxVisible;
    if (isModalOpen) {
      return (
        <ModalWrapper
          isModalOpen={isModalOpen}
          size="fluid"
          handleClose={() => setIsLightboxVisible(false)}
        >
          <div className="px-ml pb-ml pt-s">
            {resultListState?.results?.length && resultListState?.results.length > 1 ? (
              <>
                <SliderWrapper
                  sliderSettings={LightboxSliderSettings}
                  sliderRef={sliderRef as SliderRefType}
                >
                  {resultListState?.results?.map((result) => {
                    if (props.fields.children) {
                      const photoObject = getPhotoItemProps(
                        result,
                        true,
                        props.fields.children || []
                      ) as PhotoItemWithDetailProps;

                      return <PhotoItemWithDetail key={result.uniqueId} {...photoObject} />;
                    }
                    return <></>;
                  })}
                </SliderWrapper>
                <div className="mt-m flex items-center justify-between text-xxs md:justify-center">
                  <div
                    role="button"
                    className="ml-xxxs flex cursor-pointer items-center font-bold md:mr-xs"
                    onClick={() => sliderRef.current && sliderRef.current.slickPrev()}
                  >
                    <SvgIcon className="mr-xs" icon="arrow-left" />
                    <span>Previous</span>
                  </div>
                  <div
                    role="button"
                    className="mr-xxxs flex cursor-pointer items-center font-bold md:ml-xs"
                    onClick={() => {
                      sliderRef.current && sliderRef.current.slickNext();
                    }}
                  >
                    <span>Next</span>
                    <SvgIcon className="ml-xs" icon="arrow-right" />
                  </div>
                </div>
              </>
            ) : (
              resultListState?.results?.map((result) => {
                if (props.fields.children) {
                  const photoObject = getPhotoItemProps(
                    result,
                    true,
                    props.fields.children || []
                  ) as PhotoItemWithDetailProps;

                  return <PhotoItemWithDetail key={result.uniqueId} {...photoObject} />;
                }
                return <></>;
              })
            )}
          </div>
        </ModalWrapper>
      );
    }
  };

  if (!props?.fields || !engine) {
    return <></>;
  }

  // if Afiliated card opted in for no result display, hide whole component if no results from coveo
  if (
    hideAndExcludeFromNoResult.includes(cardStyle) &&
    resultListState?.firstSearchExecuted &&
    !resultListState?.results?.length
  ) {
    return <></>;
  }

  return (
    <>
      <Component
        variant="lg"
        gap="gap-x-s gap-y-m"
        dataComponent="listing/xupcardcollectiondynamic"
        className={classNames(
          (props.fields.body.value !== '' || props.fields.children.length > 0) &&
            'grid-cols-0 grid gap-x-0 gap-y-0'
        )}
        {...props}
      >
        <div className="col-span-12">
          <Headline classes={themeData.classes.headlineClass} {...props} />
          <BodyCopy classes={themeData.classes.bodyClass} {...props} />
          <ButtonGroup classes={themeData.classes.buttonGroupClass} {...props} />
        </div>

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
            <NoResult />
            {props.fields.children.length > 0 && renderCardColection()}
            {photoGalleryLightbox()}
          </>
        )}
      </Component>
    </>
  );
};

export default withDatasourceCheck()<XupCardCollectionDynamicProps>(XupCardCollectionDynamic);
