// Components
import React from 'react';
import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { Project } from 'src/.generated/Project.AndersenCorporation.model';
import { ComponentProps } from 'lib/types/component-props';
import { useExperienceEditor } from 'lib/utils';
import { Component } from 'src/helpers/Component';
import ImageWrapper from 'src/helpers/Media/ImageWrapper';

const ShowroomAddressAndHours = (props: ComponentProps): JSX.Element => {
  const context = useSitecoreContext();
  const isEE = useExperienceEditor();

  const showroomPage = context.sitecoreContext
    .route as Project.AndersenCorporation.RenewalByAndersen.Pages.ShowroomPage;

  const showroom = showroomPage.fields?.showroom as
    | Feature.EnterpriseWeb.RenewalByAndersen.Data.Affiliates.Datasources.Showroom
    | undefined;

  if (!showroom) {
    if (isEE) {
      return <div>Not on a Showroom page, or no showroom selected for page</div>;
    }
    return <></>;
  }

  const hoursParams = new URLSearchParams(showroom?.fields?.hours.value);

  return (
    <Component
      variant="lg"
      dataComponent="affiliate/showroom-address-and-hours"
      gap="gap-y-m md:gap-s"
      {...props}
      rendering={{ dataSource: 'StaticDataSource' }}
    >
      <div className="col-span-12 md:col-span-4 md:col-start-2">
        <h2 className="mb-s font-sans text-sm-s font-medium md:text-m">Address and hours</h2>
        <div className="mb-m text-sm-xs font-bold text-dark-gray">
          <p className="">
            {showroom?.fields?.addressLine1?.value || ''}
            {showroom?.fields?.addressLine2?.value || ''}
          </p>
          <p className="mb-s">
            {showroom?.fields?.city?.value}, {showroom?.fields?.state?.name},{' '}
            {showroom?.fields?.postalCode?.value}
          </p>
          <a href={`tel:${showroom.fields?.locationPhoneNumber.value}`}>
            {showroom.fields?.locationPhoneNumber.value}
          </a>
        </div>
        <h3 className="text-sm-xxs font-bold">Showroom hours</h3>
        <ul className="text-body text-dark-gray">
          {[...hoursParams.keys()].map((key) => (
            <li key={key}>
              {key}: {hoursParams.get(key)}
            </li>
          ))}
        </ul>
      </div>
      {showroom.fields?.showroomImage?.value?.src && (
        <div className="col-span-12 md:col-span-7">
          <ImageWrapper image={showroom.fields?.showroomImage} imageLayout="intrinsic" />
        </div>
      )}
    </Component>
  );
};

export default ShowroomAddressAndHours;
