import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import { SendLegacyRequest } from 'lib/utils/rba-legacy-apis';

// If this API needs to be processed by middleware, update the matcher filters in middleware.ts to allow for the API path

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const formData = new FormData();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: { fields: any; files: any } = await new Promise((resolve, reject) => {
    const form = formidable({});

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    form.parse(req, (err: any, fields: any, files: any) => {
      if (err) {
        reject({ err });
      }
      resolve({ fields, files });
    });
  });

  Object.entries(data.fields).forEach(([key, value]) =>
    formData.append(key, (value as Array<string>)[0])
  );
  const response = await SendLegacyRequest(req, formData);

  return res.status(response.status).json(response.responseContent);
};

export default handler;
