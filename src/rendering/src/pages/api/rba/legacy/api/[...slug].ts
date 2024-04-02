import { SendLegacyRequest } from 'lib/utils/rba-legacy-apis';
import type { NextApiRequest, NextApiResponse } from 'next';

// If this API needs to be processed by middleware, update the matcher filters in middleware.ts to allow for the API path

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const formData = new FormData();
  Object.entries(req.body).forEach(([key, value]) => formData.append(key, value as string));

  const response = await SendLegacyRequest(req, formData);

  return res.status(response.status).json(response.responseContent);
};

export default handler;
