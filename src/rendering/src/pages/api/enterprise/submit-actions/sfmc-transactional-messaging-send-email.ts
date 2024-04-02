import { NextApiRequest, NextApiResponse } from 'next';

const apiBaseUrl = process.env.EW_ENTERPRISE_WEB_API_URL;
const apiKey = process.env.EW_ENTERPRISE_WEB_API_KEY || '';

const SFMCTransactionalMessagingSendEmail = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<NextApiResponse | void> => {
  if (req.method !== 'POST') {
    return res.status(405);
  }

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': apiKey,
    },
    body: JSON.stringify(req.body),
  };

  const response = await fetch(
    `${apiBaseUrl}/api/e/enterprise/formbuilder/v1/sfmc/transactionalMessaging/sendEmail`,
    requestOptions
  );

  return res.status(response.status).json({ result: response.statusText });
};

export default SFMCTransactionalMessagingSendEmail;
