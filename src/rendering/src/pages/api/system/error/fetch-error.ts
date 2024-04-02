import { sitecorePagePropsFactory } from 'lib/page-props-factory';
import { NextApiRequest, NextApiResponse } from 'next';

/** The error page is used both for server-side and client-side errors.
 *  When running client-side we don't have direct access to Sitecore nor API key for edge
 *  So we have a server-side route do the data fetching to render client-side.
 *  */
const fetch500ErrorPageContent = async (_req: NextApiRequest, res: NextApiResponse) => {
  const props = await sitecorePagePropsFactory.create({
    params: {
      path: ['_500'],
    },
  });

  res.status(200).json(props);
};

export default fetch500ErrorPageContent;
