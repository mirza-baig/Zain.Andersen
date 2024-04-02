// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { useSitecoreContext, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ImageFieldValue } from '@sitecore-jss/sitecore-jss-react/types/components/Image';
import classNames from 'classnames';
// Components
import { Component } from 'src/helpers/Component';
import { getEnum } from 'lib/utils';
import { ComponentBackgroundVariants } from 'src/helpers/Component/Component';
import { ComponentProps } from 'lib/types/component-props';
import { BodyCopy } from 'src/helpers/BodyCopy';
import { Headline } from 'src/helpers/Headline';
import { Eyebrow } from 'src/helpers/Eyebrow';
import { Button } from 'src/helpers/Button';
import { Item } from '@sitecore-jss/sitecore-jss-nextjs';
import ImageWrapper from 'src/helpers/Media/ImageWrapper';

export type JobOverviewProps =
  Feature.EnterpriseWeb.RenewalByAndersen.Components.Affiliates.Jobs.JobOverview.JobOverview &
    ComponentProps;

const JOB_APPLICATION_FORM_ANCHOR = '#jobApplicationForm';

const JobOverview = (props: JobOverviewProps) => {
  const { sitecoreContext } = useSitecoreContext();

  const { fields } = props;

  const jobData = sitecoreContext?.jobDetails;

  const backgroundVariant = getEnum<ComponentBackgroundVariants>(props.fields?.backgroundColor);

  if (!jobData || !fields) {
    return <></>;
  }

  const JobType = ({ type }: { type: string }) => (
    <li className="relative whitespace-nowrap pl-xxs before:absolute before:left-0 before:top-[3px] before:h-[14px] before:w-[3px] before:bg-primary">
      {type}
    </li>
  );

  return (
    <Component
      variant="lg"
      dataComponent="affiliate/joboverview"
      backgroundVariant={backgroundVariant}
      gap={classNames('gap-s', backgroundVariant !== 'white' ? 'lg:gap-m' : 'lg:gap-s')}
      padding={classNames('md:px-0', backgroundVariant !== 'white' && 'md:pl-m px-m')}
      sectionWrapperClasses="mx-m"
      {...props}
    >
      {/* Details */}
      <div
        className={classNames(
          'col-span-2 py-s md:col-span-12 ml:col-span-6 lg:py-l',
          backgroundVariant === 'white' && 'border-t border-gray'
        )}
      >
        {jobData && (jobData.jobCity || jobData.jobState) && (
          <Eyebrow
            fields={{
              eyebrowText: {
                value: `${jobData.jobCity ? `${jobData.jobCity}, ` : ''}${
                  jobData.jobState?.abbreviation
                }`,
              },
            }}
            classes="text-theme-text text-body font-bold mb-s"
          />
        )}
        {jobData.jobTitle && (
          <Headline
            useTag="h1"
            fields={{ headlineText: { value: jobData.jobTitle } }}
            classes="text-theme-text text-sm-s font-medium lg:text-l mb-s"
          />
        )}

        {/* Placeholder for category and type */}
        <ul className="mb-s flex flex-wrap gap-x-ml border-b border-gray pb-s text-body text-theme-text">
          {/* type */}
          {jobData.jobTypes?.length > 0 && <JobType type={jobData.jobTypes?.join(', ')} />}
          {/* category */}
          {jobData.jobCategory?.categoryName && (
            <JobType type={jobData.jobCategory?.categoryName} />
          )}
        </ul>

        {jobData.jobSummary && (
          <BodyCopy fields={{ body: { value: jobData.jobSummary } }} classes="" />
        )}

        {/* CTA */}
        <Button
          icon={
            {
              fields: {
                Value: {
                  value: 'arrow',
                },
              },
            } as unknown as Item
          }
          variant={
            {
              fields: {
                Value: {
                  value: 'primary',
                },
              },
            } as unknown as Item
          }
          field={{ value: { href: JOB_APPLICATION_FORM_ANCHOR, text: fields.ctaText?.value } }}
          classes="!w-full md:!w-fit justify-center"
        />
      </div>
      {/* Image */}
      {jobData.jobCategory?.categoryImage && (
        <div className="col-span-2 hidden ml:col-span-6 ml:block">
          <ImageWrapper
            image={{ value: jobData.jobCategory?.categoryImage as ImageFieldValue }}
            imageLayout="responsive"
            ratio="video"
          />
        </div>
      )}
    </Component>
  );
};

export default withDatasourceCheck()<JobOverviewProps>(JobOverview);
