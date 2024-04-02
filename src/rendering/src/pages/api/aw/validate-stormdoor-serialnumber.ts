import { NextApiRequest, NextApiResponse } from 'next';

const endpoint = `${process.env.EW_MULESOFT_AW_API_URL}/api/web/stormdoor/v1.0/getstormdooritemnumber`;
const clientId = process.env.EW_MULESOFT_AW_API_CLIENT_ID;
const clientSecret = process.env.EW_MULESOFT_AW_API_CLIENT_SECRET;

const validateStormdoorSerialNumber = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<NextApiResponse | void> => {
  if (req.method !== 'POST') {
    return res.status(405);
  }

  const { serialNumber } = req.body;

  const serialNumberLetter = getSerialNumberLetterCode(serialNumber);
  const id = getSerialNumberInteger(serialNumber);

  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      client_id: clientId || '',
      client_secret: clientSecret || '',
    },
  };

  const validateSerialNumberURL = new URL(endpoint || '');
  validateSerialNumberURL.searchParams.append('serialnumberletter', serialNumberLetter);
  validateSerialNumberURL.searchParams.append('id', id);

  const response = await fetch(validateSerialNumberURL.toString(), requestOptions);

  const data = await response.json();

  return res.send(JSON.stringify(data));
};

const getSerialNumberLetterCode = (sSerialNumber: string) => {
  let retVal = ' ';
  if (sSerialNumber !== '') {
    if (isLetter(sSerialNumber)) {
      retVal = sSerialNumber.substring(0, 1);
    }
  }
  return retVal;
};

const getSerialNumberInteger = (sSerialNumber: string) => {
  let retVal = '';
  if (sSerialNumber !== '') {
    if (isNumeric(sSerialNumber)) {
      retVal = sSerialNumber;
    } else {
      if (
        isLetter(sSerialNumber) &&
        isNumeric(sSerialNumber.substring(1, sSerialNumber.length - 1))
      ) {
        retVal = sSerialNumber.substring(1, sSerialNumber.length - 1);
      }
    }
  }
  return retVal;
};

const isNumeric = (str: string) => {
  try {
    parseFloat(str);
  } catch (error) {
    return false;
  }
  return true;
};

const isLetter = (str: string) => {
  const c = str[0] as unknown as number;
  return isNaN(c);
};

export default validateStormdoorSerialNumber;
