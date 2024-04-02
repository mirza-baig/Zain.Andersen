import { IndexableItem, SitemapItem } from '../..';

const sitecoreStandardTemplates = [
  '1930BBEB7805471AA3BE4858AC7CF696', // Standard Template
  '646F4B34708C41C29F4B2661849777F3', // Advanced
  'F5BC7AE4F62D47CD9AFB2C9F85D8313B', // Appearance
  '18420296D8FC4D93A79E2A2B0367A92C', // Help
  '4D30906D0B494FA7969DBF90157357EA', // Layout
  '6EF073347FBA4845BF0ACD5B2000C75A', // Lifetime
  '38A2F441DB17403990E26A32F7A81706', // Indexing
  '823ECF5FAE7240B5BC87CB425FE7E5F6', // Insert Options
  'AF530C7B8B87458B80CE239D1E1B9E60', // Item Buckets
  '6495CF23DE9C48B79D3C05E2418B3CAE', // Publishing
  'AB811AF4393C4A46ACD781D30917E7F4', // Security
  '1597272CC8234AAC86F8CA9CC4D573B5', // Statistics
  '0AA6D3F8C9D0401F83AAA41433C24767', // Tagging
  '93F3A8FA9E5A4848A5AD42AAD11A4871', // Tasks
  '2491819E0C614F5A903CE10FCD9D302A', // Validators
  '06F366E6A7E6470B9EC9CD29A4F6C8E8', // Workflow
];

type CoveoIndexerSite = {
  name: string;
  language: string;
  hostName: string;
  targetHostName?: string;
};

export class SitecoreProperties {
  order = 0;
  sites = JSON.parse(process.env.EW_COVEO_INDEXER_SITES || '[]') as CoveoIndexerSite[];
  source = process.env.EW_COVEO_INDEXER_SOURCE || 'edge';

  async exec(siteMapItem: SitemapItem, indexableItem: IndexableItem) {
    const item = `database/${this.source}/ItemId/${indexableItem.id}/Language/${indexableItem.language}/Version/${indexableItem.version}`;
    let loc = `${process.env.PUBLIC_URL}/coveo-sitemap.xml?item=${item}`;
    let url = '';

    if (indexableItem.siteName && indexableItem.siteName != 'system') {
      const site = this.sites.find(
        (_) => _.name === indexableItem.siteName && _.language === indexableItem.language
      );

      if (site) {
        loc = `https://${site.hostName}${indexableItem.urlPath}`;
        url = loc;

        if (site.targetHostName) {
          url = `https://${site.targetHostName}${indexableItem.urlPath}`;
        }
      }
    }
    siteMapItem.loc = loc;
    siteMapItem.source = this.source;

    siteMapItem.id = indexableItem.id;
    siteMapItem.name = indexableItem.name;
    siteMapItem.language = indexableItem.language;
    siteMapItem.parentId = indexableItem.parent?.id ?? '';
    siteMapItem.siteName = indexableItem.siteName;
    siteMapItem.path = indexableItem.path;
    siteMapItem.url = url;
    siteMapItem.version = indexableItem.version;
    siteMapItem.templateId = indexableItem.templateId;
    siteMapItem.templateName = indexableItem.templateName;
    siteMapItem.allTemplateIds = indexableItem.allTemplateIds
      .filter((template) => sitecoreStandardTemplates.indexOf(template) == -1)
      .join(';');
    indexableItem.ancestors.reverse().push(indexableItem.id);
    siteMapItem.ancestors = indexableItem.ancestors.join(';');

    // Note: Last Updated is not currently pushed to experience edge. '_Base Page' has a custom Last Updated field, so that will be added there.
    //siteMapItem.lastModified = indexableItem.
    return siteMapItem;
  }
}

export const sitecorePropertiesPlugin = new SitecoreProperties();
