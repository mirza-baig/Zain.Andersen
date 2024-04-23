import { ReactElement, useEffect, useState } from 'react';
import classNames from 'classnames';
import { Facet } from 'src/helpers/Coveo/Facet/Facet';
import {
  QuerySummaryState,
  BreadcrumbManager as HeadlessBreadcrumbManager,
  QuerySummary as HeadlessQuerySummary,
  Facet as HeadlessFacet,
} from '@coveo/headless';
import ModalWrapper from 'src/helpers/ModalWrapper/ModalWrapper';
import { getBreakpoint, useCurrentScreenType } from 'lib/utils/get-screen-type';
import { ThemeFile, ThemeName } from 'lib/context/ThemeContext';
import { SearchProps } from 'components/search/Search/Search';
import { SvgIcon } from 'src/helpers/SvgIcon';
import { BreadcrumbManager } from '../BreadcrumbManager/BreadcrumbManager';
import { SizingToolProps } from 'components/tool/SizingTool/SizingTool';
import { Headline } from 'src/helpers/Headline';

interface FacetGroupProps {
  querySummaryController: HeadlessQuerySummary;
  facetControllers: HeadlessFacet[];
  breadcrumbManager: HeadlessBreadcrumbManager;
  themeData: ThemeFile[ThemeName];
  doesContainInlineBreadcrumb?: boolean;
  isFullWidthFilterButton?: boolean;
}
interface ShowFacetState {
  [facetId: string]: boolean;
}

export const FacetGroup = (props: SearchProps | (SizingToolProps & FacetGroupProps)) => {
  const {
    fields,
    themeData,
    doesContainInlineBreadcrumb = true,
    isFullWidthFilterButton = false,
  } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [queryState, setQueryState] = useState<QuerySummaryState>(
    props?.querySummaryController?.state
  );

  const [showFacet, setShowFacet] = useState<ShowFacetState>({});
  const { currentScreenWidth } = useCurrentScreenType();

  useEffect(() => {
    const facetControllers = Object.values(props?.facetControllers);

    facetControllers?.map(({ facet }: { facet: HeadlessFacet }) => {
      const facetId = facet.state.facetId;
      facet.subscribe(() =>
        setShowFacet((prevValues) => ({
          ...prevValues,
          [facetId]: facet.state.enabled,
        }))
      );
    });
  }, [props?.facetControllers]);

  useEffect(() => {
    props?.querySummaryController?.subscribe(() => {
      setQueryState(props.querySummaryController?.state);
    });
  }, [props.querySummaryController]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const RenderFacets = (): ReactElement => {
    return (
      <div className={themeData.classes.facetClasses?.facetGroup.wrapper}>
        {doesContainInlineBreadcrumb && props.breadcrumbManager ? (
          <BreadcrumbManager
            controller={props.breadcrumbManager}
            breadcrumbClasses={themeData.classes.breadcrumbClasses}
            facetSectionHeading={
              fields?.searchParameters?.fields?.facetSectionHeading || { value: '' }
            }
            clearAllLabel={fields?.searchParameters?.fields?.clearAllLabel || { value: '' }}
            isInlineBreadcrumb={doesContainInlineBreadcrumb}
          />
        ) : (
          <Headline
            classes={themeData.classes.breadcrumbClasses?.titleClass}
            useTag="h3"
            fields={{
              headlineText: fields?.searchParameters?.fields?.facetSectionHeading || { value: '' },
            }}
          />
        )}

        {Object.entries(showFacet).map(([facetId, showDependentFacet], index) => {
          return (
            showDependentFacet &&
            fields?.facets?.[index]?.fields && (
              <Facet
                key={`${facetId}${index}`}
                facetClasses={themeData.classes.facetClasses}
                controller={
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  (Object.values(props.facetControllers)[index] as any).facet as HeadlessFacet
                }
                facetLabel={fields?.facets[index]?.fields.facetLabel}
                showMoreLabel={fields?.searchParameters?.fields?.showMoreLabel}
                showLessLabel={fields?.searchParameters?.fields?.showLessLabel}
                searchLabel={fields?.searchParameters?.fields?.facetSearchLabel}
                noFacetResultsBody={fields?.searchParameters?.fields?.noFacetResultsBody}
              />
            )
          );
        })}

        {currentScreenWidth < getBreakpoint('ml') && (
          <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center border-t border-gray bg-white py-s ">
            <button
              onClick={handleCloseModal}
              className={themeData.classes.facetClasses?.facetGroup.showResultCta}
            >
              {`${fields?.searchParameters?.fields?.showResultsLabel?.value} (${queryState.total})`}
              <SvgIcon
                icon="arrow"
                className={themeData.classes.facetClasses?.facetGroup.showResultCtaIcon}
              />
            </button>
          </div>
        )}
      </div>
    );
  };

  if (currentScreenWidth < getBreakpoint('ml')) {
    return (
      <>
        <button
          onClick={handleOpenModal}
          className={classNames(
            { '!w-full': isFullWidthFilterButton },
            themeData.classes.facetClasses?.facetGroup.filterCta
          )}
        >
          {fields.searchParameters?.fields?.filtersLabel?.value}
        </button>
        {isModalOpen && (
          <ModalWrapper isModalOpen={isModalOpen} handleClose={handleCloseModal} size="extra-large">
            {RenderFacets()}
          </ModalWrapper>
        )}
      </>
    );
  } else {
    return <>{RenderFacets()}</>;
  }
};
