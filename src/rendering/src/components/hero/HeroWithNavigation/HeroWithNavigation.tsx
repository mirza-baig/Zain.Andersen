// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { useTheme } from 'lib/context/ThemeContext';
import {
  LinkField,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
// Components
import { getEnum } from 'lib/utils';
import { HeroWithNavigationTheme } from './HeroWithNavigation.theme';
import { IconTypes, SvgIcon } from 'src/helpers/SvgIcon';
import { ImagePrimary } from 'src/helpers/Media';
import { LinkWrapper } from 'src/helpers/LinkWrapper';
import { Subheadline } from 'src/helpers/Subheadline';
import { Headline } from 'src/helpers/Headline';

export type HeroWithNavigationLinkProps =
  Feature.EnterpriseWeb.Enterprise.Components.Hero.HeroWithNavigation.HeroWithNavigationLink;

export type HeroWithNavigationProps =
  Feature.EnterpriseWeb.Enterprise.Components.Hero.HeroWithNavigation.HeroWithNavigation & {
    fields: {
      children: [HeroWithNavigationLinkProps];
    };
  };

export type ComponentSpacing = '8' | '4';

const HeroWithNavigation = (props: HeroWithNavigationProps) => {
  const spacing = getEnum<ComponentSpacing>(props.fields?.componentSpacing) || 'standard';
  const spacingValue = spacing === 'standard' ? '8' : '4';
  const context = useSitecoreContext();
  const breadcrumb = (context && context.sitecoreContext?.breadcrumb) || [];

  const { themeData } = useTheme(HeroWithNavigationTheme(spacingValue));

  return (
    <div
      data-component="hero/herowithnavigation"
      className={breadcrumb?.length === 1 ? 'relative pt-[55px] ml:pt-0' : 'relative'}
    >
      {props?.fields?.headlineText?.value && (
        <div className={themeData.classes.headlineContainer}>
          <div className="col-span-12">
            <Headline useTag="h1" classes={themeData.classes.headline} {...props} />
          </div>
        </div>
      )}
      <div className={themeData.classes.heroContainer}>
        <ImagePrimary
          imageLayout="fill"
          ratio="hero"
          additionalDesktopClasses="h-[280px] ml:h-[422px]"
          additionalMobileClasses="h-[280px]"
          priority
          {...props}
        ></ImagePrimary>
        <div className={themeData.classes.linkContainer}>
          <Subheadline classes={themeData.classes.subheadlineStyle} {...props} />
          {props.fields?.children?.map((_item: HeroWithNavigationLinkProps, i: number) => {
            const _linkField = _item.fields?.navigationLink as LinkField;
            const _icon = getEnum<IconTypes>(_item.fields?.navigationIcon);

            return (
              <div key={i} className={themeData.classes.linkStyle}>
                <LinkWrapper
                  className={themeData.classes.linkWrapperStyle}
                  field={_linkField}
                  ariaLabel={{
                    value: (_item.fields?.navigationIcon?.name as string) || 'Navigation Icon',
                  }}
                >
                  {_item.fields?.navigationIcon && (
                    <div className={themeData.classes.svgWrapper}>
                      <SvgIcon icon={_icon} className={themeData.classes.svgIconStyle} />
                    </div>
                  )}
                </LinkWrapper>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default withDatasourceCheck()<HeroWithNavigationProps>(HeroWithNavigation);
