import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import { GraphQLRequestClient } from '@sitecore-jss/sitecore-jss-nextjs';
import { SitecorePageProps } from 'lib/page-props';
import { Plugin } from '..';
import config from 'temp/config';
import { getAffiliateData, getAffiliateIdFromRewrite } from 'lib/affiliate/utils';
import { EwSiteInfo } from 'lib/site/ew-site-info';

class AffiliatePropsPlugin implements Plugin {
  order = 20;
  _graphqlClient: GraphQLRequestClient;

  constructor() {
    this._graphqlClient = new GraphQLRequestClient(config.graphQLEndpoint, {
      apiKey: config.sitecoreApiKey,
    });
  }

  async exec(props: SitecorePageProps, context: GetServerSidePropsContext | GetStaticPropsContext) {
    if ((props.site as EwSiteInfo)?.hasAffiliatePersonalization?.toLowerCase() !== 'true') {
      // If site is not RBA return props.
      return props;
    }
    let affiliateId = '';
    if (context.preview) {
      // If experience editor or CM preview mode set the default affiliate.
      affiliateId = '0';
    } else {
      // If preview or www vercel apps then get the affiliate from page props.
      affiliateId = getAffiliateIdFromRewrite(props.originalPath);
    }
    props.userAffiliate = await getAffiliateData(this._graphqlClient, affiliateId);

    return props;
  }
}

export const affiliatePropsPlugin = new AffiliatePropsPlugin();
