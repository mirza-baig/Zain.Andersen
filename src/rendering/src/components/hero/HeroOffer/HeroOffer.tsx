// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { useTheme } from 'lib/context/ThemeContext';
import { LinkField, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { getBreakpoint, useCurrentScreenType } from 'lib/utils/get-screen-type';
import classNames from 'classnames';
import { HeroOfferTheme } from './HeroOffer.theme';
import { MediaPrimary } from 'src/helpers/Media';
import { RichTextWrapper } from 'src/helpers/RichTextWrapper';
import { Headline } from 'src/helpers/Headline';
import { Eyebrow } from 'src/helpers/Eyebrow';
import { BodyCopy } from 'src/helpers/BodyCopy';
import DisclaimerText from 'src/helpers/DisclaimerText/DisclaimerText';
import ButtonPrimary from 'src/helpers/Button/buttons/btn--primary';
import { Item } from '@sitecore-jss/sitecore-jss-nextjs';
import { Subheadline } from 'src/helpers/Subheadline';
import { useEffect, useState } from 'react';
import { useOfferCards, offerProps } from 'lib/utils/useOfferCards';
import { useAffiliate } from 'lib/context/AffiliateContext';

export type HeroOfferProps =
  Feature.EnterpriseWeb.RenewalByAndersen.Components.Hero.HeroOffer.HeroOffer;

const HeroOffer = (props: HeroOfferProps) => {
  const { userAffiliate, pageAffiliate } = useAffiliate();
  const { themeData } = useTheme(HeroOfferTheme);
  const { fields } = props;
  const { currentScreenWidth } = useCurrentScreenType();
  const { isLoading, offerData } = useOfferCards();

  const [heroOfferData, setHeroOfferData] = useState('' as unknown as offerProps);

  useEffect(() => {
    setHeroOfferData(offerData);
  }, [offerData]);

  if (!fields) {
    return null;
  }

  const isDesktop = currentScreenWidth >= getBreakpoint('ml') ? true : false;

  const hasOverlay =
    fields?.stylingOptions?.fields.Value.value === 'dark-overlay-white-offer'
      ? 'dark-overlay'
      : fields?.stylingOptions?.fields.Value.value === 'white-overlay-dark-offer'
      ? 'white-overlay'
      : 'no-overlay';

  const primaryImage = fields?.primaryImage?.value;

  const imageStyles =
    primaryImage && isDesktop
      ? {
          backgroundImage: `url(${primaryImage.src || primaryImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }
      : {};

  const OfferDetailBox =
    hasOverlay === 'dark-overlay'
      ? 'bg-light-gray [&_div]:!text-black'
      : hasOverlay === 'white-overlay'
      ? 'bg-black [&_div]:!text-white theme-black'
      : hasOverlay === 'no-overlay' && 'bg-black [&_div]:!text-white theme-black';

  const dateString = heroOfferData?.offerEndDate?.value;
  const year = dateString?.substring(0, 4);
  const month = dateString?.substring(4, 6);
  const day = dateString?.substring(6, 8);
  const formattedDate = `${month}/${day}/${year}`;

  return (
    <div
      data-component="hero/herooffer"
      className="relative flex h-full flex-col ml:w-full ml:flex-row"
    >
      {hasOverlay === 'dark-overlay' && isDesktop && (
        <div className={classNames(themeData.classes.darkOverlay, 'min-h-[617px]')}></div>
      )}
      {hasOverlay === 'white-overlay' && isDesktop && (
        <div className={classNames(themeData.classes.lightOverlay, 'min-h-[617px]')}></div>
      )}

      <div className={classNames(themeData.classes.contentWrapper)} style={imageStyles}>
        <div className="mx-auto flex h-full w-full max-w-[1250px] flex-col ml:flex-row">
          {/* Image */}
          <MediaPrimary
            imageLayout="fill"
            ratio="hero"
            additionalDesktopClasses="ml:!hidden"
            additionalMobileClasses="!block md:!block min-h-[280px] ml:!hidden ml:order-0 order-2"
            priority
            {...props}
          />
          {/* Left side */}
          <div
            className={classNames(
              themeData.classes.contentContainer,
              'ml:order-0 order-1',
              hasOverlay === 'white-overlay' ? 'ml:[&>div]:!text-black' : 'ml:[&>div]:!text-white'
            )}
          >
            <Eyebrow classes={classNames(themeData.classes.eyebrow)} {...props} />
            <Headline
              classes={classNames(themeData.classes.headline, 'ml:max-w-[585px]')}
              {...props}
            />
            <RichTextWrapper
              classes={classNames(themeData.classes.bodyClass)}
              field={{
                value: pageAffiliate?.affiliateSubheading || userAffiliate?.affiliateSubheading,
              }}
            />
          </div>

          {/* Right side -> Offer Detail Box */}
          <div className="ml:order-0 order-3 flex w-full !grow  items-center justify-start ml:mb-m ml:mt-l ml:justify-end">
            <div className={classNames(themeData.classes.OfferDetailBox, OfferDetailBox)}>
              {isLoading ? (
                <div className="ml:order-0 order-3 flex w-full items-center justify-center ml:mb-m ml:mt-l"></div>
              ) : (
                <>
                  <hr
                    className={classNames(
                      hasOverlay === 'dark-overlay' ? '!text-black' : '!text-primary',
                      'hidden w-[64px] ml:block'
                    )}
                  />
                  <Headline
                    classes="text-m font-medium"
                    fields={{
                      headlineText: {
                        value:
                          heroOfferData?.headlineText?.value ||
                          heroOfferData?.data?.headlineText ||
                          'BUY ONE GET ONE 40% OFF EACH WINDOW AND DOOR PLUS $200 OFF YOUR ENTIRE PURCHASE*',
                      },
                    }}
                  />
                  <BodyCopy
                    classes={classNames('!text-body')}
                    refer={''}
                    fields={{
                      body: {
                        value:
                          heroOfferData?.subHeadlineText?.value ||
                          heroOfferData?.data?.subHeadlineText ||
                          'PLUS 12 MONTHS $0 MONEY DOWN, 0% INTEREST, AND $0 MONTHLY PAYMENTS*',
                      },
                    }}
                  />
                  <ButtonPrimary
                    classes={themeData.classes.buttonGroupClass}
                    variant={
                      {
                        id: '',
                        name: '',
                        url: '',
                        fields: {
                          Value: {
                            value: 'primary',
                          },
                        },
                      } as Item
                    }
                    field={
                      {
                        value: {
                          href: '',
                          text:
                            heroOfferData?.link?.ctaText ||
                            heroOfferData?.data?.ctaText ||
                            'Don’t miss this offer',
                          linktype: 'external',
                          url: heroOfferData?.link?.ctaUrl || heroOfferData?.data?.ctaUrl || '',
                          anchor: '',
                          target: '_blank',
                        },
                      } as LinkField
                    }
                    icon={{
                      id: 'f8ad4587-51a4-4e66-8eec-b448f78b4cb2',
                      url: 'http://localhost/sitecore/login/sitecore/system/Settings/Foundation/EnterpriseWeb/Enums/Icons/Augmented-Reality',
                      name: 'Augmented Reality',
                      displayName: 'Augmented Reality',
                      fields: {
                        Value: {
                          value: 'arrow',
                        },
                      },
                      templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
                      templateName: 'Enum',
                    }}
                  />
                  <Subheadline
                    classes={classNames(themeData.classes.subHeadline)}
                    fields={{
                      subheadlineText: {
                        value: `Offer ends ${
                          (heroOfferData?.data?.offerEndDate !== 'undefined' &&
                            heroOfferData?.data?.offerEndDate) ||
                          (formattedDate !== 'undefined/undefined/undefined'
                            ? formattedDate
                            : '12/31/' +
                              new Date().toLocaleDateString(undefined, { year: 'numeric' }))
                        }`,
                      },
                    }}
                  />
                  <DisclaimerText
                    fields={{
                      value:
                        heroOfferData?.offerDetails?.value ||
                        heroOfferData?.data?.offerDetails ||
                        'Minimum purchase required. Interest accrues from date of purchase, but is waived if paid in full within 12 months.*',
                    }}
                    disclaimerClasses={classNames(themeData.classes.disclaimerClasses)}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withDatasourceCheck()<HeroOfferProps>(HeroOffer);
