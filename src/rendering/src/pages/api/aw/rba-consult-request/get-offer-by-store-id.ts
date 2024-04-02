import { NextApiRequest, NextApiResponse } from 'next';

export const getOfferByStoreId = async (storeId: string) => {
  const requestOptions = { method: 'GET' };
  const offerURL = `https://www.renewalbyandersen.com/api/sitecore/offers/getoffer/?storeId=${storeId}&client=aw`;
  const response = await fetch(offerURL, requestOptions);
  const data = await response.json();
  return data;
};

const offerByStoreIdApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const storeId = req.body;

  if (storeId.length <= 0 || Array.isArray(storeId)) {
    return res.status(400);
  }

  const results = await getOfferByStoreId(storeId);
  return res.status(200).json({ results });
};

export default offerByStoreIdApi;
