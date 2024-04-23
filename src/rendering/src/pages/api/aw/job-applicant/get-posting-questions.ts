import { NextApiRequest, NextApiResponse } from 'next';

const apiBaseUrl = process.env.EW_ENTERPRISE_WEB_API_URL;
const apiKey = process.env.EW_ENTERPRISE_WEB_API_KEY || '';

const getPostingQuestions = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<NextApiResponse | void> => {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const requestOptions = {
    method: 'GET',
    headers: {
      accept: 'text/plain',
      'X-API-KEY': apiKey,
    },
  };

  const response = await fetch(
    `${apiBaseUrl}/api/e/aw/website/v1/getPostingQuestions?postingId=${req.body.postingID}`,
    requestOptions
  );

  const data = await response.json();

  return res.send(JSON.stringify(data));
};

export default getPostingQuestions;
