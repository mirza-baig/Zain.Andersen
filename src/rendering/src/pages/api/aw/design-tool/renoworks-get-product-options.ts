import { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const renoworksGetProductOptions = async (reqBody: any) => {
  const parsed = JSON.parse(reqBody);

  const apiHost = parsed.ApiHost;
  const rwd = parsed.Rwd;
  const settings = parsed.Settings;

  const url = `${apiHost}/_rwapi/?function=ProductOptions&mode=json&rwd=${rwd}&settings=${settings}`;
  const requestOptions = { method: 'GET' };
  const response = await fetch(url, requestOptions);
  const data = await response.json();
  return data;
};

const renoworksGetProductOptionsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const results = await renoworksGetProductOptions(req.body);
  return res.status(200).json({ results });
};

export default renoworksGetProductOptionsApi;
