// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { useTheme } from 'lib/context/ThemeContext';
import { LinkField, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
// Components
import { Component } from 'src/helpers/Component';
import { CookieConsentTheme } from './CookieConsent.theme';
import { ComponentProps } from 'lib/types/component-props';
import { Headline } from 'src/helpers/Headline';
import { BodyCopy } from 'src/helpers/BodyCopy';
import { SvgIcon } from 'src/helpers/SvgIcon';
import { getCookie, setCookie } from 'lib/utils/client-storage-utils';
import ButtonPrimary from 'src/helpers/Button/buttons/btn--primary';
import SingleButton from 'src/helpers/SingleButton/SingleButton';
import { Item } from '@sitecore-jss/sitecore-jss-nextjs';

export type CookieConsentProps =
  Feature.EnterpriseWeb.Enterprise.Components.General.CookieConsent.CookieConsent & ComponentProps;
const CookieConsent = (props: CookieConsentProps) => {
  const { themeData } = useTheme(CookieConsentTheme);
  const consentCookieName = 'privacy-notification';

  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (getCookie(consentCookieName)) {
      setIsDismissed(true);
    }
  }, []);

  if (isDismissed) {
    return null;
  }

  const setConsent = () => {
    setCookie(
      consentCookieName,
      1,
      new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 365).toUTCString()
    );

    setIsDismissed(true);
  };

  return (
    <Component variant="full" dataComponent="general/cookieconsent" {...props}>
      <div
        className={classNames(
          'theme-black fixed bottom-0 left-0 right-0 z-10 col-span-12 place-items-center bg-theme-bg'
        )}
      >
        <div className={classNames(themeData.classes.bannerWrapper)}>
          <div className={themeData.classes.textWrapper}>
            <Headline classes={themeData.classes.headline} {...props} />
            <BodyCopy classes={themeData.classes.bodyClass} {...props} />
          </div>
          <div className="col-span-2 place-content-center ml:col-span-3 ml:place-self-end ml:self-center">
            <div className={themeData.classes.buttonsWrapper}>
              <div
                onClick={(e) => {
                  e.preventDefault();
                  setConsent();
                }}
              >
                <ButtonPrimary
                  classes={themeData.classes.acceptCookieButton}
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
                        text: 'Accept',
                        linktype: 'external',
                        url: '',
                        anchor: '',
                        target: '_blank',
                      },
                    } as LinkField
                  }
                />
              </div>
              <SingleButton classes={themeData.classes.secondButton.classes} {...props} />
            </div>
          </div>
          <button
            className={classNames(themeData.classes.iconWrapper)}
            onClick={() => setConsent()}
            title="btn-close"
          >
            <SvgIcon icon="close" size="md" />
          </button>
        </div>
      </div>
    </Component>
  );
};

export default withDatasourceCheck()<CookieConsentProps>(CookieConsent);
