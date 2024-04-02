import React from 'react';
import { Result } from '@coveo/headless';
import { ResultLink } from '../ResultList/ResultLink';
import { SvgIcon } from 'src/helpers/SvgIcon';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { getEnum } from 'lib/utils';
import { Item } from '@sitecore-jss/sitecore-jss-nextjs';
import classNames from 'classnames';

export const JobCard = ({
  result,
  jobResultItems,
}: {
  result: Result;
  jobResultItems: Feature.EnterpriseWeb.RenewalByAndersen.Elements.Search.JobResultItem;
}) => {
  const JobType = ({ type, className }: { type: string; className?: string }) => {
    return type ? (
      <li
        className={classNames(
          className,
          'relative mb-s whitespace-nowrap pl-xxs before:absolute before:left-0 before:top-[3px] before:h-[14px] before:w-[3px] before:bg-primary'
        )}
      >
        {type}
      </li>
    ) : (
      <></>
    );
  };

  const parseCoveoFieldFromSitecoreItem = (
    field: Item | undefined
  ): string | Array<string> | undefined => {
    if (field) {
      return result?.raw[getEnum<string>(field) as keyof typeof result.raw] as
        | string
        | Array<string>;
    }
    return undefined;
  };

  const jobTitleField = parseCoveoFieldFromSitecoreItem(jobResultItems?.fields?.jobTitleField);
  const jobCityField = parseCoveoFieldFromSitecoreItem(jobResultItems?.fields?.jobCityField);
  const jobStateField = parseCoveoFieldFromSitecoreItem(jobResultItems?.fields?.jobStateField);
  const jobCategoryField = parseCoveoFieldFromSitecoreItem(
    jobResultItems?.fields?.jobCategoryField
  ) as string;
  const jobTypeField = parseCoveoFieldFromSitecoreItem(
    jobResultItems?.fields?.jobTypeField
  ) as Array<string>;

  return (
    <ResultLink
      result={{
        ...result,
        clickUri: result?.raw['ew_jobdetailspageurl'] as string,
      }}
      key={result.uniqueId}
    >
      <div className="mb-s flex cursor-pointer flex-col border border-gray px-s pt-xxs shadow-[0_2px_6px_0px_rgba(0,0,0,0.25)] hover:shadow-[0_2px_6px_0px_rgba(0,0,0,0.35)] md:pt-s">
        {/* title and arrow */}
        <div className="mb-s flex w-full items-center justify-between border-b border-gray pb-xxs text-sm-xs font-bold md:pb-s ">
          {jobTitleField && jobTitleField}
          <SvgIcon icon="arrow" className="ml-s text-primary" />
        </div>
        {/* job city-state, category and type */}
        <ul className="flex flex-col gap-x-m text-body md:flex-row md:flex-wrap md:items-start">
          {jobCityField && jobStateField && (
            <JobType
              type={`${jobCityField}, ${jobStateField}`}
              className="whitespace-pre-wrap md:w-[35%]"
            />
          )}
          {jobCategoryField && (
            <JobType type={jobCategoryField} className="whitespace-pre-wrap md:w-[20%]" />
          )}
          {jobTypeField && (
            <JobType type={jobTypeField?.join(', ')} className="whitespace-pre-wrap" />
          )}
        </ul>
      </div>
    </ResultLink>
  );
};
