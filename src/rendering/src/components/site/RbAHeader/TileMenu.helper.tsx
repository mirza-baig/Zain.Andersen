import { LinkField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { Field } from 'lib/jss21.2.1/layout';
import React from 'react';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { LinkWrapper } from 'src/helpers/LinkWrapper';
import ImageWrapper from 'src/helpers/Media/ImageWrapper';
import { MenuSectionLink } from './MenuSectionLink.helper';
import { CTASection } from 'src/helpers/LinkWrapper/LinkWrapper';

export const TileMenu = ({
  menuTitle,
  menuLink,
  menuItems,
  ctaSection,
}: {
  menuTitle: Field<string>;
  menuLink: LinkField;
  menuItems: Array<Feature.EnterpriseWeb.RenewalByAndersen.Components.Navigation.Menu.MegaMenu.TileItem>;
  ctaSection: CTASection;
}) => {
  const additionalImageClasses = 'flex justify-center items-center mb-xxs pointer-events-none';
  return (
    <div>
      {(menuLink?.value?.href || menuTitle?.value) && (
        <div className="mb-xxs text-body font-bold">
          <MenuSectionLink menuTitle={menuTitle} menuLink={menuLink} ctaSection={ctaSection} />
        </div>
      )}
      <div className="mb-s grid grid-cols-12 gap-s ml:w-[624px]">
        {menuItems.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <LinkWrapper
                ctaSection={ctaSection}
                className="col-span-4 flex flex-col items-center justify-center rounded-[5px] border border-primary border-opacity-0 bg-white py-[18px] px-s !no-underline hover:border-opacity-100 ml:col-span-3 ml:max-w-[136px] ml:bg-light-gray"
                field={{
                  ...item.fields?.tileLink,
                }}
                suppressLinkText
                ariaLabel={{
                  value: (item.fields?.tileImage.value?.alt as string) || 'Tile Image',
                }}
              >
                <ImageWrapper
                  image={{
                    value: {
                      src: item.fields?.tileImage.value?.src,
                      width: '32',
                      height: '32',
                    },
                  }}
                  imageLayout="intrinsic"
                  additionalMobileClasses={additionalImageClasses}
                  additionalDesktopClasses={additionalImageClasses}
                />
                <Text
                  tag="p"
                  className="pointer-events-none text-center text-sm-xxs font-heavy"
                  field={{ value: item.fields?.tileText.value }}
                />
              </LinkWrapper>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
