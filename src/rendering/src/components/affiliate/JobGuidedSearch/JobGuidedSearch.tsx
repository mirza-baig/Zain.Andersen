// Global
import { useState } from 'react';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { useTheme } from 'lib/context/ThemeContext';
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
// Components
import { Component } from 'src/helpers/Component';
import { JobGuidedSearchTheme } from './JobGuidedSearch.theme';
import { Headline } from 'src/helpers/Headline';
import { BodyCopy } from 'src/helpers/BodyCopy';
import { Subheadline } from 'src/helpers/Subheadline';
import { SvgIcon } from 'src/helpers/SvgIcon';
import ButtonPrimary, { ButtonPrimaryClasses } from 'src/helpers/Button/buttons/btn--primary';
import { LinkWrapper } from 'src/helpers/LinkWrapper';
import classNames from 'classnames';

export type JobGuidedSearchProps =
  Feature.EnterpriseWeb.RenewalByAndersen.Components.Affiliates.Jobs.JobGuidedSearch.JobGuidedSearch;

type jobFacet = Feature.EnterpriseWeb.RenewalByAndersen.Data.Affiliates.Datasources.JobCategory &
  Feature.EnterpriseWeb.RenewalByAndersen.Data.Affiliates.Datasources.JobHours;
const JobGuidedSearch = (props: JobGuidedSearchProps) => {
  const { themeData } = useTheme(JobGuidedSearchTheme);
  const { themeName } = useTheme();
  const [selectedJobFacet, setSelectedJobFacet] = useState<string>('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  if (!props.fields) {
    return <></>;
  }

  // handle jobFacets
  const handleJobFacets = (jobFacet: string) => {
    setSelectedJobFacet(jobFacet);
    setIsButtonEnabled(true);
  };

  return (
    <Component variant="full" dataComponent="affiliate/jobguidedsearch" {...props}>
      <div className={themeData.classes.container}>
        <Headline classes={themeData.classes.headlineClass} {...props} />
        <BodyCopy {...props} classes={themeData.classes.bodyCopy} />
        <Subheadline classes={themeData.classes.subheadline} {...props} />
        {/* Desktop View */}
        <div className={themeData.classes.desktopContainer}>
          {/* JobFacets Buttons */}
          {props.fields?.jobFacets?.map((_item: jobFacet, i: number) => {
            return (
              <div key={i}>
                <ButtonPrimary
                  field={{
                    value: {
                      href: _item?.fields?.jobSearchPage?.value?.href,
                      anchor: _item?.fields?.jobSearchPage?.value?.anchor,
                      text:
                        _item?.fields?.categoryName?.value ||
                        _item?.fields?.hoursDescription?.value,
                      target: _item?.fields?.jobSearchPage?.value?.target || '_self',
                    },
                  }}
                  variant={undefined}
                  classes={themeData.classes.buttonItem}
                />
              </div>
            );
          })}
        </div>
        {/* Mobile View */}
        <div className={themeData.classes.mobileContainer}>
          {/* JobFacets Dropdown */}
          <div className={themeData.classes.dropDownSelectList}>
            <select
              className={themeData.classes.dropDownSelect}
              onChange={(e) => handleJobFacets(e.target.value)}
              value={selectedJobFacet}
            >
              <option value="" defaultValue="" disabled>
                Select
              </option>
              {props.fields?.jobFacets.map((option: jobFacet, index: number) => (
                <option value={index} key={index}>
                  {option.fields?.categoryName?.value || option.fields?.hoursDescription?.value}
                </option>
              ))}
            </select>
            <SvgIcon
              icon={'dropdown-arrow'}
              size="20"
              className={themeData.classes.dropDownSelectIcon}
            ></SvgIcon>
          </div>
          <ButtonPrimary
            variant={undefined}
            classes={classNames(
              ButtonPrimaryClasses(themeName).btnClass,
              isButtonEnabled === false &&
                '!bg-gray !text-dark-gray pointer-events-none [&_span]:text-dark-gray',
              '!w-full !justify-center mb-l'
            )}
            icon={{
              id: '50590edc-7ea7-4436-9a3e-701c87a07db2',
              url: '/sitecore/content/andersencorporation/enterprise-global/enums/cta-icons/arrow',
              name: 'Arrow',
              displayName: 'Arrow',
              fields: {
                Value: {
                  value: 'arrow',
                },
              },
              templateId: 'd2923fee-da4e-49be-830c-e27764dfa269',
              templateName: 'Enum',
            }}
            field={{
              value: {
                href:
                  props.fields?.jobFacets?.[selectedJobFacet]?.fields?.jobSearchPage?.value?.href ||
                  '',
                text: 'Search',
                linktype:
                  props.fields?.jobFacets?.[selectedJobFacet]?.fields?.jobSearchPage?.value
                    ?.external,
                url: props.fields?.jobFacets?.[selectedJobFacet]?.fields?.jobSearchPage?.value?.url,
                anchor:
                  props.fields?.jobFacets?.[selectedJobFacet]?.fields?.jobSearchPage?.value?.anchor,
                target:
                  props.fields?.jobFacets?.[selectedJobFacet]?.fields?.jobSearchPage?.value
                    ?.target || '_self',
              },
            }}
          />
        </div>
        {/* CTA Link */}
        <LinkWrapper
          className={themeData.classes.linkClasses}
          field={{
            href: props.fields?.cta1Link?.value?.href || '',
            title: props.fields?.cta1Link?.value?.text,
            text: props.fields?.cta1Link?.value?.text,
            target: props.fields?.cta1Link?.value?.target || '_self',
          }}
          ariaLabel={{ value: props.fields?.cta1Link?.value?.text || 'arrow icon' }}
        >
          <SvgIcon className="ml-[10px] text-primary" icon="arrow" size="sm" />
        </LinkWrapper>
      </div>
    </Component>
  );
};

export default withDatasourceCheck()<JobGuidedSearchProps>(JobGuidedSearch);
