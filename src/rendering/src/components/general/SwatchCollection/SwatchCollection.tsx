// Global
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';

// Components
import SwatchCollectionHelper from 'src/helpers/SwatchCollection/SwatchCollection';
import { Component } from 'src/helpers/Component';
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

export type SwatchCollectionProps =
  Feature.EnterpriseWeb.Enterprise.Components.General.SwatchCollections.SwatchCollections;

const SwatchCollection = (props: SwatchCollectionProps) => {
  return (
    <Component variant="lg" dataComponent="general/swatchcollection" {...props}>
      <div className="col-span-12">
        <SwatchCollectionHelper layoutStyle="full-width" {...props} />
      </div>
    </Component>
  );
};

export default withDatasourceCheck()<SwatchCollectionProps>(SwatchCollection);
