import { LinkFieldValue, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ImageFieldValue } from '@sitecore-jss/sitecore-jss-react';

export type CategroyBarProps = {
  title: string | undefined;
  cta?: LinkFieldValue | undefined;
};

export type SubCategroyBarProps = {
  subTitle: string | undefined;
};

// we can ignore the below type-warning due to complex nature of datastructure used while creating proxy objects in comparisontables
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CategoryDataItem = string | undefined | any;

export type CategoryDataProps = Array<CategoryDataItem> & Partial<SubCategroyBarProps>;

export type SeriesTitle = {
  seriesIndex: number;
  url: LinkField;
  title: string;
  productTypeTitle?: string;
  description?: string;
  image?: ImageFieldValue;
  imageMobile?: ImageFieldValue;
  productName?: string;
};

export type ComparisonObjectProps = {
  [key: string]: CategroyBarProps;
} & {
  seriesTitles: Array<SeriesTitle | undefined>;
};
