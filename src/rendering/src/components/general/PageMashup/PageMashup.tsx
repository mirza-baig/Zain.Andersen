// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
// Components
import { Component } from 'src/helpers/Component';
import { getEnum } from 'lib/utils';
import { ComponentProps } from 'lib/types/component-props';
import Mashup from 'src/helpers/MashupHelpers/Mashup';

export type PageMashupProps =
  Feature.EnterpriseWeb.Enterprise.Components.General.PageMashup.PageMashup & ComponentProps;

const PageMashup = (props: PageMashupProps) => {
  return (
    <Component
      variant="full"
      padding="px-0"
      backgroundVariant={getEnum(props.fields?.backgroundColor)}
      dataComponent="general/pagemashup"
      {...props}
    >
      <Mashup {...props} />
    </Component>
  );
};

export default withDatasourceCheck()<PageMashupProps>(PageMashup);
