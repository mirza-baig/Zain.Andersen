/***  Disabling no-explicit-any for whole file as this file is containing a whole lot of them, and to apply proper type,
 we need to understand context of every instance of how and when this helper is being used */

/* eslint-disable @typescript-eslint/no-explicit-any */
// Global
import { Link, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'src/lib/context/ThemeContext';

// Components
import ImageWrapper from 'src/helpers/Media/ImageWrapper';
import SvgIcon from 'src/helpers/SvgIcon/SvgIcon';
import { usePerfectMatchState } from '../Store';
import PerfectMatchPhotoGallery from './PerfectMatchPhotoGallery.helper';
import { RenderStepsProps } from './PerfectMatchStep.helper';
import ResultPrimary from './ResultPrimary.helper';
import { ResultsTheme, ResultsThemeSubType } from './Results.theme';
import ResultSecondary from './ResultSecondary.helper';

const Results = (props: RenderStepsProps) => {
  const router = useRouter();
  const { themeData } = useTheme(ResultsTheme());
  const theme = (themeData as ResultsThemeSubType).classes;

  const perfectMatchState = usePerfectMatchState((x) => x);
  const getAllSelections = usePerfectMatchState((x) => x.getAllSelections);
  const selections = getAllSelections(
    props.step === 'windowResults' ? 'windowPreferences' : 'doorPreferences'
  );

  let preferenceOptions: any[] = [];
  switch (props.step) {
    case 'windowResults':
      preferenceOptions = props.moduleData.preferences.window;
      break;
    case 'doorResults':
      preferenceOptions = props.moduleData.preferences.door;
      break;
    default:
      break;
  }

  const mappedSelections = GetSelectionNamesFromSelectionIds(selections);

  function GetAllFilters() {
    const hash = (router.asPath as string).split('#')[1];
    const parsedHash = new URLSearchParams(hash);
    const filters: any = {};

    // get style
    const style = parsedHash.get('s:windowStyle') || parsedHash.get('s:doorStyle');
    if (style) {
      filters['productStyle'] = style;
    }

    // get coastal
    const coastal = parsedHash.get('s:windowCoastal') || parsedHash.get('s:doorCoastal');
    if (coastal) {
      filters['productCoastal'] = coastal;
    }

    // get type
    const type = parsedHash.get('s:type');
    if (type) {
      filters['productType'] = type;
    }

    return filters;
  }

  function FindResultsForFilters(results: any[], filters: any): any[] {
    for (const property in filters) {
      results = results.filter((result: any) => {
        const options = result.options[property].filter((id: string) => {
          return id === filters[property];
        });
        return options.length > 0;
      });
    }
    return results;
  }

  function RemoveDuplicateVariations(results: any[]): any[] {
    results = results.filter((result: any) => {
      if (result.variationOf) {
        const originals = results.filter((original: any) => {
          return original.id === result.variationOf;
        });
        return originals.length === 0;
      }

      return true;
    });
    return results;
  }

  function RankResultsForRankings(results: any[], rankings: any[]): any[] {
    // Calculate our scores
    const rankedResults = results.map((element: any) => {
      return {
        result: element,
        score: rankings.reduce((total, currentValue) => {
          return total + element.scores[currentValue]?.value ?? 0;
        }, element.scores.boost?.value ?? 0),
      };
    });

    // Sort it by scores, descending
    rankedResults.sort(PerfectMatchRankedResultCompare);

    return rankedResults;
  }

  function GetSelectionNamesFromSelectionIds(selections: any[]): any[] {
    return selections.map((selection: string) => {
      return preferenceOptions.find((pref: any) => pref?.id === selection);
    });
  }

  // Flipped to sort descending
  function PerfectMatchRankedResultCompare(a: any, b: any): number {
    if (a.score > b.score) {
      return -1;
    } else if (a.score < b.score) {
      return 1;
    }
    return 0;
  }

  const results = FindResultsForFilters(props.moduleData.results, GetAllFilters());
  const dedupedResults = RemoveDuplicateVariations(results);
  const rankedResults = RankResultsForRankings(
    dedupedResults,
    mappedSelections?.map((pref: any) => {
      return pref.property;
    })
  );

  const GetAllPreferenceIcons = (preferences: any[]) => {
    const returnValue: any[] = [];
    for (let i = 0; i < mappedSelections.length && i < 3; i++) {
      if (rankedResults[0].result.scores[mappedSelections[i].property]?.value >= 1) {
        const option = preferences.find(function (element: any) {
          return element.property === mappedSelections[i].property;
        });
        if (option) {
          returnValue.push(option);
        }
      }
    }

    return (
      <>
        {returnValue.map((option: any, index: number) => (
          <div className={theme.preferenceIcon} key={'preference_icon_' + index}>
            <div className={theme.preferenceIconImageContainer}>
              <ImageWrapper image={option.image} imageLayout="intrinsic"></ImageWrapper>
            </div>
            <div className={theme.preferenceIconHeading}>
              <RichText field={option.heading}></RichText>
            </div>
          </div>
        ))}
      </>
    );
  };

  const ResetSettings = () => {
    const allSteps = Object.keys(props.moduleData.steps);
    allSteps.forEach((key: string) => {
      perfectMatchState.clearSelections(key);
    });
  };

  return (
    <>
      <div className={theme.wrapper}>
        {rankedResults[0] && (
          <div className={theme.header}>
            <div className={theme.headerBackground}>
              {rankedResults[0]?.result?.productDetails?.resultHeroImage && (
                <ImageWrapper
                  image={rankedResults[0].result.productDetails.resultHeroImage}
                  additionalMobileClasses={theme.heroImageMobile}
                  additionalDesktopClasses={theme.heroImageDesktop}
                ></ImageWrapper>
              )}
            </div>
            <div className={theme.container}>
              <div className={theme.containerLeft}>
                <div className={theme.panelBackground}>
                  <ImageWrapper image={props.props.fields?.typeBackgroundImage}></ImageWrapper>
                </div>
                <h1 className={theme.heading}>
                  <span className="text-primary drop-shadow-[-1px_-1px_#fff]">
                    <span className="small">Your</span>
                    <br />
                    perfect
                  </span>
                  <br />
                  match
                </h1>
                <div className={theme.headerSeries}>
                  <RichText field={rankedResults[0].result.productDetails.series}></RichText>
                </div>
                <div className={theme.headerCategory}>
                  <RichText field={rankedResults[0].result.productDetails.category}></RichText>
                </div>
                <div className={theme.buttonContainer}>
                  {rankedResults[0]?.result?.productDetails.designLink && (
                    <>
                      <Link
                        field={rankedResults[0].result.productDetails.designLink}
                        className={theme.designLink + theme.designLinkBefore}
                      ></Link>
                    </>
                  )}
                  <span className="mx-auto inline-block">
                    <NextLink href={'#cs=intro'}>
                      <a
                        className={theme.resetBtn}
                        title="Start Over"
                        aria-label="Start Over"
                        onClick={ResetSettings}
                      >
                        <SvgIcon
                          icon="reset"
                          size="22"
                          className={'mr-[8px] inline-block'}
                        ></SvgIcon>
                        <span>Start Over</span>
                      </a>
                    </NextLink>
                  </span>
                </div>
              </div>
              <div className={theme.containerRight}>
                {rankedResults[0].result.productDetails.resultOverlayImage && (
                  <ImageWrapper
                    image={rankedResults[0].result.productDetails.resultOverlayImage}
                    imageLayout="intrinsic"
                  ></ImageWrapper>
                )}
              </div>
            </div>
          </div>
        )}
        <div className={theme.preferenceIconWrapper}>
          <div className={theme.preferenceIconContainer}>
            {preferenceOptions && GetAllPreferenceIcons(preferenceOptions)}
          </div>
        </div>
        <div className={theme.primaryResultContainer}>
          <ResultPrimary {...props} primaryResult={rankedResults[0]}></ResultPrimary>
        </div>
        <PerfectMatchPhotoGallery
          {...props}
          primaryResult={rankedResults[0]?.result}
        ></PerfectMatchPhotoGallery>
        {rankedResults.length >= 2 && (
          <>
            <div className={theme.secondaryResultContainer}>
              {rankedResults.length >= 2 && (
                <ResultSecondary
                  {...props}
                  secondaryResults={rankedResults.slice(1, 3)}
                ></ResultSecondary>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Results;
