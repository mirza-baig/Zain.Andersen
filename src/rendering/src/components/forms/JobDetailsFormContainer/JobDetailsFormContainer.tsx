// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import {
  Placeholder,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
// Components
import { Component } from 'src/helpers/Component';
import { Headline } from 'src/helpers/Headline';
import { Subheadline } from 'src/helpers/Subheadline';

export type JobDetailsFormContainerProps =
  Feature.EnterpriseWeb.RenewalByAndersen.Components.Forms.JobDetailsFormContainer.JobDetailsFormContainer;
const JobDetailsFormContainer = (props: JobDetailsFormContainerProps) => {
  const { rendering } = props;
  const { sitecoreContext } = useSitecoreContext();

  const JobTitle = sitecoreContext?.jobDetails?.jobTitle || '';
  const JobCity = sitecoreContext?.jobDetails?.jobCity || '';
  const JobState = sitecoreContext?.jobDetails?.jobState?.abbreviation || '';
  const JobCategory = sitecoreContext?.jobDetails?.jobCategory?.categoryName || '';

  return (
    <Component
      variant="full"
      sectionWrapperClasses="bg-light-gray"
      dataComponent="forms/jobdetailsformcontainer"
      {...props}
    >
      <div className="col-start-3 col-end-11 -ml-[2rem] py-l md:ml-0 ml:col-start-4 ml:col-end-10">
        <Headline
          classes="font-sans text-center text-sm-s md:text-m font-medium mb-xxs"
          fields={{
            headlineText: {
              value: JobTitle as string,
            },
          }}
        />
        <Subheadline
          classes="text-body text-center !font-serif font-regular mb-m"
          fields={{
            subheadlineText: {
              value: `${JobCity && JobCity + ', '}${JobState}${JobCategory && ' - ' + JobCategory}`,
            },
          }}
        />
        <Placeholder name="form" rendering={rendering} />
      </div>
    </Component>
  );
};

export default withDatasourceCheck()<JobDetailsFormContainerProps>(JobDetailsFormContainer);
