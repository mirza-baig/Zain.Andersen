/***  Disabling no-explicit-any for whole file as this file uses proxy objects for handling fucntionality */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComparisonTableProductsProps } from 'components/product/ComparisonTableProducts/ComparisonTableProducts';
import React, { useEffect, useRef, useState } from 'react';
import { getComparisonObject, groupProductStyles } from './ComparisonTable.helper';
import { getBreakpoint, useCurrentScreenType } from 'lib/utils/get-screen-type';
import { CategoryTitle } from './CategoryTitle';
import { SubCategoryTitle } from './SubCategoryTitle';
import { CategoryRow } from './CategoryRow';
import { CategoryDataProps } from './ComparisonTable.Types';
import { Field, LinkField, LinkFieldValue, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { LinkWrapper } from 'src/helpers/LinkWrapper';
import { SvgIcon } from 'src/helpers/SvgIcon';
import classNames from 'classnames';
import ModalWrapper from 'src/helpers/ModalWrapper/ModalWrapper';
import { Selector } from './Selector';
import { ComparisonTitles } from './ComparisonTitles';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { Item } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComparisonTableSeriesProps } from 'components/product/ComparisonTableSeries/ComparisonTableSeries';
import { getEnum } from 'lib/utils';
import { SitecoreIds } from 'lib/constants';
import Disclaimer from 'src/helpers/DisclaimerText/DisclaimerText';
import { hashCode } from 'src/helpers/Component/Component';
import { normalizeGuid } from 'lib/utils/string-utils';

export const ComparisonTable = (
  props: ComparisonTableProductsProps | ComparisonTableSeriesProps
) => {
  const isProductComparison = props.fields && (() => 'products' in props.fields)();

  const originalGroupedProducts = isProductComparison && groupProductStyles(props.fields);

  const [selectedProductStyleIndex, setSelectedProductStyleIndex] = useState(0);

  const originalComparisonObject = getComparisonObject(
    isProductComparison
      ? {
          products:
            originalGroupedProducts.products[
              originalGroupedProducts.productStyles[selectedProductStyleIndex]?.productTitle
            ],
          tableStructure: props.fields.tableStructure,
        }
      : props.fields,
    isProductComparison
  );

  const [comparisonObject, setComparisonObject] = useState(originalComparisonObject);

  const [isProductSelectorVisible, setIsProductSelectorVisible] = useState(false);

  const [isSeriesSelectorVisible, setIsSeriesSelectorVisible] = useState(false);

  const { currentScreenWidth } = useCurrentScreenType();

  const scrollableSectionRef = useRef<HTMLDivElement>(null);

  const comparisonTableRef = useRef<HTMLDivElement>(null);
  const comparisonTableId = `comparison-table-${
    props?.fields?.sectionId?.value || hashCode(props?.rendering?.dataSource || '')
  }`;

  useEffect(() => {
    const container = scrollableSectionRef.current;

    const handleScroll = () => {
      if (container) {
        const scrollLeft = container.scrollLeft;
        const containers = document.querySelectorAll('.no-scrollbar');

        containers.forEach((otherContainer) => {
          if (otherContainer !== container) {
            otherContainer.scrollLeft = scrollLeft;
          }
        });
      }
    };

    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    isProductComparison &&
      setComparisonObject(
        getComparisonObject(
          {
            products:
              originalGroupedProducts.products[
                originalGroupedProducts.productStyles[selectedProductStyleIndex]?.productTitle
              ],
            tableStructure: props.fields.tableStructure,
          },
          isProductComparison
        )
      );
    // All the suggested dependencies are either from direct layout props or from pure function.
    // We can ignore react-hooks/exhaustive-deps warning for this useEffect.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProductStyleIndex]);

  if (!originalComparisonObject || !props.fields) {
    return <></>;
  }

  const isMobile = currentScreenWidth <= getBreakpoint('ml');
  const totalNumberOfSeries = isProductComparison
    ? originalGroupedProducts.products[
        originalGroupedProducts.productStyles[selectedProductStyleIndex]?.productTitle
      ].length
    : props.fields?.seriesToCompare.length;

  type VisibleNumberOfSeries = 1 | 2 | 3 | 4 | 5 | 6;

  const maxTableWidth: Record<VisibleNumberOfSeries, string> = {
    1: 'ml:col-span-2 ml:!col-start-6',
    2: 'ml:col-span-4 ml:!col-start-5',
    3: 'ml:col-span-6 ml:!col-start-4',
    4: 'ml:col-span-8 ml:!col-start-3',
    5: 'ml:col-span-10 ml:!col-start-2',
    6: 'ml:col-span-12',
  };

  const toggleSeriesSelector = (isVisible: boolean) =>
    setIsSeriesSelectorVisible(isVisible ? isVisible : !isSeriesSelectorVisible);

  const updateComparisonObject = (indexOfItemToRemove: number) => {
    const _comparisonObject: any = comparisonObject;

    const removeSeries = (curatedObject: any): any => {
      return (
        curatedObject &&
        curatedObject.filter((_obj: any, index: number) => index !== indexOfItemToRemove)
      );
    };

    if (_comparisonObject) {
      Object.keys(_comparisonObject).map((property) => {
        if (property === 'seriesTitles') {
          _comparisonObject.seriesTitles = _comparisonObject.seriesTitles.filter(
            (_obj: any, index: number) => index !== indexOfItemToRemove
          );
        } else {
          _comparisonObject[property] = removeSeries(
            _comparisonObject[property].swatches || _comparisonObject[property]
          );
        }
      });
    }

    setComparisonObject({ ..._comparisonObject });
  };

  const renderTableElement = (tableElement: any) => {
    switch (normalizeGuid(tableElement.templateId)) {
      case normalizeGuid(SitecoreIds.Feature.Data.Elements.Product.ComparisonSection.templateId):
        return (
          <CategoryTitle
            isMobile={isMobile}
            title={
              (
                props.fields?.tableConfiguration?.fields[
                  getEnum<string>(tableElement.fields.titleFieldName) || ''
                ] as Field<string> | undefined
              )?.value
            }
            cta={
              (
                props.fields?.tableConfiguration?.fields[
                  getEnum<string>(tableElement.fields.ctaFieldName) || ''
                ] as LinkField | undefined
              )?.value
            }
          />
        );
      case normalizeGuid(SitecoreIds.Feature.Data.Elements.Product.ComparisonSubsection.templateId):
        return (
          <>
            {tableElement.fields.titleFieldName && (
              <SubCategoryTitle
                isMobile={isMobile}
                subTitle={
                  (
                    props.fields?.tableConfiguration?.fields[
                      getEnum<string>(tableElement.fields.titleFieldName) || ''
                    ] as Field
                  )?.value as string
                }
              />
            )}
            <CategoryRow
              data={
                comparisonObject?.[
                  getEnum<string>(
                    tableElement.fields.valueFieldName
                  ) as keyof typeof comparisonObject
                ] as unknown as CategoryDataProps
              }
              totalNumberOfSeries={totalNumberOfSeries || 0}
            />
          </>
        );
      default:
        return <></>;
    }
  };

  if (!props.fields) {
    return <></>;
  }

  return (
    <>
      <div className="col-span-12">
        <div className="mx-m ml:-mx-0">
          {isProductComparison && originalGroupedProducts?.productStyles?.length > 1 && (
            <div className="mb-xxs w-full">
              {/* product style modal link*/}
              <div
                onClick={(e) => {
                  e.preventDefault();
                  setIsProductSelectorVisible(true);
                }}
                className="flex cursor-pointer items-center !font-sans text-base font-demi"
              >
                <Text
                  tag="h3"
                  field={{
                    value: (
                      props.fields.tableConfiguration?.fields.changeProductStyleCTAText as Field
                    )?.value as string,
                  }}
                />
                <SvgIcon className="ml-xxs" icon="pencil" />
              </div>
            </div>
          )}

          <div className="mb-l flex flex-col text-body ml:mb-0 ml:flex-row ml:items-center">
            <LinkWrapper
              className="text-darkprimary ml:mb-xxs"
              field={
                (props.fields.tableConfiguration?.fields.learnMoreAboutAllOurWindowsCTA as Field)
                  ?.value as LinkFieldValue
              }
              ariaLabel={{
                value: 'Learn More About All Our Windows CTA',
              }}
            />
            <div className="mx-xs mb-xxs hidden h-s w-[1px] bg-black ml:inline-block">
              {/* Separator */}
            </div>
            <LinkWrapper
              className="text-darkprimary ml:mb-xxs"
              field={
                (props.fields.tableConfiguration?.fields.downloadAllProductSpecsCTA as Field)
                  ?.value as LinkFieldValue
              }
              ariaLabel={{
                value: 'Download All Our Windows CTA',
              }}
            />
          </div>
          <div className="w-full ml:hidden">
            {/* series modal link*/}
            <div
              onClick={(e) => {
                e.preventDefault();
                setIsSeriesSelectorVisible(true);
              }}
              className="flex cursor-pointer items-center !font-sans text-base font-demi"
            >
              <Text
                tag="h3"
                field={{
                  value: (props.fields.tableConfiguration?.fields.buttonCardCTAText as Field)
                    ?.value as string,
                }}
              />
              <SvgIcon className="ml-xxs" icon="pencil" />
            </div>
          </div>
        </div>
      </div>
      <div
        className={classNames(
          'col-span-12',
          maxTableWidth[(comparisonObject?.seriesTitles?.length as VisibleNumberOfSeries) || 6],
          originalComparisonObject.seriesTitles.length === 6 &&
            (comparisonObject?.seriesTitles?.length as VisibleNumberOfSeries) === 5 &&
            'ml:!col-start-1'
        )}
      >
        {/* Product style selector */}
        {originalGroupedProducts?.productStyles?.length > 1 && isProductSelectorVisible && (
          <ModalWrapper
            isModalOpen={
              originalGroupedProducts?.productStyles?.length > 1 && isProductSelectorVisible
            }
            handleClose={() => {
              setIsProductSelectorVisible(false);
            }}
            size={isMobile ? 'extra-large' : 'fluid'}
          >
            <Selector
              productsStylesList={originalGroupedProducts.productStyles}
              selectedProductStyleIndex={selectedProductStyleIndex}
              productStyleIndexSetter={setSelectedProductStyleIndex}
              toggleSelector={setIsProductSelectorVisible}
              tableConfiguration={
                props.fields
                  .tableConfiguration as unknown as Feature.EnterpriseWeb.Enterprise.Components.Product.ComparisonTable.ComparisonTableConfiguration
              }
              isProductSelector={true}
              isImageVisible={true}
            />
          </ModalWrapper>
        )}

        {/* Series selector */}
        {isSeriesSelectorVisible && comparisonObject && (
          <ModalWrapper
            isModalOpen={comparisonObject && isSeriesSelectorVisible}
            handleClose={() => {
              setIsSeriesSelectorVisible(false);
            }}
            size={isMobile ? 'extra-large' : 'fluid'}
          >
            <Selector
              originalComparisonObject={originalComparisonObject}
              currentSelectedSeries={comparisonObject.seriesTitles || []}
              toggleSelector={setIsSeriesSelectorVisible}
              comparisonObjectSetter={setComparisonObject}
              tableConfiguration={
                props.fields
                  .tableConfiguration as unknown as Feature.EnterpriseWeb.Enterprise.Components.Product.ComparisonTable.ComparisonTableConfiguration
              }
              isImageVisible={isProductComparison}
            />
          </ModalWrapper>
        )}
        {comparisonObject && (
          <div
            className="flex flex-col items-center justify-center"
            id={comparisonTableId}
            ref={comparisonTableRef}
          >
            {/* Titles */}
            <ComparisonTitles
              comparisonTitles={comparisonObject.seriesTitles || []}
              removeSeries={updateComparisonObject}
              totalNumberOfSeries={totalNumberOfSeries || 0}
              toggleSeriesSelector={toggleSeriesSelector}
              isMobile={isMobile}
              isProductComparison={isProductComparison}
              comparisonTableRef={comparisonTableRef}
              staticHeader={props?.fields?.staticHeader?.value}
            />
            <div
              ref={scrollableSectionRef}
              className="no-scrollbar flex w-full flex-col items-center overflow-x-auto ml:justify-center ml:overflow-x-visible"
            >
              {props.fields.tableStructure?.map((tableElement: Item) => {
                return renderTableElement(tableElement);
              })}
            </div>
          </div>
        )}
      </div>
      {props.fields.disclaimerText && (
        <Disclaimer
          disclaimerClasses="border-t-[1px] border-gray p-xxs"
          fields={{ value: props.fields.disclaimerText.value }}
        />
      )}
    </>
  );
};
