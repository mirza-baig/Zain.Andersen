import { NextApiRequest, NextApiResponse } from 'next';
import { fetchExternalAPIWithClientData } from 'lib/utils/api-request-utils';

const apiBaseUrl = process.env.EW_ENTERPRISE_WEB_API_URL;
const apiKey = process.env.EW_ENTERPRISE_WEB_API_KEY || '';

const SubmitOnlineSchedulingPrimary = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<NextApiResponse | void> => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    },
    body: JSON.stringify(req.body),
  };

  const response = await fetchExternalAPIWithClientData(
    req,
    `${apiBaseUrl}/api/e/rba/leads/v1/onlinescheduling/primary`,
    requestOptions
  );

  return res.status(response.status).json(await response.json());
};

export default SubmitOnlineSchedulingPrimary;
