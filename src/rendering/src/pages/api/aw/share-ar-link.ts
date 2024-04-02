import { NextApiRequest, NextApiResponse } from 'next';

const apiDomain = process.env.EW_ENTERPRISE_WEB_API_URL;

const shareARLink = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<NextApiResponse | void> => {
  console.log(req);
  const bodyRequest = JSON.stringify(req.body);
  console.log(bodyRequest);
  if (req.method !== 'POST') {
    return res.status(405);
  }
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': process.env.EW_ENTERPRISE_WEB_API_KEY || '',
    },
    body: bodyRequest,
  };

  const response = await fetch(`${apiDomain}/api/e/aw/website/v1/shareARLink`, requestOptions);

  console.log('Phone1:' + req.body);
  return res.status(response.status).json({ result: response.statusText });
};
export default shareARLink;
