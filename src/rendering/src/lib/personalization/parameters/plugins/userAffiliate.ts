import { NextRequest, NextResponse } from 'next/server';
import { GraphQLRequestClient } from '@sitecore-jss/sitecore-jss';
import { RuleContext } from 'lib/rules/rules';
import { getAffiliateData, getAffiliateIdFromRewrite } from 'lib/affiliate/utils';
import { Debug } from 'lib/constants/debug';
import { Plugin } from '..';
import config from 'temp/config';

export type UtmParams = {
  referrer: string;
  utm: {
    [key: string]: string | undefined;
    campaign: string | undefined;
    source: string | undefined;
    medium: string | undefined;
    content: string | undefined;
  };
};

class UserAffiliatePlugin implements Plugin {
  _graphqlClient: GraphQLRequestClient;
  order = 10;

  constructor() {
    this._graphqlClient = new GraphQLRequestClient(config.graphQLEndpoint, {
      apiKey: config.sitecoreApiKey,
      debugger: Debug.personalization,
      fetch: fetch,
    });
  }

  async exec(context: RuleContext, _req: NextRequest, res?: NextResponse) {
    const basePath = res?.headers.get('x-sc-rewrite') || '';
    const affiliateId = getAffiliateIdFromRewrite(basePath);

    if (!affiliateId) {
      return context;
    }

    const userAffiliate = await getAffiliateData(this._graphqlClient, affiliateId);

    // TODO: Make this a constant or a helper
    context.parameters['userAffiliate'] = userAffiliate;

    return context;
  }
}

export const userAffiliatePlugin = new UserAffiliatePlugin();
