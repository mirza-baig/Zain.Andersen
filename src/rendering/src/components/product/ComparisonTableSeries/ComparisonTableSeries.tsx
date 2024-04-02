// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
// Components
import { Component } from 'src/helpers/Component';
import { ComponentProps } from 'lib/types/component-props';
import { getBreakpoint, useCurrentScreenType } from 'lib/utils/get-screen-type';
import { ComparisonTable } from 'src/helpers/Comparison/ComparisonTableHelpers/ComparisonTable';

export type ComparisonTableSeriesProps =
  Feature.EnterpriseWeb.Enterprise.Components.Product.ComparisonTable.ComparisonSeriesTable &
    ComponentProps;
const ComparisonTableSeries = (props: ComparisonTableSeriesProps) => {
  const { currentScreenWidth } = useCurrentScreenType();

  const isMobile = currentScreenWidth <= getBreakpoint('ml');

  if (!props.fields) {
    return <></>;
  }

  return (
    <Component
      variant={isMobile ? 'full' : 'lg'}
      dataComponent="product/comparisontableseries"
      padding={isMobile && 'px-0'}
      {...props}
    >
      <ComparisonTable {...props} />
    </Component>
  );
};

export default withDatasourceCheck()<ComparisonTableSeriesProps>(ComparisonTableSeries);
