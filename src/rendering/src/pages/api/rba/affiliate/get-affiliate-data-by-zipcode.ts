import { getAffiliateData } from 'lib/affiliate/utils';
import { Affiliate } from 'lib/context/AffiliateContext';
import { NextApiRequest, NextApiResponse } from 'next';
import { affiliatePropsPlugin } from 'temp/page-props-factory-plugins';

const fetchAffiliateData = async (
  affiliateId: string,
  zipcode: string,
  language = 'en'
): Promise<Affiliate> => {
  return await getAffiliateData(
    affiliatePropsPlugin._graphqlClient,
    affiliateId,
    zipcode,
    language
  );
};

const getAffiliateDataByZipcode = async (req: NextApiRequest, res: NextApiResponse) => {
  let affiliateData: Affiliate;

  try {
    affiliateData = await fetchAffiliateData('-1', req.body.zipcode, req.body.language);

    if (!affiliateData.affiliateId) {
      affiliateData = await fetchAffiliateData('0', '-1', req.body.language);
    }

    return res.status(200).json({ affiliateData: affiliateData });
  } catch (error) {
    return res.status(500);
  }
};

export default getAffiliateDataByZipcode;
