import { NextApiRequest, NextApiResponse } from 'next';

const apiBaseUrl = process.env.EW_ENTERPRISE_WEB_API_URL;
const apiKey = process.env.EW_ENTERPRISE_WEB_API_KEY || '';

const submitJobLeadGen = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<NextApiResponse | void> => {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const requestLeadGen = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': apiKey,
    },
    body: JSON.stringify(req.body),
  };

  const response = await fetch(
    `${apiBaseUrl}/api/e/rba/website/v1/submitJobLeadGen`,
    requestLeadGen
  );
  const data = await response.json();
  return res.status(response.status).json({ result: data });
};

export default submitJobLeadGen;
