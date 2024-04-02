import { LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { Field } from 'lib/jss21.2.1/layout';
import React from 'react';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { MenuSectionLink } from './MenuSectionLink.helper';
import { LinkWrapper } from 'src/helpers/LinkWrapper';
import { getBreakpoint, useCurrentScreenType } from 'lib/utils/get-screen-type';
import { CTASection } from 'src/helpers/LinkWrapper/LinkWrapper';

export const LinkMenu = ({
  menuTitle,
  menuLink,
  menuItems,
  ctaSection,
}: {
  menuTitle: Field<string>;
  menuLink: LinkField;
  menuItems: Array<Feature.EnterpriseWeb.RenewalByAndersen.Components.Navigation.Menu.MegaMenu.LinkItem>;
  ctaSection: CTASection;
}) => {
  const { currentScreenWidth } = useCurrentScreenType();
  return (
    <>
      {(currentScreenWidth >= getBreakpoint('ml') || menuTitle.value || menuLink.value.href) && (
        <div id="link-menu-title" className="mb-xxs min-h-[24px] text-body font-bold">
          <MenuSectionLink menuTitle={menuTitle} menuLink={menuLink} ctaSection={ctaSection} />
        </div>
      )}
      <div className="flex flex-col">
        {menuItems?.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <LinkWrapper
                ctaSection={ctaSection}
                className="mb-s text-body ml:mb-xxs"
                field={{
                  ...item.fields?.link.value,
                  text: item.fields?.linkText.value,
                  title: item.fields?.linkText.value,
                }}
                ariaLabel={{ value: item.fields?.linkText.value as string }}
              />
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};
