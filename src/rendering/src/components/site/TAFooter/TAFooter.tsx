// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import {
  Field,
  ImageField,
  LinkField,
  Text,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
// Components
import { Component } from 'src/helpers/Component';
import { ComponentProps } from 'lib/types/component-props';
import { LinkWrapper } from 'src/helpers/LinkWrapper';
import Image from 'next/image';
import classNames from 'classnames';
import { BodyCopy } from 'src/helpers/BodyCopy';
import { getEnum, useExperienceEditor } from 'lib/utils';
import { IconTypes, SvgIcon } from 'src/helpers/SvgIcon';
import { Subheadline } from 'src/helpers/Subheadline';
import { ReactElement, useEffect, useState } from 'react';
import { Item } from '@sitecore-jss/sitecore-jss-nextjs';
import { isSvgUrl } from 'lib/utils/string-utils';

export type TAFooterProps =
  Feature.EnterpriseWeb.RenewalByAndersen.Components.Navigation.TAFooter & {
    fields?: {
      socialLinks: Feature.EnterpriseWeb.Enterprise.Elements.Social.SocialLink[];
    };
  } & ComponentProps;

const TAFooter = (props: TAFooterProps) => {
  const isEE = useExperienceEditor();

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

  const currentYear = new Date().getFullYear().toString();
  let textWithReplacedYear;
  if (props.fields.copyrightText.value?.includes('{currentYear}')) {
    textWithReplacedYear = props.fields.copyrightText.value.replace('{currentYear}', currentYear);
  }

  const rbaLogo = {
    value: {
      ...props.fields.rbaLogo.value,
      width: '143',
      height: '49',
    },
  };

  const awLogo = {
    value: {
      ...props.fields.awLogo.value,
      width: '188',
      height: '26',
    },
  };

  return (
    <Component
      variant="full"
      padding="px-m py-m ml:pt-ml ml:pb-m"
      backgroundVariant="black"
      dataComponent="site/tafooter"
      {...props}
    >
      <div className="col-span-12 mx-auto grid w-full max-w-[1200px] grid-cols-2 gap-s ml:grid-cols-12 ml:gap-y-xxxs ">
        {/* Site Logo Section */}
        <div className="col-span-2  text-white ml:col-span-8">
          <div className="flex flex-row gap-x-xxs ml:gap-x-s">
            {props.fields?.rbaLogo && (
              <FooterLogo logoImg={rbaLogo} logoLink={props.fields.rbaLogoLink} />
            )}
            {props.fields?.awLogo && (
              <FooterLogo logoImg={awLogo} logoLink={props.fields.awLogoLink} />
            )}
          </div>
        </div>
        {/* Social Icons Section */}
        <div className="col-span-2 flex flex-col flex-wrap justify-end gap-x-s  text-white ml:col-span-4 ml:flex-row ml:items-center">
          <BodyCopy
            fields={{ body: props.fields.socialLinksText || { value: '' } }}
            classes="mb-0 ml:text-right font-bold text-body"
          />
          <ul className="flex gap-x-xxs">
            {props.fields.socialLinks?.map(
              (
                socialLink: Feature.EnterpriseWeb.Enterprise.Elements.Social.SocialLink,
                index: number
              ) => {
                const icon = getEnum<IconTypes>(socialLink.fields.icon);
                return (
                  icon &&
                  socialLink?.fields?.link?.value && (
                    <li key={index}>
                      {isEE ? (
                        <SvgIcon icon={icon} />
                      ) : (
                        <LinkWrapper
                          ctaSection="footer"
                          field={socialLink.fields.link}
                          ariaLabel={{
                            value: socialLink.fields.icon?.displayName || 'Social Icon',
                          }}
                        >
                          <SvgIcon icon={icon} />
                        </LinkWrapper>
                      )}
                    </li>
                  )
                );
              }
            )}
          </ul>
        </div>
        {/* Legal Links Section */}
        <div className="col-span-2  mb-xxs text-white ml:col-span-8 ml:mb-0">
          <div className="flex flex-col">
            <Subheadline
              fields={{ subheadlineText: props.fields.legalText }}
              classes="mb-m ml:mb-xxxs text-small font-bold !font-serif"
            />
            <ul>
              {props.fields.legalLinks?.map((legalLink: Item, index: number) => {
                return (
                  legalLink.fields?.link && (
                    <li
                      key={index}
                      className={classNames(
                        'relative inline px-s text-small',
                        index != 0
                          ? 'before:absolute before:top-[3px] before:left-0 before:inline-block before:h-[11px] before:border-l '
                          : 'pl-0'
                      )}
                    >
                      <LinkWrapper
                        ctaSection="footer"
                        className="underline-offset-1 hover:underline"
                        field={legalLink.fields.link as LinkField}
                        suppressLinkText
                        ariaLabel={{
                          value: legalLink?.displayName || 'Legal Link',
                        }}
                      >
                        <Text
                          tag=""
                          field={(legalLink.fields.linkTitle as Field<string>) || { value: '' }}
                        />
                      </LinkWrapper>
                    </li>
                  )
                );
              })}
            </ul>
          </div>
        </div>
        {/* Site Switcher Section */}
        <div className="col-span-2  text-white ml:col-span-4">
          {siteSwitcherLink && (
            <LinkWrapper
              field={siteSwitcherLink}
              ctaSection="footer"
              className="mb-m flex w-fit items-center gap-x-xs  hover:underline ml:mb-xxxs ml:ml-auto ml:justify-end"
              ariaLabel={{
                value: props.fields.siteSwitcherFlag.value?.alt as string,
              }}
            >
              {props.fields.siteSwitcherFlag.value?.src && (
                <Image
                  src={props.fields.siteSwitcherFlag.value?.src}
                  alt={(props.fields.siteSwitcherFlag.value?.alt as string) || ''}
                  height={props.fields.siteSwitcherFlag.value?.height as string}
                  width={props.fields.siteSwitcherFlag.value?.width as string}
                  layout="intrinsic"
                  unoptimized={isSvgUrl(props.fields.siteSwitcherFlag.value?.src)}
                />
              )}
              <Subheadline
                useTag="span"
                fields={{ subheadlineText: props.fields.siteSwitcherTitle }}
                classes="text-body font-bold !font-serif"
              />
            </LinkWrapper>
          )}

          <div className="text-sm-xxs font-regular ml:text-right">
            <Text field={{ value: textWithReplacedYear }} />
          </div>
        </div>
      </div>
    </Component>
  );
};

export default withDatasourceCheck()<TAFooterProps>(TAFooter);

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
        className={classNames('flex h-fit justify-center', props.classes)}
        ariaLabel={{
          value: props.logoImg.value?.alt as string,
        }}
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
