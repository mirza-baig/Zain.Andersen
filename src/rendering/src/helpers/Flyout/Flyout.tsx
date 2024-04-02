import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { SvgIcon } from 'src/helpers/SvgIcon';
import { useFlyoutStore } from './flyout.store';
import { Address, Affiliate, Showroom, useAffiliate } from 'lib/context/AffiliateContext';
import { getBreakpoint, useCurrentScreenType } from 'lib/utils/get-screen-type';
import { Field, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { BodyCopy } from '../BodyCopy';
import { Spinner } from '../Spinner';
import { LinkWrapper } from '../LinkWrapper';
import { parseAffiliateURL } from 'lib/affiliate/utils';

export const CANADIAN_ZIP_REGEX =
  '^[ABCEGHJ-NPRSTVXYabceghj-nprstvxy][0-9][ABCEGHJ-NPRSTV-Zabceghj-nprstv-z]( ?[0-9][ABCEGHJ-NPRSTV-Zabceghj-nprstv-z][0-9])?$';
export const US_ZIP_REGEX = '^[0-9]{5}$';

type SiteType = 'US' | 'Canada';

export const Flyout = ({ noAffiliateMessage }: { noAffiliateMessage: Field<string> }) => {
  const [zipInputValue, setZipInputValue] = useState('');
  const [isValidZip, setIsValidZip] = useState(false);
  const [zipType, setZipType] = useState<SiteType>('US');
  const [isDataBeingFetched, setIsDataBeingFetched] = useState(false);

  const currentSiteRef = useRef({ isUSSite: true });
  const zipInputRef = useRef<HTMLInputElement>(null);

  const sitecoreContext = useSitecoreContext();
  const { userAffiliate } = useAffiliate();
  const { setFlyoutVisibility, currentZip } = useFlyoutStore();
  const { currentScreenWidth } = useCurrentScreenType();

  const isMobile = currentScreenWidth <= getBreakpoint('ml');

  const USPostRegex = new RegExp(US_ZIP_REGEX);
  const CanadianPostRegex = new RegExp(CANADIAN_ZIP_REGEX);

  useEffect(() => {
    currentSiteRef.current.isUSSite = window.location.hostname.endsWith('.com');
  }, []);

  useEffect(() => {
    setZipInputValue(currentZip);
    // currentZip which is fetched from session storage will always be valid because invalid zip won't be stored.
    setIsValidZip(true);
  }, [currentZip]);

  const setZipCode = (value: string) => {
    setZipInputValue(() => {
      if (!value) {
        return '';
      } else {
        setIsValidZip(() => {
          if (CanadianPostRegex.test(value)) {
            setZipType('Canada');
            return true;
          } else if (USPostRegex.test(value)) {
            setZipType('US');
            return true;
          }
          return false;
        });
        return value;
      }
    });
  };

  /**
   * This function updates the affiliate context and zip code cookie
   */
  const changeZipCode = async () => {
    if (zipInputValue === currentZip || (zipInputValue && !isValidZip)) {
      setZipInputValue('');
      zipInputRef.current?.focus();
      return;
    }

    if (zipInputValue === currentZip) {
      return;
    }

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        zipcode: zipType === 'Canada' ? zipInputValue.substring(0, 3) : zipInputValue,
        language: sitecoreContext.sitecoreContext.language ?? 'en',
      }),
    };

    setIsDataBeingFetched(true);

    const response = await fetch(
      '/api/rba/affiliate/get-affiliate-data-by-zipcode/',
      requestOptions
    );
    const data: { affiliateData: Affiliate } = await response.json();

    if (typeof window !== 'undefined') {
      window.location.href = getDomainURL(data?.affiliateData);
      setFlyoutVisibility(false);
    }
  };

  const checkAndSetSearchParams = (url: URL, searchParam: string, paramValue: string) => {
    url.searchParams.has(searchParam)
      ? url.searchParams.set(searchParam, paramValue)
      : url.searchParams.append(searchParam, paramValue);
  };

  const getDomainURL = (data: Affiliate) => {
    const parsedUrl = new URL(window.location.href);
    // Check if the "ew_affiliate" or "currentZip" parameter is already present
    [
      { searchParam: 'ew_affiliate', paramValue: data?.affiliateId },
      { searchParam: 'currentZip', paramValue: zipInputValue },
    ].forEach((item) => checkAndSetSearchParams(parsedUrl, item.searchParam, item.paramValue));

    const isCrossDomainZipType =
      (currentSiteRef.current.isUSSite && zipType === 'Canada') ||
      (!currentSiteRef.current.isUSSite && zipType === 'US');

    if (isCrossDomainZipType) {
      // Check if the hostname has a top-level domain
      if (/(com|ca)$/.test(parsedUrl.hostname)) {
        // Replace '.com' with '.ca' and vice versa
        parsedUrl.hostname = parsedUrl.hostname.replace(
          /\.(com|ca)/g,
          (_: string, domain: string) => (domain === 'com' ? '.ca' : '.com')
        );
      }
    }

    return parsedUrl.toString();
  };

  const renderShowroomAddress = (showroom: Address | Showroom) => {
    return (
      <>
        {showroom?.city && <p className="font-bold text-black">{showroom?.city}</p>}
        {showroom?.addressLine1 && <p>{showroom.addressLine1}</p>}
        {showroom?.addressLine2 && <p>{showroom.addressLine2}</p>}
        {showroom?.city && (
          <p>{`${showroom.city} ${
            typeof userAffiliate?.state?.abbreviation === 'string'
              ? ', ' + userAffiliate?.state?.abbreviation
              : ''
          } ${showroom?.postalCode && showroom.postalCode}`}</p>
        )}
      </>
    );
  };

  const renderShowroomHours = (showroom: Showroom) => {
    const toggleShowroomHoursVisiblity = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const visibilityClasses = ['[&_#showroomHours]:!inline-block', '[&_span]:-rotate-180'];
      visibilityClasses.forEach((visibilityClass: string) =>
        e.currentTarget.classList.toggle(visibilityClass)
      );
    };

    return (
      <div
        onClick={(e) => toggleShowroomHoursVisiblity(e)}
        className="mr-xxxs mb-xxs text-body font-bold"
      >
        <div className="flex cursor-pointer items-center text-black">
          <p className="mr-xxxs text-xxs">Showroom Hours</p>
          <SvgIcon icon="arrow-drop-down" className="transition ease-linear" />
        </div>
        <div
          id="showroomHours"
          className="hidden whitespace-pre-line text-body font-regular text-dark-gray"
        >
          {showroom?.operationHours
            ?.replace(/%3A/g, ':')
            .replace(/%20/g, ' ')
            .replace(/=/g, ' ')
            .replace(/&/g, '\n')}
        </div>
      </div>
    );
  };

  const renderAffiliateDynamicURL = (url: string) => {
    if (url) {
      return (
        <LinkWrapper
          onClick={(e) => {
            e.preventDefault();
            // Need to prevent shallow routing as these URLs will be created dynamically which causes random behaviour of page reload.
            window.location.href = url;
          }}
          className="mb-xxs flex items-center text-button font-bold text-black"
          field={{ href: url, title: 'Affilaite URL', text: 'Learn More' }}
          ariaLabel={{ value: 'affiliate-landing-page-url' }}
        >
          <SvgIcon className="ml-[6px] text-primary" icon="arrow" size="sm" />
        </LinkWrapper>
      );
    } else {
      return <></>;
    }
  };

  return (
    <div className="relative w-full px-m pt-s pb-xxl">
      <div
        className="absolute top-s right-s cursor-pointer"
        onClick={() => setFlyoutVisibility(false)}
      >
        <SvgIcon icon="close" />
      </div>
      {/* Zip input container */}
      <div className={classNames(zipInputValue && !isValidZip ? 'mb-xxs' : 'mb-m')}>
        <label className="mb-xxs inline-block text-body font-bold" htmlFor="change-zip-textbox">
          Change my location
        </label>
        <div className="relative">
          <input
            ref={zipInputRef}
            disabled={isDataBeingFetched}
            onChange={(e) => setZipCode(e.currentTarget.value)}
            onKeyDown={(e) => e.key === 'Enter' && changeZipCode()}
            value={zipInputValue}
            type="text"
            name="change-zip-textbox"
            id="changeZipTextbox"
            className={classNames(
              zipInputValue && !isValidZip
                ? 'ring-2 ring-[#F14343] focus:ring-[#F14343]'
                : 'ring-1 focus:ring-black',
              'w-full rounded-[100px] border-none pl-[20px] pr-[60px] text-sm-xxs ring-gray focus:ring-2'
            )}
            placeholder={currentSiteRef.current.isUSSite ? 'Zip Code' : 'Postal Code'}
          />
          {!isDataBeingFetched && zipInputValue && (
            <button
              onClick={changeZipCode}
              className="absolute right-[20px] top-1/2 -translate-y-1/2 text-sm-xxs font-bold text-darkprimary"
            >
              {currentZip === zipInputValue || !isValidZip ? 'Clear' : 'Update'}
            </button>
          )}
          {isDataBeingFetched && (
            <div className="absolute right-[20px] top-1/2 -translate-y-1/2 pt-xxxs">
              <Spinner size={20} />
            </div>
          )}
        </div>
        {zipInputValue && !isValidZip && (
          <span className="pl-xs text-xxs leading-[22px] text-[#F14343]">
            Please enter a valid zip code
          </span>
        )}
      </div>
      {/* Affiliate Data */}
      {userAffiliate.affiliateName && (
        <>
          {userAffiliate.affiliateId === '0' && noAffiliateMessage?.value && (
            <div className="border-t border-gray pt-m pb-xxs">
              <BodyCopy
                fields={{
                  body: noAffiliateMessage,
                }}
              />
            </div>
          )}

          <div className="border-t border-gray py-s">
            <span className="mb-xxs inline-block text-xs font-bold">
              {userAffiliate.affiliateName}
            </span>
            {/* Link */}
            {renderAffiliateDynamicURL(parseAffiliateURL(userAffiliate.affiliateLandingPage))}
            {/* Admin office */}
            {(userAffiliate.affiliateId === '0' || userAffiliate.showrooms?.length === 0) && (
              <div className="flex flex-col text-body text-dark-gray">
                <span className="mb-xxs text-xxs font-bold uppercase !text-black">
                  ADMINISTRATIVE OFFICES
                </span>

                {renderShowroomAddress(userAffiliate)}
                {/* Phone Number */}
                {userAffiliate?.administrativeOfficePhoneNumber && (
                  <a
                    href={isMobile ? `tel: ${userAffiliate.administrativeOfficePhoneNumber}` : ''}
                    className="mb-xxs text-body font-bold text-darkprimary !no-underline ml:font-normal ml:text-dark-gray"
                    onClick={(e) => {
                      !isMobile && e.preventDefault();
                    }}
                  >
                    {userAffiliate.administrativeOfficePhoneNumber}
                  </a>
                )}
              </div>
            )}
          </div>
        </>
      )}
      {/* Affiliate showrooms */}
      {userAffiliate.affiliateId > '0' && userAffiliate.showrooms?.length > 0 && (
        <div className="border-t border-gray py-s">
          <span className="mb-s inline-block text-xxs font-bold uppercase">Local showrooms</span>
          <div className="flex flex-col">
            {userAffiliate.showrooms.map((showroom, index) => {
              return (
                <div key={index} className="flex flex-col text-body text-dark-gray">
                  {renderShowroomAddress(showroom)}
                  {/* Directions */}
                  <a
                    className="my-xxs text-body font-bold text-darkprimary !no-underline"
                    href={`https://www.google.com/maps/search/?api=1&query=${userAffiliate?.affiliateName},${showroom?.addressLine1},${showroom?.city},${userAffiliate.state.abbreviation},${showroom.postalCode}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Directions
                  </a>
                  {/* Phone Number */}
                  {showroom?.phoneNumber && (
                    <a
                      href={isMobile ? `tel: ${showroom.phoneNumber}` : ''}
                      className="mb-xxs text-body font-bold text-darkprimary !no-underline ml:font-normal ml:text-dark-gray"
                      onClick={(e) => {
                        !isMobile && e.preventDefault();
                      }}
                    >
                      {showroom.phoneNumber}
                    </a>
                  )}
                  {/* Showroom hours */}
                  {showroom?.operationHours && renderShowroomHours(showroom)}
                  {showroom?.showroomPage && (
                    <div className="mb-s">
                      {renderAffiliateDynamicURL(parseAffiliateURL(showroom.showroomPage))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
