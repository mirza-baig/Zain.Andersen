import { SitecoreIds } from 'lib/constants';
import { normalizeSitecoreDateString } from 'lib/utils/string-utils';
import { IndexableItem, SitemapItem } from '../..';
import { checkHostNameInMediaURL } from 'lib/coveo/utils';

export class ProjectShowcaseProperties {
  order = 40;

  async exec(siteMapItem: SitemapItem, indexableItem: IndexableItem) {
    const basePageId =
      SitecoreIds.Foundation.AndersenWindows.BaseTemplates.Pages._BaseProjectShowcasePage.replace(
        /-/g,
        ''
      );
    if (indexableItem.allTemplateIds.indexOf(basePageId) == -1) {
      return siteMapItem;
    }

    const projectShowcaseTitle = indexableItem.fields.getTextField('projectShowcaseTitle');
    if (projectShowcaseTitle) {
      siteMapItem.metaData[projectShowcaseTitle.name] = projectShowcaseTitle.value;
    }

    const projectShowcaseDescription = indexableItem.fields.getRichTextField(
      'projectShowcaseDescription'
    );
    if (projectShowcaseDescription) {
      siteMapItem.metaData[projectShowcaseDescription.name] = projectShowcaseDescription.value;
    }

    const projectShowcaseDate = indexableItem.fields.getDateField('projectShowcaseDate');
    if (projectShowcaseDate && projectShowcaseDate.value) {
      const normalized = normalizeSitecoreDateString(projectShowcaseDate.value);
      siteMapItem.metaData[projectShowcaseDate.name] = new Date(normalized).toISOString();
    }

    const projectShowcaseThumbnail = indexableItem.fields.getImageField('projectShowcaseThumbnail');
    if (projectShowcaseThumbnail && projectShowcaseThumbnail.src) {
      const src = checkHostNameInMediaURL(projectShowcaseThumbnail.src);
      siteMapItem.metaData[projectShowcaseThumbnail.name] = src;
      siteMapItem.metaData[`${projectShowcaseThumbnail.name}_alt`] = projectShowcaseThumbnail.alt;
      siteMapItem.metaData[`${projectShowcaseThumbnail.name}_height`] =
        projectShowcaseThumbnail.height;
      siteMapItem.metaData[`${projectShowcaseThumbnail.name}_width`] =
        projectShowcaseThumbnail.width;
    }

    const interactive = indexableItem.fields.getMultilistField('interactive');
    if (interactive) {
      const value = interactive.targetItems?.map(
        (targetItem) => targetItem.fields.getTextField('title')?.value
      );
      if (value) {
        siteMapItem.metaData[interactive.name] = value.join(';');
      }
    }

    const projectType = indexableItem.fields.getMultilistField('projectType');
    if (projectType) {
      const value = projectType.targetItems?.map(
        (targetItem) => targetItem.fields.getTextField('title')?.value
      );
      if (value) {
        siteMapItem.metaData[projectType.name] = value.join(';');
      }
    }

    const buildingType = indexableItem.fields.getMultilistField('buildingType');
    if (buildingType) {
      const value = buildingType.targetItems?.map(
        (targetItem) => targetItem.fields.getTextField('title')?.value
      );
      if (value) {
        siteMapItem.metaData[buildingType.name] = value.join(';');
      }
    }

    const buildingSubType = indexableItem.fields.getMultilistField('buildingSubType');
    if (buildingSubType) {
      const value = buildingSubType.targetItems?.map(
        (targetItem) => targetItem.fields.getTextField('title')?.value
      );
      if (value) {
        siteMapItem.metaData[buildingSubType.name] = value.join(';');
      }
    }

    const region = indexableItem.fields.getMultilistField('region');
    if (region) {
      const value = region.targetItems?.map(
        (targetItem) => targetItem.fields.getTextField('title')?.value
      );
      if (value) {
        siteMapItem.metaData[region.name] = value.join(';');
      }
    }

    const homeStyle = indexableItem.fields.getMultilistField('homeStyle');
    if (homeStyle) {
      const value = homeStyle.targetItems?.map(
        (targetItem) => targetItem.fields.getTextField('title')?.value
      );
      if (value) {
        siteMapItem.metaData[homeStyle.name] = value.join(';');
      }
    }

    return siteMapItem;
  }
}

export const projectShowcasePropertiesPlugin = new ProjectShowcaseProperties();
