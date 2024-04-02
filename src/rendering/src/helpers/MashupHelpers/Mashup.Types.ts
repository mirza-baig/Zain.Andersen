import { Field, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { Item } from '@sitecore-jss/sitecore-jss-nextjs';
import { Feature } from 'src/.generated/Feature.EnterpriseWeb.model';
import { Foundation } from 'src/.generated/Foundation.EnterpriseWeb.model';
import { ImagePrimaryProps } from 'src/helpers/Media/ImagePrimary';

export type MashupStyle = 'images-for-all' | 'feature-image-only' | 'no-images';
export type PageStyle = 'standard-page' | 'article-page' | 'project-showcase-page';

type OpenGraphMetaFields = 'openGraphTitle' | 'openGraphDescription';
type SiteSearchMetaFields = 'siteSearchEyebrow' | 'siteSearchHeadline' | 'siteSearchDescription';
type ProjectShowcaseMetaFields = 'projectShowcaseTitle' | 'projectShowcaseDescription';
type ArticleMetaFields = 'articleTitle' | 'articleDescription';

type MetaFields = {
  [key in
    | OpenGraphMetaFields
    | SiteSearchMetaFields
    | ProjectShowcaseMetaFields
    | ArticleMetaFields]?: Field<string>;
};

type ImageFields = {
  [key in 'featuredImage' | 'siteSearchImage' | 'primaryImage' | 'primaryImageMobile']?: ImageField;
};

export type ResultItem = Foundation.EnterpriseWeb.Enterprise.FieldSets.Routes.PageProperties &
  Item & {
    fields: {
      articleCategory?: Array<Feature.EnterpriseWeb.Enterprise.Data.Search.FacetTag>;
      primaryImageMobileFocusArea?: Item;
    } & MetaFields &
      ImageFields;
  };

export type ResultItems = {
  fields: {
    resultItems: Array<ResultItem>;
  };
};

export type ImageForAllProps =
  Feature.EnterpriseWeb.Enterprise.Components.General.PageMashup.PageMashup &
    ResultItems & { fields: { mashupStyle: MashupStyle } };

export type FeaturedImageOnlyProps =
  Feature.EnterpriseWeb.Enterprise.Components.General.PageMashup.PageMashup &
    ResultItems & { fields: { mashupStyle: MashupStyle } };

export type ItemData = {
  eyebrow: string;
  headline: string;
  description: string;
  image: ImagePrimaryProps;
  cta: Foundation.EnterpriseWeb.Enterprise.FieldSets.Cta1;
};
