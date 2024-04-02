// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
// Components
import { Component } from 'src/helpers/Component';
import { getEnum } from 'lib/utils';
import { ComponentProps } from 'lib/types/component-props';
import DynamicMashup from 'src/helpers/MashupHelpers/DynamicMashup';

export type PageMashupDynamicProps =
  Feature.EnterpriseWeb.Enterprise.Components.General.PageMashupDynamic.PageMashupDynamic & {
    fields: {
      children: Feature.EnterpriseWeb.Enterprise.Components.General.PageMashupDynamic.ResultItem[];
    };
  } & ComponentProps;

const PageMashupDynamic = (props: PageMashupDynamicProps) => {
  return (
    <Component
      variant="full"
      padding="px-0"
      backgroundVariant={getEnum(props.fields?.backgroundColor)}
      dataComponent="general/pagemashup"
      {...props}
    >
      <DynamicMashup {...props} />
    </Component>
  );
};

export default withDatasourceCheck()<PageMashupDynamicProps>(PageMashupDynamic);
