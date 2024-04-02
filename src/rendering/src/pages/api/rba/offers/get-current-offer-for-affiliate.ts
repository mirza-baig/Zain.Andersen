import { AffiliateGraphQLQueries } from 'lib/constants/affiliates';
import { fetchExternalAPIWithClientData } from 'lib/utils/api-request-utils';
import { NextApiRequest, NextApiResponse } from 'next';
import { affiliatePropsPlugin } from 'temp/page-props-factory-plugins';

/* eslint-disable @typescript-eslint/no-explicit-any */
const getFallbackDataFromGql = async (): Promise<any> => {
  const _graphqlResults = await affiliatePropsPlugin._graphqlClient.request<any>(
    /* eslint-enable @typescript-eslint/no-explicit-any */
    AffiliateGraphQLQueries.affiliateOffersbyAffiliateId,
    {
      affiliateId: '0' || '-1',
    }
  );

  if (_graphqlResults) {
    return _graphqlResults?.affiliateOfferQuery?.results[0]?.offers?.results[0].children.results[0];
  }
};

const currentOfferForAffiliate = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const offerURL = `${process.env.EW_ENTERPRISE_WEB_API_URL}/api/e/rba/offers/v1/getAffiliateCurrentOffer`;
    const response = await fetchExternalAPIWithClientData(req, offerURL, { method: 'GET' });
    let results = await response?.json();

    if (!('data' in results)) {
      results = await getFallbackDataFromGql();
    }
    return res.status(200).json({ results });
  } catch (e) {
    console.error(e);
    const _fallbackResults = await getFallbackDataFromGql();
    return res.status(200).json(_fallbackResults);
  }
};

export default currentOfferForAffiliate;
