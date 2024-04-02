import React from 'react';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { useTheme } from 'lib/context/ThemeContext';
import { withDatasourceCheck, Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import classNames from 'classnames';
import { getEnum } from 'lib/utils';
import { getBreakpoint, useCurrentScreenType } from 'lib/utils/get-screen-type';
import { HeroWithFormFillTheme } from './HeroWithFormFill.theme';
import { Headline } from 'src/helpers/Headline';
import { MediaPrimary } from 'src/helpers/Media';
import RichTextWrapper from 'src/helpers/RichTextWrapper/RichTextWrapper';

export type FormAlignment = 'vertical' | 'horizontal' | 'horizontalSpillover';

export type HeroWithFormFillProps =
  Feature.EnterpriseWeb.RenewalByAndersen.Components.Hero.HeroWithFormFill.HeroWithFormFill;

const HeroWithFormFill: React.FC<HeroWithFormFillProps> = (props) => {
  const { rendering, fields } = props;
  const { currentScreenWidth } = useCurrentScreenType();
  const isDesktop = currentScreenWidth >= getBreakpoint('ml') ? true : false;
  const formAlignment = getEnum(fields?.formAlignment) as FormAlignment;
  const hasOverlay = getEnum(fields?.formStyle) === 'grayFormWithBlackOverlay';
  const { themeData } = useTheme(HeroWithFormFillTheme(formAlignment));
  if (!fields) {
    return null;
  }

  const primaryImage = fields?.primaryImage?.value;
  const imageStyles =
    primaryImage && isDesktop
      ? {
          backgroundImage: `url(${primaryImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }
      : {};

  const formBGClass = hasOverlay
    ? 'bg-light-gray'
    : 'bg-black [&_div]:!text-white [&_input]:!text-black theme-black';

  const renderForm = rendering?.placeholders?.form?.length;

  return (
    <div data-component="hero/herowithformfill" className="relative h-full w-full" {...props}>
      {hasOverlay && isDesktop && (
        <div
          className={classNames(themeData.classes.overlay, themeData.classes.overlayClass)}
        ></div>
      )}

      <div
        className={classNames(themeData.classes.contentWrapper, themeData.classes.alignmentClass)}
        style={imageStyles}
      >
        {/* content */}
        <div
          className={classNames(
            themeData.classes.contentContainer,
            themeData.classes.contentAlignmentClass
          )}
        >
          <Headline
            classes={classNames(themeData.classes.headline, themeData.classes.contentwidth)}
            {...props}
          />
          <RichTextWrapper
            classes={classNames(
              themeData.classes.bodyClass,
              themeData.classes.contentwidth,
              'ml:[&>div]:!text-white'
            )}
            field={fields?.body}
          />
        </div>

        {/* primaryImage in mobile */}
        <MediaPrimary
          imageLayout="fill"
          ratio="hero"
          additionalDesktopClasses="ml:!hidden"
          additionalMobileClasses="!block md:!block min-h-[280px] mt-l ml:!hidden"
          priority
          {...props}
        />
        {/* vertical or horizontal Form */}
        {renderForm && formAlignment !== 'horizontalSpillover' && (
          <div className={classNames('z-[1] p-s', themeData.classes.formWrapperClass, formBGClass)}>
            <Placeholder
              name="form"
              rendering={rendering}
              isHorizontalForm={formAlignment === 'horizontal'}
            />
          </div>
        )}
      </div>
      {/* horizontalSpillover Form */}
      {renderForm && formAlignment === 'horizontalSpillover' && (
        <div className={classNames('z-[1] p-s', themeData.classes.formWrapperClass, formBGClass)}>
          <Placeholder name="form" rendering={rendering} isHorizontalForm={true} />
        </div>
      )}
    </div>
  );
};

export default withDatasourceCheck()<HeroWithFormFillProps>(HeroWithFormFill);
