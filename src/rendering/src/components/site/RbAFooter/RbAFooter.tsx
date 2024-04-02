// Global
import { ReactElement, useEffect, useState } from 'react';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
// Components
import { Component } from 'src/helpers/Component';
import { getEnum, useExperienceEditor } from 'lib/utils';
import {
  Field,
  ImageField,
  LinkField,
  Text,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { BodyCopy } from 'src/helpers/BodyCopy';
import { IconTypes, SvgIcon } from 'src/helpers/SvgIcon';
import { LinkWrapper } from 'src/helpers/LinkWrapper';
import { Subheadline } from 'src/helpers/Subheadline';
import { Item } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/types/component-props';
import { useAffiliate } from 'lib/context/AffiliateContext';
import classNames from 'classnames';
import Image from 'next/image';
import ButtonPrimary from 'src/helpers/Button/buttons/btn--primary';
import ButtonSecondary from 'src/helpers/Button/buttons/btn--secondary';
import ButtonLink from 'src/helpers/Button/buttons/btn--link';
import { useFlyoutStore } from 'src/helpers/Flyout/flyout.store';
import { parseAffiliateURL } from 'lib/affiliate/utils';
import { isSvgUrl } from 'lib/utils/string-utils';

export type RbAFooterProps =
  Feature.EnterpriseWeb.RenewalByAndersen.Components.Navigation.RbAFooter & {
    fields?: {
      socialLinks: Feature.EnterpriseWeb.Enterprise.Elements.Social.SocialLink[];
    };
  } & ComponentProps;

const RbAFooter = (props: RbAFooterProps) => {
  const isEE = useExperienceEditor();
  const { userAffiliate } = useAffiliate();
  const { setFlyoutVisibility } = useFlyoutStore();

  const [siteSwitcherLink, setSiteSwticherLink] = useState<null | LinkField>(null);

  const getSiteSwitcherLink = (): LinkField | null => {
    // Check if running on the client side
    if (typeof window !== 'undefined') {
      // Determine the current domain and switch it
      const switchedUrl: string = window.location.href.replace(
        /\.(com|ca)/g,
        (_: string, domain: string) => (domain === 'com' ? '.ca' : '.com')
      );

      const linkField = {
        value: {
          href: switchedUrl,
          linktype: 'external',
          url: switchedUrl,
        },
      };

      return linkField;
    }

    return null;
  };

  useEffect(() => {
    setSiteSwticherLink(getSiteSwitcherLink());
  }, []);

  if (!props.fields) {
    return <></>;
  }

  const getCityStateZipText = (): string => {
    if (!userAffiliate.city && !userAffiliate.state?.abbreviation && !userAffiliate.postalCode) {
      return '';
    }

    return `${userAffiliate.city ? `${userAffiliate.city},` : ''} ${
      userAffiliate.state?.abbreviation ? userAffiliate.state?.abbreviation : ''
    } ${userAffiliate.postalCode ? userAffiliate.postalCode : ''}`;
  };

  const currentYear = new Date().getFullYear().toString();
  let textWithReplacedYear;
  if (props.fields?.copyrightText.value?.includes('{currentYear}')) {
    textWithReplacedYear = props.fields?.copyrightText?.value.replace('{currentYear}', currentYear);
  }

  const rbaLogo = {
    value: {
      ...props.fields?.rbaLogo?.value,
      width: '173',
      height: '63',
    },
  };

  const awLogo = {
    value: {
      ...props.fields?.awLogo?.value,
      width: '157',
      height: '27',
    },
  };

  const logo1 = {
    value: {
      ...props.fields?.logo1?.value,
      width: props.fields?.logo1?.value?.width,
      height: '56',
    },
  };

  const logo2 = {
    value: {
      ...props.fields?.logo2?.value,
      width: props.fields?.logo2?.value?.width,
      height: '56',
    },
  };

  const logo3 = {
    value: {
      ...props.fields?.logo3?.value,
      width: props.fields?.logo3?.value?.width,
      height: '56',
    },
  };

  // ====== Filtering Primary List from navGroup ======
  const navGroup = props.fields?.children;
  const primaryGroup = props.fields?.primaryMenuList;

  // To find two Id's of menus are equal.
  const isSameMenuId = (primaryMenu: Item, navGroupMenu: Item) =>
    primaryMenu.id === navGroupMenu.id;

  // Get items that only occur in the primaryMenuList array, by using the compareFunction to determine equality.
  const onlyPrimaryGroup = (
    navGroupData: Item[],
    primaryGroupData: Item[],
    compareFunction: {
      (navsValue: Item, primaryValue: Item): boolean;
    }
  ) =>
    navGroupData?.filter((navsValue) =>
      primaryGroupData?.some((primaryValue) => compareFunction(navsValue, primaryValue))
    );

  const primaryMenuList = onlyPrimaryGroup(navGroup, primaryGroup, isSameMenuId);
  // spread common Id's
  const primaryList = [primaryMenuList];
  // ====================================================

  return (
    <Component
      variant="full"
      padding="px-m py-m ml:pt-ml ml:pb-[27px]"
      backgroundVariant="black"
      dataComponent="site/rbafooter"
      {...props}
    >
      <div className="col-span-12 mx-auto grid w-full max-w-[1200px] grid-cols-2 flex-col gap-s ml:flex-none ml:grid-cols-12 ml:gap-y-xxs">
        {/* 1. Affiliate Address */}
        <div className="order-2 col-span-12 text-white ml:order-none ml:col-span-3">
          {userAffiliate && (
            <div className="mb-m grid text-white max-ml:border-b max-ml:border-solid max-ml:border-b-white">
              {/* Affiliate Name */}
              {userAffiliate?.affiliateId !== '0' && (
                <>
                  <Text
                    tag={'h3'}
                    className="mb-xxs font-serif !text-body font-bold"
                    field={{ value: userAffiliate.affiliateName }}
                  />
                  {/* Retailer information */}
                  {userAffiliate.affiliateLandingPage?.url && (
                    <ButtonLink
                      field={{
                        value: {
                          text: 'Retailer information',
                          href: parseAffiliateURL(userAffiliate?.affiliateLandingPage),
                        },
                      }}
                      icon={{
                        id: '50590edc-7ea7-4436-9a3e-701c87a07db2',
                        url: '/sitecore/content/andersencorporation/enterprise-global/enums/cta-icons/arrow',
                        name: 'Arrow',
                        displayName: 'Arrow',
                        fields: {
                          Value: {
                            value: 'arrow',
                          },
                        },
                        templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                        templateName: 'Enum',
                      }}
                      variant={undefined}
                      classes={
                        'text-body mb-xxs text-primary font-bold hover:!decoration-1 hover:underline-offset-1'
                      }
                    />
                  )}
                </>
              )}
              {/* Address */}
              <Text
                tag={'h3'}
                className="mb-xxs font-serif text-body font-bold"
                field={{ value: 'Administrative offices' }}
              />
              {userAffiliate.addressLine1 && (
                <Text
                  tag={'p'}
                  className="font-serif text-body font-regular"
                  field={{
                    value: userAffiliate.addressLine1,
                  }}
                />
              )}
              {userAffiliate.addressLine2 && (
                <Text
                  tag={'p'}
                  className="font-serif text-body font-regular"
                  field={{
                    value: userAffiliate.addressLine2,
                  }}
                />
              )}
              <Text
                tag={'p'}
                className="font-serif text-body font-regular"
                field={{
                  value: getCityStateZipText(),
                }}
              />
              {/* Phone Number */}
              <LinkWrapper
                ctaSection="header"
                className="text-body"
                field={{
                  href: `tel: ${userAffiliate.administrativeOfficePhoneNumber}`,
                  text: userAffiliate.administrativeOfficePhoneNumber,
                }}
                ariaLabel={{
                  value: 'Administrative Office Phone Number',
                }}
              />
              {/* Showroom information with Flyout */}
              {userAffiliate?.showrooms?.length > 0 && userAffiliate?.affiliateId !== '0' ? (
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    setFlyoutVisibility(true);
                  }}
                >
                  <div className="mb-s mt-xxs flex ml:mb-0">
                    <LinkWrapper
                      ctaSection="header"
                      className="text-body font-bold hover:underline"
                      field={{
                        href: '#',
                        text: 'Showroom information',
                      }}
                      ariaLabel={{
                        value: 'Showroom information',
                      }}
                    />
                    <SvgIcon
                      icon="arrow-drop-down"
                      fillId="white"
                      size="xl"
                      className={classNames(
                        'ml-xxs w-xs -rotate-90 text-white transition-transform duration-300'
                      )}
                    />
                  </div>
                </div>
              ) : (
                <div className="mb-s mt-xxs ml:mb-0"></div>
              )}
            </div>
          )}
        </div>
        {/* 2. Primary Menu List */}
        <div className="order-3 col-span-12 -mt-s text-white ml:order-none ml:col-span-6 ml:mt-0">
          <div className="flex w-full flex-wrap gap-s text-white ml:flex-row ml:flex-nowrap ml:gap-x-4">
            {primaryList &&
              primaryMenuList?.map((menu: RbAFooterProps, index: number) => {
                {
                  return (
                    <div key={index} className="flex w-[188px] flex-col ml:pr-xxs">
                      <div className="mb-xxxs font-serif text-body font-bold text-white">
                        <Text tag={'p'} field={menu.fields?.navigationGroupTitle} />
                      </div>
                      <ul className={`flex flex-col`}>
                        {menu.fields?.children?.map((nav: RbAFooterProps, index: number) => {
                          return (
                            nav.fields?.link && (
                              <li
                                key={index}
                                className="cursor-pointer py-xxxs text-body font-regular hover:underline"
                              >
                                <LinkWrapper
                                  ctaSection="footer"
                                  field={nav.fields?.link}
                                  className="text-body"
                                  ariaLabel={{
                                    value: nav.fields?.linkTitle?.value || 'Nav Link Title',
                                  }}
                                >
                                  {nav.fields?.linkTitle?.value}
                                </LinkWrapper>
                              </li>
                            )
                          );
                        })}
                      </ul>
                    </div>
                  );
                }
              })}
          </div>
        </div>
        {/* 3. CTA Links */}
        <div className="order-4 col-span-12 text-white ml:order-none ml:col-span-3">
          {props.fields?.cta1Link && (
            <ButtonPrimary
              field={props.fields?.cta1Link}
              icon={{
                id: '50590edc-7ea7-4436-9a3e-701c87a07db2',
                url: '/sitecore/content/andersencorporation/enterprise-global/enums/cta-icons/arrow',
                name: 'Arrow',
                displayName: 'Arrow',
                fields: {
                  Value: {
                    value: 'arrow',
                  },
                },
                templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                templateName: 'Enum',
              }}
              variant={undefined}
              classes={'mb-s text-button w-[236px] h-[48px] ml:ml-auto flex justify-center'}
            />
          )}
          {props.fields?.cta2Link && (
            <ButtonSecondary
              field={props.fields?.cta2Link}
              icon={{
                id: '50590edc-7ea7-4436-9a3e-701c87a07db2',
                url: '/sitecore/content/andersencorporation/enterprise-global/enums/cta-icons/arrow',
                name: 'Arrow',
                displayName: 'Arrow',
                fields: {
                  Value: {
                    value: 'arrow',
                  },
                },
                templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                templateName: 'Enum',
              }}
              variant={undefined}
              classes={'mb-s text-button w-[236px] h-[48px] ml:ml-auto flex justify-center'}
            />
          )}
          {props.fields?.cta3Link && (
            <ButtonSecondary
              field={props.fields?.cta3Link}
              icon={{
                id: '50590edc-7ea7-4436-9a3e-701c87a07db2',
                url: '/sitecore/content/andersencorporation/enterprise-global/enums/cta-icons/arrow',
                name: 'Arrow',
                displayName: 'Arrow',
                fields: {
                  Value: {
                    value: 'arrow',
                  },
                },
                templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                templateName: 'Enum',
              }}
              variant={undefined}
              classes={'mb-s text-button w-[236px] h-[48px] ml:ml-auto flex justify-center'}
            />
          )}
        </div>
        {/* 4. Horizontal line in Desktop */}
        <div className="border-none ml:col-span-12 ml:border-b ml:border-solid ml:border-b-dark-gray"></div>
        {/* 5. Site Logo Section */}
        <div className="order-1 col-span-12 text-white ml:order-none ml:col-span-4">
          <div className="-ml-[10px] flex flex-row gap-x-xxs ml:ml-0 ml:gap-x-s">
            {props.fields?.rbaLogo && (
              <FooterLogo logoImg={rbaLogo} logoLink={props.fields?.rbaLogoLink} />
            )}
            {props.fields?.awLogo && (
              <FooterLogo logoImg={awLogo} classes="-mt-m" logoLink={props.fields?.awLogoLink} />
            )}
          </div>
        </div>
        {/* 6. Other Award Logos */}
        <div className="order-6 col-span-12 text-white ml:order-none ml:col-span-4">
          <div className="mt-xxs flex flex-wrap gap-y-s ml:flex-nowrap">
            {props.fields?.logo1?.value?.src && (
              <FooterLogo classes="pr-s" logoImg={logo1} logoLink={props.fields?.logo1Link} />
            )}
            {props.fields?.logo2?.value?.src && (
              <FooterLogo logoImg={logo2} logoLink={props.fields?.logo2Link} />
            )}
            {props.fields?.logo3?.value?.src && (
              <FooterLogo classes="ml:pl-s" logoImg={logo3} logoLink={props.fields?.logo3Link} />
            )}
          </div>
        </div>
        {/* 7. Site Switcher Section */}
        <div className="order-7 col-span-12 self-center text-white ml:order-none ml:col-span-4">
          {siteSwitcherLink && (
            <LinkWrapper
              field={siteSwitcherLink}
              ctaSection="footer"
              className="flex w-fit items-center gap-x-xs hover:underline ml:mb-xxxs ml:ml-auto ml:justify-end"
              ariaLabel={{
                value: props.fields?.siteSwitcherFlag?.value?.alt || ' Site Switcher',
              }}
            >
              {props.fields?.siteSwitcherFlag.value?.src && (
                <Image
                  src={props.fields?.siteSwitcherFlag?.value?.src}
                  alt={(props.fields?.siteSwitcherFlag?.value?.alt as string) || 'siteSwitcherFlag'}
                  height={(props.fields?.siteSwitcherFlag?.value?.height as string) || '15px'}
                  width={(props.fields?.siteSwitcherFlag?.value?.width as string) || '20px'}
                  layout="intrinsic"
                  unoptimized={isSvgUrl(props.fields?.siteSwitcherFlag?.value?.src)}
                />
              )}
              <Subheadline
                useTag="span"
                fields={{ subheadlineText: props.fields?.siteSwitcherTitle }}
                classes="text-button font-bold !font-serif"
              />
            </LinkWrapper>
          )}
        </div>
        {/* 8. Social Icons Section */}
        <div className="order-5 col-span-12 flex flex-col text-white ml:order-none ml:col-span-12 ml:w-[33%] ml:flex-row ml:items-center">
          <BodyCopy
            fields={{ body: props.fields?.socialLinksText || { value: '' } }}
            refer={props.fields?.socialLinksText && ''}
            classes="mb-0 font-bold !text-body !leading-[26px] ml:mr-xxs"
          />
          <ul className="flex gap-x-m ml:gap-x-xxs">
            {props.fields?.socialLinks?.map(
              (
                socialLink: Feature.EnterpriseWeb.Enterprise.Elements.Social.SocialLink,
                index: number
              ) => {
                const icon = getEnum<IconTypes>(socialLink?.fields?.icon);
                return (
                  icon &&
                  socialLink?.fields?.link?.value && (
                    <li key={index}>
                      {isEE ? (
                        <SvgIcon icon={icon} />
                      ) : (
                        <LinkWrapper
                          ctaSection="footer"
                          field={socialLink?.fields?.link}
                          ariaLabel={{
                            value: icon || 'icon',
                          }}
                        >
                          <SvgIcon className="!w-24px !h-[24px]" icon={icon} />
                        </LinkWrapper>
                      )}
                    </li>
                  )
                );
              }
            )}
          </ul>
        </div>
        {/* 9. Copy Right */}
        {textWithReplacedYear && (
          <div className="order-9 col-span-12 flex flex-wrap gap-x-s justify-self-start text-white ml:order-none ml:col-span-4">
            <div className="text-small font-regular leading-[26px]">
              <Text field={{ value: textWithReplacedYear }} />
            </div>
          </div>
        )}
        {/* 10. Legal Links Section */}
        <div className="order-8 col-span-12 text-white ml:order-none ml:col-span-8 ml:-mt-l">
          <div className="flex flex-col">
            <Subheadline
              fields={{ subheadlineText: props.fields?.legalText }}
              classes="text-small leading-[20px] font-bold !font-serif"
            />
            <ul>
              {props.fields?.legalLinks?.map((legalLink: RbAFooterProps, index: number) => {
                return (
                  legalLink.fields?.link && (
                    <li
                      key={index}
                      className={classNames(
                        'relative inline px-s text-small font-regular leading-[26px]',
                        index != 0
                          ? 'before:absolute before:top-[3px] before:left-0 before:inline-block before:h-[11px] before:border-l '
                          : 'pl-0'
                      )}
                    >
                      <LinkWrapper
                        ctaSection="footer"
                        className="underline-offset-1 hover:underline"
                        field={legalLink.fields?.link as LinkField}
                        suppressLinkText
                        ariaLabel={{
                          value:
                            (legalLink.fields?.linkTitle?.value as string) || 'Legal Link Title',
                        }}
                      >
                        <Text
                          tag=""
                          field={(legalLink.fields?.linkTitle as Field<string>) || { value: '' }}
                        />
                      </LinkWrapper>
                    </li>
                  )
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Component>
  );
};

export default withDatasourceCheck()<RbAFooterProps>(RbAFooter);

interface FooterLogoProps {
  logoImg: ImageField;
  logoLink: LinkField;
  classes?: string;
}

const FooterLogo = (props: FooterLogoProps): ReactElement => {
  if (props.logoImg?.value?.src) {
    return (
      <LinkWrapper
        ctaSection="footer"
        field={props.logoLink}
        className={classNames('flex  justify-center', props.classes)}
        title={(props.logoImg.value?.alt as string) || 'Footer Logo'}
        ariaLabel={{ value: (props.logoImg.value?.alt as string) || 'Footer Logo' }}
      >
        <Image
          src={props.logoImg.value?.src}
          alt={(props.logoImg.value?.alt as string) || ''}
          height={props.logoImg.value?.height as string}
          width={props.logoImg.value?.width as string}
          layout="intrinsic"
        />
      </LinkWrapper>
    );
  }
  return <></>;
};
