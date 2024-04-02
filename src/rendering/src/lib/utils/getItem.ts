import { Item } from '@sitecore-jss/sitecore-jss-nextjs';
import { getEnum } from './get-enum';

// export const getItem = (item?: Item): Item => {
export const getItem = (item?: Item): Item => {
  const noitem = {} as unknown as Item;

  return getEnum<Item>(item) || noitem;
};
