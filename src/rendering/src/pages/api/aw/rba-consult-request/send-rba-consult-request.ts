import { NextApiRequest, NextApiResponse } from 'next';

const rbaSubmitFormEndpointUrl = process.env.RBA_SUBMITFORM_ENDPOINT_URL as string;
const rbaAuthorizationKey = process.env.RBA_AUTHORIZATION_KEY as string;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sendRbaConsultRequest = async (reqBody: any) => {
  const parsed = JSON.parse(reqBody);

  const form_data = new FormData();
  form_data.append('FirstName', parsed.FirstName);
  form_data.append('LastName', parsed.LastName);
  form_data.append('EmailAddress', parsed.EmailAddress);
  form_data.append('PhoneNumber', parsed.PhoneNumber);
  form_data.append('Zipcode', parsed.Zip);
  form_data.append('FormType', parsed.FormType);
  form_data.append('ConsultationType', parsed.ConsultationType);
  form_data.append('RbASource', parsed.RbASource);
  form_data.append('RbABreakdown', parsed.RbABreakdown);
  form_data.append('Sender', parsed.Sender);

  const requestOptions = {
    method: 'POST',
    headers: {
      Authorization: `${rbaAuthorizationKey}`,
    },
    body: form_data,
  };

  const endPointUrl = `${rbaSubmitFormEndpointUrl}`;
  const response = await fetch(endPointUrl, requestOptions);
  const data = await response.json();
  return data;
};

const sendRbaConsultRequestApi = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<NextApiResponse | void> => {
  if (req.method !== 'POST') {
    return res.status(405);
  }

  const results = await sendRbaConsultRequest(req.body);
  const resStatus = results.status === 'OK' ? 200 : 400;

  return res.status(resStatus).json({ results });
};

export default sendRbaConsultRequestApi;
