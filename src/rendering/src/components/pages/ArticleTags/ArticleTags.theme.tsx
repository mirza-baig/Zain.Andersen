// Lib
import { ThemeFile } from 'lib/context/ThemeContext';

export const ArticleTagsTheme: ThemeFile = {
  aw: {
    classes: {
      tagsWrapper: 'inline-flex gap-4 col-span-12 flex-wrap',
      tag: 'bg-black text-white text-body font-regular py-1 px-2 whitespace-nowrap hover:underline',
    },
  },
  rba: {
    classes: {
      tagsWrapper: 'inline-flex gap-3 col-span-12 flex-wrap',
      tag: 'border border-gray text-body font-regular p-1 whitespace-nowrap hover:underline',
    },
  },
};
