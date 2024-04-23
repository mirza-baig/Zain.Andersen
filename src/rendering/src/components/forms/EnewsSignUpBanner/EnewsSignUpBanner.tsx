// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { Placeholder, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { getCookie } from 'cookies-next';
// Components
import { Component } from 'src/helpers/Component';

export type EnewsSignUpBannerProps =
  Feature.EnterpriseWeb.RenewalByAndersen.Components.Forms.EnewsSignUpBanner.EnewsSignUpBanner;
const EnewsSignUpBanner = (props: EnewsSignUpBannerProps) => {
  const { fields, rendering } = props;

  const visibileCookieName = fields?.visibilityCookie?.fields?.cookieName?.value;

  if (!rendering || getCookie(visibileCookieName)) {
    return <></>;
  }

  return (
    <Component
      variant="full"
      dataComponent="forms/enewssignupbanner"
      id="enewssignupbanner"
      {...props}
    >
      <div className="col-span-12 mx-[calc(50%-50vw)] flex min-h-[94px] items-center bg-light-gray p-m">
        <div className="mx-auto w-full max-w-screen-lg">
          <div className="flex ml:w-full ml:flex-row ml:justify-between">
            {/* Form Fields */}
            <div className="flex-grow [&_.pages_.grid]:!gap-x-xxxs">
              <Placeholder name="form" rendering={rendering} isHorizontalForm={true} />
            </div>
          </div>
        </div>
      </div>
    </Component>
  );
};

export default withDatasourceCheck()<EnewsSignUpBannerProps>(EnewsSignUpBanner);
