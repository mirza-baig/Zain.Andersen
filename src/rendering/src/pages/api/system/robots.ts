import type { NextApiRequest, NextApiResponse } from 'next';
import { GraphQLRobotsService } from 'lib/robots';
//import { siteResolver } from 'lib/site-resolver';
import config from 'temp/config';
import { siteResolver } from 'lib/site-resolver';
import { getHostHeader } from 'lib/utils/api-request-utils';

// If this API needs to be processed by middleware, update the matcher filters in middleware.ts to allow for the API path

const robotsApi = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  // Ensure response is text/plain
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');

  // Disallow robots in lower environments
  if (process.env.NEXT_PUBLIC_EW_ENVIRONMENT != 'Production') {
    return res.status(200).send('User-agent: *\nDisallow: /');
  }

  // Resolve site based on hostname
  const hostName = getHostHeader(req);

  const site = siteResolver.getByHost(hostName);
  // create robots graphql service
  const robotsService = new GraphQLRobotsService({
    endpoint: config.graphQLEndpoint,
    apiKey: config.sitecoreApiKey,
    siteName: site.name,
  });

  const robotsResult = await robotsService.fetchRobots();

  return res.status(200).send(robotsResult);
};

export default robotsApi;
