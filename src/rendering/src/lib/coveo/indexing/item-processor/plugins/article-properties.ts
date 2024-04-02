import { SitecoreIds } from 'lib/constants';
import { normalizeSitecoreDateStringFormatted } from 'lib/utils/string-utils';

import { IndexableItem, SitemapItem } from '../..';

export class ArticleProperties {
  order = 30;

  async exec(siteMapItem: SitemapItem, indexableItem: IndexableItem) {
    if (
      indexableItem.allTemplateIds.indexOf(
        SitecoreIds.Foundation.AndersenWindows.BaseTemplates.Pages._BaseArticlePage.replace(
          /-/g,
          ''
        )
      ) === -1 &&
      indexableItem.allTemplateIds.indexOf(
        SitecoreIds.Foundation.RenewalbyAndersen.BaseTemplates.Pages._BaseArticlePage.replace(
          /-/g,
          ''
        )
      ) === -1
    ) {
      return siteMapItem;
    }

    const articleTitle = indexableItem.fields.getTextField('articleTitle');
    if (articleTitle) {
      siteMapItem.metaData[articleTitle.name] = articleTitle.value;
    }

    const articleDescription = indexableItem.fields.getRichTextField('articleDescription');
    if (articleDescription) {
      siteMapItem.metaData[articleDescription.name] = articleDescription.value;
    }

    const articleAuthor = indexableItem.fields.getTextField('articleAuthor');
    if (articleAuthor) {
      siteMapItem.metaData[articleAuthor.name] = articleAuthor.value;
    }

    const articleDate = indexableItem.fields.getDateField('articleDate');
    if (articleDate && articleDate.value) {
      const dateSitecore = normalizeSitecoreDateStringFormatted(articleDate.value);
      siteMapItem.metaData[articleDate.name] = dateSitecore;
    }

    const articleCategory = indexableItem.fields.getMultilistField('articleCategory');
    if (articleCategory) {
      const value = articleCategory.targetItems?.map(
        (targetItem) => targetItem.fields.getTextField('title')?.value
      );
      if (value) {
        siteMapItem.metaData[articleCategory.name] = value.join(';');
      }

      const firstCategory = articleCategory.targetItems?.[0]?.fields.getTextField('title')?.value;
      if (firstCategory) {
        siteMapItem.metaData[`${articleCategory.name}_display`] = firstCategory;
      }
    }

    const articlePublicTags = indexableItem.fields.getMultilistField('articlePublicTags');
    if (articlePublicTags) {
      const value = articlePublicTags.targetItems?.map(
        (targetItem) => targetItem.fields.getTextField('title')?.value
      );
      if (value) {
        siteMapItem.metaData[articlePublicTags.name] = value.join(';');
      }
    }

    const articlePrivateTags = indexableItem.fields.getMultilistField('articlePrivateTags');
    if (articlePrivateTags) {
      const value = articlePrivateTags.targetItems?.map(
        (targetItem) => targetItem.fields.getTextField('title')?.value
      );
      if (value) {
        siteMapItem.metaData[articlePrivateTags.name] = value.join(';');
      }
    }

    return siteMapItem;
  }
}

export const articlePropertiesPlugin = new ArticleProperties();
