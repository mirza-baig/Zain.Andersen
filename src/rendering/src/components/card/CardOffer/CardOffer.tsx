// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

// Components
import DisclaimerText from 'src/helpers/DisclaimerText/DisclaimerText';
import { Subheadline } from 'src/helpers/Subheadline';

// ButtonPrimary,
import { ButtonPrimaryClasses } from 'src/helpers/Button/buttons/btn--primary';
import { BodyCopy } from 'src/helpers/BodyCopy';
import { Headline } from 'src/helpers/Headline';
import { getBreakpoint, useCurrentScreenType } from 'lib/utils/get-screen-type';
import { MediaPrimary } from 'src/helpers/Media';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { getEnum } from 'lib/utils';
import { useTheme } from 'lib/context/ThemeContext';
import { SvgIcon } from 'src/helpers/SvgIcon';
import ModalWrapper from 'src/helpers/ModalWrapper/ModalWrapper';
import { LinkWrapper } from 'src/helpers/LinkWrapper';
import { offerProps, useOfferCards } from 'lib/utils/useOfferCards';

export type CardOfferProps = Feature.EnterpriseWeb.RenewalByAndersen.Cards.CardOffer;

export type LegalOption = 'modal' | 'card';

const CardOffer = (props: CardOfferProps) => {
  const { currentScreenWidth } = useCurrentScreenType();
  const { fields } = props;
  const { themeName } = useTheme();
  const { isLoading, offerData } = useOfferCards();
  const isDesktop = currentScreenWidth >= getBreakpoint('ml') ? true : false;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardOfferData, setCardOfferData] = useState('' as unknown as offerProps);
  const [endDateString, setEndDateString] = useState('');

  useEffect(() => {
    setCardOfferData(offerData);

    if (typeof offerData?.offerEndDate?.value === 'string') {
      setEndDateString(offerData?.offerEndDate?.value);
    } else {
      setEndDateString(offerData?.offerEndDate);
    }
  }, [offerData]);

  if (!fields) {
    return null;
  }

  const year = endDateString?.substring(0, 4);
  const month = endDateString?.substring(4, 6);
  const day = endDateString?.substring(6, 8);

  const formattedEndDate = `${month}/${day}/${year}`;

  const legalDisclaimerText = getEnum<LegalOption>(fields?.legalCopyVisibilityOptions);

  const handleCloseModal = () => {
    setIsModalOpen(!isModalOpen);
    if (legalDisclaimerText === 'card' && cardOfferData?.data?.phoneNumber === '') {
      window.open(cardOfferData?.data?.ctaUrl || cardOfferData?.link?.ctaUrl);
    }
  };

  const hasOverlay =
    fields?.backgroundColor?.fields.Value.value === 'blackWithNoOutline'
      ? 'black-overlay'
      : fields?.backgroundColor?.fields.Value.value === 'whiteWithGreenOutline'
      ? 'white-overlay'
      : 'defaultOverlay';

  const primaryImage = fields?.primaryImage?.value;
  const primaryImageMobile = fields?.primaryImageMobile?.value;

  const imageStyles =
    primaryImage && isDesktop
      ? {
          backgroundImage: `url(${primaryImage.src || primaryImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }
      : {
          backgroundImage: `url(${primaryImageMobile.src || primaryImageMobile})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        };

  return (
    <div
      data-component="card/cardoffer"
      className={classNames(
        hasOverlay === 'black-overlay' ? 'theme-black' : 'theme-white',
        'relative flex h-full flex-col ml:w-full ml:flex-col'
      )}
    >
      {isLoading ? (
        <div className="flex w-full items-center justify-center ml:mb-m ml:mt-l"></div>
      ) : (
        <>
          <div
            className={classNames(
              'absolute left-0 top-0 z-[1] h-full w-full',
              hasOverlay === 'black-overlay'
                ? 'bg-[rgba(0,0,0,0.60)]'
                : hasOverlay === 'white-overlay'
                ? 'bg-white !text-black opacity-[0.5]'
                : '!text-white'
            )}
          ></div>
          {primaryImage?.src === undefined && hasOverlay !== 'white-overlay' && (
            <div className="absolute left-0 top-0 z-[1] h-full w-full !bg-black"></div>
          )}
          <div
            className={classNames(
              hasOverlay === 'white-overlay'
                ? 'border-[3px] border-primary !text-black'
                : '!text-white',
              'flex h-full w-full flex-col items-center ml:flex-row '
            )}
            style={imageStyles}
          >
            <div className="mx-auto flex h-full w-full max-w-[1250px] flex-col ml:flex-row">
              {/* Image */}
              <MediaPrimary
                imageLayout="fill"
                ratio="hero"
                additionalDesktopClasses="ml:!hidden"
                additionalMobileClasses="!block ml:!hidden"
                priority
                {...props}
              />
              <div className="z-[1] flex w-full !grow px-m !py-l ">
                <div className="flex w-full flex-col justify-center gap-s ml:self-center">
                  <>
                    <hr className="mt-xxxs w-[64px] !text-primary" />
                    <Headline
                      classes="text-m font-medium"
                      fields={{
                        headlineText: {
                          value:
                            cardOfferData?.headlineText?.value || cardOfferData?.data?.headlineText,
                        },
                      }}
                    />
                    <BodyCopy
                      classes="!text-body"
                      refer={''}
                      fields={{
                        body: {
                          value:
                            cardOfferData?.subHeadlineText?.value ||
                            cardOfferData?.data?.subHeadlineText,
                        },
                      }}
                    />
                    <LinkWrapper
                      onClick={(e) => {
                        if (legalDisclaimerText === 'modal') {
                          // Prevent the default behavior of the link if it's a modal
                          e.preventDefault();
                          handleCloseModal();
                        }
                      }}
                      className={classNames(ButtonPrimaryClasses(themeName).btnClass)}
                      field={{
                        href:
                          legalDisclaimerText === 'card'
                            ? `tel:${cardOfferData?.data?.phoneNumber || ''}`
                            : '',
                        text:
                          legalDisclaimerText === 'card'
                            ? cardOfferData?.data?.phoneNumber ||
                              cardOfferData?.data?.ctaText ||
                              cardOfferData?.link?.ctaText ||
                              'See Offer Details'
                            : cardOfferData?.data?.ctaText ||
                              cardOfferData?.link?.ctaText ||
                              'See Offer Details',
                      }}
                    >
                      <SvgIcon
                        icon="arrow"
                        className={classNames(ButtonPrimaryClasses(themeName).iconClass)}
                      />
                    </LinkWrapper>

                    <Subheadline
                      classes="text-body !font-serif font-bold"
                      fields={{
                        subheadlineText: {
                          value: `Offer ends ${
                            cardOfferData?.data?.offerEndDate || formattedEndDate
                          }`,
                        },
                      }}
                    />
                    <Subheadline
                      classes="text-small !font-serif font-regular -mt-s !mb-xxs"
                      fields={{
                        subheadlineText: {
                          value:
                            cardOfferData?.offerDetails?.value || cardOfferData?.data?.offerDetails,
                        },
                      }}
                    />
                  </>
                </div>
              </div>
            </div>
          </div>
          {legalDisclaimerText === 'card' && (
            <div className="z-[2] bg-black px-m py-s !text-white">
              <DisclaimerText
                fields={{
                  value:
                    cardOfferData?.legalDisclaimer?.value || cardOfferData?.data?.legalDisclaimer,
                }}
                disclaimerClasses="!text-legal !leading-[16px]"
              />
            </div>
          )}
        </>
      )}
      {/* Modal */}
      {legalDisclaimerText === 'modal' && isModalOpen && (
        <ModalWrapper
          isModalOpen={isModalOpen}
          handleClose={handleCloseModal}
          size="large"
          closeIconClasses="mt-xs mb-xxxs mr-s text-black"
        >
          <div className="z-[2] -mb-s flex flex-col items-center justify-evenly gap-y-s overflow-x-scroll bg-white px-m py-s !text-black">
            <Headline
              classes="text-m font-medium text-center"
              fields={{
                headlineText: {
                  value: cardOfferData?.headlineText?.value || cardOfferData?.data?.headlineText,
                },
              }}
            />
            <BodyCopy
              classes="!text-body"
              refer={''}
              fields={{
                body: {
                  value:
                    cardOfferData?.subHeadlineText?.value || cardOfferData?.data?.subHeadlineText,
                },
              }}
            />
            <Subheadline
              classes="text-body !font-serif"
              fields={{
                subheadlineText: {
                  value: `Offer ends ${cardOfferData?.data?.offerEndDate || formattedEndDate}
                    `,
                },
              }}
            />
            <Subheadline
              classes="text-small !font-serif font-regular"
              fields={{
                subheadlineText: {
                  value: cardOfferData?.offerDetails?.value || cardOfferData?.data?.offerDetails,
                },
              }}
            />
            <DisclaimerText
              fields={{
                value:
                  cardOfferData?.legalDisclaimer?.value || cardOfferData?.data?.legalDisclaimer,
              }}
              disclaimerClasses="!text-legal !leading-[16px]"
            />
          </div>
        </ModalWrapper>
      )}
    </div>
  );
};

export default withDatasourceCheck()<CardOfferProps>(CardOffer);
