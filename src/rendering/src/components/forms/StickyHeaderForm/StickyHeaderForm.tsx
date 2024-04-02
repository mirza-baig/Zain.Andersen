// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { Placeholder, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { getCookie, setCookie } from 'cookies-next';
// Components
import React from 'react';
import { Component } from 'src/helpers/Component';
import { Headline } from 'src/helpers/Headline';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Subheadline } from 'src/helpers/Subheadline';
import DisclaimerText from 'src/helpers/DisclaimerText/DisclaimerText';
import ModalWrapper from 'src/helpers/ModalWrapper/ModalWrapper';
import { BodyCopy } from 'src/helpers/BodyCopy';
import { LinkWrapper } from 'src/helpers/LinkWrapper';
import ImageWrapper from 'src/helpers/Media/ImageWrapper';
import { useOfferCards, offerProps } from 'lib/utils/useOfferCards';

const CONSULTATION_FORM_SUBMIT_STATUS_COOKIE_NAME = 'isConsultationRequested';

export type StickyHeaderFormProps =
  Feature.EnterpriseWeb.RenewalByAndersen.Components.Forms.StickyHeaderForm.StickyHeaderForm;
const StickyHeaderForm = (props: StickyHeaderFormProps) => {
  const { rendering, fields } = props;
  const { isLoading, offerData } = useOfferCards();

  const displayOfferChecked = fields?.displayOffer?.value;

  const [isFormSticky, setIsFormSticky] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [stickyOfferData, setStickyOfferData] = useState('' as unknown as offerProps);
  const [endDateString, setEndDateString] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFormSticky(true);
      } else {
        setIsFormSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setStickyOfferData(offerData);

    if (typeof offerData?.offerEndDate?.value === 'string') {
      setEndDateString(offerData?.offerEndDate?.value);
    } else {
      setEndDateString(offerData?.offerEndDate);
    }
  }, [offerData]);

  if (!fields || getCookie(CONSULTATION_FORM_SUBMIT_STATUS_COOKIE_NAME)) {
    return <></>;
  }

  const handleAfterSuccessfullSubmit = () => {
    const date = new Date();
    date.setTime(date.getTime() + 60 * 24 * 60 * 60 * 1000);

    // set flag in cookies that consultation request form is submited for 60 days
    setCookie(CONSULTATION_FORM_SUBMIT_STATUS_COOKIE_NAME, true, { expires: date });
  };

  const RenderUtilityNav = () => {
    const year = endDateString?.substring(0, 4);
    const month = endDateString?.substring(4, 6);
    const day = endDateString?.substring(6, 8);

    const formattedEndDate = `${month}/${day}/${year}`;

    const handleCloseModal = () => {
      setIsModalOpen(!isModalOpen);
    };

    return (
      <>
        {displayOfferChecked && (
          <div className="col-span-12 mx-[calc(50%-50vw)] !h-[47px] bg-black py-xxs">
            <div className="mx-auto flex h-full items-center justify-center ml:max-w-screen-lg">
              {!isLoading && (
                <>
                  <Headline
                    classes="text-sm-xs text-white !font-serif font-bold"
                    fields={{
                      headlineText: {
                        value:
                          stickyOfferData?.headlineText?.value ||
                          stickyOfferData?.data?.headlineText,
                      },
                    }}
                  />
                  <button
                    onClick={handleCloseModal}
                    className="px-s text-body font-bold text-primary"
                  >
                    {stickyOfferData?.data?.ctaText ||
                      stickyOfferData?.link?.ctaText ||
                      'See Offer Details'}
                  </button>
                  {stickyOfferData?.data?.phoneNumber && (
                    <LinkWrapper
                      className="border-l border-dark-gray pl-s text-button font-bold text-primary"
                      field={{
                        href: `tel: ${stickyOfferData?.data?.phoneNumber || ''}`,
                        text: `Call today ${stickyOfferData?.data?.phoneNumber || ''}`,
                      }}
                    />
                  )}
                  {isModalOpen && (
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
                              value:
                                stickyOfferData?.headlineText?.value ||
                                stickyOfferData?.data?.headlineText,
                            },
                          }}
                        />
                        <BodyCopy
                          classes="!text-body"
                          refer={''}
                          fields={{
                            body: {
                              value:
                                stickyOfferData?.subHeadlineText?.value ||
                                stickyOfferData?.data?.subHeadlineText,
                            },
                          }}
                        />
                        <Subheadline
                          classes="text-body !font-serif"
                          fields={{
                            subheadlineText: {
                              value: `Offer ends ${
                                stickyOfferData?.data?.offerEndDate || formattedEndDate
                              }`,
                            },
                          }}
                        />
                        <Subheadline
                          classes="text-small !font-serif font-regular"
                          fields={{
                            subheadlineText: {
                              value:
                                stickyOfferData?.offerDetails?.value ||
                                stickyOfferData?.data?.offerDetails,
                            },
                          }}
                        />
                        <DisclaimerText
                          fields={{
                            value:
                              stickyOfferData?.legalDisclaimer?.value ||
                              stickyOfferData?.data?.legalDisclaimer,
                          }}
                          disclaimerClasses="!text-legal !leading-[16px]"
                        />
                      </div>
                    </ModalWrapper>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <Component
      variant="full"
      dataComponent="forms/StickyHeaderForm"
      sectionWrapperClasses={classNames(
        isFormSticky ? 'top-0' : '-top-full',
        'mml:block hidden transition-all ease-in-out duration-700 fixed left-0 right-0 z-[9999]'
      )}
      id="stickyForm"
      {...props}
    >
      {RenderUtilityNav()}
      <div className="col-span-12 mx-[calc(50%-50vw)] -mt-s flex min-h-[94px] items-center border-solid border-b-gray bg-light-gray shadow-md ml:border-b">
        <div className="mx-auto w-full max-w-screen-lg">
          <div className="flex py-xs ml:w-full ml:flex-row ml:justify-between">
            {/* RBA Logo */}
            <div className="mt-xxs mml:min-w-[150px] lg:min-w-[180px]">
              <LinkWrapper field={fields.logoLink} suppressLinkText>
                <ImageWrapper
                  image={fields.logo}
                  additionalDesktopClasses="!aspect-auto max-w-[200px]"
                />
              </LinkWrapper>
            </div>

            {/* Form Fields */}
            <div className="flex-grow [&_.pages_.grid]:!gap-x-xxxs">
              <Placeholder
                name="form"
                rendering={rendering}
                isHorizontalForm={true}
                callbackAfterSubmit={handleAfterSuccessfullSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </Component>
  );
};

export default withDatasourceCheck()<StickyHeaderFormProps>(StickyHeaderForm);
