import { getHostHeader } from 'lib/utils/api-request-utils';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token, userAction } = req.body;
  const secretKey = process.env.EW_RECAPTCHA_SECRET_KEY;
  const siteKey = process.env.NEXT_PUBLIC_EW_RECAPTCHA_SITE_KEY;
  const projectId = process.env.EW_RECAPTCHA_PROJECT_ID;

  try {
    const response = await fetch(
      `https://recaptchaenterprise.googleapis.com/v1/projects/${projectId}/assessments?key=${secretKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Referer: `${getHostHeader(req)}`,
        },
        body: JSON.stringify({
          event: {
            token: token,
            siteKey: siteKey,
            expectedAction: userAction,
          },
        }),
      }
    );
    if (response.ok) {
      const verificationResult = await response.json();
      res.json(verificationResult);
    } else {
      res.status(500).json({ error: 'Error verifying reCAPTCHA' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error verifying reCAPTCHA' });
  }
}
