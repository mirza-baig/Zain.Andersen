import type { NextApiRequest, NextApiResponse } from 'next';
import { getDataSourceFields } from 'lib/utils/graphql-utils';

const fetchDataSource = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const data = await getDataSourceFields(
    req.query.datasource as string,
    req.query.locale as string
  );

  // Recommended Vercel settings.  Used by Vercel and potentially other CDNs
  res.setHeader('CDN-Cache-Control', 's-maxage=1, stale-while-revalidate=59');

  // Cache settings for the browser.  Always revalidate but serve stale response for up to 5 minutes
  res.setHeader('Cache-Control', 'max-age=0, stale-while-revalidate=300');

  // NOTE: "max-age" with a dash and "s-maxage" without a dash is correct.  Not sure who decided to spec it that way.

  return res.status(200).json(data);
};

export default fetchDataSource;
