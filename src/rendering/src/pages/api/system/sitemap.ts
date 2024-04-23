import type { NextApiRequest, NextApiResponse } from 'next';
import { groupBy } from 'lodash';
import xml from 'xmlbuilder';
import { normalizeSitecoreDateString } from 'lib/utils/string-utils';
import { siteResolver } from 'lib/site-resolver';
import { EwSiteInfo } from 'lib/site/ew-site-info';
import { getHostHeader } from 'lib/utils/api-request-utils';
import { sitemapXmlPathFetcher } from 'lib/sitemap-xml';
import { SitemapPath } from 'lib/sitemap-xml';

export const config = {
  api: {
    // If (uncompressed) size is >4MB this fails normally
    responseLimit: false,
  },
};

// If this API needs to be processed by middleware, update the matcher filters in middleware.ts to allow for the API path

const sitemapApi = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<NextApiResponse | void> => {
  // Set the XML header
  res.setHeader('Content-Type', 'text/xml');

  // Set the cache control header
  const maxage = process.env.NEXT_PUBLIC_EW_ENVIRONMENT != 'Production' ? 10 : 300;
  const staleWhileRevalidate = process.env.NEXT_PUBLIC_EW_ENVIRONMENT != 'Production' ? 59 : 600;
  res.setHeader(
    'Cache-Control',
    `public, s-maxage=${maxage}, stale-while-revalidate=${staleWhileRevalidate}`
  );

  // Resolve site based on hostname
  const hostName = getHostHeader(req);

  const site = siteResolver.getByHost(hostName) as EwSiteInfo;

  // Get the sitemap paths
  const paths = await sitemapXmlPathFetcher.fetch(site);

  const root = xml
    .create('urlset', { encoding: 'UTF-8' })
    .att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9')
    .att('xmlns:xhtml', 'http://www.w3.org/TR/xhtml11/xhtml11_schema.html')
    .att('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance')
    .att(
      'xsi:schemaLocation',
      'http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.w3.org/TR/xhtml11/xhtml11_schema.html http://www.w3.org/2002/08/xhtml/xhtml1-strict.xsd'
    );

  // Combine both and group them by path, so we eliminate duplicates
  const pagesGroupedByUrl = groupBy(paths, (x) => x.path);

  Object.values(pagesGroupedByUrl).map((items) => {
    const byLang = groupBy(items, (x) => x.language);

    const enItem = byLang['en'] ? byLang['en'][0] : null;
    const caItem = byLang['en-CA'] ? byLang['en-CA'][0] : null;

    const enUrl = enItem ? `https://${site?.targetHostName}${enItem.path}` : null;
    const caUrl = caItem ? `https://${site?.targetHostName}${caItem.path}` : null;

    const createEntry = (item: SitemapPath | null) => {
      if (!item) {
        return;
      }
      const defaultUrl = (item === enItem ? enUrl : caUrl) ?? '';

      const url = root.ele('url');

      url.ele('loc').text(defaultUrl);
      if (item.lastUpdated) {
        url.ele('lastmod').text(normalizeSitecoreDateString(item.lastUpdated));
      }
      url.ele('priority').text(item.priority);
      url.ele('changefreq').text(item.changeFrequency);

      if (enUrl && caUrl) {
        url.ele('xhtml:link', {
          rel: 'alternate',
          hreflang: 'x-default',
          href: enUrl,
        });
        url.ele('xhtml:link', {
          rel: 'alternate',
          hreflang: 'en',
          href: enUrl,
        });
        url.ele('xhtml:link', {
          rel: 'alternate',
          hreflang: 'en-CA',
          href: caUrl,
        });
      }
    };

    // Create separate root entries for each language per this example:
    // https://developers.google.com/search/docs/specialty/international/localized-versions#example_2
    createEntry(enItem);
    createEntry(caItem);
  });

  return res.status(200).send(root.end());
};

export default sitemapApi;
