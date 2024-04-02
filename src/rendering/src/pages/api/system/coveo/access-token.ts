import type { NextApiRequest, NextApiResponse } from 'next';

const anonymousUserId = {
  name: 'anonymous',
  provider: 'Email Security Provider',
};

const apiKey = process.env.EW_COVEO_API_KEY || '';

export const getAccessToken = async (organizationId: string): Promise<string> => {
  const payload = JSON.stringify({
    userIds: [anonymousUserId],
  });
  const requestOptions = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: payload,
  };

  const response = await fetch(
    `https://platform.cloud.coveo.com/rest/search/v2/token?organizationid=${organizationId}`,
    requestOptions
  );

  const data = await response.json();
  return data.token;
};

const coveoAccessTokenApi = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<NextApiResponse | void> => {
  if (req.method !== 'POST') {
    return res.status(405);
  }

  const organizationid = req.query['organizationid'];

  if (organizationid === undefined || Array.isArray(organizationid)) {
    return res.status(400);
  }

  const token = await getAccessToken(organizationid);

  return res.status(200).json({ token });
};

export default coveoAccessTokenApi;
