/***  Disabling no-explicit-any for whole file as this file is containing a whole lot of them, and to apply proper type,
 we need to understand context of every instance of how and when this helper is being used */

/* eslint-disable @typescript-eslint/no-explicit-any */

// Global
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'src/lib/context/ThemeContext';

// Components
import { BouncyCard } from 'src/helpers/BouncyCard';
import { usePerfectMatchState } from '../Store';
import { RenderStepsProps } from './PerfectMatchStep.helper';
import { PreferencesTheme, PreferencesThemeSubType } from './Preferences.theme';

const Preferences = ({ props, moduleData, step }: RenderStepsProps) => {
  const router = useRouter();
  const replaceSelection = usePerfectMatchState((x) => x.replaceSelection);
  const addSelection = usePerfectMatchState((x) => x.addSelection);
  const clearSelection = usePerfectMatchState((x) => x.clearSelections);
  const getAllSelections = usePerfectMatchState((x) => x.getAllSelections);
  const allSelections = usePerfectMatchState((x) => x.selections);

  const { themeData } = useTheme(PreferencesTheme());
  const theme = (themeData as PreferencesThemeSubType).classes;

  let preferenceOptions: any[] = [];
  switch (step) {
    case 'windowPreferences':
      preferenceOptions = moduleData.preferences.window;
      break;
    case 'doorPreferences':
      preferenceOptions = moduleData.preferences.door;
      break;
    default:
      break;
  }
  const noneItem = preferenceOptions.filter((opt: any) => opt.property === '');

  const ToggleSelectedOption = (option: any) => {
    const optionId = option.id;
    const selections = getAllSelections(step);
    const selectionIndex = selections.findIndex((id: string) => id === optionId);

    if (option.property === '' && selectionIndex < 0) {
      clearSelection(step);
      addSelection(step, optionId);
    } else if (selectionIndex >= 0) {
      selections.splice(selectionIndex, 1);
      clearSelection(step);
      const filteredSelections = selections.filter(
        (optId: string) => !noneItem.find((itm: any) => itm.id === optId)
      );
      replaceSelection(step, filteredSelections);
    } else {
      clearSelection(step);
      selections.push(optionId);
      const filteredSelections = selections.filter(
        (optId: string) => !noneItem.find((itm: any) => itm.id === optId)
      );
      replaceSelection(step, filteredSelections);
    }
  };

  const GetPreferencesUrl = () => {
    const selections = getAllSelections(step);
    const delimitedSelections = selections
      .map(
        (optionId: string) =>
          preferenceOptions.find((option: any) => option.id === optionId).property
      )
      .join(',');

    const hash = (router.asPath as string).split('#')[1];
    const parsedHash = new URLSearchParams(hash);
    parsedHash.delete('s:windowPreferences');
    parsedHash.delete('cs');

    return decodeURIComponent(
      '#' +
        parsedHash.toString() +
        '&cs=windowResults' +
        '&s:windowPreferences=' +
        delimitedSelections
    );
  };

  return (
    allSelections && (
      <div className={theme.stepPreferences}>
        <div className={theme.stepContainer}>
          {preferenceOptions?.map((option: any, index: number) => (
            <BouncyCard
              {...option}
              key={option.id + '_' + index}
              onClick={() => {
                ToggleSelectedOption(option);
              }}
              renderAsLink={false}
              additionalButtonClassName={
                ' p-[60px_20px_10px_20px] ' +
                (getAllSelections(step).findIndex((optId: string) => optId === option.id) >= 0
                  ? ' border-primary border-2 rounded '
                  : ' border-[rgba(0,0,0,0)] border-2 rounded ')
              }
              cardWidth=" basis-[45%] md:basis-[30%] "
              noBottomCTA={true}
              imageLayout="intrinsic"
            ></BouncyCard>
          ))}
        </div>
        <div className={theme.stepShowResultsWrapper}>
          <Link href={GetPreferencesUrl()}>
            <a className={theme.stepShowResultsBtn}>
              <Text field={props.fields?.windowPreferencesResultsCtaText}></Text>
            </a>
          </Link>
        </div>
      </div>
    )
  );
};

export default Preferences;
