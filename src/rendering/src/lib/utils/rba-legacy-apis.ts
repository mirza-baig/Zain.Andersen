import type { NextApiRequest } from 'next';

export type LegacyApiResponse = {
  status: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  responseContent: any;
};

export const SendLegacyRequest = async (
  req: NextApiRequest,
  formData: FormData
): Promise<LegacyApiResponse> => {
  const requestOptions = {
    method: req.method,
    headers: {},
    body: req.body,
  };
  const authHeader = req.headers['authorization'];
  if (authHeader) {
    requestOptions.headers = { 'x-api-key': authHeader };
  }
  // check that formData is not empty
  if (!formData.entries().next().done) {
    requestOptions.body = formData;
  }

  const url = `${process.env.EW_ENTERPRISE_WEB_API_URL}${req.url}`;
  const response = await fetch(url, requestOptions);

  // catch when response has no body - e.g. 401 Unauthorized response
  let responseContent = null;
  try {
    responseContent = await response.json();
  } catch (error) {
    console.log(error);
  }
  const legacyResponse: LegacyApiResponse = {
    status: response.status,
    responseContent: responseContent,
  };
  return legacyResponse;
};
