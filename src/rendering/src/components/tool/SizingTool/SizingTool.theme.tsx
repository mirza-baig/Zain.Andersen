// Lib
import { getBreadcrumbTheme } from 'components/search/Search/Search.Breadcrumb.theme';
import { getFacetsTheme } from 'components/search/Search/Search.Facets.theme';
import { getPagerTheme } from 'components/search/Search/Search.Pager.theme';
import { ThemeFile } from 'lib/context/ThemeContext';

export const SizingToolTheme: ThemeFile = {
  aw: {
    classes: {
      /** Insert Theme classes here **/
      facetClasses: getFacetsTheme('aw'),
      breadcrumbClasses: getBreadcrumbTheme('aw'),
      querySummaryClasses: 'font-sans text-small font-regular',
      pagerClasses: getPagerTheme('aw'),
    },
  },
  rba: {
    classes: {
      /** Insert Theme classes here **/
    },
  },
};
