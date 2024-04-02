import { Item } from '@sitecore-jss/sitecore-jss-nextjs';
import { getEnum } from './get-enum';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

export const getHeadingLevel = (defHeading: string, level?: Item): string => {
  const headingLevel = getEnum<HeadingLevel>(level) || defHeading;
  return headingLevel;
};
