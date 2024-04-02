import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import { GraphQLRequestClient } from '@sitecore-jss/sitecore-jss-nextjs';
import { SitecorePageProps } from 'lib/page-props';
import { Plugin } from '..';

import config from 'temp/config';
import { getAffiliateData } from 'lib/affiliate/utils';
import { EwSiteInfo } from 'lib/site/ew-site-info';

class AffiliateRetailerPropsPlugin implements Plugin {
  order = 30;
  _graphqlClient: GraphQLRequestClient;

  constructor() {
    this._graphqlClient = new GraphQLRequestClient(config.graphQLEndpoint, {
      apiKey: config.sitecoreApiKey,
    });
  }

  async exec(props: SitecorePageProps, context: GetServerSidePropsContext | GetStaticPropsContext) {
    if (
      context.preview ||
      (props.site as EwSiteInfo)?.hasAffiliatePersonalization?.toLowerCase() !== 'true' ||
      !props.layoutData?.sitecore?.context?.pageAffiliateId
    ) {
      return props;
    }

    const pageAffiliateId = props.layoutData.sitecore.context.pageAffiliateId;

    props.pageAffiliate = await getAffiliateData(this._graphqlClient, pageAffiliateId);

    // If we don't have an affiliateId it actually means it wasn't found
    // So set it to null instead of having a fake entry.
    if (props.pageAffiliate.affiliateId === null) {
      props.pageAffiliate = null;
    }
    return props;
  }
}

export const affiliateRetailerPropsPlugin = new AffiliateRetailerPropsPlugin();
