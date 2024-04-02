import { Item } from '@sitecore-jss/sitecore-jss-nextjs';
import { getEnum } from './get-enum';

type ImagePositions = 'left' | 'right';

export const getImagePosition = (defaultPos: string, imagePos?: Item): string => {
  const imagePosition = getEnum<ImagePositions>(imagePos) || defaultPos;
  return imagePosition;
};
