import { coveoIndexingItemFetcher } from 'lib/coveo/indexing/item-fetcher';
import { graphQLCoveoIndexFolderService } from 'lib/coveo/indexing/item-fetcher/graphql-coveo-index-folder-service';
import { coveoIndexingItemProcessor } from 'lib/coveo/indexing/item-processor';
import type { NextApiRequest, NextApiResponse } from 'next';
import xml from 'xmlbuilder';
import { Blob } from 'buffer';

export const config = {
  api: {
    // If (uncompressed) size is >4MB this fails normally
    responseLimit: false,
  },
};

// If this API needs to be processed by middleware, update the matcher filters in middleware.ts to allow for the API path

async function getMainItemMap(): Promise<Record<string, string>> {
  const result = await graphQLCoveoIndexFolderService.fetchItem(
    '/sitecore/content/AndersenCorporation/Enterprise Global/Coveo Index Settings',
    'en' // The Index settings we are always getting in "en"
  );
  return result.reduce(
    (obj, curr) => ({ ...obj, [curr.name]: curr.id }),
    {} as Record<string, string>
  );
}

async function sendXml(res: NextApiResponse, path: string, language: string): Promise<void> {
  const rootItemMap = await getMainItemMap();
  const rootId: string | undefined = rootItemMap[path];

  // Get the indexable items
  const indexableItems = rootId ? await coveoIndexingItemFetcher.fetch(rootId, language) : [];

  // Run items through processors
  const processedItems = await Promise.all(
    indexableItems.map((indexableItem) => coveoIndexingItemProcessor.process(indexableItem))
  );

  // Convert to XML string
  const root = xml
    .create('urlset', { encoding: 'utf-8' })
    .att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9')
    .att('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance')
    .att('xmlns:coveo', 'https://www.coveo.com/en/company/about-us')
    .att(
      'xsi:schemaLocation',
      'http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd'
    );

  processedItems.forEach((sitemapItem) => {
    const url = root.ele('url');
    sitemapItem.serialize(url);
  });
  const data = root.end();

  // Ensure response is text/xml
  res.setHeader('Content-Type', 'text/xml;charset=utf-8');

  return res.status(200).send(data);
}

// Only needed for debugging to see size of
export const asyncForEach = async <T>(array: T[], func: (arg0: T) => Promise<void>) => {
  await array.reduce(async (promise, entry) => {
    // This line will wait for the last async function to finish.
    // The first iteration uses an already resolved Promise
    // so, it will immediately continue.
    await promise;
    await func(entry);
  }, Promise.resolve());
};
async function getSize(url: string) {
  const response = await fetch(url);
  const text = await response.text();
  const size = `${new Blob([text]).size / 1000}KB`;
  return size;
}
async function sendXmlIndex(res: NextApiResponse, debug: boolean): Promise<void> {
  // Convert to XML string
  const root = xml
    .create('sitemapindex', { encoding: 'utf-8' })
    .att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');

  const rootItemMap = await getMainItemMap();
  const paths = Object.keys(rootItemMap);
  await asyncForEach(paths, async (path) => {
    await asyncForEach(['en', 'en-CA'], async (language) => {
      const sitemap = root.ele('sitemap');
      const url = `${process.env.PUBLIC_URL}/coveo-sitemap.xml?path=${path}&language=${language}`;

      sitemap.ele('loc').text(url);
      if (debug) {
        const size = await getSize(url);
        sitemap.ele('size').text(size);
      }
    });
  });

  const data = root.end();

  // Ensure response is text/xml
  res.setHeader('Content-Type', 'text/xml;charset=utf-8');

  return res.status(200).send(data);
}

async function sendHtml(item: string, res: NextApiResponse): Promise<void> {
  res.setHeader('Content-Type', 'text/html;charset=utf-8');
  return res.status(200).send(`<html><head><title>${item}</title></head><body /></html>`);
}

const coveoSitemapApi = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const item = _req.query['item'];
  const path = _req.query['path'] as string;
  const language = _req.query['language'] as string;
  const debug = _req.query['debug'] as string;
  if (item) {
    if (Array.isArray(item)) {
      return sendHtml(item.join(' '), res);
    } else {
      return sendHtml(item, res);
    }
  } else {
    if (path) {
      return await sendXml(res, path, language);
    }
    return await sendXmlIndex(res, debug !== undefined);
  }
};

export default coveoSitemapApi;
