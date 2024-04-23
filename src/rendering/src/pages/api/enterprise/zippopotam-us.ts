import { NextApiRequest, NextApiResponse } from 'next';

const zippopotamUsApi = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<NextApiResponse | void> => {
  const zipCode = req.body;

  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const requestOptions = {
    method: 'GET',
    headers: {
      accept: 'text/plain',
    },
  };

  const response = await fetch(`https://api.zippopotam.us/us/${zipCode}`, requestOptions);
  const data = await response.json();
  return res.send(JSON.stringify(data));
};

export default zippopotamUsApi;
