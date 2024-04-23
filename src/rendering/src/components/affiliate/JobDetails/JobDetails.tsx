// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import Head from 'next/head';
import { CSSProperties } from 'react';
// Components
import { Component } from 'src/helpers/Component';
import { ComponentProps } from 'lib/types/component-props';
import { BodyCopy } from 'src/helpers/BodyCopy';
import { Headline } from 'src/helpers/Headline';
import { normalizeSitecoreDateStringFormattedWithTime } from 'lib/utils/string-utils';

export type JobDetailsProps =
  Feature.EnterpriseWeb.RenewalByAndersen.Data.Affiliates.Datasources.Job & ComponentProps;
const JobDetails = (props: JobDetailsProps) => {
  const { sitecoreContext } = useSitecoreContext();

  const JobDetailsData = sitecoreContext?.jobDetails;

  if (!JobDetailsData) {
    return <></>;
  }
  // to parse the ISO 8601 formatted date string
  const formattedDate =
    JobDetailsData.jobPostedDate &&
    normalizeSitecoreDateStringFormattedWithTime(JobDetailsData.jobPostedDate);
  const ldJsonScript = {
    '@context': 'https://schema.org/',
    '@type': 'JobPosting',
    title: JobDetailsData.jobTitle || '',
    description: JobDetailsData.jobDescription.replace(/"/g, '\\"') || '',
    identifier: {
      '@type': 'PropertyValue',
      name: 'Renewal by Andersen',
      value: JobDetailsData.id || '',
    },
    datePosted: formattedDate || '',
    employmentType: [JobDetailsData.jobTypes.join('", "')] || '',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Renewal by Andersen',
      department: JobDetailsData.jobCategory.categoryName || '',
      sameAs: 'https://www.renewalbyandersen.com',
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: JobDetailsData.jobCity || '',
        addressRegion: JobDetailsData.jobState.abbreviation || '',
      },
    },
  };
  return (
    <Component variant="lg" dataComponent="affiliate/jobdetails" {...props}>
      <Head>
        <meta name="description" content={JobDetailsData.jobDescription} />
        <script
          id={JobDetailsData.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJsonScript) }}
        />
      </Head>
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
                  value: JobDetailsData.jobDescription as string,
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
