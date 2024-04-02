// Global
import { Image } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

// Components
import { PerfectMatchProps } from 'src/components/tool/PerfectMatch/PerfectMatch';
import {
  PerfectMatchTheme,
  PerfectMatchThemeSubType,
} from 'src/components/tool/PerfectMatch/PerfectMatch.theme';
import { useTheme } from 'src/lib/context/ThemeContext';
import { BouncyCard } from 'src/helpers/BouncyCard';
import { MapOption } from '../perfect-match-mappers';
import classNames from 'classnames';

const Intro = (props: PerfectMatchProps) => {
  const { themeData } = useTheme(PerfectMatchTheme());
  const theme = (themeData as PerfectMatchThemeSubType).classes;

  const doorsOption = MapOption(props.props.fields?.patioDoorOption, 'doors');
  const windowsOption = MapOption(props.props.fields?.windowOption, 'windows');
  const productType = props.moduleData.filters.productType;

  return (
    <div className={theme.panelIntro}>
      <div className={theme.leftVisible}>
        <div className={theme.panelBackground}>
          <Image
            field={props?.props?.fields?.introBackgroundImage}
            className={theme.panelIntroImage}
          ></Image>
        </div>
        <h1 className={theme.leftHeader}>
          <span className={theme.small}>
            Let&apos;s discover <span className={theme.orange}>your</span>
          </span>{' '}
          <span className={theme.large}>
            <span className={theme.orangeShadow}>perfect </span>match
          </span>
          <br />
          <br />
          <span className={theme.secondary}>Let&apos;s dream a little.</span>
          <br />
          <span className={theme.secondary}>Let&apos;s windowshop.</span>
          <br />
          <br />
          <span className={theme.tertiary}>
            Discover windows and doors that are perfect for you.
          </span>
        </h1>
        <Link href="#cs=type">
          <a className={theme.letsGo + ' ' + theme.letsGoBefore}>Let&apos;s Go!</a>
        </Link>
        <div className={theme.typeBtns}>
          <Link href={'#cs=intro&s:type=window'}>
            <a
              className={classNames(theme.typeButtons, '[&>div]:hover:bg-black ')}
              data-label={windowsOption.introCopy?.value}
              aria-label={windowsOption.introCopy?.value}
            >
              <Image field={windowsOption.introImage} className="pb-4"></Image>
              <div
                className={classNames(
                  'mx-auto my-2.5 h-[7px] w-[45%] transition-all duration-[0.5s]',
                  productType === 'window' ? 'bg-primary' : ''
                )}
              ></div>
            </a>
          </Link>
          <Link href={'#cs=intro&s:type=door'}>
            <a
              className={classNames(theme.typeButtons, '[&>div]:hover:bg-black ')}
              data-label={doorsOption.introCopy?.value}
              aria-label={doorsOption.introCopy?.value}
            >
              <Image field={doorsOption.introImage} className="pb-4"></Image>
              <div
                className={classNames(
                  'mx-auto my-2.5 h-[7px] w-[45%] transition-all duration-[0.5s]',
                  productType === 'door' ? 'bg-primary' : ''
                )}
              ></div>
            </a>
          </Link>
        </div>
      </div>
      <div className={theme.rightVisible}>
        {productType === 'window' ? (
          <div className="w-[350px]">
            <BouncyCard
              {...windowsOption}
              key={0}
              mobileFullWidth={true}
              ctaUrl={'#cs=windowStyle&s:type=' + windowsOption.id}
              ctaAlwaysVisible={true}
              cardWidth="w-full"
              additionalWrapperClassName="bg-white/75"
            ></BouncyCard>
          </div>
        ) : (
          <></>
        )}
        {productType === 'door' ? (
          <div className="w-[350px]">
            <BouncyCard
              {...doorsOption}
              key={1}
              mobileFullWidth={true}
              ctaUrl={'#cs=doorStyle&s:type=' + doorsOption.id}
              ctaAlwaysVisible={true}
              cardWidth="w-full"
              additionalWrapperClassName="bg-white/75"
            ></BouncyCard>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Intro;
