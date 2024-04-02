// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { useTheme } from 'lib/context/ThemeContext';
import { Placeholder, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
// Components
import { Component } from 'src/helpers/Component';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { Headline } from 'src/helpers/Headline';
import { getEnum } from 'lib/utils';
import { ButtonPrimaryClasses } from 'src/helpers/Button/buttons/btn--primary';
import { SvgIcon } from 'src/helpers/SvgIcon';
import ModalWrapper from 'src/helpers/ModalWrapper/ModalWrapper';
import { getBreakpoint, useCurrentScreenType } from 'lib/utils/get-screen-type';
import { getCookie } from 'cookies-next';
import { Subheadline } from 'src/helpers/Subheadline';
import { useScrollDirection } from 'lib/utils/use-scroll-direction';

export type StickyBannerFormContainerProps =
  Feature.EnterpriseWeb.Enterprise.Components.General.StickyBanner.StickyBanner;
const StickyBannerFormContainer = (props: StickyBannerFormContainerProps) => {
  const { fields } = props;
  const { themeName } = useTheme();
  const { currentScreenWidth } = useCurrentScreenType();
  const scrollDirection = useScrollDirection(0);

  // Access the cookie value
  const JOB_INQUIRY_SUBMITTED_COOKIE_NAME = 'JobInquirySubmitted';

  const isMobile = currentScreenWidth < getBreakpoint('md');

  const [isFormSticky, setIsFormSticky] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCookieAvailable, setIsCookieAvailable] = useState(false);

  useEffect(() => {
    setIsCookieAvailable(() => (getCookie(JOB_INQUIRY_SUBMITTED_COOKIE_NAME) ? true : false));

    const handleScroll = () => {
      if (
        window.scrollY > 3 ||
        isMobile ||
        scrollDirection === 'DOWN' ||
        scrollDirection === 'UP'
      ) {
        setIsFormSticky(true);
      } else if (window.scrollY <= 5) {
        setIsFormSticky(false);
      } else {
        setIsFormSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isFormSticky, isMobile, isModalOpen]);

  if (!fields || isCookieAvailable) {
    return <></>;
  }

  const headlineLevel = getEnum<string>(props?.fields.headlineLevel);

  const handleCloseModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Component
      dataComponent="forms/stickybannerformcontainer"
      variant="full"
      sectionWrapperClasses={classNames(
        isFormSticky ? 'ml:top-0 transition-all ease-in-out duration-500' : 'ml:top-[64px]',
        isModalOpen && '!fixed !top-0 transition-none',
        scrollDirection === 'UP' && 'ml:top-[80px] transition-all ease-in-out duration-300',
        'fixed ml:sticky bottom-0 left-0 right-0 block z-[1000] h-[64px] '
      )}
      id="stickybannerformcontainer"
      {...props}
    >
      <div
        className={classNames(
          !isModalOpen && 'ml:hover:h-[72px]',
          'col-span-12 mx-[calc(50%-50vw)] flex min-h-[64px] cursor-pointer items-center bg-primary'
        )}
        onClick={handleCloseModal}
      >
        <div className="mx-auto w-full max-w-screen-lg">
          <div className="flex w-full flex-row !items-center justify-center">
            <Headline
              defaultTag={headlineLevel}
              {...props}
              classes="text-xs font-bold font-serif mr-m"
            />
            <button
              onClick={handleCloseModal}
              className={classNames(
                ButtonPrimaryClasses(themeName).btnClass,
                '!h-[48px] !bg-white !text-black hover:!bg-white hover:!text-black'
              )}
            >
              <Subheadline
                classes="!text-button !font-serif font-bold"
                fields={{
                  subheadlineText: {
                    value: fields.ctaText.value,
                  },
                }}
              />
              <SvgIcon
                icon="arrow"
                className={classNames(
                  ButtonPrimaryClasses(themeName).iconClass,
                  '!text-primary hover:!text-primary'
                )}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {/* rename existing customWrapperClass -> customOverlayclass */}
      {isModalOpen && (
        <ModalWrapper
          customOverlayclass={'mt-[64px]'}
          customContentWrapperclass={'!bg-light-gray'}
          isModalOpen={isModalOpen}
          handleClose={handleCloseModal}
          size="extra-large"
          closeIconClasses="mt-xs mb-xxxs mr-s !bg-light-gray text-black"
        >
          <div className="col-span-12 mx-[calc(50%-50vw)] flex min-h-[64px] cursor-pointer items-center bg-light-gray">
            <div className="mx-auto w-full max-w-screen-lg">
              <div className="flex h-full w-full flex-row !items-center justify-center">
                <div className="z-[2] -mb-s flex flex-col items-center justify-evenly gap-y-s overflow-x-scroll bg-light-gray px-m py-s !text-black">
                  <Placeholder
                    isGenericModal={isModalOpen}
                    name="components"
                    rendering={props.rendering}
                    render={(components) => {
                      return components.map((component, index) => (
                        <div key={index}>{component}</div>
                      ));
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </ModalWrapper>
      )}
    </Component>
  );
};

export default withDatasourceCheck()<StickyBannerFormContainerProps>(StickyBannerFormContainer);
