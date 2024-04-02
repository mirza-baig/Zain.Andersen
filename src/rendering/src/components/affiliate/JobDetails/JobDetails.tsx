// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
// Components
import { Component } from 'src/helpers/Component';
import { ComponentProps } from 'lib/types/component-props';
import { BodyCopy } from 'src/helpers/BodyCopy';
import { Headline } from 'src/helpers/Headline';
import { CSSProperties } from 'react';

export type JobDetailsProps =
  Feature.EnterpriseWeb.RenewalByAndersen.Data.Affiliates.Datasources.Job & ComponentProps;
const JobDetails = (props: JobDetailsProps) => {
  const { sitecoreContext } = useSitecoreContext();

  const JobDetailsData = sitecoreContext?.jobDetails?.jobDescription;

  if (!JobDetailsData) {
    return <></>;
  }

  return (
    <Component variant="lg" dataComponent="affiliate/jobdetails" {...props}>
      <div className="col-span-8 col-start-3 -ml-ml md:ml-0">
        <Headline
          classes="font-sans text-sm-s md:text-m font-medium mb-s md:mb-m"
          fields={{
            headlineText: {
              value: 'Job Details',
            },
          }}
        />
        <pre>
          <div style={{ textWrap: 'balance' } as CSSProperties}>
            <BodyCopy
              classes="font-serif !text-body w-full"
              refer={''}
              fields={{
                body: {
                  value: JobDetailsData as string,
                },
              }}
            />
          </div>
        </pre>
      </div>
    </Component>
  );
};

export default JobDetails;
